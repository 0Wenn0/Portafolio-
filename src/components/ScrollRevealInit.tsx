"use client";

import { useEffect } from "react";

/**
 * Activates every [data-sr] element in the page: adds `.sr-in` the first
 * time it scrolls into view, staggered by its data-sr-delay. Falls back to
 * revealing everything immediately when IntersectionObserver or motion
 * isn't available, and carries a time-based safety net (see below) so a
 * missed intersection can never leave content permanently invisible.
 */
export function ScrollRevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-sr]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (els.length === 0) return;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("sr-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-in");
            io.unobserve(entry.target);
          }
        }
      },
      // Positive bottom margin: start revealing an element slightly
      // *before* it enters the viewport, and threshold 0 fires on the
      // first visible pixel — both make a fast scroll, scrollbar drag, or
      // "jump to bottom" far less likely to skip an element entirely.
      { threshold: 0, rootMargin: "0px 0px 20% 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: IntersectionObserver can still miss an element that
    // never crosses the viewport in a way the browser samples (very fast
    // programmatic jumps, a backgrounded tab, etc). Whatever is still
    // hidden a couple of seconds after mount just gets revealed outright
    // — content should never depend on a scroll event to exist.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("sr-in"));
      io.disconnect();
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
