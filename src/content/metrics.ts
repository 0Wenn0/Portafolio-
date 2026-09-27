import type { Metric } from "./types";

export const metrics: Metric[] = [
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
