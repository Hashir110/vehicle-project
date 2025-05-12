"use client";

import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const carPackages = {
  silver: {
    title: "Silver Package",
    price: "$14.99",
    originalPrice: "$24.99",
    slug: "silver",
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-silver-sports-quad-bike-field-front-wooden-fence_181624-19959.jpg",
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
    price: "$14.99",
    originalPrice: "$24.99",
    slug: "gold",
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-silver-sports-quad-bike-field-front-wooden-fence_181624-19959.jpg",
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
    price: "$39.99",
    originalPrice: "$49.99",
    slug: "platinum",
    image:
      "https://img.freepik.com/free-photo/beautiful-shot-silver-sports-quad-bike-field-front-wooden-fence_181624-19959.jpg",
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

  if (!pkgData) return notFound();

  const isInCart = cart.some((item) => item.id === pkg);

  const handleAddToCart = () => {
    if (isInCart) return;

    addToCart({
      id: pkg,
      title: pkg,
      price: pkgData.price,
    });

    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-10">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full z-10">
          Sale!
        </span>
        <img
          src={pkgData.image}
          alt={pkgData.title}
          className="w-full h-full object-cover rounded-lg mb-30"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2 capitalize">{pkg}</h2>
        <p className="text-xl mb-4">
          <span className="text-black font-bold">{pkgData.price}</span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-800 mb-6">
          {pkgData.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`${
            isInCart
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer"
          } text-black font-semibold py-2 px-6 rounded-full`}
        >
          {isInCart ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
