import Image from "next/image";
import { DetailAccordion } from "@/components/DetailAccordion";
import { getLearningDesign } from "@/content/learningDesign";
import { t } from "@/content/ui";
import type { LearningDesignItem, Locale } from "@/content/types";

type Ui = ReturnType<typeof t>;

function ItemCard({ item, ui, index }: { item: LearningDesignItem; ui: Ui; index: number }) {
  return (
    <li
      className="flex flex-col gap-4 pt-8 border-t first:border-t-0 first:pt-0"
      style={{ borderColor: "var(--color-hairline)" }}
      data-sr
      data-sr-delay={String(Math.min(index, 3))}
    >
      {item.image && (
        <div
          className="frame w-full h-[220px] md:h-[300px] rounded"
          style={{ background: "var(--color-observatory)" }}
        >
          <Image
            src={item.image}
            alt={item.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 60vw, 90vw"
            style={{ objectFit: "cover", objectPosition: "left top" }}
          />
        </div>
      )}
      {item.video && (
        <figure className="m-0 flex flex-col gap-2">
          <video
            className="w-full h-auto rounded"
            style={{ aspectRatio: "16 / 9", background: "var(--color-observatory)" }}
            controls
            playsInline
            preload="none"
            poster={item.video.poster}
            aria-label={item.video.label}
          >
            <source src={item.video.src} type="video/mp4" />
          </video>
          <DetailAccordion label={item.video.transcriptLabel}>
            <ol className="m-0 pl-5 flex flex-col gap-2 text-[15px] leading-snug text-(--color-secondary)">
              {item.video.transcript.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </DetailAccordion>
        </figure>
      )}
      <p className="m-0 text-[13px] uppercase tracking-[0.08em] text-(--color-secondary)">
        {item.kind} · {item.tools}
      </p>
      <h4 className="m-0 font-[family-name:var(--font-display)] font-semibold text-[26px] md:text-[30px] leading-tight text-(--color-blue)">
        {item.title}
      </h4>
      <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-blue)">
        {item.desc}
      </p>

      {item.flow && (
        <ol
          aria-label={`${ui.ldFlow}: ${item.title}`}
          className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {item.flow.map((f, i) => (
            <li
              key={f.step}
              className="flex flex-col gap-1 p-4 rounded border"
              style={{ borderColor: "var(--color-hairline)" }}
            >
              <span className="text-[13px] text-(--color-secondary)">{i + 1}</span>
              <strong className="font-semibold text-(--color-blue)">{f.step}</strong>
              <span className="text-[15px] leading-snug text-(--color-secondary)">
                {f.text}
              </span>
            </li>
          ))}
        </ol>
      )}

      <p className="m-0 text-[15px] leading-snug text-(--color-secondary)">
        <strong className="font-semibold text-(--color-blue)">{ui.whatIDid}</strong>{" "}
        {item.contribution}
      </p>

      {item.lenses && (
        <DetailAccordion label={ui.ldWhy}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.lenses.map((lens) => (
              <div key={lens.title} className="flex flex-col gap-2">
                <h5 className="m-0 text-base font-semibold text-(--color-blue)">{lens.title}</h5>
                <ul className="m-0 pl-5 flex flex-col gap-2 text-[15px] leading-snug text-(--color-secondary)">
                  {lens.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DetailAccordion>
      )}

      {item.compare && (
        <DetailAccordion label={ui.ldDiff}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[15px] leading-snug border-collapse">
              <caption className="sr-only">{item.compare.caption}</caption>
              <thead>
                <tr>
                  {item.compare.headers.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="py-2 pr-4 font-semibold text-(--color-blue) border-b"
                      style={{ borderColor: "var(--color-hairline)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.compare.rows.map(([label, other, own]) => (
                  <tr key={label}>
                    <th
                      scope="row"
                      className="py-2 pr-4 font-medium text-(--color-blue) border-b"
                      style={{ borderColor: "var(--color-hairline)" }}
                    >
                      {label}
                    </th>
                    <td className="py-2 pr-4 text-(--color-secondary) border-b" style={{ borderColor: "var(--color-hairline)" }}>
                      {other}
                    </td>
                    <td className="py-2 pr-4 text-(--color-blue) border-b" style={{ borderColor: "var(--color-hairline)" }}>
                      {own}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailAccordion>
      )}

      <p className="m-0 text-[15px] leading-snug text-(--color-secondary)">
        <strong className="font-semibold text-(--color-blue)">{ui.ldStatus}</strong>{" "}
        {item.evidence}
      </p>

      <div className="flex flex-wrap gap-x-6">
        {item.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={`${link.label}: ${item.title} ${ui.opensInNewTab}`}
            className="inline-flex items-center min-h-11 text-base font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>
    </li>
  );
}

export function LearningDesignSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const items = getLearningDesign(locale);
  const groups = [
    { key: "product" as const, label: ui.ldProducts },
    { key: "authoring" as const, label: ui.ldAuthoring },
  ]
    .map((g) => ({ ...g, items: items.filter((i) => i.group === g.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <section
      id="diseno-instruccional"
      aria-labelledby="ld-t"
      className="box-border px-6 md:px-24 pt-12 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 border-t"
      style={{ borderColor: "var(--color-hairline)" }}
    >
      <div className="md:col-span-4 flex flex-col gap-3" data-sr>
        <h2
          id="ld-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[36px] text-(--color-blue)"
        >
          {ui.ldTitle}
        </h2>
        <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-secondary)">
          {ui.ldSubtitle}
        </p>
      </div>
      <div className="md:col-start-5 md:col-span-8 flex flex-col gap-12 min-w-0">
        {groups.map((g) => (
          <div key={g.key} className="flex flex-col gap-6">
            <h3 className="m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-(--color-secondary)">
              {g.label}
            </h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-10">
              {g.items.map((item, index) => (
                <ItemCard key={item.title} item={item} ui={ui} index={index} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
