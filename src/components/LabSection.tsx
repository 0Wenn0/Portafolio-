import Image from "next/image";
import { lab } from "@/content/lab";

export function LabSection() {
  return (
    <section
      id="laboratorio"
      aria-labelledby="lab-t"
      className="box-border px-6 md:px-24 pt-12 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t"
      style={{ borderColor: "var(--color-hairline)" }}
    >
      <div className="md:col-span-4 flex flex-col gap-3">
        <h2
          id="lab-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[36px] text-(--color-blue)"
        >
          Laboratorio
        </h2>
        <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-secondary)">
          Prototipos de aprendizaje y experiencias digitales que diseño y
          publico con herramientas de IA.
        </p>
        <a
          href="#contacto"
          className="self-start inline-flex items-center min-h-11 text-base font-medium"
        >
          Cotizar un sitio o micrositio
        </a>
      </div>
      <ul className="md:col-start-5 md:col-span-8 m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-8">
        {lab.map((item) => (
          <li key={item.title} className="flex flex-col gap-3">
            <div
              className="relative w-full h-[220px] md:h-[280px] rounded border overflow-hidden"
              style={{ borderColor: "var(--color-hairline)", background: "var(--color-observatory)" }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                style={{ objectFit: "cover", objectPosition: "left top" }}
              />
            </div>
            <h3 className="m-0 font-[family-name:var(--font-display)] font-semibold text-[26px] md:text-[28px] leading-tight text-(--color-blue)">
              {item.title}
            </h3>
            <p className="m-0 text-base leading-relaxed text-(--color-blue)">
              {item.desc}
            </p>
            <p className="m-0 text-[15px] leading-snug text-(--color-secondary)">
              <strong className="font-semibold text-(--color-blue)">
                Qué hice:
              </strong>{" "}
              {item.contribution}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              aria-label={`Abrir ${item.title} (se abre en otra pestaña)`}
              className="self-start inline-flex items-center min-h-11 text-base font-medium"
            >
              Abrir {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
