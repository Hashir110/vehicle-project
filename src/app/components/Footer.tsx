import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/car-check-logo-symbol-icon-template_166742-4826.avif"
            alt="The Vehicle Explorer Logo"
            width={150}
            height={150}
          />
          <p className="mt-4">
            At Vehicle Explorer Reporter, We are proud of our dedication to
            quality and accuracy. Our skilled inspectors go thoroughly over each
            component of the automobile.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-bold mb-4">Our Policies</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund">Refund Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Our Hours</h4>
          <p className="text-red-700">24 Hours Available</p>
          <p className="text-red-700 mb-4">Monday till Sunday</p>
          <h4 className="font-bold mb-2">Our Email</h4>
          <p className="text-red-700">developer@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <ul className="flex space-x-4 text-2xl text-gray-700">
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
      <div className="mt-12 text-center bg-red-500 text-white py-4">
        &copy; {new Date().getFullYear()} The Vehicle Explorer. All rights
        reserved.
      </div>
    </footer>
  );
}
