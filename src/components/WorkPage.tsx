import type { Locale } from "@/content/types";
import { CommunitySection } from "./CommunitySection";
import { LabSection } from "./LabSection";
import { LearningDesignSection } from "./LearningDesignSection";
import { MoreWorkSection } from "./MoreWorkSection";
import { SubPage } from "./SubPage";

/* Fichas completas del trabajo: objetivos, marcos, evidencia y transcripciones.
 * El inicio muestra la galería; aquí vive todo el detalle, sin recortes. */
export function WorkPage({ locale = "es" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <SubPage
      locale={locale}
      title={en ? "Work in detail" : "Trabajo en detalle"}
      back={{ href: en ? "/en#diseno-instruccional" : "/#diseno-instruccional", label: en ? "Back to the gallery" : "Volver a la galería" }}
    >
      <LearningDesignSection locale={locale} />
      <LabSection locale={locale} />
      <CommunitySection locale={locale} />
      <MoreWorkSection locale={locale} />
    </SubPage>
  );
}
