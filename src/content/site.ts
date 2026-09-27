import type { Locale } from "./types";

export const site = {
  name: "Wendy Ramírez Burgos",
  city: "Ciudad de México",
  email: "warb91030@gmail.com",
  linkedin: "https://linkedin.com/in/wendyRB-ai",
  orcid: "0000-0001-9261-4859",
  orcidUrl: "https://orcid.org/0000-0001-9261-4859",
  cvHref: "/cv/Wendy-Ramirez-Burgos-CV.pdf",
  cvHrefEn: "/cv/Wendy-Ramirez-Burgos-CV-EN.pdf",
};

export function getCvHref(locale: Locale): string {
  return locale === "en" ? site.cvHrefEn : site.cvHref;
}

const navEs = [
  { href: "#casos", label: "Casos" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

const navEn = [
  { href: "#casos", label: "Case studies" },
  { href: "#como-trabajo", label: "How I work" },
  { href: "#sobre-mi", label: "About" },
  { href: "#contacto", label: "Contact" },
];

export function getNav(locale: Locale) {
  return locale === "en" ? navEn : navEs;
}

const heroEs = {
  eyebrow: "Wendy Ramírez Burgos · Neuropsicóloga y científica de datos",
  title: "Change Management y adopción de IA a escala.",
  subtitle:
    "Diseño estrategias de adopción, programas de aprendizaje y experiencias tecnológicas basadas en cómo las personas aprenden, deciden y cambian.",
  tags: [
    "Adopción de IA",
    "Aprendizaje y EdTech",
    "Datos, IA responsable y comportamiento",
  ],
};

const heroEn = {
  eyebrow: "Wendy Ramírez Burgos · Neuropsychologist & data scientist",
  title: "Change Management and AI adoption at scale.",
  subtitle:
    "I design adoption strategies, learning programs, and technology experiences based on how people learn, decide, and change.",
  tags: [
    "AI adoption",
    "Learning & EdTech",
    "Data, responsible AI & behavior",
  ],
};

export function getHero(locale: Locale) {
  return locale === "en" ? heroEn : heroEs;
}

const moreWorkEs = [
  {
    label: "Investigación",
    text: "Publicaciones en Springer y Dementia & Neuropsychologia",
  },
  {
    label: "Comunidad",
    text: "Women Techmakers y mentoría STEM",
  },
];

const moreWorkEn = [
  {
    label: "Research",
    text: "Publications in Springer and Dementia & Neuropsychologia",
  },
  {
    label: "Community",
    text: "Women Techmakers and STEM mentoring",
  },
];

export function getMoreWork(locale: Locale) {
  return locale === "en" ? moreWorkEn : moreWorkEs;
}
