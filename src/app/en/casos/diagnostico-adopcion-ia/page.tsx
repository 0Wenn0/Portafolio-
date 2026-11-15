import type { Metadata } from "next";
import { AdoptionDiagnosticCaseStudy } from "@/components/AdoptionDiagnosticCaseStudy";
import { getAdoptionDiagnostic } from "@/content/adoptionDiagnostic";

const content = getAdoptionDiagnostic("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/casos/diagnostico-adopcion-ia",
    languages: {
      es: "/casos/diagnostico-adopcion-ia",
      en: "/en/casos/diagnostico-adopcion-ia",
    },
  },
};

export default function AdoptionDiagnosticPageEn() {
  return <AdoptionDiagnosticCaseStudy locale="en" />;
}
