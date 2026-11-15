import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAdoptionDiagnostic } from "@/content/adoptionDiagnostic";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const sectionClass = "box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b";
const h2Class =
  "m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] leading-tight text-(--color-blue)";
const hairline = { borderColor: "var(--color-hairline)" };

export function AdoptionDiagnosticCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const c = getAdoptionDiagnostic(locale);

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
          <p
            className="m-0 pl-3 text-[15px] leading-relaxed text-(--color-blue) max-w-[70ch]"
            style={{ borderLeft: "2px solid var(--color-rose)" }}
          >
            {c.notice}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={c.dashboardHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
            >
              {c.openDashboard}
            </a>
            <a
              href={c.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
              style={{ borderColor: "var(--color-blue)" }}
            >
              {c.openRepo}
            </a>
          </div>
        </section>

        <section aria-labelledby="problema-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="problema-t" className={`md:col-span-4 ${h2Class}`}>
            {c.problemTitle}
          </h2>
          <div className="md:col-span-7 flex flex-col gap-4">
            {c.problem.map((p) => (
              <p key={p} className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="variables-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-3">
            <h2 id="variables-t" className={h2Class}>
              {c.variablesTitle}
            </h2>
            <p className="m-0 text-[17px] leading-relaxed text-(--color-secondary)">{c.variablesIntro}</p>
          </div>
          <dl className="md:col-span-8 m-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {c.variables.map((v) => (
              <div key={v.name} className="py-4 border-t flex flex-col gap-1" style={hairline}>
                <dt className="font-semibold text-[17px] text-(--color-blue)">{v.name}</dt>
                <dd className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{v.desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="evident-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-3">
            <h2 id="evident-t" className={h2Class}>
              {c.evidentTitle}
            </h2>
            <p className="m-0 text-[17px] leading-relaxed text-(--color-secondary)">{c.evidentIntro}</p>
            <Link href={c.evidentLink.href} className="text-[16px] font-medium w-fit">
              {c.evidentLink.label} →
            </Link>
          </div>
          <ol className="md:col-span-8 m-0 p-0 list-none flex flex-col">
            {c.rows.map((row) => (
              <li
                key={row.name}
                className="grid grid-cols-[4.5rem_1fr] gap-4 py-5 border-t"
                style={hairline}
              >
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-display)] text-[32px] leading-none text-(--color-metric)"
                >
                  {row.letter}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-[18px] font-semibold text-(--color-blue)">
                    <span className="sr-only">{row.letter}: </span>
                    {row.name}
                  </h3>
                  <p className="m-0 text-[16px] leading-relaxed text-(--color-blue) max-w-[65ch]">{row.inCase}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="real-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="real-t" className={`md:col-span-4 ${h2Class}`}>
            {c.realTitle}
          </h2>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.real.map((group) => (
              <div key={group.label} className="flex flex-col gap-2 border-t pt-4" style={hairline}>
                <h3 className="m-0 text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)">
                  {group.label}
                </h3>
                <ul className="m-0 pl-5 flex flex-col gap-2 text-[16px] leading-relaxed text-(--color-blue)">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="px-6 md:px-24 py-12">
          <Link
            href={c.backHref}
            className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
          >
            {c.backToCases}
          </Link>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
