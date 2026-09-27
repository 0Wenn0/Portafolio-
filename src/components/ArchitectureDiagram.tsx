const groups = [
  {
    n: "01",
    title: "Ingesta & catálogo",
    accent: "var(--color-signal)",
    layers: [
      { title: "Raw layer", desc: "Microdatos .sav y diccionarios, inmutables por año.", tool: "Sistema de archivos" },
      { title: "Metadata catalog", desc: "Catálogo maestro de variables.", tool: "DuckDB + Excel" },
      { title: "Crosswalk longitudinal", desc: "Equivalencias entre ediciones anuales.", tool: "Excel + DuckDB" },
    ],
  },
  {
    n: "02",
    title: "Procesamiento",
    accent: "var(--color-rose)",
    layers: [
      { title: "Data lineage", desc: "Registro trazable de cada transformación.", tool: "Git + tabla DuckDB" },
      { title: "Curated data layer", desc: "Tablas temáticas limpias por dominio.", tool: "Parquet + DuckDB" },
      { title: "Survey design layer", desc: "Diseño muestral preservado desde el origen.", tool: "R · survey" },
    ],
  },
  {
    n: "03",
    title: "Integración & salida",
    accent: "var(--color-metric)",
    layers: [
      { title: "Exposome integration", desc: "Llave espacio-temporal para fuentes externas.", tool: "DuckDB + geopandas" },
      { title: "Observatorio", desc: "Explorador de variables, cara pública.", tool: "Quarto dashboard" },
    ],
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="flex flex-col gap-6">
      <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-(--color-secondary)">
        <span>Ingesta &amp; catálogo</span>
        <span aria-hidden="true">&rarr;</span>
        <span>Procesamiento</span>
        <span aria-hidden="true">&rarr;</span>
        <span>Integración &amp; salida</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <div key={group.n} className="flex flex-col gap-4">
            <div
              className="flex items-baseline gap-2 pb-2 border-b"
              style={{ borderColor: "var(--color-hairline)" }}
            >
              <span
                className="text-xs font-semibold tracking-wide text-(--color-secondary)"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {group.n}
              </span>
              <h3 className="m-0 text-sm font-semibold uppercase tracking-wide text-(--color-blue)">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {group.layers.map((layer) => (
                <div
                  key={layer.title}
                  className="flex flex-col gap-1 pl-4 py-1 border-l-2"
                  style={{ borderColor: group.accent }}
                >
                  <h4 className="m-0 text-[15px] font-semibold text-(--color-blue)">
                    {layer.title}
                  </h4>
                  <p className="m-0 text-sm leading-snug text-(--color-secondary)">
                    {layer.desc}
                  </p>
                  <p className="m-0 text-xs text-(--color-secondary) font-mono">
                    {layer.tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
