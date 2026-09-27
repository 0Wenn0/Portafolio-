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
    period: "2022 a 2023",
    desc: "Mentoría en habilidades blandas para tecnología a jóvenes de media superior y superior: 5 grupos de 8 a 10 participantes. Capacitación certificada por International Youth Foundation.",
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
    period: "2022 to 2023",
    desc: "Mentored soft skills for tech to high school and college-age youth: 5 groups of 8 to 10 participants. Training certified by the International Youth Foundation.",
  },
];

export function getCommunity(locale: Locale): CommunityItem[] {
  return locale === "en" ? communityEn : communityEs;
}
