import Link from "next/link";
import { getMethodSteps } from "@/content/method";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

/* Versión de inicio de «Cómo trabajo»: los cuatro pasos y una puerta a EVIDENT.
 * Ejemplos por caso, marcos y métodos en prueba viven en la página del método. */
export function HowIWorkCompact({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const steps = getMethodSteps(locale);
  const en = locale === "en";

  return (
    <section
      id="como-trabajo"
      aria-labelledby="como-t"
      className="on-dark relative box-border px-6 md:px-24 py-16 md:py-24 flex flex-col gap-10 overflow-hidden"
      style={{ background: "var(--color-blue)" }}
    >
      <ActNumeral numeral="IV" label={en ? "IV · How I work" : "IV · Cómo trabajo"} />
      <div className="section-head" data-sr>
        <h2 id="como-t">{ui.howIWorkTitle}</h2>
        <p>
          {en
            ? "Four steps that repeat in every project, each with a framework behind it and an indicator at the end."
            : "Cuatro pasos que se repiten en cada proyecto, cada uno con un marco detrás y un indicador al final."}
        </p>
      </div>
      <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className="flex flex-col gap-3 pt-5 border-t"
            style={{ borderColor: "var(--color-secondary)" }}
            data-sr
            data-sr-delay={String(index)}
          >
            <span
              aria-hidden="true"
              className="font-[family-name:var(--font-display)] text-[48px] font-[350] leading-none"
              style={{ color: "var(--color-rose)", fontVariantNumeric: "lining-nums tabular-nums" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-[family-name:var(--font-display)] text-[28px] font-[450] text-(--color-ivory)">
              {step.name}
            </h3>
            <p className="m-0 text-base leading-relaxed text-(--color-mist)">{step.desc}</p>
          </li>
        ))}
      </ol>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-2" data-sr>
        <p className="m-0 max-w-[620px] text-base leading-relaxed text-(--color-mist)">{ui.evidentTeaser}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 shrink-0">
        <Link
          href={ui.evidentHref}
          className="shrink-0 inline-flex items-center min-h-12 px-6 rounded-full no-underline font-bold text-[16px] text-(--color-blue) hover:text-(--color-blue)"
          style={{ background: "var(--color-amber)" }}
        >
          {ui.evidentLink}
        </Link>
        <Link
          href={en ? "/en/como-trabajo" : "/como-trabajo"}
          className="inline-flex items-center min-h-11 text-[15px] font-medium text-(--color-ivory) underline"
          style={{ textUnderlineOffset: 3 }}
        >
          {en ? "Each step with real examples" : "Cada paso con ejemplos reales"}
        </Link>
        </div>
      </div>
    </section>
  );
}
