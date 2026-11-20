import type { Metadata } from "next";
import { SubPage } from "@/components/SubPage";
import { TalksSection } from "@/components/TalksSection";

export const metadata: Metadata = {
  title: "Talks & mentoring — Wendy Ramírez Burgos",
  description: "Talks, mentoring, and teaching: interactive decks, downloadable kits, and programs for women in STEM.",
  alternates: { canonical: "/en/charlas", languages: { es: "/charlas", en: "/en/charlas" } },
};

export default function Page() {
  return (
    <SubPage locale="en" title="Talks & mentoring" back={{ href: "/en#charlas", label: "Back to home" }}>
      <TalksSection locale="en" variant="full" />
    </SubPage>
  );
}
