import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-wider">
            Vehicle Explorer
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base">
            At Vehicle Explorer Reporter, We are proud of our dedication to
            quality and accuracy. Our skilled inspectors go thoroughly over each
            component of the automobile.
          </p>
        </div>

        {/* Useful Links */}
        <div className="mt-4 sm:mt-0">
          <h4 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-red-600">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="mt-4 sm:mt-0">
          <h4 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
            Our Policies
          </h4>
          <ul className="space-y-2">
            <li className="hover:text-red-600">
              <Link href="/privacy_policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/refund_policy">Refund Policy</Link>
            </li>
            <li className="hover:text-red-600">
              <Link href="/terms_condition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-4 sm:mt-0">
          <h4 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
            Our Hours
          </h4>
          <p className="text-red-700 text-sm sm:text-base">
            24 Hours Available
          </p>
          <p className="text-red-700 text-sm sm:text-base mb-4">
            Monday till Sunday
          </p>
          <h4 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
            Our Email
          </h4>
          <p className="text-red-700 text-sm sm:text-base break-all">
            developer@gmail.com
          </p>
        </div>

        {/* Social Media - Maintains original position */}
        <div className="sm:col-span-2 lg:col-span-4 mt-6 sm:mt-8 lg:mt-0">
          <h4 className="font-bold text-xl sm:text-2xl mb-4">Follow Us</h4>
          <ul className="flex space-x-4 text-xl sm:text-2xl text-gray-700 justify-center sm:justify-start">
            <li>
              <Link href="https://www.facebook.com/" target="_blank">
                <FaFacebook className="hover:text-blue-600 transition duration-200" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="_blank">
                <FaInstagram className="hover:text-pink-500 transition duration-200" />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/" target="_blank">
                <FaTwitter className="hover:text-sky-500 transition duration-200" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="hover:text-blue-800 transition duration-200" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 md:mt-12 text-center bg-[#0f172a] text-white py-4 px-4 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Vehicle Explorer. All rights reserveds.
      </div>
    </footer>
  );
}
