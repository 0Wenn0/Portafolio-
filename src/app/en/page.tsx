import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { BetaBadge } from "@/components/BetaBadge";
import { CasesSection } from "@/components/CasesSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { HowIWorkCompact } from "@/components/HowIWorkCompact";
import { ResultsSection } from "@/components/ResultsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkGallery } from "@/components/WorkGallery";

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
        <WorkGallery locale={locale} />
        <HowIWorkCompact locale={locale} />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <BetaBadge locale={locale} />
    </div>
  );
}
