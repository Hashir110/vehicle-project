'use client';

import React , { useState , useEffect} from 'react';
import { XCircle } from 'lucide-react';
import Link from 'next/link';



const PaymetFailed = () => {
    const [animateIcon , setAnimateIcon] = useState(false)

    useEffect(()=> {
        const timer =  setTimeout(()=> {
             setAnimateIcon(true)
        }, 300)
    })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        {/* Failed Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Failed Icon */}
          <div className="pt-12 pb-8 flex justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-red-50 rounded-full ${
                  animateIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{
                  transition:
                    "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              ></div>
              <XCircle
                className={`w-16 h-16 text-red-500 z-10 ${
                  animateIcon ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                style={{
                  transition:
                    "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transitionDelay: "0.1s",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-12 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Failed
            </h1>
            <p className="text-gray-500 mb-6">
              We couldn't process your payment. Please check your payment
              details and try again.
            </p>
            <Link href={"/payment"}>
              <button className="bg-red-500 w-full h-10 text-white rounded-3xl mb-4 hover:cursor-pointer font-bold text-xl">
                Try Again
              </button>
            </Link>

            {/* Error Code - Minimal but helpful */}
            <div className="inline-block bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-500">
              Error Code: PYMT-3021
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}

export default PaymetFailed