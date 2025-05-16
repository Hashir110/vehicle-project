"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ use the latest version
import { toast } from "react-toastify";

interface FormData {
  first_name: string;
  email: string;
}

const Page = () => {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    // last_name: "",
    email: "",
    // address: "",
    // city: "",
    // country: "",
    // zipcode: "",
    // phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);
    validateForm(updatedFormData);
  };

  const validateForm = (data: FormData): void => {
    // const phoneOnlyNumbers = data.phone.replace(/\D/g, "");

    const isValid: boolean =
      data.first_name.trim() !== "" &&
      // data.last_name.trim() !== "" &&
      data.email.trim() !== "";
    // data.address.trim() !== "" &&
    // data.city.trim() !== "" &&
    // data.country.trim() !== "" &&
    // data.zipcode.trim() !== "" &&
    // phoneOnlyNumbers.length > 0;

    setIsFormValid(isValid);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_ACC_ID!
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Form submitted successfully!");
        setFormData({
          first_name: "",
          // last_name: "",
          email: "",
          // address: "",
          // city: "",
          // country: "",
          // zipcode: "",
          // phone: "",
        });
        setIsLoading(false);
        router.push("/payment");
      });

    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0f172a] py-10 text-center text-white">
        <h1 className="font-bold text-4xl">Checkout Page</h1>
        <div className="flex justify-center items-center pt-4 text-lg">
          <h3 className="font-semibold">Billing Information</h3>
          <ArrowRight className="w-4 h-4 mx-2" />
          <h3 className="font-medium text-gray-400">Payment</h3>
        </div>
      </div>

      <div className="w-11/12 md:w-3/4 mx-auto mt-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col  gap-6 mb-4">
            <div className="w-full ">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            {/* <div className="w-full md:w-1/2">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div> */}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="123 Main St, Apartment 4B"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div> */}

            {/* <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Enter your city"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div> */}
            {/* <div className="w-full md:w-1/2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                placeholder="Enter your country"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div> */}

            {/* <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ZipCode
              </label>
              <input
                id="zipcode"
                name="zipcode"
                type="text"
                placeholder="Enter your ZipCode"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div> */}
            {/* <div className="w-full md:w-1/2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your Phone Number"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div> */}
          </div>

          <button
            type="submit"
            className={`w-full py-4 rounded-lg text-white text-lg font-semibold transition-all duration-300 shadow-md ${
              isFormValid ? "bg-red-600 hover:bg-red-700 hover:cursor-pointer" : "bg-gray-400"
            }`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="loader-2 " />
                Processing...
              </div>
            ) : (
              "Continue to Payment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
