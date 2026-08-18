import { Capabilities } from "@/components/Capabilities";
import { ChatSection } from "@/components/ChatSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ImportSection } from "@/components/ImportSection";
import { PlansSection } from "@/components/PlansSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ReportSection } from "@/components/ReportSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="obsah">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Capabilities />
        <ReportSection />
        <ChatSection />
        <ImportSection />
        <PlansSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
