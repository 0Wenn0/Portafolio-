import type { Metadata } from "next";
import { IceEndesCaseStudy } from "@/components/IceEndesCaseStudy";

export const metadata: Metadata = {
  title: "ICE-ENDES — Data Architecture — Wendy Ramírez Burgos",
  description:
    "ICE-ENDES: knowledge infrastructure for ENDES (Peru, INEI). An eight-layer architecture, validated against NHANES, IPUMS-DHS, nhanesA, CRONICAS, and SABE.",
  alternates: {
    canonical: "/en/casos/ice-endes",
    languages: {
      es: "/casos/ice-endes",
      en: "/en/casos/ice-endes",
    },
  },
};

export default function IceEndesPageEn() {
  return <IceEndesCaseStudy locale="en" />;
}
