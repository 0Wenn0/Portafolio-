"use client";

import { useEffect, useRef, useState } from "react";
import { brain, comet, heart, network, scattered, type Shape } from "./nodoCeroShapes";

/* Cierre animado: los puntos pasan de nodos de IA a un cerebro, a un corazón
   y a un cometa que despega. Se reproduce cada vez que la escena se activa. */
/* Tras el despegue el cometa se queda arriba a la derecha. */

const N = 1500;
const STAGES = [
  { at: 300, label: "Nodos de IA", color: [111, 227, 200] },
  { at: 3300, label: "Un cerebro que entiende a las personas", color: [214, 205, 255] },
  { at: 6500, label: "Un corazón que cuida lo que valoran", color: [255, 122, 92] },
  { at: 9700, label: "Un cometa listo para despegar", color: [246, 223, 160] },
  { at: 11800, label: "¡A despegar!", color: [255, 236, 190] },
] as const;
const FLIGHT_AT = 11800;
const FLIGHT_MS = 2600;

export function NodoCeroGracias({ active }: { active: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stage, setStage] = useState(-1);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const g = canvas?.getContext("2d");
    if (!canvas || !wrap || !g) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cometShape = comet(N);
    const shapes: Shape[] = [network(N), brain(N), heart(N), cometShape, cometShape];
    const pos = scattered(N);
    const speed = Float32Array.from({ length: N }, () => 0.035 + Math.random() * 0.05);
    const phase = Float32Array.from({ length: N }, () => Math.random() * Math.PI * 2);
    const size = Float32Array.from({ length: N }, () => 0.8 + Math.random() * 1.4);
    const color = [...STAGES[0].color] as number[];

    let w = 0, h = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = wrap.clientWidth; h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const start = performance.now();
    let current = reduce ? STAGES.length - 1 : -1;
    if (reduce) { pos.set(cometShape); setStage(STAGES.length - 1); } else setStage(-1);
    let raf = 0;

    const frame = (now: number) => {
      const t = now - start;
      let next = current;
      STAGES.forEach((s, i) => { if (t >= s.at) next = i; });
      if (reduce) next = STAGES.length - 1;
      if (next !== current) { current = next; setStage(next); }

      const goal = current >= 0 ? shapes[current]! : null;
      const target = current >= 0 ? STAGES[current]!.color : STAGES[0].color;
      for (let k = 0; k < 3; k++) color[k]! += (target[k]! - color[k]!) * 0.04;

      const k = reduce ? 1 : Math.min(1, Math.max(0, (t - FLIGHT_AT) / FLIGHT_MS));
      const e = k * k * (3 - 2 * k);
      const fx = e * 0.6, fy = -e * 0.45;

      const scale = Math.min(w, h) * 0.44;
      const cx = w / 2, cy = h / 2;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      g.globalCompositeOperation = "lighter";
      const wobble = reduce ? 0 : 0.006;
      const sec = now / 1000;
      for (let i = 0; i < N; i++) {
        const j = i * 2;
        if (goal) {
          const sp = reduce ? 1 : speed[i]!;
          const tx = goal[j]! + fx + Math.sin(sec * 0.9 + phase[i]!) * wobble;
          const ty = goal[j + 1]! + fy + Math.cos(sec * 0.8 + phase[i]!) * wobble;
          pos[j]! += (tx - pos[j]!) * sp;
          pos[j + 1]! += (ty - pos[j + 1]!) * sp;
        }
        const x = cx + pos[j]! * scale, y = cy + pos[j + 1]! * scale;
        const tw = 0.55 + 0.45 * Math.sin(sec * 2 + phase[i]!);
        g.fillStyle = `rgba(${color[0]! | 0},${color[1]! | 0},${color[2]! | 0},${(0.5 + 0.5 * tw) * 0.85})`;
        g.beginPath(); g.arc(x, y, size[i]!, 0, Math.PI * 2); g.fill();
      }
      g.globalCompositeOperation = "source-over";
      if (!reduce || current < 0) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [active, run]);

  const label = stage >= 0 ? STAGES[stage]!.label : " ";

  return (
    <div className="nc-gracias-art">
      <div ref={wrapRef} className="nc-gracias-canvas">
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
      <p className="nc-gracias-label" aria-live="polite">{label}</p>
      <button type="button" className="nc-gracias-replay" onClick={() => setRun((r) => r + 1)} aria-label="Repetir la animación">
        ↻ Repetir
      </button>
    </div>
  );
}
