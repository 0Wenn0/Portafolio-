import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "ICE-ENDES — Arquitectura de datos — Wendy Ramírez Burgos",
  description:
    "ICE-ENDES: infraestructura de conocimiento para la ENDES (Perú, INEI). Ocho capas de arquitectura, validadas contra NHANES, IPUMS-DHS, nhanesA, CRONICAS y SABE.",
};

const stats = [
  { value: "2,832", label: "variables catalogadas — 13 categorías, 0 sin clasificar" },
  { value: "37 × 19", label: "variables estratégicas × puntos de verificación, 21 años calendario" },
  { value: "45", label: "advertencias metodológicas documentadas, 12 críticas" },
  { value: "34,018", label: "personas en la base cognitiva v1, 43 variables" },
  { value: "19", label: "diccionarios históricos revisados, 1996–2024" },
];

const surveyCards = [
  { code: "PSU", label: "Unidad primaria de muestreo", desc: "Identifica el conglomerado dentro del diseño muestral." },
  { code: "EST", label: "Estrato", desc: "Estrato de diseño, verificado contra microdatos reales por año." },
  { code: "W", label: "Ponderador", desc: "Peso muestral, distinto por módulo y población objetivo." },
  { code: "svy", label: "Comando de encuesta", desc: "Encapsulado vía survey en R para cada tabla temática." },
];

const externalSources = [
  { code: "US", name: "NHANES", desc: "Registro de variables en PostgreSQL, inmutabilidad de archivos por ciclo.", tag: "CDC" },
  { code: "DHS", name: "IPUMS-DHS", desc: "Variables armonizadas entre años y países, pesos pre-transformados.", tag: "Univ. Minnesota" },
  { code: "R", name: "nhanesA", desc: "Encapsula svydesign() y controles de calidad por ciclo.", tag: "Paquete R" },
  { code: "PE", name: "CRONICAS", desc: "Cohorte peruana (UPCH): profundidad clínica en 4 sitios específicos — complementaria, no equivalente.", tag: "UPCH" },
  { code: "LAC", name: "SABE", desc: "Precedente regional en cognición y envejecimiento; ICE-ENDES tiene mayor continuidad temporal (1996–2024).", tag: "OPS/OMS" },
];

export default function IceEndesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-ivory)" }}>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" className="flex flex-col">
        {/* Cover */}
        <section className="box-border px-6 md:px-24 pt-16 pb-12 md:pt-24 md:pb-16 flex flex-col gap-6 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <p className="m-0 text-sm font-medium tracking-wide uppercase text-(--color-secondary)">
            Data architecture · Portafolio técnico
          </p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            ICE-ENDES
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">
            Infraestructura de Conocimiento sobre la Encuesta Demográfica y de Salud
            Familiar (Perú, INEI). Poético en la superficie, científico en la
            estructura.
          </p>
          <dl className="m-0 flex flex-wrap gap-x-12 gap-y-4 mt-4 text-sm">
            <div>
              <dt className="text-(--color-secondary)">Rol</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">Data Architect</dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">Fuente</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">ENDES – INEI Perú (datos públicos, uso libre)</dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">Cobertura temporal</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">1996–2024 (28 años)</dd>
            </div>
          </dl>
        </section>

        {/* El problema */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              El problema de arquitectura
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              28 años de encuestas nacionales no forman, por sí solos, una serie
              longitudinal. Sin una capa de homologación explícita, comparar un año
              contra otro produce diferencias que no son reales: son artefactos del
              instrumento, no del fenómeno.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-secondary)">Lo que existe</p>
                <ul className="m-0 pl-4 flex flex-col gap-1 text-sm leading-relaxed text-(--color-blue)">
                  <li>Microdatos anuales en formato propietario (.sav), sin catálogo unificado.</li>
                  <li>~5,000 variables por año que cambian de nombre o definición sin aviso.</li>
                  <li>Diseño muestral complejo que se pierde si no se preserva desde el origen.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-secondary)">Lo que se necesita</p>
                <ul className="m-0 pl-4 flex flex-col gap-1 text-sm leading-relaxed text-(--color-blue)">
                  <li><b>Trazabilidad</b> — auditable hasta su origen.</li>
                  <li><b>Comparabilidad</b> — equivalencias explícitas entre años.</li>
                  <li><b>Reproducibilidad y escalabilidad</b> — no una consulta puntual.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diagrama de arquitectura */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Un pipeline de ocho capas
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              Cada capa tiene un referente externo que la valida y un punto de control de calidad.
            </p>
          </div>
          <ArchitectureDiagram />
        </section>

        {/* Cifras */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
            Lo que existe hoy, en números
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className="flex flex-col gap-2 pl-6 border-l"
                style={{ borderColor: i === 0 ? "transparent" : "var(--color-hairline)" }}
              >
                <p
                  className="m-0 font-[family-name:var(--font-display)] font-semibold text-[36px] md:text-[44px] leading-none text-(--color-blue)"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </p>
                <p className="m-0 text-sm leading-snug text-(--color-secondary)">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="m-0 text-base leading-relaxed text-(--color-secondary) max-w-[70ch]">
            La revisión histórica de estos 19 diccionarios no fue trabajo
            preliminar: fue la condición para poder diseñar una arquitectura que
            funcione.
          </p>
        </section>

        {/* DuckDB vs PostgreSQL */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Decisión técnica: DuckDB sobre PostgreSQL
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              El volumen del proyecto (28 años × ~35 módulos × ~5,000
              variables/año) y una sola analista no justifican el costo operativo
              de un servidor. DuckDB ofrece SQL completo, es embebido y no
              requiere infraestructura propia.
            </p>
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              El esquema de metadatos se diseña <i>como si</i> fuera PostgreSQL
              desde el inicio: mismas tablas, mismos tipos, mismas restricciones de
              integridad. La migración deja de ser un rediseño y pasa a ser un{" "}
              <i>pg_dump</i> conceptual, activada por umbrales explícitos.
            </p>
            <div
              className="rounded-lg p-6 flex flex-col gap-2"
              style={{ background: "var(--color-blue)" }}
            >
              <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-signal)">
                Regla de migración
              </p>
              <p className="m-0 text-base leading-relaxed text-(--color-ivory)">
                DuckDB → PostgreSQL queda definido como decisión activada por
                evento, no por antojo: concurrencia real de usuarios, control de
                acceso por rol, o crecimiento del catálogo más allá de lo que una
                sola analista puede sostener sin servidor.
              </p>
            </div>
          </div>
        </section>

        {/* Diseño de encuesta */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              El diseño muestral se preserva en el origen
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              Una encuesta con conglomerados, estratos y ponderación no admite
              análisis directo sobre las filas crudas — la capa de <i>survey
              design</i> ata estos parámetros a cada tabla desde su construcción,
              nunca como un parche posterior.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {surveyCards.map((card) => (
              <div
                key={card.code}
                className="flex flex-col gap-2 p-6 rounded"
                style={{ background: "var(--color-dawn)" }}
              >
                <span className="font-[family-name:var(--font-display)] font-semibold text-2xl text-(--color-blue)">
                  {card.code}
                </span>
                <h3 className="m-0 text-[15px] font-semibold leading-tight text-(--color-blue)">
                  {card.label}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reproducibilidad */}
        <section className="box-border px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="md:col-span-4">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Reproducibilidad como condición de entrada
            </h2>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-sm font-semibold text-(--color-blue)">Control de versiones</h3>
              <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                Todo script vive en Git desde el primer commit: condición mínima
                para cualquier hallazgo que aspire a publicación.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-sm font-semibold text-(--color-blue)">Linaje de datos</h3>
              <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                Cada transformación queda registrada: origen, script, versión,
                fecha. Responde una sola pregunta de forma sistemática.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-sm font-semibold text-(--color-blue)">Documento vivo</h3>
              <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                Código, resultados y narrativa metodológica conviven en un mismo
                documento Quarto, ejecutable de principio a fin.
              </p>
            </div>
          </div>
        </section>

        {/* Validación externa */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Validación externa contra cinco referentes
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              La arquitectura no se diseñó en el vacío: se comparó contra
              infraestructura ya probada a escala internacional y regional.
            </p>
          </div>
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {externalSources.map((src) => (
              <li key={src.name} className="flex flex-col gap-2 p-5 rounded border" style={{ borderColor: "var(--color-hairline)" }}>
                <span className="text-xs font-bold tracking-wide" style={{ color: "var(--color-metric)" }}>
                  {src.code}
                </span>
                <h3 className="m-0 text-[16px] font-semibold text-(--color-blue)">
                  {src.name}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                  {src.desc}
                </p>
                <p className="m-0 text-xs text-(--color-secondary) font-mono">{src.tag}</p>
              </li>
            ))}
          </ul>
          <div
            className="rounded-lg p-6 flex flex-col gap-2"
            style={{ background: "var(--color-blue)" }}
          >
            <p className="m-0 text-xs font-semibold uppercase tracking-wide text-(--color-signal)">
              Lo que ningún referente externo tiene
            </p>
            <p className="m-0 text-base leading-relaxed text-(--color-ivory)">
              Conocimiento del contexto histórico específico de esta encuesta
              nacional — discontinuidades de diseño muestral, cambios de
              instrumento entre ediciones, variables que existen solo en ciertos
              años — documentado en 45 advertencias metodológicas, trazable
              variable por variable.
            </p>
          </div>
        </section>

        {/* Estado y visión */}
        <section className="box-border px-6 md:px-24 py-16 md:py-24 flex flex-col gap-6">
          <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[36px] text-(--color-blue) max-w-[70ch]">
            Infraestructura, no un análisis puntual
          </h2>
          <p className="m-0 font-[family-name:var(--font-display)] italic font-medium text-xl leading-snug max-w-[70ch]" style={{ color: "var(--color-metric)" }}>
            La entidad central del sistema es la variable — no la persona, el
            hogar ni el conglomerado.
          </p>
          <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
            El objetivo nunca fue responder una hipótesis. Fue construir el
            sistema que permite responder muchas — de forma trazable, comparable
            en el tiempo y reproducible por un tercero. Por acuerdo de
            confidencialidad no publico mis hallazgos ni resultados de análisis;
            los datos de ENDES en sí son públicos (INEI).
          </p>
          <div className="pt-4">
            <Link
              href="/#casos"
              className="inline-flex items-center h-11 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium text-[15px] w-fit"
            >
              Volver a casos
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
