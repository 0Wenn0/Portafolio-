import type { CaseStudy } from "./types";

export const cases: CaseStudy[] = [
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
    deepDiveHref: "/casos/ice-endes",
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
