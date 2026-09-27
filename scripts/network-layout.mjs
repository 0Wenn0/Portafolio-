// Script de referencia: cómo se calcularon las posiciones base de la red de
// áreas antes de ajustarlas a mano a un layout en anillo (ver
// src/content/network.ts). No se ejecuta en el build: las posiciones ya
// ajustadas viven como constante tipada. Se conserva para que quien retome
// el diseño pueda regenerar una base y volver a ajustarla.
//
// Uso: node scripts/network-layout.mjs
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
  forceX,
  forceY,
} from "d3-force";

const nodeIds = ["neuro", "instr", "cm", "datos", "policy", "ux"];
const edgePairs = [
  ["policy", "cm"],
  ["cm", "instr"],
  ["policy", "instr"],
  ["instr", "ux"],
  ["ux", "datos"],
  ["neuro", "cm"],
  ["neuro", "ux"],
  ["neuro", "datos"],
  ["neuro", "instr"],
];

function layout(width, height, pad, seed) {
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
  const nodes = nodeIds.map((id) => ({
    id,
    x: width / 2 + (rnd() - 0.5) * width * 0.5,
    y: height / 2 + (rnd() - 0.5) * height * 0.5,
  }));
  const links = edgePairs.map(([source, target]) => ({ source, target }));

  const sim = forceSimulation(nodes)
    .randomSource(rnd)
    .force(
      "link",
      forceLink(links)
        .id((d) => d.id)
        .distance(Math.min(width, height) * 0.42),
    )
    .force("charge", forceManyBody().strength(-900))
    .force("center", forceCenter(width / 2, height / 2))
    .force("collide", forceCollide(60))
    .force("x", forceX(width / 2).strength(0.04))
    .force("y", forceY(height / 2).strength(0.06))
    .stop();

  for (let i = 0; i < 400; i++) sim.tick();

  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);
  const [x0, x1, y0, y1] = [
    Math.min(...xs),
    Math.max(...xs),
    Math.min(...ys),
    Math.max(...ys),
  ];

  const out = {};
  nodes.forEach((n) => {
    out[n.id] = [
      Math.round(pad.l + ((n.x - x0) / (x1 - x0)) * (width - pad.l - pad.r)),
      Math.round(pad.t + ((n.y - y0) / (y1 - y0)) * (height - pad.t - pad.b)),
    ];
  });
  return out;
}

const result = {
  desktop: layout(500, 440, { l: 40, r: 40, t: 40, b: 40 }, 7),
  mobile: layout(350, 308, { l: 28, r: 28, t: 28, b: 28 }, 7),
};

console.log(JSON.stringify(result, null, 2));
