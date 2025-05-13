"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import ViewCartModal from "./ViewCartComponent";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-black text-white px-6 py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold hidden sm:block">Vehicle Explorer</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link key={href} href={href}>
              <span
                className={`px-3 py-1 text-lg transition-all duration-200 border-b-2 ${
                  pathname === href
                    ? "text-white font-semibold border-red-600"
                    : "text-gray-400 border-transparent hover:text-white hover:border-red-600"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

      {/* Cart */}
      <div className="relative flex items-center">
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
          {cart.length}
        </span>
        {/* Trigger Button */}
        <button onClick={() => setIsOpen(true)}>
          <ShoppingCart className="w-6 h-6 text-white hover:cursor-pointer" />
        </button>

        {/* Modal */}
        {isOpen && <ViewCartModal onClose={() => setIsOpen(false)} />}
      </div>
      </div>
    </header>
  );
}
