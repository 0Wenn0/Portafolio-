import type { Locale } from "./types";

export type EvidentPrinciple = {
  letter: string;
  name: string;
  question: string;
  practice: string;
  step: string;
};

export type EvidentLink = {
  step: string;
  question: string;
  frameworks: string;
};

export type EvidentFinding = {
  finding: string;
  decision: string;
  source: string;
  href: string;
};

export type EvidentKitRow = {
  letter: string;
  name: string;
  where: string;
  href: string;
  status: string;
  done: boolean;
};

export type EvidentContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  whyTitle: string;
  why: string[];
  principlesTitle: string;
  principlesIntro: string;
  stepLabel: string;
  principles: EvidentPrinciple[];
  linksTitle: string;
  linksIntro: string;
  linkHeads: { step: string; question: string; frameworks: string };
  links: EvidentLink[];
  evidenceTitle: string;
  evidenceIntro: string;
  evidenceHeads: { finding: string; decision: string; source: string };
  findings: EvidentFinding[];
  evidenceNote: string;
  kitTitle: string;
  kitIntro: string;
  kitHeads: { principle: string; where: string; status: string };
  kitRows: EvidentKitRow[];
  kitLink: { label: string; href: string };
  readTitle: string;
  readItems: string[];
  backToMethod: string;
  backHref: string;
};

const es: EvidentContent = {
  metaTitle: "EVIDENT: mi marco de trabajo basado en evidencia — Wendy Ramírez Burgos",
  metaDescription:
    "EVIDENT integra diagnóstico, diseño, adopción y medición en siete principios: cada teoría con una función, cada decisión con una razón y cada resultado con un indicador verificable.",
  eyebrow: "Marco de trabajo · versión 1.0 en prueba",
  title: "EVIDENT",
  intro:
    "Es mi forma de diseñar formación y adopción de IA. Cada teoría tiene una función, cada decisión una razón y cada resultado un indicador que se puede verificar. Lo construí desde la neuropsicología: antes de elegir la herramienta, entiendo cómo aprende, decide y cambia la gente.",
  stats: [
    { value: "7", label: "principios, uno por letra" },
    { value: "4", label: "pasos de mi método" },
    { value: "7", label: "síntesis de investigación verificadas" },
  ],
  whyTitle: "Por qué un marco propio",
  why: [
    "Muchos proyectos de IA se planean alrededor de la herramienta: qué licencia comprar, qué funciones activar. La adopción se decide en otro lugar, en si las personas entienden para qué sirve, si confían en ella y si su entorno les deja usarla.",
    "Los marcos que uso por separado responden preguntas distintas. ADKAR dice en qué etapa del cambio está cada grupo; la teoría de carga cognitiva, cómo presentar la información; Kirkpatrick, qué medir. EVIDENT los ordena para que ninguna decisión quede sin justificar y ningún resultado sin evidencia.",
  ],
  principlesTitle: "Los siete principios",
  principlesIntro: "Cada letra es una pregunta que me hago antes de avanzar.",
  stepLabel: "Paso",
  principles: [
    {
      letter: "E",
      name: "Evidencia",
      question: "¿Qué sabemos antes de empezar?",
      practice: "Reviso la investigación disponible y levanto una línea base. No diseño sobre supuestos.",
      step: "Diagnóstico",
    },
    {
      letter: "V",
      name: "Voz",
      question: "¿Qué dicen quienes lo van a usar?",
      practice:
        "Escucho a usuarios y responsables. Ubico la barrera: falta de capacidad, de oportunidad o de motivación.",
      step: "Diagnóstico",
    },
    {
      letter: "I",
      name: "Intención",
      question: "¿Qué tiene que cambiar y cómo lo vamos a saber?",
      practice: "Redacto objetivos observables y defino indicadores y metas antes de producir nada.",
      step: "Diseño",
    },
    {
      letter: "D",
      name: "Diseño cognitivo-conductual",
      question: "¿Qué hace que esto se aprenda y se use?",
      practice:
        "Aplico lo que funciona para la memoria y la atención: práctica de recuperación, repaso espaciado y materiales que no saturan.",
      step: "Diseño",
    },
    {
      letter: "E",
      name: "Ejecución",
      question: "¿Cómo llega a las personas?",
      practice: "Facilito, comunico y llevo la solución a donde la gente ya trabaja, sin pedirle otra herramienta.",
      step: "Adopción",
    },
    {
      letter: "N",
      name: "Navegación adaptativa",
      question: "¿Qué ajusto con lo que estoy viendo?",
      practice: "Trabajo en ciclos cortos: pruebo en pequeño, registro cada falla y la convierto en una regla antes de escalar.",
      step: "Adopción",
    },
    {
      letter: "T",
      name: "Transferencia y trazabilidad",
      question: "¿Se usa en el trabajo real, y alguien más puede revisar cómo llegué aquí?",
      practice:
        "Mido el cambio de conducta, no solo la satisfacción o el examen final. Documento fuentes, decisiones y resultados, y separo lo medido de lo que todavía es hipótesis.",
      step: "Medición",
    },
  ],
  linksTitle: "Cómo se conecta con lo que ya uso",
  linksIntro: "EVIDENT no sustituye los marcos clásicos: les da un lugar y una función.",
  linkHeads: { step: "Paso", question: "Pregunta central", frameworks: "Marcos" },
  links: [
    {
      step: "Diagnóstico",
      question: "¿Por qué la gente no adopta?",
      frameworks: "COM-B (capacidad, oportunidad, motivación), UTAUT (utilidad y facilidad percibidas) y ADKAR para ubicar la etapa.",
    },
    {
      step: "Diseño",
      question: "¿Qué intervención mueve esa barrera?",
      frameworks: "Carga cognitiva y aprendizaje multimedia, Bloom para objetivos, Merrill para la secuencia y ADDIE para el proceso.",
    },
    {
      step: "Adopción",
      question: "¿Qué sostiene el cambio mientras ocurre?",
      frameworks: "ADKAR (conocimiento, habilidad y refuerzo), autodeterminación (autonomía y competencia) y comunidades de práctica.",
    },
    {
      step: "Medición",
      question: "¿Funcionó y por qué?",
      frameworks: "Kirkpatrick, niveles 1 a 3, y los casos de éxito de Brinkerhoff para explicar las diferencias.",
    },
    {
      step: "Gestión, en todo el ciclo",
      question: "¿Cómo avanzo sin perder el rumbo?",
      frameworks:
        "Prácticas ágiles de Scrum y Design Thinking: iteraciones cortas, prioridades claras, criterios de aceptación definidos antes y una revisión al cierre de cada ciclo.",
    },
  ],
  evidenceTitle: "La evidencia que lo sostiene",
  evidenceIntro:
    "Estas son las síntesis de investigación que más pesan en mis decisiones. Las cito con su tamaño de efecto y sus límites, porque un efecto promedio no garantiza nada en un contexto concreto.",
  evidenceHeads: { finding: "Qué dice la investigación", decision: "Qué hago con eso", source: "Fuente" },
  findings: [
    {
      finding:
        "En aulas reales, practicar recordando mejora el aprendizaje (g = 0.37) y repartir el estudio en el tiempo también (g = 0.20), aunque con efectos menores a los del laboratorio. 53 estudios.",
      decision: "Incluyo práctica de recuperación y repaso espaciado, y planeo para efectos moderados, no espectaculares.",
      source: "Ruitenburg et al. (2026), Educational Psychology Review",
      href: "https://doi.org/10.1007/s10648-026-10225-5",
    },
    {
      finding:
        "Intercalar tipos de problemas mejora el aprendizaje (g = 0.42 en 59 estudios), sobre todo cuando las categorías se parecen entre sí.",
      decision: "Mezclo casos parecidos que se confunden fácilmente, para entrenar la discriminación.",
      source: "Brunmair y Richter (2019), Psychological Bulletin",
      href: "https://pubmed.ncbi.nlm.nih.gov/31556629/",
    },
    {
      finding:
        "Una síntesis de 29 revisiones, 1,189 estudios y 78,177 participantes confirma 11 principios de diseño multimedia; importan más con material complejo y ritmo marcado por el sistema.",
      decision: "Segmento, señalo lo importante y quito lo decorativo, sobre todo en videos y sesiones en vivo.",
      source: "Noetel et al. (2022), Review of Educational Research",
      href: "https://doi.org/10.3102/00346543211052329",
    },
    {
      finding:
        "Las intervenciones basadas en autodeterminación mejoran la motivación en educación (137 tamaños de efecto, 9,433 participantes), con mucha variación entre estudios.",
      decision: "Doy opciones reales y explico para qué sirve cada actividad. No asumo que funcionará igual en todos los grupos.",
      source: "Wang et al. (2024), Learning and Motivation",
      href: "https://doi.org/10.1016/j.lmot.2024.102015",
    },
    {
      finding:
        "La gamificación tiene efectos pequeños: g = 0.49 en aprendizaje, 0.36 en motivación y 0.25 en conducta. Solo el efecto en aprendizaje se sostiene en los estudios más rigurosos.",
      decision: "No gamifico por defecto. Si lo hago, lo trato como hipótesis y lo mido.",
      source: "Sailer y Homner (2020), Educational Psychology Review",
      href: "https://doi.org/10.1007/s10648-019-09498-w",
    },
    {
      finding: "En 34 estudios experimentales, la IA generativa mejora los resultados de aprendizaje (g = 0.68).",
      decision: "Uso la IA como apoyo al aprendizaje, con un propósito definido en cada actividad.",
      source: "Ma y Zhong (2025), Journal of Computer Assisted Learning",
      href: "https://doi.org/10.1111/jcal.70117",
    },
    {
      finding:
        "Depender en exceso de asistentes de IA se asocia con menos pensamiento crítico y razonamiento analítico (revisión sistemática de 14 estudios).",
      decision: "Pido una idea propia antes de consultar a la IA y evalúo el proceso, no solo el producto.",
      source: "Zhai, Wibowo y Li (2024), Smart Learning Environments",
      href: "https://doi.org/10.1186/s40561-024-00316-7",
    },
  ],
  evidenceNote:
    "g es el tamaño del efecto: alrededor de 0.2 se considera pequeño, 0.5 moderado y 0.8 grande. Fuentes revisadas en noviembre de 2026.",
  kitTitle: "Primer caso de prueba: Pienso, consulto, decido",
  kitIntro:
    "Estoy probando EVIDENT con mi kit para que docentes integren IA sin delegar el criterio. Así se ve cada principio en el caso, y qué falta.",
  kitHeads: { principle: "Principio", where: "Dónde está en el caso", status: "Estado" },
  kitRows: [
    {
      letter: "E",
      name: "Evidencia",
      where: "El problema parte de la investigación sobre dependencia de la IA y evaluación del proceso.",
      href: "/casos/pienso-consulto-decido#problema-t",
      status: "Hecho · la línea base llega con la encuesta inicial del piloto",
      done: true,
    },
    {
      letter: "V",
      name: "Voz",
      where: "Encuesta inicial y entrevistas a docentes en el plan de pilotaje.",
      href: "/casos/pienso-consulto-decido#piloto-t",
      status: "Planeado · aún no participan docentes reales",
      done: false,
    },
    {
      letter: "I",
      name: "Intención",
      where: "Pregunta del piloto, indicadores y metas para decidir si se escala.",
      href: "/casos/pienso-consulto-decido#piloto-t",
      status: "Hecho · metas definidas antes de aplicar",
      done: true,
    },
    {
      letter: "D",
      name: "Diseño cognitivo-conductual",
      where: "Los tres momentos: idea propia antes de la IA, consulta con propósito y decisión justificada.",
      href: "/casos/pienso-consulto-decido#metodo-t",
      status: "Hecho",
      done: true,
    },
    {
      letter: "E",
      name: "Ejecución",
      where: "Dos implementaciones, una de ellas en Gemini, donde ya trabajan los docentes, y un tutorial de dos minutos.",
      href: "/casos/pienso-consulto-decido#herramientas-t",
      status: "Hecho",
      done: true,
    },
    {
      letter: "N",
      name: "Navegación adaptativa",
      where: "Cuatro pruebas y tres rondas de ajuste; cada falla se volvió una regla.",
      href: "/casos/pienso-consulto-decido#pruebas-t",
      status: "Hecho",
      done: true,
    },
    {
      letter: "T",
      name: "Transferencia y trazabilidad",
      where: "Kirkpatrick nivel 3 para medir el uso en clase, conversaciones de prueba públicas y una sección que separa lo real de lo que falta.",
      href: "/casos/pienso-consulto-decido#evaluacion",
      status: "Parcial · la trazabilidad está hecha; la transferencia se mide con el piloto",
      done: false,
    },
  ],
  kitLink: { label: "Ver el caso completo", href: "/casos/pienso-consulto-decido" },
  readTitle: "Qué es real y qué falta",
  readItems: [
    "EVIDENT es la versión 1.0 de un marco en construcción. Lo documento en un manual interno con instrumentos y una bitácora de evidencia; cada letra es también una fase del proceso.",
    "No propone teorías nuevas. Mi aportación es la integración: qué marco responde cada pregunta y cómo se rastrea cada decisión.",
    "Todavía no lo he aplicado completo en un proyecto con resultados medidos. El primer caso es el piloto del kit Pienso, consulto, decido.",
    "Las cifras de la tabla de evidencia vienen de las síntesis citadas, no de mis proyectos.",
  ],
  backToMethod: "Volver a Cómo trabajo",
  backHref: "/#como-trabajo",
};

const en: EvidentContent = {
  metaTitle: "EVIDENT: my evidence-based working framework — Wendy Ramírez Burgos",
  metaDescription:
    "EVIDENT brings diagnosis, design, adoption, and measurement together in seven principles: every theory with a function, every decision with a reason, and every result with a verifiable indicator.",
  eyebrow: "Working framework · version 1.0 in testing",
  title: "EVIDENT",
  intro:
    "It is how I design learning and AI adoption. Every theory has a function, every decision a reason, and every result an indicator that can be checked. I built it from neuropsychology: before choosing the tool, I work out how people learn, decide, and change.",
  stats: [
    { value: "7", label: "principles, one per letter" },
    { value: "4", label: "steps in my method" },
    { value: "7", label: "verified research syntheses" },
  ],
  whyTitle: "Why a framework of my own",
  why: [
    "Many AI projects are planned around the tool: which license to buy, which features to turn on. Adoption is decided elsewhere, in whether people understand what it is for, whether they trust it, and whether their environment lets them use it.",
    "The frameworks I use separately answer different questions. ADKAR tells me which stage of change each group is in; cognitive load theory, how to present information; Kirkpatrick, what to measure. EVIDENT puts them in order so no decision goes unjustified and no result goes without evidence.",
  ],
  principlesTitle: "The seven principles",
  principlesIntro: "Each letter is a question I ask before moving on.",
  stepLabel: "Step",
  principles: [
    {
      letter: "E",
      name: "Evidence",
      question: "What do we know before we start?",
      practice: "I review the available research and set a baseline. I don't design on assumptions.",
      step: "Diagnose",
    },
    {
      letter: "V",
      name: "Voice",
      question: "What do the people who will use it say?",
      practice: "I listen to users and decision-makers. I locate the barrier: missing capability, opportunity, or motivation.",
      step: "Diagnose",
    },
    {
      letter: "I",
      name: "Intent",
      question: "What has to change, and how will we know?",
      practice: "I write observable objectives and set indicators and targets before producing anything.",
      step: "Design",
    },
    {
      letter: "D",
      name: "Cognitive-behavioral design",
      question: "What makes this learned and used?",
      practice:
        "I apply what works for memory and attention: retrieval practice, spaced review, and materials that don't overload.",
      step: "Design",
    },
    {
      letter: "E",
      name: "Execution",
      question: "How does it reach people?",
      practice: "I facilitate, communicate, and bring the solution to where people already work, without asking for another tool.",
      step: "Adopt",
    },
    {
      letter: "N",
      name: "Adaptive navigation",
      question: "What do I adjust based on what I see?",
      practice: "I work in short cycles: I test small, log every failure, and turn it into a rule before scaling.",
      step: "Adopt",
    },
    {
      letter: "T",
      name: "Transfer and traceability",
      question: "Is it used in real work, and can someone else review how I got here?",
      practice:
        "I measure behavior change, not just satisfaction or a final test. I document sources, decisions, and results, and separate what was measured from what is still a hypothesis.",
      step: "Measure",
    },
  ],
  linksTitle: "How it connects to what I already use",
  linksIntro: "EVIDENT doesn't replace the classic frameworks: it gives each one a place and a function.",
  linkHeads: { step: "Step", question: "Core question", frameworks: "Frameworks" },
  links: [
    {
      step: "Diagnose",
      question: "Why aren't people adopting?",
      frameworks: "COM-B (capability, opportunity, motivation), UTAUT (perceived usefulness and ease), and ADKAR to locate the stage.",
    },
    {
      step: "Design",
      question: "Which intervention moves that barrier?",
      frameworks: "Cognitive load and multimedia learning, Bloom for objectives, Merrill for sequencing, and ADDIE for the process.",
    },
    {
      step: "Adopt",
      question: "What sustains the change while it happens?",
      frameworks: "ADKAR (knowledge, ability, and reinforcement), self-determination (autonomy and competence), and communities of practice.",
    },
    {
      step: "Measure",
      question: "Did it work, and why?",
      frameworks: "Kirkpatrick levels 1 to 3, and Brinkerhoff's Success Case Method to explain the differences.",
    },
    {
      step: "Management, across the cycle",
      question: "How do I move forward without losing direction?",
      frameworks:
        "Agile practices from Scrum and Design Thinking: short iterations, clear priorities, acceptance criteria set in advance, and a review at the end of each cycle.",
    },
  ],
  evidenceTitle: "The evidence behind it",
  evidenceIntro:
    "These are the research syntheses that weigh most on my decisions. I cite them with their effect sizes and limits, because an average effect guarantees nothing in a specific context.",
  evidenceHeads: { finding: "What the research says", decision: "What I do with it", source: "Source" },
  findings: [
    {
      finding:
        "In real classrooms, practicing recall improves learning (g = 0.37) and spacing study over time does too (g = 0.20), though both effects are smaller than in the lab. 53 studies.",
      decision: "I build in retrieval practice and spaced review, and plan for moderate effects, not spectacular ones.",
      source: "Ruitenburg et al. (2026), Educational Psychology Review",
      href: "https://doi.org/10.1007/s10648-026-10225-5",
    },
    {
      finding:
        "Interleaving problem types improves learning (g = 0.42 across 59 studies), especially when the categories resemble each other.",
      decision: "I mix similar cases that are easy to confuse, to train discrimination.",
      source: "Brunmair and Richter (2019), Psychological Bulletin",
      href: "https://pubmed.ncbi.nlm.nih.gov/31556629/",
    },
    {
      finding:
        "A synthesis of 29 reviews, 1,189 studies, and 78,177 participants confirms 11 multimedia design principles; they matter most with complex material and system-paced delivery.",
      decision: "I segment, signal what matters, and remove decoration, especially in videos and live sessions.",
      source: "Noetel et al. (2022), Review of Educational Research",
      href: "https://doi.org/10.3102/00346543211052329",
    },
    {
      finding:
        "Self-determination-based interventions improve motivation in education (137 effect sizes, 9,433 participants), with wide variation across studies.",
      decision: "I offer real choices and explain what each activity is for. I don't assume it will work the same in every group.",
      source: "Wang et al. (2024), Learning and Motivation",
      href: "https://doi.org/10.1016/j.lmot.2024.102015",
    },
    {
      finding:
        "Gamification has small effects: g = 0.49 on learning, 0.36 on motivation, and 0.25 on behavior. Only the learning effect holds in the most rigorous studies.",
      decision: "I don't gamify by default. When I do, I treat it as a hypothesis and measure it.",
      source: "Sailer and Homner (2020), Educational Psychology Review",
      href: "https://doi.org/10.1007/s10648-019-09498-w",
    },
    {
      finding: "Across 34 experimental studies, generative AI improves learning outcomes (g = 0.68).",
      decision: "I use AI to support learning, with a defined purpose in each activity.",
      source: "Ma and Zhong (2025), Journal of Computer Assisted Learning",
      href: "https://doi.org/10.1111/jcal.70117",
    },
    {
      finding:
        "Over-reliance on AI assistants is associated with weaker critical thinking and analytical reasoning (systematic review of 14 studies).",
      decision: "I ask for an original idea before consulting AI, and I assess the process, not just the product.",
      source: "Zhai, Wibowo, and Li (2024), Smart Learning Environments",
      href: "https://doi.org/10.1186/s40561-024-00316-7",
    },
  ],
  evidenceNote:
    "g is the effect size: about 0.2 is considered small, 0.5 moderate, and 0.8 large. Sources reviewed in November 2026.",
  kitTitle: "First test case: I think, I consult, I decide",
  kitIntro:
    "I am testing EVIDENT with my kit for faculty to integrate AI without handing over their judgment. Here is how each principle shows up in the case, and what is missing.",
  kitHeads: { principle: "Principle", where: "Where it is in the case", status: "Status" },
  kitRows: [
    {
      letter: "E",
      name: "Evidence",
      where: "The problem starts from research on AI over-reliance and process-based assessment.",
      href: "/en/casos/pienso-consulto-decido#problema-t",
      status: "Done · the baseline comes with the pilot's initial survey",
      done: true,
    },
    {
      letter: "V",
      name: "Voice",
      where: "Initial survey and faculty interviews in the pilot plan.",
      href: "/en/casos/pienso-consulto-decido#piloto-t",
      status: "Planned · no real faculty involved yet",
      done: false,
    },
    {
      letter: "I",
      name: "Intent",
      where: "Pilot question, indicators, and targets for deciding whether to scale.",
      href: "/en/casos/pienso-consulto-decido#piloto-t",
      status: "Done · targets set before running it",
      done: true,
    },
    {
      letter: "D",
      name: "Cognitive-behavioral design",
      where: "The three moments: an original idea before AI, a purposeful consultation, and a justified decision.",
      href: "/en/casos/pienso-consulto-decido#metodo-t",
      status: "Done",
      done: true,
    },
    {
      letter: "E",
      name: "Execution",
      where: "Two implementations, one of them in Gemini, where faculty already work, plus a two-minute tutorial.",
      href: "/en/casos/pienso-consulto-decido#herramientas-t",
      status: "Done",
      done: true,
    },
    {
      letter: "N",
      name: "Adaptive navigation",
      where: "Four tests and three rounds of adjustment; every failure became a rule.",
      href: "/en/casos/pienso-consulto-decido#pruebas-t",
      status: "Done",
      done: true,
    },
    {
      letter: "T",
      name: "Transfer and traceability",
      where: "Kirkpatrick level 3 to measure classroom use, public test conversations, and a section that separates what is real from what is missing.",
      href: "/en/casos/pienso-consulto-decido#evaluacion",
      status: "Partial · traceability is done; transfer is measured with the pilot",
      done: false,
    },
  ],
  kitLink: { label: "See the full case study", href: "/en/casos/pienso-consulto-decido" },
  readTitle: "What is real and what is missing",
  readItems: [
    "EVIDENT is version 1.0 of a framework in progress. I document it in an internal manual with instruments and an evidence log; each letter is also a phase of the process.",
    "It doesn't propose new theories. My contribution is the integration: which framework answers each question and how each decision is traced.",
    "I haven't yet applied it end to end in a project with measured results. The first case is the pilot of the I think, I consult, I decide kit.",
    "The figures in the evidence table come from the cited syntheses, not from my projects.",
  ],
  backToMethod: "Back to How I work",
  backHref: "/en#como-trabajo",
};

export function getEvident(locale: Locale): EvidentContent {
  return locale === "en" ? en : es;
}
