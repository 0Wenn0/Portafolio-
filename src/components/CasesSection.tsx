"use client";

import { useState } from "react";
import Link from "next/link";
import { getCases } from "@/content/cases";
import { getMetrics } from "@/content/metrics";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

/* Casos como tarjetas visuales: imagen, cifra protagonista, el reto en una línea y un solo llamado.
 * El detalle (contribución y resultado) queda a un clic; el caso completo, en su página. */
export function CasesSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const cases = getCases(locale);
  const metrics = getMetrics(locale);
  const [open, setOpen] = useState<number | null>(null);
  const prefix = locale === "en" ? "/en" : "";

  return (
    <section
      id="casos"
      aria-labelledby="casos-t"
      className="relative box-border px-6 md:px-24 pt-12 pb-16 md:pb-24 flex flex-col gap-10 overflow-hidden"
    >
      <ActNumeral numeral="II" label={locale === "en" ? "II · Case studies" : "II · Casos"} />
      <div className="flex flex-col gap-3 max-w-[720px]" data-sr>
        <h2
          id="casos-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[44px] text-(--color-blue)"
        >
          {ui.casesTitle}
        </h2>
        <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">{ui.casesSubtitle}</p>
      </div>

      <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((c, index) => {
          const isOpen = open === index;
          const titleId = `caso-${index}`;
          const panelId = `resumen-${index}`;
          const note = metrics.find((m) => m.caseId === c.id);
          return (
            <li key={c.title} data-sr data-sr-delay={String(index % 2)}>
              <article
                aria-labelledby={titleId}
                className="case-card h-full flex flex-col rounded-xl overflow-hidden border"
                style={{ borderColor: "var(--color-hairline)", background: "#efe8de" }}
              >
                <div className="frame relative w-full aspect-[16/9]" style={{ background: c.image?.endsWith(".svg") ? "var(--color-ivory)" : "var(--color-observatory)" }}>
                  {c.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.image} alt={c.imageAlt} className={`absolute inset-0 w-full h-full ${c.image.endsWith(".svg") ? "object-contain px-4 pb-3 pt-12" : "object-cover object-top"}`} loading="lazy" />
                  ) : null}
                  <span
                    className="absolute z-10 left-4 top-4 text-[13px] font-semibold text-(--color-blue) px-2.5 py-1 rounded"
                    style={{ background: "var(--color-dawn)" }}
                  >
                    {c.line}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 md:p-7 flex-1">
                  {c.metric ? (
                    <p className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span
                        className="font-[family-name:var(--font-display)] font-semibold text-[40px] md:text-[48px] leading-none"
                        style={{ color: "var(--color-metric)" }}
                      >
                        {c.metric}
                      </span>
                      <span className="text-[15px] leading-snug text-(--color-secondary)">{c.metricLabel}</span>
                    </p>
                  ) : null}
                  <h3
                    id={titleId}
                    className="m-0 font-[family-name:var(--font-display)] font-semibold text-[26px] md:text-[30px] leading-tight text-(--color-blue)"
                  >
                    {c.title}
                  </h3>
                  <p className="m-0 text-[17px] leading-relaxed text-(--color-blue)">{c.reto}</p>
                  <p className="m-0 text-sm text-(--color-secondary)">
                    {c.org} · {c.period}
                  </p>
                  <div className="mt-auto pt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {c.deepDiveHref ? (
                      <Link
                        href={`${prefix}${c.deepDiveHref}`}
                        className="inline-flex items-center min-h-11 py-2 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px]"
                      >
                        {c.deepDiveLabel ?? ui.viewFullArchitecture} →
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="inline-flex items-center gap-2 min-h-11 p-0 border-0 bg-transparent text-(--color-link) text-base font-medium underline"
                      style={{ textUnderlineOffset: 3 }}
                    >
                      {isOpen ? ui.hideSummary : ui.viewSummary}
                    </button>
                  </div>
                  {isOpen ? (
                    <div id={panelId} className="reveal flex flex-col gap-4 p-5 rounded-lg" style={{ background: "var(--color-dawn)" }}>
                      <p className="m-0 text-sm text-(--color-secondary)">
                        <strong className="font-semibold text-(--color-blue)">{ui.role}:</strong> {c.role}
                      </p>
                      <div className="flex flex-col gap-1">
                        <h4 className="m-0 text-sm font-semibold text-(--color-blue)">{ui.myContribution}</h4>
                        <p className="m-0 text-base leading-relaxed text-(--color-blue)">{c.contrib}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="m-0 text-sm font-semibold text-(--color-blue)">{ui.result}</h4>
                        <p className="m-0 text-base leading-relaxed text-(--color-blue)">{c.resultado}</p>
                      </div>
                      {c.bridge ? <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary)">{c.bridge}</p> : null}
                      {note ? (
                        <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: "var(--color-hairline)" }}>
                          <h4 className="m-0 text-sm font-semibold text-(--color-blue)">
                            {locale === "en" ? "About the number" : "Ficha de la cifra"}: {note.value} {note.aside}
                          </h4>
                          <dl className="m-0 grid grid-cols-[104px_1fr] gap-x-3 gap-y-1.5 text-sm leading-snug">
                            <dt className="font-semibold text-(--color-blue)">{ui.whatItMeasures}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.mide}</dd>
                            <dt className="font-semibold text-(--color-blue)">{ui.period}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.periodo}</dd>
                            <dt className="font-semibold text-(--color-blue)">{ui.contributionLabel}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.contribucion}</dd>
                            <dt className="font-semibold text-(--color-blue)">{ui.source}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.fuente}</dd>
                            <dt className="font-semibold text-(--color-blue)">{ui.limit}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.limite}</dd>
                          </dl>
                        </div>
                      ) : null}
                      {c.pdfHref ? (
                        <a href={c.pdfHref} target="_blank" rel="noopener noreferrer" className="self-start text-[15px] font-medium">
                          {ui.downloadDeckPdf}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
