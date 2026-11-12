"use client";

import { useMemo, useState } from "react";
import { getNetworkEdges, getNetworkNodes, type NetworkLayout } from "@/content/network";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function NetworkMap({
  layout,
  locale = "es",
}: {
  layout: NetworkLayout;
  locale?: Locale;
}) {
  const ui = t(locale);
  const networkNodes = useMemo(() => getNetworkNodes(locale), [locale]);
  const networkEdges = useMemo(() => getNetworkEdges(locale), [locale]);
  const [selected, setSelected] = useState(-1);
  const total = networkNodes.length;
  const { width, height, centerY, positions } = layout;

  const selectedId = selected >= 0 ? networkNodes[selected]?.id ?? null : null;

  const neighbors = useMemo(() => {
    const set = new Set<string>();
    if (!selectedId) return set;
    networkEdges.forEach(([a, b]) => {
      if (a === selectedId) set.add(b);
      if (b === selectedId) set.add(a);
    });
    return set;
  }, [selectedId, networkEdges]);

  const caption = useMemo(() => {
    const labelOf = (id: string) =>
      networkNodes.find((n) => n.id === id)?.label ?? id;
    if (!selectedId) {
      return ui.networkDefault;
    }
    const byCase = new Map<string, string[]>();
    networkEdges.forEach(([a, b, caseLabel]) => {
      const other = a === selectedId ? b : b === selectedId ? a : null;
      if (other) {
        const list = byCase.get(caseLabel) ?? [];
        list.push(labelOf(other));
        byCase.set(caseLabel, list);
      }
    });
    const parts = Array.from(byCase.entries()).map(
      ([caseLabel, others]) => `${others.join(` ${ui.networkAnd} `)} ${ui.networkIn} ${caseLabel}`,
    );
    return `${labelOf(selectedId)} ${ui.networkCrosses} ${parts.join(`${ui.networkWith} `)}.`;
  }, [selectedId, networkEdges, networkNodes, ui]);

  const moveNode = (delta: number) => {
    setSelected((current) => {
      const base = current < 0 ? (delta > 0 ? -1 : 0) : current;
      const next = (base + delta + total) % total;
      requestAnimationFrame(() => {
        document.getElementById(`nodo-d${next}`)?.focus();
      });
      return next;
    });
  };

  return (
    <div className="net-in flex flex-col gap-3">
      <p id="mapa-td" className="m-0 text-sm text-(--color-secondary)">
        {ui.networkCaption}
      </p>
      <div
        role="toolbar"
        aria-labelledby="mapa-td"
        aria-describedby="mapa-cd"
        className="relative"
        style={{ width, height }}
      >
        {networkEdges.map(([a, b], index) => {
          const [x1, y1] = positions[a] ?? [0, 0];
          const [x2, y2] = positions[b] ?? [0, 0];
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          const cx = Math.round(mx + (width / 2 - mx) * 0.3);
          const cy = Math.round(my + (centerY - my) * 0.3);
          const on = Boolean(selectedId && (a === selectedId || b === selectedId));
          return (
            <svg
              key={index}
              className="edge absolute left-0 top-0 overflow-visible pointer-events-none"
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              aria-hidden="true"
            >
              <path
                d={`M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`}
                pathLength={1}
                className="edge-draw"
                fill="none"
                stroke={on ? "#C47A12" : "#5C6F93"}
                strokeWidth={on ? 1.75 : 1}
                strokeLinecap="round"
                style={{
                  opacity: selectedId ? (on ? 1 : 0.15) : 0.55,
                  animationDelay: `${700 + index * 45}ms`,
                }}
              />
            </svg>
          );
        })}

        {networkNodes.map((node, index) => {
          const [x, y] = positions[node.id] ?? [0, 0];
          const up = y < centerY;
          const isSelected = index === selected;
          const isNeighbor = neighbors.has(node.id);
          const tabbable = selected < 0 ? index === 0 : isSelected;
          const dotColor = isSelected
            ? "#E39A2D"
            : isNeighbor
              ? "#111A2E"
              : "#111A2E";
          const dimmed = Boolean(selectedId && !isSelected && !isNeighbor);
          return (
            <button
              key={node.id}
              type="button"
              id={`nodo-d${index}`}
              className="node-btn node-in absolute -translate-x-1/2 flex items-center gap-0 p-0 border-0 bg-transparent whitespace-nowrap"
              style={{
                animationDelay: `${400 + index * 90}ms`,
                left: x,
                top: up ? y - 44 : y - 22,
                flexDirection: up ? "column-reverse" : "column",
              }}
              aria-pressed={isSelected}
              tabIndex={tabbable ? 0 : -1}
              onClick={() =>
                setSelected((current) => (current === index ? -1 : index))
              }
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  moveNode(1);
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  moveNode(-1);
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  setSelected(-1);
                }
              }}
            >
              <span className="w-11 h-11 flex items-center justify-center flex-none">
                <span
                  className="node-dot rounded-full"
                  style={{
                    width: isSelected ? 14 : 10,
                    height: isSelected ? 14 : 10,
                    background: dotColor,
                    boxShadow: isSelected
                      ? "0 0 0 7px rgba(227,154,45,0.25)"
                      : "none",
                    opacity: dimmed ? 0.35 : 1,
                    display: "block",
                  }}
                />
              </span>
              <span
                className="node-label"
                style={{
                  lineHeight: "24px",
                  fontFamily: "var(--font-display)",
                  fontSize: 19,
                  fontWeight: isSelected ? 600 : 420,
                  color: dimmed ? "#6B7486" : isSelected ? "#8A5208" : "#111A2E",
                }}
              >
                {node.label}
              </span>
            </button>
          );
        })}
      </div>
      <p
        id="mapa-cd"
        aria-live="polite"
        className="m-0 text-[15px] leading-relaxed text-(--color-blue)"
        style={{ minHeight: 72, maxWidth: width }}
      >
        {caption}
      </p>
    </div>
  );
}
