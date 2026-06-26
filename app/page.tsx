import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/how-it-works";
import MarketRates from "@/components/landing/market-rates";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#A0C3FD]/10 to-[#FFE79C]/10">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Features />
        <HowItWorks />
        <MarketRates />
        <Footer />
      </div>
    </main>
  );
}
