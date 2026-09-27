"use client";

import { useState } from "react";
import { methodFundamentals, methodSteps } from "@/content/method";

export function HowIWorkSection() {
  const [step, setStep] = useState(0);
  const total = methodSteps.length;
  const current = methodSteps[step] ?? methodSteps[0]!;

  const moveStep = (delta: number) => {
    setStep((current) => (current + delta + total) % total);
  };

  return (
    <section
      id="como-trabajo"
      className="on-dark box-border px-6 md:px-24 py-16 md:py-24 flex flex-col gap-12"
      style={{ background: "var(--color-blue)" }}
      aria-labelledby="como-t"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6">
        <div className="md:col-span-4 flex flex-col gap-3">
          <h2
            id="como-t"
            className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[44px] text-(--color-ivory)"
          >
            Cómo trabajo
          </h2>
          <p className="m-0 text-lg leading-relaxed text-(--color-mist)">
            Tres fundamentos explican por qué trabajo así.
          </p>
        </div>
        <div className="md:col-start-6 md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {methodFundamentals.map((item) => (
            <div key={item.name} className="flex flex-col gap-2">
              <h3 className="m-0 font-[family-name:var(--font-display)] text-[26px] font-semibold text-(--color-ivory)">
                {item.name}
              </h3>
              <p className="m-0 text-base leading-relaxed text-(--color-mist)">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col gap-8 pt-12 border-t"
        style={{ borderColor: "var(--color-secondary)" }}
      >
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <h3 id="metodo-t" className="m-0 text-lg font-semibold text-(--color-ivory)">
            El método, con ejemplos reales
          </h3>
          <p className="m-0 text-sm text-(--color-mist)">
            Elige un paso para ver cómo lo apliqué en cada caso.
          </p>
        </div>

        <div
          role="tablist"
          aria-labelledby="metodo-t"
          className="relative grid grid-cols-2 md:grid-cols-4"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[21px] h-px hidden md:block"
            style={{ background: "var(--color-secondary)" }}
          />
          {methodSteps.map((item, index) => {
            const selected = step === index;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                id={`tab-${index}`}
                aria-selected={selected}
                aria-controls="panel-metodo"
                tabIndex={selected ? 0 : -1}
                onClick={() => setStep(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    moveStep(1);
                  }
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    moveStep(-1);
                  }
                }}
                className="tab-btn relative flex flex-col items-start gap-3 py-3 border-0 bg-transparent text-left text-(--color-ivory)"
              >
                <span
                  aria-hidden="true"
                  className="block w-5 h-5 box-border rounded-full border-2"
                  style={{
                    borderColor: "var(--color-rose)",
                    background: selected ? "var(--color-rose)" : "var(--color-blue)",
                  }}
                />
                <span
                  className="font-[family-name:var(--font-display)] text-2xl md:text-[28px] font-semibold"
                  style={{
                    color: selected ? "var(--color-ivory)" : "var(--color-mist)",
                    textDecoration: selected ? "underline" : "none",
                    textDecorationColor: "var(--color-rose)",
                    textUnderlineOffset: 6,
                  }}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="panel-metodo"
          role="tabpanel"
          aria-labelledby={`tab-${step}`}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <p
            key={`desc-${step}`}
            className="reveal md:col-span-4 m-0 text-lg leading-relaxed text-(--color-ivory)"
          >
            {current.desc}
          </p>
          <div className="md:col-start-6 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {current.examples.map((example) => (
              <div
                key={`${step}-${example.case}`}
                className="reveal flex flex-col gap-2 pt-4 border-t"
                style={{ borderColor: "var(--color-rose)" }}
              >
                <span className="text-sm font-semibold" style={{ color: "var(--color-rose)" }}>
                  {example.case}
                </span>
                <p className="m-0 text-base leading-snug text-(--color-ivory)">
                  {example.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
