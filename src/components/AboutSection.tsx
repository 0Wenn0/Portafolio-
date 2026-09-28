import Image from "next/image";
import { getAboutIntro, getEducation, getTimeline } from "@/content/about";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";
import { ActNumeral } from "./ActNumeral";

export function AboutSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const aboutIntro = getAboutIntro(locale);
  const timeline = getTimeline(locale);
  const education = getEducation(locale);

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-t"
      className="relative box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-t overflow-hidden"
      style={{ borderColor: "var(--color-hairline)" }}
    >
      <ActNumeral numeral="V" label={locale === "en" ? "V · About" : "V · Sobre mí"} />
      <div className="md:col-span-5 flex flex-col gap-4" data-sr>
        <div className="frame w-[160px] h-[200px] md:w-[200px] md:h-[240px] box-border rounded">
          <Image
            src="/about/wendy-portrait.jpg"
            alt="Wendy Ramírez Burgos"
            fill
            sizes="(min-width: 768px) 200px, 160px"
            className="object-cover"
            priority
          />
        </div>
        <h2
          id="sobre-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[36px] text-(--color-blue)"
        >
          {ui.trajectoryTitle}
        </h2>
        <p className="m-0 text-base md:text-[17px] leading-loose text-(--color-blue)">
          {aboutIntro} ({ui.seeMore}{" "}
          <a href="#comunidad" className="underline" style={{ textUnderlineOffset: 3 }}>
            {ui.communityAndOutreach}
          </a>
          ).
        </p>
      </div>
      <div className="md:col-start-7 md:col-span-6 flex flex-col gap-2" data-sr>
        <ol className="m-0 p-0 list-none flex flex-col">
          {timeline.map((item) => (
            <li
              key={item.text}
              className="grid grid-cols-1 sm:grid-cols-[128px_1fr] gap-2 sm:gap-4 py-4 border-t"
              style={{ borderColor: "var(--color-hairline)" }}
            >
              <span
                className="text-sm text-(--color-secondary)"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {item.years}
              </span>
              <span className="text-base leading-snug text-(--color-blue)">
                {item.text}
              </span>
            </li>
          ))}
        </ol>
        <div
          className="pt-4 border-t"
          style={{ borderColor: "var(--color-hairline)" }}
        >
          <h3 className="mt-2 mb-2 text-sm font-semibold text-(--color-blue)">
            {ui.educationTitle}
          </h3>
          <ul className="m-0 p-0 list-none flex flex-col gap-1 text-sm leading-relaxed text-(--color-secondary)">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
