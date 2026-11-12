import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Wendy Ramírez Burgos",
  description: "Instructional design, AI adoption and program evaluation for freelance projects.",
  alternates: { canonical: "/en/servicios", languages: { es: "/servicios", en: "/en/servicios" } },
};

export default function Services() {
  return <ServicesPage locale="en" />;
}
