"use client";

import { useEffect, useRef } from "react";

// Matches a value made of an optional prefix, a run of digits (with
// optional thousands separators), and an optional suffix — e.g. "+3,000",
// "30%", "15", "34,018". Anchored to the full string: "37 × 19" has digits
// in what would be the "suffix", so it doesn't match and is left static.
const COUNTABLE = /^([^\d]*)([\d,]+)([^\d]*)$/;

function formatValue(prefix: string, n: number, suffix: string): string {
  return `${prefix}${n.toLocaleString("en-US")}${suffix}`;
}

export function CountUp({
  value,
  duration = 1200,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // The server renders the final value, so crawlers, link previews, screen
  // readers and no-JS visitors never see a zero. The count-up replays from
  // zero only for people who can see it happen. It writes straight to the
  // DOM node so React never re-renders (or resets) the number mid-count.

  useEffect(() => {
    const match = value.match(COUNTABLE);
    const el = ref.current;
    if (!match || !el) return;

    const prefix = match[1] ?? "";
    const suffix = match[3] ?? "";
    const target = parseInt((match[2] ?? "0").replace(/,/g, ""), 10);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const show = (text: string) => {
      el.textContent = text;
    };
    show(formatValue(prefix, 0, suffix));

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        show(formatValue(prefix, Math.round(target * eased), suffix));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    // The observer also fires right away for elements already on screen,
    // so the count plays on load when the metrics are visible.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      show(value);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}
