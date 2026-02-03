"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ExpertiseSection from "./components/ExpertiseSection";
import FeaturedProjects from "./components/FeaturedProjects";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import WhatsAppFAB from "./components/WhatsAppFAB";
import LeadModal from "./components/LeadModal";

export default function Home() {
  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    // Check if cookie exists to prevent showing modal again
    const checkCookie = () => {
      const cookies = document.cookie.split(";");
      const leadFormShown = cookies.some(
        (cookie) => cookie.trim().startsWith("leadFormShown=true")
      );
      return leadFormShown;
    };

    // Only show modal if cookie doesn't exist
    if (!checkCookie()) {
      // Show modal after 8 seconds
      const timer = setTimeout(() => {
        setShowLeadModal(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ExpertiseSection />
        <FeaturedProjects />
        <WhyChooseSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <WhatsAppFAB />
      <LeadModal isOpen={showLeadModal} onClose={() => setShowLeadModal(false)} />
    </div>
  );
}
