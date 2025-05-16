"use client";
import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
interface StripeProps {
  total: number | null;
}

const Stripe = ({ total }: StripeProps) => {
  const { clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  useEffect(() => {
    if (!total) return;
    const fetchClientSecret = async () => {
      const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total ? total * 100 : 0 }),
      });
      const data = await response.json();
      setClientSecret(data.client_secret);
    };
    fetchClientSecret();
  }, [total]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      setLoading(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      setLoading(false);
      return;
    }
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      { payment_method: { card } }
    );
    if (error) {
      router.push("/payment-failed");
      setLoading(false);
    } else {
      router.push("/payment-success");
      clearCart();
      setLoading(false);
      // Handle successful payment here (e.g., show a success message, redirect, etc.)
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Card Information
          </p>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-sm font-medium text-gray-700">
            Total Amount
          </span>
          <span className="text-lg font-bold text-red-600">${total}</span>
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`mt-4 w-full py-3 rounded-lg text-white font-semibold ${
            !stripe || loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } transition duration-200`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default Stripe;
