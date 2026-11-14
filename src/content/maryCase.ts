import type { Locale } from "./types";

/* Caso «El cuarto de Mary»: diseño instruccional completo (planeación).
 * La producción en Rise, Storyline y Thinkific es una fase posterior. */

export type CaseTable = {
  heads: string[];
  /** Ancho relativo de cada columna en escritorio (unidades fr). */
  widths: number[];
  rows: string[][];
};

export type CaseBlock = {
  id: string;
  title: string;
  lead: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  facts?: { label: string; value: string }[];
  tables?: { caption?: string; table: CaseTable }[];
  note?: string;
};

type MaryCaseContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  statusLabel: string;
  status: string;
  readTitle: string;
  readItems: string[];
  blocks: CaseBlock[];
  refsTitle: string;
  refs: string[];
  pdfLabel: string;
  pdfHref: string;
  backToCases: string;
};

const es: MaryCaseContent = {
  metaTitle: "El cuarto de Mary: diseño instruccional de un curso sobre criterio e IA — Wendy Ramírez Burgos",
  metaDescription:
    "Diseño instruccional completo de un curso de 40 minutos: perfilamiento, propuesta, objetivos con Bloom y Marzano, escuadra invertida, Gagné, Dick & Carey y rúbrica de evaluación.",
  eyebrow: "Diseño instruccional · Planeación completa",
  title: "El cuarto de Mary: diseñar criterio para un mundo con IA",
  intro:
    "Un curso de 40 minutos para que profesionales y estudiantes universitarios usen la IA generativa con criterio: pedir con contexto, verificar y no delegar decisiones que afectan a personas. Aquí muestro cómo lo planeé, de la ficha de perfilamiento a la rúbrica.",
  statusLabel: "Estado",
  status:
    "Diseño completo y documentado. La producción en Rise 360, Storyline 360 y Thinkific es la siguiente fase.",
  readTitle: "Qué es real y qué no",
  readItems: [
    "Es un caso de portafolio. El cliente es un escenario tipo y los datos de la población son supuestos que habría que validar con él.",
    "Elena y ORACLE son personajes ficticios. No hay datos personales reales.",
    "La rúbrica es un prototipo: requiere pilotaje antes de usarse como medida validada.",
    "El diseño se documentó conforme a los criterios del estándar EC0366 del CONOCER. No está certificado.",
  ],
  blocks: [
    {
      id: "nombre",
      title: "Por qué se llama así",
      lead: "El nombre viene de un experimento mental del filósofo Frank Jackson (1982).",
      paragraphs: [
        "Mary es una científica que sabe todo lo que la física y la neurociencia pueden decir sobre el color. Pero vive en un cuarto en blanco y negro y nunca ha visto un color. Un día sale y ve el rojo. La pregunta de Jackson es si Mary aprende algo nuevo.",
        "En el curso funciona como analogía pedagógica. Las IA que usamos han procesado enormes cantidades de información, pero no conocen tu situación ni la de las personas sobre las que ayudan a decidir. Salir del cuarto es darles el contexto que no tienen, verificar lo que producen y decidir con criterio.",
        "El diseño lo hace visible: el curso empieza en gris y gana color con cada evidencia revisada. La simulación cierra con «ORACLE no vio el rojo de Elena. Tú sí podías buscarlo». La analogía no afirma nada sobre la conciencia de la IA, y el curso lo aclara.",
      ],
    },
    {
      id: "propuesta",
      title: "La propuesta",
      lead: "Ante una recomendación de IA que afecta a personas, la persona tomará y justificará una decisión con evidencia verificada, considerando a los afectados y diciendo qué tan segura está.",
      facts: [
        { label: "Problema", value: "Se aceptan respuestas convincentes sin preguntar qué contexto le falta al sistema, sin verificar y sin pensar en los afectados." },
        { label: "Formato", value: "40 minutos en cuatro momentos: Thinkific, Rise 360, Storyline 360 y de nuevo Thinkific." },
        { label: "Andamiaje", value: "El ciclo del criterio: Pienso, Consulto, Verifico, Decido, Reflexiono." },
        { label: "Criterio de logro", value: "8 de 12 o más en la rúbrica de razonamiento." },
      ],
      tables: [
        {
          caption: "Modelos y por qué cada uno",
          table: {
            heads: ["Modelo", "Para qué lo uso", "Por qué este"],
            widths: [2, 4, 4],
            rows: [
              ["ADDIE", "Gestionar el proyecto completo, del análisis a la evaluación", "Es el marco que esperan clientes y equipos; ordena entregables y revisiones"],
              ["Dick & Carey", "Alinear objetivo, instrumento y actividad antes de producir", "Obliga a escribir la evaluación antes que el contenido"],
              ["Merrill", "Macroestructura: activar, demostrar, aplicar, integrar", "Parte de un problema real y encaja con un caso de decisión"],
              ["Gagné", "Secuencia fina de pantallas y bloques", "Asegura que ninguna pieza omita retroalimentación o transferencia"],
            ],
          },
        },
      ],
    },
    {
      id: "perfilamiento",
      title: "Ficha de perfilamiento",
      lead: "La ficha separa lo que es requisito, lo que sale del diseño y lo que es un supuesto por validar con el cliente.",
      tables: [
        {
          table: {
            heads: ["Campo", "Contenido", "Estado"],
            widths: [2, 5, 2],
            rows: [
              ["Población meta", "Profesionales y estudiantes universitarios de 18 años o más que usan IA en tareas cotidianas", "Del diseño"],
              ["Conocimientos previos", "Usan chatbots; sin formación en sesgo algorítmico, verificación de fuentes ni diseño de peticiones", "Supuesto"],
              ["Actitudes probables", "Confían en respuestas que «suenan bien», tienen prisa y verifican poco", "Supuesto; se valida con el escenario inicial"],
              ["Contexto de uso", "Autoestudio asincrónico en sesiones de 40 minutos, posiblemente fragmentadas", "Supuesto"],
              ["Infraestructura", "Laptop o móvil, Thinkific y paquetes de Articulate; conexión variable, por eso piezas ligeras", "Por verificar con el cliente"],
              ["Accesibilidad", "WCAG 2.2 AA: contraste, teclado, subtítulos, movimiento reducido; el color nunca es la única señal", "Requisito"],
            ],
          },
        },
      ],
      note: "Preguntas para validar con el cliente: qué decisiones apoya hoy la IA en su organización, qué incidentes han tenido, cuánto tiempo real puede dedicar la gente y qué reportes necesitan.",
    },
    {
      id: "objetivos",
      title: "Objetivos con Bloom y Marzano",
      lead: "Un objetivo terminal y siete de apoyo. Bloom ordena la complejidad cognitiva; Marzano y Kendall agregan la metacognición y el sistema interno, que es justo donde vive el criterio.",
      tables: [
        {
          table: {
            heads: ["#", "La persona podrá…", "Bloom", "Marzano y Kendall", "Evidencia"],
            widths: [1, 5, 2, 3, 3],
            rows: [
              ["T", "Tomar y justificar una decisión ante una recomendación de IA que afecta a personas", "Evaluar", "4 · Toma de decisiones", "Decisión, razones y nivel de confianza"],
              ["1", "Identificar qué contexto le falta a una petición o recomendación de IA", "Analizar", "3 · Análisis de errores", "Respuesta a «¿qué no ha visto ORACLE?»"],
              ["2", "Reescribir una petición vaga como petición con contexto, sin compartir datos indebidos", "Aplicar", "4 · Resolución de problemas", "Petición reescrita"],
              ["3", "Verificar afirmaciones y fuentes generadas por IA", "Evaluar", "3 · Análisis de errores", "Clasificación verificable o inventado"],
              ["4", "Distinguir qué variable funciona como sustituto (proxy) de otra y explicar cómo produce un sesgo", "Analizar", "3 · Especificar", "Sesgo identificado con una razón ligada"],
              ["5", "Comparar su postura inicial y final y explicar qué la hizo cambiar", "Evaluar (metacognitivo)", "5 · Monitoreo de la precisión", "Reflexión y confianza declarada"],
              ["6", "Valorar la importancia del protocolo para su trabajo y su capacidad para aplicarlo", "Afectivo: valoración", "6 · Examinar importancia y eficacia", "Dos escalas de 1 a 5 con su porqué"],
              ["6b", "Planear dónde y cuándo usará el protocolo en las próximas dos semanas", "Crear (planear)", "5 · Especificar metas", "Plan de uso"],
            ],
          },
        },
      ],
    },
    {
      id: "competencias",
      title: "Competencias con la escuadra invertida",
      lead: "Estructuré el programa con la escuadra invertida de Ruiz Iglesias: se parte del desempeño final y se desagrega hacia atrás. Es el análisis instruccional del modelo de Dick & Carey.",
      list: [
        "Producto integrador: el desempeño final que demuestra la competencia.",
        "Elementos de competencia: los desempeños previos que llevan a él.",
        "Evidencias o criterios de realización: lo que prueba cada elemento.",
        "Contenidos, actividades y criterios de evaluación: se derivan de las evidencias.",
      ],
      ordered: true,
      facts: [
        { label: "Competencia", value: "Decidir con criterio cuando una IA produce información o recomendaciones que afectan a personas." },
        { label: "Situación compleja", value: "Un comité de becas recibe la recomendación de ORACLE, «Rechazar · riesgo 78 %», sobre la solicitud de Elena, con información parcial." },
        { label: "Producto integrador", value: "La decisión justificada sobre la beca de Elena, en la simulación de Storyline." },
      ],
      tables: [
        {
          table: {
            heads: ["Elemento de competencia", "Objetivos", "Evidencia de producto", "Evidencia de desempeño", "Evidencia de conocimiento"],
            widths: [4, 1, 3, 3, 2],
            rows: [
              ["E1. Pedir a la IA con contexto, sin compartir datos indebidos", "1, 2", "Petición reescrita (lista de cotejo)", "Revisa la información que ORACLE no vio", "Reactivos 1–4"],
              ["E2. Verificar afirmaciones y fuentes generadas por IA", "3", "Clasificación verificable o inventado", "Elige razones con evidencia", "Reactivos 5–6"],
              ["E3. Detectar sesgos por variables sustitutas", "4", "—", "Identifica el código postal como proxy y lo liga a una razón", "Reactivos 7–8"],
              ["E4. Tomar y justificar la decisión considerando a los afectados", "T", "Decisión justificada (producto integrador)", "Considera a todos los afectados y declara un criterio", "Reactivo 9"],
              ["E5. Revisar el propio razonamiento y planear el uso", "5, 6, 6b", "Plan de uso y escalas", "Confianza matizada y condición para revisar", "Reactivo 10"],
            ],
          },
        },
      ],
      note: "La escuadra invertida y Bloom no compiten: la escuadra da la estructura (qué debe demostrar la persona y en qué orden); Bloom y Marzano dan el nivel de cada paso.",
    },
    {
      id: "gagne",
      title: "Los nueve eventos de Gagné en la ruta",
      lead: "Cada evento tiene un lugar y una acción concreta. Se agrupan en las cuatro fases de Merrill.",
      tables: [
        {
          table: {
            heads: ["#", "Evento", "Merrill", "Dónde", "Qué hace la persona"],
            widths: [1, 3, 2, 3, 5],
            rows: [
              ["1", "Ganar la atención", "Activar", "Thinkific", "Conoce a Mary en el cuarto gris"],
              ["2", "Informar los objetivos", "Activar", "Thinkific", "Lee qué logrará en 40 minutos"],
              ["3", "Recordar lo previo", "Activar", "Thinkific", "Decide un caso y escribe una petición real"],
              ["4", "Presentar el contenido", "Demostrar", "Rise", "Analogía de Mary, ciclo del criterio, variable proxy"],
              ["5", "Guiar el aprendizaje", "Demostrar", "Rise", "Antes y después de una petición; una referencia falsa marcada"],
              ["6", "Provocar el desempeño", "Aplicar", "Storyline", "Investiga, identifica el sesgo, decide y justifica"],
              ["7", "Retroalimentar", "Aplicar", "Storyline y Rise", "Ve consecuencias y su puntaje por criterio"],
              ["8", "Evaluar", "Integrar", "Thinkific", "Escenario final equivalente y petición reescrita"],
              ["9", "Transferir", "Integrar", "Thinkific", "Protocolo de bolsillo, plan de uso y seguimiento"],
            ],
          },
        },
      ],
    },
    {
      id: "evaluacion",
      title: "Evaluación y rúbrica",
      lead: "Se evalúa el proceso de razonamiento, no la postura que elige la persona.",
      tables: [
        {
          caption: "Niveles de evaluación",
          table: {
            heads: ["Nivel", "Instrumento", "Momento"],
            widths: [3, 6, 2],
            rows: [
              ["Kirkpatrick 1 · Reacción", "Encuesta final", "Cierre"],
              ["Kirkpatrick 2 · Aprendizaje", "Escenario equivalente antes y después, rúbrica, quiz y petición reescrita", "Durante y al cierre"],
              ["Kirkpatrick 3 · Conducta", "Plan de uso a dos semanas y seguimiento a 15–30 días", "Después"],
              ["Casos de éxito (Brinkerhoff)", "Entrevistas a participantes con mayor y menor transferencia", "Piloto"],
            ],
          },
        },
        {
          caption: "Rúbrica de razonamiento (simulación de Storyline)",
          table: {
            heads: ["Criterio", "0", "1", "2"],
            widths: [3, 3, 3, 4],
            rows: [
              ["Información revisada", "No abrió documentos", "1–2 documentos", "Los 3 documentos"],
              ["Sesgo identificado", "No lo identificó", "Lo identificó", "Lo identificó y eligió una razón ligada a él"],
              ["Razones con evidencia", "Ninguna", "1", "2 o 3"],
              ["Personas afectadas", "Ninguna o una", "Dos", "Elena, la institución y otros solicitantes"],
              ["Criterio de la decisión", "Sin razones", "El criterio es «lo que dice ORACLE» o «lo más rápido»", "Un criterio basado en la evidencia o la equidad"],
              ["Incertidumbre", "Confianza total y nada la haría cambiar", "Confianza matizada o una condición para revisar", "Confianza matizada y una condición para revisar"],
            ],
          },
        },
      ],
      note: "Los criterios son las evidencias de los elementos de competencia. El puntaje va de 0 a 12 y se convierte a los 30 puntos de la actividad; lo satisfactorio es 8 de 12. El formato cumple el producto 6 del elemento E1220 del EC0366.",
    },
    {
      id: "dick-carey",
      title: "Dick & Carey: dónde está cada fase",
      lead: "Seis de las diez fases están resueltas en el diseño; las otras cuatro corresponden a la producción y al piloto.",
      tables: [
        {
          table: {
            heads: ["Fase", "Estado", "Dónde"],
            widths: [4, 2, 4],
            rows: [
              ["1. Meta instruccional", "Hecha", "Objetivo terminal"],
              ["2. Análisis instruccional", "Hecha", "Escuadra invertida"],
              ["3. Estudiantes y contexto", "Hecha, con supuestos", "Ficha de perfilamiento"],
              ["4. Objetivos de desempeño", "Hecha", "Tabla de objetivos"],
              ["5. Instrumentos de evaluación", "Hecha", "Rúbrica, lista de cotejo y evaluación final"],
              ["6. Estrategia instruccional", "Hecha", "Merrill y Gagné"],
              ["7. Materiales", "Siguiente fase", "Rise, Storyline y Thinkific"],
              ["8. Evaluación formativa", "Piloto", "Revisión experta, prueba individual y grupo pequeño"],
              ["9. Revisión", "Piloto", "Ajustes con los datos del piloto"],
              ["10. Evaluación sumativa", "Piloto", "Kirkpatrick 1–3 y casos de éxito"],
            ],
          },
        },
      ],
    },
  ],
  refsTitle: "Referencias",
  refs: [
    "Anderson, L. W., Krathwohl, D. R., & Bloom, B. S. (2001). A taxonomy for learning, teaching, and assessing: A revision of Bloom's taxonomy of educational objectives. Longman.",
    "Dick, W., Carey, L., & Carey, J. O. (2015). The systematic design of instruction (8.ª ed.). Pearson.",
    "Gagné, R. M., Briggs, L. J., & Wager, W. W. (1992). Principles of instructional design (4.ª ed.). Harcourt Brace Jovanovich.",
    "Jackson, F. (1982). Epiphenomenal qualia. The Philosophical Quarterly, 32(127), 127–136.",
    "Marzano, R. J., & Kendall, J. S. (2007). The new taxonomy of educational objectives. Corwin Press.",
    "Ruiz Iglesias, M. (2012). Cómo evaluar el dominio de las competencias. Trillas.",
    "CONOCER (2013). EC0366 Desarrollo de cursos de formación en línea. DOF, 20 de noviembre de 2013.",
  ],
  pdfLabel: "Descargar el diseño completo (PDF)",
  pdfHref: "/piezas/el-cuarto-de-mary-diseno-instruccional.pdf",
  backToCases: "Volver a los casos",
};

const en: MaryCaseContent = {
  metaTitle: "Mary's Room: instructional design for a course on judgment and AI — Wendy Ramírez Burgos",
  metaDescription:
    "Complete instructional design of a 40-minute course: learner profile, proposal, objectives with Bloom and Marzano, inverted-square competency mapping, Gagné, Dick & Carey and an assessment rubric.",
  eyebrow: "Instructional design · Complete plan",
  title: "Mary's Room: designing judgment for an AI-powered world",
  intro:
    "A 40-minute course that helps professionals and university students use generative AI with judgment: ask with context, verify, and never hand over decisions that affect people. This page shows how I planned it, from the learner profile to the rubric.",
  statusLabel: "Status",
  status:
    "Design complete and documented. Production in Rise 360, Storyline 360 and Thinkific is the next phase.",
  readTitle: "What is real and what is not",
  readItems: [
    "This is a portfolio case. The client is a typical scenario and the learner data are assumptions to validate with a real client.",
    "Elena and ORACLE are fictional. There is no real personal data.",
    "The rubric is a prototype and needs piloting before it can be used as a validated measure.",
    "The design follows the criteria of the Mexican CONOCER standard EC0366. It is not certified.",
  ],
  blocks: [
    {
      id: "nombre",
      title: "Why it is called Mary's Room",
      lead: "The name comes from a thought experiment by the philosopher Frank Jackson (1982).",
      paragraphs: [
        "Mary is a scientist who knows everything physics and neuroscience can say about color. But she lives in a black-and-white room and has never seen a color. One day she walks out and sees red. Jackson asks whether Mary learns something new.",
        "In the course it works as a teaching analogy. The AI tools we use have processed enormous amounts of information, but they do not know your situation or the people they help decide about. Leaving the room means giving them the context they lack, verifying what they produce and deciding with judgment.",
        "The design makes this visible: the course starts in gray and gains color with every piece of evidence reviewed. The simulation ends with «ORACLE didn't see Elena's red. You could have looked for it». The analogy makes no claim about AI consciousness, and the course says so.",
      ],
    },
    {
      id: "propuesta",
      title: "The proposal",
      lead: "Faced with an AI recommendation that affects people, the learner will make and justify a decision with verified evidence, considering those affected and stating how confident they are.",
      facts: [
        { label: "Problem", value: "People accept convincing answers without asking what context the system lacks, without verifying and without considering who is affected." },
        { label: "Format", value: "40 minutes in four moments: Thinkific, Rise 360, Storyline 360 and back to Thinkific." },
        { label: "Scaffold", value: "The judgment cycle: Think, Consult, Verify, Decide, Reflect." },
        { label: "Mastery criterion", value: "8 out of 12 or higher on the reasoning rubric." },
      ],
      tables: [
        {
          caption: "Models and why each one",
          table: {
            heads: ["Model", "What I use it for", "Why this one"],
            widths: [2, 4, 4],
            rows: [
              ["ADDIE", "Managing the whole project, from analysis to evaluation", "It is the frame clients and teams expect; it orders deliverables and reviews"],
              ["Dick & Carey", "Aligning objective, instrument and activity before production", "It forces me to write the assessment before the content"],
              ["Merrill", "Macro structure: activate, demonstrate, apply, integrate", "It starts from a real problem and fits a decision case"],
              ["Gagné", "Fine sequence of screens and blocks", "No piece skips feedback or transfer"],
            ],
          },
        },
      ],
    },
    {
      id: "perfilamiento",
      title: "Learner profile",
      lead: "The profile separates requirements, design decisions and assumptions to validate with the client.",
      tables: [
        {
          table: {
            heads: ["Field", "Content", "Status"],
            widths: [2, 5, 2],
            rows: [
              ["Target learners", "Professionals and university students aged 18+ who use AI in everyday tasks", "Design decision"],
              ["Prior knowledge", "They use chatbots; no training in algorithmic bias, source checking or prompt design", "Assumption"],
              ["Likely attitudes", "They trust answers that «sound right», are in a hurry and rarely verify", "Assumption; checked with the opening scenario"],
              ["Context of use", "Asynchronous self-study in 40-minute sessions, possibly split", "Assumption"],
              ["Infrastructure", "Laptop or phone, Thinkific and Articulate packages; variable connection, so light pieces", "To verify with the client"],
              ["Accessibility", "WCAG 2.2 AA: contrast, keyboard, captions, reduced motion; color is never the only cue", "Requirement"],
            ],
          },
        },
      ],
      note: "Questions to validate with the client: which decisions AI supports today in the organization, what incidents they have had, how much time people can really spend and which reports they need.",
    },
    {
      id: "objetivos",
      title: "Objectives with Bloom and Marzano",
      lead: "One terminal objective and seven enabling objectives. Bloom orders cognitive complexity; Marzano and Kendall add metacognition and the self-system, which is exactly where judgment lives.",
      tables: [
        {
          table: {
            heads: ["#", "The learner will be able to…", "Bloom", "Marzano & Kendall", "Evidence"],
            widths: [1, 5, 2, 3, 3],
            rows: [
              ["T", "Make and justify a decision about an AI recommendation that affects people", "Evaluate", "4 · Decision making", "Decision, reasons and confidence level"],
              ["1", "Identify what context a prompt or AI recommendation is missing", "Analyze", "3 · Analyzing errors", "Answer to «what hasn't ORACLE seen?»"],
              ["2", "Rewrite a vague prompt with context, without sharing data that should stay private", "Apply", "4 · Problem solving", "Rewritten prompt"],
              ["3", "Verify claims and sources generated by AI", "Evaluate", "3 · Analyzing errors", "Verifiable or fabricated classification"],
              ["4", "Distinguish which variable acts as a proxy for another and explain how it produces bias", "Analyze", "3 · Specifying", "Bias identified with a linked reason"],
              ["5", "Compare their initial and final stance and explain what changed it", "Evaluate (metacognitive)", "5 · Monitoring accuracy", "Reflection and stated confidence"],
              ["6", "Value the protocol's importance for their work and their ability to apply it", "Affective: valuing", "6 · Examining importance and efficacy", "Two 1–5 scales with a reason"],
              ["6b", "Plan where and when they will use the protocol in the next two weeks", "Create (plan)", "5 · Specifying goals", "Use plan"],
            ],
          },
        },
      ],
    },
    {
      id: "competencias",
      title: "Competencies with the inverted square",
      lead: "I structured the program with Ruiz Iglesias's inverted square (escuadra invertida): start from the final performance and break it down backwards. It serves as the instructional analysis step of Dick & Carey.",
      list: [
        "Integrating product: the final performance that shows the competency.",
        "Competency elements: the earlier performances that lead to it.",
        "Evidence or performance criteria: what proves each element.",
        "Content, activities and assessment criteria: derived from the evidence.",
      ],
      ordered: true,
      facts: [
        { label: "Competency", value: "Decide with judgment when AI produces information or recommendations that affect people." },
        { label: "Complex situation", value: "A scholarship committee receives ORACLE's recommendation, «Reject · 78% risk», on Elena's application, with partial information." },
        { label: "Integrating product", value: "The justified decision on Elena's scholarship, in the Storyline simulation." },
      ],
      tables: [
        {
          table: {
            heads: ["Competency element", "Objectives", "Product evidence", "Performance evidence", "Knowledge evidence"],
            widths: [4, 1, 3, 3, 2],
            rows: [
              ["E1. Prompt AI with context, without sharing private data", "1, 2", "Rewritten prompt (checklist)", "Reviews the information ORACLE didn't see", "Items 1–4"],
              ["E2. Verify claims and sources generated by AI", "3", "Verifiable or fabricated classification", "Chooses reasons backed by evidence", "Items 5–6"],
              ["E3. Detect bias from proxy variables", "4", "—", "Identifies the postal code as a proxy and links it to a reason", "Items 7–8"],
              ["E4. Make and justify the decision considering those affected", "T", "Justified decision (integrating product)", "Considers everyone affected and states a criterion", "Item 9"],
              ["E5. Review one's own reasoning and plan use", "5, 6, 6b", "Use plan and scales", "Qualified confidence and a condition to revisit", "Item 10"],
            ],
          },
        },
      ],
      note: "The inverted square and Bloom do not compete: the inverted square gives the structure (what the learner must show and in what order); Bloom and Marzano give the level of each step.",
    },
    {
      id: "gagne",
      title: "Gagné's nine events along the path",
      lead: "Each event has a place and a concrete action. They are grouped into Merrill's four phases.",
      tables: [
        {
          table: {
            heads: ["#", "Event", "Merrill", "Where", "What the learner does"],
            widths: [1, 3, 2, 3, 5],
            rows: [
              ["1", "Gain attention", "Activate", "Thinkific", "Meets Mary in the gray room"],
              ["2", "State the objectives", "Activate", "Thinkific", "Reads what they will achieve in 40 minutes"],
              ["3", "Recall prior learning", "Activate", "Thinkific", "Decides a case and writes a real prompt"],
              ["4", "Present content", "Demonstrate", "Rise", "Mary's analogy, the judgment cycle, proxy variables"],
              ["5", "Guide learning", "Demonstrate", "Rise", "Before and after a prompt; a fake reference flagged"],
              ["6", "Elicit performance", "Apply", "Storyline", "Investigates, spots the bias, decides and justifies"],
              ["7", "Give feedback", "Apply", "Storyline and Rise", "Sees consequences and a score per criterion"],
              ["8", "Assess", "Integrate", "Thinkific", "Equivalent final scenario and rewritten prompt"],
              ["9", "Enhance transfer", "Integrate", "Thinkific", "Pocket protocol, use plan and follow-up"],
            ],
          },
        },
      ],
    },
    {
      id: "evaluacion",
      title: "Assessment and rubric",
      lead: "The reasoning process is assessed, not the stance the learner chooses.",
      tables: [
        {
          caption: "Evaluation levels",
          table: {
            heads: ["Level", "Instrument", "When"],
            widths: [3, 6, 2],
            rows: [
              ["Kirkpatrick 1 · Reaction", "Final survey", "End"],
              ["Kirkpatrick 2 · Learning", "Equivalent before-and-after scenario, rubric, quiz and rewritten prompt", "During and at the end"],
              ["Kirkpatrick 3 · Behavior", "Two-week use plan and 15–30 day follow-up", "After"],
              ["Success cases (Brinkerhoff)", "Interviews with learners who transferred most and least", "Pilot"],
            ],
          },
        },
        {
          caption: "Reasoning rubric (Storyline simulation)",
          table: {
            heads: ["Criterion", "0", "1", "2"],
            widths: [3, 3, 3, 4],
            rows: [
              ["Information reviewed", "Opened no documents", "1–2 documents", "All 3 documents"],
              ["Bias identified", "Did not identify it", "Identified it", "Identified it and chose a reason linked to it"],
              ["Reasons with evidence", "None", "1", "2 or 3"],
              ["People affected", "None or one", "Two", "Elena, the institution and other applicants"],
              ["Decision criterion", "No reasons", "The criterion is «what ORACLE says» or «the fastest»", "A criterion based on evidence or fairness"],
              ["Uncertainty", "Full confidence and nothing would change it", "Qualified confidence or a condition to revisit", "Qualified confidence and a condition to revisit"],
            ],
          },
        },
      ],
      note: "The criteria are the evidence of the competency elements. The score runs from 0 to 12 and converts to the activity's 30 points; 8 out of 12 is satisfactory. The format meets product 6 of element E1220 of EC0366.",
    },
    {
      id: "dick-carey",
      title: "Dick & Carey: where each phase lives",
      lead: "Six of the ten phases are resolved in the design; the other four belong to production and the pilot.",
      tables: [
        {
          table: {
            heads: ["Phase", "Status", "Where"],
            widths: [4, 2, 4],
            rows: [
              ["1. Instructional goal", "Done", "Terminal objective"],
              ["2. Instructional analysis", "Done", "Inverted square"],
              ["3. Learners and contexts", "Done, with assumptions", "Learner profile"],
              ["4. Performance objectives", "Done", "Objectives table"],
              ["5. Assessment instruments", "Done", "Rubric, checklist and final test"],
              ["6. Instructional strategy", "Done", "Merrill and Gagné"],
              ["7. Materials", "Next phase", "Rise, Storyline and Thinkific"],
              ["8. Formative evaluation", "Pilot", "Expert review, one-to-one and small group"],
              ["9. Revision", "Pilot", "Adjustments with pilot data"],
              ["10. Summative evaluation", "Pilot", "Kirkpatrick 1–3 and success cases"],
            ],
          },
        },
      ],
    },
  ],
  refsTitle: "References",
  refs: es.refs,
  pdfLabel: "Download the full design (PDF, in Spanish)",
  pdfHref: "/piezas/el-cuarto-de-mary-diseno-instruccional.pdf",
  backToCases: "Back to cases",
};

export function getMaryCase(locale: Locale): MaryCaseContent {
  return locale === "en" ? en : es;
}
