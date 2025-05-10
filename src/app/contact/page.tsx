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
        className="h-[300px] md:h-[400px] bg-cover bg-center mt-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712268.jpg?t=st=1746878292~exp=1746881892~hmac=5cd60eb84c3a4d55c2573859746d1ae697ef3b7a324550dffe42653739b4dde4&w=1380')",
        }}
      ></div>

      <div className="max-w-4xl mx-auto space-y-8 py-12">
        {/* Address Card */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>

          <p className="mb-2 flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt
              className="text-yellow-500 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Hyderabad,+Pakistan",
                  "_blank"
                )
              }
            />
            <span>
              <span className="font-semibold">Address:</span> 123 Main Street,
              Hyderabad, Pakistan
            </span>
          </p>

          <p className="flex items-center gap-2 text-gray-700">
            <MdEmail
              className="text-yellow-500 hover:cursor-pointer"
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

        {/* Contact Form */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="doe john"
              className="w-full p-3 border rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="johndoe@ex.com"
              className="w-full p-3 border rounded"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="+91 1234567890"
              className="w-full p-3 border rounded"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message (min 10 characters)"
              className="w-full p-3 border rounded"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className={`w-full py-3 rounded text-white font-semibold ${
                isFormValid
                  ? "bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer"
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
