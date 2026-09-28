import { getServices } from "@/content/services";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

export function ServicesSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const services = getServices(locale);

  return (
    <section
      aria-labelledby="servicios-t"
      className="relative box-border px-6 md:px-24 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-8 overflow-hidden"
    >
      <ActNumeral numeral="IV" label={locale === "en" ? "IV · Services" : "IV · Servicios"} />
      <div className="md:col-span-4 flex flex-col gap-4" data-sr>
        <h2
          id="servicios-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[36px] text-(--color-blue)"
        >
          {ui.servicesTitle}
        </h2>
        <p className="m-0 text-base leading-relaxed text-(--color-secondary)">
          {ui.servicesSubtitle}
        </p>
        <a href="#contacto" className="text-base font-medium py-3">
          {ui.bookCall}
        </a>
      </div>
      <ul
        className="md:col-start-6 md:col-span-7 m-0 p-0 list-none flex flex-col"
        data-sr
      >
        {services.map((service) => (
          <li
            key={service.name}
            className="grid grid-cols-1 sm:grid-cols-[3fr_3fr_auto] sm:gap-6 gap-2 py-5 border-t"
            style={{ borderColor: "var(--color-hairline)" }}
          >
            <span className="text-[17px] font-semibold text-(--color-blue)">
              {service.name}
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[15px] leading-relaxed text-(--color-secondary)">
                {service.desc}
              </span>
              {service.link ? (
                <a
                  href="#laboratorio"
                  className="self-start inline-flex items-center min-h-11 text-[15px] font-medium"
                >
                  {service.link}
                </a>
              ) : null}
            </span>
            <span
              className="text-sm font-medium sm:text-right whitespace-nowrap"
              style={{ color: "var(--color-metric)" }}
            >
              {service.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
