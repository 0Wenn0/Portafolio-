import type { Locale } from "@/content/types";
import { ContactSection } from "./ContactSection";
import { ServicesSection } from "./ServicesSection";
import { SubPage } from "./SubPage";

/* Servicios y tarifas para proyectos independientes. Fuera del inicio mientras la prioridad
 * es la búsqueda de empleo; se llega desde el pie de página. */
export function ServicesPage({ locale = "es" }: { locale?: Locale }) {
  return (
    <SubPage locale={locale} title={locale === "en" ? "Services" : "Servicios"}>
      <ServicesSection locale={locale} />
      <ContactSection locale={locale} />
    </SubPage>
  );
}
