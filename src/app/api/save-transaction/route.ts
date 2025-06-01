import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { details, cart } = body;

    const docRef = await db.collection("transactions").add({
      payerEmail: details?.payer?.email_address || "Unknown",
      payerName: `${details?.payer?.name?.given_name || ""} ${details?.payer?.name?.surname || ""}`,
      amount: details?.purchase_units?.[0]?.amount?.value || "0.00",
      currency: details?.purchase_units?.[0]?.amount?.currency_code || "USD",
      status: details?.status || "UNKNOWN",
      orderId: details?.id,
      time: new Date().toISOString(),
      cartItems: cart || [],
    });

    console.log("Transaction saved with ID:", docRef.id);
    return NextResponse.json({ message: "Transaction saved", id: docRef.id });
  } catch (error) {
    console.error("Error saving transaction:", error);
    return NextResponse.json({ message: "Failed to save transaction", error }, { status: 500 });
  }
}
