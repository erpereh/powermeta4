/** npm run portal:holidays-discover -- <CYC|IBER|COLL>; solo SELECT de metadatos. */
import { writeFileSync } from "node:fs";
import path from "node:path";
import sql from "mssql";
import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { discoverHolidayMetadata } from "./holidays-discovery";
import { loadEnv, resolveNode, select } from "./meta4-dictionary";

async function main() {
  const society = process.argv[2]?.toUpperCase();
  if (!society || !["CYC", "IBER", "COLL"].includes(society) || process.argv.length !== 3)
    throw new Error("Uso: npm run portal:holidays-discover -- <CYC|IBER|COLL>");
  loadEnv();
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  try {
    const result = await discoverHolidayMetadata(
      (statement, values) => select(pool, statement, values),
      (object, node) => resolveNode(pool, object, node),
    );
    const note =
      "Solo metadatos del diccionario y columnas físicas. Sin valores de empleados ni escrituras. La sociedad identifica el contraste solicitado; el diccionario Meta4 es compartido.";
    const output = { generatedAt: new Date().toISOString(), society, note, ...result };
    const directory = path.resolve("docs/portal/implementacion");
    writeFileSync(
      path.join(directory, "festivos-descubrimiento.json"),
      `${JSON.stringify(output, null, 2)}\n`,
    );
    const lines = [
      "# Descubrimiento del calendario de festivos",
      "",
      note,
      "",
      `Sociedad para contraste: ${society}.`,
      "",
      `Formato: ${result.formatVersion} · objetos: ${result.counts.objects} · nodos: ${result.counts.nodes} · TI: ${result.counts.tis} · filas de metadatos: ${result.counts.metadataRows}.`,
      "",
      "## Advertencias",
      "",
      ...(result.warnings.length
        ? result.warnings.map((warning) => `- ${warning}`)
        : [
            "- Sin omisiones detectadas por las comprobaciones del extractor; requiere revisión del contrato.",
          ]),
      "",
      "## Asignación del calendario",
      "",
      `Objeto auxiliar: ${result.assignment.object}.`,
      `Nodos requeridos ausentes: ${result.assignment.missingNodes.join(", ") || "ninguno"}.`,
      `Metadatos por clave de dimensión/grupo: ${result.assignment.dimensionKeys.length}.`,
      `Dimensiones/grupos sin metadatos: ${result.assignment.missingDimensions.join(", ") || "ninguno"}.`,
      `Reglas LN4 requeridas ausentes: ${result.missingSources.join(", ") || "ninguna"}.`,
      "",
      "Se incluyen todos los nodos de los objetos recorridos, también los de rol, centro, país e históricos citados por APPLYTABLE. Las metarreglas nativas se enumeran como dependencias; no se ejecutan ni se interpreta su prioridad a partir del orden de llamadas.",
      "",
      "## Metarreglas nativas",
      "",
      ...result.nativeMethods.map((entry) => `- ${entry.ti}.${entry.item}: ${entry.method}`),
      "",
      "## Nodos y sentencias originales",
      "",
    ];
    for (const node of result.nodes)
      lines.push(
        `### ${node.object}!${node.node}`,
        "",
        `TI: ${node.ti ?? "sin TI"} · objeto lógico: ${node.readObject ?? "ninguno"} · tabla: ${node.table ?? "ninguna"}.`,
        "",
        ...node.connectors.map(
          (connector) => `- ${connector.item} = ${connector.parentNode}.${connector.parentItem}`,
        ),
        "",
        "```sql",
        node.sentence ?? "-- sin sentencia",
        "```",
        "",
      );
    lines.push(
      "## Código LN4 y correspondencias",
      "",
      "El JSON adjunto conserva las filas de M4RCH_RULES3.SOURCE_CODE, ítems, filtros, conectores, TI base y campos lógicos/físicos disponibles. Ningún método se ejecuta.",
      "",
      "Contrastar CARGA, SSE_BUSCA_CALENDARIO, el calendario elegido, su vigencia y los códigos de día usados para ENERO–DICIEMBRE antes de activar la lectura real. Los vacíos o truncamientos no acreditan ausencia de festivos.",
      "",
    );
    writeFileSync(path.join(directory, "festivos-descubrimiento.md"), `${lines.join("\n")}\n`);
    console.log(
      `Objetos: ${result.counts.objects} · nodos: ${result.counts.nodes} · TI: ${result.counts.tis} · metadatos: ${result.counts.metadataRows}`,
    );
    console.log("Escrito docs/portal/implementacion/festivos-descubrimiento.{md,json}");
    if (result.warnings.length > 0) {
      console.warn(
        `Extracción incompleta: ${result.warnings.length} advertencias. Revisar los archivos.`,
      );
      process.exitCode = 1;
    }
  } finally {
    await pool.close();
  }
}

main().catch((error: unknown) => {
  // No imprimir mensajes del driver: pueden contener detalles de conexión.
  console.error(
    error instanceof Error && error.message.startsWith("Uso:")
      ? error.message
      : "No se pudo completar el descubrimiento de festivos. Comprueba la configuración y el acceso de solo lectura a PeopleNet.",
  );
  process.exitCode = 1;
});
