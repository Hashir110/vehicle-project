"use client";
import Link from "next/link";
import {  Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
// import ViewCartModal from "./ViewCartComponent";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Header() {
  // const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-black text-white px-6 py-6 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold hidden sm:block">
            Vehiclevinreport
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
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

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Cart Icon */}
          {/* <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
            <button onClick={() => setIsOpen(true)}>
              <ShoppingCart className="w-6 h-6 text-white hover:cursor-pointer" />
            </button>
            {isOpen && <ViewCartModal onClose={() => setIsOpen(false)} />}
          </div> */}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 text-white rounded-lg shadow-md py-4 space-y-4 text-center">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              <span
                className={`block py-2 px-4 ${
                  pathname === href
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
