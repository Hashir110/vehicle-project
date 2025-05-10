import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0f172a] py-10 text-center text-white">
        <h1 className="font-bold text-4xl">Checkout Page</h1>
        <div className="flex justify-center items-center pt-4 text-lg">
          <h3 className="font-semibold">Billing Information</h3>
          <ArrowRight className="w-4 h-4 mx-2" />
       <Link href={'/payment'}><h3 className="font-light text-gray-200">Payment</h3></Link>
        </div>
      </div>

      <div className="w-11/12 md:w-3/4 mx-auto mt-10">
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 mb-4">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="123 Main St, Apartment 4B"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <input
                id="country"
                type="text"
                placeholder="Enter your country"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="ZipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ZipCode
              </label>
              <input
                id="ZipCode"
                type="text"
                placeholder="Enter your ZipCode"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="Phone Number"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="Phone Number"
                type="text"
                placeholder="Enter your Phone Number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md w-full transition"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
