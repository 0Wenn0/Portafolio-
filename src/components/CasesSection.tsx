"use client";

import { useState } from "react";
import Link from "next/link";
import { cases } from "@/content/cases";
import { site } from "@/content/site";

export function CasesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="casos"
      aria-labelledby="casos-t"
      className="box-border px-6 md:px-24 pt-12 pb-16 md:pb-24 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-3 max-w-[720px]">
        <h2
          id="casos-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[44px] text-(--color-blue)"
        >
          Casos seleccionados
        </h2>
        <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
          Cuatro problemas reales: qué decidí, qué hice y qué cambió.
        </p>
      </div>

      {cases.map((caseItem, index) => {
        const isOpen = open === index;
        const titleId = `caso-${index}`;
        const panelId = `resumen-${index}`;
        return (
          <article
            key={caseItem.title}
            aria-labelledby={titleId}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t"
            style={{ borderColor: "var(--color-hairline)" }}
          >
            {caseItem.image ? (
              <div className="md:col-span-4 h-[180px] md:h-[232px] box-border rounded overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caseItem.image}
                  alt={caseItem.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className="md:col-span-4 h-[180px] md:h-[232px] box-border border border-dashed rounded flex items-center justify-center text-sm text-center p-4"
                style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
              >
                {caseItem.imageAlt}
              </div>
            )}
            <div className="md:col-span-8 flex flex-col gap-3">
              <span
                className="self-start text-[13px] font-semibold text-(--color-blue) px-2 py-1 rounded"
                style={{ background: "var(--color-dawn)" }}
              >
                {caseItem.line}
              </span>
              <h3
                id={titleId}
                className="m-0 font-[family-name:var(--font-display)] font-semibold text-[26px] md:text-[32px] leading-tight text-(--color-blue)"
              >
                {caseItem.title}
              </h3>
              <dl className="m-0 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm leading-snug">
                <div>
                  <dt className="text-(--color-secondary)">Organización</dt>
                  <dd className="m-0 mt-1 text-(--color-blue)">{caseItem.org}</dd>
                </div>
                <div>
                  <dt className="text-(--color-secondary)">Periodo</dt>
                  <dd className="m-0 mt-1 text-(--color-blue)">{caseItem.period}</dd>
                </div>
                <div>
                  <dt className="text-(--color-secondary)">Mi rol</dt>
                  <dd className="m-0 mt-1 text-(--color-blue)">{caseItem.role}</dd>
                </div>
              </dl>
              <p className="m-0 text-[17px] leading-relaxed text-(--color-blue) max-w-[640px]">
                {caseItem.reto}
              </p>
              {caseItem.bridge ? (
                <p
                  className="m-0 pl-3 text-[15px] leading-relaxed text-(--color-secondary) max-w-[640px]"
                  style={{ borderLeft: "2px solid var(--color-rose)" }}
                >
                  {caseItem.bridge}
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="self-start inline-flex items-center gap-2 min-h-11 p-0 border-0 bg-transparent text-(--color-link) text-base font-medium underline"
                style={{ textUnderlineOffset: 3 }}
              >
                {isOpen ? "Ocultar resumen" : "Ver resumen del caso"}
                <svg
                  className={`chev ${isOpen ? "open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    fill="none"
                    stroke="#2F5E96"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            {isOpen ? (
              <div
                id={panelId}
                className="reveal md:col-start-5 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded"
                style={{ background: "var(--color-dawn)" }}
              >
                <div className="flex flex-col gap-2">
                  <h4 className="m-0 text-sm font-semibold text-(--color-blue)">
                    Mi contribución
                  </h4>
                  <p className="m-0 text-base leading-relaxed text-(--color-blue)">
                    {caseItem.contrib}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="m-0 text-sm font-semibold text-(--color-blue)">
                    Resultado
                  </h4>
                  <p className="m-0 text-base leading-relaxed text-(--color-blue)">
                    {caseItem.resultado}
                  </p>
                </div>
                <div className="sm:col-span-2 flex items-center gap-6 flex-wrap">
                  <a
                    href={site.cvHref}
                    download
                    className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px]"
                  >
                    Descargar CV
                  </a>
                  {caseItem.deepDiveHref ? (
                    <Link
                      href={caseItem.deepDiveHref}
                      className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px]"
                      style={{ borderColor: "var(--color-blue)" }}
                    >
                      Ver la arquitectura completa
                    </Link>
                  ) : null}
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
