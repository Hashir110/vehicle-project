"use client";

import { useState } from "react";
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

  const isFormValid =
    form.name.trim() !== "" &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim().length === 10 &&
    form.message.trim().length > 10;

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
      {/* Top Image */}
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center mt-4 rounded-lg shadow-lg"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712268.jpg?t=st=1746878292~exp=1746881892~hmac=5cd60eb84c3a4d55c2573859746d1ae697ef3b7a324550dffe42653739b4dde4&w=1380')",
        }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-12 py-16 px-4">
        {/* Address Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Our Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt
                className="text-yellow-500 text-lg cursor-pointer mt-1"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Hyderabad,+Pakistan",
                    "_blank"
                  )
                }
              />
              <span>
                <span className="font-semibold">Address:</span> 123 Main Street, Hyderabad, Pakistan
              </span>
            </p>
            <p className="flex items-start gap-3">
              <MdEmail
                className="text-yellow-500 text-lg cursor-pointer mt-1"
                onClick={() =>
                  window.open("https://workspace.google.com/gmail/", "_blank")
                }
              />
              <span>
                <span className="font-semibold">Email:</span> support@vehicleexplorer.com
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="1234567890"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (min 10 characters)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className={`w-full py-4 rounded-lg text-white text-lg font-semibold transition-all duration-300 shadow-md ${
                isFormValid
                  ? "bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
