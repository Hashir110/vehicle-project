"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = () => {
  useEffect(() => {
    if (!window.paypal) return;

    if (document.getElementById("paypal-button-container")) {
      document.getElementById("paypal-button-container")!.innerHTML = "";
    }

    window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'pill',
        label: 'paypal',
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10.00", 
              },
            },
          ],
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert("Payment successful: " + details.payer.name.given_name);
        });
      },
      onError: (err: any) => {
        console.error("PayPal Checkout onError", err);
      },
    }).render("#paypal-button-container");

    return () => {
      if (window.paypal) {
        window.paypal.Buttons().close();
      }
    };
  }, []); 

  return <div id="paypal-button-container" />;
};

export default PayPalButton;
