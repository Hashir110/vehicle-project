import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export const metadata = {
  title: "MyStore",
  description: "A modern e-commerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main className="min-h-[90vh] px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
