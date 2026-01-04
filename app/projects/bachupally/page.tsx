import Header from "@/app/components/Header";
import WhatsAppFAB from "@/app/components/WhatsAppFAB";
import BachupallyHero from "@/app/components/BachupallyHero";
import QuickFactsStrip from "@/app/components/QuickFactsStrip";
import WhyChooseBachupally from "@/app/components/WhyChooseBachupally";
import FlatConfigurations from "@/app/components/FlatConfigurations";
import LocationAdvantage from "@/app/components/LocationAdvantage";
import LegalApproval from "@/app/components/LegalApproval";
import BuilderCredibility from "@/app/components/BuilderCredibility";
import LeadCaptureForm from "@/app/components/LeadCaptureForm";
import UrgencySection from "@/app/components/UrgencySection";
import BachupallyFooter from "@/app/components/BachupallyFooter";

export default function BachupallyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Section 2: Hero Section */}
        <BachupallyHero />

        {/* Section 3: Quick Facts Strip */}
        <QuickFactsStrip />

        {/* Section 4: Why This Project? */}
        <WhyChooseBachupally />

        {/* Section 5: Flat Configurations */}
        <FlatConfigurations />

        {/* Section 6: Location Advantage */}
        <LocationAdvantage />

        {/* Section 7: Legal & Approval Proof */}
        <LegalApproval />

        {/* Section 8: Builder Credibility */}
        <BuilderCredibility />

        {/* Section 9: Lead Capture Form */}
        <LeadCaptureForm />

        {/* Section 10: Urgency/FOMO */}
        <UrgencySection />

        {/* Section 11: Footer */}
        <BachupallyFooter />
      </main>
      <WhatsAppFAB />
    </div>
  );
}

