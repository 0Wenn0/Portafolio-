import type { Metadata } from "next";
import { SubPage } from "@/components/SubPage";
import { TalksSection } from "@/components/TalksSection";

export const metadata: Metadata = {
  title: "Charlas y mentorías — Wendy Ramírez Burgos",
  description: "Charlas, mentorías y docencia: presentaciones interactivas, kits descargables y programas para mujeres en STEM.",
  alternates: { canonical: "/charlas", languages: { es: "/charlas", en: "/en/charlas" } },
};

export default function Page() {
  return (
    <SubPage locale="es" title="Charlas y mentorías" back={{ href: "/#charlas", label: "Volver al inicio" }}>
      <TalksSection locale="es" variant="full" />
    </SubPage>
  );
}
