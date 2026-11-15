import type { Metadata } from "next";
import { AdoptionDiagnosticCaseStudy } from "@/components/AdoptionDiagnosticCaseStudy";
import { getAdoptionDiagnostic } from "@/content/adoptionDiagnostic";

const content = getAdoptionDiagnostic("es");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/casos/diagnostico-adopcion-ia",
    languages: {
      es: "/casos/diagnostico-adopcion-ia",
      en: "/en/casos/diagnostico-adopcion-ia",
    },
  },
};

export default function AdoptionDiagnosticPage() {
  return <AdoptionDiagnosticCaseStudy locale="es" />;
}
