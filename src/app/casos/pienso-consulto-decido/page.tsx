import type { Metadata } from "next";
import { MethodTwoToolsCaseStudy } from "@/components/MethodTwoToolsCaseStudy";
import { getMethodTwoTools } from "@/content/methodTwoTools";

const content = getMethodTwoTools("es");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/casos/pienso-consulto-decido",
    languages: {
      es: "/casos/pienso-consulto-decido",
      en: "/en/casos/pienso-consulto-decido",
    },
  },
};

export default function MethodTwoToolsPage() {
  return <MethodTwoToolsCaseStudy locale="es" />;
}
