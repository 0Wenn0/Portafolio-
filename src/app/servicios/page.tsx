import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Servicios — Wendy Ramírez Burgos",
  description: "Diseño instruccional, adopción de IA y evaluación de programas para proyectos independientes.",
  alternates: { canonical: "/servicios", languages: { es: "/servicios", en: "/en/servicios" } },
};

export default function Servicios() {
  return <ServicesPage locale="es" />;
}
