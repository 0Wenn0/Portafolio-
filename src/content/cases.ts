import type { CaseStudy, Locale } from "./types";

const casesEs: CaseStudy[] = [
  {
    line: "Adopción de IA",
    title: "Adopción de IA a escala nacional",
    org: "Programa OpenAI (vía Aurora Policy Solutions)",
    period: "Julio 2025 a febrero 2026",
    role: "Representante de Políticas Públicas y Programas Educativos",
    reto: "Llevar la IA a públicos no técnicos muy distintos, del Senado a docentes y pymes, cuando un programa único no servía para todos.",
    contrib:
      "Mapeé actores y audiencias, diseñé programas por sector y facilité talleres con instituciones públicas y privadas.",
    resultado:
      "Más de 3,000 participantes en 8+ sectores y policy briefs para SEP, TecNM y Media Superior.",
    imageAlt: "Wendy presentando en el escenario, con el logo de ChatGPT proyectado detrás",
    image: "/cases/openai.jpg",
  },
  {
    line: "Aprendizaje y EdTech",
    title: "Transformación digital de programas formativos",
    org: "INFP",
    period: "Abril 2023 a julio 2025",
    role: "Diseñadora Tecnopedagógica, Analista de Datos y Marketing Digital",
    reto: "Las convocatorias a programas formativos se abrían poco y muchos participantes no terminaban los cursos.",
    contrib:
      "Rediseñé la comunicación con una base de 200,000 contactos, gestioné la página de publicaciones Conciencias, construí cursos y micrositios en Rise 360, Storyline y Thinkific, e impartí talleres de formación en territorio.",
    resultado:
      "Apertura de correos de 8% a 30% y 30% más de finalización de programas, entre abril de 2023 y julio de 2025.",
    imageAlt: "Página de inicio de la revista Conciencias, publicación digital del INFP",
    image: "/cases/infp-conciencias.jpg",
  },
  {
    line: "Datos, IA responsable y comportamiento",
    title: "Arquitectura de datos para investigar exposoma y cognición",
    org: "Grupo de Investigación en Neurociencia y Salud Mental, Universidad Científica del Sur",
    period: "2026 a la fecha",
    role: "Arquitecta de datos de investigación",
    reto: "Convertir varias ediciones de encuestas poblacionales, con cambios de diseño y de variables entre años, en una base confiable y comparable en el tiempo.",
    bridge:
      "Lo mismo que necesita un equipo de People Analytics: encuestas de clima o de adopción confiables, trazables y comparables entre periodos.",
    contrib:
      "Soy la única responsable de la infraestructura de datos: estructuré las fuentes, definí llaves y reglas de integración, homologué variables a lo largo del tiempo, construí crosswalks y el catálogo de metadatos, y documenté la trazabilidad y el control de calidad.",
    resultado:
      "Una base lista para análisis ponderado, con controles de integridad obligatorios y documentación para incorporar a personal nuevo. Por acuerdo de confidencialidad no publico datos ni resultados del estudio.",
    imageAlt: "Diagrama de la arquitectura de datos, sin datos reales",
    image: "/cases/ice-endes-architecture.svg",
    deepDiveHref: "/casos/ice-endes",
    pdfHref: "/docs/ICE-ENDES-Arquitectura.pdf",
  },
  {
    line: "Datos, IA responsable y comportamiento",
    title: "IA para decisiones clínicas, con supervisión humana",
    org: "SISAP Recover AI",
    period: "En curso",
    role: "Cofundadora: producto, estrategia y adopción",
    reto: "Apoyar decisiones clínicas en consumo de sustancias sin que el modelo sustituya el juicio de quien atiende.",
    contrib:
      "Lidero producto, estrategia y adopción institucional: mapeo de actores, estrategia regulatoria e historias de usuario con supervisión humana. El modelo lo desarrolla mi cofundador, Lauro Gutiérrez Castro.",
    resultado:
      "Proyecto en Jalisco MedTech 2026, con aceptación condicionada a JEEI Aceleración. El modelo del equipo está publicado en Springer (N=155).",
    imageAlt: "Ilustración abstracta de una red de nodos con un punto de supervisión humana al centro",
    image: "/cases/sisap.svg",
  },
];

const casesEn: CaseStudy[] = [
  {
    line: "AI adoption",
    title: "National-scale AI adoption",
    org: "OpenAI Program (via Aurora Policy Solutions)",
    period: "July 2025 to February 2026",
    role: "Public Policy and Educational Programs Representative",
    reto: "Bring AI to very different non-technical audiences, from the Senate to teachers and small businesses, when one single program couldn't serve everyone.",
    contrib:
      "Mapped stakeholders and audiences, designed sector-specific programs, and facilitated workshops with public and private institutions.",
    resultado:
      "Over 3,000 participants across 8+ sectors and policy briefs for SEP, TecNM, and Media Superior.",
    imageAlt: "Wendy presenting on stage, with the ChatGPT logo projected behind her",
    image: "/cases/openai.jpg",
  },
  {
    line: "Learning & EdTech",
    title: "Digital transformation of training programs",
    org: "INFP",
    period: "April 2023 to July 2025",
    role: "Instructional Designer, Data Analyst, and Digital Marketing",
    reto: "Enrollment for training programs was low, and many participants weren't finishing their courses.",
    contrib:
      "Redesigned communications for a base of 200,000 contacts, managed the Conciencias publications page, built courses and microsites in Rise 360, Storyline, and Thinkific, and ran in-person training workshops.",
    resultado:
      "Email open rates rose from 8% to 30%, and program completion rose 30%, between April 2023 and July 2025.",
    imageAlt: "Homepage of Conciencias, INFP's digital publication",
    image: "/cases/infp-conciencias.jpg",
  },
  {
    line: "Data, responsible AI & behavior",
    title: "Data architecture for researching exposome and cognition",
    org: "Neuroscience and Mental Health Research Group, Universidad Científica del Sur",
    period: "2026 to present",
    role: "Research data architect",
    reto: "Turn multiple editions of population surveys, with design and variable changes between years, into a reliable base that's comparable over time.",
    bridge:
      "The same thing a People Analytics team needs: reliable, traceable engagement or adoption surveys that are comparable across periods.",
    contrib:
      "I am solely responsible for the data infrastructure: structured the sources, defined keys and integration rules, harmonized variables over time, built crosswalks and the metadata catalog, and documented traceability and quality control.",
    resultado:
      "A base ready for weighted analysis, with mandatory integrity checks and documentation to onboard new staff. Under a confidentiality agreement I don't publish the study's data or results.",
    imageAlt: "Diagram of the data architecture, with no real data",
    image: "/cases/ice-endes-architecture.svg",
    deepDiveHref: "/casos/ice-endes",
    pdfHref: "/docs/ICE-ENDES-Arquitectura.pdf",
  },
  {
    line: "Data, responsible AI & behavior",
    title: "AI for clinical decisions, with human oversight",
    org: "SISAP Recover AI",
    period: "Ongoing",
    role: "Co-founder: product, strategy, and adoption",
    reto: "Support clinical decisions in substance use without letting the model replace the clinician's judgment.",
    contrib:
      "I lead product, strategy, and institutional adoption: stakeholder mapping, regulatory strategy, and user stories with human oversight. My co-founder, Lauro Gutiérrez Castro, develops the model.",
    resultado:
      "Project in Jalisco MedTech 2026, with conditional acceptance to JEEI Aceleración. The team's model is published in Springer (N=155).",
    imageAlt: "Abstract illustration of a node network with a human-oversight point at its center",
    image: "/cases/sisap.svg",
  },
];

export function getCases(locale: Locale): CaseStudy[] {
  return locale === "en" ? casesEn : casesEs;
}
