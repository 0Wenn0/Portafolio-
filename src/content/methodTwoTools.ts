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

export type EvalLevel = { level: string; question: string; instrument: string; when: string };

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
  tutorial: {
    title: string;
    intro: string;
    src: string;
    poster: string;
    label: string;
    transcriptLabel: string;
    transcript: string[];
  };
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
  pilotSheet: { label: string; href: string };
  evalTitle: string;
  evalIntro: string;
  kirkTitle: string;
  kirkHeads: { question: string; instrument: string; when: string };
  kirkLevels: EvalLevel[];
  kirkOut: string;
  scmTitle: string;
  scmSteps: { step: string; text: string }[];
  interviewLabel: string;
  interviewQuestions: string[];
  ethicsNote: string;
  evidentTitle: string;
  evidentIntro: string;
  evidentLink: { label: string; href: string };
  pmTitle: string;
  pmIntro: string;
  pmItems: { label: string; text: string }[];
  pmBoardLabel: string;
  pmBoard: { column: string; items: string[] }[];
  pmNote: string;
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
  tutorial: {
    title: "Tutorial para docentes",
    intro:
      "Un video de dos minutos para que un docente entienda para qué sirve la Skill, cómo usarla y qué hacer con lo que devuelve. Las pantallas son capturas reales de las pruebas; tiene subtítulos y transcripción.",
    src: "/learning-design/tutorial-pienso-consulto-decido.mp4",
    poster: "/learning-design/tutorial-pienso-consulto-decido-poster.webp",
    label: "Tutorial de dos minutos sobre cómo usar la Skill Pienso, consulto, decido",
    transcriptLabel: "Texto del video",
    transcript: [
      "Si la IA puede escribir el ensayo de tus estudiantes en segundos, ¿qué estás evaluando realmente?",
      "Prohibirla no funciona. Funciona rediseñar la actividad en tres momentos. Pienso: el estudiante produce una idea propia, sin IA. Consulto: usa la IA para pedir crítica o un contraejemplo, no la respuesta. Decido: compara, verifica y justifica qué acepta y qué no.",
      "Para eso diseñé una Skill de Gemini. Escribes /pienso-consulto-decido y le cuentas tu actividad como la das hoy: la materia, la tarea y cómo la calificas.",
      "Primero te dice qué tan fácil sería que la IA hiciera la tarea. Aquí, el riesgo es alto. Luego te propone el rediseño. En Pienso, cada estudiante escribe su explicación sin IA. En Consulto, pega su borrador en una plantilla y le pide preguntas y contraejemplos, no que escriba por él. En Decido, escribe su versión final y explica qué sugerencias aceptó, cuáles rechazó y por qué.",
      "Así ya no calificas solo el producto. Revisas el borrador, la consulta y la versión final con una rúbrica de cuatro criterios: idea propia, uso intencional de la IA, verificación y decisión justificada.",
      "También te entrega la instrucción lista para tus estudiantes. Si le pides que escriba el ensayo por ellos, se niega y te ofrece otra opción. La Skill no califica: tú validas cada rediseño.",
      "Pruébalo con una sola actividad esta semana. La IA propone. Tú y tus estudiantes deciden."
    ],
  },
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
    { when: "Semana 4", what: "Encuesta final y entrevistas de casos de éxito." },
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
  pilotSheet: {
    label: "Descargar la ficha de pilotaje (PDF, 2 páginas)",
    href: "/piezas/ficha-pilotaje-pienso-consulto-decido.pdf",
  },
  evalTitle: "Cómo voy a evaluar el piloto",
  evalIntro:
    "Uso dos modelos que se complementan. Kirkpatrick dice cuánto funcionó en cada nivel. Los casos de éxito de Brinkerhoff explican por qué funcionó con unos docentes y no con otros, y qué cambiar antes de escalar.",
  kirkTitle: "Kirkpatrick, niveles 1 a 3",
  kirkHeads: { question: "Qué pregunto", instrument: "Instrumento", when: "Cuándo" },
  kirkLevels: [
    {
      level: "1 · Reacción",
      question: "¿La Skill les pareció útil y fácil de usar en su materia?",
      instrument: "Encuesta final: utilidad, facilidad y carga de trabajo en escala de 1 a 5, y una pregunta abierta.",
      when: "Semana 4",
    },
    {
      level: "2 · Aprendizaje",
      question: "¿Saben rediseñar una actividad con los tres momentos?",
      instrument:
        "Rúbrica de 4 criterios sobre la actividad rediseñada: idea propia antes de la IA, consulta con propósito, decisión argumentada y evidencia de proceso visible para el docente.",
      when: "Semanas 2 y 3",
    },
    {
      level: "3 · Conducta",
      question: "¿La aplicaron en clase y la volverían a usar?",
      instrument: "Actividad aplicada con muestras anónimas de trabajos y registro de usos de la Skill.",
      when: "Semanas 3 y 4",
    },
  ],
  kirkOut:
    "No mido el nivel 4 (resultados) en este piloto: cuatro semanas no alcanzan para ver cambios en el aprendizaje de los estudiantes. Si se escala, el siguiente paso es comparar durante un semestre.",
  scmTitle: "Casos de éxito de Brinkerhoff",
  scmSteps: [
    {
      step: "Modelo de impacto",
      text: "Defino qué se ve cuando funciona: el docente aplica en clase una actividad rediseñada y puede ver el razonamiento de sus estudiantes, no solo el producto.",
    },
    {
      step: "Encuesta breve",
      text: "En la semana 4, los 20 docentes responden tres preguntas: si aplicaron la actividad, cuánto cambió lo que ven del razonamiento y qué lo facilitó o lo frenó.",
    },
    {
      step: "Selección de casos",
      text: "Elijo de 3 a 4 docentes con más éxito y de 3 a 4 que no la aplicaron o la abandonaron.",
    },
    {
      step: "Entrevistas",
      text: "30 minutos con cada uno, con guion y pidiendo evidencia concreta, para confirmar que el éxito es real y entender qué lo explica.",
    },
    {
      step: "Informe y decisión",
      text: "Qué condiciones hacen posible el éxito, qué barreras lo frenan y qué cambiar en la Skill, el taller o el acompañamiento. Se suma a los indicadores para decidir si se escala.",
    },
  ],
  interviewLabel: "Ver el guion de entrevista",
  interviewQuestions: [
    "Cuéntame qué actividad rediseñaste y cómo la aplicaste.",
    "¿Qué viste en el trabajo de tus estudiantes que antes no veías? Muéstrame un ejemplo.",
    "¿En qué momento te ayudó la Skill y en cuál te estorbó?",
    "¿Qué te habría hecho falta para usarla más: tiempo, ejemplos o apoyo de tu institución?",
    "Si no la aplicaste: ¿en qué punto se detuvo y qué lo habría cambiado?",
    "¿La volverías a usar? ¿En qué actividad?",
  ],
  ethicsNote:
    "La participación es voluntaria y con consentimiento. Las muestras de trabajos se anonimizan antes de revisarlas y los resultados se reportan por grupo, sin identificar a docentes ni estudiantes.",
  pmTitle: "Cómo gestioné el proyecto",
  pmIntro:
    "Lo llevé en ciclos cortos, al estilo ágil: definir qué tenía que pasar, probar, revisar y ajustar antes de avanzar.",
  pmItems: [
    {
      label: "Iteraciones",
      text: "Cuatro pruebas y tres rondas de ajuste. Cada falla se registró y se convirtió en una regla de las instrucciones.",
    },
    {
      label: "Criterios de aceptación",
      text: "Cada prueba definía de antemano qué tenía que pasar para aprobarse.",
    },
    {
      label: "Hoja de ruta",
      text: "Un piloto de cuatro semanas con un entregable por semana: encuesta inicial, taller, aplicación en clase y cierre con entrevistas.",
    },
    {
      label: "Decisión con reglas previas",
      text: "Escalar, ajustar o detener según metas de adopción y calidad fijadas antes de empezar, no después de ver los resultados.",
    },
    {
      label: "Riesgos",
      text: "Participación voluntaria con consentimiento, trabajos anonimizados y un límite claro: la Skill propone, no califica.",
    },
  ],
  pmBoardLabel: "Estado del trabajo",
  pmBoard: [
    {
      column: "Hecho",
      items: [
        "Método en tres momentos",
        "App Criterio (prototipo)",
        "Skill de Gemini con cuatro pruebas",
        "Tutorial con subtítulos",
        "Plan de pilotaje y de evaluación",
        "Ficha de pilotaje en PDF",
      ],
    },
    {
      column: "Siguiente",
      items: ["Convocar a 20 docentes voluntarios", "Validar la rúbrica y las encuestas"],
    },
    {
      column: "Después",
      items: ["Aplicar el piloto", "Informe y decisión de escalar"],
    },
  ],
  pmNote:
    "Trabajé sola, así que no es Scrum formal: no hubo equipo, roles ni ceremonias. Usé sus prácticas (ciclos cortos, criterios de aceptación y revisión) porque se ajustan bien a un producto que se prueba con usuarios.",
  evidentTitle: "Leído con EVIDENT",
  evidentIntro:
    "Este kit es el primer caso de prueba de EVIDENT, mi marco de trabajo. Así se ve cada uno de sus ocho principios aquí, y qué falta.",
  evidentLink: { label: "Conocer EVIDENT", href: "/metodo-evident" },
  readTitle: "Qué es real y qué falta",
  readItems: [
    "La Skill está configurada en Gemini y la probé el 10 de noviembre de 2026 con cuatro casos; las conversaciones son públicas.",
    "Las pruebas las diseñé y evalué yo. Todavía no la han usado docentes reales.",
    "El plan de pilotaje y su plan de evaluación son una propuesta: no se han aplicado y no hay resultados. La rúbrica y las encuestas se validarán con el piloto.",
    "Los fundamentos (efecto de generación, metacognición, evaluación del proceso) son hipótesis sustentadas en la literatura, no efectos medidos en este proyecto.",
    "El tutorial usa una voz generada con ElevenLabs a partir de mi guion; las pantallas son capturas reales de las pruebas.",
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
  tutorial: {
    title: "Tutorial for faculty",
    intro:
      "A two-minute video so a teacher understands what the Skill is for, how to use it, and what to do with what it returns. The screens are real captures from the tests. Narration and subtitles are in Spanish; the transcript is translated below.",
    src: "/learning-design/tutorial-pienso-consulto-decido.mp4",
    poster: "/learning-design/tutorial-pienso-consulto-decido-poster.webp",
    label: "Two-minute tutorial on how to use the Pienso, consulto, decido Skill (in Spanish)",
    transcriptLabel: "Video transcript (English translation)",
    transcript: [
      "If AI can write your students' essay in seconds, what are you really assessing?",
      "Banning it doesn't work. Redesigning the activity in three moments does. I think: the student produces their own idea, without AI. I consult: they use AI to ask for critique or a counterexample, not the answer. I decide: they compare, verify, and justify what they accept and what they don't.",
      "That's why I designed a Gemini Skill. You type /pienso-consulto-decido and describe your activity as you run it today: the subject, the task, and how you grade it.",
      "First it tells you how easy it would be for AI to do the task. Here, the risk is high. Then it proposes the redesign. In I think, each student writes their explanation without AI. In I consult, they paste their draft into a template and ask for questions and counterexamples, not for the AI to write for them. In I decide, they write their final version and explain which suggestions they accepted, which they rejected, and why.",
      "So you no longer grade only the product. You review the draft, the consultation, and the final version with a four-criterion rubric: own idea, intentional use of AI, verification, and justified decision.",
      "It also gives you the instructions ready for your students. If you ask it to write the essay for them, it refuses and offers another option. The Skill doesn't grade: you validate every redesign.",
      "Try it with a single activity this week. AI proposes. You and your students decide."
    ],
  },
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
    { when: "Week 4", what: "Final survey and success case interviews." },
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
  pilotSheet: {
    label: "Download the pilot sheet (PDF, 2 pages)",
    href: "/piezas/pilot-sheet-pienso-consulto-decido.pdf",
  },
  evalTitle: "How I will evaluate the pilot",
  evalIntro:
    "I use two models that complement each other. Kirkpatrick tells me how well it worked at each level. Brinkerhoff's Success Case Method explains why it worked for some teachers and not others, and what to change before scaling.",
  kirkTitle: "Kirkpatrick, levels 1 to 3",
  kirkHeads: { question: "What I ask", instrument: "Instrument", when: "When" },
  kirkLevels: [
    {
      level: "1 · Reaction",
      question: "Did they find the Skill useful and easy to use in their subject?",
      instrument: "Final survey: usefulness, ease, and workload on a 1–5 scale, plus one open question.",
      when: "Week 4",
    },
    {
      level: "2 · Learning",
      question: "Can they redesign an activity with all three moments?",
      instrument:
        "Four-criterion rubric applied to the redesigned activity: own idea before AI, purposeful consultation, reasoned decision, and process evidence the teacher can see.",
      when: "Weeks 2 and 3",
    },
    {
      level: "3 · Behavior",
      question: "Did they run it in class, and would they use it again?",
      instrument: "The activity as run, with anonymized student work samples, and a log of Skill use.",
      when: "Weeks 3 and 4",
    },
  ],
  kirkOut:
    "I don't measure level 4 (results) in this pilot: four weeks is too short to see changes in student learning. If it scales, the next step is a semester-long comparison.",
  scmTitle: "Brinkerhoff's Success Case Method",
  scmSteps: [
    {
      step: "Impact model",
      text: "I define what success looks like: a teacher runs a redesigned activity in class and can see students' reasoning, not just the product.",
    },
    {
      step: "Short survey",
      text: "In week 4, all 20 teachers answer three questions: whether they ran the activity, how much it changed what they see of student reasoning, and what helped or got in the way.",
    },
    {
      step: "Case selection",
      text: "I pick 3 to 4 of the most successful teachers and 3 to 4 who didn't run it or dropped it.",
    },
    {
      step: "Interviews",
      text: "30 minutes each, scripted and asking for concrete evidence, to confirm the success is real and understand what explains it.",
    },
    {
      step: "Report and decision",
      text: "Which conditions make success possible, which barriers hold it back, and what to change in the Skill, the workshop, or the support. It feeds the scaling decision together with the indicators.",
    },
  ],
  interviewLabel: "See the interview script",
  interviewQuestions: [
    "Tell me which activity you redesigned and how you ran it.",
    "What did you see in your students' work that you didn't see before? Show me an example.",
    "At what point did the Skill help you, and where did it get in the way?",
    "What would you have needed to use it more: time, examples, or institutional support?",
    "If you didn't run it: where did it stall, and what would have changed that?",
    "Would you use it again? In which activity?",
  ],
  ethicsNote:
    "Participation is voluntary and with consent. Work samples are anonymized before review, and results are reported by group, without identifying teachers or students.",
  pmTitle: "How I managed the project",
  pmIntro:
    "I ran it in short, agile-style cycles: define what had to happen, test, review, and adjust before moving on.",
  pmItems: [
    {
      label: "Iterations",
      text: "Four tests and three rounds of adjustment. Every failure was logged and turned into a rule in the instructions.",
    },
    {
      label: "Acceptance criteria",
      text: "Each test defined in advance what had to happen for it to pass.",
    },
    {
      label: "Roadmap",
      text: "A four-week pilot with one deliverable per week: initial survey, workshop, classroom use, and closing interviews.",
    },
    {
      label: "Decision rules set upfront",
      text: "Scale, adjust, or stop based on adoption and quality targets set before starting, not after seeing the results.",
    },
    {
      label: "Risks",
      text: "Voluntary participation with consent, anonymized work samples, and a clear limit: the Skill suggests, it doesn't grade.",
    },
  ],
  pmBoardLabel: "Work status",
  pmBoard: [
    {
      column: "Done",
      items: [
        "Three-moment method",
        "Criterio app (prototype)",
        "Gemini Skill with four tests",
        "Captioned tutorial",
        "Pilot and evaluation plan",
        "Pilot sheet PDF",
      ],
    },
    {
      column: "Next",
      items: ["Recruit 20 faculty volunteers", "Validate the rubric and surveys"],
    },
    {
      column: "Later",
      items: ["Run the pilot", "Report and scaling decision"],
    },
  ],
  pmNote:
    "I worked alone, so this isn't formal Scrum: there was no team, roles, or ceremonies. I used its practices (short cycles, acceptance criteria, and review) because they fit a product that is tested with users.",
  evidentTitle: "Read through EVIDENT",
  evidentIntro:
    "This kit is the first test case for EVIDENT, my working framework. Here is how each of its eight principles shows up, and what is missing.",
  evidentLink: { label: "Explore EVIDENT", href: "/en/metodo-evident" },
  readTitle: "What is real and what is missing",
  readItems: [
    "The Skill is configured in Gemini, and I tested it on November 10, 2026, with four cases; the conversations are public.",
    "I designed and evaluated the tests myself. Real faculty haven't used it yet.",
    "The pilot plan and its evaluation plan are a proposal: they haven't been run and there are no results. The rubric and surveys will be validated in the pilot.",
    "The rationale (generation effect, metacognition, process-based assessment) is a hypothesis grounded in the literature, not an effect measured in this project.",
    "The tutorial uses a voice generated with ElevenLabs from my script; the screens are real captures from the tests.",
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
