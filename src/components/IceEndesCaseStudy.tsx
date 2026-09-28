import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { DetailAccordion } from "@/components/DetailAccordion";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const statsEs = [
  { value: "2,832", label: "variables catalogadas — 13 categorías, 0 sin clasificar" },
  { value: "37 × 19", label: "variables estratégicas × puntos de verificación, 21 años calendario" },
  { value: "45", label: "advertencias metodológicas documentadas, 12 críticas" },
  { value: "34,018", label: "personas en la base cognitiva v1, 43 variables" },
  { value: "19", label: "diccionarios históricos revisados, 1996–2024" },
];

const statsEn = [
  { value: "2,832", label: "catalogued variables — 13 categories, 0 unclassified" },
  { value: "37 × 19", label: "strategic variables × checkpoints, 21 calendar years" },
  { value: "45", label: "documented methodological warnings, 12 critical" },
  { value: "34,018", label: "people in cognitive base v1, 43 variables" },
  { value: "19", label: "historical dictionaries reviewed, 1996–2024" },
];

const surveyCardsEs = [
  { code: "PSU", label: "Unidad primaria de muestreo", desc: "Identifica el conglomerado dentro del diseño muestral." },
  { code: "EST", label: "Estrato", desc: "Estrato de diseño, verificado contra microdatos reales por año." },
  { code: "W", label: "Ponderador", desc: "Peso muestral, distinto por módulo y población objetivo." },
  { code: "svy", label: "Comando de encuesta", desc: "Encapsulado vía survey en R para cada tabla temática." },
];

const surveyCardsEn = [
  { code: "PSU", label: "Primary sampling unit", desc: "Identifies the cluster within the survey design." },
  { code: "EST", label: "Stratum", desc: "Design stratum, verified against real microdata by year." },
  { code: "W", label: "Weight", desc: "Survey weight, distinct by module and target population." },
  { code: "svy", label: "Survey command", desc: "Encapsulated via the survey package in R for each thematic table." },
];

const externalSourcesEs = [
  { code: "US", name: "NHANES", desc: "Registro de variables en PostgreSQL, inmutabilidad de archivos por ciclo.", tag: "CDC" },
  { code: "DHS", name: "IPUMS-DHS", desc: "Variables armonizadas entre años y países, pesos pre-transformados.", tag: "Univ. Minnesota" },
  { code: "R", name: "nhanesA", desc: "Encapsula svydesign() y controles de calidad por ciclo.", tag: "Paquete R" },
  { code: "PE", name: "CRONICAS", desc: "Cohorte peruana (UPCH): profundidad clínica en 4 sitios específicos — complementaria, no equivalente.", tag: "UPCH" },
  { code: "LAC", name: "SABE", desc: "Precedente regional en cognición y envejecimiento; ICE-ENDES tiene mayor continuidad temporal (1996–2024).", tag: "OPS/OMS" },
];

const externalSourcesEn = [
  { code: "US", name: "NHANES", desc: "Variable registry in PostgreSQL, file immutability per cycle.", tag: "CDC" },
  { code: "DHS", name: "IPUMS-DHS", desc: "Harmonized variables across years and countries, pre-transformed weights.", tag: "Univ. of Minnesota" },
  { code: "R", name: "nhanesA", desc: "Encapsulates svydesign() and quality controls per cycle.", tag: "R package" },
  { code: "PE", name: "CRONICAS", desc: "Peruvian cohort (UPCH): clinical depth at 4 specific sites — complementary, not equivalent.", tag: "UPCH" },
  { code: "LAC", name: "SABE", desc: "Regional precedent in cognition and aging; ICE-ENDES has greater temporal continuity (1996–2024).", tag: "PAHO/WHO" },
];

export function IceEndesCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const stats = locale === "en" ? statsEn : statsEs;
  const surveyCards = locale === "en" ? surveyCardsEn : surveyCardsEs;
  const externalSources = locale === "en" ? externalSourcesEn : externalSourcesEs;
  const backHref = locale === "en" ? "/en#casos" : "/#casos";

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        {ui.skipLink}
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        {/* Cover */}
        <section className="box-border px-6 md:px-24 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col gap-6 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <p className="m-0 text-sm font-medium tracking-wide uppercase text-(--color-secondary)">
            {ui.endesEyebrow}
          </p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            ICE-ENDES
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">
            {ui.endesIntro}
          </p>
          <dl className="m-0 flex flex-wrap gap-x-12 gap-y-4 mt-4 text-sm">
            <div>
              <dt className="text-(--color-secondary)">{ui.endesRole}</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">{ui.endesRoleValue}</dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">{ui.endesSource}</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">{ui.endesSourceValue}</dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">{ui.endesCoverage}</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">{ui.endesCoverageValue}</dd>
            </div>
          </dl>
        </section>

        {/* El problema */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesProblemTitle}
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              {ui.endesProblemBody}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-secondary)">{ui.endesWhatExists}</p>
                <ul className="m-0 pl-4 flex flex-col gap-1 text-sm leading-relaxed text-(--color-blue)">
                  {ui.endesWhatExistsList.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-secondary)">{ui.endesWhatsNeeded}</p>
                <ul className="m-0 pl-4 flex flex-col gap-1 text-sm leading-relaxed text-(--color-blue)">
                  {ui.endesWhatsNeededList.map((item) => (
                    <li key={item.b}><b>{item.b}</b>{item.t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagrama de arquitectura */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesPipelineTitle}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              {ui.endesPipelineSubtitle}
            </p>
          </div>
          <ArchitectureDiagram locale={locale} />
          <a
            href="/docs/ICE-ENDES-Arquitectura.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 text-sm font-medium text-(--color-blue) no-underline underline decoration-(--color-hairline) underline-offset-4"
          >
            {ui.endesDownloadDeck}
          </a>
        </section>

        {/* Cifras */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
            {ui.endesNumbersTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className="flex flex-col gap-2 pl-6 border-l"
                style={{ borderColor: i === 0 ? "transparent" : "var(--color-hairline)" }}
              >
                <p
                  className="m-0 font-[family-name:var(--font-display)] font-semibold text-[36px] md:text-[44px] leading-none text-(--color-blue)"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </p>
                <p className="m-0 text-sm leading-snug text-(--color-secondary)">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="m-0 text-base leading-relaxed text-(--color-secondary) max-w-[70ch]">
            {ui.endesNumbersBody}
          </p>
        </section>

        {/* DuckDB vs PostgreSQL */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesDuckdbTitle}
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              {ui.endesDuckdbP1}
            </p>
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              {ui.endesDuckdbP2a}<i>{ui.endesDuckdbP2i}</i>{ui.endesDuckdbP2b}<i>{ui.endesDuckdbP2i2}</i>{ui.endesDuckdbP2c}
            </p>
            <div
              className="rounded-lg p-6 flex flex-col gap-2"
              style={{ background: "var(--color-blue)" }}
            >
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-signal)">
                {ui.endesMigrationRule}
              </p>
              <p className="m-0 text-base leading-relaxed text-(--color-ivory)">
                {ui.endesMigrationRuleBody}
              </p>
            </div>
          </div>
        </section>

        {/* Diseño de encuesta */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesSurveyTitle}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              {ui.endesSurveySubtitleA}<i>{ui.endesSurveySubtitleI}</i>{ui.endesSurveySubtitleB}
            </p>
          </div>
          <DetailAccordion label={ui.endesSurveyDetailLabel}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {surveyCards.map((card) => (
                <div
                  key={card.code}
                  className="flex flex-col gap-2 p-6 rounded"
                  style={{ background: "var(--color-dawn)" }}
                >
                  <span className="font-[family-name:var(--font-display)] font-semibold text-2xl text-(--color-blue)">
                    {card.code}
                  </span>
                  <h3 className="m-0 text-[15px] font-semibold leading-tight text-(--color-blue)">
                    {card.label}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </DetailAccordion>
        </section>

        {/* Reproducibilidad */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesReproTitle}
            </h2>
          </div>
          <div className="md:col-span-7">
            <DetailAccordion label={ui.endesReproDetailLabel}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-sm font-semibold text-(--color-blue)">{ui.endesReproVersioning}</h3>
                  <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                    {ui.endesReproVersioningBody}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-sm font-semibold text-(--color-blue)">{ui.endesReproLineage}</h3>
                  <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                    {ui.endesReproLineageBody}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-sm font-semibold text-(--color-blue)">{ui.endesReproDoc}</h3>
                  <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                    {ui.endesReproDocBody}
                  </p>
                </div>
              </div>
            </DetailAccordion>
          </div>
        </section>

        {/* Validación externa */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }} data-sr>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              {ui.endesValidationTitle}
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              {ui.endesValidationSubtitle}
            </p>
          </div>
          <DetailAccordion label={ui.endesValidationDetailLabel}>
            <div className="flex flex-col gap-10">
              <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {externalSources.map((src) => (
                  <li key={src.name} className="flex flex-col gap-2 p-5 rounded border" style={{ borderColor: "var(--color-hairline)" }}>
                    <span className="text-xs font-bold tracking-wide" style={{ color: "var(--color-metric)" }}>
                      {src.code}
                    </span>
                    <h3 className="m-0 text-[16px] font-semibold text-(--color-blue)">
                      {src.name}
                    </h3>
                    <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                      {src.desc}
                    </p>
                    <p className="m-0 text-xs text-(--color-secondary) font-mono">{src.tag}</p>
                  </li>
                ))}
              </ul>
              <div
                className="rounded-lg p-6 flex flex-col gap-2"
                style={{ background: "var(--color-blue)" }}
              >
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-signal)">
                  {ui.endesNoReferentTitle}
                </p>
                <p className="m-0 text-base leading-relaxed text-(--color-ivory)">
                  {ui.endesNoReferentBody}
                </p>
              </div>
            </div>
          </DetailAccordion>
        </section>

        {/* Estado y visión */}
        <section className="box-border px-6 md:px-24 py-16 md:py-24 flex flex-col gap-6" data-sr>
          <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[36px] text-(--color-blue) max-w-[70ch]">
            {ui.endesClosingTitle}
          </h2>
          <p className="m-0 font-[family-name:var(--font-display)] italic font-medium text-xl leading-snug max-w-[70ch]" style={{ color: "var(--color-metric)" }}>
            {ui.endesClosingQuote}
          </p>
          <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
            {ui.endesClosingBody}
          </p>
          <div className="pt-4 flex items-center gap-6 flex-wrap">
            <Link
              href={backHref}
              className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
            >
              {ui.endesBackToCases}
            </Link>
            <a
              href="/docs/ICE-ENDES-Arquitectura.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px]"
              style={{ borderColor: "var(--color-blue)" }}
            >
              {ui.endesDownloadDeckPdf}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
