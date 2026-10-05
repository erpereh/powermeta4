/**
 * Genera `docs/portal/implementacion/dependencias-servidor.md` y `estado.md`
 * desde el registro tipado del portal (`npm run portal:docs`). Sin red ni
 * base de datos: el registro es la única fuente.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { collectMeta4References } from "../../src/lib/portal/meta4-refs";
import { PENDING_LABELS } from "../../src/lib/portal/pending";
import { PORTAL_DOMAINS, PORTAL_FEATURES } from "../../src/lib/portal/registry";
import type { PortalFeature, ReadContract, WriteOperation } from "../../src/lib/portal/types";
import { formatGenerated } from "./format";

const OUT = path.resolve("docs/portal/implementacion");

const cell = (value: string): string => value.replaceAll("|", "\\|").replaceAll("\n", " ");

const readLabel = (read: ReadContract): string => {
  switch (read.kind) {
    case "soap":
      return `SOAP \`${read.service}.${read.operation}\`${read.verified ? "" : " (por verificar en servidor)"}`;
    case "sql":
      return `SQL ${read.tables.map((table) => `\`${table}\``).join(", ")}${read.verified ? " (verificada)" : " (por verificar)"}`;
    case "pending":
      return `Pendiente (${read.pending.join(", ")})`;
  }
};

const featureWrites = (feature: PortalFeature): WriteOperation[] => [
  ...(feature.writes ?? []),
  ...(feature.sections ?? []).flatMap((section) =>
    section.kind === "form" ? [section.form.write] : [],
  ),
];

const isQuery = (feature: PortalFeature, write: WriteOperation): boolean =>
  (feature.sections ?? []).some(
    (section) =>
      section.kind === "form" && section.form.write === write && section.form.mode === "query",
  );

const dependencies = (): string => {
  const lines: string[] = [
    "# Dependencias del servidor del portal",
    "",
    "> Generado por `npm run portal:docs` desde `src/lib/portal/registry`. No editar a mano.",
    "",
    "Cada fila es una operación que powermeta4 **no ejecuta**: el formulario se muestra completo",
    "y validado, pero el envío queda deshabilitado con su método Meta4 hasta que exista un",
    "servicio publicado y una aprobación de escritura (AGENTS.md solo aprueba el alta de personas).",
    "",
    "## Pendientes",
    "",
    "| ID | Qué falta |",
    "| --- | --- |",
    ...Object.entries(PENDING_LABELS).map(
      ([id, label]) => `| ${id} | ${cell(`${label.title}: ${label.detail}`)} |`,
    ),
    "",
    "## Lecturas sin contrato real",
    "",
    "| Pantalla | Ruta | Objetos Meta4 del original | Pendientes |",
    "| --- | --- | --- | --- |",
  ];
  for (const feature of PORTAL_FEATURES) {
    if (feature.read.kind !== "pending") continue;
    lines.push(
      `| ${cell(feature.title)} | \`${feature.route}\` | ${cell(feature.read.meta4.map((ref) => `\`${ref}\``).join(", ") || "—")} | ${feature.read.pending.join(", ")} |`,
    );
  }
  lines.push(
    "",
    "## Operaciones bloqueadas",
    "",
    "| Pantalla | Operación | Tipo | Método Meta4 | Argumentos | Pendientes |",
    "| --- | --- | --- | --- | --- | --- |",
  );
  for (const feature of PORTAL_FEATURES) {
    for (const write of featureWrites(feature)) {
      lines.push(
        `| ${cell(feature.title)} | ${cell(write.label)} | ${isQuery(feature, write) ? "Consulta" : "Escritura"} | \`${cell(write.meta4Method)}\` | ${cell(write.arguments ?? "—")} | ${write.pending.join(", ")} |`,
      );
    }
  }
  const references = collectMeta4References(PORTAL_FEATURES);
  lines.push(
    "",
    `## Objetos Meta4 referenciados (${references.length})`,
    "",
    "Entrada de `npm run portal:discover` en la VM.",
    "",
    "| Objeto | Nodos | Uso | Pantallas |",
    "| --- | --- | --- | --- |",
    ...references.map(
      (reference) =>
        `| \`${reference.object}\` | ${cell(reference.nodes.join(", ") || "—")} | ${reference.usage.join(", ")} | ${reference.features.length} |`,
    ),
    "",
  );
  return lines.join("\n");
};

const status = (): string => {
  const total = PORTAL_FEATURES.length;
  const connected = PORTAL_FEATURES.filter((feature) => feature.read.kind !== "pending").length;
  const lines: string[] = [
    "# Estado de implementación del portal",
    "",
    "> Generado por `npm run portal:docs` desde `src/lib/portal/registry`. No editar a mano.",
    "",
    `Pantallas: ${total}. Con lector principal implementado (SOAP o SQL): ${connected}. Con dependencia principal explícita: ${total - connected}.`,
    "",
    "Implementado describe código respaldado por fuentes, no una integración viva comprobada. Las nuevas lecturas y el transporte SOAP requieren pruebas en la VM. Una pantalla conectada puede tener apartados pendientes; el inventario siguiente los separa.",
    "",
  ];
  for (const domain of PORTAL_DOMAINS) {
    const features = PORTAL_FEATURES.filter((feature) => feature.domain === domain.id);
    lines.push(
      `## ${domain.title} (${domain.profile})`,
      "",
      "| Pantalla | Ruta | Lectura | Escrituras | Variantes | Ficha |",
      "| --- | --- | --- | --- | --- | --- |",
      ...features.map((feature) => {
        const writes = featureWrites(feature).length;
        return `| ${cell(feature.title)} | \`${feature.route}\` | ${cell(readLabel(feature.read))} | ${writes === 0 ? "—" : `${writes} bloqueada${writes === 1 ? "" : "s"}`} | ${feature.availableIn?.join(", ") ?? "Todas"} | [ficha](../${feature.ficha}) |`;
      }),
      "",
    );
  }
  lines.push(
    "## Inventario por apartado",
    "",
    "| Pantalla / apartado | Lector | Contrato | Estado | Fuente original |",
    "| --- | --- | --- | --- | --- |",
  );
  for (const feature of PORTAL_FEATURES) {
    for (const section of feature.sections ?? []) {
      if (section.kind !== "consult") continue;
      const query = section.consult;
      lines.push(
        `| ${cell(`${feature.title} / ${query.title}`)} | \`${query.reader}\` | ${cell(readLabel(query.read))} | ${query.reader === "dependency" ? "Falta contrato de tablas/filtros/reglas o servicio publicado; P02/P05" : "Implementado; pendiente de prueba VM"} | \`${cell(query.meta4)}\` |`,
      );
    }
  }
  lines.push("");
  return lines.join("\n");
};

/** Contraste reproducible de las 76 fichas y sus JSP, por variante. No usa red. */
const sourceAudit = (): string => {
  const original = path.resolve("clon_portal/portal");
  const names = new Set(
    PORTAL_FEATURES.flatMap((feature) =>
      feature.sources.map((source) => path.basename(source).toLowerCase()),
    ),
  );
  const candidates: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (names.has(entry.name.toLowerCase())) candidates.push(full);
    }
  };
  walk(original);
  const lines = [
    "# Contraste de fuentes del portal",
    "",
    "> Generado por `npm run portal:docs`. Inventario estático de fuentes y contratos; no equivale a una prueba en la VM.",
    "",
    "Se contrastan todas las pantallas registradas con su ficha y la presencia de JSP BASE, CYC, IBER y COLL. La búsqueda textual de ítems señala dónde falta correspondencia; los JSP no contienen por sí solos tablas ni reglas SQL suficientes. No se activan servicios por semejanza de nombres.",
    "",
    "| Pantalla | Ficha | Fuentes BASE / CYC / IBER / COLL | Apartados implementados / pendientes | Ítems pendientes de correspondencia con JSP |",
    "| --- | --- | --- | --- | --- |",
  ];
  for (const feature of PORTAL_FEATURES) {
    const files = candidates.filter((file) =>
      feature.sources.some((source) => {
        const segments = source.toLowerCase().split("/");
        const relative = path.relative(original, file).replaceAll("\\", "/").toLowerCase();
        return (
          path.basename(file).toLowerCase() === segments.at(-1) &&
          relative.split("/").includes(segments[0])
        );
      }),
    );
    const variants = ["BASE", "CYC", "IBER", "COLL"].map(
      (variant) =>
        files.filter((file) => {
          const relative = path.relative(original, file).replaceAll("\\", "/");
          return variant === "BASE"
            ? !relative.toLowerCase().startsWith("m4custom/")
            : relative.toLowerCase().startsWith(`m4custom/${variant.toLowerCase()}/`);
        }).length,
    );
    const source = files
      .map((file) => readFileSync(file, "latin1"))
      .join("\n")
      .toUpperCase();
    const queries = (feature.sections ?? []).flatMap((section) =>
      section.kind === "consult" ? [section.consult] : [],
    );
    const unknown = [
      ...new Set(
        queries.flatMap((query) =>
          query.fields.flatMap((field) =>
            field.item && !source.includes(field.item.toUpperCase()) ? [field.item] : [],
          ),
        ),
      ),
    ];
    const implemented = queries.filter((query) => query.reader !== "dependency").length;
    lines.push(
      `| \`${feature.id}\` | ${existsSync(path.resolve("docs/portal", feature.ficha)) ? "presente" : "AUSENTE"} | ${variants.join(" / ")} | ${implemented} / ${queries.length - implemented} | ${cell(unknown.join(", ") || "—")} |`,
    );
  }
  lines.push(
    "",
    "Los campos SQL reutilizados pueden no aparecer en el JSP con su nombre físico. Deben contrastarse con la consulta implementada y el diccionario en la VM. Los apartados de beneficiario, familia IRPF, grupo/nivel, direcciones, teléfonos y los demás dominios pendientes no tienen filtros y correspondencia de tablas suficientes en esta copia. `portal:discover` reúne metadatos para completarlos.",
    "",
  );
  return lines.join("\n");
};

writeFileSync(path.join(OUT, "dependencias-servidor.md"), dependencies());
writeFileSync(path.join(OUT, "estado.md"), status());
writeFileSync(path.join(OUT, "auditoria-fuentes.md"), sourceAudit());
formatGenerated([
  path.join(OUT, "dependencias-servidor.md"),
  path.join(OUT, "estado.md"),
  path.join(OUT, "auditoria-fuentes.md"),
]);
console.log(
  `Generados dependencias-servidor.md y estado.md (${PORTAL_FEATURES.length} pantallas).`,
);
