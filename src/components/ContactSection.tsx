import { getCvHref, site } from "@/content/site";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function ContactSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const cvHref = getCvHref(locale);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-t"
      className="box-border mx-6 md:mx-24 my-8 p-8 md:p-12 rounded flex flex-col gap-4"
      style={{ background: "var(--color-dawn)" }}
    >
      <h2
        id="contacto-t"
        className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[40px] text-(--color-blue)"
      >
        {ui.contactTitle}
      </h2>
      <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-blue) max-w-[560px]">
        {ui.contactSubtitle}
      </p>
      <div className="flex flex-col gap-2">
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
      >
        {ui.downloadCvPdf}
      </a>
    </section>
  );
}
