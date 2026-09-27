import type { Locale, MethodStep } from "./types";

const methodFundamentalsEs = [
  {
    name: "Cognición",
    desc: "Cómo aprenden, deciden y cambian las personas.",
  },
  {
    name: "Sistemas",
    desc: "Cómo se conectan tecnología, instituciones y equipos.",
  },
  {
    name: "Evidencia",
    desc: "Cómo evalúo y mejoro lo que diseño.",
  },
];

const methodFundamentalsEn = [
  {
    name: "Cognition",
    desc: "How people learn, decide, and change.",
  },
  {
    name: "Systems",
    desc: "How technology, institutions, and teams connect.",
  },
  {
    name: "Evidence",
    desc: "How I evaluate and improve what I design.",
  },
];

export function getMethodFundamentals(locale: Locale) {
  return locale === "en" ? methodFundamentalsEn : methodFundamentalsEs;
}

const methodStepsEs: MethodStep[] = [
  {
    name: "Diagnóstico",
    desc: "Entiendo cómo aprende y decide la audiencia, y qué frena la adopción, antes de diseñar nada.",
    examples: [
      {
        case: "OpenAI",
        text: "Mapeo de actores y audiencias por sector: Senado, SECTUR, docentes y pymes.",
      },
      {
        case: "INFP",
        text: "Línea base: 8% de apertura en convocatorias como punto de partida.",
      },
      {
        case: "SISAP",
        text: "Mapa de actores y ruta de decisión de las instituciones de salud.",
      },
      {
        case: "Exposoma y cognición",
        text: "Revisión de fuentes y diccionarios para detectar discontinuidades entre ediciones antes de integrar.",
      },
    ],
  },
  {
    name: "Diseño",
    desc: "Convierto el diagnóstico en programas, materiales y experiencias a la medida del contexto.",
    examples: [
      {
        case: "OpenAI",
        text: "Programa docente alineado a la Nueva Escuela Mexicana.",
      },
      {
        case: "INFP",
        text: "Cursos y micrositios en Rise 360, Storyline y Thinkific.",
      },
      {
        case: "SISAP",
        text: "Historias de usuario con supervisión humana: el sistema organiza y el profesional decide.",
      },
      {
        case: "Exposoma y cognición",
        text: "Bases separadas por nivel de observación, con llaves y reglas de integración documentadas.",
      },
    ],
  },
  {
    name: "Adopción",
    desc: "Acompaño el cambio con facilitación, comunicación y redes que lo sostienen.",
    examples: [
      {
        case: "OpenAI",
        text: "Talleres con más de 3,000 participantes en 8+ sectores.",
      },
      {
        case: "INFP",
        text: "Campañas de convocatoria a 200,000 contactos.",
      },
      {
        case: "SISAP",
        text: "Adopción institucional a través de la aceleradora Jalisco MedTech 2026.",
      },
      {
        case: "Exposoma y cognición",
        text: "Guía de incorporación para que el personal nuevo use la base con los mismos criterios.",
      },
    ],
  },
  {
    name: "Medición",
    desc: "Mido contra una línea base e indicadores acordados, y vuelvo al diagnóstico con lo aprendido.",
    examples: [
      {
        case: "OpenAI",
        text: "Cifras por cohorte, en verificación para publicarse.",
      },
      {
        case: "INFP",
        text: "Apertura de 8% a 30% y 30% más de finalización.",
      },
      {
        case: "SISAP",
        text: "Auditoría de afirmaciones: se retiró una métrica sin validación clínica independiente.",
      },
      {
        case: "Exposoma y cognición",
        text: "Controles de integridad y verificación contra el diccionario como requisito de entrada.",
      },
    ],
  },
];

const methodStepsEn: MethodStep[] = [
  {
    name: "Diagnose",
    desc: "I understand how the audience learns and decides, and what blocks adoption, before designing anything.",
    examples: [
      {
        case: "OpenAI",
        text: "Stakeholder and audience mapping by sector: Senate, SECTUR, teachers, and small businesses.",
      },
      {
        case: "INFP",
        text: "Baseline: 8% open rate on invitations as the starting point.",
      },
      {
        case: "SISAP",
        text: "Stakeholder map and decision path across health institutions.",
      },
      {
        case: "Exposome & cognition",
        text: "Reviewed sources and dictionaries to spot discontinuities across editions before integrating.",
      },
    ],
  },
  {
    name: "Design",
    desc: "I turn the diagnosis into programs, materials, and experiences tailored to the context.",
    examples: [
      {
        case: "OpenAI",
        text: "Teacher program aligned to Mexico's Nueva Escuela Mexicana framework.",
      },
      {
        case: "INFP",
        text: "Courses and microsites in Rise 360, Storyline, and Thinkific.",
      },
      {
        case: "SISAP",
        text: "User stories with human oversight: the system organizes, the professional decides.",
      },
      {
        case: "Exposome & cognition",
        text: "Bases separated by observation level, with documented keys and integration rules.",
      },
    ],
  },
  {
    name: "Adopt",
    desc: "I support the change with facilitation, communication, and the networks that sustain it.",
    examples: [
      {
        case: "OpenAI",
        text: "Workshops with over 3,000 participants across 8+ sectors.",
      },
      {
        case: "INFP",
        text: "Outreach campaigns to 200,000 contacts.",
      },
      {
        case: "SISAP",
        text: "Institutional adoption through the Jalisco MedTech 2026 accelerator.",
      },
      {
        case: "Exposome & cognition",
        text: "Onboarding guide so new staff use the base with the same criteria.",
      },
    ],
  },
  {
    name: "Measure",
    desc: "I measure against a baseline and agreed indicators, and return to diagnosis with what I learned.",
    examples: [
      {
        case: "OpenAI",
        text: "Per-cohort figures, under verification before publishing.",
      },
      {
        case: "INFP",
        text: "Open rate up from 8% to 30%, and 30% more completions.",
      },
      {
        case: "SISAP",
        text: "Claims audit: a metric was withdrawn for lacking independent clinical validation.",
      },
      {
        case: "Exposome & cognition",
        text: "Integrity checks and dictionary verification as an entry requirement.",
      },
    ],
  },
];

export function getMethodSteps(locale: Locale): MethodStep[] {
  return locale === "en" ? methodStepsEn : methodStepsEs;
}
