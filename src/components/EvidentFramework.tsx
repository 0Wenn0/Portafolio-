import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getEvident } from "@/content/evident";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const sectionClass = "box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b";
const h2Class =
  "m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] leading-tight text-(--color-blue)";
const labelClass = "block text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)";
const hairline = { borderColor: "var(--color-hairline)" };

export function EvidentFramework({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const c = getEvident(locale);

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
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[48px] md:text-[80px] leading-[1.05] tracking-wide text-(--color-blue)">
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

        <section aria-labelledby="por-que-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="por-que-t" className={`md:col-span-4 ${h2Class}`}>
            {c.whyTitle}
          </h2>
          <div className="md:col-span-7 flex flex-col gap-4">
            {c.why.map((p) => (
              <p key={p} className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="principios-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-12 flex flex-col gap-2">
            <h2 id="principios-t" className={h2Class}>
              {c.principlesTitle}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">{c.principlesIntro}</p>
          </div>
          <ol className="md:col-span-12 m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {c.principles.map((p) => (
              <li key={p.name} className="flex flex-col gap-2 border-t pt-4" style={hairline}>
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-display)] text-[48px] leading-none text-(--color-metric)"
                >
                  {p.letter}
                </span>
                <h3 className="m-0 font-[family-name:var(--font-display)] font-semibold text-[22px] text-(--color-blue)">
                  {p.name}
                </h3>
                <p className="m-0 text-[16px] font-medium leading-snug text-(--color-blue)">{p.question}</p>
                <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary)">{p.practice}</p>
                <p className="m-0 mt-auto pt-2 text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)">
                  {c.stepLabel}: {p.step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="conexion-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="conexion-t" className={h2Class}>
              {c.linksTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.linksIntro}</p>
          </div>
          <ul className="md:col-span-8 m-0 p-0 list-none flex flex-col">
            {c.links.map((row) => (
              <li
                key={row.step}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-t"
                style={hairline}
              >
                <h3 className="sm:col-span-3 m-0 text-[17px] font-semibold text-(--color-blue)">{row.step}</h3>
                <p className="sm:col-span-4 m-0 text-[16px] leading-snug font-medium text-(--color-blue)">
                  <span className="sr-only">{c.linkHeads.question}: </span>
                  {row.question}
                </p>
                <p className="sm:col-span-5 m-0 text-[15px] leading-relaxed text-(--color-secondary)">
                  <span className="sr-only">{c.linkHeads.frameworks}: </span>
                  {row.frameworks}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="evidencia-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="evidencia-t" className={h2Class}>
              {c.evidenceTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.evidenceIntro}</p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6">
            <ul className="m-0 p-0 list-none flex flex-col">
              {c.findings.map((f) => (
                <li
                  key={f.href}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-5 border-t"
                  style={hairline}
                >
                  <p className="md:col-span-6 m-0 text-[16px] leading-relaxed text-(--color-blue)">
                    <span className={labelClass}>{c.evidenceHeads.finding}</span>
                    {f.finding}
                  </p>
                  <div className="md:col-span-6 flex flex-col gap-2">
                    <p
                      className="m-0 pl-3 text-[16px] leading-relaxed text-(--color-blue)"
                      style={{ borderLeft: "2px solid var(--color-rose)" }}
                    >
                      <span className={labelClass}>{c.evidenceHeads.decision}</span>
                      {f.decision}
                    </p>
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${c.evidenceHeads.source}: ${f.source} ${ui.opensInNewTab}`}
                      className="inline-flex items-center min-h-11 text-[15px] font-medium w-fit"
                    >
                      {f.source}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary) max-w-[70ch]">{c.evidenceNote}</p>
          </div>
        </section>

        <section aria-labelledby="caso-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="caso-t" className={h2Class}>
              {c.kitTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.kitIntro}</p>
            <Link
              href={c.kitLink.href}
              className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
              style={{ borderColor: "var(--color-blue)" }}
            >
              {c.kitLink.label}
            </Link>
          </div>
          <EvidentKitList locale={locale} className="md:col-span-8" />
        </section>

        <section aria-labelledby="real-evident-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="real-evident-t" className={`md:col-span-4 ${h2Class}`}>
            {c.readTitle}
          </h2>
          <div className="md:col-span-7 flex flex-col gap-6">
            <ul className="m-0 pl-5 flex flex-col gap-3 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              {c.readItems.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link
              href={c.backHref}
              className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
            >
              {c.backToMethod}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

/** The Kit case read through the eight principles; shared by the EVIDENT page and the case study. */
export function EvidentKitList({ locale = "es", className = "" }: { locale?: Locale; className?: string }) {
  const c = getEvident(locale);
  return (
    <ul className={`m-0 p-0 list-none flex flex-col ${className}`}>
      {c.kitRows.map((row) => (
        <li
          key={`${row.letter}-${row.name}`}
          className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-t"
          style={hairline}
        >
          <h3 className="sm:col-span-3 m-0 flex items-baseline gap-2 text-[17px] font-semibold text-(--color-blue)">
            <span aria-hidden="true" className="font-[family-name:var(--font-display)] text-[24px] text-(--color-metric)">
              {row.letter}
            </span>
            {row.name}
          </h3>
          <p className="sm:col-span-6 m-0 text-[15px] leading-snug text-(--color-blue)">
            <span className="sr-only">{c.kitHeads.where}: </span>
            <Link href={row.href} className="underline underline-offset-4" style={{ textDecorationColor: "var(--color-rose)" }}>
              {row.where}
            </Link>
          </p>
          <p
            className="sm:col-span-3 m-0 text-[15px] font-medium leading-snug"
            style={{ color: row.done ? "var(--color-metric)" : "var(--color-secondary)" }}
          >
            <span className="sr-only">{c.kitHeads.status}: </span>
            {row.status}
          </p>
        </li>
      ))}
    </ul>
  );
}
