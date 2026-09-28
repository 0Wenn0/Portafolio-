import { getCvHref, getHero } from "@/content/site";
import { networkLayoutDesktop, networkLayoutMobile } from "@/content/network";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";
import { NetworkMap } from "./NetworkMap";

export function HeroSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const hero = getHero(locale);
  const cvHref = getCvHref(locale);

  return (
    <section
      id="inicio"
      className="on-dark relative overflow-hidden box-border px-6 py-16 md:px-24 md:py-24 grid grid-cols-1 md:grid-cols-12 md:gap-6 items-center"
      style={{ background: "var(--color-observatory)" }}
      aria-labelledby="titular"
    >
      <svg
        width="1440"
        height="96"
        viewBox="0 0 1440 96"
        aria-hidden="true"
        className="absolute left-0 bottom-0 opacity-40 hidden md:block"
      >
        <path
          d="M0 88 C 360 24, 1080 24, 1440 72"
          fill="none"
          stroke="#B88992"
          strokeWidth="1"
        />
      </svg>

      <div className="relative flex flex-col gap-6 md:col-span-7">
        <ActNumeral numeral="I" label={locale === "en" ? "I · Threshold" : "I · Umbral"} />
        <p className="m-0 text-base font-medium text-(--color-mist)">
          {hero.eyebrow}
        </p>
        <h1
          id="titular"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[60px] leading-[1.08] text-(--color-ivory)"
          style={{ textWrap: "balance" }}
        >
          {hero.title}
        </h1>
        <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-mist) max-w-[600px]">
          {hero.subtitle}
        </p>
        <div className="flex items-center gap-4 pt-2 flex-wrap">
          <a
            className="btn-primary inline-flex items-center h-[52px] px-7 rounded-lg bg-(--color-ivory) text-(--color-observatory) no-underline font-semibold text-base"
            href={cvHref}
            download
          >
            {ui.downloadCvPdf}
          </a>
          <a
            href="#casos"
            className="text-(--color-signal) text-base font-medium py-3.5 px-3"
          >
            {ui.viewCases}
          </a>
        </div>
        <nav
          aria-label={locale === "en" ? "Cases by track" : "Casos por línea"}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="text-sm text-(--color-mist) mr-1">
            {ui.casesByLine}
          </span>
          {hero.tags.map((tag) => (
            <a
              key={tag}
              className="tag inline-flex items-center min-h-11 px-4 rounded-full border text-(--color-ivory) text-sm no-underline"
              style={{ borderColor: "rgba(174,183,196,0.45)" }}
              href="#casos"
            >
              {tag}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mt-12 md:mt-0 md:col-span-5">
        <div className="hidden md:block">
          <NetworkMap layout={networkLayoutDesktop} locale={locale} />
        </div>
        <div className="md:hidden">
          <NetworkMap layout={networkLayoutMobile} locale={locale} />
        </div>
      </div>
    </section>
  );
}
