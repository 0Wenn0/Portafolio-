import type { Metadata } from "next";
import { HowIWorkPage } from "@/components/HowIWorkPage";

export const metadata: Metadata = {
  title: "Cómo trabajo — Wendy Ramírez Burgos",
  description: "Cuatro pasos con su marco y ejemplos reales por caso, y los métodos que estoy probando.",
  alternates: { canonical: "/como-trabajo", languages: { es: "/como-trabajo", en: "/en/como-trabajo" } },
};

export default function Page() {
  return <HowIWorkPage locale="es" />;
}
