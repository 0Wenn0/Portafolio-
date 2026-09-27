import { community } from "@/content/community";

export function CommunitySection() {
  return (
    <section
      id="comunidad"
      aria-labelledby="comunidad-t"
      className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-6 border-t"
      style={{ borderColor: "var(--color-hairline)" }}
    >
      <div className="md:col-span-4 flex flex-col gap-3">
        <h2
          id="comunidad-t"
          className="m-0 font-[family-name:var(--font-display)] font-medium text-[32px] md:text-[36px] text-(--color-blue)"
        >
          Comunidad y divulgación
        </h2>
        <p className="m-0 text-base md:text-[17px] leading-relaxed text-(--color-secondary)">
          Explicar la tecnología a quien empieza es parte del mismo oficio:
          facilitar, enseñar y acompañar.
        </p>
      </div>
      <ul className="md:col-start-5 md:col-span-8 m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-3 gap-6">
        {community.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 pt-4 border-t"
            style={{ borderColor: "var(--color-rose)" }}
          >
            <h3 className="m-0 font-[family-name:var(--font-display)] font-semibold text-2xl leading-tight text-(--color-blue)">
              {item.title}
            </h3>
            <p className="m-0 text-sm text-(--color-secondary)">
              {item.role} · {item.period}
            </p>
            <p className="m-0 text-base leading-relaxed text-(--color-blue)">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
