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

    return data.access_token
  } catch (error) {
    console.error("Error getting PayPal access token:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json()

    console.log("Capturing PayPal order:", orderID)

    if (!orderID) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 })
    }

    // Validate environment variables
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      console.error("Missing PayPal credentials")
      return NextResponse.json({ error: "PayPal configuration error" }, { status: 500 })
    }

    const accessToken = await getPayPalAccessToken()

    const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": `capture-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // Unique request ID
      },
    })

    const captureData = await response.json()

    if (!response.ok) {
      console.error("PayPal Capture Error:", {
        status: response.status,
        statusText: response.statusText,
        error: captureData,
      })

      return NextResponse.json(
        {
          error: captureData.message || "Failed to capture PayPal order",
          details: captureData.details || [],
          debug: {
            status: response.status,
            paypalError: captureData,
          },
        },
        { status: response.status },
      )
    }

    // Here you can save the transaction details to your database
    console.log("Payment captured successfully:", {
      orderId: orderID,
      captureId: captureData.id,
      status: captureData.status,
      amount: captureData.purchase_units?.[0]?.payments?.captures?.[0]?.amount,
    })

    return NextResponse.json(captureData)
  } catch (error) {
    console.error("Error capturing PayPal order:", error)
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
