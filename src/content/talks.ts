import type { Locale } from "./types";

export type TalkLink = { label: string; href: string; external?: boolean };
export type TalkItem = {
  kind: string;
  title: string;
  where: string;
  period: string;
  desc: string;
  links: TalkLink[];
  featured?: boolean;
};
export type TalkGroup = { title: string; items: TalkItem[] };

const BECALAS = "https://becalas-observatory.vercel.app";

const talksEs: TalkGroup[] = [
  {
    title: "Charlas",
    items: [
      {
        kind: "Charla",
        title: "De la idea al pitch",
        where: "Nodo Cero, hackathon de Women Techmakers Santa Cruz",
        period: "2026",
        desc: "Para equipos de la hackathon: elegir un problema que valga la pena, escribir la job story, priorizar con MoSCoW, simular un flujo con n8n y contar el proyecto en un minuto.",
        links: [{ label: "Ver la presentación interactiva", href: "/charlas/nodo-cero" }],
        featured: true,
      },
    ],
  },
  {
    title: "Mentorías y docencia",
    items: [
      {
        kind: "Mentoría",
        title: "Mentorías BécALAS",
        where: "Grupo de universitarias en STEM",
        period: "2026",
        desc: "Tres noches: metas SMART, ruta del semestre, CV en formato Harvard y entrevistas. Cada noche tiene su presentación y un kit de herramientas descargables, y cada mentorada recibe un manual según su meta.",
        links: [
          { label: "Micrositio", href: BECALAS, external: true },
          { label: "Noche 1", href: `${BECALAS}/presentacion/`, external: true },
          { label: "Noche 2", href: `${BECALAS}/presentacion/noche-2/`, external: true },
        ],
        featured: true,
      },
      {
        kind: "Docencia",
        title: "Patrones Hermosos–MIT Latin Code",
        where: "Educadora",
        period: "2022 a 2023",
        desc: "Tres cohortes de mujeres de 18 a 30 años, unas 50 participantes: dos de pensamiento computacional y diseño web, y una de Design Thinking.",
        links: [],
        featured: true,
      },
      {
        kind: "Mentoría",
        title: "Bécalas Conectadas",
        where: "Mentora",
        period: "2022 a 2023",
        desc: "Habilidades blandas para tecnología con jóvenes de media superior y superior: 5 grupos de 8 a 10 participantes. Capacitación certificada por International Youth Foundation.",
        links: [],
      },
      {
        kind: "Comunidad",
        title: "Women Techmakers (Google)",
        where: "Ambassador",
        period: "Desde 2026",
        desc: "Embajadora del programa de Google para mujeres en tecnología.",
        links: [],
      },
    ],
  },
];

const talksEn: TalkGroup[] = [
  {
    title: "Talks",
    items: [
      {
        kind: "Talk",
        title: "From idea to pitch",
        where: "Nodo Cero, Women Techmakers Santa Cruz hackathon",
        period: "2026",
        desc: "For hackathon teams: choosing a problem worth solving, writing the job story, prioritizing with MoSCoW, simulating an n8n flow, and pitching the project in one minute.",
        links: [{ label: "See the interactive deck (in Spanish)", href: "/charlas/nodo-cero" }],
        featured: true,
      },
    ],
  },
  {
    title: "Mentoring & teaching",
    items: [
      {
        kind: "Mentoring",
        title: "BécALAS mentoring",
        where: "Group of university women in STEM",
        period: "2026",
        desc: "Three evenings: SMART goals, a semester roadmap, a Harvard-format CV, and interviews. Each evening has its own deck and a kit of downloadable tools, and each mentee gets a guide built around her goal.",
        links: [
          { label: "Microsite (in Spanish)", href: BECALAS, external: true },
          { label: "Evening 1", href: `${BECALAS}/presentacion/`, external: true },
          { label: "Evening 2", href: `${BECALAS}/presentacion/noche-2/`, external: true },
        ],
        featured: true,
      },
      {
        kind: "Teaching",
        title: "Patrones Hermosos–MIT Latin Code",
        where: "Educator",
        period: "2022 to 2023",
        desc: "Three cohorts of women aged 18 to 30, about 50 participants: two on computational thinking and web design, and one on Design Thinking.",
        links: [],
        featured: true,
      },
      {
        kind: "Mentoring",
        title: "Bécalas Conectadas",
        where: "Mentor",
        period: "2022 to 2023",
        desc: "Soft skills for tech with high school and college students: 5 groups of 8 to 10 participants. Training certified by International Youth Foundation.",
        links: [],
      },
      {
        kind: "Community",
        title: "Women Techmakers (Google)",
        where: "Ambassador",
        period: "Since 2026",
        desc: "Ambassador for Google's program for women in tech.",
        links: [],
      },
    ],
  },
];

export function getTalks(locale: Locale): TalkGroup[] {
  return locale === "en" ? talksEn : talksEs;
}

export function getTalksCopy(locale: Locale) {
  return locale === "en"
    ? {
        title: "Talks & mentoring",
        lead: "Where I teach in public what I apply in my projects: deciding with judgment, designing for people, and measuring whether it works.",
        all: "See all talks and mentoring",
        href: "/en/charlas",
      }
    : {
        title: "Charlas y mentorías",
        lead: "Donde enseño en público lo que aplico en mis proyectos: decidir con criterio, diseñar para personas y medir si funciona.",
        all: "Ver todas las charlas y mentorías",
        href: "/charlas",
      };
}
