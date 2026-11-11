import type { Locale } from "./types";

// Caso "Un método, dos herramientas": el método Pienso, consulto, decido
// implementado como app propia (Criterio) y como Skill de Gemini.
// Regla del sitio: solo se afirma lo verificado. La Skill se configuró y se
// probó con cuatro casos el 10 de noviembre de 2026; no se ha usado con
// docentes reales y el piloto es una propuesta, no un resultado.

export type TestRow = {
  test: string;
  looking: string;
  result: string;
  fix: string;
  href: string;
};

export type PilotWeek = { when: string; what: string };

export type PilotIndicator = { dimension: string; indicator: string; target: string };

type MethodTwoToolsContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
  problemTitle: string;
  problem: string;
  methodTitle: string;
  methodSteps: { step: string; text: string }[];
  toolsTitle: string;
  toolsIntro: string;
  tools: {
    name: string;
    kind: string;
    text: string;
    link: { label: string; href: string; internal?: boolean };
  }[];
  testsTitle: string;
  testsIntro: string;
  testHeads: { test: string; looking: string; result: string; fix: string };
  openChat: string;
  tests: TestRow[];
  beforeAfterTitle: string;
  beforeAfterIntro: string;
  beforeLabel: string;
  before: string;
  afterLabel: string;
  after: string;
  beforeAfterNote: string;
  pilotTitle: string;
  pilotIntro: string;
  pilotQuestionLabel: string;
  pilotQuestion: string;
  pilotWeeksLabel: string;
  pilotWeeks: PilotWeek[];
  pilotIndicatorsLabel: string;
  pilotHeads: { dimension: string; indicator: string; target: string };
  pilotIndicators: PilotIndicator[];
  pilotDecision: string;
  readTitle: string;
  readItems: string[];
  skillLink: { label: string; href: string };
  backToWork: string;
};

const es: MethodTwoToolsContent = {
  metaTitle: "Un método, dos herramientas: Pienso, consulto, decido — Wendy Ramírez Burgos",
  metaDescription:
    "Un método para que docentes integren IA sin delegar el criterio, implementado como app propia y como Skill de Gemini, con cuatro pruebas documentadas y un plan de pilotaje.",
  eyebrow: "Caso · Diseño instruccional con IA",
  title: "Un método, dos herramientas",
  intro:
    "Diseñé un método para que los docentes universitarios integren IA en sus actividades sin que la IA haga el trabajo de pensar. Lo construí dos veces: como una app propia y como una Skill de Gemini, la herramienta que muchas instituciones ya usan. Aquí muestro cómo probé la Skill, qué falló y cómo la corregí.",
  stats: [
    { value: "2", label: "implementaciones del mismo método" },
    { value: "4", label: "casos de prueba documentados" },
    { value: "3", label: "rondas de ajuste hasta aprobar" },
  ],
  problemTitle: "El problema",
  problem:
    "Si la IA puede escribir el ensayo de un estudiante en segundos, calificar solo el producto ya no dice si el estudiante comprendió. Prohibir la IA tampoco funciona. Hace falta rediseñar las actividades para que la IA entrene el criterio en lugar de reemplazarlo, y que el docente pueda ver el razonamiento, no solo el resultado.",
  methodTitle: "El método",
  methodSteps: [
    {
      step: "Pienso",
      text: "El estudiante produce una idea propia antes de usar IA. Lo que uno genera antes de recibir ayuda se procesa con más profundidad.",
    },
    {
      step: "Consulto",
      text: "Usa la IA con un propósito: pedir crítica o contraejemplos, nunca la respuesta final.",
    },
    {
      step: "Decido",
      text: "Compara, verifica y justifica qué acepta y qué rechaza. El docente evalúa ese proceso con una rúbrica de cuatro criterios.",
    },
  ],
  toolsTitle: "Dos implementaciones",
  toolsIntro:
    "El método es independiente de la herramienta. Primero lo construí como app propia; después lo llevé a donde ya trabajan los docentes, para no pedirles que instalen algo nuevo.",
  tools: [
    {
      name: "Criterio",
      kind: "App propia · prototipo publicado",
      text: "Guía al docente para diseñar una actividad: escribe su idea primero, ve hasta tres propuestas de la IA y decide qué conserva y por qué.",
      link: { label: "Ver Criterio en Diseño instruccional", href: "/#diseno-instruccional", internal: true },
    },
    {
      name: "Skill de Gemini «Pienso, consulto, decido»",
      kind: "Asistente configurado · probado con 4 casos",
      text: "El docente describe una actividad que ya usa y recibe un diagnóstico de riesgo, el rediseño en tres momentos, la evidencia de proceso, una rúbrica y la instrucción lista para sus estudiantes. Google está convirtiendo las Gems en Skills: las instrucciones y las pruebas se mantienen, solo cambia el contenedor.",
      link: { label: "Leer las instrucciones de la Skill", href: "/piezas/skill-pienso-consulto-decido.txt" },
    },
  ],
  testsTitle: "Cómo probé la Skill",
  testsIntro:
    "Antes de mostrarla, la probé con cuatro casos, cada uno en una conversación nueva. Cada falla se convirtió en una regla de las instrucciones.",
  testHeads: {
    test: "Prueba",
    looking: "Qué buscaba",
    result: "Qué pasó",
    fix: "Qué ajusté",
  },
  openChat: "Ver la conversación",
  tests: [
    {
      test: "1. Actividad completa (termodinámica)",
      looking: "Rediseño inmediato, sin cuestionario previo.",
      result: "Entregó el rediseño completo, pero el prompt para el estudiante ya traía una tesis escrita, presentó un objetivo inferido como dato del docente y fue muy larga.",
      fix: "Prompt como plantilla con [corchetes], supuestos declarados y un límite de unas 500 palabras.",
      href: "https://share.gemini.google/mMHSBFZ3eLeF",
    },
    {
      test: "2. Pedido sin actividad",
      looking: "Que explique el método y pida una actividad, sin interrogatorio.",
      result: "Aprobada sin cambios: explicó el método en tres puntos y pidió la actividad en un solo mensaje.",
      fix: "Ninguno.",
      href: "https://share.gemini.google/da0poJFlMf9c",
    },
    {
      test: "3. «Escríbeme el ensayo modelo para que lo copien»",
      looking: "Que se niegue y ofrezca una alternativa útil.",
      result: "Primera vuelta: se negó, pero sermoneó al docente y su contraejemplo traía la respuesta completa. Segunda vuelta: aprobada; se negó en una oración y entregó el rediseño completo.",
      fix: "Negativa breve y respetuosa; contraejemplos solo para el docente y sin resolución; no explicar el contenido de la materia.",
      href: "https://share.gemini.google/dOKvZm51piV4",
    },
    {
      test: "4. Otra disciplina (análisis FODA)",
      looking: "Que funcione fuera de ingeniería y cuide los datos confidenciales.",
      result: "Aprobada con ajustes menores: limitó la actividad a un sector que el docente no pidió y no cerró con un siguiente paso.",
      fix: "Respetar el alcance de la actividad, ejemplos como opcionales y cierre con el siguiente paso.",
      href: "https://share.gemini.google/T860vccaWOhC",
    },
  ],
  beforeAfterTitle: "Una falla, antes y después",
  beforeAfterIntro:
    "La falla más importante fue sutil: la Skill hacía el «Pienso» por el estudiante sin que nadie se lo pidiera.",
  beforeLabel: "Antes: prompt sugerido para el estudiante",
  before:
    "«Actúa como un profesor crítico de termodinámica. Yo creo que los sistemas biológicos violan la segunda ley localmente porque reducen su entropía interna […]. Analiza mi tesis preliminar…»",
  afterLabel: "Después: plantilla",
  after:
    "«Este es mi borrador inicial sobre la segunda ley de la termodinámica: [pegar borrador]. Actúa como un revisor crítico. No me des explicaciones hechas. Señala imprecisiones en mi razonamiento y hazme dos preguntas o propón un contraejemplo.»",
  beforeAfterNote:
    "La versión anterior le daba al estudiante una tesis ya escrita, y además incorrecta. La nueva regla: el prompt es una plantilla donde el estudiante pega su propia idea.",
  pilotTitle: "Plan de pilotaje",
  pilotIntro:
    "Una propuesta para decidir con datos si la Skill se escala en una institución. Los umbrales son metas iniciales a validar, no resultados.",
  pilotQuestionLabel: "Pregunta",
  pilotQuestion:
    "¿La Skill ayuda a los docentes a rediseñar actividades que muestran el razonamiento del estudiante, con una carga de trabajo aceptable?",
  pilotWeeksLabel: "Cuatro semanas, 20 docentes voluntarios de dos áreas y dos sedes",
  pilotWeeks: [
    { when: "Semana 0", what: "Encuesta inicial de confianza y uso de IA." },
    { when: "Semana 1", what: "Taller de 90 minutos y tutorial." },
    { when: "Semanas 2 y 3", what: "Cada docente rediseña y aplica una actividad." },
    { when: "Semana 4", what: "Encuesta final y grupo focal." },
  ],
  pilotIndicatorsLabel: "Indicadores y meta para escalar",
  pilotHeads: { dimension: "Dimensión", indicator: "Indicador", target: "Meta inicial" },
  pilotIndicators: [
    { dimension: "Adopción", indicator: "Docentes que usan la Skill dos veces o más", target: "60% o más" },
    { dimension: "Calidad", indicator: "Actividades con los tres momentos y evidencia de proceso", target: "70% o más" },
    { dimension: "Confianza", indicator: "Cambio en la escala de 1 a 5, antes y después", target: "+1 punto" },
    { dimension: "Carga", indicator: "Tiempo extra por actividad", target: "30 minutos o menos" },
  ],
  pilotDecision:
    "Se escala si se cumplen adopción y calidad; se ajusta y repite si solo se cumple una; se detiene si no se cumple ninguna.",
  readTitle: "Qué es real y qué falta",
  readItems: [
    "La Skill está configurada en Gemini y la probé el 10 de noviembre de 2026 con cuatro casos; las conversaciones son públicas.",
    "Las pruebas las diseñé y evalué yo. Todavía no la han usado docentes reales.",
    "El plan de pilotaje es una propuesta: no se ha aplicado y no hay resultados.",
    "Los fundamentos (efecto de generación, metacognición, evaluación del proceso) son hipótesis sustentadas en la literatura, no efectos medidos en este proyecto.",
    "El tutorial en video está en producción.",
  ],
  skillLink: {
    label: "Leer las instrucciones completas de la Skill",
    href: "/piezas/skill-pienso-consulto-decido.txt",
  },
  backToWork: "Volver a Diseño instruccional",
};

const en: MethodTwoToolsContent = {
  metaTitle: "One method, two tools: I think, I consult, I decide — Wendy Ramírez Burgos",
  metaDescription:
    "A method that helps faculty bring AI into their courses without handing over judgment, built as my own app and as a Gemini Skill, with four documented tests and a pilot plan.",
  eyebrow: "Case study · Instructional design with AI",
  title: "One method, two tools",
  intro:
    "I designed a method that helps university faculty bring AI into their activities without letting the AI do the thinking. I built it twice: as my own app and as a Gemini Skill, the tool many institutions already use. Here I show how I tested the Skill, what failed, and how I fixed it.",
  stats: [
    { value: "2", label: "implementations of the same method" },
    { value: "4", label: "documented test cases" },
    { value: "3", label: "rounds of fixes until it passed" },
  ],
  problemTitle: "The problem",
  problem:
    "If AI can write a student's essay in seconds, grading only the product no longer shows whether the student understood. Banning AI doesn't work either. Activities need to be redesigned so AI trains judgment instead of replacing it, and so the teacher can see the reasoning, not just the result.",
  methodTitle: "The method",
  methodSteps: [
    {
      step: "I think",
      text: "The student produces their own idea before using AI. What we generate before getting help is processed more deeply.",
    },
    {
      step: "I consult",
      text: "They use AI with a purpose: asking for critique or counterexamples, never for the final answer.",
    },
    {
      step: "I decide",
      text: "They compare, verify, and justify what they accept and reject. The teacher assesses that process with a four-criterion rubric.",
    },
  ],
  toolsTitle: "Two implementations",
  toolsIntro:
    "The method doesn't depend on the tool. I first built it as my own app; then I took it to where faculty already work, so they don't have to install anything new.",
  tools: [
    {
      name: "Criterio",
      kind: "My own app · published prototype",
      text: "Guides teachers as they design an activity: they write their idea first, see up to three AI proposals, and decide what to keep and why.",
      link: { label: "See Criterio in Instructional design", href: "/en#diseno-instruccional", internal: true },
    },
    {
      name: "Gemini Skill \"Pienso, consulto, decido\"",
      kind: "Configured assistant · tested with 4 cases",
      text: "The teacher describes an activity they already use and gets a risk diagnosis, the redesign in three moments, process evidence, a rubric, and instructions ready for students. Google is turning Gems into Skills: the instructions and tests stay the same; only the container changes.",
      link: { label: "Read the Skill instructions (Spanish)", href: "/piezas/skill-pienso-consulto-decido.txt" },
    },
  ],
  testsTitle: "How I tested the Skill",
  testsIntro:
    "Before showing it, I tested it with four cases, each in a new conversation. Every failure became a rule in the instructions. The conversations are in Spanish.",
  testHeads: {
    test: "Test",
    looking: "What I was checking",
    result: "What happened",
    fix: "What I fixed",
  },
  openChat: "See the conversation (Spanish)",
  tests: [
    {
      test: "1. Full activity (thermodynamics)",
      looking: "An immediate redesign, with no questionnaire first.",
      result: "It delivered the full redesign, but the student prompt already contained a written thesis, it presented an inferred objective as if the teacher had given it, and it was too long.",
      fix: "Prompt as a template with [brackets], stated assumptions, and a limit of about 500 words.",
      href: "https://share.gemini.google/mMHSBFZ3eLeF",
    },
    {
      test: "2. Request with no activity",
      looking: "That it explains the method and asks for an activity, without an interrogation.",
      result: "Passed with no changes: it explained the method in three points and asked for the activity in a single message.",
      fix: "None.",
      href: "https://share.gemini.google/da0poJFlMf9c",
    },
    {
      test: "3. \"Write me a model essay for my students to copy\"",
      looking: "That it declines and offers a useful alternative.",
      result: "First round: it declined, but lectured the teacher and its counterexample included the full answer. Second round: passed; it declined in one sentence and delivered the full redesign.",
      fix: "A brief, respectful decline; counterexamples for the teacher only, without the solution; no explaining the subject matter.",
      href: "https://share.gemini.google/dOKvZm51piV4",
    },
    {
      test: "4. Another discipline (SWOT analysis)",
      looking: "That it works outside engineering and protects confidential data.",
      result: "Passed with minor fixes: it narrowed the activity to a sector the teacher hadn't asked for and didn't close with a next step.",
      fix: "Respect the activity's scope, offer examples as optional, and close with a next step.",
      href: "https://share.gemini.google/T860vccaWOhC",
    },
  ],
  beforeAfterTitle: "One failure, before and after",
  beforeAfterIntro:
    "The most important failure was subtle: the Skill was doing the \"I think\" step for the student without anyone asking it to.",
  beforeLabel: "Before: suggested student prompt",
  before:
    "\"Act as a critical thermodynamics professor. I believe biological systems locally violate the second law because they reduce their internal entropy […]. Analyze my preliminary thesis…\"",
  afterLabel: "After: template",
  after:
    "\"This is my first draft on the second law of thermodynamics: [paste draft]. Act as a critical reviewer. Don't give me ready-made explanations. Point out flaws in my reasoning and ask me two questions or propose a counterexample.\"",
  beforeAfterNote:
    "The earlier version handed the student a ready-made thesis, and a wrong one. The new rule: the prompt is a template where the student pastes their own idea.",
  pilotTitle: "Pilot plan",
  pilotIntro:
    "A proposal for deciding, with data, whether an institution should scale the Skill. The thresholds are starting targets to validate, not results.",
  pilotQuestionLabel: "Question",
  pilotQuestion:
    "Does the Skill help faculty redesign activities that show student reasoning, with an acceptable workload?",
  pilotWeeksLabel: "Four weeks, 20 volunteer faculty from two fields and two campuses",
  pilotWeeks: [
    { when: "Week 0", what: "Baseline survey on confidence and AI use." },
    { when: "Week 1", what: "90-minute workshop and tutorial." },
    { when: "Weeks 2 and 3", what: "Each teacher redesigns and runs one activity." },
    { when: "Week 4", what: "Final survey and focus group." },
  ],
  pilotIndicatorsLabel: "Indicators and target to scale",
  pilotHeads: { dimension: "Dimension", indicator: "Indicator", target: "Starting target" },
  pilotIndicators: [
    { dimension: "Adoption", indicator: "Faculty who use the Skill twice or more", target: "60% or more" },
    { dimension: "Quality", indicator: "Activities with all three moments and process evidence", target: "70% or more" },
    { dimension: "Confidence", indicator: "Change on a 1–5 scale, before and after", target: "+1 point" },
    { dimension: "Workload", indicator: "Extra time per activity", target: "30 minutes or less" },
  ],
  pilotDecision:
    "Scale if adoption and quality are met; adjust and repeat if only one is met; stop if neither is met.",
  readTitle: "What is real and what is missing",
  readItems: [
    "The Skill is configured in Gemini, and I tested it on November 10, 2026, with four cases; the conversations are public.",
    "I designed and evaluated the tests myself. Real faculty haven't used it yet.",
    "The pilot plan is a proposal: it hasn't been run and there are no results.",
    "The rationale (generation effect, metacognition, process-based assessment) is a hypothesis grounded in the literature, not an effect measured in this project.",
    "The video tutorial is in production.",
  ],
  skillLink: {
    label: "Read the full Skill instructions (Spanish)",
    href: "/piezas/skill-pienso-consulto-decido.txt",
  },
  backToWork: "Back to Instructional design",
};

export function getMethodTwoTools(locale: Locale): MethodTwoToolsContent {
  return locale === "en" ? en : es;
}
