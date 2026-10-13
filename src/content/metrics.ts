import type { Locale, Metric } from "./types";

const metricsEs: Metric[] = [
  {
    value: "+3,000",
    aside: "asistentes",
    label:
      "a talleres de IA con gobierno, legislativo, universidades y empresas",
    case: "Programa OpenAI",
    mide: "Asistentes a talleres de IA, de una sola sesión cada uno",
    periodo: "Julio de 2025 a febrero de 2026",
    contribucion:
      "Diseño y facilitación de los programas; coordinación con instituciones",
    fuente: "Registros por cohorte",
    limite: "Personas únicas porque cada taller fue de una sola sesión; total sin desglose por sector",
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
    compare: {
      from: { label: "Abr 2023", value: 8 },
      to: { label: "Jul 2025", value: 30 },
      ariaLabel: "Apertura de convocatorias: 8% en abril de 2023 y 30% en julio de 2025",
    },
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
    aside: "attendees",
    label: "at AI workshops with government, legislators, universities, and companies",
    case: "OpenAI Program",
    mide: "Attendees at AI workshops, each a single session",
    periodo: "July 2025 to February 2026",
    contribucion: "Program design and facilitation; coordination with institutions",
    fuente: "Per-cohort records",
    limite: "Unique people since each workshop was a single session; one total with no breakdown by sector",
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
    compare: {
      from: { label: "Apr 2023", value: 8 },
      to: { label: "Jul 2025", value: 30 },
      ariaLabel: "Invitation open rate: 8% in April 2023 and 30% in July 2025",
    },
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
