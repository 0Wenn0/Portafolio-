"use client";

import { Fragment, useState, type ReactNode } from "react";

/* Simulación didáctica del flujo de Valeria. No reproduce la interfaz de n8n:
   muestra, nodo por nodo, qué hace cada paso y qué datos salen de él. */

type Decision = "aplica" | "descarta";

type SimStep = {
  short: string;
  title: string;
  n8n: string;
  explain: string;
  lesson: string;
  human?: boolean;
  label: string;
  json: (d: Decision) => string;
};

const CONVOCATORIA =
  "Programa Horizonte 2027 (ficticio). Becas para estudiantes de carreras STEM desde 3.er semestre. Cubre colegiatura y una laptop. Fecha límite: 12 de diciembre de 2026. Documentos: constancia de estudios, carta de motivos e identificación.";

const pretty = (v: unknown) => JSON.stringify(v, null, 2);

const STEPS: SimStep[] = [
  {
    short: "Disparador",
    title: "Valeria pega una convocatoria",
    n8n: "n8n Form Trigger",
    explain: "Valeria ya inició sesión con Clerk. Copia el texto que le llegó por un grupo y lo pega en un formulario. Ese hecho inicia el flujo.",
    lesson: "Todo flujo empieza con algo que la persona ya hace.",
    label: "Sale de este nodo",
    json: () => pretty({ usuaria_id: "user_valeria", convocatoria: CONVOCATORIA }),
  },
  {
    short: "IA interpreta",
    title: "La IA convierte texto en campos",
    n8n: "Information Extractor + modelo de chat",
    explain: "El modelo lee el texto desordenado y devuelve siempre los mismos campos. Le damos un esquema: qué datos queremos y de qué tipo.",
    lesson: "La IA es buena interpretando lenguaje. Le pedimos campos fijos para que el resto del flujo pueda leerlos.",
    label: "Sale de este nodo",
    json: () =>
      pretty({
        programa: "Programa Horizonte 2027",
        area: "STEM",
        semestre_minimo: 3,
        fecha_limite: "2026-12-12",
        documentos: ["constancia de estudios", "carta de motivos", "identificación"],
      }),
  },
  {
    short: "Código calcula",
    title: "El código hace las cuentas",
    n8n: "Code (JavaScript)",
    explain: "Con los campos limpios, unas líneas de código calculan cuántos días faltan y comparan los requisitos con el perfil de Valeria, que se guardó en Supabase cuando se registró con Clerk.",
    lesson: "Las cuentas se las dejamos al código: un modelo puede equivocarse con una fecha; una resta, no.",
    label: "Código y resultado",
    json: () =>
      `const hoy = new Date("2026-11-20");\nconst cierre = new Date($json.fecha_limite);\nconst dias = Math.round((cierre - hoy) / 86400000);\nconst califica = perfil.area === $json.area\n  && perfil.semestre >= $json.semestre_minimo;\n\n` +
      pretty({ dias_restantes: 22, califica: true }),
  },
  {
    short: "Validación",
    title: "¿Falta algún dato?",
    n8n: "If",
    explain: "Si la convocatoria no trae fecha límite, el flujo toma otro camino y le avisa a Valeria que revise la fuente original.",
    lesson: "Diseñar el camino del error también es diseñar.",
    label: "Sale de este nodo",
    json: () => pretty({ condicion: "fecha_limite existe", resultado: true, rama: "continuar" }),
  },
  {
    short: "Valeria decide",
    title: "El flujo se pausa y espera",
    n8n: "Gmail · Send message and wait for response",
    explain: "Le llega un correo con el resumen y dos botones. Nada avanza hasta que ella responde.",
    lesson: "Aquí vive el criterio: la IA organiza la información y Valeria decide.",
    human: true,
    label: "Sale de este nodo",
    json: (d) => pretty({ decision: d, respondido_por: "Valeria" }),
  },
  {
    short: "Registro",
    title: "Queda una fila en la base de datos",
    n8n: "Supabase · Create a new row",
    explain: "Se guarda la convocatoria, la fecha, los documentos y la decisión de Valeria en una tabla de Supabase, ligada a su usuaria.",
    lesson: "Esa tabla es tu evidencia: cuántas convocatorias revisó y a cuántas aplicó.",
    label: "Fila nueva",
    json: (d) =>
      pretty({
        tabla: "postulaciones",
        usuaria_id: "user_valeria",
        programa: "Programa Horizonte 2027",
        cierre: "2026-12-12",
        documentos_pendientes: 3,
        estado: d === "aplica" ? "en preparación" : "descartada",
      }),
  },
  {
    short: "Recordatorio",
    title: "Siete días antes, un aviso",
    n8n: "Schedule Trigger + Supabase · Get many rows + Gmail",
    explain: "Cada mañana otro flujo consulta la tabla. Si una convocatoria cierra en siete días, le escribe qué documentos le faltan.",
    lesson: "Lo que antes dependía de su memoria ahora lo sostiene el sistema.",
    label: "Correo programado",
    json: (d) =>
      d === "aplica"
        ? pretty({
            para: "valeria@ejemplo.com",
            asunto: "Faltan 7 días para Programa Horizonte",
            cuerpo: "Te falta la carta de motivos.",
          })
        : pretty({ recordatorio: null, motivo: "Valeria decidió no aplicar" }),
  },
];

const TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\b\d+(?:\.\d+)?\b)|\b(true|false|null)\b/g;

function Highlighted({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] && m[2]) out.push(<span key={at} className="k">{m[1]}</span>, m[2]);
    else if (m[1]) out.push(<span key={at} className="s">{m[1]}</span>);
    else out.push(<span key={at} className="n">{m[0]}</span>);
    last = at + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

export function NodoCeroFlowSim() {
  const [step, setStep] = useState(0);
  const [decision, setDecision] = useState<Decision>("aplica");
  const current = STEPS[step] ?? STEPS[0]!;
  const last = STEPS.length - 1;

  return (
    <div className="nc-sim">
      <ol className="nc-sim-track" aria-label="Nodos del flujo">
        {STEPS.map((s, i) => (
          <li key={s.short} className={`nc-sim-node${s.human ? " human" : ""}${i < step ? " done" : i === step ? " now" : ""}`} aria-current={i === step ? "step" : undefined}>
            <b>{i + 1}</b>
            {s.short}
          </li>
        ))}
      </ol>

      <div className="nc-sim-body">
        <div className="nc-sim-explain" aria-live="polite">
          <span className={`nc-tag${current.human ? " coral" : ""}`}>En n8n: {current.n8n}</span>
          <h3>{current.title}</h3>
          <p>{current.explain}</p>
          <p className="lesson">{current.lesson}</p>
          {current.human ? (
            <div className="nc-approve">
              <p>Calificas para Programa Horizonte. Cierra en 22 días y necesitas 3 documentos. ¿Aplicas?</p>
              <button type="button" className="yes" aria-pressed={decision === "aplica"} onClick={() => setDecision("aplica")}>Sí, aplico</button>
              <button type="button" aria-pressed={decision === "descarta"} onClick={() => setDecision("descarta")}>Ahora no</button>
            </div>
          ) : null}
        </div>
        <div>
          <p className="nc-json-label">{current.label}</p>
          <pre className="nc-json"><code><Highlighted text={current.json(decision)} /></code></pre>
        </div>
      </div>

      <div className="nc-sim-controls">
        <button type="button" data-sim-prev disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
          ← Nodo anterior
        </button>
        <button type="button" className="primary" data-sim-next disabled={step === last} onClick={() => setStep((s) => Math.min(last, s + 1))}>
          Ejecutar siguiente nodo →
        </button>
      </div>
    </div>
  );
}
