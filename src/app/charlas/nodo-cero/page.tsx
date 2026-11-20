import type { Metadata } from "next";
import { NodoCeroDeck } from "@/components/NodoCeroDeck";
import "./deck.css";

export const metadata: Metadata = {
  title: "De la idea al workflow · Nodo Cero · Wendy Ramírez Burgos, neuropsicóloga y científica de datos",
  description:
    "Presentación interactiva para la hackathon Nodo Cero de Women Techmakers Santa Cruz: diseñar el proceso antes de automatizar, decidir dónde actúa la persona y contarlo en un minuto.",
  alternates: { canonical: "/charlas/nodo-cero" },
};

export default function NodoCeroPage() {
  return <NodoCeroDeck />;
}
