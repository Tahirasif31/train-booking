"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PlanYourJourney from "@/components/journey";
import LuxuryRailExperiences from "@/components/luxury";
import Navbar from "@/components/nav";
import SignaturePackages from "@/components/package";
import Services from "@/components/services";
import Popup from "@/components/popup";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(true); // Popup will be open initially

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/66d8529450c10f7a00a3eac5/1i6ug5690";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  // Automatically close the popup after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupOpen(false);
    }, 15000);

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <LuxuryRailExperiences />
      <Services />
      <SignaturePackages />
      <PlanYourJourney />
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </main>
  );
}
