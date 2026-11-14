import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getMaryCase, type CaseBlock, type CaseTable } from "@/content/maryCase";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

const hairline = { borderColor: "var(--color-hairline)" };

/* Tabla que en móvil se apila (cada celda con su encabezado) y en escritorio usa columnas. */
function StackTable({ table, caption }: { table: CaseTable; caption?: string }) {
  const cols = { "--cols": table.widths.map((w) => `${w}fr`).join(" ") } as CSSProperties;
  return (
    <figure className="m-0 flex flex-col gap-2 w-full">
      {caption ? (
        <figcaption className="text-[15px] font-semibold text-(--color-blue)">{caption}</figcaption>
      ) : null}
      <div role="table" aria-label={caption} className="w-full">
        <div
          role="row"
          className="hidden md:grid md:[grid-template-columns:var(--cols)] gap-4 pb-2 border-b"
          style={{ ...cols, ...hairline }}
        >
          {table.heads.map((head) => (
            <span
              key={head}
              role="columnheader"
              className="text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)"
            >
              {head}
            </span>
          ))}
        </div>
        {table.rows.map((row) => (
          <div
            key={row.join("|")}
            role="row"
            className="grid grid-cols-1 md:[grid-template-columns:var(--cols)] gap-1 md:gap-4 py-3 border-b"
            style={{ ...cols, ...hairline }}
          >
            {row.map((cell, i) => (
              <p key={i} role="cell" className="m-0 text-[16px] leading-relaxed text-(--color-blue)">
                <span aria-hidden="true" className="md:hidden block text-[12px] font-semibold uppercase tracking-wide text-(--color-secondary)">
                  {table.heads[i]}
                </span>
                {cell}
              </p>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}

function Block({ block, index }: { block: CaseBlock; index: number }) {
  const ListTag = block.ordered ? "ol" : "ul";
  return (
    <section
      id={block.id}
      aria-labelledby={`${block.id}-t`}
      className="box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b"
      style={hairline}
      data-sr
    >
      <div className="md:col-span-4 flex flex-col gap-2">
        <span className="text-sm font-semibold text-(--color-secondary)">{String(index + 1).padStart(2, "0")}</span>
        <h2
          id={`${block.id}-t`}
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] leading-tight text-(--color-blue)"
        >
          {block.title}
        </h2>
      </div>
      <div className="md:col-span-8 flex flex-col gap-6 min-w-0">
        <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch] font-medium">{block.lead}</p>
        {block.paragraphs?.map((p) => (
          <p key={p} className="m-0 text-[17px] leading-relaxed text-(--color-blue) max-w-[70ch]">
            {p}
          </p>
        ))}
        {block.list ? (
          <ListTag className="m-0 pl-5 flex flex-col gap-2 text-[17px] leading-relaxed text-(--color-blue) max-w-[70ch]">
            {block.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ListTag>
        ) : null}
        {block.facts ? (
          <dl className="m-0 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-[900px]">
            {block.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 pl-3" style={{ borderLeft: "2px solid var(--color-rose)" }}>
                <dt className="text-[13px] font-semibold uppercase tracking-wide text-(--color-secondary)">{f.label}</dt>
                <dd className="m-0 text-[16px] leading-relaxed text-(--color-blue)">{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {block.tables?.map((tb, i) => (
          <StackTable key={i} table={tb.table} caption={tb.caption} />
        ))}
        {block.note ? (
          <p className="m-0 text-[15px] leading-relaxed text-(--color-secondary) max-w-[70ch]">{block.note}</p>
        ) : null}
      </div>
    </section>
  );
}

export function MaryCaseStudy({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const content = getMaryCase(locale);
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
          style={hairline}
        >
          <p className="m-0 text-sm font-medium tracking-wide uppercase text-(--color-secondary)">{content.eyebrow}</p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            {content.title}
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">{content.intro}</p>
          <p
            className="m-0 pl-3 text-[16px] leading-relaxed text-(--color-blue) max-w-[70ch]"
            style={{ borderLeft: "2px solid var(--color-rose)" }}
          >
            <span className="font-semibold">{content.statusLabel}: </span>
            {content.status}
          </p>
          <a
            href={content.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
          >
            {content.pdfLabel}
          </a>
        </section>

        <section
          aria-labelledby="real-t"
          className="box-border px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b"
          style={hairline}
          data-sr
        >
          <h2
            id="real-t"
            className="md:col-span-4 m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)"
          >
            {content.readTitle}
          </h2>
          <ul className="md:col-span-8 m-0 pl-5 flex flex-col gap-3 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
            {content.readItems.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        {content.blocks.map((block, i) => (
          <Block key={block.id} block={block} index={i} />
        ))}

        <section
          aria-labelledby="refs-t"
          className="box-border px-6 md:px-24 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          <h2
            id="refs-t"
            className="md:col-span-4 m-0 font-[family-name:var(--font-display)] font-medium text-[24px] md:text-[28px] text-(--color-blue)"
          >
            {content.refsTitle}
          </h2>
          <div className="md:col-span-8 flex flex-col gap-8">
            <ul className="m-0 pl-5 flex flex-col gap-2 text-[15px] leading-relaxed text-(--color-secondary) max-w-[80ch]">
              {content.refs.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={content.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-11 px-5 rounded-lg border text-(--color-blue) no-underline font-medium text-[15px] w-fit"
                style={{ borderColor: "var(--color-blue)" }}
              >
                {content.pdfLabel}
              </a>
              <Link
                href={backHref}
                className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
              >
                {content.backToCases}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
