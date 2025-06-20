// import { type NextRequest, NextResponse } from "next/server"

// const PAYPAL_WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID!
// const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!
// const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!
// const PAYPAL_BASE_URL =
//   process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

// async function getPayPalAccessToken() {
//   const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")

//   const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${auth}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: "grant_type=client_credentials",
//   })

//   const data = await response.json()
//   return data.access_token
// }

// async function verifyWebhookSignature(headers: any, body: string, webhookId: string) {
//   const accessToken = await getPayPalAccessToken()

//   const verificationData = {
//     auth_algo: headers["paypal-auth-algo"],
//     cert_id: headers["paypal-cert-id"],
//     transmission_id: headers["paypal-transmission-id"],
//     transmission_sig: headers["paypal-transmission-sig"],
//     transmission_time: headers["paypal-transmission-time"],
//     webhook_id: webhookId,
//     webhook_event: JSON.parse(body),
//   }

//   const response = await fetch(`${PAYPAL_BASE_URL}/v1/notifications/verify-webhook-signature`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(verificationData),
//   })

//   const verification = await response.json()
//   return verification.verification_status === "SUCCESS"
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.text()
//     const headers = Object.fromEntries(request.headers.entries())

//     // Verify webhook signature
//     const isValid = await verifyWebhookSignature(headers, body, PAYPAL_WEBHOOK_ID)

//     if (!isValid) {
//       console.error("Invalid webhook signature")
//       return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
//     }

//     const event = JSON.parse(body)

//     // Handle different webhook events
//     switch (event.event_type) {
//       case "PAYMENT.CAPTURE.COMPLETED":
//         console.log("Payment completed:", event.resource)
//         // Handle successful payment
//         // Update your database, send confirmation emails, etc.
//         break

//       case "PAYMENT.CAPTURE.DENIED":
//         console.log("Payment denied:", event.resource)
//         // Handle denied payment
//         break

//       case "PAYMENT.CAPTURE.REFUNDED":
//         console.log("Payment refunded:", event.resource)
//         // Handle refund
//         break

//       default:
//         console.log("Unhandled webhook event:", event.event_type)
//     }

//     return NextResponse.json({ received: true })
//   } catch (error) {
//     console.error("Webhook error:", error)
//     return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
//   }
// }

import { type NextRequest, NextResponse } from "next/server"

const PAYPAL_WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID // Optional - can be undefined
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID!
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!
const PAYPAL_BASE_URL =
  process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

async function getPayPalAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  })

  const data = await response.json()
  return data.access_token
}

async function verifyWebhookSignature(headers: any, body: string, webhookId: string) {
  const accessToken = await getPayPalAccessToken()

  const verificationData = {
    auth_algo: headers["paypal-auth-algo"],
    cert_id: headers["paypal-cert-id"],
    transmission_id: headers["paypal-transmission-id"],
    transmission_sig: headers["paypal-transmission-sig"],
    transmission_time: headers["paypal-transmission-time"],
    webhook_id: webhookId,
    webhook_event: JSON.parse(body),
  }

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/notifications/verify-webhook-signature`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(verificationData),
  })

  const verification = await response.json()
  return verification.verification_status === "SUCCESS"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headers = Object.fromEntries(request.headers.entries())

    // Skip signature verification if webhook ID is not configured
    if (PAYPAL_WEBHOOK_ID) {
      const isValid = await verifyWebhookSignature(headers, body, PAYPAL_WEBHOOK_ID)

      if (!isValid) {
        console.error("Invalid webhook signature")
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
      }
    } else {
      console.warn("Webhook signature verification skipped - PAYPAL_WEBHOOK_ID not configured")
    }

    const event = JSON.parse(body)

    // Handle different webhook events
    switch (event.event_type) {
      case "PAYMENT.CAPTURE.COMPLETED":
        console.log("Payment completed:", event.resource)
        // Handle successful payment
        // Update your database, send confirmation emails, etc.
        break

      case "PAYMENT.CAPTURE.DENIED":
        console.log("Payment denied:", event.resource)
        // Handle denied payment
        break

      case "PAYMENT.CAPTURE.REFUNDED":
        console.log("Payment refunded:", event.resource)
        // Handle refund
        break

      default:
        console.log("Unhandled webhook event:", event.event_type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebaseAdmin";

// export async function POST(request: Request) {

//   const currentTimeInPakistan = new Date().toLocaleString("en-US", {
//   timeZone: "Asia/Karachi",
// })

//   try {
//     const body = await request.json();
//     const { details, cart } = body;

//     const docRef = await db.collection("transactions").add({
//       payerEmail: details?.payer?.email_address || "Unknown",
//       payerName: `${details?.payer?.name?.given_name || ""} ${details?.payer?.name?.surname || ""}`,
//       amount: details?.purchase_units?.[0]?.amount?.value || "0.00",
//       currency: details?.purchase_units?.[0]?.amount?.currency_code || "USD",
//       status: details?.status || "UNKNOWN",
//       orderId: details?.id,
//       time: currentTimeInPakistan,
//       cartItems: cart || [],
//     });

//     console.log("Transaction saved with ID:", docRef.id);
//     return NextResponse.json({ message: "Transaction saved", id: docRef.id });
//   } catch (error) {
//     console.error("Error saving transaction:", error);
//     return NextResponse.json({ message: "Failed to save transaction", error }, { status: 500 });
//   }
// }
