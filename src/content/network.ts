import type { NetworkEdge, NetworkNode } from "./types";

// Posiciones calculadas con d3-force (script de referencia en scripts/network-layout.mjs)
// y ajustadas a un layout en anillo con etiquetas siempre hacia afuera del nodo,
// para mantener la legibilidad del mapa. Se guardan como constante: el navegador
// solo recibe SVG y botones, sin simulación en tiempo real.
export const networkNodes: NetworkNode[] = [
  { id: "neuro", label: "Neuropsicología" },
  { id: "instr", label: "Diseño instruccional" },
  { id: "cm", label: "Change Management" },
  { id: "datos", label: "Datos" },
  { id: "policy", label: "Política pública de IA" },
  { id: "ux", label: "UX y comunicación" },
];

export const networkEdges: NetworkEdge[] = [
  ["policy", "cm", "el Programa OpenAI"],
  ["cm", "instr", "el Programa OpenAI"],
  ["policy", "instr", "el Programa OpenAI"],
  ["instr", "ux", "el INFP y en Aula"],
  ["ux", "datos", "el INFP"],
  ["neuro", "cm", "SISAP Recover AI"],
  ["neuro", "ux", "SISAP Recover AI"],
  [
    "neuro",
    "datos",
    "mi rol de arquitecta de datos en una investigación sobre exposoma y cognición",
  ],
  ["neuro", "instr", "mi trayectoria clínica"],
];

export type NetworkLayout = {
  width: number;
  height: number;
  centerY: number;
  positions: Record<string, [number, number]>;
};

export const networkLayoutDesktop: NetworkLayout = {
  width: 500,
  height: 440,
  centerY: 215,
  positions: {
    cm: [262, 62],
    policy: [402, 146],
    instr: [384, 292],
    ux: [244, 366],
    datos: [100, 300],
    neuro: [112, 132],
  },
};

export const networkLayoutMobile: NetworkLayout = {
  width: 350,
  height: 308,
  centerY: 154,
  positions: {
    cm: [183, 50],
    policy: [275, 107],
    instr: [263, 206],
    ux: [171, 257],
    datos: [76, 212],
    neuro: [84, 98],
  },
};
