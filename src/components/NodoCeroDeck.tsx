"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Presentación «De la idea al pitch» para Nodo Cero (WTM Santa Cruz).
   Navegación con flechas por escenas y pasos, notas de la ponente (N),
   pantalla completa (F) y temporizador (T), como en las presentaciones de BécALAS. */

type Scene = { title: string; chapter: number; notes: string };

const SCENES: Scene[] = [
  { title: "Portada", chapter: 0, notes: "Saludo y agradecimiento a WTM Santa Cruz y a Geraldine. Presentarte en una frase: neuropsicóloga que estudia cómo las personas adoptan la tecnología." },
  { title: "Lo que aprendí", chapter: 0, notes: "Tu historia en un minuto. Las personas del programa tenían acceso a la IA; lo que faltaba eran bases: pensamiento crítico, alfabetización digital y criterio para decidir cuándo usarla. Remata con la frase: primero el criterio, después la herramienta. Es el hilo de toda la charla." },
  { title: "Primera pregunta", chapter: 1, notes: "Pedir que escriban en los comentarios de la transmisión el problema que resuelve su equipo, en una sola frase. Leer dos o tres en voz alta. Si nadie escribe, usar el caso de Carla." },
  { title: "Empezar por el problema", chapter: 1, notes: "Tres preguntas antes de abrir n8n. Hacer clic en cada tarjeta mientras la explicas. Conecta con tu historia: esto también es criterio." },
  { title: "Sin nombrar la tecnología", chapter: 1, notes: "Reto: explicar el proyecto sin decir n8n, IA, agente ni app. Mostrar el antes y después de Carla. Dar 3 minutos con el temporizador (tecla T) y pedir su frase en los comentarios." },
  { title: "Lo que cabe en un día", chapter: 2, notes: "Clasificar en vivo con ayuda de los comentarios: ¿esto cabe hoy o va para después? Al final, mostrar la sugerencia." },
  { title: "Anatomía de una demo", chapter: 2, notes: "Es un diagrama para pensar; el sábado lo construyen ellas. Cada flecha enciende un nodo. Subrayar el nodo coral: Carla revisa antes de enviar. Ahí vive el criterio humano." },
  { title: "Reglas de la demo", chapter: 2, notes: "Cuatro reglas prácticas para el sábado. Insistir en el plan B: grabar la demo por si falla el internet o la API." },
  { title: "Diseñar para las personas", chapter: 3, notes: "Privacidad, decisión humana y a quién deja fuera. En proyectos para mujeres, cuidar especialmente los datos sensibles." },
  { title: "¿Cómo sabrás que funciona?", chapter: 3, notes: "En un día no hay estudio de impacto, pero sí una métrica, una prueba y una frase. Dar el ejemplo de Carla y pedir que completen: Sabremos que funciona cuando…" },
  { title: "El pitch en 60 segundos", chapter: 4, notes: "Explicar la estructura y correr el reloj de 60 s con el caso de Carla en voz alta: tú lo haces primero." },
  { title: "Errores que restan puntos", chapter: 4, notes: "Leer cada error y su arreglo. Preguntar en los comentarios cuál han visto más." },
  { title: "Un pitch armado", chapter: 4, notes: "Leer el ejemplo completo. Aclarar que Carla y sus números son ficticios. Invitar a que cada equipo lo adapte esta noche." },
  { title: "Para mañana", chapter: 5, notes: "Las tres tareas para el sábado." },
  { title: "Una última pregunta", chapter: 5, notes: "Leer la pregunta despacio y dejar unos segundos de silencio. Abrir preguntas (10 min), dejar LinkedIn y agradecer a WTM Santa Cruz." },
];

const CHAPTERS = 6;

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
  { text: "Un flujo que hace una sola cosa de principio a fin", fit: "today" },
  { text: "Inicio de sesión con roles y permisos", fit: "later" },
  { text: "Datos de prueba realistas", fit: "today" },
  { text: "App móvil nativa", fit: "later" },
  { text: "Un panel con diez gráficas", fit: "later" },
  { text: "La respuesta de la IA revisada por una persona", fit: "today" },
  { text: "Conectar seis servicios distintos", fit: "later" },
  { text: "Un caso real de una usuaria", fit: "today" },
  { text: "Una métrica para mostrar que funciona", fit: "today" },
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
                Cabe hoy
              </button>
            ) : null}
            {key !== "later" ? (
              <button type="button" className="to-later" onClick={() => move(i, "later")}>
                Para después
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
        {column("today", "Cabe hoy")}
        {column("later", "Para después")}
      </div>
      <p className="nc-sub">
        <button type="button" className="nc-hud-btn" style={{ width: "auto", padding: "0 18px", borderRadius: 999 }} onClick={() => setReveal((r) => !r)}>
          {reveal ? "Ocultar sugerencia" : "Ver mi sugerencia"}
        </button>
      </p>
    </>
  );
}

/* ───────── Reloj del pitch ───────── */
const PITCH = [
  { label: "Problema", until: 15, cue: "Cuenta el problema con una persona concreta: quién es y qué le pasa." },
  { label: "Para quién", until: 25, cue: "Di a quién ayuda y cuántas personas viven ese problema." },
  { label: "Qué hace", until: 40, cue: "Explica la solución en una frase, sin nombres de herramientas." },
  { label: "Demo", until: 55, cue: "Muestra el flujo funcionando con un caso real." },
  { label: "Siguiente paso", until: 60, cue: "Cierra con tu evidencia y con lo que necesitan: usuarias, aliados o mentoría." },
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
      const pending = stepsOf(s).find((el) => !el.classList.contains("is-shown"));
      if (pending) pending.classList.add("is-shown");
      else if (indexRef.current < SCENES.length - 1) show(indexRef.current + 1);
    };
    const prev = () => {
      const s = scenesEl()[indexRef.current];
      if (!s) return;
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
        {/* 0 · Portada */}
        <section {...sceneProps(0)}>
          <div>
            <p className="nc-kicker">Nodo Cero · Hackathon n8n · WTM Santa Cruz</p>
            <h1>
              De la idea
              <br />
              <span className="nc-coral">al pitch</span>
            </h1>
            <p className="nc-lede">Cómo enfocar tu proyecto y contarlo en un minuto, antes de la hackathon del sábado.</p>
            <div className="nc-meta">
              <span>Wendy Ramírez Burgos</span>
              <span>Neuropsicóloga · adopción de IA</span>
              <span>Embajadora de Women Techmakers · México</span>
            </div>
          </div>
        </section>

        {/* 1 · Lo que aprendí */}
        <section {...sceneProps(1)}>
          <div>
            <p className="nc-kicker">Lo que aprendí con más de 3,000 personas</p>
            <h2>Tenían acceso a la IA. Les faltaba criterio.</h2>
            <p className="nc-sub">En el programa de adopción de IA con OpenAI en México, la herramienta estaba al alcance de todas las personas. Lo difícil fue saber cuándo y para qué usarla.</p>
            <div className="nc-grid">
              <article className="nc-card">
                <span className="nc-num">01</span>
                <h3>Pensamiento crítico</h3>
                <p>Dudar de una respuesta, contrastarla y decidir si sirve.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">02</span>
                <h3>Alfabetización digital</h3>
                <p>Entender qué hace la herramienta y qué pasa con tus datos.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">03</span>
                <h3>Criterio de uso</h3>
                <p>Elegir cuándo conviene la IA y cuándo basta algo más simple.</p>
              </article>
            </div>
            <p className="nc-sub nc-step">Primero construimos esas bases y la herramienta llegó después. <b>Su proyecto del sábado sigue el mismo orden.</b></p>
          </div>
        </section>

        {/* 2 · Primera pregunta */}
        <section {...sceneProps(2, "nc-two")}>
          <div>
            <p className="nc-kicker">Antes de empezar</p>
            <h2>¿Qué problema resuelve tu equipo?</h2>
            <p className="nc-ask">
              <span>“</span>Escríbelo en los comentarios, en una sola frase.
            </p>
            <p className="nc-sub nc-step">Si te costó escribirlo, esta charla es para tu equipo.</p>
          </div>
          <Timer seconds={60} id="pregunta" />
        </section>

        {/* 3 · Empezar por el problema */}
        <section {...sceneProps(3)}>
          <div>
            <p className="nc-kicker">1 · Empezar por el problema</p>
            <h2>Tres preguntas antes de abrir n8n</h2>
            <div className="nc-grid">
              <article className="nc-card">
                <span className="nc-num">¿Quién?</span>
                <h3>¿A quién le pasa?</h3>
                <p>Piensa en <b>una persona concreta</b>: su edad, dónde está, qué hace en un día normal.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">¿Cuánto?</span>
                <h3>¿Qué tan seguido?</h3>
                <p>Un problema de todos los días pesa más que uno de una vez al año.</p>
              </article>
              <article className="nc-card">
                <span className="nc-num">¿Cómo?</span>
                <h3>¿Cómo lo resuelve hoy?</h3>
                <p>Si ya usa Excel, WhatsApp o una libreta, ahí está tu punto de partida.</p>
              </article>
            </div>
            <p className="nc-sub nc-step">Si no sabes alguna respuesta, <b>pregúntale a dos personas</b> que vivan el problema. Cinco minutos de llamada te ahorran horas de construir.</p>
          </div>
        </section>

        {/* 4 · Sin nombrar la tecnología */}
        <section {...sceneProps(4, "nc-two")}>
          <div>
            <p className="nc-kicker">1 · Reto · 3 minutos</p>
            <h2>Explica tu proyecto sin nombrar la tecnología</h2>
            <div className="nc-formula">
              <span><em>[Persona]</em> necesita</span>
              <span><em>[algo]</em> porque</span>
              <span><em>[razón]</em>, pero hoy</span>
              <span><em>[obstáculo]</em>.</span>
            </div>
            <div className="nc-ba">
              <p className="before nc-step">Un agente de IA con n8n que automatiza las ventas por WhatsApp.</p>
              <p className="after nc-step">Las emprendedoras que venden por WhatsApp necesitan responder cada pedido rápido y sin errores, pero hoy los anotan a mano entre audios y mensajes, y pierden ventas.</p>
            </div>
            <p className="nc-action nc-step">Escribe la frase de tu equipo sin decir n8n, IA, agente ni app.</p>
          </div>
          <Timer seconds={180} id="frase" />
        </section>

        {/* 5 · Lo que cabe en un día */}
        <section {...sceneProps(5)}>
          <div>
            <p className="nc-kicker">2 · Acotar la solución</p>
            <h2>¿Qué cabe en un día?</h2>
            <p className="nc-sub">Ayúdame a clasificar. En una hackathon gana <b>lo pequeño que funciona</b>.</p>
            <Sorter />
          </div>
        </section>

        {/* 6 · Anatomía de una demo */}
        <section {...sceneProps(6)}>
          <div>
            <p className="nc-kicker">2 · Un caso para pensar</p>
            <h2>Anatomía de una demo</h2>
            <p className="nc-sub">Carla vende comida por WhatsApp. Este es el flujo que la ayudaría: cinco nodos, y uno es ella.</p>
            <ol className="nc-flow">
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">1</div>
                <b>Disparador</b>
                <small>Llega un pedido por WhatsApp.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">2</div>
                <b>Datos</b>
                <small>Se extraen producto, cantidad y dirección.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">3</div>
                <b>IA propone</b>
                <small>Revisa el inventario, calcula el total y redacta la respuesta.</small>
              </li>
              <li className="nc-step human">
                <div className="nc-node" aria-hidden="true">4</div>
                <b>Carla decide</b>
                <small>Revisa el total y envía la respuesta.</small>
              </li>
              <li className="nc-step">
                <div className="nc-node" aria-hidden="true">5</div>
                <b>Resultado</b>
                <small>La venta queda registrada en su hoja.</small>
              </li>
            </ol>
          </div>
        </section>

        {/* 7 · Reglas de la demo */}
        <section {...sceneProps(7)}>
          <div>
            <p className="nc-kicker">2 · Para el sábado</p>
            <h2>Cuatro reglas para tu demo</h2>
            <div className="nc-grid" style={{ "--cols": 4 } as React.CSSProperties}>
              <article className="nc-card"><span className="nc-num">1</span><h3>Un solo flujo</h3><p>Que haga una cosa completa, de principio a fin.</p></article>
              <article className="nc-card"><span className="nc-num">2</span><h3>Un caso real</h3><p>Usa el ejemplo de una persona con nombre ficticio y una situación creíble.</p></article>
              <article className="nc-card"><span className="nc-num">3</span><h3>Datos de prueba</h3><p>Prepara datos inventados pero realistas; nunca datos personales reales.</p></article>
              <article className="nc-card"><span className="nc-num">4</span><h3>Plan B</h3><p>Graba un video de la demo por si falla el internet o una API.</p></article>
            </div>
          </div>
        </section>

        {/* 8 · Diseñar para las personas */}
        <section {...sceneProps(8)}>
          <div>
            <p className="nc-kicker">3 · Diseñar para las personas</p>
            <h2>Tres preguntas que dan puntos</h2>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">🔒</span><h3>¿Qué datos usas?</h3><p>Pide solo lo necesario. En proyectos para mujeres, la información puede ser <b>sensible</b>: violencia, salud, dinero.</p></article>
              <article className="nc-card"><span className="nc-num">🧭</span><h3>¿Quién decide?</h3><p>La IA propone y una persona aprueba. Dilo en tu pitch: genera confianza.</p></article>
              <article className="nc-card"><span className="nc-num">🌱</span><h3>¿A quién dejas fuera?</h3><p>Piensa en quien tiene poca señal, usa solo celular o lee con lector de pantalla.</p></article>
            </div>
          </div>
        </section>

        {/* 9 · Evidencia */}
        <section {...sceneProps(9)}>
          <div>
            <p className="nc-kicker">3 · Evidencia en un día</p>
            <h2>¿Cómo sabrás que funciona?</h2>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">📏</span><h3>Una métrica</h3><p>Algo que se pueda contar. Carla tardaba 10 minutos por pedido; con el flujo, uno.</p></article>
              <article className="nc-card"><span className="nc-num">🧪</span><h3>Una prueba</h3><p>Corre el flujo con 20 casos de prueba y cuenta cuántos salieron bien.</p></article>
              <article className="nc-card"><span className="nc-num">🗣️</span><h3>Una voz</h3><p>Muéstraselo a una persona que viva el problema y anota lo que dice.</p></article>
            </div>
            <p className="nc-action nc-step">Completa: «Sabremos que funciona cuando…»</p>
          </div>
        </section>

        {/* 10 · Pitch en 60 s */}
        <section {...sceneProps(10)}>
          <div>
            <p className="nc-kicker">4 · Contarlo</p>
            <h2>Tu pitch en 60 segundos</h2>
            <PitchClock />
          </div>
        </section>

        {/* 11 · Errores */}
        <section {...sceneProps(11)}>
          <div>
            <p className="nc-kicker">4 · Lo que más resta</p>
            <h2>Errores comunes y su arreglo</h2>
            <div className="nc-banned">
              <span className="nc-step">Empezar por la tecnología<i>→ empieza por la persona</i></span>
              <span className="nc-step">«Es para todas las mujeres»<i>→ elige a una</i></span>
              <span className="nc-step">Prometer impacto sin pruebas<i>→ muestra tu métrica</i></span>
              <span className="nc-step">Demo en vivo sin respaldo<i>→ lleva el video</i></span>
              <span className="nc-step">Terminar sin pedir nada<i>→ di qué necesitan</i></span>
            </div>
          </div>
        </section>

        {/* 12 · Pitch armado */}
        <section {...sceneProps(12)}>
          <div>
            <p className="nc-kicker">4 · Ejemplo completo · caso ficticio</p>
            <h2>Así suena un pitch armado</h2>
            <div className="nc-template">
              <p className="nc-step"><em>Problema</em>Carla vende comida por WhatsApp. Cada noche le llegan 30 pedidos entre audios y mensajes, y la semana pasada perdió cuatro por responder tarde.</p>
              <p className="nc-step"><em>Para quién</em>Para emprendedoras que venden por WhatsApp y llevan sus cuentas a mano.</p>
              <p className="nc-step"><em>Qué hace</em>Ordena cada pedido, calcula el total y le propone una respuesta lista para enviar.</p>
              <p className="nc-step"><em>Demo</em>Aquí entra un pedido… Carla revisa el total y lo envía con un toque. Ella decide.</p>
              <p className="nc-step"><em>Siguiente paso</em>Con 20 pedidos de prueba acertó en 18. Queremos probarlo con cinco emprendedoras reales. ¿Nos ayudas a encontrarlas?</p>
            </div>
          </div>
        </section>

        {/* 13 · Para mañana */}
        <section {...sceneProps(13)}>
          <div>
            <p className="nc-kicker">Para mañana</p>
            <h2>Llega al sábado con tres cosas</h2>
            <div className="nc-close">
              <article className="nc-card"><span className="nc-num">1</span><h3>Tu frase</h3><p>El problema de tu equipo en una sola oración, sin nombrar la tecnología.</p></article>
              <article className="nc-card"><span className="nc-num">2</span><h3>Tu demo pequeña</h3><p>Un flujo completo, su video de respaldo y una métrica.</p></article>
              <article className="nc-card"><span className="nc-num">3</span><h3>Tu minuto</h3><p>El pitch ensayado en voz alta, con reloj.</p></article>
            </div>
          </div>
        </section>

        {/* 14 · Una última pregunta */}
        <section {...sceneProps(14)}>
          <div>
            <p className="nc-kicker">Una última pregunta</p>
            <h2>
              Si mañana desapareciera la tecnología que usaste,
              <br />
              <span className="nc-coral">¿seguiría existiendo la necesidad?</span>
            </h2>
            <p className="nc-sub nc-step">Si la respuesta es sí, tienen un proyecto.</p>
            <p className="nc-contact nc-step">¿Preguntas? Te leo en los comentarios. Después, búscame en LinkedIn: <b>linkedin.com/in/wendyRB-ai</b></p>
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
        <span>{index + 1} / {SCENES.length} · {scene.title}</span>
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
