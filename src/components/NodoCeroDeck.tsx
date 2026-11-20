"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NodoCeroFlowSim } from "./NodoCeroFlowSim";

/* Presentación «De la idea al pitch» para Nodo Cero (WTM Santa Cruz).
   Navegación con flechas por escenas y pasos, notas de la ponente (N),
   pantalla completa (F) y temporizador (T), como en las presentaciones de BécALAS. */

type Scene = { title: string; chapter: number; notes: string };

const SCENES: Scene[] = [
  { title: "Portada", chapter: 0, notes: "Saludo y agradecimiento a WTM Santa Cruz, a n8n Bolivia y a Geraldine. Presentarte en una frase: neuropsicóloga y científica de datos que estudia cómo las personas adoptan la tecnología." },
  { title: "Encuadre", chapter: 0, notes: "Continuidad con las sesiones anteriores (si la mencionas, Varinia les dio las preguntas para pensar su proyecto). Hoy lo aplicamos de punta a punta con un caso. Usamos el Design Thinking como mapa y en cada fase una herramienta de UX, Jobs to be Done, ágil o Lean UX. Mañana construyen; hoy deciden qué. Explicar cómo participar en los comentarios." },
  { title: "Problemas normalizados", chapter: 0, notes: "Gancho. Leer la pregunta y dejar un silencio. Contar a Valeria. Pausa: ¿quién es la Valeria de su comunidad? Cinco segundos de silencio antes de seguir." },
  { title: "Lo que aprendí", chapter: 0, notes: "Tu historia en un minuto, desde la gestión del cambio. En el programa de adopción de IA con OpenAI en México (más de 3,000 asistentes), la herramienta ya estaba disponible. Entre tenerla y usarla hubo un camino: entender, confiar, practicar y sostener. Tu forma de trabajarlo: análisis, estrategia y comunidad. Mencionar EVIDENT en una línea, sin explicarlo: está en tu portafolio. Puente con el anuncio (20 s): «Les prometieron un agente que evalúa vacantes. Ese patrón lo uso en mi propia búsqueda de empleo: evalúa cada vacante con mis reglas, registra el resultado y me deja borradores, pero yo decido qué se envía. Hoy lo verán con Valeria, que busca becas.» Remate: mañana construyen la herramienta; piensen también en el camino." },
  { title: "Mini journey map", chapter: 1, notes: "Empatizar. Cinco pasos de Valeria. El paso coral es donde más duele: ahí va el flujo. Neuropsicología: cuando decidir cuesta, posponemos; ahí pierde Valeria la beca. Cerrar con: primero la persona, después el flujo." },
  { title: "¿Cabe mañana?", chapter: 2, notes: "Definir, como repaso: las preguntas de las sesiones anteriores sirven para entender el problema; estos seis criterios deciden si cabe mañana. Marcar los criterios con Valeria (cumple los seis) y pedir que cada equipo escriba su puntaje en los comentarios. Si sacan 3 o 4, acotar; si sacan menos, volver a observar." },
  { title: "Job story", chapter: 2, notes: "Job story: cuando, quiero, para. Su «cuando» será el disparador del flujo. 90 segundos con el temporizador (tecla T) y pedirla en los comentarios." },
  { title: "De la frase al workflow", chapter: 3, notes: "Idear. Diseñar el proceso antes de automatizar: cada parte de la job story responde una decisión del flujo. Quedarse en el qué, sin nombrar nodos ni configuraciones: el cómo lo verán mañana con Nicolás y en los talleres. La pregunta clave: ¿dónde decide la persona?" },
  { title: "MoSCoW", chapter: 3, notes: "MoSCoW versión hackathon: lo que debe estar el sábado y lo que puede esperar. Clasificar con los comentarios y mostrar la sugerencia. Avalanche y Clerk tienen mención especial: úsenlos cuando resuelvan algo de su usuaria; el taller de mañana les ayuda a decidirlo. Cerrar: empieza con lo que tienes." },
  { title: "Simulación del flujo", chapter: 4, notes: "Prototipar. Es una simulación didáctica para ver la lógica; mañana Nicolás y los talleres les muestran cómo se construye con las plantillas del evento. Avanzar nodo por nodo. Momento clave: la IA interpreta, el código calcula y Valeria decide. En el nodo 5, preguntar qué respondería ella. Al terminar: es el mismo patrón del agente del anuncio." },
  { title: "Los valores desde el inicio", chapter: 4, notes: "Los valores se diseñan desde el inicio. UX/UI: la interfaz del flujo son el formulario, el correo y el recordatorio. Datos: en proyectos para mujeres pueden ser muy sensibles (salud, violencia, ubicación); pidan lo mínimo, nunca usen datos reales en la demo y activen RLS en Supabase. Luego decisión humana e inclusión. Así queda lista para usuarias reales." },
  { title: "¿Cómo sabrás que funciona?", chapter: 5, notes: "Probar. Su flujo ya guarda la evidencia: cada fila en Supabase es un caso medido. Lente de gestión del cambio: la señal de adopción es el segundo uso; el primero puede ser curiosidad. Si pueden, muéstrenselo a una estudiante real y anoten lo que dice. Cerrar: ¿qué podrá hacer mañana Valeria que hoy no puede?" },
  { title: "Estructura del pitch", chapter: 6, notes: "Una sola estructura: la misma de las sesiones anteriores, en seis partes. Cada parte sale de algo que hicieron hoy. Jerga: palabras simples, porque la jerga cierra tantas puertas como abre (Heller). Empiecen por la persona." },
  { title: "Un pitch armado", chapter: 6, notes: "Ejemplo resuelto: leerlo completo. Aclarar que Valeria y sus números son ficticios. Copien la estructura; la idea es de ustedes." },
  { title: "Práctica del pitch", chapter: 6, notes: "Ahora ellas: correr el reloj de 60 s. Si hay tiempo, pedir a un equipo que lo intente en voz alta." },
  { title: "El sábado en cinco bloques", chapter: 7, notes: "A las 9:00, la práctica de Nicolás con la plantilla. Construyen de 9:45 a 14:30, con talleres a las 10:00 y 10:45: dividir al equipo según lo que necesiten. Llevar su job story y su MoSCoW a las mentoras. Congelar a las 14:00. Presentación de un minuto a las 15:00." },
  { title: "Lo que veo cuando ustedes crean", chapter: 7, notes: "Tu perspectiva, despacio. Patrones Hermosos: la comunidad que te dio espacio para equivocarte; del pánico a hablar en público a hablar frente a diputados y senadores. Primera de tu familia en la universidad. En el caso de Valeria, sus amigas que se pasan convocatorias son quienes harían que el flujo se use: la comunidad sostiene el cambio. Remate: la joven innovadora de esta historia son ustedes." },
  { title: "Lo que se llevan", chapter: 7, notes: "Regresar al encuadre: su problema, su job story, su MoSCoW y dónde decide la persona. Esta noche, solo decisiones; mañana, las plantillas del evento." },
  { title: "Cierre", chapter: 7, notes: "Eco del lema del evento. Mensaje central despacio, la pregunta y unos segundos de silencio. Preguntas (10 min), LinkedIn y agradecer a WTM Santa Cruz y n8n Bolivia." },
];

const CHAPTER_NAMES = ["Inicio", "Empatizar", "Definir", "Idear", "Prototipar", "Probar", "Contarlo", "Cierre"];
const CHAPTERS = CHAPTER_NAMES.length;
const DT_PHASES = ["Empatizar", "Definir", "Idear", "Prototipar", "Probar"];

function DtStrip({ active }: { active: number }) {
  return (
    <ol className="nc-dt-strip" aria-label="Fase de Design Thinking">
      {DT_PHASES.map((p, i) => (
        <li key={p} className={i === active ? "now" : i < active ? "done" : ""} aria-current={i === active ? "step" : undefined}>{p}</li>
      ))}
    </ol>
  );
}

/* ───────── Temporizador ───────── */
function Timer({ seconds, id }: { seconds: number; id: string }) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(false);
  const active = running && left > 0;
  useEffect(() => {
    if (!active) return;
    const tick = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(tick);
  }, [active]);
  const circ = 2 * Math.PI * 100;
  const label = left === 0 ? "¡Listo!" : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
  const toggle = () => {
    if (left === 0) {
      setLeft(seconds);
      setRunning(true);
    } else setRunning(!active);
  };
  return (
    <div className="nc-timer" data-timer={id}>
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="track" cx="110" cy="110" r="100" />
        <circle className="fill" cx="110" cy="110" r="100" style={{ strokeDashoffset: circ * (1 - left / seconds) }} />
      </svg>
      <p role="timer" aria-live="off">{label}</p>
      <button type="button" onClick={toggle}>
        {active ? "Pausa" : left === 0 ? "Otra vez" : left === seconds ? "Iniciar" : "Seguir"}
      </button>
    </div>
  );
}

/* ───────── Clasificador: ¿cabe hoy? ───────── */
type Where = "pool" | "today" | "later";
const SORT_ITEMS: { text: string; fit: Exclude<Where, "pool"> }[] = [
  { text: "Leer una convocatoria pegada y extraer fecha y requisitos", fit: "today" },
  { text: "Buscar convocatorias en 50 sitios automáticamente", fit: "later" },
  { text: "Calcular los días restantes con código", fit: "today" },
  { text: "App móvil nativa", fit: "later" },
  { text: "Valeria decide si aplica", fit: "today" },
  { text: "Recomendaciones de IA para toda su carrera", fit: "later" },
  { text: "Un recordatorio por correo", fit: "today" },
  { text: "Inicio de sesión con Clerk (viene en la plantilla)", fit: "today" },
  { text: "Roles y permisos complejos", fit: "later" },
  { text: "Avalanche Fuji sin un para qué claro", fit: "later" },
  { text: "Una métrica para mostrar que funciona", fit: "today" },
  { text: "Panel con diez gráficas", fit: "later" },
];

function Sorter() {
  const [where, setWhere] = useState<Where[]>(() => SORT_ITEMS.map(() => "pool"));
  const [reveal, setReveal] = useState(false);
  const move = (i: number, to: Where) => setWhere((w) => w.map((x, k) => (k === i ? to : x)));
  const column = (key: Where, title: string) => (
    <div className={`nc-col ${key}`}>
      <h3>{title}</h3>
      {SORT_ITEMS.map((item, i) =>
        where[i] === key ? (
          <div className="nc-chip" key={item.text}>
            <span>
              {item.text}
              {reveal && key !== "pool" ? (
                <b className={item.fit === key ? "nc-mint" : "nc-coral"}>
                  {item.fit === key ? "  ✓" : "  ↺ revísalo"}
                </b>
              ) : null}
            </span>
            {key !== "today" ? (
              <button type="button" className="to-today" onClick={() => move(i, "today")}>
                Debe estar hoy
              </button>
            ) : null}
            {key !== "later" ? (
              <button type="button" className="to-later" onClick={() => move(i, "later")}>
                Puede esperar
              </button>
            ) : null}
          </div>
        ) : null,
      )}
    </div>
  );
  return (
    <>
      <div className="nc-sort">
        {column("pool", "Ideas del equipo")}
        {column("today", "Debe estar hoy")}
        {column("later", "Puede esperar")}
      </div>
      <p className="nc-sub">
        <button type="button" className="nc-hud-btn" style={{ width: "auto", padding: "0 18px", borderRadius: 999 }} onClick={() => setReveal((r) => !r)}>
          {reveal ? "Ocultar sugerencia" : "Ver mi sugerencia"}
        </button>
      </p>
    </>
  );
}

/* ───────── ¿Vale la pena este problema? ───────── */
const CRITERIA = [
  "Le pasa a una persona concreta que puedo contactar",
  "Pasa seguido: cada semana o más",
  "Hoy se resuelve a mano o con algo improvisado",
  "Cabe en 3.5 horas con n8n, Supabase y Clerk",
  "Tengo o puedo inventar datos de prueba realistas",
  "Se puede mostrar funcionando en un minuto",
];

function ProblemCheck() {
  const [on, setOn] = useState<boolean[]>(() => CRITERIA.map(() => false));
  const score = on.filter(Boolean).length;
  const verdict =
    score === 0
      ? { cls: "nc-mint", text: "Marca lo que cumple tu problema." }
      : score >= 5
      ? { cls: "nc-mint", text: "Adelante: es un buen problema para el sábado." }
      : score >= 3
        ? { cls: "nc-coral", text: "Acótalo: elige una persona y un solo momento del problema." }
        : { cls: "nc-coral", text: "Busca otro, o vuelve a observar antes de construir." };
  return (
    <div className="nc-check">
      <ul>
        {CRITERIA.map((c, i) => (
          <li key={c}>
            <button type="button" aria-pressed={on[i]} onClick={() => setOn((o) => o.map((x, k) => (k === i ? !x : x)))}>
              <span aria-hidden="true">{on[i] ? "✓" : ""}</span>
              {c}
            </button>
          </li>
        ))}
      </ul>
      <p className="nc-verdict" aria-live="polite">
        <b>{score} / {CRITERIA.length}</b> <span className={verdict.cls}>{verdict.text}</span>
      </p>
    </div>
  );
}

/* ───────── Reloj del pitch ───────── */
const PITCH = [
  { label: "Problema", until: 12, cue: "Cuenta el problema con una persona concreta: quién es y qué le pasa." },
  { label: "Solución", until: 27, cue: "Muestra el flujo funcionando con un caso, sin nombres de herramientas." },
  { label: "Diferencia", until: 35, cue: "Di qué la hace distinta: dónde decide la persona, cómo cuidas sus datos." },
  { label: "Evidencia", until: 45, cue: "Da tu prueba: cuántos casos corriste y en cuántos acertó." },
  { label: "Impacto", until: 53, cue: "Di qué podrá hacer tu usuaria que hoy no puede y cómo llegará a más personas." },
  { label: "Petición", until: 60, cue: "Pide lo que necesitan: usuarias para probar, aliados o mentoría." },
];

function PitchClock() {
  const [t, setT] = useState(0);
  const [running, setRunning] = useState(false);
  const active = running && t < 60;
  useEffect(() => {
    if (!active) return;
    const tick = setInterval(() => setT((s) => Math.min(60, s + 1)), 1000);
    return () => clearInterval(tick);
  }, [active]);
  const nowIdx = PITCH.findIndex((p) => t < p.until);
  const current = nowIdx === -1 ? null : PITCH[nowIdx];
  return (
    <div className="nc-pitch">
      <div>
        <div className="nc-bar">
          {PITCH.map((p, i) => {
            const width = p.until - (i === 0 ? 0 : (PITCH[i - 1]?.until ?? 0));
            const cls = active || t > 0 ? (i === nowIdx ? "now" : i < nowIdx || nowIdx === -1 ? "past" : "") : "";
            return (
              <div key={p.label} className={cls} style={{ flex: width }}>
                <span>
                  {p.label}
                  <small>{width} s</small>
                </span>
              </div>
            );
          })}
        </div>
        <p className="nc-cue" aria-live="polite">
          {t === 0 && !active ? (
            <>Presiona <b>Iniciar</b> y cuenta un pitch en voz alta siguiendo la barra.</>
          ) : current ? (
            <><b>{current.label}:</b> {current.cue}</>
          ) : (
            <><b>¡Tiempo!</b> Si te sobró, recorta; si te faltó, quita detalles técnicos.</>
          )}
        </p>
      </div>
      <div>
        <p className="nc-big" role="timer">{60 - t}</p>
        <button
          type="button"
          onClick={() => {
            if (t >= 60) {
              setT(0);
              setRunning(true);
            } else setRunning(!active);
          }}
        >
          {active ? "Pausa" : t >= 60 ? "Otra vez" : t === 0 ? "Iniciar" : "Seguir"}
        </button>
      </div>
    </div>
  );
}

/* ───────── Cielo de nodos ───────── */
function useNodeSky(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let nodes: Node[] = [];
    const colors = ["rgba(111,227,200,", "rgba(255,122,92,", "rgba(244,241,234,"] as const;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 16000);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 2.2,
        c: Math.random() < 0.6 ? colors[2] : Math.random() < 0.5 ? colors[0] : colors[1],
      }));
    };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (!a || !b) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            const near = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < 180;
            ctx.strokeStyle = near ? `rgba(255,122,92,${(1 - d / 130) * 0.55})` : `rgba(111,227,200,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = near ? 1.1 : 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `${n.c}0.85)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [canvasRef]);
}

/* ───────── Presentación ───────── */
export function NodoCeroDeck() {
  const rootRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLCanvasElement>(null);
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [hintGone, setHintGone] = useState(false);
  const indexRef = useRef(0);
  const navRef = useRef<{ next: () => void; prev: () => void }>({ next: () => {}, prev: () => {} });
  useNodeSky(skyRef);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const scenesEl = useCallback(() => [...(rootRef.current?.querySelectorAll<HTMLElement>(".nc-scene") ?? [])], []);
  const stepsOf = (s: HTMLElement) => [...s.querySelectorAll<HTMLElement>(".nc-step")];

  const show = useCallback(
    (i: number, revealAll = false) => {
      const list = scenesEl();
      list.forEach((s, k) => {
        if (k === i) stepsOf(s).forEach((el) => el.classList.toggle("is-shown", revealAll));
        s.querySelectorAll(".nc-card.is-spot").forEach((c) => c.classList.remove("is-spot"));
        s.querySelectorAll(".nc-has-spot").forEach((g) => g.classList.remove("nc-has-spot"));
      });
      setIndex(i);
      history.replaceState(null, "", `#${i}`);
    },
    [scenesEl],
  );

  // Escena inicial desde el hash
  useEffect(() => {
    const n = parseInt(location.hash.slice(1), 10);
    if (!Number.isFinite(n)) return;
    const id = setTimeout(() => show(Math.max(0, Math.min(SCENES.length - 1, n)), true), 0);
    return () => clearTimeout(id);
  }, [show]);

  // Teclado y pista
  useEffect(() => {
    const hide = setTimeout(() => setHintGone(true), 6000);
    const next = () => {
      const s = scenesEl()[indexRef.current];
      if (!s) return;
      const sim = s.querySelector<HTMLButtonElement>("[data-sim-next]:not(:disabled)");
      if (sim) {
        sim.click();
        return;
      }
      const pending = stepsOf(s).find((el) => !el.classList.contains("is-shown"));
      if (pending) pending.classList.add("is-shown");
      else if (indexRef.current < SCENES.length - 1) show(indexRef.current + 1);
    };
    const prev = () => {
      const s = scenesEl()[indexRef.current];
      if (!s) return;
      const simBack = s.querySelector<HTMLButtonElement>("[data-sim-prev]:not(:disabled)");
      if (simBack) {
        simBack.click();
        return;
      }
      const shown = stepsOf(s).filter((el) => el.classList.contains("is-shown"));
      const last = shown.at(-1);
      if (last) last.classList.remove("is-shown");
      else if (indexRef.current > 0) show(indexRef.current - 1, true);
    };
    navRef.current = { next, prev };
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("button, .nc-card") && (e.key === " " || e.key === "Enter")) return;
      if (["ArrowRight", "PageDown", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "n" || e.key === "N") setNotesOpen((o) => !o);
      else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      } else if (e.key === "t" || e.key === "T") {
        scenesEl()[indexRef.current]?.querySelector<HTMLButtonElement>(".nc-timer button, .nc-pitch button")?.click();
      } else if (e.key === "Home") show(0);
      setHintGone(true);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(hide);
      window.removeEventListener("keydown", onKey);
    };
  }, [scenesEl, show]);


  // Tarjetas vivas: inclinación, brillo y clic para destacar
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sparkle = (x: number, y: number, count: number) => {
      if (reduce) return;
      for (let i = 0; i < count; i++) {
        const el = document.createElement("i");
        el.className = `nc-spark${i % 3 === 0 ? " mint" : ""}`;
        const a = (i / count) * Math.PI * 2 + Math.random() * 0.4;
        const d = 30 + Math.random() * 45;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.setProperty("--dx", `${Math.cos(a) * d}px`);
        el.style.setProperty("--dy", `${Math.sin(a) * d}px`);
        document.body.appendChild(el);
        el.addEventListener("animationend", () => el.remove());
      }
    };
    const cleanups: (() => void)[] = [];
    root.querySelectorAll<HTMLElement>(".nc-scene").forEach((sc) =>
      sc.querySelectorAll<HTMLElement>(".nc-card").forEach((card, i) => {
        card.style.setProperty("--i", String(i));
        card.tabIndex = 0;
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
          if (!reduce) {
            card.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
            card.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
          }
        };
        const enter = (e: PointerEvent) => sparkle(e.clientX, e.clientY, 5);
        const leave = () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };
        const spot = (x: number, y: number) => {
          const group = card.parentElement;
          if (!group) return;
          const on = !card.classList.contains("is-spot");
          group.querySelectorAll(".nc-card").forEach((c) => c.classList.remove("is-spot"));
          card.classList.toggle("is-spot", on);
          group.classList.toggle("nc-has-spot", on);
          if (on) sparkle(x, y, 14);
        };
        const click = (e: MouseEvent) => spot(e.clientX, e.clientY);
        const key = (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const r = card.getBoundingClientRect();
            spot(r.left + r.width / 2, r.top + r.height / 2);
          }
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
        card.addEventListener("click", click);
        card.addEventListener("keydown", key);
        cleanups.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
          card.removeEventListener("click", click);
          card.removeEventListener("keydown", key);
        });
      }),
    );
    return () => cleanups.forEach((f) => f());
  }, []);

  const scene = SCENES[index] ?? SCENES[0]!;
  const sceneProps = (i: number, extra = "") => ({
    className: `nc-scene${extra ? ` ${extra}` : ""}${i === index ? " is-on" : ""}`,
    "aria-hidden": i !== index,
    inert: i !== index,
  });

  return (
    <div className="nc" ref={rootRef}>
      <canvas ref={skyRef} className="nc-sky" aria-hidden="true" />
      <div className="nc-vignette" aria-hidden="true" />

      <main>
        {/* Portada */}
        <section {...sceneProps(0)}>
          <div>
            <p className="nc-kicker">Nodo Cero · Hackathon n8n · WTM Santa Cruz</p>
            <h1>
              De la idea
              <br />
              <span className="nc-coral">al workflow</span>
            </h1>
            <p className="nc-lede">Diseñar el proceso, decidir dónde actúa la persona y lograr que lo usen. La noche antes de construir.</p>
            <div className="nc-meta">
              <span>Wendy Ramírez Burgos</span>
              <span>Neuropsicóloga y científica de datos · adopción de IA</span>
              <span>Embajadora de Women Techmakers · México</span>
            </div>
          </div>
        </section>

        {/* Encuadre */}
        <section {...sceneProps(1)}>
          <div>
            <p className="nc-kicker">Para qué estamos aquí</p>
            <h2>Del proyecto que pensaron al workflow que mañana dejan funcionando</h2>
            <p className="nc-sub">Las sesiones anteriores les dieron cómo pensar una solución. Hoy la aplicamos de punta a punta con un caso. El Design Thinking es el mapa; en cada fase usamos una herramienta de UX, Jobs to be Done, metodologías ágiles o Lean UX.</p>
            <ol className="nc-dt-map">
              <li><b>Empatizar</b><span>¿Dónde le duele?</span></li>
              <li><b>Definir</b><span>¿Cabe mañana?</span></li>
              <li><b>Idear</b><span>¿Cómo se diseña el proceso?</span></li>
              <li><b>Prototipar</b><span>¿Dónde decide la persona?</span></li>
              <li><b>Probar</b><span>¿Lo van a usar?</span></li>
              <li><b>Contarlo</b><span>¿Cómo lo mostramos en un minuto?</span></li>
            </ol>
            <div className="nc-frame">
              <p className="nc-step"><b>Se llevan:</b> su problema revisado, su job story, el diseño de su proceso, su MoSCoW y la estructura de su pitch.</p>
              <p className="nc-step"><b>Cómo participar:</b> respondan en los comentarios cuando vean «En los comentarios». 30 minutos de charla y 10 de preguntas.</p>
            </div>
          </div>
        </section>

        {/* Problemas normalizados */}
        <section {...sceneProps(2)}>
          <div>
            <p className="nc-kicker">Para empezar</p>
            <h2>¿Qué problemas hemos normalizado tanto que dejamos de verlos?</h2>
            <div className="nc-ba story">
              <p className="before nc-step">Valeria tiene 20 años, estudia ingeniería y trabaja medio tiempo. Las convocatorias le llegan por grupos de WhatsApp, correos y capturas de pantalla.</p>
              <p className="after nc-step">La semana pasada se le pasó una beca por dos días. Ya lo ve como algo normal.</p>
            </div>
            <p className="nc-sub nc-step">Ahí empieza un proyecto: en algo que alguien aprendió a soportar.</p>
            <p className="nc-ask nc-step"><span>“</span>¿Quién es la Valeria de su comunidad?</p>
          </div>
        </section>

        {/* Lo que aprendí */}
        <section {...sceneProps(3)}>
          <div>
            <p className="nc-kicker">Lo que aprendí con más de 3,000 personas · Gestión del cambio</p>
            <h2>Entre tener la herramienta y usarla hay un camino</h2>
            <p className="nc-sub">En el programa de adopción de IA con OpenAI en México, la herramienta ya estaba disponible. El trabajo fue que las personas la entendieran, confiaran en ella, la practicaran y la sostuvieran. Así lo trabajo:</p>
            <div className="nc-grid">
              <article className="nc-card">
                <span className="nc-num">01</span>
                <h3>Análisis</h3>
                <p>A quién le cambia el día y qué le cuesta hoy.</p>
                <p className="nc-lens">En esta charla: Valeria y su problema.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">02</span>
                <h3>Estrategia</h3>
                <p>Cómo entra la herramienta en su rutina y dónde decide la persona.</p>
                <p className="nc-lens">En esta charla: el diseño del proceso.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">03</span>
                <h3>Comunidad</h3>
                <p>Quiénes acompañan y sostienen el uso cuando pasa la novedad.</p>
                <p className="nc-lens">En esta charla: la adopción y el pitch.</p>
              </article>
            </div>
            <p className="nc-sub nc-step">Esa experiencia la ordené en un método propio: <b>EVIDENT</b>.</p>
            <p className="nc-sub nc-step">Mi agente de vacantes sigue el mismo orden: evalúa con mis reglas, registra el resultado y prepara borradores. <b>Yo decido qué se envía.</b> Hoy lo verán con Valeria.</p>
            <p className="nc-takeaway nc-step">Mañana construyen la herramienta. Piensen también en el camino.</p>
          </div>
        </section>

        {/* Mini journey map */}
        <section {...sceneProps(4)}>
          <div>
            <DtStrip active={0} />
            <p className="nc-kicker">Empatizar · Mini journey map (UX)</p>
            <h2>¿En qué paso duele más?</h2>
            <p className="nc-sub">El camino de Valeria con una convocatoria. Tu flujo va donde más duele.</p>
            <ol className="nc-flow">
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">1</div>
                <b>Le llega</b>
                <small>Por un grupo, entre otros 50 mensajes.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">2</div>
                <b>La lee</b>
                <small>Tres páginas de bases y requisitos.</small>
              </li>
              <li className="nc-step human">
                <div className="nc-node" aria-hidden="true">3</div>
                <b>¿Califico?</b>
                <small>Decidir cuesta: lo deja para después.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">4</div>
                <b>Junta documentos</b>
                <small>Sin saber cuánto tiempo le queda.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">5</div>
                <b>Aplica</b>
                <small>…o se le pasa la fecha.</small>
              </li>
            </ol>
            <p className="nc-takeaway nc-step">Primero la persona, después el flujo.</p>
          </div>
        </section>

        {/* ¿Vale la pena? */}
        <section {...sceneProps(5)}>
          <div>
            <DtStrip active={1} />
            <p className="nc-kicker">Definir · Repaso: ¿cabe mañana?</p>
            <h2>¿Su problema cabe en la hackathon de mañana?</h2>
            <p className="nc-sub">Las preguntas de las sesiones anteriores sirven para entender el problema. Estos seis criterios deciden si cabe mañana. Probemos con el de Valeria; después, con el de tu equipo.</p>
            <ProblemCheck />
          </div>
        </section>

        {/* Sin nombrar la tecnología */}
        <section {...sceneProps(6, "nc-two")}>
          <div>
            <p className="nc-kicker">Definir · Job story (Jobs to be Done) · 90 segundos</p>
            <h2>Tu problema en una frase, sin nombrar la tecnología</h2>
            <div className="nc-formula">
              <span><em>Cuando</em> [situación],</span>
              <span><em>quiero</em> [motivación],</span>
              <span><em>para</em> [resultado].</span>
            </div>
            <div className="nc-ba">
              <p className="before nc-step">Un agente de IA con n8n que automatiza la búsqueda de becas.</p>
              <p className="after nc-step">Cuando una estudiante ve una convocatoria, quiere saber en un minuto si califica y qué necesita, para no perder la fecha.</p>
            </div>
            <p className="nc-action nc-step">En los comentarios: la de tu equipo, sin decir n8n, IA, agente ni app. Su «cuando» será el disparador del flujo.</p>
            <p className="nc-takeaway nc-step">Un buen problema cabe en una frase sin tecnología.</p>
          </div>
          <Timer seconds={90} id="frase" />
        </section>

        {/* De la frase al workflow */}
        <section {...sceneProps(7)}>
          <div>
            <DtStrip active={2} />
            <p className="nc-kicker">Idear · Diseñar el proceso</p>
            <h2>Antes de automatizar, hay que diseñar el proceso</h2>
            <p className="nc-sub">Cada parte de su job story responde una decisión de su workflow. Con Valeria:</p>
            <div className="nc-anatomy" role="table" aria-label="De la job story al workflow">
              <div role="row" className="head"><span role="columnheader">Su frase</span><span role="columnheader">La decisión</span><span role="columnheader">Con Valeria</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Cuando…</b></span><span role="cell">¿Qué lo pone en marcha?</span><span role="cell">Pega una convocatoria</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Quiero…</b></span><span role="cell">¿Qué hace el flujo por ella?</span><span role="cell">Lee requisitos y cuenta los días</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Para…</b></span><span role="cell">¿Qué recibe o qué queda guardado?</span><span role="cell">Un aviso y su registro</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>La persona</b></span><span role="cell">¿Dónde decide ella?</span><span role="cell">Elige si aplica</span></div>
            </div>
            <p className="nc-action nc-step">En los comentarios: ¿dónde decide la persona en su proyecto?</p>
            <p className="nc-takeaway nc-step">Hoy deciden qué hace su flujo. Mañana aprenden cómo se configura.</p>
          </div>
        </section>

        {/* MoSCoW */}
        <section {...sceneProps(8)}>
          <div>
            <p className="nc-kicker">Idear · MoSCoW (ágil)</p>
            <h2>¿Qué debe estar el sábado?</h2>
            <p className="nc-sub">Ayúdame a clasificar. En una hackathon gana <b>lo pequeño que funciona</b>.</p>
            <Sorter />
            <p className="nc-takeaway nc-step">Empieza con lo que tienes: lo pequeño que funciona gana.</p>
          </div>
        </section>

        {/* Simulación */}
        <section {...sceneProps(9)}>
          <div>
            <DtStrip active={3} />
            <p className="nc-kicker">Prototipar · Simulación didáctica del flujo</p>
            <h2 className="nc-compact">La IA interpreta, el código calcula y Valeria decide</h2>
            <NodoCeroFlowSim />
            <p className="nc-sub nc-step">Antes de automatizar, hay que diseñar el proceso. Este flujo sirve igual para <b>vacantes, becas o convocatorias</b>; el registro puede ser Google Sheets o Supabase.</p>
          </div>
        </section>

        {/* Momentos de contacto */}
        <section {...sceneProps(10)}>
          <div>
            <p className="nc-kicker">Prototipar · Experiencia (UX/UI) y valores</p>
            <h2>Los valores se diseñan desde el inicio</h2>
            <p className="nc-sub">La interfaz de tu flujo son los momentos en que la persona lo toca.</p>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">1</span><h3>El formulario</h3><p>Un solo campo: «Pega aquí la convocatoria». Que funcione bien en el celular.</p></article>
              <article className="nc-card"><span className="nc-num">2</span><h3>El correo de aprobación</h3><p>Una pregunta y dos botones: «¿Aplicas? Sí / Ahora no». Sin jerga técnica.</p></article>
              <article className="nc-card"><span className="nc-num">3</span><h3>El recordatorio</h3><p>Qué falta y cuándo cierra, en una línea.</p></article>
            </div>
            <div className="nc-banned">
              <span className="nc-step">Datos<i>→ pide lo mínimo, nada de datos reales en la demo y RLS en Supabase</i></span>
              <span className="nc-step">Decisión<i>→ la IA organiza, una persona aprueba</i></span>
              <span className="nc-step">Inclusión<i>→ poca señal, solo celular, lector de pantalla</i></span>
            </div>
            <p className="nc-takeaway nc-step">Diseña los momentos en que la persona toca tu flujo.</p>
          </div>
        </section>

        {/* Evidencia */}
        <section {...sceneProps(11)}>
          <div>
            <DtStrip active={4} />
            <p className="nc-kicker">Probar · Evidencia y adopción</p>
            <h2>¿Cómo sabrás que funciona?</h2>
            <p className="nc-story">Su flujo ya guarda la evidencia: <em>cada fila en Supabase es un caso medido</em>.</p>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">📏</span><h3>Una métrica</h3><p>Antes tardaba 40 minutos en entender una convocatoria; con el flujo, dos.</p></article>
              <article className="nc-card"><span className="nc-num">🧪</span><h3>Una prueba</h3><p>Corre el flujo con 10 convocatorias de prueba y cuenta en cuántas acertó la fecha.</p></article>
              <article className="nc-card"><span className="nc-num">🔁</span><h3>Una señal de adopción</h3><p>¿Valeria lo usa una segunda vez? El primer uso puede ser curiosidad; el segundo es adopción.</p></article>
            </div>
            <p className="nc-action nc-step">Demuestra el valor: ¿qué podrá hacer mañana Valeria que hoy no puede?</p>
            <p className="nc-takeaway nc-step">Sin métrica, es una promesa.</p>
          </div>
        </section>

        {/* Anatomía del pitch */}
        <section {...sceneProps(12)}>
          <div>
            <p className="nc-kicker">Contarlo · Una sola estructura</p>
            <h2>Ya tienen casi todo su pitch</h2>
            <p className="nc-sub">Un minuto, seis partes: la misma estructura de las sesiones anteriores. Cada parte sale de algo que hicieron hoy.</p>
            <div className="nc-anatomy" role="table" aria-label="Partes del pitch">
              <div role="row" className="head"><span role="columnheader">Parte</span><span role="columnheader">Pregunta del jurado</span><span role="columnheader">Sale de</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Problema</b> · 12 s</span><span role="cell">¿Esto importa?</span><span role="cell">Su job story</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Solución</b> · 15 s</span><span role="cell">¿Funciona?</span><span role="cell">Su flujo, en vivo</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Diferencia</b> · 8 s</span><span role="cell">¿Por qué esta?</span><span role="cell">Dónde decide la persona</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Evidencia</b> · 10 s</span><span role="cell">¿Cómo lo saben?</span><span role="cell">Su prueba</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Impacto</b> · 8 s</span><span role="cell">¿Lo van a usar?</span><span role="cell">Su señal de adopción</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Petición</b> · 7 s</span><span role="cell">¿Qué necesitan?</span><span role="cell">Su MoSCoW: lo que puede esperar</span></div>
            </div>
            <p className="nc-sub nc-step">Empiecen por la persona y usen palabras simples: el jurado recuerda historias antes que funciones.</p>
          </div>
        </section>

        {/* Pitch armado */}
        <section {...sceneProps(13)}>
          <div>
            <p className="nc-kicker">Contarlo · Ejemplo completo · caso ficticio</p>
            <h2>Así suena un pitch armado</h2>
            <div className="nc-template">
              <p className="nc-step"><em>Problema</em>Valeria tiene 20 años, estudia y trabaja. La semana pasada perdió una beca por dos días: la convocatoria se quedó entre 50 mensajes.</p>
              <p className="nc-step"><em>Solución</em>Aquí pegamos una convocatoria… en un minuto le dice si califica, qué documentos necesita y cuántos días le quedan.</p>
              <p className="nc-step"><em>Diferencia</em>La IA lee y calcula, pero Valeria decide si aplica. Sus datos solo los ve ella.</p>
              <p className="nc-step"><em>Evidencia</em>Con 10 convocatorias de prueba acertó la fecha en 9.</p>
              <p className="nc-step"><em>Impacto</em>Valeria ya no pierde fechas, y lo comparte con las amigas que le pasan convocatorias.</p>
              <p className="nc-step"><em>Petición</em>Buscamos 30 estudiantes para probarlo durante un mes.</p>
            </div>
            <p className="nc-takeaway nc-step">Copien la estructura. La idea es de ustedes.</p>
          </div>
        </section>

        {/* Pitch en 60 s */}
        <section {...sceneProps(14)}>
          <div>
            <p className="nc-kicker">Contarlo · Práctica</p>
            <h2>Ahora ustedes: un minuto con reloj</h2>
            <PitchClock />
            <p className="nc-takeaway nc-step">Ensayen en voz alta, con reloj, al menos tres veces.</p>
          </div>
        </section>

        {/* El sábado */}
        <section {...sceneProps(15)}>
          <div>
            <p className="nc-kicker">El sábado en cinco bloques</p>
            <h2>Tienen unas 3.5 horas para construir</h2>
            <p className="nc-sub">Entre talleres, almuerzo y refrigerio, el tiempo real de desarrollo es corto. Planéenlo desde hoy.</p>
            <ol className="nc-flow times">
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">Vie</div>
                <b>Esta noche</b>
                <small>Elegir el problema. Nada de construir todavía.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">9:45</div>
                <b>Antes del almuerzo</b>
                <small>Construir el flujo mínimo de punta a punta.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">13:15</div>
                <b>Después del almuerzo</b>
                <small>Lo que sigue del MoSCoW y su métrica.</small>
              </li>
              <li className="nc-step human">
                <div className="nc-node" aria-hidden="true">14:00</div>
                <b>Congelar</b>
                <small>Nada nuevo. Solo arreglar lo que falla.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">14:30</div>
                <b>Grabar y ensayar</b>
                <small>Video de respaldo y el minuto con reloj.</small>
              </li>
            </ol>
          </div>
        </section>

        {/* Historia de una idea */}
        <section {...sceneProps(16)}>
          <div>
            <p className="nc-kicker">Mi perspectiva</p>
            <h2>Lo que veo cuando ustedes crean</h2>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">01</span><h3>Ven lo que otros normalizaron</h3><p>Valeria se acostumbró a perder fechas. Ustedes pueden notarlo y cambiarlo.</p></article>
              <article className="nc-card"><span className="nc-num">02</span><h3>Construir también es aprender a confiar</h3><p>Una comunidad me dio espacio para equivocarme. Pasé del pánico a hablar en público a hablar frente a diputados y senadores.</p></article>
              <article className="nc-card"><span className="nc-num">03</span><h3>Abren puertas para otras</h3><p>Fui la primera de mi familia en ir a la universidad. Cada proyecto que presentan le muestra a otra chica que ese camino existe.</p></article>
            </div>
            <p className="nc-sub nc-step">La comunidad también sostiene el cambio: las amigas de Valeria harían que su flujo se use.</p>
            <p className="nc-takeaway nc-step">La joven innovadora de esta historia son ustedes.</p>
          </div>
        </section>

        {/* Para mañana */}
        <section {...sceneProps(17)}>
          <div>
            <p className="nc-kicker">Lo que se llevan</p>
            <h2>Cuatro decisiones para esta noche</h2>
            <div className="nc-close">
              <article className="nc-card"><span className="nc-num">1</span><h3>Su problema</h3><p>El que cabe mañana según los seis criterios.</p></article>
              <article className="nc-card"><span className="nc-num">2</span><h3>Su job story</h3><p>Una frase, sin nombrar la tecnología. Su «cuando» será el disparador del flujo.</p></article>
              <article className="nc-card"><span className="nc-num">3</span><h3>Su MoSCoW</h3><p>Qué debe estar el sábado y qué puede esperar.</p></article>
              <article className="nc-card"><span className="nc-num">4</span><h3>Dónde decide la persona</h3><p>El momento de su flujo que sigue siendo humano.</p></article>
            </div>
            <p className="nc-sub nc-step">Mañana lo construyen ustedes, con las plantillas del evento y el acompañamiento de las mentoras.</p>
          </div>
        </section>

        {/* Cierre */}
        <section {...sceneProps(18)}>
          <div>
            <p className="nc-kicker">Para cerrar</p>
            <p className="nc-sub">Todo workflow empieza con un nodo. Todo proyecto empieza con una persona.</p>
            <p className="nc-thesis nc-step">Ustedes pueden decidir qué problemas vale la pena resolver con tecnología.</p>
            <h2 className="nc-step">
              En su proyecto,
              <br />
              <span className="nc-coral">¿qué decisión debe seguir siendo de una persona?</span>
            </h2>
            <p className="nc-contact nc-step">¿Preguntas? Te leo en los comentarios. Después, búscame en LinkedIn: <b>linkedin.com/in/wendyRB-ai</b> · Mi método: <b>portafolio-wendyrb.vercel.app/metodo-evident</b></p>
          </div>
        </section>
      </main>

      {/* HUD */}
      <div className="nc-hud">
        <div className="nc-track" aria-hidden="true">
          {Array.from({ length: CHAPTERS }, (_, k) => (
            <i key={k} className={k < scene.chapter ? "done" : k === scene.chapter ? "now" : ""} />
          ))}
        </div>
        <span>{index + 1} / {SCENES.length} · {CHAPTER_NAMES[scene.chapter]} · {scene.title}</span>
        <div className="nc-hud-right">
          <button type="button" className="nc-hud-btn" aria-label="Anterior" onClick={() => { navRef.current.prev(); setHintGone(true); }}>←</button>
          <button type="button" className="nc-hud-btn" aria-label="Siguiente" onClick={() => { navRef.current.next(); setHintGone(true); }}>→</button>
        </div>
      </div>
      <p className="nc-sr" aria-live="polite">{scene.title}</p>

      <p className={`nc-hint${hintGone ? " is-gone" : ""}`} aria-hidden="true">
        Flechas para avanzar · N notas · F pantalla completa · T temporizador
      </p>

      {notesOpen ? (
        <aside className="nc-notes" aria-label="Notas de la ponente">
          <p className="nc-notes-title">{scene.title}</p>
          <p>{scene.notes}</p>
          <p className="keys">← → avanzar · T temporizador · F pantalla completa · N cerrar</p>
        </aside>
      ) : null}
    </div>
  );
}
