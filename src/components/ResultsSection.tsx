import { BeforeAfterBars } from "@/components/BeforeAfterBars";
import { CountUp } from "@/components/CountUp";
import { getMetrics } from "@/content/metrics";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function ResultsSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const metrics = getMetrics(locale);

  return (
    <section
      aria-labelledby="resultados"
      className="box-border px-6 md:px-24 pt-16 pb-12 flex flex-col gap-8"
    >
      <h2 id="resultados" className="m-0 text-base font-semibold text-(--color-blue)" data-sr>
        {ui.resultsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {metrics.map((metric, index) => {
          return (
            <div
              key={metric.case}
              className="flex flex-col gap-2 pt-6 border-t border-(--color-blue)"
              data-sr
              data-sr-delay={String(Math.min(index, 3))}
            >
              <div className="flex items-baseline gap-3">
                <CountUp
                  value={metric.value}
                  className="font-[family-name:var(--font-display)] text-[56px] font-medium leading-none"
                  style={{
                    color: "var(--color-metric)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                />
                <span className="text-sm text-(--color-secondary)">
                  {metric.aside}
                </span>
              </div>
              <p className="m-0 text-base leading-relaxed text-(--color-blue)">
                {metric.label}
              </p>
              {metric.compare ? <BeforeAfterBars {...metric.compare} /> : null}
              <p className="m-0 text-sm text-(--color-secondary)">
                {metric.case}
              </p>
            </div>
          );
        })}
      </div>
      <p className="m-0 text-[15px] text-(--color-secondary)" data-sr>
        {locale === "en" ? "Each number has its fact sheet (what it measures, source, limitation) in the " : "Cada cifra tiene su ficha (qué mide, fuente y límite) en el "}
        <a href="#casos" className="underline" style={{ textUnderlineOffset: 3 }}>
          {locale === "en" ? "case summary" : "resumen de su caso"}
        </a>
        .
      </p>
    </section>
  );
}
