import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer
      className="on-dark mt-auto h-[88px] box-border px-6 md:px-24 flex items-center justify-between text-sm gap-4 flex-wrap"
      style={{ background: "var(--color-observatory)", color: "var(--color-mist)" }}
    >
      <span>
        {site.name}, {site.city}
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
