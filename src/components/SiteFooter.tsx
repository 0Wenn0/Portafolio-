import Link from "next/link";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";

export function SiteFooter({ locale = "es" }: { locale?: Locale }) {
  const city = locale === "en" ? "Mexico City" : site.city;

  return (
    <footer
      className="on-dark mt-auto min-h-[88px] py-4 box-border px-6 md:px-24 flex items-center justify-between text-sm gap-4 flex-wrap"
      style={{ background: "var(--color-observatory)", color: "var(--color-mist)" }}
    >
      <span>
        {site.name}, {city}
      </span>
      <span className="flex flex-wrap items-center gap-x-6">
        <Link href={locale === "en" ? "/en/servicios" : "/servicios"} className="py-3" style={{ color: "var(--color-mist)" }}>
          {locale === "en" ? "Freelance services" : "Servicios independientes"}
        </Link>
      <a
        href={site.orcidUrl}
        className="py-3"
        style={{ color: "var(--color-signal)" }}
      >
        ORCID <span style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>{site.orcid}</span>
      </a>
      </span>
    </footer>
  );
}
