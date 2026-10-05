/**
 * Genera `docs/portal/implementacion/dependencias-servidor.md` y `estado.md`
 * desde el registro tipado del portal (`npm run portal:docs`). Sin red ni
 * base de datos: el registro es la única fuente.
 */
import { writeFileSync } from "node:fs";
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
    `Pantallas: ${total}. Con lectura real (SOAP o SQL): ${connected}. Con dependencia explícita: ${total - connected}.`,
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
  return lines.join("\n");
};

writeFileSync(path.join(OUT, "dependencias-servidor.md"), dependencies());
writeFileSync(path.join(OUT, "estado.md"), status());
formatGenerated([path.join(OUT, "dependencias-servidor.md"), path.join(OUT, "estado.md")]);
console.log(
  `Generados dependencias-servidor.md y estado.md (${PORTAL_FEATURES.length} pantallas).`,
);
