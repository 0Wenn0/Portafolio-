import { site } from "@/content/site";
import type { Locale } from "@/content/types";

export function SiteFooter({ locale = "es" }: { locale?: Locale }) {
  const city = locale === "en" ? "Mexico City" : site.city;

  return (
    <footer
      className="on-dark mt-auto h-[88px] box-border px-6 md:px-24 flex items-center justify-between text-sm gap-4 flex-wrap"
      style={{ background: "var(--color-observatory)", color: "var(--color-mist)" }}
    >
      <span>
        {site.name}, {city}
      </span>
      <a
        href={site.orcidUrl}
        className="py-3"
        style={{ color: "var(--color-signal)" }}
      >
        ORCID {site.orcid}
      </a>
    </footer>
  );
}
