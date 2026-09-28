"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activates every [data-sr] element in the page: adds `.sr-in` the first
 * time it scrolls into view, staggered by its data-sr-delay. Falls back to
 * revealing everything immediately when IntersectionObserver or motion
 * isn't available.
 *
 * The homepage (long, mostly-narrative sections) keeps the original,
 * later-triggering feel — reveal happens once a section is meaningfully
 * in view, closer to the "12% visible" spec it was designed to. Case
 * study pages (denser, more likely to be scrolled fast or jumped through)
 * use an earlier, more forgiving trigger, since that's where a fast
 * scroll was actually observed to skip a reveal.
 *
 * Either way, a lightweight position poll runs alongside the observer as
 * a safety net: IntersectionObserver can miss an element that never
 * crosses the viewport in a way the browser samples (a very fast
 * programmatic jump, a backgrounded tab). The poll only reveals elements
 * that are actually near the viewport right now, so — unlike a blanket
 * "reveal everything" timer — it never spoils the reveal for sections a
 * slow reader hasn't scrolled to yet.
 */
export function ScrollRevealInit() {
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/" || pathname === "/en";

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sr]"));
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
      isHome
        ? // Original feel: trigger once ~12% of the element is visible,
          // slightly inside the viewport rather than before it.
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        : // Denser case-study pages: trigger earlier and on the first
          // visible pixel, so a fast scroll can't skip past a section.
          { threshold: 0, rootMargin: "0px 0px 20% 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Position-based safety net, not a timer: only reveals an element
    // that is actually within (or just below) the viewport right now.
    const poll = window.setInterval(() => {
      const vh = window.innerHeight;
      let remaining = false;
      for (const el of els) {
        if (el.classList.contains("sr-in")) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 1.15 && rect.bottom > -100) {
          el.classList.add("sr-in");
          io.unobserve(el);
        } else {
          remaining = true;
        }
      }
      if (!remaining) window.clearInterval(poll);
    }, 400);

    return () => {
      io.disconnect();
      window.clearInterval(poll);
    };
  }, [isHome]);

  return null;
}
