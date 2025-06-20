// import { useEffect, useRef } from 'react';

// const PayPalButton = () => {
//   const paypalRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const loadScript = async () => {
//       if (typeof window === 'undefined') return;

//       if (!window.paypal) {
//         const script = document.createElement('script');
//         script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
//         script.async = true;
//         script.onload = renderPayPalButtons;
//         document.body.appendChild(script);
//       } else {
//         renderPayPalButtons();
//       }
//     };

//     const renderPayPalButtons = () => {
//       window.paypal.Buttons({
//         createOrder: async () => {
//           const res = await fetch('/api/paypal/create-order', { method: 'POST' });
//           const data = await res.json();
//           return data.id;
//         },
//         onApprove: async (data: any) => {
//           const res = await fetch(`/api/paypal/capture-order?orderID=${data.orderID}`, {
//             method: 'POST',
//           });
//           const details = await res.json();
//           alert(`Transaction completed by ${details.payer.name.given_name}`);
//         }
//       }).render(paypalRef.current!);
//     };

//     loadScript();
//   }, []);

//   return <div ref={paypalRef}></div>;
// };

// export default PayPalButton;



// "use client";
// import React, { useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// declare global {
//   interface Window {
//     paypal: any;
//   }
// }

// const PayPalButton = () => {
//   const { cart, clearCart } = useCart();
//   const router = useRouter();
//   const totalAmount = cart.reduce((total, item) => total + item.price, 0);
//   useEffect(() => {
//     if (!window.paypal) return;

//     if (document.getElementById("paypal-button-container")) {
//       document.getElementById("paypal-button-container")!.innerHTML = "";
//     }

//     window.paypal
//       .Buttons({
//         style: {
//           layout: "vertical",
//           color: "blue",
//           shape: "pill",
//           label: "paypal",
//         },
//         createOrder: (data: any, actions: any) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: totalAmount.toFixed(2),
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data: any, actions: any) => {
//           return actions.order.capture().then(async (details: any) => {
//             toast.success("Payment successfull ! ");
//             try {
//               const response = await fetch("/api/save-transaction", {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ details, cart }),
//               });

//               const result = await response.json();
//               console.log("API response:", result);
//               router.push("/payment-success");
//               clearCart();
//             } catch (error) {
//               console.error("Failed to save transaction:", error);
//               router.push("/payment-failed");
//             }
//           });
//         },
//         onError: (err: any) => {
//           console.error("PayPal Checkout onError", err);
//         },
//       })
//       .render("#paypal-button-container");

//     return () => {
//       if (window.paypal) {
//         window.paypal.Buttons().close();
//       }
//     };
//   }, []);

//   return <div id="paypal-button-container" />;
// };

// export default PayPalButton;


"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    paypal: {
      Buttons: (options: any) => {
        render: (container: HTMLElement) => void;
      };
    };
  }
}

export default function PayPalCheckout() {
  const paypalRef = useRef<HTMLDivElement>(null)
  const [amount, setAmount] = useState("10.00")
  const [currency, setCurrency] = useState("USD")
  const [isLoading, setIsLoading] = useState(false)
  const [paypalLoaded, setPaypalLoaded] = useState(false)

  useEffect(() => {
    const loadPayPalScript = () => {
      if (window.paypal) {
        setPaypalLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=${currency}&intent=capture`
      script.async = true
      script.onload = () => setPaypalLoaded(true)
      script.onerror = () => console.error("PayPal SDK failed to load")
      document.body.appendChild(script)
    }

    loadPayPalScript()
  }, [currency])

  useEffect(() => {
    if (paypalLoaded && paypalRef.current) {
      // Clear previous PayPal buttons
      paypalRef.current.innerHTML = ""

      window.paypal
        .Buttons({
          createOrder: async (data: any, actions: any) => {
            try {
              const response = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  amount: Number.parseFloat(amount),
                  currency: currency,
                }),
              })

              const order = await response.json()
              return order.id
            } catch (error) {
              console.error("Error creating order:", error)
              throw error
            }
          },
          onApprove: async (data: any, actions: any) => {
            try {
              setIsLoading(true)
              const response = await fetch("/api/paypal/capture-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              })

              const details = await response.json()

              if (details.status === "COMPLETED") {
                alert(`Transaction completed by ${details.payer.name.given_name}!`)
                // Handle successful payment here
                console.log("Payment successful:", details)
              }
            } catch (error) {
              console.error("Error capturing order:", error)
              alert("Payment failed. Please try again.")
            } finally {
              setIsLoading(false)
            }
          },
          onError: (err: any) => {
            console.error("PayPal error:", err)
            alert("An error occurred with PayPal. Please try again.")
            setIsLoading(false)
          },
          onCancel: (data: any) => {
            console.log("Payment cancelled:", data)
            alert("Payment was cancelled.")
            setIsLoading(false)
          },
          style: {
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal",
          },
        })
        .render(paypalRef.current)
    }
  }, [paypalLoaded, amount, currency])

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="text-center p-6 border-b border-gray-100">
        <div className="flex items-center justify-center mb-3">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
        </div>
        <p className="text-gray-600 text-sm">Complete your purchase securely with PayPal</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Order Summary */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="font-medium text-gray-900">Order Details</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label htmlFor="amount" className="text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-20 px-2 py-1 text-right border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CAD">CAD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200"></div>

          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total</span>
            <span>
              {currency} {amount}
            </span>
          </div>
        </div>

        {/* PayPal Button Container */}
        <div className="space-y-4">
          <div className="text-center text-sm text-gray-600">Pay securely with PayPal</div>

          {isLoading && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
              <p className="mt-2 text-sm text-gray-600">Processing payment...</p>
            </div>
          )}

          <div ref={paypalRef} className={`min-h-[50px] ${isLoading ? "opacity-50 pointer-events-none" : ""}`} />

          {!paypalLoaded && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
              <p className="mt-2 text-sm text-gray-600">Loading PayPal...</p>
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <span>Your payment information is secure and encrypted</span>
        </div>
      </div>
    </div>
  )
}
