"use client";
import { useCart } from "@/context/CartContext";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const carPackages = {
  gold: {
    price: "$19.99",
    features: [
      "Basic Vehicle Report",
      "DMV Title History",
      "Vehicle Specification",
    ],
  },
  platinum: {
    price: "$39.99",
    features: [
      "Full Vehicle Report",
      "DMV Title History",
      "Recall Status",
      "Accident Info",
    ],
  },
  diamond: {
    price: "$59.99",
    features: [
      "All-in-One Report",
      "DMV History",
      "Recall Status",
      "Specs",
      "Accidents",
      "NMVTIS",
    ],
  },
};

export default function CarPackagePage({
  params,
}: {
  params: Promise<{ pkg: string }>;
}) {
  const { pkg } = React.use(params); // ✅ unwrap params safely
  const pkgData = carPackages[pkg as keyof typeof carPackages];
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!pkgData) return notFound();

  const handleAddToCart = () => {
    // Add item to cart
    addToCart({
      id: pkg,
      title: pkg,
      price: pkgData.price,
    });

    // Show toast notification
    setIsAdded(true);
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold capitalize mb-2">{pkg} Package</h1>
        <p className="text-lg text-green-600 mb-4">Price: {pkgData.price}</p>
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`font-semibold py-2 px-4 rounded 
    ${
      isAdded
        ? "bg-gray-400 cursor-not-allowed text-white"
        : "bg-blue-500 hover:bg-blue-600 text-white"
    }`}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>

        {isAdded && (
          <p className="text-green-500 mt-2">
            Item is already added to the cart!
          </p>
        )}
        <ul className="list-disc pl-6 space-y-1 mt-4">
          {pkgData.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
