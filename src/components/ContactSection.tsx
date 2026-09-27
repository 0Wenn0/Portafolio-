import { site } from "@/content/site";

export function ContactSection() {
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
        Hablemos
      </h2>
      <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-blue) max-w-[560px]">
        Vacantes, talleres o proyectos de adopción de IA. Te respondo en un
        máximo de 2 días hábiles.
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
        href={site.cvHref}
        download
        className="btn-primary self-start inline-flex items-center h-12 px-6 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium mt-2"
      >
        Descargar CV (PDF)
      </a>
    </section>
  );
}
