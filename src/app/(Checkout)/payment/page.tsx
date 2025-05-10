'use client';
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';
import Paypal from '@/app/components/Paypal';
import Script from 'next/script';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fa] font-sans text-gray-800">
      {/* Header */}
      <div className="bg-[#0f172a] py-12 text-center text-white shadow-md">
        <h1 className="text-4xl font-semibold tracking-wide">Checkout</h1>
        <div className="flex justify-center items-center gap-2 pt-4 text-lg text-gray-300">
          <Link href="/billing-address">
            <span className="font-medium text-gray-400">Billing Information</span>
          </Link>
          <ArrowRight className="w-5 h-5" />
          <span className="text-white font-bold">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-11/12 max-w-6xl mx-auto mt-12 flex flex-col md:flex-row gap-10">
        {/* Order Summary */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-3 border-gray-200 text-gray-900">
              Order Summary
            </h2>
            <div className="text-sm text-gray-600 mb-6">
              <p>
                <span className="text-gray-900 font-medium">Product:</span>{' '}
                Tesla Model Y Premium Interior Package
              </p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-base">
                <span>Subtotal</span>
                <span className="text-gray-900 font-medium">1,434</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Total</span>
                <span className="text-blue-700 font-bold text-lg">3,434</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-0.5" />
                <p>
                  Your personal data will be used to process your order, support your experience,
                  and for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 py-10 px-6 rounded-2xl shadow-inner">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-md font-semibold mb-4 text-gray-800">Pay with PayPal</h3>
            <Paypal />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
