import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Journey from "@/components/Journey";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PremiumHomeSections from "@/components/PremiumHomeSections";

export default function Home() {
  return (
    
    <main>
      
      <Navbar />
      <Hero />
      <TrustBar />
      <PremiumHomeSections />
      <Journey />
      <Impact />
      <CTA />
      <Footer />
    </main>
  );
}