import { CartProvider } from "@/context/CartContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script"; // ✅ import Script
import { Metadata } from "next";

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
  metadataBase: new URL("https://vercelvinsreport.com"), // optional for canonical links
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       {/* <Script
  src="https://www.paypal.com/sdk/js?client-id=AdJq94sV-y0iXYIkLUiIHVxfvD7BhvAf-XGMaRS_olKSrj4lON1jIANscPFI2FKPhJx3HPqog1Q84-re&components=buttons&disable-funding=paylater,venmo"
  strategy="beforeInteractive"
/> */}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=AdJq94sV-y0iXYIkLUiIHVxfvD7BhvAf-XGMaRS_olKSrj4lON1jIANscPFI2FKPhJx3HPqog1Q84-re"
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
