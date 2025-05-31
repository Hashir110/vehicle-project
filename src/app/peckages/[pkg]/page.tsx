"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const carPackages = {
  silver: {
    title: "Silver Package",
    price: 14.99,
    originalPrice: 14.99,
    slug: "silver",
    image: "/car&bike.avif",
    features: [
      "Vehicle Overview",
      "Theft Record",
      "Title Record",
      "Market Value",
      "Accident Record",
      "Salvage",
      "Impounds",
      "HQ Truck Images",
      "Exports",
      "Sales Listing",
      "Open Recalls",
      "Expired Warranties",
      "Installed Options and Packages",
      "Title Brand",
      "Vehicle Specifications",
    ],
  },
  gold: {
    title: "Gold Package",
    price: 24.99,
    originalPrice: 24.99,
    slug: "gold",
    image: "/car&bike.avif",
    features: [
      "Vehicle Overview",
      "Theft Record",
      "Title Record",
      "Market Value",
      "Accident Record",
      "Salvage",
      "Impounds",
      "HQ Truck Images",
      "Exports",
      "Sales Listing",
      "Open Recalls",
      "Expired Warranties",
      "Installed Options and Packages",
      "Title Brand",
      "Vehicle Specifications",
    ],
  },
  platinum: {
    title: "Platinum Package",
    price: 39.99,
    originalPrice: 49.99,
    slug: "platinum",
    image: "/car&bike.avif",
    features: [
      "Vehicle Overview",
      "Theft Record",
      "Title Record",
      "Market Value",
      "Accident Record",
      "Salvage",
      "Impounds",
      "HQ Truck Images",
      "Exports",
      "Sales Listing",
      "Open Recalls",
      "Expired Warranties",
      "Installed Options and Packages",
      "Title Brand",
      "Vehicle Specifications",
    ],
  },
};

export default function CarPackagePage({
  params,
}: {
  params: { pkg: string };
}) {
  const { pkg } = params;
  const pkgData = carPackages[pkg as keyof typeof carPackages];

  const { cart, addToCart } = useCart();
  const router = useRouter();

  if (!pkgData) return notFound();

  const isInCart = cart.some((item) => item.id === pkg);

  const handleCheckout = () => {
    if (!isInCart) {
      addToCart({
        id: pkg,
        title: pkgData.title,
        price: pkgData.price,
      });
    }
    router.push("/billing-address");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
      <div className="relative">
        <span className="absolute top-5 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10">
          Sale!
        </span>
        <div className="relative h-[400px] md:h-[500px] md:mb-12 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={pkgData.image}
            alt={pkgData.title}
            fill
            quality={100}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2 capitalize">{pkgData.title}</h2>
        <p className="text-xl mb-4">
          <span className="text-black font-bold">${pkgData.price}</span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 mb-6">
          {pkgData.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-semibold py-2 px-6 rounded-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
