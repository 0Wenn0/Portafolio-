"use client";

import { useEffect, useRef } from "react";

const ECHO_COUNT = 5;
// Each echo lags a little more than the one before it, so the chain
// spreads out into a comet-like trail instead of a single ring.
const ECHO_LERP = [0.32, 0.22, 0.16, 0.11, 0.08];

/**
 * Custom cursor: a solid lead dot that tracks the pointer 1:1, followed by
 * a chain of shrinking, fading "echo" dots that each chase the point ahead
 * of them with their own easing — a comet trail rather than a single ring.
 * Desktop-only (fine pointer + hover), and fully inert under
 * prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const echoRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const dot = dotRef.current;
    const echoes = echoRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!dot || echoes.length !== ECHO_COUNT) return;

    let mouseX = 0;
    let mouseY = 0;
    const echoX = new Array(ECHO_COUNT).fill(0);
    const echoY = new Array(ECHO_COUNT).fill(0);
    let raf = 0;
    let started = false;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!started) {
        // Snap the whole chain to the first known position instead of
        // sweeping in from the corner.
        echoX.fill(mouseX);
        echoY.fill(mouseY);
        started = true;
      }
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      let targetX = mouseX;
      let targetY = mouseY;
      for (let i = 0; i < ECHO_COUNT; i++) {
        echoX[i] += (targetX - echoX[i]) * ECHO_LERP[i]!;
        echoY[i] += (targetY - echoY[i]) * ECHO_LERP[i]!;
        echoes[i]!.style.transform = `translate(${echoX[i]}px, ${echoY[i]}px) translate(-50%, -50%)`;
        targetX = echoX[i]!;
        targetY = echoY[i]!;
      }
      raf = requestAnimationFrame(loop);
    };

    const hotSelector = "a, button, summary, [data-cursor-hot]";
    const setHot = (on: boolean) => {
      dot.classList.toggle("cursor-hot", on);
      echoes[0]?.classList.toggle("cursor-hot", on);
    };
    const onOver = (event: MouseEvent) => {
      if ((event.target as Element).closest?.(hotSelector)) setHot(true);
    };
    const onOut = (event: MouseEvent) => {
      if ((event.target as Element).closest?.(hotSelector)) setHot(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      {Array.from({ length: ECHO_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            echoRefs.current[i] = el;
          }}
          className={`cursor-echo cursor-echo-${i}`}
          aria-hidden="true"
        />
      ))}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
