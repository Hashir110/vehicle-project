"use client";
import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (!window.paypal) return;

    if (document.getElementById("paypal-button-container")) {
      document.getElementById("paypal-button-container")!.innerHTML = "";
    }

    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "blue",
          shape: "pill",
          label: "paypal",
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: totalAmount.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then(async (details: any) => {
            toast.success("Payment successfull ! ");
            try {
              const response = await fetch("/api/save-transaction", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ details, cart }),
              });

              const result = await response.json();
              console.log("API response:", result);
              router.push("/payment-success");
              clearCart();
            } catch (error) {
              console.error("Failed to save transaction:", error);
              router.push("/payment-failed");
            }
          });
        },
        onError: (err: any) => {
          console.error("PayPal Checkout onError", err);
        },
      })
      .render("#paypal-button-container");

    return () => {
      if (window.paypal) {
        window.paypal.Buttons().close();
      }
    };
  }, []);

  return <div id="paypal-button-container" />;
};

export default PayPalButton;
