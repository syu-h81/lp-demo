import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { CoverageDetailsSection } from "@/components/sections/coverage-details-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FlowSection } from "@/components/sections/flow-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PredictionGuideSection } from "@/components/sections/prediction-guide-section";
import { ReasonSection } from "@/components/sections/reason-section";
import { SupportDesignSection } from "@/components/sections/support-design-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ReasonSection />
      <SupportDesignSection />
      <CapabilitiesSection />
      <PredictionGuideSection />
      <CoverageDetailsSection />
      <FlowSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
