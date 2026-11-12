import type { Metadata } from "next";
import { WorkPage } from "@/components/WorkPage";

export const metadata: Metadata = {
  title: "Trabajo en detalle — Wendy Ramírez Burgos",
  description: "Diseño instruccional, prototipos, comunidad e investigación: objetivos, marcos y evidencia de cada pieza.",
  alternates: { canonical: "/trabajo", languages: { es: "/trabajo", en: "/en/trabajo" } },
};

export default function Page() {
  return <WorkPage locale="es" />;
}
