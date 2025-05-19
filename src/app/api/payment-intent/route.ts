import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

// Debug: check if env variable is being read correctly
// console.log(
//   "✅ STRIPE_SECRET_KEY present:",
//   !!process.env.NEXT_STRIPE_PUBLIC_KEY
// );

const stripe = new Stripe(process.env.NEXT_STRIPE_PUBLIC_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    // console.log("🟢 Received payment amount:", amount);

    if (!amount || typeof amount !== "number") {
      return NextResponse.json(
        { error: "Payment amount is required and must be a number." },
        { status: 400 }
      );
    }

    // IMPORTANT: Stripe expects amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Example: 1000 = $10.00
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Debug: Log client secret
    // console.log("🟢 Created PaymentIntent:", paymentIntent.id);

    return NextResponse.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    // console.error("❌ Stripe PaymentIntent creation failed:", error);

    const errorMessage = (error as Error).message || "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
