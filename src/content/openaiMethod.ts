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
  metaTitle: "El método detrás del programa de adopción de IA — Wendy Ramírez Burgos",
  metaDescription:
    "Cómo diagnostico, diseño, escalo y mido la adopción de IA en instituciones: escalera, diagnóstico, taller, decisiones de diseño y alcance.",
  eyebrow: "Caso OpenAI · Método",
  title: "El método detrás del programa",
  intro:
    "Diseñé programas de adopción de IA para instituciones públicas, educativas y empresas, de un taller de 2 horas a un plan nacional. Aquí explico cómo lo razoné. Los planes completos, los materiales y los datos están bajo contrato y no los publico, así que todo está escrito en genérico.",
  readTitle: "Qué es real y qué es nuevo",
  readItems: [
    "El trabajo con las instituciones ocurrió. Todos los talleres se impartieron. Apliqué diagnósticos y redacté policy briefs y planes completos. La tabla de alcance, al final, dice qué fue y con quién.",
    "Lo único que no se implementó fueron los planes nacionales. Los de TecNM y de la Secretaría de Educación Superior se aprobaron. Los de SEMS y educación básica no llegaron a un acuerdo de implementación.",
    "La escalera, las cuatro decisiones de diseño y el taller de 2 horas recogen lo que implementé en el programa, escrito en genérico. El diagnóstico es la versión formal de los que apliqué, escrita ahora.",
    "Los ejemplos son ilustrativos y los datos, cuando los hay, son sintéticos y están rotulados.",
    "Uso los estándares CONOCER como criterio de calidad. Ningún documento dice estar certificado.",
  ],
  piecesTitle: "Lo que muestro",
  whatItIs: "Qué es",
  whatItIsNot: "Límites",
  statusLabels: {
    draft: "Primera versión escrita",
    building: "En construcción",
  },
  openPiece: "Abrir el documento",
  pieces: [
    {
      code: "01",
      title: "La escalera de adopción",
      desc: "Cómo ordené la adopción de IA por niveles, del taller de 2 horas a un plan nacional. Hay un núcleo común y ramas por rol y por área.",
      notThis: "El plan completo de cada institución está bajo contrato y no se publica. El caso de ejemplo es ilustrativo y la escalera no se ha validado con datos.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "02",
      title: "Diagnóstico de adopción de IA",
      desc: "Banco de ítems, regla de decisión y plan de análisis para saber dónde está una institución antes de proponerle algo.",
      notThis: "Es la versión formal de los diagnósticos que apliqué, que están en la tabla de alcance. El banco de ítems y la regla de decisión no se han calibrado con datos. El informe de ejemplo usa datos sintéticos rotulados.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
    },
    {
      code: "03",
      title: "Taller de 2 horas: verificar y proteger datos al usar IA",
      desc: "Carta descriptiva alineada a EC0301, guía de quien facilita, rúbrica de tres criterios, seis reactivos e instrumento de satisfacción.",
      notThis: "No está certificado. Es el diseño en genérico de un taller de 2 horas como los que impartí, sin sus materiales. La rúbrica y los reactivos no se han calibrado y falta redactar el material de apoyo.",
      status: "draft",
      href: "/piezas/taller-verificar-proteger-datos-ia.pdf",
    },
    {
      code: "04",
      title: "Cuatro decisiones de diseño",
      desc: "Cada una sigue el mismo orden: problema, restricciones, alternativas, decisión y cómo la comprobaría. Cubren entrega escalable, seguimiento y evaluación, gobernanza y actores, y soporte a escala.",
      notThis: "Recogen decisiones del programa, escritas en genérico, sin cifras, nombres ni materiales.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "05",
      title: "Alcance y colaboraciones",
      desc: "Qué diseñé, qué impartí y qué apliqué, con qué instituciones, y lo que no puedo mostrar.",
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
            what: "Diseñé planes de adopción de IA por niveles, de la alfabetización a los agentes, y los entregué desarrollados, con su plan instruccional completo. Cada plan se adaptó a su institución. TecNM: una plataforma educativa con KPIs, proyectada para 30,000 docentes y de 50,000 a 100,000 estudiantes. Secretaría de Educación Superior: un programa de 30 horas para integrarse a Saberes MX. SEMS: un programa para preparatorias. Educación básica: la integración de la IA en la Nueva Escuela Mexicana (NEM), según su plan de estudios.",
            who: "TecNM, Secretaría de Educación Superior, SEMS y educación básica.",
            limit: "Las autoridades de TecNM y de la Secretaría de Educación Superior aprobaron sus planes, y ningún plan nacional llegó a implementarse. SEMS y educación básica no llegaron a un acuerdo de implementación. Las cifras son metas proyectadas.",
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
    "How I diagnose, design, scale, and measure AI adoption in institutions: ladder, diagnostic, workshop, design decisions, and scope.",
  eyebrow: "OpenAI case · Method",
  title: "The method behind the program",
  intro:
    "I designed AI adoption programs for public, educational, and business institutions, from a 2-hour workshop to a national plan. Here I explain how I reasoned through them. The full plans, materials, and data are under contract and I do not publish them, so everything is written in generic terms.",
  readTitle: "What is real and what is new",
  readItems: [
    "The work with the institutions happened. All workshops were delivered. I applied diagnostics and wrote policy briefs and complete plans. The scope table at the end says what it was and with whom.",
    "The only thing not implemented was the national plans. The TecNM and Secretariat of Higher Education plans were approved. The SEMS and basic education plans did not reach an implementation agreement.",
    "The ladder, the four design decisions, and the 2-hour workshop capture what I implemented in the program, written in generic terms. The diagnostic is the formal version of the ones I applied, written now.",
    "Examples are illustrative, and any data is synthetic and labeled.",
    "I use CONOCER standards as a quality criterion. No document claims to be certified.",
  ],
  piecesTitle: "What I show",
  whatItIs: "What it is",
  whatItIsNot: "Limits",
  statusLabels: {
    draft: "First draft written",
    building: "In progress",
  },
  openPiece: "Open the document",
  pieces: [
    {
      code: "01",
      title: "The adoption ladder",
      desc: "How I organized AI adoption by level, from a 2-hour workshop to a national plan. There is a common core and branches by role and by area.",
      notThis: "Each institution's full plan is under contract and is not published. The example case is illustrative and the ladder has not been validated with data. The document is in Spanish.",
      status: "draft",
      href: "/piezas/mapa-arquitectura-adopcion-ia.pdf",
    },
    {
      code: "02",
      title: "AI adoption diagnostic",
      desc: "An item bank, a decision rule, and an analysis plan to learn where an institution stands before proposing anything.",
      notThis: "This is the formal version of the diagnostics I applied, which are in the scope table. The item bank and the decision rule have not been calibrated with data. The sample report uses synthetic data, labeled. The document is in Spanish.",
      status: "draft",
      href: "/piezas/diagnostico-adopcion-ia.pdf",
    },
    {
      code: "03",
      title: "2-hour workshop: verifying and protecting data when using AI",
      desc: "A session plan aligned to EC0301, a facilitator guide, a three-criterion rubric, six knowledge items, and a satisfaction instrument.",
      notThis: "It is not certified. It is the generic design of a 2-hour workshop like the ones I delivered, without their materials. The rubric and the knowledge items have not been calibrated, and the support material still needs to be written. The document is in Spanish.",
      status: "draft",
      href: "/piezas/taller-verificar-proteger-datos-ia.pdf",
    },
    {
      code: "04",
      title: "Four design decisions",
      desc: "Each follows the same order: problem, constraints, alternatives, decision, and how I would check it. They cover scalable delivery, monitoring and evaluation, governance and stakeholders, and support at scale.",
      notThis: "They capture decisions from the program, written in generic terms, with no figures, names, or materials. The document is in Spanish.",
      status: "draft",
      href: "/piezas/fichas-de-razonamiento.pdf",
    },
    {
      code: "05",
      title: "Scope and collaborations",
      desc: "What I designed, delivered, and applied, with which institutions, and what I cannot show.",
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
            what: "I designed tiered AI adoption plans, from literacy to agents, and handed them over fully developed, with a complete instructional plan. Each plan was adapted to its institution. TecNM: an education platform with KPIs, projected for 30,000 teachers and 50,000 to 100,000 students. Secretariat of Higher Education: a 30-hour program to plug into Saberes MX. SEMS: a program for upper-secondary schools. Basic education: the integration of AI into the Nueva Escuela Mexicana (NEM), following its curriculum.",
            who: "TecNM, the Secretariat of Higher Education, SEMS, and basic education.",
            limit: "Authorities at TecNM and the Secretariat of Higher Education approved their plans, and no national plan reached implementation. SEMS and basic education did not reach an implementation agreement. The figures are projected targets.",
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
