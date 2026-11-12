"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { getWork, type WorkItem } from "@/content/work";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

const VISIBLE = 3;

type LinkProps = {
  href: string;
  internal?: boolean;
  children: React.ReactNode;
  className: string;
  newTab: string;
};

function WorkLink({ href, internal, children, className, newTab }: LinkProps) {
  const style = { textUnderlineOffset: 3 };
  if (internal) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {children}
      <span className="sr-only"> ({newTab})</span>
    </a>
  );
}

/* Toda la tarjeta es clicable: el enlace principal se estira sobre ella (::after) y el
 * secundario queda por encima con z-index. Así el área de clic es la miniatura completa. */
function WorkCard({
  item,
  index,
  newTab,
  focusRef,
}: {
  item: WorkItem;
  index: number;
  newTab: string;
  focusRef?: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <li
      className={index < VISIBLE ? "work-card" : "work-card reveal"}
      data-sr={index < VISIBLE ? "" : undefined}
      data-sr-delay={index < VISIBLE ? String(index) : undefined}
    >
      <article className="relative h-full flex flex-col gap-3">
        <div
          className="frame relative w-full aspect-[16/10] rounded-2xl overflow-hidden"
          style={{ background: "var(--color-observatory)", boxShadow: "0 24px 48px -28px rgba(17,26,46,.45)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="work-thumb absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
        <p className="m-0 text-[15px] text-(--color-secondary)">{item.kind}</p>
        <h3
          ref={focusRef}
          tabIndex={focusRef ? -1 : undefined}
          className="m-0 font-[family-name:var(--font-display)] font-[450] text-[28px] leading-tight text-(--color-blue) outline-none"
        >
          {item.title}
        </h3>
        <p className="m-0 text-base leading-relaxed text-(--color-blue)">{item.line}</p>
        <div className="mt-auto flex flex-wrap gap-x-5">
          <WorkLink
            href={item.href}
            internal={item.internal}
            newTab={newTab}
            className="work-primary inline-flex items-center min-h-11 font-medium text-[15px] text-(--color-link) underline"
          >
            {item.linkLabel}
          </WorkLink>
          {item.secondary ? (
            <WorkLink
              href={item.secondary.href}
              internal={item.secondary.internal}
              newTab={newTab}
              className="relative z-10 inline-flex items-center min-h-11 text-[15px] text-(--color-secondary) underline"
            >
              {item.secondary.label}
            </WorkLink>
          ) : null}
        </div>
      </article>
    </li>
  );
}

/* Sustituye en el inicio a Diseño instruccional + Laboratorio: se ve el trabajo antes de leerlo.
 * Muestra 3 piezas y un botón con vista previa de las demás.
 * Conserva el id «diseno-instruccional» porque otras páginas enlazan a /#diseno-instruccional. */
export function WorkGallery({ locale = "es" }: { locale?: Locale }) {
  const items = getWork(locale);
  const en = locale === "en";
  const [expanded, setExpanded] = useState(false);
  const firstNew = useRef<HTMLHeadingElement>(null);
  const shown = expanded ? items : items.slice(0, VISIBLE);
  const hidden = items.slice(VISIBLE);
  const newTab = en ? "opens in a new tab" : "se abre en otra pestaña";

  const expand = () => {
    setExpanded(true);
    // Lleva el foco a la primera pieza nueva para que teclado y lector de pantalla sigan el flujo.
    requestAnimationFrame(() => firstNew.current?.focus());
  };

  return (
    <section
      id="diseno-instruccional"
      aria-labelledby="trabajo-t"
      className="relative box-border px-6 md:px-24 py-20 md:py-28 flex flex-col gap-12 overflow-hidden"
    >
      <ActNumeral numeral="III" label={en ? "III · Work" : "III · Trabajo"} />
      <div className="section-head" data-sr>
        <h2 id="trabajo-t">{en ? "Learning design and prototypes" : "Diseño instruccional y prototipos"}</h2>
        <p>{en ? "Tools, games and experiences I designed and built. Open them: they work." : "Herramientas, juegos y experiencias que diseñé y construí. Ábrelas: funcionan."}</p>
      </div>
      <ul
        id="galeria-piezas"
        className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        {shown.map((item, index) => (
          <WorkCard
            key={item.title}
            item={item}
            index={index}
            newTab={newTab}
            focusRef={index === VISIBLE ? firstNew : undefined}
          />
        ))}
      </ul>

      {!expanded && hidden.length > 0 ? (
        <button
          type="button"
          onClick={expand}
          aria-expanded={false}
          aria-controls="galeria-piezas"
          className="more-work self-stretch sm:self-start flex items-center gap-4 p-3 pr-5 rounded-xl border bg-transparent text-left cursor-pointer"
          style={{ borderColor: "var(--color-blue)" }}
        >
          <span className="flex shrink-0" aria-hidden="true">
            {hidden.map((item, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.title}
                src={item.image}
                alt=""
                className="w-12 h-12 rounded-full object-cover object-top border-2"
                style={{ borderColor: "var(--color-ivory)", marginLeft: i === 0 ? 0 : -14 }}
              />
            ))}
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold text-(--color-blue)">
              {en ? `See ${hidden.length} more pieces` : `Ver ${hidden.length} piezas más`} ↓
            </span>
            <span className="text-sm text-(--color-secondary)">{hidden.map((item) => item.title).join(" · ")}</span>
          </span>
        </button>
      ) : null}
      <Link
        href={en ? "/en/trabajo" : "/trabajo"}
        className="self-start inline-flex items-center min-h-11 text-[15px] font-medium text-(--color-link) underline"
        style={{ textUnderlineOffset: 3 }}
      >
        {en
          ? "Full sheets: learning objectives, frameworks, evidence, community and research →"
          : "Fichas completas: objetivos de aprendizaje, marcos, evidencia, comunidad e investigación →"}
      </Link>
    </section>
  );
}
