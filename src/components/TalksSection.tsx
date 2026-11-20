import Link from "next/link";
import { getTalks, getTalksCopy, type TalkItem } from "@/content/talks";
import type { Locale } from "@/content/types";

/* Charlas y mentorías: franja de inicio (compact) y página propia (/charlas). */

function TalkCard({ item, index, level = 3 }: { item: TalkItem; index: number; level?: 3 | 4 }) {
  const Heading = level === 4 ? "h4" : "h3";
  return (
    <li
      className="flex flex-col gap-2 pt-4 border-t"
      style={{ borderColor: "var(--color-rose)" }}
      data-sr
      data-sr-delay={String(Math.min(index, 3))}
    >
      <p className="m-0 text-[13px] font-bold uppercase tracking-[0.12em] text-(--color-secondary)">
        {item.kind} · {item.period}
      </p>
      <Heading className="m-0 font-[family-name:var(--font-display)] font-semibold text-2xl leading-tight text-(--color-blue)">
        {item.title}
      </Heading>
      <p className="m-0 text-sm text-(--color-secondary)">{item.where}</p>
      <p className="m-0 text-base leading-relaxed text-(--color-blue)">{item.desc}</p>
      {item.links.length > 0 && (
        <p className="m-0 pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[15px] font-medium">
          {item.links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11">
                {link.label} <span aria-hidden="true">&nbsp;↗</span>
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="inline-flex items-center min-h-11">
                {link.label} <span aria-hidden="true">&nbsp;→</span>
              </Link>
            ),
          )}
        </p>
      )}
    </li>
  );
}

export function TalksSection({ locale = "es", variant = "compact" }: { locale?: Locale; variant?: "compact" | "full" }) {
  const copy = getTalksCopy(locale);
  const groups = getTalks(locale);

  if (variant === "compact") {
    const featured = groups.flatMap((g) => g.items).filter((i) => i.featured);
    return (
      <section
        id="charlas"
        aria-labelledby="charlas-t"
        className="box-border px-6 md:px-24 py-16 md:py-20 flex flex-col gap-8 border-b"
        style={{ borderColor: "var(--color-hairline)" }}
      >
        <div className="section-head" data-sr>
          <h2 id="charlas-t">{copy.title}</h2>
          <p>{copy.lead}</p>
        </div>
        <ul className="m-0 p-0 list-none grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <TalkCard key={item.title} item={item} index={index} />
          ))}
        </ul>
        <div data-sr>
          <Link
            href={copy.href}
            className="inline-flex items-center min-h-12 px-6 rounded-full no-underline font-bold text-[16px] text-(--color-ivory) hover:text-(--color-ivory)"
            style={{ background: "var(--color-blue)" }}
          >
            {copy.all}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="box-border px-6 md:px-24 pt-10 pb-4 flex flex-col gap-4" data-sr>
        <h2 className="m-0 font-[family-name:var(--font-display)] font-[350] text-[44px] md:text-[clamp(48px,5vw,72px)] leading-none tracking-[-0.02em] text-(--color-blue)">
          {copy.title}
        </h2>
        <p className="m-0 max-w-[680px] text-base md:text-[17px] leading-relaxed text-(--color-secondary)">{copy.lead}</p>
      </header>
      {groups.map((group) => (
        <section
          key={group.title}
          aria-label={group.title}
          className="box-border px-6 md:px-24 py-12 grid grid-cols-1 md:grid-cols-12 gap-6 border-t"
          style={{ borderColor: "var(--color-hairline)" }}
        >
          <h3 className="md:col-span-3 m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)" data-sr>
            {group.title}
          </h3>
          <ul className="md:col-start-4 md:col-span-9 m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-8">
            {group.items.map((item, index) => (
              <TalkCard key={item.title} item={item} index={index} level={4} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
