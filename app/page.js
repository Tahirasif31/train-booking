import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PlanYourJourney from "@/components/journey";
import LuxuryRailExperiences from "@/components/luxury";
import Navbar from "@/components/nav";
import SignaturePackages from "@/components/package";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LuxuryRailExperiences />
      <Services />
      <SignaturePackages />
      <PlanYourJourney />
    </main>
  );
}
