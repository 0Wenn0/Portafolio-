"use client";

import { useEffect, useRef, useState } from "react";

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
  const match = value.match(COUNTABLE);
  const prefix = match?.[1] ?? "";
  const digits = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = match ? parseInt(digits.replace(/,/g, ""), 10) : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);
  const [display, setDisplay] = useState(() =>
    match ? formatValue(prefix, 0, suffix) : value,
  );

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      if (reduced) {
        setDisplay(formatValue(prefix, target, suffix));
        return;
      }

      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(formatValue(prefix, Math.round(target * eased), suffix));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match, prefix, suffix, target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {match ? display : value}
    </span>
  );
}
