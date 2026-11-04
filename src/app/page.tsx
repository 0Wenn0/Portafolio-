import { AboutSection } from "@/components/AboutSection";
import { BetaBadge } from "@/components/BetaBadge";
import { CasesSection } from "@/components/CasesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ContactSection } from "@/components/ContactSection";
import { LearningDesignSection } from "@/components/LearningDesignSection";
import { HeroSection } from "@/components/HeroSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { LabSection } from "@/components/LabSection";
import { MoreWorkSection } from "@/components/MoreWorkSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  const locale = "es" as const;
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        <HeroSection locale={locale} />
        <ResultsSection locale={locale} />
        <CasesSection locale={locale} />
        <LearningDesignSection locale={locale} />
        <CommunitySection locale={locale} />
        <HowIWorkSection locale={locale} />
        <ServicesSection locale={locale} />
        <LabSection locale={locale} />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
        <MoreWorkSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <BetaBadge />
    </div>
  );
}
