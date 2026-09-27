import type { LabItem, Locale } from "./types";

const labEs: LabItem[] = [
  {
    title: "Aula",
    desc: "Prototipo navegable de un ecosistema de aprendizaje con IA en cinco etapas, de descubrir a transformar: juegos de orientación, cursos por categoría, un asistente para protocolos de investigación y un generador de evaluaciones por niveles cognitivos.",
    contribution:
      "Concepto, arquitectura de contenido, diseño UX/UI y desarrollo con herramientas asistidas por IA, publicado en Vercel.",
    href: "https://v0-aulamicropolitica.vercel.app",
    image: "/lab/aula.jpg",
    imageAlt:
      "Portada de Aula con el titular «El futuro del aprendizaje, diseñado con IA y rigor académico»",
  },
  {
    title: "Cognitive Observatory",
    desc: "Hero interactivo de un metaportafolio experimental, en desarrollo, que explora cómo se conectan las ideas.",
    contribution:
      "Concepto, dirección de arte, diseño y desarrollo asistido por IA con Three.js.",
    href: "https://cognitive-observatory.vercel.app",
    image: "/lab/cognitive-observatory.jpg",
    imageAlt:
      "Hero de Cognitive Observatory con el titular «Diseño puentes cognitivos donde tecnología, neurociencia y humanidad convergen»",
  },
];

const labEn: LabItem[] = [
  {
    title: "Aula",
    desc: "Navigable prototype of an AI-powered learning ecosystem in five stages, from discover to transform: orientation games, courses by category, a research-protocol assistant, and an assessment generator by cognitive level.",
    contribution:
      "Concept, content architecture, UX/UI design, and development with AI-assisted tools, published on Vercel.",
    href: "https://v0-aulamicropolitica.vercel.app",
    image: "/lab/aula.jpg",
    imageAlt:
      "Aula homepage with the headline \"The future of learning, designed with AI and academic rigor\"",
  },
  {
    title: "Cognitive Observatory",
    desc: "Interactive hero of an experimental metaportfolio, in progress, exploring how ideas connect.",
    contribution:
      "Concept, art direction, design, and AI-assisted development with Three.js.",
    href: "https://cognitive-observatory.vercel.app",
    image: "/lab/cognitive-observatory.jpg",
    imageAlt:
      "Cognitive Observatory hero with the headline \"Designing cognitive bridges where technology, neuroscience, and humanity converge\"",
  },
];

export function getLab(locale: Locale): LabItem[] {
  return locale === "en" ? labEn : labEs;
}
