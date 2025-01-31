import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FutureFinance from "@/components/FutureFinance";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FutureFinance />
      <Philosophy />
      <Technology />
      <LogoSection />
      <Contact />
      <Footer />
    </>
  );
}
