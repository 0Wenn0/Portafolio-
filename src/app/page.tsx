import { AboutSection } from "@/components/AboutSection";
import { BetaBadge } from "@/components/BetaBadge";
import { CasesSection } from "@/components/CasesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { LabSection } from "@/components/LabSection";
import { MoreWorkSection } from "@/components/MoreWorkSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" className="flex flex-col">
        <HeroSection />
        <ResultsSection />
        <CasesSection />
        <CommunitySection />
        <HowIWorkSection />
        <ServicesSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
        <MoreWorkSection />
      </main>
      <SiteFooter />
      <BetaBadge />
    </div>
  );
}
