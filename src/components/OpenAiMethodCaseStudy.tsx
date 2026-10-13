import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getOpenAiMethod } from "@/content/openaiMethod";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function OpenAiMethodCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const content = getOpenAiMethod(locale);
  const backHref = locale === "en" ? "/en#casos" : "/#casos";

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        {ui.skipLink}
      </a>
      <SiteHeader locale={locale} />
      <main id="contenido" className="flex flex-col">
        <section
          className="box-border px-6 md:px-24 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col gap-6 border-b"
          style={{ borderColor: "var(--color-hairline)" }}
        >
          <p className="m-0 text-sm font-medium tracking-wide uppercase text-(--color-secondary)">
            {content.eyebrow}
          </p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            {content.title}
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">
            {content.intro}
          </p>
        </section>

        <section
          aria-labelledby="leer-t"
          className="box-border px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b"
          style={{ borderColor: "var(--color-hairline)" }}
          data-sr
        >
          <h2
            id="leer-t"
            className="md:col-span-4 m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)"
          >
            {content.readTitle}
          </h2>
          <ul className="md:col-span-7 m-0 pl-5 flex flex-col gap-3 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
            {content.readItems.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="piezas-t"
          className="box-border px-6 md:px-24 py-12 md:py-16 flex flex-col gap-8"
        >
          <h2
            id="piezas-t"
            className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)"
          >
            {content.piecesTitle}
          </h2>
          <ol className="m-0 p-0 list-none flex flex-col">
            {content.pieces.map((piece) => (
              <li
                key={piece.code}
                data-sr
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t"
                style={{ borderColor: "var(--color-hairline)" }}
              >
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="text-sm font-semibold text-(--color-secondary)">{piece.code}</span>
                  <span
                    className="self-start text-[13px] font-semibold text-(--color-blue) px-2 py-1 rounded"
                    style={{ background: "var(--color-dawn)" }}
                  >
                    {content.statusLabels[piece.status]}
                  </span>
                </div>
                <div className="md:col-span-9 flex flex-col gap-3">
                  <h3 className="m-0 font-[family-name:var(--font-display)] font-semibold text-[24px] md:text-[28px] leading-tight text-(--color-blue)">
                    {piece.title}
                  </h3>
                  <p className="m-0 text-[17px] leading-relaxed text-(--color-blue) max-w-[70ch]">
                    <span className="font-semibold">{content.whatItIs}: </span>
                    {piece.desc}
                  </p>
                  <p
                    className="m-0 pl-3 text-[15px] leading-relaxed text-(--color-secondary) max-w-[70ch]"
                    style={{ borderLeft: "2px solid var(--color-rose)" }}
                  >
                    <span className="font-semibold">{content.whatItIsNot}: </span>
                    {piece.notThis}
                  </p>
                  {piece.table ? (
                    <ul className="m-0 mt-2 p-0 list-none flex flex-col max-w-[900px]">
                      {piece.table.rows.map((row) => (
                        <li
                          key={row.what}
                          className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-4 border-t"
                          style={{ borderColor: "var(--color-hairline)" }}
                        >
                          <p className="md:col-span-5 m-0 text-[16px] leading-relaxed text-(--color-blue)">
                            <span className="block text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)">
                              {piece.table?.heads.what}
                            </span>
                            {row.what}
                          </p>
                          <p className="md:col-span-4 m-0 text-[16px] leading-relaxed text-(--color-blue)">
                            <span className="block text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)">
                              {piece.table?.heads.who}
                            </span>
                            {row.who}
                          </p>
                          <p className="md:col-span-3 m-0 text-[15px] leading-relaxed text-(--color-secondary)">
                            <span className="block text-[13px] font-semibold uppercase tracking-wide">
                              {piece.table?.heads.limit}
                            </span>
                            {row.limit}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {piece.href ? (
                    <a
                      href={piece.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
                      style={{ borderColor: "var(--color-blue)" }}
                    >
                      {content.openPiece}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <div className="pt-4">
            <Link
              href={backHref}
              className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
            >
              {content.backToCases}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
