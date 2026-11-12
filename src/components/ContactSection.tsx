import { getCvHref, site } from "@/content/site";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

export function ContactSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const cvHref = getCvHref(locale);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-t"
      className="relative box-border mx-6 md:mx-24 my-16 p-8 md:p-16 rounded-3xl flex flex-col gap-5 overflow-hidden"
      style={{ background: "var(--gradient-dawn)" }}
    >
      <ActNumeral numeral="VI" label={locale === "en" ? "VI · Contact" : "VI · Contacto"} />
      <h2
        id="contacto-t"
        className="m-0 font-[family-name:var(--font-display)] font-[350] text-[44px] md:text-[clamp(48px,5vw,72px)] leading-none tracking-[-0.02em] text-(--color-blue)"
        data-sr
      >
        {ui.contactTitle}
      </h2>
      <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-blue) max-w-[560px]" data-sr>
        {ui.contactSubtitle}
      </p>
      <div className="flex flex-col gap-2" data-sr data-sr-delay="1">
        <a
          href={`mailto:${site.email}`}
          className="text-base text-(--color-blue) py-2"
        >
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener"
          className="text-base text-(--color-blue) py-2"
        >
          LinkedIn
        </a>
      </div>
      <a
        href={cvHref}
        download
        className="btn-ink self-start mt-2"
        data-sr
        data-sr-delay="2"
      >
        {ui.downloadCvPdf}
      </a>
    </section>
  );
}
