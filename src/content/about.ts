import type { Locale, TimelineItem } from "./types";

export const aboutIntroEs =
  "Empecé en la neuropsicología clínica, estudiando cómo aprende y cambia el cerebro. Llevé ese conocimiento al diseño de programas educativos y, después, a la adopción de IA con más de 3,000 participantes. En paralelo, construyo comunidad en tecnología y educación STEM.";

export const aboutIntroEn =
  "I started in clinical neuropsychology, studying how the brain learns and changes. I carried that knowledge into instructional design and, later, into AI adoption with more than 3,000 participants. Alongside that, I build community in tech and STEM education.";

export function getAboutIntro(locale: Locale): string {
  return locale === "en" ? aboutIntroEn : aboutIntroEs;
}

const timelineEs: TimelineItem[] = [
  {
    years: "2013 – 2023",
    text: "Neuropsicología clínica e investigación en ISSSTE, UNAM e INNN",
  },
  { years: "2023 – 2025", text: "Diseño tecnopedagógico en el INFP" },
  {
    years: "2025 – 2026",
    text: "Políticas Públicas y Programas Educativos, OpenAI (vía Aurora Policy Solutions)",
  },
  {
    years: "2026",
    text: "Cofundadora de SISAP Recover AI: producto, estrategia y adopción institucional",
  },
  {
    years: "2026",
    text: "Arquitecta de datos de investigación en exposoma y cognición, con el Grupo de Investigación en Neurociencia y Salud Mental, Universidad Científica del Sur",
  },
];

const timelineEn: TimelineItem[] = [
  {
    years: "2013 – 2023",
    text: "Clinical neuropsychology and research at ISSSTE, UNAM, and INNN",
  },
  { years: "2023 – 2025", text: "Instructional design at INFP" },
  {
    years: "2025 – 2026",
    text: "Public Policy and Educational Programs, OpenAI (via Aurora Policy Solutions)",
  },
  {
    years: "2026",
    text: "Co-founder of SISAP Recover AI: product, strategy, and institutional adoption",
  },
  {
    years: "2026",
    text: "Research data architect for a study on exposome and cognition, with the Neuroscience and Mental Health Research Group, Universidad Científica del Sur",
  },
];

export function getTimeline(locale: Locale): TimelineItem[] {
  return locale === "en" ? timelineEn : timelineEs;
}

const educationEs = [
  "Licenciatura en Psicología, UNAM, con cédula profesional",
  "Maestría en Neuropsicología Clínica, UNAM: concluida, en proceso de titulación",
  "Diplomado en Ciencia de Datos (Bedu y Santander) y Google Data Analytics Certificate",
  "Diplomado en Roles Ágiles Scrum Máster y formación en la metodología ADKAR",
  "Inglés B2 (TOEFL ITP 590)",
];

const educationEn = [
  "B.A. in Psychology, UNAM, licensed professional",
  "M.A. in Clinical Neuropsychology, UNAM: coursework complete, thesis in progress",
  "Data Science diploma (Bedu and Santander) and Google Data Analytics Certificate",
  "Agile Roles / Scrum Master diploma and ADKAR methodology training",
  "English B2 (TOEFL ITP 590)",
];

export function getEducation(locale: Locale): string[] {
  return locale === "en" ? educationEn : educationEs;
}
