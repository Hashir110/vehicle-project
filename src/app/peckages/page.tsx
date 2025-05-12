"use client";

import { useRouter } from "next/navigation";
import React from "react";

const packages = [
  {
    title: "Silver",
    price: "$14.99",
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
    price: "$24.99",
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
    price: "$39.99",
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
    <>
      <section
        className="w-full h-[80vh] bg-center bg-no-repeat bg-cover my-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/beautiful-shot-silver-sports-quad-bike-field-front-wooden-fence_181624-19959.jpg?t=st=1746759943~exp=1746763543~hmac=446c001f38ae4b6bf754a27377fac07cd0facac5f2376538a29a486ab2fddd94&w=996')",
        }}
      ></section>

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
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                {pkg.title}
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
                className="bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer text-black font-semibold w-full py-2 rounded-full"
              >
                Get your report
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
