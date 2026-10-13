"use client";

import { useEffect, useRef } from "react";
import type { MetricCompare } from "@/content/types";

// Two bars on the same 0–100 % scale, so the difference is read at its real
// size. They grow when scrolled into view, over the same 1.2 s and on the same
// curve as the CountUp number above them, so the figure and the bar move
// together. The final state is the default one: without JavaScript, or with
// reduced motion, the bars simply show their values.
export function BeforeAfterBars({ from, to, ariaLabel }: MetricCompare) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const rows = [
    { ...from, color: "var(--color-secondary)" },
    { ...to, color: "var(--color-metric)" },
  ];

  return (
    <div ref={ref} role="img" aria-label={ariaLabel} className="ba flex flex-col gap-2 py-1">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-3" aria-hidden="true">
          <span className="w-16 flex-none text-xs text-(--color-secondary)">{row.label}</span>
          <span
            className="relative block h-1.5 flex-1 overflow-hidden rounded-full"
            style={{ background: "var(--color-hairline)" }}
          >
            <span
              className="ba-fill absolute inset-y-0 left-0 block rounded-full"
              style={{ width: `${row.value}%`, background: row.color }}
            />
          </span>
          <span
            className="w-9 flex-none text-right text-sm text-(--color-blue)"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {row.value}%
          </span>
        </div>
      ))}
    </div>
  );
}
