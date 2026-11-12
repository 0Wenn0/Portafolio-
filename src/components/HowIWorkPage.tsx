import type { Locale } from "@/content/types";
import { HowIWorkSection } from "./HowIWorkSection";
import { SubPage } from "./SubPage";

/* «Cómo trabajo» completo: fundamentos, cada paso con su marco y ejemplos por caso, y métodos en prueba. */
export function HowIWorkPage({ locale = "es" }: { locale?: Locale }) {
  const en = locale === "en";
  return (
    <SubPage
      locale={locale}
      title={en ? "How I work" : "Cómo trabajo"}
      back={{ href: en ? "/en#como-trabajo" : "/#como-trabajo", label: en ? "Back to home" : "Volver al inicio" }}
    >
      <HowIWorkSection locale={locale} />
    </SubPage>
  );
}
