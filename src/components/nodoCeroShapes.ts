/* Figuras para la escena de cierre: se dibujan en un lienzo de 400×400
   y se muestrean como puntos. Coordenadas normalizadas a [-1, 1]. */

export type Shape = Float32Array; // pares x, y

type Draw = (g: CanvasRenderingContext2D) => void;

const SIZE = 400;

function samplePixels(draw: Draw): Array<[number, number]> {
  const c = document.createElement("canvas");
  c.width = c.height = SIZE;
  const g = c.getContext("2d");
  if (!g) return [[200, 200]];
  g.strokeStyle = g.fillStyle = "#fff";
  g.lineCap = g.lineJoin = "round";
  draw(g);
  const data = g.getImageData(0, 0, SIZE, SIZE).data;
  const pixels: Array<[number, number]> = [];
  for (let y = 0; y < SIZE; y += 2) for (let x = 0; x < SIZE; x += 2) if (data[(y * SIZE + x) * 4 + 3]! > 120) pixels.push([x, y]);
  return pixels.length ? pixels : [[200, 200]];
}

function fromDrawings(parts: Array<[Draw, number]>, count: number): Shape {
  const out = new Float32Array(count * 2);
  let i = 0;
  parts.forEach(([draw, share], k) => {
    const pixels = samplePixels(draw);
    const n = k === parts.length - 1 ? count - i : Math.round(count * share);
    for (let m = 0; m < n; m++, i++) {
      const [x, y] = pixels[Math.floor(Math.random() * pixels.length)]!;
      out[i * 2] = (x - 200) / 200 + (Math.random() - 0.5) * 0.008;
      out[i * 2 + 1] = (y - 200) / 200 + (Math.random() - 0.5) * 0.008;
    }
  });
  return out;
}

export function scattered(count: number): Shape {
  const out = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    out[i * 2] = (Math.random() - 0.5) * 3.2;
    out[i * 2 + 1] = (Math.random() - 0.5) * 2;
  }
  return out;
}

/* Red neuronal: capas de nodos unidas por aristas. */
export function network(count: number): Shape {
  const layers = [3, 5, 5, 2];
  const nodes = layers.map((n, li) => Array.from({ length: n }, (_, k) => [-0.75 + li * 0.5, (k - (n - 1) / 2) * (n > 3 ? 0.36 : 0.5)] as [number, number]));
  const edges: Array<[[number, number], [number, number]]> = [];
  for (let li = 0; li < nodes.length - 1; li++) for (const a of nodes[li]!) for (const b of nodes[li + 1]!) edges.push([a, b]);
  const flat = nodes.flat();
  const out = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    let x: number, y: number;
    if (Math.random() < 0.5) {
      const [nx, ny] = flat[Math.floor(Math.random() * flat.length)]!;
      const r = Math.sqrt(Math.random()) * 0.07, a = Math.random() * Math.PI * 2;
      x = nx + Math.cos(a) * r; y = ny + Math.sin(a) * r;
    } else {
      const [[ax, ay], [bx, by]] = edges[Math.floor(Math.random() * edges.length)]!;
      const t = Math.random();
      x = ax + (bx - ax) * t; y = ay + (by - ay) * t;
    }
    out[i * 2] = x; out[i * 2 + 1] = y;
  }
  return out;
}

/* Cerebro de perfil: hemisferio, cerebelo y tronco. */
function brainParts(g: CanvasRenderingContext2D, fill: boolean) {
  const paint = () => (fill ? g.fill() : g.stroke());
  g.beginPath();
  g.moveTo(80, 248);
  g.bezierCurveTo(30, 190, 70, 72, 190, 64);
  g.bezierCurveTo(305, 56, 368, 128, 346, 206);
  g.bezierCurveTo(338, 240, 314, 256, 282, 256);
  g.bezierCurveTo(244, 262, 204, 262, 172, 272);
  g.bezierCurveTo(130, 284, 96, 274, 80, 248);
  g.closePath(); paint();
  g.beginPath(); g.ellipse(288, 282, 44, 27, -0.15, 0, Math.PI * 2); paint();
  g.beginPath(); g.moveTo(228, 258); g.quadraticCurveTo(238, 310, 228, 350); g.lineTo(256, 350); g.quadraticCurveTo(264, 308, 258, 262); g.closePath(); paint();
}
export function brain(count: number): Shape {
  return fromDrawings([
    [(g) => brainParts(g, true), 0.6],
    [(g) => {
      g.lineWidth = 5; brainParts(g, false);
      g.lineWidth = 3;
      g.beginPath(); g.moveTo(112, 214); g.bezierCurveTo(160, 192, 212, 206, 262, 186); g.stroke();
      g.beginPath(); g.moveTo(206, 70); g.bezierCurveTo(214, 132, 182, 182, 196, 236); g.stroke();
    }, 0.4],
  ], count);
}

/* Corazón anatómico, vista anterior: ventrículos con la punta hacia abajo
   y a la izquierda del paciente (derecha de quien mira), aurícula derecha,
   orejuela izquierda, aorta con su arco y tres ramas, tronco pulmonar,
   vena cava superior e inferior, y surco interventricular. */
function heartBody(g: CanvasRenderingContext2D) {
  g.beginPath();
  g.moveTo(150, 178);
  g.bezierCurveTo(118, 220, 124, 276, 172, 310);
  g.bezierCurveTo(206, 334, 240, 350, 266, 352);
  g.bezierCurveTo(292, 352, 306, 334, 306, 304);
  g.bezierCurveTo(310, 254, 294, 204, 262, 172);
  g.bezierCurveTo(232, 154, 180, 156, 150, 178);
  g.closePath();
}
function heartVessels(g: CanvasRenderingContext2D, scale: number) {
  const w = (n: number) => { g.lineWidth = n * scale; };
  // vena cava superior e inferior
  w(24); g.beginPath(); g.moveTo(150, 190); g.lineTo(152, 84); g.stroke();
  w(22); g.beginPath(); g.moveTo(148, 290); g.lineTo(144, 350); g.stroke();
  // aorta ascendente, arco y descendente
  w(28); g.beginPath(); g.moveTo(204, 178); g.bezierCurveTo(192, 118, 204, 74, 240, 72); g.bezierCurveTo(270, 72, 286, 94, 284, 132); g.stroke();
  // tres ramas del arco
  w(11);
  g.beginPath(); g.moveTo(214, 84); g.lineTo(204, 30); g.stroke();
  g.beginPath(); g.moveTo(238, 74); g.lineTo(240, 26); g.stroke();
  g.beginPath(); g.moveTo(260, 78); g.lineTo(276, 30); g.stroke();
  // tronco pulmonar y arterias pulmonares
  w(24); g.beginPath(); g.moveTo(232, 186); g.quadraticCurveTo(240, 150, 252, 128); g.stroke();
  w(14);
  g.beginPath(); g.moveTo(252, 128); g.quadraticCurveTo(280, 116, 318, 120); g.stroke();
  g.beginPath(); g.moveTo(246, 132); g.quadraticCurveTo(214, 126, 182, 132); g.stroke();
}
function heartChambers(g: CanvasRenderingContext2D, fill: boolean) {
  const paint = () => (fill ? g.fill() : g.stroke());
  heartBody(g); paint();
  // aurícula derecha
  g.beginPath(); g.ellipse(140, 214, 30, 46, 0.15, 0, Math.PI * 2); paint();
  // orejuela izquierda
  g.beginPath(); g.ellipse(282, 178, 22, 12, -0.7, 0, Math.PI * 2); paint();
}
export function heart(count: number): Shape {
  return fromDrawings([
    [(g) => { heartChambers(g, true); heartVessels(g, 1); }, 0.62],
    [(g) => {
      g.lineWidth = 5; heartChambers(g, false);
      // surco interventricular anterior
      g.lineWidth = 4; g.beginPath(); g.moveTo(236, 186); g.bezierCurveTo(250, 240, 254, 296, 270, 346); g.stroke();
      // contorno de los vasos
      g.globalCompositeOperation = "source-over";
      heartVessels(g, 1.18);
      g.globalCompositeOperation = "destination-out";
      heartVessels(g, 0.82);
      g.globalCompositeOperation = "source-over";
    }, 0.38],
  ], count);
}

/* Cometa: núcleo y cola, apuntando arriba a la derecha. */
export function comet(count: number): Shape {
  return fromDrawings([
    [(g) => {
      g.beginPath(); g.arc(285, 120, 30, 0, Math.PI * 2); g.fill();
      for (let i = 0; i < 9; i++) {
        const spread = (i - 4) * 0.075;
        const len = 300 - Math.abs(i - 4) * 28;
        const ang = Math.atan2(210, -225) + spread;
        g.lineWidth = 7 - Math.abs(i - 4) * 1.2;
        g.beginPath(); g.moveTo(285, 120); g.lineTo(285 + Math.cos(ang) * len, 120 + Math.sin(ang) * len); g.stroke();
      }
    }, 1],
  ], count);
}
