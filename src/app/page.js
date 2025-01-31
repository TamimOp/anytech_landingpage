import Contact from "@/components/Contact";
import FutureFinance from "@/components/FutureFinance";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import Philosophy from "@/components/Philosophy";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <>
      <Hero />
      <FutureFinance />
      <Philosophy />
      <Technology />
      <LogoSection />
      <Contact />
    </>
  );
}
