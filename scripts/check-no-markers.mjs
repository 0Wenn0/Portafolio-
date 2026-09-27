// Prueba de "sin marcadores" (sección 5 de la especificación): falla el
// build si algún VALOR de texto en src/content contiene un corchete "[" —
// señal de un marcador de contenido pendiente ("[por verificar]",
// "[Foto de taller]") que no debe llegar a producción. Importa los módulos
// de contenido (no su código fuente) para no confundir sintaxis de
// TypeScript (tipos tupla, arreglos de coordenadas) con contenido real.
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

const contentDir = join(process.cwd(), "src", "content");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return walk(full);
    return full.endsWith(".ts") && name !== "types.ts" ? [full] : [];
  });
}

function collectStrings(value, path, out) {
  if (typeof value === "string") {
    if (value.includes("[")) out.push({ path, value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}[${index}]`, out));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      collectStrings(item, path ? `${path}.${key}` : key, out);
    }
  }
}

const files = walk(contentDir);
let failed = false;

for (const file of files) {
  const mod = await import(pathToFileURL(file).href);
  for (const [exportName, exportValue] of Object.entries(mod)) {
    const hits = [];
    collectStrings(exportValue, exportName, hits);
    if (hits.length > 0) {
      failed = true;
      const label = relative(process.cwd(), file);
      hits.forEach((hit) => {
        console.error(`✗ Marcador «[» en ${label} → ${hit.path}`);
        console.error(`  "${hit.value}"`);
      });
    }
  }
}

if (failed) {
  console.error("\nLa prueba de «sin marcadores» falló.");
  process.exit(1);
} else {
  console.log(`✓ Sin marcadores en ${files.length} archivo(s) de contenido.`);
}
