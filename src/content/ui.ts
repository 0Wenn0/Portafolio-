import type { Locale } from "./types";

export const ui = {
  es: {
    skipLink: "Saltar al contenido",
    langToggle: "Idioma",
    downloadCv: "Descargar CV",
    downloadCvPdf: "Descargar CV (PDF)",
    viewCases: "Ver casos",
    casesByLine: "Casos por línea:",
    // Cases section
    casesTitle: "Casos seleccionados",
    casesSubtitle: "Cuatro problemas reales: qué decidí, qué hice y qué cambió.",
    org: "Organización",
    period: "Periodo",
    role: "Mi rol",
    viewSummary: "Ver resumen del caso",
    hideSummary: "Ocultar resumen",
    myContribution: "Mi contribución",
    result: "Resultado",
    viewFullArchitecture: "Ver la arquitectura completa",
    downloadDeckPdf: "Descargar deck en PDF",
    // Results section
    resultsTitle: "Resultados con contexto",
    whereFrom: "¿De dónde sale este dato?",
    whatItMeasures: "Qué mide",
    contributionLabel: "Mi parte",
    source: "Fuente",
    limit: "Límite",
    // How I work
    howIWorkTitle: "Cómo trabajo",
    howIWorkSubtitle: "Tres fundamentos explican por qué trabajo así.",
    methodTitle: "El método, con ejemplos reales",
    methodSubtitle: "Elige un paso para ver cómo lo apliqué en cada caso.",
    // Services
    servicesTitle: "Qué ofrezco",
    servicesSubtitle:
      "Para equipos e instituciones que quieren adoptar IA con método, formar a su gente o comunicar mejor sus proyectos.",
    bookCall: "Agendar llamada de diagnóstico, 30 minutos sin costo",
    // Lab
    labTitle: "Laboratorio",
    labSubtitle:
      "Prototipos de aprendizaje y experiencias digitales que diseño y publico con herramientas de IA.",
    quoteSite: "Cotizar un sitio o micrositio",
    whatIDid: "Qué hice:",
    openLabel: "Abrir",
    opensInNewTab: "(se abre en otra pestaña)",
    // About
    trajectoryTitle: "Trayectoria",
    seeMore: "ver",
    communityAndOutreach: "Comunidad y divulgación",
    educationTitle: "Formación",
    // Community
    communityTitle: "Comunidad y divulgación",
    communitySubtitle:
      "Explicar la tecnología a quien empieza es parte del mismo oficio: facilitar, enseñar y acompañar.",
    // Contact
    contactTitle: "Hablemos",
    contactSubtitle:
      "Vacantes, talleres o proyectos de adopción de IA. Te respondo en un máximo de 2 días hábiles.",
    // More work
    moreWorkTitle: "Más trabajo",
    // Network map
    networkCaption: "Dónde se cruzan mis áreas",
    networkDefault:
      "Seis áreas y los proyectos que las unen. Elige un área para ver dónde se cruza con las demás.",
    networkAnd: "y",
    networkIn: "en",
    networkCrosses: "se cruza con",
    networkWith: "; con",
    // ICE-ENDES page
    endesEyebrow: "Data architecture · Portafolio técnico",
    endesIntro:
      "Infraestructura de Conocimiento sobre la Encuesta Demográfica y de Salud Familiar (Perú, INEI). Poético en la superficie, científico en la estructura.",
    endesRole: "Rol",
    endesRoleValue: "Data Architect",
    endesSource: "Fuente",
    endesSourceValue: "ENDES – INEI Perú (datos públicos, uso libre)",
    endesCoverage: "Cobertura temporal",
    endesCoverageValue: "1996–2024 (28 años)",
    endesProblemTitle: "El problema de arquitectura",
    endesProblemBody:
      "28 años de encuestas nacionales no forman, por sí solos, una serie longitudinal. Sin una capa de homologación explícita, comparar un año contra otro produce diferencias que no son reales: son artefactos del instrumento, no del fenómeno.",
    endesWhatExists: "Lo que existe",
    endesWhatExistsList: [
      "Microdatos anuales en formato propietario (.sav), sin catálogo unificado.",
      "~5,000 variables por año que cambian de nombre o definición sin aviso.",
      "Diseño muestral complejo que se pierde si no se preserva desde el origen.",
    ],
    endesWhatsNeeded: "Lo que se necesita",
    endesWhatsNeededList: [
      { b: "Trazabilidad", t: " — auditable hasta su origen." },
      { b: "Comparabilidad", t: " — equivalencias explícitas entre años." },
      { b: "Reproducibilidad y escalabilidad", t: " — no una consulta puntual." },
    ],
    endesPipelineTitle: "Un pipeline de ocho capas",
    endesPipelineSubtitle:
      "Cada capa tiene un referente externo que la valida y un punto de control de calidad.",
    endesDownloadDeck: "Descargar el deck completo en PDF",
    endesNumbersTitle: "Lo que existe hoy, en números",
    endesNumbersBody:
      "La revisión histórica de estos 19 diccionarios no fue trabajo preliminar: fue la condición para poder diseñar una arquitectura que funcione.",
    endesDuckdbTitle: "Decisión técnica: DuckDB sobre PostgreSQL",
    endesDuckdbP1:
      "El volumen del proyecto (28 años × ~35 módulos × ~5,000 variables/año) y una sola analista no justifican el costo operativo de un servidor. DuckDB ofrece SQL completo, es embebido y no requiere infraestructura propia.",
    endesDuckdbP2a: "El esquema de metadatos se diseña ",
    endesDuckdbP2i: "como si",
    endesDuckdbP2b:
      " fuera PostgreSQL desde el inicio: mismas tablas, mismos tipos, mismas restricciones de integridad. La migración deja de ser un rediseño y pasa a ser un ",
    endesDuckdbP2i2: "pg_dump",
    endesDuckdbP2c: " conceptual, activada por umbrales explícitos.",
    endesMigrationRule: "Regla de migración",
    endesMigrationRuleBody:
      "DuckDB → PostgreSQL queda definido como decisión activada por evento, no por antojo: concurrencia real de usuarios, control de acceso por rol, o crecimiento del catálogo más allá de lo que una sola analista puede sostener sin servidor.",
    endesSurveyTitle: "El diseño muestral se preserva en el origen",
    endesSurveySubtitleA:
      "Una encuesta con conglomerados, estratos y ponderación no admite análisis directo sobre las filas crudas — la capa de ",
    endesSurveySubtitleI: "survey design",
    endesSurveySubtitleB:
      " ata estos parámetros a cada tabla desde su construcción, nunca como un parche posterior.",
    endesReproTitle: "Reproducibilidad como condición de entrada",
    endesReproVersioning: "Control de versiones",
    endesReproVersioningBody:
      "Todo script vive en Git desde el primer commit: condición mínima para cualquier hallazgo que aspire a publicación.",
    endesReproLineage: "Linaje de datos",
    endesReproLineageBody:
      "Cada transformación queda registrada: origen, script, versión, fecha. Responde una sola pregunta de forma sistemática.",
    endesReproDoc: "Documento vivo",
    endesReproDocBody:
      "Código, resultados y narrativa metodológica conviven en un mismo documento Quarto, ejecutable de principio a fin.",
    endesValidationTitle: "Validación externa contra cinco referentes",
    endesValidationSubtitle:
      "La arquitectura no se diseñó en el vacío: se comparó contra infraestructura ya probada a escala internacional y regional.",
    endesNoReferentTitle: "Lo que ningún referente externo tiene",
    endesNoReferentBody:
      "Conocimiento del contexto histórico específico de esta encuesta nacional — discontinuidades de diseño muestral, cambios de instrumento entre ediciones, variables que existen solo en ciertos años — documentado en 45 advertencias metodológicas, trazable variable por variable.",
    endesClosingTitle: "Infraestructura, no un análisis puntual",
    endesClosingQuote:
      "La entidad central del sistema es la variable — no la persona, el hogar ni el conglomerado.",
    endesClosingBody:
      "El objetivo nunca fue responder una hipótesis. Fue construir el sistema que permite responder muchas — de forma trazable, comparable en el tiempo y reproducible por un tercero. Por acuerdo de confidencialidad no publico mis hallazgos ni resultados de análisis; los datos de ENDES en sí son públicos (INEI).",
    endesBackToCases: "Volver a casos",
    endesDownloadDeckPdf: "Descargar deck en PDF",
  },
  en: {
    skipLink: "Skip to content",
    langToggle: "Language",
    downloadCv: "Download CV",
    downloadCvPdf: "Download CV (PDF)",
    viewCases: "View case studies",
    casesByLine: "Case studies by track:",
    // Cases section
    casesTitle: "Selected case studies",
    casesSubtitle: "Four real problems: what I decided, what I did, what changed.",
    org: "Organization",
    period: "Period",
    role: "My role",
    viewSummary: "View case summary",
    hideSummary: "Hide summary",
    myContribution: "My contribution",
    result: "Result",
    viewFullArchitecture: "View the full architecture",
    downloadDeckPdf: "Download deck (PDF)",
    // Results section
    resultsTitle: "Results in context",
    whereFrom: "Where does this number come from?",
    whatItMeasures: "What it measures",
    contributionLabel: "My part",
    source: "Source",
    limit: "Limitation",
    // How I work
    howIWorkTitle: "How I work",
    howIWorkSubtitle: "Three fundamentals explain why I work this way.",
    methodTitle: "The method, with real examples",
    methodSubtitle: "Choose a step to see how I applied it in each case.",
    // Services
    servicesTitle: "What I offer",
    servicesSubtitle:
      "For teams and institutions that want to adopt AI with method, train their people, or communicate their projects better.",
    bookCall: "Book a free 30-minute diagnostic call",
    // Lab
    labTitle: "Lab",
    labSubtitle:
      "Learning prototypes and digital experiences I design and ship with AI tools.",
    quoteSite: "Get a quote for a site or microsite",
    whatIDid: "What I did:",
    openLabel: "Open",
    opensInNewTab: "(opens in a new tab)",
    // About
    trajectoryTitle: "Path",
    seeMore: "see",
    communityAndOutreach: "Community & outreach",
    educationTitle: "Education",
    // Community
    communityTitle: "Community & outreach",
    communitySubtitle:
      "Explaining technology to beginners is part of the same craft: facilitating, teaching, and accompanying.",
    // Contact
    contactTitle: "Let's talk",
    contactSubtitle:
      "Openings, workshops, or AI adoption projects. I reply within 2 business days.",
    // More work
    moreWorkTitle: "More work",
    // Network map
    networkCaption: "Where my areas intersect",
    networkDefault:
      "Six areas and the projects that connect them. Choose an area to see where it overlaps with the others.",
    networkAnd: "and",
    networkIn: "in",
    networkCrosses: "intersects with",
    networkWith: "; with",
    // ICE-ENDES page
    endesEyebrow: "Data architecture · Technical portfolio",
    endesIntro:
      "Knowledge infrastructure for the Demographic and Family Health Survey (Peru, INEI). Poetic on the surface, scientific in its structure.",
    endesRole: "Role",
    endesRoleValue: "Data Architect",
    endesSource: "Source",
    endesSourceValue: "ENDES – INEI Peru (public data, open use)",
    endesCoverage: "Time coverage",
    endesCoverageValue: "1996–2024 (28 years)",
    endesProblemTitle: "The architecture problem",
    endesProblemBody:
      "28 years of national surveys do not, on their own, form a longitudinal series. Without an explicit harmonization layer, comparing one year against another produces differences that aren't real: they're artifacts of the instrument, not of the phenomenon.",
    endesWhatExists: "What exists",
    endesWhatExistsList: [
      "Annual microdata in a proprietary format (.sav), with no unified catalog.",
      "~5,000 variables per year that change name or definition without notice.",
      "Complex survey design that gets lost if it isn't preserved from the source.",
    ],
    endesWhatsNeeded: "What's needed",
    endesWhatsNeededList: [
      { b: "Traceability", t: " — auditable back to its source." },
      { b: "Comparability", t: " — explicit equivalences across years." },
      { b: "Reproducibility and scalability", t: " — not a one-off query." },
    ],
    endesPipelineTitle: "An eight-layer pipeline",
    endesPipelineSubtitle:
      "Each layer has an external reference that validates it and a quality-control checkpoint.",
    endesDownloadDeck: "Download the full deck (PDF)",
    endesNumbersTitle: "What exists today, in numbers",
    endesNumbersBody:
      "The historical review of these 19 dictionaries wasn't preliminary work: it was the condition for designing an architecture that actually works.",
    endesDuckdbTitle: "Technical decision: DuckDB over PostgreSQL",
    endesDuckdbP1:
      "The project's volume (28 years × ~35 modules × ~5,000 variables/year) and a single analyst don't justify the operational cost of a server. DuckDB offers full SQL, is embedded, and requires no infrastructure of its own.",
    endesDuckdbP2a: "The metadata schema is designed ",
    endesDuckdbP2i: "as if",
    endesDuckdbP2b:
      " it were PostgreSQL from the start: same tables, same types, same integrity constraints. Migration stops being a redesign and becomes a conceptual ",
    endesDuckdbP2i2: "pg_dump",
    endesDuckdbP2c: ", triggered by explicit thresholds.",
    endesMigrationRule: "Migration rule",
    endesMigrationRuleBody:
      "DuckDB → PostgreSQL is defined as an event-triggered decision, not a whim: real concurrent users, role-based access control, or the catalog growing beyond what a single analyst can sustain without a server.",
    endesSurveyTitle: "Survey design is preserved at the source",
    endesSurveySubtitleA:
      "A survey with clusters, strata, and weighting doesn't allow direct analysis on raw rows — the ",
    endesSurveySubtitleI: "survey design",
    endesSurveySubtitleB:
      " layer ties these parameters to every table from the moment it's built, never as a later patch.",
    endesReproTitle: "Reproducibility as an entry condition",
    endesReproVersioning: "Version control",
    endesReproVersioningBody:
      "Every script lives in Git from the first commit: a minimum condition for any finding that aims to be published.",
    endesReproLineage: "Data lineage",
    endesReproLineageBody:
      "Every transformation is logged: origin, script, version, date. It answers one question systematically.",
    endesReproDoc: "Living document",
    endesReproDocBody:
      "Code, results, and methodological narrative live together in a single Quarto document, executable start to finish.",
    endesValidationTitle: "Externally validated against five benchmarks",
    endesValidationSubtitle:
      "The architecture wasn't designed in a vacuum: it was benchmarked against infrastructure already proven at international and regional scale.",
    endesNoReferentTitle: "What no external benchmark has",
    endesNoReferentBody:
      "Knowledge of this national survey's specific historical context — survey-design discontinuities, instrument changes between editions, variables that exist only in certain years — documented in 45 methodological warnings, traceable variable by variable.",
    endesClosingTitle: "Infrastructure, not a one-off analysis",
    endesClosingQuote:
      "The system's central entity is the variable — not the person, the household, or the cluster.",
    endesClosingBody:
      "The goal was never to answer one hypothesis. It was to build the system that lets you answer many — traceably, comparably over time, and reproducibly by a third party. Under a confidentiality agreement I don't publish my findings or analysis results; the ENDES data itself is public (INEI).",
    endesBackToCases: "Back to case studies",
    endesDownloadDeckPdf: "Download deck (PDF)",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale) {
  return ui[locale];
}
