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
  pieceLabel: string;
  whatItIs: string;
  whatItIsNot: string;
  statusLabels: Record<PieceStatus, string>;
  openPiece: string;
  pieces: MethodPiece[];
  backToCases: string;
};

const es: OpenAiMethodContent = {
  metaTitle: "El método detrás del programa de adopción de IA — Wendy Ramírez Burgos",
  metaDescription:
    "La lógica y el esqueleto de cómo diagnostico, diseño, escalo y mido la adopción de IA en instituciones: arquitectura, diagnóstico, taller, decisiones de diseño y alcance.",
  eyebrow: "Caso OpenAI · Método",
  title: "El método detrás del programa",
  intro:
    "Aquí muestro cómo pensé y organicé el programa: el esqueleto y la lógica de lo que diseñé y apliqué con instituciones reales. Los planes completos, los materiales y los datos están bajo contrato y no los publico, así que lo que ves está escrito en genérico.",
  readTitle: "Cómo leer esta página",
  readItems: [
    "Lo que hice con las instituciones ocurrió: impartí talleres, apliqué diagnósticos y redacté policy briefs y planes completos. La tabla de alcance dice qué fue y con quién.",
    "Los planes de TecNM y de la Secretaría de Educación Superior se aprobaron y no se implementaron.",
    "La escalera de adopción y las cuatro decisiones de diseño muestran el esqueleto y la lógica de ese trabajo. El diagnóstico y el taller de 2 horas son instrumentos que escribí ahora con esa misma lógica y que aún no he aplicado con este diseño.",
    "Los ejemplos son ilustrativos y los datos, cuando los hay, son sintéticos y están rotulados.",
    "Los estándares CONOCER son un criterio de calidad (conforme a). Ninguna pieza dice estar certificada.",
  ],
  piecesTitle: "Las cinco piezas",
  pieceLabel: "Pieza",
  whatItIs: "Qué es",
  whatItIsNot: "Límites",
  statusLabels: {
    draft: "Primera versión escrita",
    building: "En construcción",
  },
  openPiece: "Abrir la pieza",
  pieces: [
    {
      code: "1",
      title: "Mapa de arquitectura",
      desc: "La escalera de adopción de IA que ordena el programa: del taller de 2 horas a un plan nacional, con un núcleo común y ramas por rol y por área.",
      notThis: "No incluye el plan completo de ninguna institución, que está bajo contrato. El caso de ejemplo es ilustrativo y la escalera no está validada con datos.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "2",
      title: "Diagnóstico de adopción de IA",
      desc: "Banco de ítems, regla de decisión y plan de análisis para saber dónde está una institución antes de proponerle algo.",
      notThis: "Es la versión formal del instrumento y todavía no la he pilotado con un grupo. Los diagnósticos que sí apliqué están en la tabla de alcance. El informe de ejemplo usa datos sintéticos rotulados.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
    },
    {
      code: "3",
      title: "Taller de 2 horas: verificar y proteger datos al usar IA",
      desc: "Carta descriptiva conforme a los criterios de EC0301, guía de quien facilita, rúbrica de tres criterios, seis reactivos de conocimiento e instrumento de satisfacción.",
      notThis: "No está certificado y no lo he impartido con este diseño, aunque sí impartí otros talleres (ver la tabla de alcance). Es un taller nuevo, sin materiales de aquellos, y no depende de una herramienta. El material de apoyo está especificado, no redactado.",
      status: "draft",
      href: "/piezas/taller-verificar-proteger-datos-ia.pdf",
    },
    {
      code: "4",
      title: "Cuatro fichas de razonamiento",
      desc: "Cuatro decisiones de diseño explicadas en el mismo orden (problema, restricciones, alternativas, decisión y verificación): entrega escalable, seguimiento y evaluación, gobernanza y actores, y soporte a escala.",
      notThis: "Están escritas en genérico, sin cifras, nombres ni materiales del programa.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "5",
      title: "Alcance y colaboraciones",
      desc: "Qué diseñé, qué impartí y qué apliqué, y con qué instituciones, más lo que no puedo mostrar.",
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
            what: "Medí el porcentaje de satisfacción de los asistentes: 93.9 % en DGCyVE y 80 % en COSFAC.",
            who: "DGCyVE y COSFAC.",
            limit: "Entre 80 y 100 respuestas por institución, sin número exacto. Mide satisfacción, no aprendizaje.",
          },
          {
            what: "Redacté policy briefs y decks para cada institución participante, junto con el mapeo de actores de cada una.",
            who: "Las instituciones participantes y, como documentos internos, la consultora.",
            limit: "No los publico.",
          },
          {
            what: "Diseñé y entregué desarrollados, con su plan instruccional completo, planes de adopción de IA por niveles, de la alfabetización a los agentes, adaptados a cada institución: para TecNM, una plataforma educativa con KPIs, proyectada para 30,000 docentes y entre 50,000 y 100,000 estudiantes; para la Secretaría de Educación Superior, un programa de 30 horas para integrarse a Saberes MX. Para la SEMS planteé un programa para preparatorias.",
            who: "TecNM, Secretaría de Educación Superior y SEMS.",
            limit: "Las autoridades de TecNM y de la Secretaría de Educación Superior aprobaron sus planes. Se entregaron completos, pero no se implementaron; las cifras son metas proyectadas.",
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
  metaTitle: "The method behind the AI adoption program — Wendy Ramírez Burgos",
  metaDescription:
    "The logic and skeleton of how I diagnose, design, scale, and measure AI adoption in institutions: architecture, diagnostic, workshop, design decisions, and scope.",
  eyebrow: "OpenAI case · Method",
  title: "The method behind the program",
  intro:
    "Here I show how I thought through and organized the program: the skeleton and logic of what I designed and applied with real institutions. The full plans, materials, and data are under contract and I do not publish them, so what you see is written in generic terms.",
  readTitle: "How to read this page",
  readItems: [
    "What I did with the institutions happened: I delivered workshops, applied diagnostics, and wrote policy briefs and complete plans. The scope table says what it was and with whom.",
    "The TecNM and Secretariat of Higher Education plans were approved and not implemented.",
    "The adoption ladder and the four design decisions show the skeleton and logic of that work. The diagnostic and the 2-hour workshop are instruments I wrote now with that same logic and have not yet applied in this design.",
    "Examples are illustrative, and any data is synthetic and labeled as such.",
    "CONOCER standards are a quality criterion (aligned to). No piece claims to be certified.",
  ],
  piecesTitle: "The five pieces",
  pieceLabel: "Piece",
  whatItIs: "What it is",
  whatItIsNot: "Limits",
  statusLabels: {
    draft: "First draft written",
    building: "In progress",
  },
  openPiece: "Open the piece",
  pieces: [
    {
      code: "1",
      title: "Architecture map",
      desc: "The AI adoption ladder that orders the program: from a 2-hour workshop to a national plan, with a common core and branches by role and by area.",
      notThis: "It does not include any institution's full plan, which is under contract. The example case is illustrative and the ladder is not validated with data. The document is in Spanish.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "2",
      title: "AI adoption diagnostic",
      desc: "An item bank, a decision rule, and an analysis plan to learn where an institution stands before proposing anything.",
      notThis: "This is the formal version of the instrument and I have not yet piloted it with a group. The diagnostics I did apply are in the scope table. The document is in Spanish. The sample report uses synthetic data, labeled.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
    },
    {
      code: "3",
      title: "2-hour workshop: verifying and protecting data when using AI",
      desc: "A session plan aligned to EC0301 criteria, a facilitator guide, a three-criterion rubric, six knowledge items, and a satisfaction instrument.",
      notThis: "Not certified, and I have not delivered it in this design, although I did deliver other workshops (see the scope table). It is a new workshop, with no material from those, and it does not depend on a tool. The support material is specified, not written. The document is in Spanish.",
      status: "draft",
      href: "/piezas/taller-verificar-proteger-datos-ia.pdf",
    },
    {
      code: "4",
      title: "Four reasoning sheets",
      desc: "Four design decisions explained in the same order (problem, constraints, alternatives, decision, and verification): scalable delivery, monitoring and evaluation, governance and stakeholders, and support at scale.",
      notThis: "They are written in generic terms, with no figures, names, or program materials. The document is in Spanish.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "5",
      title: "Scope and collaborations",
      desc: "What I designed, delivered, and applied, and with which institutions, plus what I cannot show.",
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
            what: "I measured the attendee satisfaction rate: 93.9% at DGCyVE and 80% at COSFAC.",
            who: "DGCyVE and COSFAC.",
            limit: "Between 80 and 100 responses per institution, no exact count. It measures satisfaction, not learning.",
          },
          {
            what: "I wrote policy briefs and decks for each participating institution, alongside a stakeholder map for each.",
            who: "The participating institutions and, as internal documents, the consultancy.",
            limit: "I do not publish them.",
          },
          {
            what: "I designed and handed over fully developed, with a complete instructional plan, tiered AI adoption plans, from literacy to agents, adapted to each institution: for TecNM, an education platform with KPIs, projected for 30,000 teachers and 50,000 to 100,000 students; for the Secretariat of Higher Education, a 30-hour program to plug into Saberes MX. For SEMS I proposed a program for upper-secondary schools.",
            who: "TecNM, the Secretariat of Higher Education, and SEMS.",
            limit: "Authorities at TecNM and the Secretariat of Higher Education approved their plans. They were handed over complete but not implemented; the figures are projected targets.",
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
