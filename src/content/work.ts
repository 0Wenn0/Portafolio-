import type { Locale } from "./types";

/* Galería de trabajo del inicio: una miniatura real, una línea y un enlace por pieza.
 * El detalle vive en cada caso o en el propio producto. */
export type WorkItem = {
  title: string;
  kind: string;
  line: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
  internal?: boolean;
  secondary?: { label: string; href: string; internal?: boolean };
};

const workEs: WorkItem[] = [
  {
    title: "El cuarto de Mary",
    kind: "Diseño instruccional · Planeación completa",
    line: "Curso de 40 minutos sobre criterio e IA, planeado de punta a punta: perfilamiento, objetivos con Bloom y Marzano, escuadra invertida, Gagné y rúbrica.",
    image: "/learning-design/cuarto-de-mary-poster.webp",
    imageAlt: "Cuarto gris con una sola franja roja que entra por la puerta",
    href: "/casos/el-cuarto-de-mary",
    linkLabel: "Ver el caso",
    internal: true,
  },
  {
    title: "Criterio",
    kind: "Diseño instruccional · Herramienta",
    line: "Para que docentes universitarios diseñen actividades con IA sin cederle a la IA el juicio pedagógico.",
    image: "/learning-design/criterio-demo-poster.webp",
    imageAlt: "Pantalla de Criterio",
    href: "https://criterio-pedagogico-wennai.replit.app",
    linkLabel: "Abrir Criterio",
    secondary: { label: "Ver el caso", href: "/casos/pienso-consulto-decido", internal: true },
  },
  {
    title: "Pactos de ceniza",
    kind: "Aprendizaje basado en juego",
    line: "Juego bilingüe en tiempo real (2 a 8 personas) que cierra preguntando qué midió el sistema, qué omitió y quién cargó el costo.",
    image: "/learning-design/pactos-partida.webp",
    imageAlt: "Pantalla de una partida de Pactos de ceniza",
    href: "https://pactsafterthe-fall.netlify.app/",
    linkLabel: "Jugar",
    secondary: { label: "Repositorio", href: "https://github.com/0Wenn0/pactsafterthefall" },
  },
  {
    title: "Observatorio de mentoría BécALAS",
    kind: "UX/UI · Accesibilidad",
    line: "Micrositio para mi grupo de mentoradas de BécALAS 2026: misiones, metas SMART y un astrolabio descargable. 0 violaciones en axe-core.",
    image: "/lab/becalas-observatory.jpg",
    imageAlt: "Portada del micrositio con un cielo nocturno, estrellas y un cometa",
    href: "https://becalas-observatory.vercel.app",
    linkLabel: "Abrir el micrositio",
    secondary: { label: "Cómo lo diseñé", href: "https://becalas-observatory.vercel.app/caso" },
  },
  {
    title: "Pienso, consulto, decido",
    kind: "Diseño instruccional · Skill de Gemini",
    line: "Una Skill de Gemini: el docente describe su actividad y recibe diagnóstico de riesgo, rediseño, rúbrica e instrucciones. Con video tutorial.",
    image: "/learning-design/tutorial-pienso-consulto-decido-poster.webp",
    imageAlt: "Portada del video tutorial del método Pienso, consulto, decido",
    href: "/casos/pienso-consulto-decido",
    linkLabel: "Ver el caso",
    internal: true,
  },
  {
    title: "Aula",
    kind: "Prototipo · Ecosistema de aprendizaje",
    line: "Prototipo navegable de aprendizaje con IA en cinco etapas, de descubrir a transformar.",
    image: "/lab/aula.jpg",
    imageAlt: "Portada de Aula con el titular «El futuro del aprendizaje, diseñado con IA y rigor académico»",
    href: "https://v0-aulamicropolitica.vercel.app",
    linkLabel: "Abrir Aula",
  },
  {
    title: "Cognitive Observatory",
    kind: "Experimento · Three.js",
    line: "Hero interactivo de un metaportafolio en desarrollo que explora cómo se conectan las ideas.",
    image: "/lab/cognitive-observatory.jpg",
    imageAlt: "Hero de Cognitive Observatory con una red de ideas conectadas",
    href: "https://cognitive-observatory.vercel.app",
    linkLabel: "Explorar",
  },
];

const workEn: WorkItem[] = [
  {
    title: "Mary's Room",
    kind: "Instructional design · Complete plan",
    line: "A 40-minute course on judgment and AI, planned end to end: learner profile, objectives with Bloom and Marzano, competency mapping, Gagné and a rubric.",
    image: "/learning-design/cuarto-de-mary-poster.webp",
    imageAlt: "A gray room with a single red strip of light coming through the door",
    href: "/en/casos/el-cuarto-de-mary",
    linkLabel: "See the case",
    internal: true,
  },
  {
    title: "Criterio",
    kind: "Instructional design · Tool",
    line: "So university faculty can design activities with AI without handing their pedagogical judgment to it.",
    image: "/learning-design/criterio-demo-poster.webp",
    imageAlt: "Criterio screen",
    href: "https://criterio-pedagogico-wennai.replit.app",
    linkLabel: "Open Criterio",
    secondary: { label: "See the case", href: "/en/casos/pienso-consulto-decido", internal: true },
  },
  {
    title: "Pacts After the Fall",
    kind: "Game-based learning",
    line: "A bilingual real-time game (2 to 8 players) that ends by asking what the system measured, what it left out, and who bore the cost.",
    image: "/learning-design/pactos-partida.webp",
    imageAlt: "Screen from a Pacts After the Fall session",
    href: "https://pactsafterthe-fall.netlify.app/",
    linkLabel: "Play",
    secondary: { label: "Repository", href: "https://github.com/0Wenn0/pactsafterthefall" },
  },
  {
    title: "BécALAS Mentoring Observatory",
    kind: "UX/UI · Accessibility",
    line: "Microsite for my BécALAS 2026 mentoring group: missions, SMART goals and a downloadable astrolabe. 0 axe-core violations.",
    image: "/lab/becalas-observatory.jpg",
    imageAlt: "Microsite homepage with a night sky, stars and a comet",
    href: "https://becalas-observatory.vercel.app",
    linkLabel: "Open the microsite",
    secondary: { label: "How I designed it", href: "https://becalas-observatory.vercel.app/caso" },
  },
  {
    title: "I think, I consult, I decide",
    kind: "Instructional design · Gemini Skill",
    line: "A Gemini Skill: teachers describe an activity and get a risk diagnosis, a redesign, a rubric and student instructions. With a video tutorial.",
    image: "/learning-design/tutorial-pienso-consulto-decido-poster.webp",
    imageAlt: "Cover of the I think, I consult, I decide video tutorial",
    href: "/en/casos/pienso-consulto-decido",
    linkLabel: "See the case",
    internal: true,
  },
  {
    title: "Aula",
    kind: "Prototype · Learning ecosystem",
    line: "Navigable prototype of AI-powered learning in five stages, from discover to transform.",
    image: "/lab/aula.jpg",
    imageAlt: "Aula homepage with the headline \"The future of learning, designed with AI and academic rigor\"",
    href: "https://v0-aulamicropolitica.vercel.app",
    linkLabel: "Open Aula",
  },
  {
    title: "Cognitive Observatory",
    kind: "Experiment · Three.js",
    line: "Interactive hero of a metaportfolio in progress that explores how ideas connect.",
    image: "/lab/cognitive-observatory.jpg",
    imageAlt: "Cognitive Observatory hero with a network of connected ideas",
    href: "https://cognitive-observatory.vercel.app",
    linkLabel: "Explore",
  },
];

export function getWork(locale: Locale): WorkItem[] {
  return locale === "en" ? workEn : workEs;
}
