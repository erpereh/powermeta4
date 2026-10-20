/**
 * Descubrimiento dirigido del certificado de retenciones (`CYC_RP_CERT_HAB_<año>`).
 *
 * El JSP lanza el informe con la sentencia
 * `CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC "<año>"$`,
 * pero ningún T3 del diccionario se llama así (`resolver-tablas.ts` no encontró
 * nodos). Este script busca, solo en el diccionario Meta4 (`M4R*`):
 *
 * 1. T3 y nodos cuyo nombre se parece a esos identificadores o que tienen el
 *    ítem `SSE_EJECUCION_CYC`.
 * 2. Las filas de definición del informe `CYC_RP_CERT_HAB*` en tablas con una
 *    columna `*REPORT*`.
 * 3. Para cada nodo candidato: TI, tabla física, sentencia, conectores, ítems y
 *    reglas (todas las tablas `M4RCH_*` con `ID_TI`).
 * 4. Recuentos (`COUNT(*)`) de las tablas físicas por sociedad, sin valores.
 *
 * Nunca lee valores de empleados. Se ejecuta en la VM con acceso a PeopleNet:
 *   npm run portal:certificate-discover -- [sociedad]
 * Salida versionable: `docs/portal/implementacion/certificado-descubrimiento.md`
 * y `.json`, para subirlos al repositorio.
 */
import { writeFileSync } from "node:fs";
import path from "node:path";

import sql from "mssql";

import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import {
  loadEnv,
  resolveNode,
  select,
  text,
  type ResolvedNode,
  type Row,
} from "./meta4-dictionary";

const IDENTIFIER = /^[A-Z0-9_]+$/i;
const BINARY = new Set(["binary", "varbinary", "image", "timestamp", "rowversion"]);
const TEXTUAL = new Set(["char", "nchar", "varchar", "nvarchar"]);
const NAME_PATTERNS = ["%CERT[_]HAB%", "%C[_]HABERES%", "%CERTIFICADO[_]HAB%", "%RP[_]CERT%"];
const REPORT_PATTERN = "%CERT[_]HAB%";
const FILTER_ITEM = "SSE_EJECUCION_CYC";
const ROW_LIMIT = 500;

type Column = { table: string; column: string; type: string };

const quote = (identifier: string): string => {
  if (!IDENTIFIER.test(identifier)) throw new Error(`Identificador no válido: ${identifier}`);
  return `[${identifier}]`;
};

const safely = async <T>(label: string, run: () => Promise<T>, fallback: T): Promise<T> => {
  try {
    return await run();
  } catch (error) {
    console.warn(`  ${label}: ${error instanceof Error ? error.message : "error"}`);
    return fallback;
  }
};

const main = async () => {
  loadEnv();
  const society = (process.argv[2] ?? "CYC").toUpperCase();
  if (!IDENTIFIER.test(society)) throw new Error("Sociedad no válida.");
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  try {
    const inventory: Column[] = (
      await select(
        pool,
        `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME LIKE 'M4R%' ORDER BY TABLE_NAME, ORDINAL_POSITION`,
      )
    ).map((row) => ({
      table: String(row.TABLE_NAME),
      column: String(row.COLUMN_NAME),
      type: String(row.DATA_TYPE).toLowerCase(),
    }));
    const tables = new Map<string, Column[]>();
    for (const column of inventory)
      tables.set(column.table, [...(tables.get(column.table) ?? []), column]);
    const has = (table: string, ...columns: string[]) =>
      columns.every((name) => tables.get(table)?.some((column) => column.column === name));
    const visible = (table: string) =>
      (tables.get(table) ?? [])
        .filter((column) => !BINARY.has(column.type))
        .map((column) => quote(column.column))
        .join(", ");

    // 1. T3 y nodos candidatos.
    const likeAny = (column: string) =>
      NAME_PATTERNS.map((_, index) => `${quote(column)} LIKE @v${index}`).join(" OR ");
    const candidates = new Map<string, { object: string; node: string; reason: string }>();
    const addCandidate = (object: unknown, node: unknown, reason: string) => {
      const t3 = text(object);
      const id = text(node);
      if (t3 && id && !candidates.has(`${t3}!${id}`))
        candidates.set(`${t3}!${id}`, { object: t3, node: id, reason });
    };
    const t3Rows = has("M4RCH_T3S", "ID_T3")
      ? await safely(
          "M4RCH_T3S",
          () =>
            select(
              pool,
              `SELECT TOP ${ROW_LIMIT} ${visible("M4RCH_T3S")} FROM M4RCH_T3S WHERE ${likeAny("ID_T3")}`,
              NAME_PATTERNS,
            ),
          [],
        )
      : [];
    const nodeRows = await safely(
      "M4RCH_NODES",
      () =>
        select(
          pool,
          `SELECT TOP ${ROW_LIMIT} ID_T3, ID_NODE, ID_TI FROM M4RCH_NODES
WHERE ${likeAny("ID_T3")} OR ${likeAny("ID_NODE")} OR ${likeAny("ID_TI")}`,
          NAME_PATTERNS,
        ),
      [],
    );
    for (const row of nodeRows) addCandidate(row.ID_T3, row.ID_NODE, "nombre");
    for (const row of t3Rows) {
      const object = text(row.ID_T3);
      if (!object) continue;
      for (const node of await select(pool, "SELECT ID_NODE FROM M4RCH_NODES WHERE ID_T3 = @v0", [
        object,
      ]))
        addCandidate(object, node.ID_NODE, "T3 por nombre");
    }
    // Nodos con el ítem del filtro del informe.
    const itemTables = [...tables.keys()].filter((table) => has(table, "ID_TI", "ID_ITEM"));
    const filterTis = new Set<string>();
    for (const table of itemTables) {
      for (const row of await safely(
        table,
        () =>
          select(
            pool,
            `SELECT DISTINCT TOP ${ROW_LIMIT} ID_TI FROM ${quote(table)} WHERE ID_ITEM = @v0`,
            [FILTER_ITEM],
          ),
        [],
      )) {
        const ti = text(row.ID_TI);
        if (ti) filterTis.add(ti);
      }
    }
    for (const ti of filterTis)
      for (const row of await select(
        pool,
        "SELECT ID_T3, ID_NODE FROM M4RCH_NODES WHERE ID_TI = @v0",
        [ti],
      ))
        addCandidate(row.ID_T3, row.ID_NODE, `ítem ${FILTER_ITEM}`);
    console.log(`T3 por nombre: ${t3Rows.length} · nodos candidatos: ${candidates.size}`);

    // 2. Definición del informe.
    const report: Record<string, Row[]> = {};
    for (const [table, columns] of tables) {
      const reportColumns = columns.filter(
        (column) => TEXTUAL.has(column.type) && /REPORT|RPT/i.test(column.column),
      );
      if (reportColumns.length === 0) continue;
      const where = reportColumns.map((column) => `${quote(column.column)} LIKE @v0`).join(" OR ");
      const rows = await safely(
        table,
        () =>
          select(
            pool,
            `SELECT TOP ${ROW_LIMIT} ${visible(table)} FROM ${quote(table)} WHERE ${where}`,
            [REPORT_PATTERN],
          ),
        [],
      );
      if (rows.length > 0) report[table] = rows;
    }
    console.log(`Tablas con definición del informe: ${Object.keys(report).length}`);

    // 3. Resolución de cada nodo y metadatos de su TI.
    const resolved: (ResolvedNode & { reason: string; tiTables: Record<string, Row[]> })[] = [];
    const tiTables = [...tables.keys()].filter(
      (table) => table.startsWith("M4RCH_") && has(table, "ID_TI"),
    );
    for (const candidate of candidates.values()) {
      const node = await resolveNode(pool, candidate.object, candidate.node);
      const byTable: Record<string, Row[]> = {};
      if (node.ti) {
        for (const table of tiTables) {
          const rows = await safely(
            table,
            () =>
              select(
                pool,
                `SELECT TOP ${ROW_LIMIT} ${visible(table)} FROM ${quote(table)} WHERE ID_TI = @v0`,
                [node.ti ?? ""],
              ),
            [],
          );
          if (rows.length > 0) byTable[table] = rows;
        }
      }
      resolved.push({ ...node, reason: candidate.reason, tiTables: byTable });
    }

    // 4. Recuentos de las tablas físicas (sin valores).
    const counts: Record<string, number | string> = {};
    for (const table of new Set(resolved.flatMap((node) => (node.table ? [node.table] : [])))) {
      if (!IDENTIFIER.test(table)) continue;
      const scoped = (
        await select(
          pool,
          "SELECT COUNT(*) AS N FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @v0 AND COLUMN_NAME = 'ID_ORGANIZATION'",
          [table],
        )
      )[0];
      counts[table] = await safely<number | string>(
        table,
        async () => {
          const [row] = await select(
            pool,
            Number(scoped?.N) > 0
              ? `SELECT COUNT(*) AS N FROM ${quote(table)} WHERE ID_ORGANIZATION = @v0`
              : `SELECT COUNT(*) AS N FROM ${quote(table)}`,
            Number(scoped?.N) > 0 ? [society] : [],
          );
          return Number(row?.N ?? 0);
        },
        "error",
      );
    }

    const outDir = path.resolve("docs/portal/implementacion");
    writeFileSync(
      path.join(outDir, "certificado-descubrimiento.json"),
      `${JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          note: "Solo metadatos del diccionario Meta4 y recuentos. Sin valores de empleados.",
          society,
          t3: t3Rows,
          filterItemTis: [...filterTis],
          report,
          nodes: resolved,
          counts,
        },
        null,
        2,
      )}\n`,
    );

    const lines = [
      "# Descubrimiento del certificado de retenciones",
      "",
      "Generado por `scripts/portal/descubrir-certificado.ts` con el diccionario Meta4.",
      `Sociedad de los recuentos: \`${society}\`. Detalle completo en \`certificado-descubrimiento.json\`.`,
      "",
      "## T3 candidatos",
      "",
      ...(t3Rows.length
        ? t3Rows.map((row) => `- \`${text(row.ID_T3) ?? "—"}\``)
        : ["- Ninguno por nombre."]),
      "",
      `## TI con el ítem \`${FILTER_ITEM}\``,
      "",
      ...(filterTis.size ? [...filterTis].map((ti) => `- \`${ti}\``) : ["- Ninguna."]),
      "",
      "## Definición del informe",
      "",
      ...(Object.keys(report).length
        ? Object.entries(report).map(([table, rows]) => `- \`${table}\`: ${rows.length} filas`)
        : ["- Sin filas `CYC_RP_CERT_HAB*` en columnas de informe."]),
      "",
      "## Nodos",
      "",
    ];
    for (const node of resolved) {
      lines.push(`### ${node.object}!${node.node}`, "");
      lines.push(
        `- Motivo: ${node.reason}`,
        `- TI: \`${node.ti ?? "—"}\`${node.isRoot ? " (raíz)" : ""} · objeto de lectura: \`${node.readObject ?? "—"}\` → \`${node.table ?? "—"}\``,
        ...(node.table ? [`- Filas en \`${node.table}\`: ${counts[node.table] ?? "—"}`] : []),
        ...node.connectors.map(
          (connector) =>
            `- Conector: \`${connector.item}\` = \`${connector.parentNode}.${connector.parentItem}\``,
        ),
        ...node.sentenceParams.map((param) => `- Parámetro ${param.position}: \`${param.item}\``),
        ...Object.entries(node.tiTables).map(
          ([table, rows]) => `- \`${table}\`: ${rows.length} filas`,
        ),
        "",
        "```sql",
        node.sentence ?? "-- sin sentencia de lectura",
        "```",
        "",
      );
    }
    writeFileSync(path.join(outDir, "certificado-descubrimiento.md"), `${lines.join("\n")}\n`);
    console.log(`Nodos resueltos: ${resolved.length}`);
    console.log("Escrito docs/portal/implementacion/certificado-descubrimiento.{md,json}");
  } finally {
    await pool.close();
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
