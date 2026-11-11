import type { Locale, MethodStep, MethodTrial } from "./types";

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
    framework:
      "COM-B para ubicar la barrera (capacidad, oportunidad o motivación) y ADKAR para ver en qué etapa está cada grupo (conciencia, deseo, conocimiento, habilidad o refuerzo) y dónde se atora.",
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
    framework:
      "ADDIE para el proceso, Merrill para la secuencia de actividades y Bloom para redactar objetivos que se puedan evaluar.",
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
    framework:
      "ADKAR: la comunicación construye conciencia y deseo; la formación y la práctica, conocimiento y habilidad.",
    examples: [
      {
        case: "OpenAI",
        text: "Talleres con más de 3,000 asistentes de los sectores productivo, de gobierno, legislativo y educativo.",
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
    framework:
      "Kirkpatrick, niveles 1 a 3, y el refuerzo de ADKAR: qué sostiene el cambio cuando termina el acompañamiento.",
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
    framework:
      "COM-B to locate the barrier (capability, opportunity, or motivation) and ADKAR to see which stage each group is in (awareness, desire, knowledge, ability, or reinforcement) and where it gets stuck.",
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
    framework:
      "ADDIE for the process, Merrill for the sequence of activities, and Bloom to write objectives that can be assessed.",
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
    framework:
      "ADKAR: communication builds awareness and desire; training and practice build knowledge and ability.",
    examples: [
      {
        case: "OpenAI",
        text: "Workshops with over 3,000 attendees from the productive, government, legislative, and education sectors.",
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
    framework:
      "Kirkpatrick levels 1 to 3, plus ADKAR's reinforcement: what sustains the change once support ends.",
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

const methodTrialsEs: MethodTrial[] = [
  {
    name: "Pienso, consulto, decido",
    desc: "Método propio para usar IA sin delegarle el criterio. Lo probé en dos herramientas: la app Criterio y una Skill de Gemini para docentes.",
    status: "4 pruebas documentadas · piloto con docentes en diseño",
    link: { label: "Ver el caso", href: "/casos/pienso-consulto-decido" },
  },
  {
    name: "Casos de éxito de Brinkerhoff",
    desc: "Para evaluar el piloto: buscar a quienes más y menos aplicaron lo aprendido y entender qué lo facilitó o lo frenó.",
    status: "Plan de evaluación listo · se aplica con el piloto",
    link: { label: "Ver el plan", href: "/casos/pienso-consulto-decido#evaluacion" },
  },
  {
    name: "Dick y Carey",
    desc: "Para alinear cada objetivo con su instrumento de evaluación antes de diseñar la actividad.",
    status: "En preparación para el próximo curso del portafolio",
  },
];

const methodTrialsEn: MethodTrial[] = [
  {
    name: "Pienso, consulto, decido",
    desc: "My own method (\"I think, I consult, I decide\") for using AI without handing over judgment. I tested it in two tools: the Criterio app and a Gemini Skill for teachers.",
    status: "4 documented tests · teacher pilot in design",
    link: { label: "See the case study", href: "/en/casos/pienso-consulto-decido" },
  },
  {
    name: "Brinkerhoff's Success Case Method",
    desc: "To evaluate the pilot: find the people who applied the most and the least, and understand what helped or got in the way.",
    status: "Evaluation plan ready · runs with the pilot",
    link: { label: "See the plan", href: "/en/casos/pienso-consulto-decido#evaluacion" },
  },
  {
    name: "Dick and Carey",
    desc: "To align each objective with its assessment instrument before designing the activity.",
    status: "In preparation for the next portfolio course",
  },
];

export function getMethodTrials(locale: Locale): MethodTrial[] {
  return locale === "en" ? methodTrialsEn : methodTrialsEs;
}
