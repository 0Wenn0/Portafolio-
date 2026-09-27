import { moreWork } from "@/content/site";

export function MoreWorkSection() {
  return (
    <section
      aria-labelledby="mas-t"
      className="box-border px-6 md:px-24 py-16 flex flex-col gap-6"
    >
      <h2 id="mas-t" className="m-0 text-base font-semibold text-(--color-blue)">
        Más trabajo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {moreWork.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 pt-4 border-t"
            style={{ borderColor: "var(--color-blue)" }}
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
