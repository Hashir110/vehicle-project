"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

export default function HeroSection() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!vehicleNumber.trim()) {
      toast("Vehicle number is required");
      return;
    }

    const pattern = /^[A-Z0-9-]{4,12}$/i;
    if (!pattern.test(vehicleNumber)) {
      toast("Enter a valid vehicle number (e.g., ABC-1234)");
      return;
    }

    toast.success("Successfully redirected to packages page");
    router.push("/peckages");
  };

  return (
    <section className="relative h-screen w-full flex items-center text-white">
      {/* Background image */}
      <Image
        src="/report.jpg"
        alt="Report pic"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute   z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl p-8  text-white rounded-lg ">
        <h1 className="text-4xl font-bold mb-4">
          Be Wise And Verify In Advance. Let's Examine
        </h1>
        <h2 className="text-3xl font-semibold mb-2 text-red-600">
          The History Of Your Car.
        </h2>
        <p className="text-lg mb-4">
          Let’s Verify Your Car History is a global service that aims to enhance
          transparency in the used car market and promote road safety on a
          global scale by providing comprehensive vehicle histories.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Verified Vehicle History</li>
          <li>Accurate Inspection Reports</li>
          <li>Trusted by Thousands</li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="Enter your vehicle number"
            className="px-3 py-2 rounded-md text-black w-full bg-white border border-gray-300"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-800 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
