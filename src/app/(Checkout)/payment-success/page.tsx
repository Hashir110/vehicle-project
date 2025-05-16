"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentSuccessPage() {
  const [animateCheck, setAnimateCheck] = useState(false)
  const [orderReference, setOrderReference] = useState<string | null>(null)

  useEffect(() => {
    // Trigger check animation
    setTimeout(() => {
      setAnimateCheck(true)
    }, 300)

    // Generate order reference on client only
    const randomRef = "ORD-" + Math.floor(100000 + Math.random() * 900000)
    setOrderReference(randomRef)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="pt-12 pb-8 flex justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-green-50 rounded-full ${
                  animateCheck ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
              ></div>
              <CheckCircle
                className={`w-16 h-16 text-green-500 z-10 ${
                  animateCheck ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                style={{
                  transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transitionDelay: "0.1s",
                }}
              />
            </div>
          </div>

          <div className="px-8 pb-12 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful</h1>
            <p className="text-gray-500 mb-6">Thank you for your purchase. Your car report is ready.</p>

            {orderReference && (
              <div className="inline-block bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-500">
                Order Reference: {orderReference}
              </div>
            )}
            <Link href={'/'}>
            <button className="bg-green-500 w-full h-10 text-white rounded-3xl mt-4 cursor-pointer">Go to HomePage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
