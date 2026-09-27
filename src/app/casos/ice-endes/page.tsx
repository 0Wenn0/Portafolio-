import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Arquitectura de datos ICE-ENDES — Wendy Ramírez Burgos",
  description:
    "Arquitectura de datos para investigar exposoma y cognición: cómo se homologan y validan múltiples ediciones de la ENDES en una base comparable en el tiempo.",
};

const layers = [
  {
    n: "01",
    title: "Ingesta",
    desc: "Lectura de cada edición de la ENDES en su formato original, sin transformar los datos fuente.",
  },
  {
    n: "02",
    title: "Estructuración",
    desc: "Cada fuente se ordena en un esquema común: llaves, tipos y unidades declarados explícitamente.",
  },
  {
    n: "03",
    title: "Homologación",
    desc: "Las variables que cambiaron de nombre o definición entre ediciones se homologan a un vocabulario único.",
  },
  {
    n: "04",
    title: "Crosswalks",
    desc: "Tablas de correspondencia documentadas para cada variable homologada, con su regla de conversión.",
  },
  {
    n: "05",
    title: "Integración",
    desc: "Las fuentes homologadas se combinan en una base longitudinal, con reglas explícitas de unión.",
  },
  {
    n: "06",
    title: "Control de calidad",
    desc: "Verificaciones obligatorias de integridad antes de que cualquier dato pase a análisis.",
  },
  {
    n: "07",
    title: "Catálogo de metadatos",
    desc: "Cada variable queda documentada: origen, definición, transformación aplicada y edición de procedencia.",
  },
  {
    n: "08",
    title: "Análisis ponderado",
    desc: "La base queda lista para análisis con diseño muestral complejo (ponderadores, estratos, conglomerados).",
  },
];

const surveyCards = [
  { code: "PSU", label: "Unidad primaria de muestreo", desc: "Identifica el conglomerado dentro del diseño muestral." },
  { code: "EST", label: "Estrato", desc: "Agrupa las unidades muestrales por criterios de estratificación." },
  { code: "W", label: "Ponderador", desc: "Factor de expansión para representar a la población de referencia." },
  { code: "svy", label: "Comando de encuesta", desc: "Sintaxis de análisis que incorpora el diseño muestral complejo." },
];

const externalSources = [
  { name: "NHANES", desc: "Encuesta de salud y nutrición de EE. UU., referencia para variables de exposoma." },
  { name: "IPUMS-DHS", desc: "Repositorio armonizado de encuestas demográficas y de salud a nivel internacional." },
  { name: "nhanesA", desc: "Paquete de R usado para contrastar convenciones de codificación y validación externa." },
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
            Arquitectura de datos
          </p>
          <h1 className="m-0 font-[family-name:var(--font-display)] font-medium text-[40px] md:text-[64px] leading-[1.1] text-(--color-blue) max-w-[900px]">
            Arquitectura de datos para investigar exposoma y cognición
          </h1>
          <p className="m-0 text-lg md:text-xl leading-relaxed text-(--color-secondary) max-w-[70ch]">
            Cómo convertir varias ediciones de la ENDES, con cambios de diseño y de
            variables entre años, en una base confiable y comparable en el tiempo.
          </p>
          <dl className="m-0 flex flex-wrap gap-x-12 gap-y-4 mt-4 text-sm">
            <div>
              <dt className="text-(--color-secondary)">Organización</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">
                Grupo de Investigación en Neurociencia y Salud Mental, Universidad Científica del Sur
              </dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">Rol</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">Arquitecta de datos de investigación</dd>
            </div>
            <div>
              <dt className="text-(--color-secondary)">Periodo</dt>
              <dd className="m-0 mt-1 text-(--color-blue)">2026 a la fecha</dd>
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
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              La ENDES cambia de diseño y de variables entre ediciones. Sin una capa de
              homologación explícita, comparar un año contra otro produce diferencias
              que no son reales: son artefactos del instrumento, no del fenómeno.
            </p>
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              El reto no es leer los datos: es construir una infraestructura que
              haga trazable cada transformación, para que cualquier resultado se
              pueda auditar hasta su fuente.
            </p>
          </div>
        </section>

        {/* Pipeline de 8 capas */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              El pipeline, en ocho capas
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              Cada capa tiene una responsabilidad única y un punto de control de calidad.
            </p>
          </div>
          <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layers.map((layer) => (
              <li
                key={layer.n}
                className="flex flex-col gap-2 p-6 rounded"
                style={{ background: "var(--color-dawn)" }}
              >
                <span
                  className="text-sm font-semibold text-(--color-blue)"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {layer.n}
                </span>
                <h3 className="m-0 text-[17px] font-semibold leading-tight text-(--color-blue)">
                  {layer.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                  {layer.desc}
                </p>
              </li>
            ))}
          </ol>
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
              El análisis es predominantemente de lectura, sobre archivos columnares,
              sin necesidad de escrituras concurrentes ni de un servidor separado.
              DuckDB corre embebido, en el mismo proceso que el análisis, lo que
              simplifica el despliegue y reduce la superficie de fallo.
            </p>
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              PostgreSQL habría sido la elección correcta si el proyecto necesitara
              escrituras concurrentes desde múltiples usuarios o servir los datos
              como backend de una aplicación. No es el caso aquí.
            </p>
          </div>
        </section>

        {/* Diseño de encuesta */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Diseño muestral complejo
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              La ENDES no es una muestra aleatoria simple: ignorar su diseño produce
              estimaciones sesgadas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {surveyCards.map((card) => (
              <div
                key={card.code}
                className="flex flex-col gap-2 p-6 rounded border"
                style={{ borderColor: "var(--color-hairline)" }}
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
              Reproducibilidad
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-4">
            <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
              Cada transformación queda registrada como código versionado, no como un
              paso manual. Cualquier persona del equipo puede reconstruir la base
              completa desde los archivos fuente y obtener el mismo resultado.
            </p>
          </div>
        </section>

        {/* Validación externa */}
        <section className="box-border px-6 md:px-24 py-16 flex flex-col gap-10 border-b" style={{ borderColor: "var(--color-hairline)" }}>
          <div className="flex flex-col gap-3 max-w-[70ch]">
            <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[32px] text-(--color-blue)">
              Validación externa
            </h2>
            <p className="m-0 text-lg leading-relaxed text-(--color-secondary)">
              Las convenciones de homologación se contrastan contra estándares ya
              usados por otros repositorios de encuestas poblacionales.
            </p>
          </div>
          <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-3 gap-6">
            {externalSources.map((src) => (
              <li key={src.name} className="flex flex-col gap-2">
                <h3 className="m-0 text-[17px] font-semibold text-(--color-blue)">
                  {src.name}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-(--color-secondary)">
                  {src.desc}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Estado y visión */}
        <section className="box-border px-6 md:px-24 py-16 md:py-24 flex flex-col gap-6">
          <h2 className="m-0 font-[family-name:var(--font-display)] font-medium text-[28px] md:text-[36px] text-(--color-blue) max-w-[70ch]">
            Estado y visión
          </h2>
          <p className="m-0 text-lg leading-relaxed text-(--color-blue) max-w-[70ch]">
            La base está lista para análisis ponderado, con controles de integridad
            obligatorios y documentación suficiente para incorporar a personal nuevo
            sin perder trazabilidad. Por acuerdo de confidencialidad no publico datos
            ni resultados del estudio.
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
