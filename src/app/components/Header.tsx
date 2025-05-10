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
    <header className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/car-check-logo-symbol-icon-template_166742-4826.avif"
            alt="Vehicle Explorer Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
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

        {/* Cart Icon */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 hover:bg-white/10 rounded-full transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-[10px] font-bold text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
                {cart.length}
              </span>
            )}
          </button>
          {isOpen && <ViewCartModal onClose={() => setIsOpen(false)} />}
        </div>
      </div>
    </header>
  );
}
