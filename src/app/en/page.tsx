import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Wendy Ramírez Burgos — Change Management & AI Adoption",
  description:
    "I design adoption strategies, learning programs, and technology experiences based on how people learn, decide, and change.",
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
    },
  },
};

export default function HomeEn() {
  const locale = "en" as const;
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        Skip to content
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        <HeroSection locale={locale} />
        <ResultsSection locale={locale} />
        <CasesSection locale={locale} />
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
