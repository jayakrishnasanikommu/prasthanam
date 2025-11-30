import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MissionSection from "./components/MissionSection"
import ExpertiseSection from "./components/ExpertiseSection"
import FeaturedProjects from "./components/FeaturedProjects"
import WhyChooseSection from "./components/WhyChooseSection"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
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
    </div>
  )
}
