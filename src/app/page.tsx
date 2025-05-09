import CounterComponent from "@/app/components/Counter";
import DecodeWinNumber from "@/app/components/DecodeWinNumber";
import HeroSection from "@/app/components/HeroSection";
import Partners from "@/app/components/Partners";
import Testimonials from "@/app/components/Testimonials";
import TitleWithDescription from "@/app/components/TitleWithDescription";
import { CartProvider } from "@/context/CartContext";

export default function HomePage() {
  return (
    <>
    <CartProvider>
      <HeroSection />
      <TitleWithDescription />
      <CounterComponent />
      <DecodeWinNumber />
      <Partners />
      <Testimonials />
    </CartProvider>
      
    </>
  );
}
