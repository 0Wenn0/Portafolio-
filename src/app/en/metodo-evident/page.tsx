import type { Metadata } from "next";
import { EvidentFramework } from "@/components/EvidentFramework";
import { getEvident } from "@/content/evident";

const content = getEvident("en");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/en/metodo-evident",
    languages: {
      es: "/metodo-evident",
      en: "/en/metodo-evident",
    },
  },
};

export default function EvidentPage() {
  return <EvidentFramework locale="en" />;
}
