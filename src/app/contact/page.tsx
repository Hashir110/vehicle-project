"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const valid =
      form.name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.phone.trim().length <= 15 &&
      form.message.trim().length > 10;

    setIsFormValid(valid);
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      toast.success("Message sent successfully");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-4 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/pic for contact.jpg"
          alt="Contact Us"
          fill
          quality={100}
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            Get in Touch With Us
          </h1>
          <p className="text-white text-md sm:text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md">
            We're here to answer your questions and assist you with anything you
            need.
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-col gap-10">
          {/* Contact Info Card */}
          <div className="flex-1 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Our Contact Information
            </h2>
            <div className="space-y-5 text-gray-700 text-base sm:text-lg">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="text-red-600 text-lg cursor-pointer mt-1"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Hyderabad,+Pakistan",
                      "_blank"
                    )
                  }
                />
                <span>
                  <span className="font-semibold">Address:</span> 123 Main
                  Street, Hyderabad, Pakistan
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MdEmail
                  className="text-red-600 text-lg cursor-pointer mt-1"
                  onClick={() =>
                    window.open("https://workspace.google.com/gmail/", "_blank")
                  }
                />
                <span>
                  <span className="font-semibold">Email:</span>{" "}
                  support@vehicleexplorer.com
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-base sm:text-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="1234567890"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message (min 10 characters)"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className={`w-full py-4 rounded-lg text-white text-lg font-semibold transition-all duration-300 shadow-md ${
                  isFormValid
                    ? "bg-red-600 hover:bg-red-700 hover:shadow-lg cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
