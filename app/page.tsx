import ContactSection from "./components/ContactSection/ContactSection";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Hero from "./components/Hero/Hero";
import ModernWebCapabilities from "./components/ModernWebCapabilities/ModernWebCapabilitiesClient";
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";

export default function Home() {
  return (
    <>
      <Hero />
      <TechnicalExpertise/>
      <FeaturedProjects />
      <ModernWebCapabilities/>
      <ContactSection/>
    </>
  );
}
