import type { Locale } from "./types";

export type PieceStatus = "draft" | "building";

export type ScopeRow = { what: string; who: string; limit: string };

export type ScopeTable = {
  heads: { what: string; who: string; limit: string };
  rows: ScopeRow[];
};

export type MethodPiece = {
  code: string;
  title: string;
  desc: string;
  notThis: string;
  status: PieceStatus;
  href?: string;
  table?: ScopeTable;
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
      notThis: "Un marco propio con un caso inventado. No es el plan de ningún programa ni está validado con grupos.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "P2",
      title: "Diagnóstico de adopción de IA",
      desc: "Banco de ítems, regla de decisión y plan de análisis para saber dónde está una institución antes de proponerle nada.",
      notThis: "No está pilotado. El informe de ejemplo usará datos sintéticos rotulados como tales.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
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
      notThis: "Los problemas son genéricos. No son casos reales, no traen cifras y no se han aplicado.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "P5",
      title: "Alcance y colaboraciones",
      desc: "Qué diseñé, qué impartí y qué apliqué, con las instituciones con las que trabajé y una línea sobre lo que no puedo mostrar.",
      notThis: "No incluye materiales de ese trabajo ni nombres de personas.",
      status: "draft",
      table: {
        heads: { what: "Qué hice", who: "Con quién", limit: "Límite" },
        rows: [
          {
            what: "Impartí talleres de 2 horas sobre IA.",
            who: "Docentes de educación media superior.",
            limit: "No doy número de talleres ni de asistentes.",
          },
          {
            what: "Impartí talleres de una sola sesión, cada uno con un kit de salida adaptado a su audiencia.",
            who: "COSFAC, DGCyVE, SECTUR, Secretaría de Economía, Tec de Monterrey, Universidad Regiomontana, Tecnológico de Yucatán, startups y pymes, Cámara de Diputados y Senado.",
            limit: "El kit se entregó solo a quienes asistieron y no lo publico.",
          },
          {
            what: "Facilité tres cohortes con SECTUR, de unas 60 personas cada una: docentes, empresas de turismo y personal de la secretaría.",
            who: "SECTUR.",
            limit: "Cifra aproximada, cerca de 180 personas en total.",
          },
          {
            what: "Redacté los diagnósticos: reuniones con encargados de área y un formulario con escala Likert, con pre y post por capacitación.",
            who: "Las mismas instituciones de los talleres.",
            limit: "No conservo los archivos, así que no doy cifra de respuestas. TecNM y la Secretaría de Educación Superior no lo recibieron.",
          },
          {
            what: "Medí la satisfacción de los asistentes: 9.39 sobre 10 en DGCyVE y 8.0 sobre 10 en COSFAC.",
            who: "DGCyVE y COSFAC.",
            limit: "Entre 80 y 100 respuestas por institución, sin número exacto. Mide satisfacción, no aprendizaje.",
          },
          {
            what: "Redacté policy briefs y decks para cada institución participante, junto con el mapeo de actores de cada una.",
            who: "Las instituciones participantes y, como documentos internos, la consultora.",
            limit: "No los publico.",
          },
          {
            what: "Diseñé planes de adopción de IA por niveles, de la alfabetización a los agentes, adaptados a cada institución: para TecNM, una plataforma educativa con KPIs, proyectada para 30,000 docentes y entre 50,000 y 100,000 estudiantes; para la Secretaría de Educación Superior, un programa de 30 horas para integrarse a Saberes MX; para la SEMS, un programa para preparatorias.",
            who: "TecNM, Secretaría de Educación Superior y SEMS.",
            limit: "Las autoridades de TecNM y de la Secretaría de Educación Superior aprobaron sus planes. Ninguno se ejecutó y las cifras son metas proyectadas.",
          },
          {
            what: "Más de 3,000 asistentes a talleres.",
            who: "Sectores productivo, de gobierno, legislativo y educativo.",
            limit: "Son personas únicas porque cada taller fue de una sola sesión. Es un total, sin desglose por sector.",
          },
        ],
      },
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
      notThis: "An original framework with an invented case. It is not any program's plan and has not been validated with groups. The document is in Spanish.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "P2",
      title: "AI adoption diagnostic",
      desc: "An item bank, a decision rule, and an analysis plan to learn where an institution stands before proposing anything.",
      notThis: "Not piloted. The document is in Spanish. The sample report will use synthetic data labeled as such.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
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
      notThis: "The problems are generic. They are not real cases, carry no figures, and have not been applied. The document is in Spanish.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "P5",
      title: "Scope and collaborations",
      desc: "What I designed, delivered, and applied, with the institutions I worked with and a line on what I cannot show.",
      notThis: "It includes no material from that work and no names of people.",
      status: "draft",
      table: {
        heads: { what: "What I did", who: "With whom", limit: "Limit" },
        rows: [
          {
            what: "I delivered 2-hour AI workshops.",
            who: "Upper-secondary teachers.",
            limit: "I give no number of workshops or attendees.",
          },
          {
            what: "I delivered single-session workshops, each with a leave-behind kit adapted to its audience.",
            who: "COSFAC, DGCyVE, SECTUR, the Ministry of Economy, Tec de Monterrey, Universidad Regiomontana, Tecnológico de Yucatán, startups and SMEs, the Chamber of Deputies, and the Senate.",
            limit: "The kit went only to attendees and I do not publish it.",
          },
          {
            what: "I facilitated three cohorts with SECTUR, about 60 people each: teachers, tourism businesses, and staff of the ministry.",
            who: "SECTUR.",
            limit: "Approximate figure, around 180 people in total.",
          },
          {
            what: "I wrote the diagnostics: meetings with area leads and a Likert-scale form, with pre and post for each training.",
            who: "The same institutions as the workshops.",
            limit: "I did not keep the files, so I give no response count. TecNM and the Secretariat of Higher Education did not receive it.",
          },
          {
            what: "I measured attendee satisfaction: 9.39 out of 10 at DGCyVE and 8.0 out of 10 at COSFAC.",
            who: "DGCyVE and COSFAC.",
            limit: "Between 80 and 100 responses per institution, no exact count. It measures satisfaction, not learning.",
          },
          {
            what: "I wrote policy briefs and decks for each participating institution, alongside a stakeholder map for each.",
            who: "The participating institutions and, as internal documents, the consultancy.",
            limit: "I do not publish them.",
          },
          {
            what: "I designed tiered AI adoption plans, from literacy to agents, adapted to each institution: for TecNM, an education platform with KPIs, projected for 30,000 teachers and 50,000 to 100,000 students; for the Secretariat of Higher Education, a 30-hour program to plug into Saberes MX; for SEMS, a program for upper-secondary schools.",
            who: "TecNM, the Secretariat of Higher Education, and SEMS.",
            limit: "Authorities at TecNM and the Secretariat of Higher Education approved their plans. None was carried out, and the figures are projected targets.",
          },
          {
            what: "Over 3,000 workshop attendees.",
            who: "Productive, government, legislative, and education sectors.",
            limit: "Unique people, since each workshop was a single session. One total, with no breakdown by sector.",
          },
        ],
      },
    },
  ],
  backToCases: "Back to the case studies",
};

export function getOpenAiMethod(locale: Locale): OpenAiMethodContent {
  return locale === "en" ? en : es;
}
