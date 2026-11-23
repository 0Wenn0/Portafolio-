import Link from "next/link";
import { DetailAccordion } from "@/components/DetailAccordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getVideoAi } from "@/content/videoAi";
import type { VideoPiece } from "@/content/videoAi";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const sectionClass = "box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b";
const h2Class =
  "m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] leading-tight text-(--color-blue)";
const labelClass = "block text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)";
const hairline = { borderColor: "var(--color-hairline)" };

function Piece({ piece }: { piece: VideoPiece }) {
  const titleId = `${piece.id}-t`;
  return (
    <section id={piece.id} aria-labelledby={titleId} className={`${sectionClass} scroll-mt-24`} style={hairline} data-sr>
      <div className="md:col-span-4 flex flex-col gap-4">
        <p className={labelClass}>{piece.kind}</p>
        <h2 id={titleId} className={h2Class}>
          {piece.title}
        </h2>
        <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{piece.summary}</p>
        <dl className="m-0 flex flex-col">
          {piece.tools.map((tool) => (
            <div key={tool.label} className="flex flex-col gap-0.5 py-3 border-t" style={hairline}>
              <dt className={labelClass}>{tool.label}</dt>
              <dd className="m-0 text-[16px] text-(--color-blue)">{tool.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="md:col-span-8 flex flex-col gap-6">
        {piece.video ? (
          <video
            className="w-full h-auto rounded-lg"
            style={{ aspectRatio: "16 / 9", background: "var(--color-observatory)" }}
            controls
            playsInline
            preload="none"
            poster={piece.video.poster}
            aria-label={piece.video.label}
          >
            <source src={piece.video.src} type="video/mp4" />
          </video>
        ) : (
          piece.pendingNote && (
            <p
              className="m-0 p-6 rounded-lg border text-[16px] leading-relaxed text-(--color-secondary)"
              style={{ borderColor: "var(--color-hairline)", borderStyle: "dashed" }}
            >
              {piece.pendingNote}
            </p>
          )
        )}
        <div className="flex flex-col gap-3">
          <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">{piece.detailTitle}</h3>
          <ul className="m-0 pl-5 flex flex-col gap-2 text-[16px] leading-relaxed text-(--color-blue) max-w-[70ch]">
            {piece.detail.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        {piece.transcript && piece.transcriptLabel && (
          <DetailAccordion label={piece.transcriptLabel}>
            <ol className="m-0 pl-5 flex flex-col gap-2 text-[15px] leading-snug text-(--color-secondary)">
              {piece.transcript.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </DetailAccordion>
        )}
      </div>
    </section>
  );
}

export function VideoAiCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const c = getVideoAi(locale);

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

        {c.pieces.map((piece) => (
          <Piece key={piece.id} piece={piece} />
        ))}

        <section aria-labelledby="errores-t" className={sectionClass} style={hairline} data-sr>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h2 id="errores-t" className={h2Class}>
              {c.lessonsTitle}
            </h2>
            <p className="m-0 text-[16px] leading-relaxed text-(--color-secondary)">{c.lessonsIntro}</p>
          </div>
          <div className="md:col-span-8">
            <DetailAccordion label={c.lessonsLabel}>
              <ul className="m-0 p-0 list-none flex flex-col">
                {c.lessons.map((row) => (
                  <li
                    key={row.problem}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3 border-t"
                    style={hairline}
                  >
                    <span className="sm:col-span-3 text-[15px] font-semibold text-(--color-blue)">{row.problem}</span>
                    <span className="sm:col-span-4 text-[15px] leading-snug text-(--color-secondary)">
                      <span className="sr-only">{c.lessonHeads.cause}: </span>
                      {row.cause}
                    </span>
                    <span className="sm:col-span-5 text-[15px] leading-snug text-(--color-blue)">
                      <span className="sr-only">{c.lessonHeads.fix}: </span>
                      {row.fix}
                    </span>
                  </li>
                ))}
              </ul>
            </DetailAccordion>
          </div>
        </section>

        <section aria-labelledby="principios-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="principios-t" className={`md:col-span-4 ${h2Class}`}>
            {c.principlesTitle}
          </h2>
          <ol className="md:col-span-8 m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.principles.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-2 border-t pt-4" style={hairline}>
                <span className="text-[13px] text-(--color-secondary)">{i + 1}</span>
                <span className="font-[family-name:var(--font-display)] font-semibold text-[22px] leading-tight text-(--color-blue)">
                  {p.title}
                </span>
                <span className="text-[16px] leading-relaxed text-(--color-blue)">{p.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="siguiente-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="siguiente-t" className={`md:col-span-4 ${h2Class}`}>
            {c.nextTitle}
          </h2>
          <p
            className="md:col-span-8 m-0 pl-3 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]"
            style={{ borderLeft: "2px solid var(--color-rose)" }}
          >
            {c.next}
          </p>
        </section>

        <section aria-labelledby="cta-t" className={sectionClass} style={hairline} data-sr>
          <h2 id="cta-t" className={`md:col-span-4 ${h2Class}`}>
            {c.ctaTitle}
          </h2>
          <div className="md:col-span-8 flex flex-col gap-4">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">{c.ctaText}</p>
            <Link
              href={c.cta.href}
              className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
              style={{ borderColor: "var(--color-blue)" }}
            >
              {c.cta.label}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
