import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LuxuryRailExperiences from "@/components/luxury";
import Navbar from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LuxuryRailExperiences />
    </main>
  );
}
