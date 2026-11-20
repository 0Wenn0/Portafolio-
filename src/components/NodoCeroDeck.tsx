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
  { title: "Lo que aprendí", chapter: 0, notes: "Tu historia en un minuto, desde la gestión del cambio. En el programa de adopción de IA con OpenAI en México (más de 3,000 asistentes), la herramienta ya estaba disponible. Entre tenerla y usarla hubo un camino: entender, confiar, practicar y sostener. Tu forma de trabajarlo: análisis, estrategia y comunidad. Mencionar EVIDENT en una línea, sin explicarlo: está en tu portafolio. Puente con el anuncio (20 s): «Les prometieron un agente que evalúa con reglas y conserva la decisión humana. Armé ese patrón en n8n con el caso de Valeria: un formulario recibe la convocatoria, la IA saca sus datos en campos fijos y todo queda en Supabase, el mismo stack que usarán mañana. Mi primer prompt dio respuestas vagas; lo hice más preciso y mejoró. La decisión sigue siendo de ella.» Remate: mañana construyen la herramienta; piensen también en el camino." },
  { title: "Mini journey map", chapter: 1, notes: "Empatizar. Cinco pasos de Valeria. El paso coral es donde más duele: ahí va el flujo. Neuropsicología: cuando decidir cuesta, posponemos; ahí pierde Valeria la beca. Aquí entran los valores desde el inicio: qué valora Valeria. Cerrar con: primero la persona, después el flujo." },
  { title: "¿Cabe mañana?", chapter: 2, notes: "Definir, como repaso: las preguntas de las sesiones anteriores sirven para entender el problema; estos seis criterios deciden si cabe mañana. Marcar los criterios con Valeria (cumple los seis) y pedir que cada equipo escriba su puntaje en los comentarios. Si sacan 3 o 4, acotar; si sacan menos, volver a observar. Equipos sin idea: el Explorador de Nodo Cero (tu herramienta) los guía en cinco pasos; compartir el enlace en los comentarios." },
  { title: "Job story", chapter: 2, notes: "Job story: cuando, quiero, para. Su «cuando» será el disparador del flujo. 90 segundos con el temporizador (tecla T) y pedirla en los comentarios." },
  { title: "De la frase al workflow", chapter: 3, notes: "Idear. Diseñar el proceso antes de automatizar: cada parte de la job story responde una decisión del flujo, y cada decisión tiene una pieza en n8n. Esta es la traducción de lo práctico a lo técnico. Nombrar la pieza sin configurarla: el cómo lo verán mañana con Nicolás y en los talleres. La pausa es la operación «Send and Wait for Response» (correo, chat). La pregunta clave: ¿dónde decide la persona?" },
  { title: "MoSCoW", chapter: 3, notes: "SI VAS TARDE: clasifica solo tres ideas y muestra la sugerencia. MoSCoW versión hackathon: lo que debe estar el sábado y lo que puede esperar. Clasificar con los comentarios y mostrar la sugerencia. Avalanche y Clerk tienen mención especial: úsenlos cuando resuelvan algo de su usuaria; el taller de mañana les ayuda a decidirlo. Cerrar: empieza con lo que tienes." },
  { title: "El mapa de su stack", chapter: 4, notes: "Automatizar con criterio (el título de la charla). Organizador previo: un mapa antes de los talleres para que mañana aprendan más rápido. Cada herramienta responde una pregunta: Clerk, quién es (sus webhooks avisan a n8n); n8n, qué pasa y en qué orden (entre nodos viaja un JSON, la ficha de datos); el modelo de IA, qué significa (pídanle campos fijos, no texto libre); Supabase, qué se guarda (Postgres, Storage, pgvector); HTTP Request, con quién más habla (cualquier API, Avalanche Fuji). Flujo o agente: en un flujo los pasos son fijos; en un agente (nodo AI Agent) el modelo elige herramientas. n8n permite pedir aprobación humana antes de que un agente use una herramienta. Cinco preguntas antes de construir: ¿qué lo dispara?, ¿qué datos entran y en qué forma?, ¿dónde interpreta la IA y con qué campos responde?, ¿dónde decide una persona?, ¿qué pasa si algo falla? Mañana aprenden a configurarlas; hoy, para qué sirve cada una." },
  { title: "Cómo funciona un agente", chapter: 4, notes: "La parte de IA que nadie más cubre. Anatomía del nodo AI Agent de n8n: instrucciones (mensaje del sistema: qué hace y qué no), modelo (el que interpreta), memoria (lo que recuerda de la conversación), herramientas (lo que puede hacer: buscar en Supabase, llamar una API, mandar un correo) y una persona que aprueba antes de acciones importantes (n8n permite pedir aprobación por herramienta). IA con criterio: 1) contrato de salida: campos fijos en JSON, para que el siguiente nodo pueda usar lo que devuelve; 2) validar antes de actuar: la IA puede inventar, así que un nodo revisa que no falte nada; 3) evaluarla con casos de respuesta conocida y contar aciertos. Tu agente de vacantes lo armaste así." },
  { title: "Simulación del flujo", chapter: 4, notes: "Prototipar. Es una simulación didáctica para ver la lógica; mañana Nicolás y los talleres les muestran cómo se construye con las plantillas del evento. Avanzar nodo por nodo. Momento clave: la IA interpreta, el código calcula y Valeria decide. En el nodo 5, preguntar qué respondería ella. Al terminar: es el mismo patrón del agente del anuncio." },
  { title: "Lo que la persona valora", chapter: 4, notes: "Heller (Values as Strategy): los valores entran al principio de la estrategia. Son los de las usuarias y los de la organización a la que propones la solución: escuchar sus preocupaciones, miedos y problemas, y responder desde lo que tú aportas como persona, con tu experiencia. Leer la tabla: cada decisión del flujo sale de algo que Valeria valora; cada momento de la interfaz protege uno. Datos: en proyectos para mujeres pueden ser muy sensibles (salud, violencia, ubicación); pidan lo mínimo y nunca usen datos reales en la demo. Gestión del cambio: la gente adopta lo que respeta lo que valora. Si proponen su solución a una organización (una universidad, una colectiva), pregúntense qué le preocupa: eso también alimenta su llamado a la acción." },
  { title: "¿Cómo sabrás que funciona?", chapter: 5, notes: "Probar. Su flujo ya guarda la evidencia: cada fila en Supabase es un caso medido. Lente de gestión del cambio: la señal de adopción es el segundo uso; el primero puede ser curiosidad. Si pueden, muéstrenselo a una estudiante real y anoten lo que dice. Cerrar: ¿qué podrá hacer mañana Valeria que hoy no puede?" },
  { title: "Estructura del pitch", chapter: 6, notes: "La última parte es un llamado a la acción: en la sala hay usuarias como Valeria, así que la invitación va para ellas (pruébalo, compártelo). Si un equipo necesita algo concreto del jurado o de aliados, como un piloto con una universidad, también cabe ahí. Una sola estructura: la misma de las sesiones anteriores, en seis partes. Cada parte sale de algo que hicieron hoy. Jerga: palabras simples, porque la jerga cierra tantas puertas como abre (Heller). Empiecen por la persona." },
  { title: "Hagan que importe", chapter: 6, notes: "Tu diferenciador. Lo que aprendiste como representante de políticas públicas y programas educativos para OpenAI en México, en interlocuciones de alto nivel con gobierno (por ejemplo, con el senador Rolando Zapata), universidades, startups y empresas de innovación, y viendo keynotes de OpenAI, NVIDIA, Google, IBM y Oracle en eventos como Talent Land: los pitches que se recuerdan cuentan la historia de una persona. Las seis partes sostienen; la historia conmueve. Neuropsicología: recordamos mejor a una persona concreta que una estadística (efecto de la víctima identificable, Small, Loewenstein y Slovic, 2007) y lo que nos emociona se graba mejor en la memoria (McGaugh). Cuidado: conmover con respeto; la protagonista actúa, no se inventa dolor, y los temas sensibles se cuentan con dignidad." },
  { title: "Un pitch armado", chapter: 6, notes: "Leerlo completo, despacio, como se diría el sábado: pausa después de «Cerró hace dos días» y en la frase final. Señalar las cuatro claves: el momento (las once de la noche), lo que estaba en juego (no dejar la ingeniería), el giro (la demo) y la frase más grande que el producto. Aclarar que Valeria y sus números son ficticios, y que «a una de nosotras le pasó» solo se dice si es verdad. Copien la estructura; la idea es de ustedes." },
  { title: "Práctica del pitch", chapter: 6, notes: "SI VAS TARDE: salta esta escena y diles que la usen esta noche (la página queda abierta). Si hay tiempo: correr el reloj de 60 s y pedir a un equipo que lo intente en voz alta." },
  { title: "El sábado en cinco bloques", chapter: 7, notes: "A las 9:00, la práctica de Nicolás con la plantilla. Construyen de 9:45 a 14:30, con talleres a las 10:00 y 10:45: dividir al equipo según lo que necesiten. Llevar su job story y su MoSCoW a las mentoras. Congelar a las 14:00. Presentación de un minuto a las 15:00." },
  { title: "Lo que veo cuando ustedes crean", chapter: 7, notes: "Tu perspectiva, despacio. Patrones Hermosos: la comunidad que te dio espacio para equivocarte; del pánico a hablar en público a hablar frente a diputados y senadores. Primera de tu familia en la universidad. En el caso de Valeria, sus amigas que se pasan convocatorias son quienes harían que el flujo se use: la comunidad sostiene el cambio. Remate: la joven innovadora de esta historia son ustedes." },
  { title: "Cierre", chapter: 7, notes: "Recoger las cuatro decisiones de esta noche y recordar el Explorador para quien siga sin idea. Eco del lema del evento. Mensaje central despacio, la pregunta y unos segundos de silencio. Preguntas (10 min), LinkedIn y agradecer a WTM Santa Cruz y n8n Bolivia." },
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
  { label: "Problema", until: 12, cue: "Empieza en un momento: una persona, una hora, un lugar, y qué estaba en juego." },
  { label: "Solución", until: 27, cue: "Muestra el giro: el instante en que cambia su experiencia, con tu flujo funcionando." },
  { label: "Diferencia", until: 35, cue: "Di qué la hace distinta: lo que valoran tu usuaria y tu equipo." },
  { label: "Evidencia", until: 45, cue: "Da tu prueba: cuántos casos corriste y en cuántos acertó." },
  { label: "Impacto", until: 53, cue: "Muestra el después en la persona y cómo llegará a otras." },
  { label: "Acción", until: 60, cue: "Llamado a la acción: invita a las usuarias de la sala a actuar hoy y cierra con una frase más grande que tu producto." },
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
              Automatizar
              <br />
              <span className="nc-coral">con criterio</span>
            </h1>
            <p className="nc-lede">Agentes de IA en n8n. De la idea al workflow.</p>
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
            <p className="nc-sub">En el programa de adopción de IA con OpenAI en México, la herramienta ya estaba disponible. El trabajo fue que las personas la entendieran, confiaran en ella, la practicaran y la sostuvieran. Lo ordené en un método propio, <b>EVIDENT</b>, y empieza así:</p>
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
            <p className="nc-sub nc-step">Armé en n8n el flujo de Valeria: lee la convocatoria, saca sus datos con IA y los guarda en Supabase. <b>La decisión es de ella.</b></p>
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
            <p className="nc-sub nc-step">Antes de diseñar, pregúntense qué valora. Valeria valora su tiempo, decidir ella misma y que nadie más vea sus datos.</p>
            <p className="nc-takeaway nc-step">Primero la persona, después el flujo.</p>
          </div>
        </section>

        {/* ¿Vale la pena? */}
        <section {...sceneProps(5)}>
          <div>
            <DtStrip active={1} />
            <p className="nc-kicker">Definir · Repaso: ¿cabe mañana?</p>
            <h2>¿Su problema cabe en la hackathon de mañana?</h2>
            <p className="nc-sub">Estos seis criterios deciden si su problema cabe mañana. Primero con el de Valeria; después, con el suyo.</p>
            <ProblemCheck />
            <p className="nc-sub nc-step">¿Su equipo aún no tiene idea? Usen el <a href="https://sites.google.com/view/nodo-cero-explorador-wenn-ai/full-page-embed" target="_blank" rel="noopener noreferrer"><b>Explorador de Nodo Cero</b></a>: observar, identificar, conectar, imaginar y proyectar.</p>
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
            <div className="nc-anatomy nc-anatomy-tight nc-anatomy-4" role="table" aria-label="De la job story al workflow">
              <div role="row" className="head"><span role="columnheader">Su frase</span><span role="columnheader">La decisión</span><span role="columnheader">Con Valeria</span><span role="columnheader">En n8n</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Cuando…</b></span><span role="cell">¿Qué lo pone en marcha?</span><span role="cell">Pega una convocatoria</span><span role="cell">Disparador: formulario, webhook de Clerk u horario</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Quiero…</b></span><span role="cell">¿Qué hace el flujo por ella?</span><span role="cell">Lee requisitos y cuenta los días</span><span role="cell">Nodo de IA que extrae + nodo Code que calcula</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Para…</b></span><span role="cell">¿Qué recibe o qué se guarda?</span><span role="cell">Un aviso y su registro</span><span role="cell">Fila en Supabase + correo</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>La persona</b></span><span role="cell">¿Dónde decide ella?</span><span role="cell">Elige si aplica</span><span role="cell">Nodo que pausa y espera su respuesta</span></div>
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

        {/* Mapa del stack */}
        <section {...sceneProps(9)}>
          <div>
            <DtStrip active={3} />
            <p className="nc-kicker">Prototipar · Automatizar con criterio</p>
            <h2 className="nc-compact">Cada herramienta responde una pregunta</h2>
            <div className="nc-anatomy nc-anatomy-2 nc-anatomy-tight" role="table" aria-label="El mapa de su stack">
              <div role="row" className="nc-step"><span role="cell"><b>Clerk</b> · ¿Quién es?</span><span role="cell">Identidad. Avisa a n8n cuando alguien entra o se registra.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>n8n</b> · ¿Qué pasa y en qué orden?</span><span role="cell">Orquesta el proceso. Entre nodos viaja una ficha de datos (JSON).</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Modelo de IA</b> · ¿Qué significa?</span><span role="cell">Interpreta texto y responde con campos fijos.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Supabase</b> · ¿Qué se guarda?</span><span role="cell">Base de datos, archivos y búsqueda por significado (pgvector).</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>HTTP Request</b> · ¿Con quién más habla?</span><span role="cell">Cualquier API, también Avalanche Fuji.</span></div>
            </div>
            <div className="nc-grid nc-values nc-step" style={{ ["--cols" as string]: 2 }}>
              <article className="nc-card"><h3>Flujo</h3><p className="nc-lens">Los mismos pasos, siempre en el mismo orden: predecible y fácil de probar.</p></article>
              <article className="nc-card"><h3>Agente de IA</h3><p className="nc-lens">El modelo decide qué herramienta usar y cuándo: flexible, más difícil de controlar.</p></article>
            </div>
            <p className="nc-takeaway nc-step">Empiecen con un flujo. IA donde haya que interpretar; un agente solo si de verdad debe decidir.</p>
          </div>
        </section>

        {/* Anatomía del agente */}
        <section {...sceneProps(10)}>
          <div>
            <p className="nc-kicker">Prototipar · Agentes de IA con criterio</p>
            <h2 className="nc-compact">Cómo funciona un agente de IA en n8n</h2>
            <div className="nc-anatomy nc-anatomy-2 nc-anatomy-tight" role="table" aria-label="Partes de un agente de IA">
              <div role="row" className="nc-step"><span role="cell"><b>Instrucciones</b></span><span role="cell">Qué hace y qué no. Su rol, en palabras claras.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Modelo</b></span><span role="cell">El que interpreta el texto.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Memoria</b></span><span role="cell">Lo que recuerda de la conversación.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Herramientas</b></span><span role="cell">Lo que puede hacer: buscar en Supabase, llamar una API, enviar un correo.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Una persona</b></span><span role="cell">Aprueba antes de las acciones importantes.</span></div>
            </div>
            <div className="nc-grid nc-values nc-step">
              <article className="nc-card"><h3>1 · Contrato de salida</h3><p className="nc-lens">Que responda con campos fijos (JSON), no con texto libre.</p></article>
              <article className="nc-card"><h3>2 · Validar antes de actuar</h3><p className="nc-lens">La IA puede inventar: un nodo revisa que no falte nada.</p></article>
              <article className="nc-card"><h3>3 · Evaluarla</h3><p className="nc-lens">Casos con respuesta conocida: cuenten aciertos.</p></article>
            </div>
          </div>
        </section>

        {/* Simulación */}
        <section {...sceneProps(11)}>
          <div>
            <p className="nc-kicker">Prototipar · Simulación didáctica del flujo</p>
            <h2 className="nc-compact">La IA interpreta, el código calcula y Valeria decide</h2>
            <NodoCeroFlowSim />
            <p className="nc-sub nc-step">Antes de automatizar, hay que diseñar el proceso. Este flujo sirve igual para <b>vacantes, becas o convocatorias</b>; el registro puede ser Google Sheets o Supabase.</p>
          </div>
        </section>

        {/* Valores */}
        <section {...sceneProps(12)}>
          <div>
            <p className="nc-kicker">Prototipar · Valores (Values as Strategy)</p>
            <h2>Diseñen para lo que la persona valora</h2>
            <p className="nc-sub">Primero escuchamos qué le importa a Valeria. Cada decisión del flujo responde a eso.</p>
            <div className="nc-anatomy nc-anatomy-2" role="table" aria-label="De los valores al diseño">
              <div role="row" className="head"><span role="columnheader">Lo que valora Valeria</span><span role="columnheader">Cómo se diseña</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Su tiempo</b></span><span role="cell">Un solo campo; respuesta en un minuto</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Decidir ella</b></span><span role="cell">La IA organiza, ella aprueba</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Su privacidad</b></span><span role="cell">Pedir lo mínimo; solo ella ve sus filas (RLS)</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Que funcione donde está</b></span><span role="cell">Celular, poca señal, lector de pantalla</span></div>
            </div>
            <div className="nc-grid nc-values">
              <article className="nc-card"><h3>El formulario</h3><p className="nc-lens">Protege su tiempo</p></article>
              <article className="nc-card"><h3>El correo de aprobación</h3><p className="nc-lens">Protege su decisión</p></article>
              <article className="nc-card"><h3>El recordatorio</h3><p className="nc-lens">Protege su tranquilidad</p></article>
            </div>
            <p className="nc-action nc-step">En los comentarios: ¿qué valora su usuaria y qué le preocupa a quien lo adoptaría?</p>
            <p className="nc-takeaway nc-step">Cuando una herramienta respeta lo que la persona valora, es más fácil que la adopte.</p>
          </div>
        </section>

        {/* Evidencia */}
        <section {...sceneProps(13)}>
          <div>
            <DtStrip active={4} />
            <p className="nc-kicker">Probar · Evidencia y adopción</p>
            <h2>¿Cómo sabrás que funciona?</h2>
            <p className="nc-story">Su flujo ya guarda la evidencia: <em>cada fila en Supabase es un caso medido</em>.</p>
            <div className="nc-grid">
              <article className="nc-card"><span className="nc-num">📏</span><h3>Una métrica</h3><p>Antes tardaba 40 minutos en entender una convocatoria; con el flujo, dos.</p></article>
              <article className="nc-card"><span className="nc-num">🧪</span><h3>Evalúen a la IA</h3><p>Diez convocatorias con la respuesta correcta conocida: cuenten en cuántas acierta.</p></article>
              <article className="nc-card"><span className="nc-num">🔁</span><h3>Una señal de adopción</h3><p>¿Valeria lo usa una segunda vez? El primer uso puede ser curiosidad; el segundo es adopción.</p></article>
            </div>
            <p className="nc-action nc-step">Demuestra el valor: ¿qué podrá hacer mañana Valeria que hoy no puede?</p>
            <p className="nc-takeaway nc-step">Sin métrica, es una promesa.</p>
          </div>
        </section>

        {/* Anatomía del pitch */}
        <section {...sceneProps(14)}>
          <div>
            <p className="nc-kicker">Contarlo · Una sola estructura</p>
            <h2>Ya tienen casi todo su pitch</h2>
            <p className="nc-sub">Un minuto, seis partes: la misma estructura de las sesiones anteriores. Cada parte sale de algo que hicieron hoy.</p>
            <div className="nc-anatomy" role="table" aria-label="Partes del pitch">
              <div role="row" className="head"><span role="columnheader">Parte</span><span role="columnheader">Pregunta del jurado</span><span role="columnheader">Sale de</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Problema</b> · 12 s</span><span role="cell">¿Esto importa?</span><span role="cell">Su job story</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Solución</b> · 15 s</span><span role="cell">¿Funciona?</span><span role="cell">Su flujo, en vivo</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Diferencia</b> · 8 s</span><span role="cell">¿Por qué esta?</span><span role="cell">Lo que valoran su usuaria y su equipo</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Evidencia</b> · 10 s</span><span role="cell">¿Cómo lo saben?</span><span role="cell">Su prueba</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Impacto</b> · 8 s</span><span role="cell">¿Lo van a usar?</span><span role="cell">Su señal de adopción</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Llamado a la acción</b> · 7 s</span><span role="cell">¿Qué hago yo hoy?</span><span role="cell">Quién puede actuar hoy</span></div>
            </div>
            <p className="nc-sub nc-step">Empiecen por la persona y usen palabras simples: el jurado recuerda historias antes que funciones.</p>
          </div>
        </section>

        {/* Hagan que importe */}
        <section {...sceneProps(15)}>
          <div>
            <p className="nc-kicker">Contarlo · Lo que aprendí en pitches y keynotes</p>
            <h2>Al final, la tecnología habla más de las personas que del código</h2>
            <p className="nc-sub">Las seis partes sostienen el pitch. La historia hace que importe.</p>
            <div className="nc-anatomy nc-anatomy-2 nc-anatomy-tight" role="table" aria-label="Cuatro claves para contar una historia">
              <div role="row" className="nc-step"><span role="cell"><b>Empiecen en un momento</b></span><span role="cell">Una persona, una hora, un lugar.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Digan qué estaba en juego</b></span><span role="cell">Lo que esa persona pierde, más allá de la molestia.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>La demo es el giro</b></span><span role="cell">El instante en que cambia su experiencia.</span></div>
              <div role="row" className="nc-step"><span role="cell"><b>Cierren con una frase más grande</b></span><span role="cell">El mundo que quieren, más allá de su producto.</span></div>
            </div>
            <p className="nc-sub nc-step">Lo aprendí presentando propuestas de IA ante gobierno, universidades y empresas como representante de políticas públicas y programas educativos para OpenAI en México, y viendo keynotes de OpenAI, NVIDIA, Google, IBM y Oracle.</p>
            <p className="nc-takeaway nc-step">Conmuevan con respeto: la protagonista actúa y nadie inventa dolor.</p>
          </div>
        </section>

        {/* Pitch armado */}
        <section {...sceneProps(16)}>
          <div>
            <p className="nc-kicker">Contarlo · Ejemplo completo · caso ficticio</p>
            <h2>Así suena un pitch armado</h2>
            <div className="nc-template">
              <p className="nc-step"><em>Problema</em>Son las once de la noche. Valeria sale del trabajo, abre WhatsApp y, entre cincuenta mensajes, encuentra la beca que estaba esperando. Cerró hace dos días. Esa beca era su forma de no dejar la ingeniería.</p>
              <p className="nc-step"><em>Solución</em>Hoy Valeria pega la convocatoria aquí… y en un minuto sabe si califica, qué le falta y cuántos días tiene.</p>
              <p className="nc-step"><em>Diferencia</em>La IA lee y calcula; la decisión es de ella. Lo construimos así porque a una de nosotras le pasó.</p>
              <p className="nc-step"><em>Evidencia</em>Con diez convocatorias de prueba, acertó la fecha en nueve.</p>
              <p className="nc-step"><em>Impacto</em>La próxima vez, Valeria llega a tiempo. Y cuando lo logre, se lo pasará a sus amigas.</p>
              <p className="nc-step"><em>Llamado a la acción</em>Si estudias y trabajas, pruébalo hoy. Y si conoces a una Valeria, compártele este enlace. Porque ninguna chica debería perder su oportunidad por un mensaje enterrado en un chat.</p>
            </div>
            <p className="nc-takeaway nc-step">Copien la estructura. La idea es de ustedes.</p>
          </div>
        </section>

        {/* Pitch en 60 s */}
        <section {...sceneProps(17)}>
          <div>
            <p className="nc-kicker">Contarlo · Práctica</p>
            <h2>Ahora ustedes: un minuto con reloj</h2>
            <PitchClock />
            <p className="nc-takeaway nc-step">Ensayen en voz alta, con reloj, al menos tres veces.</p>
          </div>
        </section>

        {/* El sábado */}
        <section {...sceneProps(18)}>
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
        <section {...sceneProps(19)}>
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

        {/* Cierre */}
        <section {...sceneProps(20)}>
          <div>
            <p className="nc-kicker">Para cerrar</p>
            <p className="nc-sub">Todo workflow empieza con un nodo. Todo proyecto empieza con una persona.</p>
            <p className="nc-sub nc-step">Esta noche, cuatro decisiones: <b>su problema, su job story, su MoSCoW y dónde decide la persona</b>. Mañana, las plantillas del evento y las mentoras.</p>
            <p className="nc-thesis nc-step">Ustedes pueden decidir qué problemas vale la pena resolver con tecnología.</p>
            <h2 className="nc-step">
              En su proyecto,
              <br />
              <span className="nc-coral">¿qué decisión debe seguir siendo de una persona?</span>
            </h2>
            <p className="nc-contact nc-step">¿Preguntas? Te leo en los comentarios. Después, búscame en LinkedIn: <b>linkedin.com/in/wendyRB-ai</b> · Mi método: <b>portafolio-wendyrb.vercel.app/metodo-evident</b> · ¿Sin idea todavía? <a href="https://sites.google.com/view/nodo-cero-explorador-wenn-ai/full-page-embed" target="_blank" rel="noopener noreferrer"><b>Explorador de Nodo Cero</b></a></p>
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
