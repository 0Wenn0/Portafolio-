import type { Locale } from "./types";

/* Caso: diagnóstico de adopción de IA (dashboard con un caso ficticio), leído con EVIDENT. */
export type DiagnosticRow = {
  letter: string;
  name: string;
  inCase: string;
};

export type AdoptionDiagnosticContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  notice: string;
  openDashboard: string;
  dashboardHref: string;
  openRepo: string;
  repoHref: string;
  problemTitle: string;
  problem: string[];
  variablesTitle: string;
  variablesIntro: string;
  variables: { name: string; desc: string }[];
  evidentTitle: string;
  evidentIntro: string;
  evidentLink: { label: string; href: string };
  rows: DiagnosticRow[];
  realTitle: string;
  real: { label: string; items: string[] }[];
  backToCases: string;
  backHref: string;
};

const es: AdoptionDiagnosticContent = {
  metaTitle: "Diagnóstico de adopción de IA — EVIDENT aplicado — Wendy Ramírez Burgos",
  metaDescription:
    "Por qué un equipo no usa la herramienta de IA que le dieron: seis variables, un embudo de acceso a impacto y medición antes y después. Dashboard interactivo con un caso ficticio, leído con el método EVIDENT.",
  eyebrow: "Adopción de IA · Caso ficticio · EVIDENT aplicado",
  title: "Diagnóstico de adopción de IA: por qué nadie usa la herramienta",
  intro:
    "Cuando una organización despliega una herramienta de IA y casi nadie la usa, el problema rara vez es la capacitación. Construí un dashboard interactivo con un caso ficticio, Cauce Seguros, para mostrar mi método de punta a punta: encontrar la barrera, intervenir donde pesa y medir si el trabajo cambió.",
  notice:
    "Caso ficticio. Cauce Seguros no existe y los números son simulados. Lo real es el método y la plantilla.",
  openDashboard: "Abrir el dashboard interactivo",
  dashboardHref: "https://0wenn0.github.io/IA-Adoption-Strategy/",
  openRepo: "Ver el código",
  repoHref: "https://github.com/0Wenn0/IA-Adoption-Strategy",
  problemTitle: "El problema",
  problem: [
    "Una aseguradora regional de 340 personas despliega Copilot en toda la organización. Tres meses después, casi nadie fuera de TI lo sigue usando.",
    "Parece terquedad. En una industria regulada, cuando nadie usa la herramienta suele haber detrás gobernanza, auditoría y miedo a un error que nadie pueda explicar después. Recetar más capacitación antes de saber qué falla es gastar dos veces.",
  ],
  variablesTitle: "Seis variables para encontrar la barrera",
  variablesIntro: "El diagnóstico revisa seis barreras. En el caso, las más severas fueron el contexto organizacional y el valor percibido.",
  variables: [
    { name: "Valor percibido", desc: "El proceso de siempre ya resuelve el problema; no hay urgencia de cambiar." },
    { name: "Fricción", desc: "La herramienta es más lenta o compleja dentro del flujo real de trabajo." },
    { name: "Capacidad", desc: "No está claro cómo aplicarla a una tarea concreta." },
    { name: "Confianza", desc: "Miedo a un error que nadie pueda explicar después." },
    { name: "Contexto organizacional", desc: "Auditoría, incentivos y jefes siguen premiando el proceso anterior." },
    { name: "Diseño tecnológico", desc: "La herramienta no está construida alrededor de cómo trabaja el equipo." },
  ],
  evidentTitle: "Cómo se lee con EVIDENT",
  evidentIntro:
    "EVIDENT es mi método para diseñar aprendizaje y adopción con evidencia. Este caso recorre sus fases: así se ve cada letra cuando el problema es que una herramienta no se usa.",
  evidentLink: { label: "Conocer el método EVIDENT", href: "/metodo-evident" },
  rows: [
    {
      letter: "E",
      name: "Evidencia",
      inCase:
        "Línea base a 30 días con un embudo de seis etapas: acceso, activación, adopción, integración, impacto y escala. Solo 15% llegaba a una adopción real.",
    },
    {
      letter: "V",
      name: "Voz",
      inCase:
        "Diagnóstico con las seis variables, a partir de lo que dicen el equipo de suscripción y siniestros y sus responsables. Las barreras más fuertes fueron el contexto organizacional y el valor percibido.",
    },
    {
      letter: "I",
      name: "Intención",
      inCase:
        "El objetivo es que cambie un flujo de trabajo concreto: la revisión de siniestros, con tiempo por caso y tasa de error como indicadores.",
    },
    {
      letter: "D",
      name: "Diseño cognitivo-conductual",
      inCase:
        "Mapa de personas por motivación e influencia frente a capacidad técnica. La palanca fueron los suscriptores senior, por la influencia que tienen en el equipo.",
    },
    {
      letter: "E · N",
      name: "Ejecución y navegación adaptativa",
      inCase:
        "La intervención se dirige a las barreras con más peso y se ajusta en ciclos cortos. El dashboard muestra su efecto; el detalle de cada sesión queda fuera de esta pieza.",
    },
    {
      letter: "T",
      name: "Transferencia y trazabilidad",
      inCase:
        "Antes y después con datos de uso (frecuencia, tiempo por siniestro, errores de captura) y traducción a lo que aprueba un presupuesto: horas recuperadas al mes. Una nota metodológica separa lo simulado de lo real.",
    },
  ],
  realTitle: "Qué es real y qué es simulado",
  real: [
    {
      label: "Real",
      items: [
        "El método: seis variables, embudo de acceso a escala y medición antes y después.",
        "La plantilla: el dashboard acepta un caso real con solo cambiar los datos al inicio del script.",
      ],
    },
    {
      label: "Simulado",
      items: ["La empresa y todas las cifras: el 15% de adopción, los cambios en uso, tiempo y errores, y las horas recuperadas."],
    },
    {
      label: "Pendiente",
      items: ["Aplicarlo con datos reales de una organización y publicar el resultado sin datos confidenciales."],
    },
  ],
  backToCases: "Volver a los casos",
  backHref: "/#casos",
};

const en: AdoptionDiagnosticContent = {
  metaTitle: "AI Adoption Diagnostic — EVIDENT in practice — Wendy Ramírez Burgos",
  metaDescription:
    "Why a team doesn't use the AI tool it was given: six variables, an access-to-impact funnel, and before-and-after measurement. An interactive dashboard with a fictional case, read through the EVIDENT method.",
  eyebrow: "AI adoption · Fictional case · EVIDENT in practice",
  title: "AI adoption diagnostic: why nobody uses the tool",
  intro:
    "When an organization rolls out an AI tool and almost nobody uses it, the problem is rarely training. I built an interactive dashboard with a fictional case, Cauce Seguros, to show my method end to end: find the barrier, intervene where it matters, and measure whether the work changed.",
  notice: "Fictional case. Cauce Seguros does not exist and the numbers are simulated. The method and the template are real.",
  openDashboard: "Open the interactive dashboard",
  dashboardHref: "https://0wenn0.github.io/IA-Adoption-Strategy/",
  openRepo: "See the code",
  repoHref: "https://github.com/0Wenn0/IA-Adoption-Strategy",
  problemTitle: "The problem",
  problem: [
    "A regional insurer with 340 employees rolls out Copilot across the organization. Three months later, almost nobody outside IT is still using it.",
    "It looks like stubbornness. In a regulated industry, when nobody uses the tool, the cause is usually governance, audits, and fear of an error no one can explain later. Prescribing more training before knowing what's failing means paying twice.",
  ],
  variablesTitle: "Six variables to find the barrier",
  variablesIntro: "The diagnostic checks six barriers. In this case, the most severe were organizational context and perceived value.",
  variables: [
    { name: "Perceived value", desc: "The usual process already solves the problem; there's no urgency to change." },
    { name: "Friction", desc: "The tool is slower or more complex inside the real workflow." },
    { name: "Capability", desc: "It's unclear how to apply it to a specific task." },
    { name: "Trust", desc: "Fear of an error no one can explain later." },
    { name: "Organizational context", desc: "Audits, incentives, and managers still reward the old process." },
    { name: "Technology design", desc: "The tool isn't built around how the team works." },
  ],
  evidentTitle: "Reading it through EVIDENT",
  evidentIntro:
    "EVIDENT is my method for designing evidence-based learning and adoption. This case walks through its phases: this is what each letter looks like when the problem is a tool nobody uses.",
  evidentLink: { label: "Explore the EVIDENT method", href: "/en/metodo-evident" },
  rows: [
    {
      letter: "E",
      name: "Evidence",
      inCase:
        "A 30-day baseline with a six-stage funnel: access, activation, adoption, integration, impact, and scale. Only 15% reached real adoption.",
    },
    {
      letter: "V",
      name: "Voice",
      inCase:
        "A diagnostic with the six variables, based on what the underwriting and claims team and their leads say. The strongest barriers were organizational context and perceived value.",
    },
    {
      letter: "I",
      name: "Intent",
      inCase:
        "The goal is for a specific workflow to change: claims review, with time per case and error rate as indicators.",
    },
    {
      letter: "D",
      name: "Cognitive-behavioral design",
      inCase:
        "A map of people by motivation and influence versus technical skill. The lever was senior underwriters, because of their influence on the team.",
    },
    {
      letter: "E · N",
      name: "Execution and adaptive navigation",
      inCase:
        "The intervention targets the heaviest barriers and adjusts in short cycles. The dashboard shows its effect; the detail of each session is outside this piece.",
    },
    {
      letter: "T",
      name: "Transfer and traceability",
      inCase:
        "Before and after with usage data (frequency, time per claim, data-entry errors) and a translation into what gets a budget approved: hours recovered per month. A methodological note separates what's simulated from what's real.",
    },
  ],
  realTitle: "What's real and what's simulated",
  real: [
    {
      label: "Real",
      items: [
        "The method: six variables, an access-to-scale funnel, and before-and-after measurement.",
        "The template: the dashboard accepts a real case by changing only the data at the top of the script.",
      ],
    },
    {
      label: "Simulated",
      items: ["The company and every figure: the 15% adoption, the changes in usage, time, and errors, and the hours recovered."],
    },
    {
      label: "Pending",
      items: ["Applying it with real data from an organization and publishing the result without confidential information."],
    },
  ],
  backToCases: "Back to case studies",
  backHref: "/en#casos",
};

export function getAdoptionDiagnostic(locale: Locale): AdoptionDiagnosticContent {
  return locale === "en" ? en : es;
}
