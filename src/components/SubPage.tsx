import Link from "next/link";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { BetaBadge } from "./BetaBadge";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/* Envoltura de las páginas que amplían una sección del inicio: cabecera, migas y pie. */
export function SubPage({
  locale = "es",
  title,
  back,
  children,
}: {
  locale?: Locale;
  title: string;
  back?: { href: string; label: string };
  children: React.ReactNode;
}) {
  const ui = t(locale);
  const en = locale === "en";
  const home = en ? "/en" : "/";
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        {ui.skipLink}
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        <nav aria-label={en ? "Breadcrumb" : "Ruta"} className="px-6 md:px-24 pt-10 text-[15px] flex gap-2">
          <Link href={back?.href ?? home}>← {back?.label ?? (en ? "Home" : "Inicio")}</Link>
        </nav>
        <h1 className="sr-only">{title}</h1>
        {children}
      </main>
      <SiteFooter locale={locale} />
      <BetaBadge locale={locale} />
    </div>
  );
}
