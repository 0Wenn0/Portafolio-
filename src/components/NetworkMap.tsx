"use client";

import { useMemo, useState } from "react";
import {
  networkEdges,
  networkNodes,
  type NetworkLayout,
} from "@/content/network";

export function NetworkMap({ layout }: { layout: NetworkLayout }) {
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
  }, [selectedId]);

  const labelOf = (id: string) =>
    networkNodes.find((n) => n.id === id)?.label ?? id;

  const caption = useMemo(() => {
    if (!selectedId) {
      return "Seis áreas y los proyectos que las unen. Elige un área para ver dónde se cruza con las demás.";
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
      ([caseLabel, others]) => `${others.join(" y ")} en ${caseLabel}`,
    );
    return `${labelOf(selectedId)} se cruza con ${parts.join("; con ")}.`;
  }, [selectedId]);

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
      <p id="mapa-td" className="m-0 text-sm font-medium text-(--color-mist)">
        Dónde se cruzan mis áreas
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
                fill="none"
                stroke={on ? "#B88992" : "#7FA8D8"}
                strokeWidth={on ? 1.75 : 1}
                strokeLinecap="round"
                style={{ opacity: selectedId ? (on ? 1 : 0.12) : 0.45 }}
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
            ? "#B88992"
            : isNeighbor
              ? "#E6DED2"
              : "#7FA8D8";
          const dimmed = Boolean(selectedId && !isSelected && !isNeighbor);
          return (
            <button
              key={node.id}
              type="button"
              id={`nodo-d${index}`}
              className="node-btn absolute -translate-x-1/2 flex items-center gap-0 p-0 border-0 bg-transparent whitespace-nowrap"
              style={{
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
                      ? "0 0 0 6px rgba(184,137,146,0.25)"
                      : "none",
                    opacity: dimmed ? 0.45 : 1,
                    display: "block",
                  }}
                />
              </span>
              <span
                className="node-label"
                style={{
                  lineHeight: "22px",
                  fontSize: 14,
                  fontWeight: isSelected ? 600 : 500,
                  color: dimmed ? "#AEB7C4" : "#E6DED2",
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
        className="m-0 text-[15px] leading-relaxed text-(--color-ivory)"
        style={{ minHeight: 72, maxWidth: width }}
      >
        {caption}
      </p>
    </div>
  );
}
