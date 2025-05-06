import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <img
            src="https://img.freepik.com/premium-vector/car-history-report-vector-icon_116137-6031.jpg?w=740"
            alt=""
            width={70}
            height={70}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-6 hidden md:flex ">
        <Link href="/">
          <p className="hover:underline hover:cursor-pointer hover:text-red-400">
            Home
          </p>
        </Link>
        <Link href="/about">
          <p className="hover:underline hover:cursor-pointer hover:text-red-400">
            About
          </p>
        </Link>
        <Link href="/contact">
          <p className="hover:underline hover:cursor-pointer hover:text-red-400">
            Contact
          </p>
        </Link>
      </nav>

      {/* Cart */}
      <div className="relative flex items-center">
        <span className="mr-2 font-bold text-white">£24.99</span>
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
      </div>
    </header>
  );
}
