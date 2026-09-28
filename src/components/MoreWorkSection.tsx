import { getMoreWork } from "@/content/site";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function MoreWorkSection({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const moreWork = getMoreWork(locale);

  return (
    <section
      aria-labelledby="mas-t"
      className="box-border px-6 md:px-24 py-16 flex flex-col gap-6"
    >
      <h2 id="mas-t" className="m-0 text-base font-semibold text-(--color-blue)" data-sr>
        {ui.moreWorkTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {moreWork.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 pt-4 border-t"
            style={{ borderColor: "var(--color-blue)" }}
            data-sr
            data-sr-delay={String(Math.min(index, 3))}
          >
            <span className="text-sm text-(--color-secondary)">
              {item.label}
            </span>
            <span className="text-base py-1">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
