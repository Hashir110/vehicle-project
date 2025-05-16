"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const packages = [
  {
    title: "Silver",
    price: 14.99,
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
    slug: "silver",
  },
  {
    title: "Gold",
    price: 24.99,
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
    slug: "gold",
  },

  {
    title: "Platinum",
    price: 39.99,
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
    slug: "platinum",
  },
];

export default function Packages() {
  const router = useRouter();

  const handlePackageClick = (pkg: string) => {
    router.push(`/peckages/${pkg}`);
  };

  return (
    <div className="w-full">
      <div className="relative h-[300px] md:h-[500px] mt-4 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/car&bike.avif"
          alt="Contact Us"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Heading Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Choose the Right Report Package
          </h1>
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl drop-shadow-md">
            Whether you're buying or selling, our packages offer detailed,
            reliable vehicle history insights — tailored to your needs and
            budget.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 bg-gray-100 my-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Car & Motorcycle Reports Packages
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-red-500 mb-2">
                ${pkg.title}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                {pkg.price}
              </p>
              <ul className="space-y-2 text-gray-700 text-left mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePackageClick(pkg.slug)}
                className="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-semibold w-full py-2 rounded-full"
              >
                Get your report
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
