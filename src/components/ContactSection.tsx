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
      className="relative box-border mx-6 md:mx-24 my-8 p-8 md:p-12 rounded flex flex-col gap-4 overflow-hidden"
      style={{ background: "var(--color-dawn)" }}
    >
      <ActNumeral numeral="VI" label={locale === "en" ? "VI · Contact" : "VI · Contacto"} />
      <h2
        id="contacto-t"
        className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[40px] text-(--color-blue)"
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
        className="btn-primary self-start inline-flex items-center h-12 px-6 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium mt-2"
        data-sr
        data-sr-delay="2"
      >
        {ui.downloadCvPdf}
      </a>
    </section>
  );
}
