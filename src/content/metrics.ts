import type { Locale, Metric } from "./types";

const metricsEs: Metric[] = [
  {
    value: "+3,000",
    aside: "participantes",
    label:
      "en programas de formación en IA con gobierno, universidades y empresas",
    case: "Programa OpenAI",
    mide: "Participantes en talleres y programas de formación en IA",
    periodo: "Julio de 2025 a febrero de 2026",
    contribucion:
      "Diseño y facilitación de los programas; coordinación con instituciones",
    fuente: "Registros por cohorte",
    limite: "Falta separar participantes únicos de asistencias",
  },
  {
    value: "30%",
    aside: "desde 8%",
    label: "de apertura en las convocatorias a programas formativos",
    case: "INFP",
    mide: "Porcentaje de correos de convocatoria abiertos",
    periodo:
      "Abril de 2023 a julio de 2025: del inicio al cierre de mi gestión",
    contribucion:
      "Como analista de datos y encargada de marketing digital: segmentación de la base, automatizaciones y pipelines de envío, y copys y diseño con criterios de UX",
    fuente: "Reportes de campañas en Mailchimp",
    limite: "Mide apertura, no inscripción",
  },
  {
    value: "15",
    aside: "módulos",
    label:
      "en el tablero de adopción institucional de SISAP: actores, ruta de decisión, riesgos y ficha regulatoria",
    case: "SISAP Recover AI",
    mide: "Alcance del análisis de adopción institucional",
    periodo: "Versión 0.2, septiembre de 2026",
    contribucion:
      "Diseño y análisis completos del tablero: producto, estrategia y adopción institucional",
    fuente: "Tablero institucional SISAP v0.2",
    limite: "Mide el alcance del análisis, no la adopción lograda",
  },
];

const metricsEn: Metric[] = [
  {
    value: "3,000+",
    aside: "participants",
    label: "in AI training programs with government, universities, and companies",
    case: "OpenAI Program",
    mide: "Participants in AI training workshops and programs",
    periodo: "July 2025 to February 2026",
    contribucion: "Program design and facilitation; coordination with institutions",
    fuente: "Per-cohort records",
    limite: "Still need to separate unique participants from attendances",
  },
  {
    value: "30%",
    aside: "from 8%",
    label: "open rate on training-program invitations",
    case: "INFP",
    mide: "Percentage of invitation emails opened",
    periodo: "April 2023 to July 2025: from the start to the end of my tenure",
    contribucion:
      "As data analyst and digital marketing lead: base segmentation, automations and send pipelines, and copy and design with UX criteria",
    fuente: "Mailchimp campaign reports",
    limite: "Measures opens, not enrollment",
  },
  {
    value: "15",
    aside: "modules",
    label:
      "in SISAP's institutional-adoption dashboard: stakeholders, decision path, risks, and regulatory profile",
    case: "SISAP Recover AI",
    mide: "Scope of the institutional-adoption analysis",
    periodo: "Version 0.2, September 2026",
    contribucion:
      "Full design and analysis of the dashboard: product, strategy, and institutional adoption",
    fuente: "SISAP institutional dashboard v0.2",
    limite: "Measures the analysis's scope, not adoption achieved",
  },
];

export function getMetrics(locale: Locale): Metric[] {
  return locale === "en" ? metricsEn : metricsEs;
}
