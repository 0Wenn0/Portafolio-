import type { CommunityItem, Locale } from "./types";

const communityEs: CommunityItem[] = [
  {
    title: "Women Techmakers (Google)",
    role: "Ambassador",
    period: "Desde 2026",
    desc: "Me integré en 2026 como embajadora del programa de Google para mujeres en tecnología.",
  },
  {
    title: "Patrones Hermosos–MIT Latin Code",
    role: "Educadora",
    period: "2022 a 2023",
    desc: "Enseñé a mujeres de 18 a 30 años en tres cohortes, unas 50 participantes en total: dos de pensamiento computacional y diseño web, y una de Design Thinking.",
  },
  {
    title: "Bécalas Conectadas",
    role: "Mentora",
    period: "2022 a 2023 y de nuevo en 2026",
    desc: "Mentoría en habilidades blandas para tecnología a jóvenes de media superior y superior. En 2022 y 2023 acompañé 5 grupos de 8 a 10 participantes; en 2026 volví como mentora en la edición actual y diseñé un micrositio accesible para mi grupo (está en el Laboratorio). Capacitación certificada por International Youth Foundation.",
  },
];

const communityEn: CommunityItem[] = [
  {
    title: "Women Techmakers (Google)",
    role: "Ambassador",
    period: "Since 2026",
    desc: "I joined in 2026 as an ambassador for Google's program for women in tech.",
  },
  {
    title: "Patrones Hermosos–MIT Latin Code",
    role: "Educator",
    period: "2022 to 2023",
    desc: "Taught women aged 18 to 30 across three cohorts, about 50 participants total: two on computational thinking and web design, and one on Design Thinking.",
  },
  {
    title: "Bécalas Conectadas",
    role: "Mentor",
    period: "2022 to 2023, and again in 2026",
    desc: "Mentoring in soft skills for tech for high school and college-age youth. In 2022 and 2023 I guided 5 groups of 8 to 10 participants; in 2026 I returned as a mentor for the current edition and designed an accessible microsite for my group (see the Lab). Training certified by the International Youth Foundation.",
  },
];

export function getCommunity(locale: Locale): CommunityItem[] {
  return locale === "en" ? communityEn : communityEs;
}
