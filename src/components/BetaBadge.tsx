import type { Locale } from "@/content/types";

/**
 * Small fixed "Beta" tag. It lives in its own labelled <aside> so its text sits
 * inside a landmark (axe "region"), and screen readers hear what it refers to.
 */
export function BetaBadge({ locale = "es" }: { locale?: Locale }) {
  return (
    <aside
      aria-label={locale === "en" ? "Site status" : "Estado del sitio"}
      className="fixed bottom-4 right-4 z-30 text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none select-none"
      style={{
        background: "var(--color-blue)",
        color: "var(--color-ivory)",
        opacity: 0.85,
      }}
    >
      Beta
    </aside>
  );
}
