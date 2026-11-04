import type { LearningDesignItem, Locale } from "./types";

// Sección "Diseño instruccional". Dos grupos:
// - product: productos propios (prototipos publicados).
// - authoring: muestras en herramientas de autoría y LMS (Thinkific, Rise 360,
//   Storyline). El grupo no se muestra mientras no tenga elementos.
// Regla: solo se afirma lo verificado; el valor pedagógico va como hipótesis
// sustentada hasta que haya un piloto medido.

const learningDesignEs: LearningDesignItem[] = [
  {
    group: "product",
    title: "Criterio",
    video: {
      src: "/learning-design/criterio-demo.mp4",
      poster: "/learning-design/criterio-demo-poster.webp",
      label: "Video de 32 segundos que recorre el flujo de Criterio",
      transcriptLabel: "Texto del video",
      transcript: [
        "¿Quién decide? La IA solo sugiere.",
        "Paso 1, Pienso: «Antes de preguntar, piensa tú». El docente escribe su idea antes de ver cualquier sugerencia; por ejemplo, equipos que analizan un caso real, calculan VPN y TIR a mano y después contrastan con la IA.",
        "Paso 2, Consulto: «Tu idea, frente a otras». Tres propuestas de la IA: debate de dos posturas, detectives del error y rompecabezas de expertos. Hasta tres, sin obligación de quedarse con ninguna.",
        "Paso 3, Decido: «Nada se guarda sin tu aprobación». El docente conserva, edita, combina o rechaza cada propuesta y lo justifica en una oración.",
        "Paso 4, Reflexiono: aportó el docente la idea inicial, el cálculo a mano y la justificación; aportó la IA la dinámica de detectives y una rúbrica de tres niveles.",
        "Cierre: «Tú decides. La IA sugiere». Criterio, para docentes universitarios.",
      ],
    },
    kind: "App para docentes universitarios",
    tools: "Replit · IA generativa",
    desc: "Herramienta para que docentes universitarios diseñen actividades de aprendizaje con IA sin dejarle a la IA el juicio pedagógico. Está pensada para cualquier carrera: lo central es el criterio del docente, no un banco de casos de una disciplina. No tiene puntos, insignias ni cuentas; la biblioteca de actividades se guarda solo en el navegador.",
    flow: [
      {
        step: "Pienso",
        text: "Describe su clase (materia, nivel y objetivo) y escribe su propia idea de actividad. La IA no ve nada hasta que termina.",
      },
      {
        step: "Consulto",
        text: "Ve hasta tres propuestas de la IA junto a su idea, para comparar sin saturarse. Si no le sirven, pide otra.",
      },
      {
        step: "Decido",
        text: "Conserva, combina o rechaza cada parte y explica en una oración por qué. Nada se guarda sin su aprobación.",
      },
      {
        step: "Reflexiono",
        text: "Ve qué aportó él, qué aportó la IA y qué practicó en la sesión.",
      },
    ],
    lenses: [
      {
        title: "Diseño instruccional",
        points: [
          "Diseño inverso: parte del objetivo, no de la primera actividad que proponga la IA.",
          "Hace visibles las decisiones de diseño para que el razonamiento se pueda revisar.",
          "Coincide con el marco de competencias en IA para docentes de la UNESCO (2024), que separa usar la IA de evaluar críticamente lo que produce.",
        ],
      },
      {
        title: "Neuropsicología",
        points: [
          "Efecto de generación: lo que uno produce antes de recibir ayuda se procesa con más profundidad.",
          "Delegación cognitiva y sesgo de automatización: si la IA responde primero, uno se ancla en su respuesta y revisa menos.",
          "Funciones ejecutivas: planear, mantener un objetivo, inhibir la aceptación automática y decidir.",
          "Evaluación metacognitiva: «Reflexiono» cierra el ciclo planear, ejecutar y evaluar, y hace consciente la autoría.",
        ],
      },
      {
        title: "Innovación educativa",
        points: [
          "La alfabetización en IA se aprende en el trabajo real del docente, no en un curso aparte.",
          "Cambia la pregunta de «¿qué me hace la IA?» a «¿qué decido yo con ayuda de la IA?».",
        ],
      },
    ],
    compare: {
      caption: "En qué se distingue de las herramientas que generan de inmediato",
      headers: ["Aspecto", "Asistentes que generan de inmediato", "Criterio"],
      rows: [
        ["Punto de partida", "Una plantilla", "La idea y el objetivo del docente"],
        ["Papel de la IA", "Produce el entregable", "Propone opciones"],
        ["Resultado", "Un material listo", "Un material y una decisión razonada"],
        ["Qué desarrolla", "Rapidez", "Criterio profesional y alfabetización en IA"],
        ["Control de errores", "Depende del usuario", "Validaciones en el servidor"],
        ["Cierre", "Se entrega el material", "Reflexión sobre qué aportó el docente, qué aportó la IA y qué se practicó"],
      ],
    },
    contribution:
      "Concepto, diseño pedagógico, flujo de interacción, fundamentos y diseño UX; desarrollo con herramientas asistidas por IA en Replit. Llevé una regla pedagógica al código: si la IA cita normas legales numeradas que el docente no aportó, el servidor rechaza la propuesta y pide otra en lugar de dejar pasar fuentes inventadas.",
    evidence:
      "Prototipo publicado (octubre de 2026) que muestra un método, no una herramienta validada. Los fundamentos son hipótesis sustentadas en la literatura; falta un piloto con docentes para medir cuántas propuestas modifican o rechazan y cómo justifican sus decisiones.",
    links: [
      {
        label: "Abrir Criterio",
        href: "https://criterio-pedagogico-wennai.replit.app",
      },
    ],
  },
  {
    group: "product",
    title: "Pactos de ceniza",
    kind: "Juego multijugador de aprendizaje",
    tools: "JavaScript · Netlify · herramientas de OpenAI",
    desc: "Juego bilingüe en tiempo real para 2 a 8 personas, de 25 a 30 minutos y un dispositivo por jugador. En cada misión de ciencia ficción, la tripulación toma cuatro decisiones enlazadas y cada una pasa por cuatro fases: explorar la evidencia, debatir, emitir un veredicto y revisar el impacto. Cada quien recibe un rol con información privada e intereses propios. El cierre no premia una respuesta correcta: pregunta qué midió el sistema, qué omitió, quién se benefició y quién cargó el costo.",
    image: "/learning-design/pactos-partida.webp",
    imageAlt:
      "Partida de Pactos de ceniza en la misión «La cuarentena de Kestrel»: fases Explorar, Debatir, Veredicto e Impacto; acciones para reunir evidencia; un informe privado del rol de auditor de registros, y los indicadores de la colonia (seguridad, confianza y autonomía).",
    lenses: [
      {
        title: "Objetivos de aprendizaje",
        points: [
          "Alfabetización algorítmica y pensamiento crítico.",
          "Razonamiento ético, deliberación y negociación.",
          "Reflexión sobre consecuencias: qué te haría cambiar de opinión.",
        ],
      },
    ],
    contribution:
      "Concepto, objetivos de aprendizaje, narrativa, mecánicas y diseño UX; desarrollo con herramientas asistidas por IA. Tras un primer playtest con cuatro personas, rediseñé la entrada con un tutorial porque no quedaba claro cómo decidir ni cómo funcionaban los turnos.",
    evidence:
      "Prototipo jugable. La segunda versión todavía no se ha probado; el impacto educativo es un objetivo, no un resultado medido.",
    links: [
      { label: "Jugar", href: "https://pactsafterthe-fall.netlify.app/" },
      {
        label: "Ver repositorio",
        href: "https://github.com/0Wenn0/pactsafterthefall",
      },
    ],
  },
];

const learningDesignEn: LearningDesignItem[] = [
  {
    group: "product",
    title: "Criterio",
    video: {
      src: "/learning-design/criterio-demo.mp4",
      poster: "/learning-design/criterio-demo-poster.webp",
      label: "32-second video walking through the Criterio flow (on-screen text in Spanish)",
      transcriptLabel: "Video text, in English",
      transcript: [
        "Who decides? The AI only suggests.",
        "Step 1, I think: \"Before you ask, think for yourself.\" The teacher writes their idea before seeing any suggestion; for example, teams analyze a real case, calculate NPV and IRR by hand, then compare with the AI.",
        "Step 2, I consult: \"Your idea, next to others.\" Three AI proposals: a two-sided debate, error detectives, and an expert jigsaw. Up to three, with no obligation to keep any.",
        "Step 3, I decide: \"Nothing is saved without your approval.\" The teacher keeps, edits, combines, or rejects each proposal and justifies it in one sentence.",
        "Step 4, I reflect: the teacher contributed the initial idea, the hand calculation, and the justification; the AI contributed the detectives activity and a three-level rubric.",
        "Closing: \"You decide. The AI suggests.\" Criterio, for university faculty.",
      ],
    },
    kind: "App for university faculty",
    tools: "Replit · generative AI",
    desc: "A tool that helps university faculty design learning activities with AI without handing their pedagogical judgment to the AI. It is meant for any field: the core is the teacher's judgment, not a case bank for one discipline. No points, badges, or accounts; the activity library is stored only in the browser.",
    flow: [
      {
        step: "I think",
        text: "The teacher describes the class (subject, level, and objective) and writes their own activity idea. The AI sees nothing until they finish.",
      },
      {
        step: "I consult",
        text: "They see up to three AI proposals next to their idea, to compare without overload. If none fit, they ask for another.",
      },
      {
        step: "I decide",
        text: "They keep, combine, or reject each part and explain why in one sentence. Nothing is saved without their approval.",
      },
      {
        step: "I reflect",
        text: "They see what they contributed, what the AI contributed, and what they practiced.",
      },
    ],
    lenses: [
      {
        title: "Instructional design",
        points: [
          "Backward design: it starts from the objective, not from the AI's first suggestion.",
          "It makes design decisions visible so the reasoning can be reviewed.",
          "It aligns with UNESCO's AI competency framework for teachers (2024), which separates using AI from critically evaluating its output.",
        ],
      },
      {
        title: "Neuropsychology",
        points: [
          "Generation effect: what you produce before getting help is processed more deeply.",
          "Cognitive offloading and automation bias: when the AI answers first, people anchor on it and review less.",
          "Executive functions: planning, holding a goal, inhibiting automatic acceptance, and deciding.",
          "Metacognitive evaluation: \"I reflect\" closes the plan–do–evaluate loop and makes authorship conscious.",
        ],
      },
      {
        title: "Educational innovation",
        points: [
          "AI literacy is learned inside the teacher's real work, not in a separate course.",
          "It shifts the question from \"what does AI do for me?\" to \"what do I decide with AI's help?\"",
        ],
      },
    ],
    compare: {
      caption: "How it differs from tools that generate right away",
      headers: ["Aspect", "Generate-first assistants", "Criterio"],
      rows: [
        ["Starting point", "A template", "The teacher's idea and objective"],
        ["Role of AI", "Produces the deliverable", "Proposes options"],
        ["Outcome", "A finished material", "A material and a reasoned decision"],
        ["What it builds", "Speed", "Professional judgment and AI literacy"],
        ["Error control", "Up to the user", "Server-side validations"],
        ["Closing", "The material is delivered", "Reflection on what the teacher contributed, what the AI contributed, and what was practiced"],
      ],
    },
    contribution:
      "Concept, pedagogical design, interaction flow, rationale, and UX design; development with AI-assisted tools on Replit. I turned a pedagogical rule into code: if the AI cites numbered legal provisions the teacher didn't supply, the server rejects the proposal and requests a new one instead of letting invented sources through.",
    evidence:
      "Published prototype (October 2026) that demonstrates a method, not a validated tool. The rationale consists of hypotheses grounded in the literature; a pilot with faculty is still needed to measure how many proposals they modify or reject and how they justify their decisions.",
    links: [
      {
        label: "Open Criterio",
        href: "https://criterio-pedagogico-wennai.replit.app",
      },
    ],
  },
  {
    group: "product",
    title: "Pacts After the Fall",
    kind: "Multiplayer learning game",
    tools: "JavaScript · Netlify · OpenAI tools",
    desc: "A bilingual real-time game for 2 to 8 players, 25 to 30 minutes, one device each. In each sci-fi mission the crew makes four linked decisions, and each one moves through four phases: explore the evidence, debate, deliver a verdict, and review the impact. Every player gets a role with private information and their own interests. The ending rewards no right answer: it asks what the system measured, what it left out, who benefited, and who bore the cost.",
    image: "/learning-design/pactos-partida.webp",
    imageAlt:
      "A Pacts After the Fall game in the mission \"The Kestrel quarantine\": Explore, Debate, Final verdict, and Impact phases; actions to gather evidence; a private brief for the records auditor role; and the colony measures (safety, trust, and autonomy).",
    lenses: [
      {
        title: "Learning objectives",
        points: [
          "Algorithmic literacy and critical thinking.",
          "Ethical reasoning, deliberation, and negotiation.",
          "Reflecting on consequences: what would change your mind.",
        ],
      },
    ],
    contribution:
      "Concept, learning objectives, narrative, mechanics, and UX design; development with AI-assisted tools. After a first playtest with four people, I redesigned the opening with a tutorial because how to decide and how turns worked was unclear.",
    evidence:
      "Playable prototype. The second version has not been tested yet; educational impact is a goal, not a measured result.",
    links: [
      { label: "Play", href: "https://pactsafterthe-fall.netlify.app/" },
      {
        label: "View repository",
        href: "https://github.com/0Wenn0/pactsafterthefall",
      },
    ],
  },
];

export function getLearningDesign(locale: Locale): LearningDesignItem[] {
  return locale === "en" ? learningDesignEn : learningDesignEs;
}
