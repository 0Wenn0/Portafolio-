"use client";

import { useState } from "react";
import { metrics } from "@/content/metrics";

export function ResultsSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section
      aria-labelledby="resultados"
      className="box-border px-6 md:px-24 pt-16 pb-12 flex flex-col gap-8"
    >
      <h2 id="resultados" className="m-0 text-base font-semibold text-(--color-blue)">
        Resultados con contexto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {metrics.map((metric, index) => {
          const isOpen = open === index;
          const panelId = `ficha-${index}`;
          return (
            <div
              key={metric.case}
              className="flex flex-col gap-2 pt-6 border-t border-(--color-blue)"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-[family-name:var(--font-display)] text-[56px] font-medium leading-none"
                  style={{
                    color: "var(--color-metric)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {metric.value}
                </span>
                <span className="text-sm text-(--color-secondary)">
                  {metric.aside}
                </span>
              </div>
              <p className="m-0 text-base leading-relaxed text-(--color-blue)">
                {metric.label}
              </p>
              <p className="m-0 text-sm text-(--color-secondary)">
                {metric.case}
              </p>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="self-start inline-flex items-center gap-2 min-h-11 p-0 border-0 bg-transparent text-(--color-link) text-[15px] font-medium underline"
                style={{ textUnderlineOffset: 3 }}
              >
                ¿De dónde sale este dato?
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
              {isOpen ? (
                <dl
                  id={panelId}
                  className="reveal m-0 p-4 grid grid-cols-[112px_1fr] gap-x-3 gap-y-2 rounded text-sm leading-snug"
                  style={{ background: "var(--color-dawn)" }}
                >
                  <dt className="font-semibold text-(--color-blue)">Qué mide</dt>
                  <dd className="m-0 text-(--color-blue)">{metric.mide}</dd>
                  <dt className="font-semibold text-(--color-blue)">Periodo</dt>
                  <dd className="m-0 text-(--color-blue)">{metric.periodo}</dd>
                  <dt className="font-semibold text-(--color-blue)">Mi parte</dt>
                  <dd className="m-0 text-(--color-blue)">
                    {metric.contribucion}
                  </dd>
                  <dt className="font-semibold text-(--color-blue)">Fuente</dt>
                  <dd className="m-0 text-(--color-blue)">{metric.fuente}</dd>
                  <dt className="font-semibold text-(--color-blue)">Límite</dt>
                  <dd className="m-0 text-(--color-blue)">{metric.limite}</dd>
                </dl>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
