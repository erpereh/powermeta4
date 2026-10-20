/**
 * Resuelve las lecturas pendientes del portal a SQL físico de PeopleNet.
 *
 * Para cada nodo Meta4 que el registro lee (`OBJETO!NODO`) obtiene, solo del
 * diccionario (`M4RCH_*` / `M4RDC_*`): su TI, el objeto lógico de lectura y su
 * tabla física, la sentencia de lectura original (`M4RCH_SENTENCES3.APISQL`),
 * los conectores de campo con el nodo padre (cómo se filtra por empleado) y el
 * nombre real de cada objeto y campo lógico que aparece en la sentencia.
 * Nunca lee tablas de datos de empleados.
 *
 * Se ejecuta en la VM con acceso a PeopleNet:
 *   node --conditions=react-server --import tsx scripts/portal/resolver-tablas.ts
 * Salida: `data/portal-discovery/lecturas.json` y
 * `docs/portal/implementacion/lecturas-sql.md`.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import sql from "mssql";

import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { collectMeta4References } from "../../src/lib/portal/meta4-refs";
import { PORTAL_FEATURES } from "../../src/lib/portal/registry";
import {
  inList,
  loadEnv,
  resolveNode,
  select,
  sentenceObjects,
  text,
  type ResolvedNode,
} from "./meta4-dictionary";

const main = async () => {
  loadEnv();
  const references = collectMeta4References(PORTAL_FEATURES).filter((reference) =>
    reference.usage.includes("read"),
  );
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  try {
    const resolved = new Map<string, ResolvedNode>();
    const visit = async (object: string, node: string) => {
      const key = `${object}!${node}`;
      if (resolved.has(key)) return;
      const entry = await resolveNode(pool, object, node);
      resolved.set(key, entry);
      // Los padres de los conectores dicen cómo llega el empleado al nodo.
      for (const connector of entry.connectors) await visit(object, connector.parentNode);
    };
    for (const reference of references) {
      // Todos los nodos del objeto: en los `SSE_*` la raíz `SSE_PRINCIPAL` no
      // tiene tabla y los datos viven en nodos hijos (`M4T_*`) que el registro no nombra.
      const all = await select(pool, "SELECT ID_NODE FROM M4RCH_NODES WHERE ID_T3 = @v0", [
        reference.object,
      ]);
      const nodes = new Set([
        ...reference.nodes,
        ...all.map((row) => text(row.ID_NODE) ?? "").filter(Boolean),
      ]);
      for (const node of nodes) await visit(reference.object, node);
    }

    // Objetos lógicos citados en las sentencias → tabla física y campos reales distintos.
    const logicObjects = [
      ...new Set(
        [...resolved.values()].flatMap((entry) => [
          ...(entry.readObject ? [entry.readObject] : []),
          ...(entry.sentence ? sentenceObjects(entry.sentence) : []),
        ]),
      ),
    ];
    const tables: Record<string, string> = {};
    const renamedFields: Record<string, Record<string, string>> = {};
    for (let start = 0; start < logicObjects.length; start += 200) {
      const batch = logicObjects.slice(start, start + 200);
      for (const row of await select(
        pool,
        `SELECT ID_OBJECT, REAL_NAME FROM M4RDC_LOGIC_OBJECT WHERE ID_OBJECT IN (${inList(batch)})`,
        batch,
      )) {
        tables[String(row.ID_OBJECT)] = text(row.REAL_NAME) ?? "";
      }
      for (const row of await select(
        pool,
        `SELECT ID_OBJECT, ID_FIELD, REAL_NAME FROM M4RDC_FIELDS
WHERE ID_OBJECT IN (${inList(batch)}) AND REAL_NAME <> ID_FIELD`,
        batch,
      )) {
        const objectId = String(row.ID_OBJECT);
        renamedFields[objectId] ??= {};
        renamedFields[objectId][String(row.ID_FIELD)] = text(row.REAL_NAME) ?? "";
      }
    }

    const nodes = [...resolved.values()].sort((a, b) =>
      `${a.object}!${a.node}`.localeCompare(`${b.object}!${b.node}`),
    );
    const outputDir = path.resolve("data/portal-discovery");
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(
      path.join(outputDir, "lecturas.json"),
      `${JSON.stringify({ generatedAt: new Date().toISOString(), nodes, tables, renamedFields }, null, 2)}\n`,
    );

    const lines = [
      "# Lecturas del portal resueltas a PeopleNet",
      "",
      "Generado por `scripts/portal/resolver-tablas.ts` solo con el diccionario Meta4",
      "(`M4RCH_*` / `M4RDC_*`). Cada nodo muestra su sentencia de lectura original y",
      "los conectores de campo con su nodo padre. `&OBJ` es un objeto lógico: su",
      "tabla física está en la tabla final.",
      "",
    ];
    for (const entry of nodes) {
      lines.push(`## ${entry.object}!${entry.node}`, "");
      lines.push(
        `- TI: \`${entry.ti ?? "—"}\`${entry.isRoot ? " (raíz)" : ""} · objeto de lectura: \`${entry.readObject ?? "—"}\` → \`${entry.table ?? "—"}\``,
      );
      for (const connector of entry.connectors) {
        lines.push(
          `- Conector: \`${connector.item}\` = \`${connector.parentNode}.${connector.parentItem}\``,
        );
      }
      for (const param of entry.sentenceParams) {
        lines.push(`- Parámetro ${param.position}: \`${param.item}\``);
      }
      lines.push("", "```sql", entry.sentence ?? "-- sin sentencia de lectura", "```", "");
    }
    lines.push("## Objetos lógicos → tablas físicas", "", "| Objeto | Tabla |", "|---|---|");
    for (const [objectId, table] of Object.entries(tables).sort()) {
      lines.push(`| \`${objectId}\` | \`${table}\` |`);
    }
    const renamed = Object.entries(renamedFields).sort();
    if (renamed.length > 0) {
      lines.push("", "## Campos con nombre físico distinto", "");
      for (const [objectId, fields] of renamed) {
        lines.push(
          `- \`${objectId}\`: ${Object.entries(fields)
            .map(([field, real]) => `\`${field}\` → \`${real}\``)
            .join(", ")}`,
        );
      }
    }
    const doc = path.resolve("docs/portal/implementacion/lecturas-sql.md");
    writeFileSync(doc, `${lines.join("\n")}\n`);
    console.log(`Nodos resueltos: ${nodes.length} · objetos lógicos: ${logicObjects.length}`);
    console.log(`Escrito ${path.relative(process.cwd(), doc)}`);
  } finally {
    await pool.close();
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
