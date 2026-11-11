import type { Metadata } from "next";
import { MethodTwoToolsCaseStudy } from "@/components/MethodTwoToolsCaseStudy";
import { getMethodTwoTools } from "@/content/methodTwoTools";

const content = getMethodTwoTools("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/casos/pienso-consulto-decido",
    languages: {
      es: "/casos/pienso-consulto-decido",
      en: "/en/casos/pienso-consulto-decido",
    },
  },
};

export default function MethodTwoToolsPageEn() {
  return <MethodTwoToolsCaseStudy locale="en" />;
}
