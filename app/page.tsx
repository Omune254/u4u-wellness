// app/page.tsx
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import { BenefitsGrid } from "./components/BenefitsGrid";
import { StatsSection } from "./components/StatsSection";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsGrid />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}