import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ColorGallery from "@/components/ColorGallery";
import Lineup from "@/components/Lineup";
import Contact from "@/components/Contact";
import PriceCta from "@/components/PriceCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <ScrollReveal />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <ColorGallery />
      <Lineup />
      <Contact />
      <PriceCta />
      <Footer />
    </main>
  );
}
