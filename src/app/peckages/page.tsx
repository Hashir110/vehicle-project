"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

const packages = [
  {
    title: "Gold",
    price: "$19.99",
    features: [
      "Basic Vehicle Report",
      "DMV Title History",
      "Vehicle Specification",
    ],
    slug: "gold",
  },
  {
    title: "Platinum",
    price: "$39.99",
    features: [
      "Full Vehicle Report",
      "DMV Title History",
      "Recall Status",
      "Accident Info",
    ],
    slug: "platinum",
  },
  {
    title: "Diamond",
    price: "$59.99",
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
    slug: "diamond",
  },
];


export default function Packages() {
  const router = useRouter();

  const handlePackageClick = (pkg: string) => {
    router.push(`/peckages/${pkg}`);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-white"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/beautiful-shot-silver-sports-quad-bike-field-front-wooden-fence_181624-19959.jpg?t=st=1746759943~exp=1746763543~hmac=446c001f38ae4b6bf754a27377fac07cd0facac5f2376538a29a486ab2fddd94&w=996')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Cars & Bikes Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/30 backdrop-blur-sm text-white rounded-2xl p-6 shadow-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {pkg.title}
              </h3>
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="space-y-2 text-sm text-white/90 text-left mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePackageClick(pkg.slug)}
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-6 rounded-full hover:cursor-pointer"
              >
                Get your report
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
