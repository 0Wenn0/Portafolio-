import type { Locale } from "./types";

export type PieceStatus = "draft" | "building";

export type MethodPiece = {
  code: string;
  title: string;
  desc: string;
  notThis: string;
  status: PieceStatus;
  href?: string;
};

type OpenAiMethodContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  readTitle: string;
  readItems: string[];
  piecesTitle: string;
  whatItIs: string;
  whatItIsNot: string;
  statusLabels: Record<PieceStatus, string>;
  openPiece: string;
  pieces: MethodPiece[];
  backToCases: string;
};

const es: OpenAiMethodContent = {
  metaTitle: "Método de adopción de IA, rehecho desde cero — Wendy Ramírez Burgos",
  metaDescription:
    "Piezas nuevas que muestran cómo diagnostico, diseño, escalo y mido la adopción de IA en instituciones: diagnóstico, arquitectura, taller, fichas de razonamiento y alcance.",
  eyebrow: "Caso OpenAI · Método",
  title: "El método, rehecho desde cero",
  intro:
    "Estas piezas no son material de ese programa. Las escribí después, con ejemplos inventados, para mostrar cómo diagnostico, diseño, escalo y mido. Cada una dice qué es y qué no es.",
  readTitle: "Cómo leer esta página",
  readItems: [
    "Todo está diseñado ahora y no se ha pilotado con personas.",
    "Los ejemplos son ilustrativos y los datos, cuando los hay, son sintéticos y están rotulados como tales.",
    "Los estándares CONOCER se usan como criterio de calidad (conforme a). Ninguna pieza dice que esté certificada.",
  ],
  piecesTitle: "Las cinco piezas",
  whatItIs: "Qué es",
  whatItIsNot: "Qué no es",
  statusLabels: {
    draft: "Primera versión escrita",
    building: "En construcción",
  },
  openPiece: "Abrir la pieza",
  pieces: [
    {
      code: "P1",
      title: "Mapa de arquitectura",
      desc: "Una escalera de adopción de IA por rol, contexto y calidad: del taller de 2 horas a un plan nacional, con un núcleo común y adaptación local.",
      notThis: "Un marco propio con ejemplos ilustrativos. No es el plan de ningún programa.",
      status: "building",
    },
    {
      code: "P2",
      title: "Diagnóstico de adopción de IA",
      desc: "Banco de ítems, regla de decisión y plan de análisis para saber dónde está una institución antes de proponerle nada.",
      notThis: "No está pilotado. El informe de ejemplo usará datos sintéticos rotulados como tales.",
      status: "draft",
    },
    {
      code: "P3",
      title: "Taller de 2 horas: verificar y proteger datos al usar IA",
      desc: "Carta descriptiva conforme a los criterios de EC0301, guía de quien facilita, rúbrica de tres criterios e instrumento de satisfacción.",
      notThis: "No está certificado ni se ha impartido. No depende de una herramienta concreta.",
      status: "building",
    },
    {
      code: "P4",
      title: "Cuatro fichas de razonamiento",
      desc: "Problema, restricciones, alternativas, decisión y verificación: entrega escalable, seguimiento y evaluación, gobernanza y actores, y soporte a escala.",
      notThis: "Los problemas son genéricos. No son casos reales ni traen cifras.",
      status: "building",
    },
    {
      code: "P5",
      title: "Alcance y colaboraciones",
      desc: "Qué diseñé, qué impartí y qué apliqué, con las instituciones con las que trabajé y una línea sobre lo que no puedo mostrar.",
      notThis: "No incluye materiales de ese trabajo ni nombres de personas.",
      status: "building",
    },
  ],
  backToCases: "Volver a los casos",
};

const en: OpenAiMethodContent = {
  metaTitle: "AI adoption method, rebuilt from scratch — Wendy Ramírez Burgos",
  metaDescription:
    "New pieces showing how I diagnose, design, scale, and measure AI adoption in institutions: a diagnostic, an architecture, a workshop, reasoning sheets, and scope.",
  eyebrow: "OpenAI case · Method",
  title: "The method, rebuilt from scratch",
  intro:
    "These pieces are not material from that program. I wrote them afterwards, with invented examples, to show how I diagnose, design, scale, and measure. Each one says what it is and what it is not.",
  readTitle: "How to read this page",
  readItems: [
    "Everything is designed now and has not been piloted with people.",
    "Examples are illustrative, and any data is synthetic and labeled as such.",
    "CONOCER standards are used as a quality criterion (aligned to). No piece claims to be certified.",
  ],
  piecesTitle: "The five pieces",
  whatItIs: "What it is",
  whatItIsNot: "What it is not",
  statusLabels: {
    draft: "First draft written",
    building: "In progress",
  },
  openPiece: "Open the piece",
  pieces: [
    {
      code: "P1",
      title: "Architecture map",
      desc: "An AI adoption ladder by role, context, and quality: from a 2-hour workshop to a national plan, with a common core and local adaptation.",
      notThis: "An original framework with illustrative examples. It is not any program's plan.",
      status: "building",
    },
    {
      code: "P2",
      title: "AI adoption diagnostic",
      desc: "An item bank, a decision rule, and an analysis plan to learn where an institution stands before proposing anything.",
      notThis: "Not piloted. The sample report will use synthetic data labeled as such.",
      status: "draft",
    },
    {
      code: "P3",
      title: "2-hour workshop: verifying and protecting data when using AI",
      desc: "A session plan aligned to EC0301 criteria, a facilitator guide, a three-criterion rubric, and a satisfaction instrument.",
      notThis: "Not certified and not delivered. It does not depend on a specific tool.",
      status: "building",
    },
    {
      code: "P4",
      title: "Four reasoning sheets",
      desc: "Problem, constraints, alternatives, decision, and verification: scalable delivery, monitoring and evaluation, governance and stakeholders, and support at scale.",
      notThis: "The problems are generic. They are not real cases and carry no figures.",
      status: "building",
    },
    {
      code: "P5",
      title: "Scope and collaborations",
      desc: "What I designed, delivered, and applied, with the institutions I worked with and a line on what I cannot show.",
      notThis: "It includes no material from that work and no names of people.",
      status: "building",
    },
  ],
  backToCases: "Back to the case studies",
};

export function getOpenAiMethod(locale: Locale): OpenAiMethodContent {
  return locale === "en" ? en : es;
}
