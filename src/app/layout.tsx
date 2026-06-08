import { CartProvider } from "@/context/CartContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";


export const metadata: Metadata = {
  title: "Vehiclevinsreport - Instant & Trusted Vehicle History Reports",
  description:
    "Generate comprehensive and reliable vehicle history reports instantly using Vehiclevinsreport. Enter your VIN and get accurate car data to make informed decisions.",
  robots: "index, follow",
  keywords: [
    "vehicle history report",
    "car VIN report",
    "instant vehicle report",
    "vehiclevinsreport",
    "car history check",
    "VIN lookup",
    "used car report",
    "Vin number",
    "Vehicle Vin",
  ],
  metadataBase: new URL("https://www.vehiclevinsreport.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET}&disable-funding=paylater`}
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-white text-black">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </CartProvider>
      </body>
    </html>
  );
}
