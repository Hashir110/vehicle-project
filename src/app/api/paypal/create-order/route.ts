import { type NextRequest, NextResponse } from "next/server"

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!
const PAYPAL_BASE_URL =
  process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

async function getPayPalAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")

  try {
    const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("PayPal auth failed:", response.status, errorText)
      throw new Error(`PayPal authentication failed: ${response.status} - ${errorText}`)
    }

    const data = await response.json()

    if (!data.access_token) {
      console.error("No access token received:", data)
      throw new Error("No access token received from PayPal")
    }

    console.log("PayPal access token obtained successfully")
    return data.access_token
  } catch (error) {
    console.error("Error getting PayPal access token:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "USD" } = await request.json()

    console.log("Creating PayPal order:", { amount, currency, environment: process.env.NODE_ENV })

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    // Validate environment variables
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      console.error("Missing PayPal credentials")
      return NextResponse.json({ error: "PayPal configuration error" }, { status: 500 })
    }

    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      console.error("Missing NEXT_PUBLIC_BASE_URL")
      return NextResponse.json({ error: "Base URL configuration error" }, { status: 500 })
    }

    const accessToken = await getPayPalAccessToken()

    const orderData = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
          description: "Purchase from Your Store",
        },
      ],
      application_context: {
        brand_name: "Your Store Name",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      },
    }

    console.log("Sending order data to PayPal:", JSON.stringify(orderData, null, 2))

    const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // Unique request ID
      },
      body: JSON.stringify(orderData),
    })

    const order = await response.json()

    if (!response.ok) {
      console.error("PayPal API Error:", {
        status: response.status,
        statusText: response.statusText,
        error: order,
      })

      return NextResponse.json(
        {
          error: order.message || "Failed to create PayPal order",
          details: order.details || [],
          debug: {
            status: response.status,
            paypalError: order,
          },
        },
        { status: response.status },
      )
    }

    console.log("PayPal order created successfully:", order.id)
    return NextResponse.json(order)
  } catch (error) {
    console.error("Error creating PayPal order:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
        debug: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 },
    )
  }
}
