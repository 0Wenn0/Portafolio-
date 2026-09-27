import type { Metadata } from "next";
import { IceEndesCaseStudy } from "@/components/IceEndesCaseStudy";

export const metadata: Metadata = {
  title: "ICE-ENDES — Arquitectura de datos — Wendy Ramírez Burgos",
  description:
    "ICE-ENDES: infraestructura de conocimiento para la ENDES (Perú, INEI). Ocho capas de arquitectura, validadas contra NHANES, IPUMS-DHS, nhanesA, CRONICAS y SABE.",
};

export default function IceEndesPage() {
  return <IceEndesCaseStudy locale="es" />;
}
