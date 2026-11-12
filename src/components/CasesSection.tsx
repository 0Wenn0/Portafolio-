"use client";

import { useState } from "react";
import Link from "next/link";
import { getCases } from "@/content/cases";
import { getMetrics } from "@/content/metrics";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { CountUp } from "./CountUp";

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
      className="relative box-border px-6 md:px-24 pt-20 md:pt-28 pb-8 flex flex-col"
    >
      <div className="section-head" data-sr>
        <h2 id="casos-t">{ui.casesTitle}</h2>
        <p>{ui.casesSubtitle}</p>
      </div>

      <ol className="m-0 p-0 list-none flex flex-col gap-24 md:gap-32 pt-12 md:pt-16">
        {cases.map((c, index) => {
          const isOpen = open === index;
          const titleId = `caso-${index}`;
          const panelId = `resumen-${index}`;
          const note = metrics.find((m) => m.caseId === c.id);
          const href = c.deepDiveHref ? `${prefix}${c.deepDiveHref}` : null;
          const alt = index % 2 === 1;
          return (
            <li key={c.title} data-sr>
              <article
                aria-labelledby={titleId}
                className="case-row grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
              >
                <div className={`md:col-span-7 ${alt ? "md:order-2" : ""}`}>
                  <div className={`case-media${c.image?.endsWith(".svg") ? " is-diagram" : ""}`}>
                    {c.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.image} alt={c.imageAlt} loading="lazy" />
                    ) : null}
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col gap-4">
                  <p className="m-0 text-[15px] text-(--color-secondary)">{c.line}</p>
                  {c.metric ? (
                    <p className="m-0 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <CountUp
                        value={c.metric}
                        className="font-[family-name:var(--font-display)] font-[400] text-[56px] md:text-[80px] leading-[0.9] tracking-[-0.03em] text-(--color-blue)"
                        style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
                      />
                      <span className="text-base leading-snug text-(--color-secondary) max-w-[240px]">{c.metricLabel}</span>
                    </p>
                  ) : null}
                  <h3
                    id={titleId}
                    className="m-0 font-[family-name:var(--font-display)] font-[450] text-[30px] md:text-[42px] leading-[1.08] tracking-[-0.01em] text-(--color-blue)"
                  >
                    {href ? (
                      <Link href={href} className="ink-underline">
                        {c.title}
                      </Link>
                    ) : (
                      c.title
                    )}
                  </h3>
                  <p className="m-0 text-lg leading-relaxed text-(--color-secondary) max-w-[500px]">{c.reto}</p>
                  <p className="m-0 font-[family-name:var(--font-display)] italic text-[17px] text-(--color-secondary)">
                    {c.org}, {c.period}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {href ? (
                      <Link href={href} className="btn-ink">
                        {c.deepDiveLabel ?? (locale === "en" ? "See the case" : "Ver el caso")}
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={href ? "btn-line bg-transparent" : "btn-ink border-0"}
                    >
                      {isOpen ? ui.hideSummary : ui.viewSummary}
                    </button>
                  </div>
                  {isOpen ? (
                    <div
                      id={panelId}
                      className="reveal flex flex-col gap-4 p-6 rounded-2xl bg-white"
                      style={{ boxShadow: "0 1px 2px rgba(17,26,46,.06), 0 20px 40px -24px rgba(17,26,46,.35)" }}
                    >
                      <p className="m-0 text-[15px] text-(--color-secondary)">
                        <strong className="text-(--color-blue)">{ui.role}:</strong> {c.role}
                      </p>
                      <div className="flex flex-col gap-1">
                        <h4 className="m-0 text-[15px] font-bold text-(--color-blue)">{ui.myContribution}</h4>
                        <p className="m-0 text-base leading-relaxed text-(--color-blue)">{c.contrib}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="m-0 text-[15px] font-bold text-(--color-blue)">{ui.result}</h4>
                        <p className="m-0 text-base leading-relaxed text-(--color-blue)">{c.resultado}</p>
                      </div>
                      {c.bridge ? <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary)">{c.bridge}</p> : null}
                      {note ? (
                        <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: "var(--color-hairline)" }}>
                          <h4 className="m-0 text-[15px] font-bold text-(--color-blue)">
                            {locale === "en" ? "About the number" : "Ficha de la cifra"}: {note.value} {note.aside}
                          </h4>
                          <dl className="m-0 grid grid-cols-[104px_1fr] gap-x-3 gap-y-1.5 text-sm leading-snug">
                            <dt className="font-bold text-(--color-blue)">{ui.whatItMeasures}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.mide}</dd>
                            <dt className="font-bold text-(--color-blue)">{ui.period}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.periodo}</dd>
                            <dt className="font-bold text-(--color-blue)">{ui.contributionLabel}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.contribucion}</dd>
                            <dt className="font-bold text-(--color-blue)">{ui.source}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.fuente}</dd>
                            <dt className="font-bold text-(--color-blue)">{ui.limit}</dt>
                            <dd className="m-0 text-(--color-blue)">{note.limite}</dd>
                          </dl>
                        </div>
                      ) : null}
                      {c.pdfHref ? (
                        <a href={c.pdfHref} target="_blank" rel="noopener noreferrer" className="self-start text-[15px] font-bold">
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
      </ol>
    </section>
  );
}
