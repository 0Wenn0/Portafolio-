import Link from "next/link";
import { DetailAccordion } from "@/components/DetailAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getMethodTwoTools } from "@/content/methodTwoTools";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const sectionClass = "box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b";
const h2Class =
  "md:col-span-4 m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] leading-tight text-(--color-blue)";
const labelClass = "block text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)";
const hairline = { borderColor: "var(--color-hairline)" };

export function MethodTwoToolsCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const c = getMethodTwoTools(locale);
  const backHref = locale === "en" ? "/en#diseno-instruccional" : "/#diseno-instruccional";

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        {ui.skipLink}
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        <section
          className="box-border px-6 md:px-24 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col gap-6 border-b"
          style={hairline}
        >
          <p className="m-0 text-sm font-medium tracking-wide uppercase text-(--color-secondary)">{c.eyebrow}</p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            {c.title}
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">{c.intro}</p>
          <dl className="m-0 mt-2 grid grid-cols-3 gap-4 md:gap-6 max-w-[900px]">
            {c.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1 border-t pt-4" style={hairline}>
                <dt className="text-[15px] leading-snug text-(--color-secondary)">{s.label}</dt>
                <dd className="m-0 font-[family-name:var(--font-display)] text-[36px] md:text-[44px] leading-none text-(--color-metric)">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="problema-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="problema-t" className={h2Class}>
            {c.problemTitle}
          </h2>
          <p className="md:col-span-7 m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">{c.problem}</p>
        </section>

        <section aria-labelledby="metodo-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="metodo-t" className={h2Class}>
            {c.methodTitle}
          </h2>
          <ol className="md:col-span-8 m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.methodSteps.map((s, i) => (
              <li key={s.step} className="flex flex-col gap-2 border-t pt-4" style={hairline}>
                <span className="text-[13px] text-(--color-secondary)">{i + 1}</span>
                <span className="font-[family-name:var(--font-display)] font-semibold text-[24px] text-(--color-blue)">
                  {s.step}
                </span>
                <span className="text-[16px] leading-relaxed text-(--color-blue)">{s.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="herramientas-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="herramientas-t" className={h2Class.replace("md:col-span-4 ", "")}>
              {c.toolsTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.toolsIntro}</p>
          </div>
          <ul className="md:col-span-8 m-0 p-0 list-none grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col gap-3 p-6 rounded-lg border"
                style={{ borderColor: "var(--color-hairline)", background: "rgba(255,255,255,0.25)" }}
              >
                <span className={labelClass}>{tool.kind}</span>
                <h3 className="m-0 font-[family-name:var(--font-display)] font-semibold text-[22px] leading-tight text-(--color-blue)">
                  {tool.name}
                </h3>
                <p className="m-0 text-[16px] leading-relaxed text-(--color-blue)">{tool.text}</p>
                {tool.link.internal ? (
                  <Link href={tool.link.href} className="inline-flex items-center min-h-11 text-base font-medium mt-auto">
                    {tool.link.label}
                  </Link>
                ) : (
                  <a
                    href={tool.link.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${tool.link.label} ${ui.opensInNewTab}`}
                    className="inline-flex items-center min-h-11 text-base font-medium mt-auto"
                  >
                    {tool.link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="pruebas-t" className="box-border px-6 md:px-24 py-12 md:py-16 flex flex-col gap-6 border-b" style={hairline}>
          <h2 id="pruebas-t" className={h2Class.replace("md:col-span-4 ", "")}>
            {c.testsTitle}
          </h2>
          <p className="m-0 text-lg leading-relaxed text-(--color-secondary) max-w-[70ch]">{c.testsIntro}</p>
          <ol className="m-0 p-0 list-none flex flex-col">
            {c.tests.map((row) => (
              <li
                key={row.test}
                data-sr
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 border-t"
                style={hairline}
              >
                <div className="md:col-span-3 flex flex-col gap-2">
                  <h3 className="m-0 text-[17px] font-semibold leading-snug text-(--color-blue)">{row.test}</h3>
                  <p className="m-0 text-[15px] leading-snug text-(--color-secondary)">
                    <span className={labelClass}>{c.testHeads.looking}</span>
                    {row.looking}
                  </p>
                </div>
                <p className="md:col-span-4 m-0 text-[16px] leading-relaxed text-(--color-blue)">
                  <span className={labelClass}>{c.testHeads.result}</span>
                  {row.result}
                </p>
                <div className="md:col-span-5 flex flex-col gap-2">
                  <p
                    className="m-0 pl-3 text-[16px] leading-relaxed text-(--color-blue)"
                    style={{ borderLeft: "2px solid var(--color-rose)" }}
                  >
                    <span className={labelClass}>{c.testHeads.fix}</span>
                    {row.fix}
                  </p>
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${c.openChat}: ${row.test} ${ui.opensInNewTab}`}
                    className="inline-flex items-center min-h-11 text-[15px] font-medium w-fit"
                  >
                    {c.openChat}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="antes-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="antes-t" className={h2Class.replace("md:col-span-4 ", "")}>
              {c.beforeAfterTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.beforeAfterIntro}</p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <figure
                className="m-0 p-5 rounded-lg border flex flex-col gap-3"
                style={{ borderColor: "var(--color-rose)", borderStyle: "dashed" }}
              >
                <figcaption className={labelClass}>{c.beforeLabel}</figcaption>
                <blockquote className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.before}</blockquote>
              </figure>
              <figure
                className="m-0 p-5 rounded-lg border flex flex-col gap-3"
                style={{ borderColor: "var(--color-blue)" }}
              >
                <figcaption className={labelClass}>{c.afterLabel}</figcaption>
                <blockquote className="m-0 text-[16px] leading-relaxed text-(--color-blue)">{c.after}</blockquote>
              </figure>
            </div>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-blue) max-w-[70ch]">{c.beforeAfterNote}</p>
          </div>
        </section>

        <section aria-labelledby="piloto-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="piloto-t" className={h2Class.replace("md:col-span-4 ", "")}>
              {c.pilotTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.pilotIntro}</p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              <span className={labelClass}>{c.pilotQuestionLabel}</span>
              {c.pilotQuestion}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">{c.pilotWeeksLabel}</h3>
              <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {c.pilotWeeks.map((w) => (
                  <li key={w.when} className="flex flex-col gap-1 border-t pt-3" style={hairline}>
                    <span className="text-[13px] font-semibold uppercase tracking-wide text-(--color-metric)">{w.when}</span>
                    <span className="text-[15px] leading-snug text-(--color-blue)">{w.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">{c.pilotIndicatorsLabel}</h3>
              <ul className="m-0 p-0 list-none flex flex-col">
                {c.pilotIndicators.map((row) => (
                  <li
                    key={row.dimension}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 border-t"
                    style={hairline}
                  >
                    <span className="sm:col-span-3 text-[15px] font-semibold text-(--color-blue)">{row.dimension}</span>
                    <span className="sm:col-span-6 text-[15px] leading-snug text-(--color-blue)">{row.indicator}</span>
                    <span className="sm:col-span-3 text-[15px] font-medium text-(--color-metric)">
                      <span className="sr-only">{c.pilotHeads.target}: </span>
                      {row.target}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p
              className="m-0 pl-3 text-[16px] leading-relaxed text-(--color-blue) max-w-[70ch]"
              style={{ borderLeft: "2px solid var(--color-rose)" }}
            >
              {c.pilotDecision}
            </p>
          </div>
        </section>

        <section id="evaluacion" aria-labelledby="eval-t" className={`${sectionClass} scroll-mt-24`} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="eval-t" className={h2Class.replace("md:col-span-4 ", "")}>
              {c.evalTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.evalIntro}</p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">{c.kirkTitle}</h3>
              <ul className="m-0 p-0 list-none flex flex-col">
                {c.kirkLevels.map((row) => (
                  <li
                    key={row.level}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 border-t"
                    style={hairline}
                  >
                    <span className="sm:col-span-3 text-[15px] font-semibold text-(--color-blue)">{row.level}</span>
                    <span className="sm:col-span-7 flex flex-col gap-1">
                      <span className="text-[15px] leading-snug text-(--color-blue)">
                        <span className="sr-only">{c.kirkHeads.question}: </span>
                        {row.question}
                      </span>
                      <span className="text-[15px] leading-snug text-(--color-secondary)">
                        <span className="sr-only">{c.kirkHeads.instrument}: </span>
                        {row.instrument}
                      </span>
                    </span>
                    <span className="sm:col-span-2 text-[15px] font-medium text-(--color-metric)">
                      <span className="sr-only">{c.kirkHeads.when}: </span>
                      {row.when}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary) max-w-[70ch]">{c.kirkOut}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">{c.scmTitle}</h3>
              <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.scmSteps.map((s, i) => (
                  <li key={s.step} className="flex flex-col gap-1 border-t pt-3" style={hairline}>
                    <span className="text-[13px] font-semibold uppercase tracking-wide text-(--color-metric)">
                      {i + 1}. {s.step}
                    </span>
                    <span className="text-[15px] leading-snug text-(--color-blue)">{s.text}</span>
                  </li>
                ))}
              </ol>
              <DetailAccordion label={c.interviewLabel}>
                <ol className="m-0 pl-5 flex flex-col gap-2 text-[15px] leading-snug text-(--color-blue)">
                  {c.interviewQuestions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ol>
              </DetailAccordion>
            </div>
            <p
              className="m-0 pl-3 text-[16px] leading-relaxed text-(--color-blue) max-w-[70ch]"
              style={{ borderLeft: "2px solid var(--color-rose)" }}
            >
              {c.ethicsNote}
            </p>
          </div>
        </section>

        <section aria-labelledby="real-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="real-t" className={h2Class}>
            {c.readTitle}
          </h2>
          <div className="md:col-span-7 flex flex-col gap-6">
            <ul className="m-0 pl-5 flex flex-col gap-3 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              {c.readItems.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href={c.skillLink.href}
                target="_blank"
                rel="noopener"
                aria-label={`${c.skillLink.label} ${ui.opensInNewTab}`}
                className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
                style={{ borderColor: "var(--color-blue)" }}
              >
                {c.skillLink.label}
              </a>
              <Link
                href={backHref}
                className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
              >
                {c.backToWork}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
