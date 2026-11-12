import { Fragment } from "react";
import { getCvHref, getHero, site } from "@/content/site";
import { networkLayoutDesktop, networkLayoutMobile } from "@/content/network";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { NetworkMap } from "./NetworkMap";

export function HeroSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const hero = getHero(locale);
  const cvHref = getCvHref(locale);

  // Entrance sequence: eyebrow, then the title word by word (110 ms apart,
  // each word still fading while the next starts), then each block 150 ms
  // after the previous one. Pure CSS (see .hero-in), so the text is in the
  // server HTML and visible without JavaScript.
  const titleWords = hero.title.split(" ");
  const titleEnd = titleWords.length * 110;
  const at = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section
      id="inicio"
      className="hero-dawn relative overflow-hidden box-border px-6 md:px-24 pt-14 pb-28 md:pt-20 md:pb-32 grid grid-cols-1 md:grid-cols-12 md:gap-8 items-center"
      aria-labelledby="titular"
    >
      <div className="relative flex flex-col gap-6 md:col-span-7">
        <p className="hero-in m-0 font-[family-name:var(--font-display)] italic text-[20px] md:text-[26px] text-(--color-secondary)">
          {hero.eyebrow}
        </p>
        <h1
          id="titular"
          className="m-0 font-[family-name:var(--font-display)] font-[350] text-[48px] md:text-[clamp(56px,6.2vw,96px)] leading-[1.02] tracking-[-0.02em] text-(--color-blue)"
          style={{ textWrap: "balance" }}
        >
          {titleWords.map((word, i) => (
            <Fragment key={i}>
              <span className="hero-in inline-block" style={at(150 + i * 110)}>
                {word}
              </span>{" "}
            </Fragment>
          ))}
        </h1>
        <p
          className="hero-in m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[580px]"
          style={at(titleEnd)}
        >
          {hero.subtitle}
        </p>
        <p
          className="hero-in m-0 text-base leading-relaxed text-(--color-secondary) max-w-[580px]"
          style={at(titleEnd + 75)}
        >
          {hero.method.text}{" "}
          <a href={hero.method.href} className="font-bold text-(--color-blue) underline underline-offset-4">
            {hero.method.label}
          </a>
        </p>
        <div className="hero-in flex items-center gap-3 pt-2 flex-wrap" style={at(titleEnd + 150)}>
          <a className="btn-ink" href={cvHref} download>
            {ui.downloadCvPdf}
          </a>
          <a className="btn-line" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative mt-12 md:mt-0 md:col-span-5">
        <div className="hidden md:block">
          <NetworkMap layout={networkLayoutDesktop} locale={locale} />
        </div>
        <div className="md:hidden">
          <NetworkMap layout={networkLayoutMobile} locale={locale} />
        </div>
      </div>

      <a href="#casos" className="scroll-cue hero-in" style={at(titleEnd + 450)}>
        {ui.viewCases}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}
