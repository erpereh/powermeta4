/** Única orden en la VM: npm run portal:readonly-audit. Sin sesión ni escrituras ERP. */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import sql from "mssql";
import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { getMeta4BaseUrl } from "../../src/lib/meta4/config";
import { PORTAL_FEATURES } from "../../src/lib/portal/registry";
import { parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";
import { inspectPortalWsdl } from "../../src/lib/portal/soap/wsdl";
import { loadEnv } from "./meta4-dictionary";
import {
  auditErrorCode,
  collectReadonlyAudit,
  type AuditRead,
  type AuditTask,
} from "./readonly-audit-core";

const OUTPUT = path.resolve("docs/portal/implementacion/evidencias-vm");
const main = async () => {
  if (process.argv.length !== 2)
    throw new Error("Ejecuta npm run portal:readonly-audit sin parámetros.");
  loadEnv();
  const tasks: AuditTask[] = [];
  const candidates = new Set<string>();
  const sources: { file: string; sha256: string }[] = [];
  const names = new Set(
    PORTAL_FEATURES.flatMap((feature) =>
      feature.sources.map((source) => path.basename(source.split("?")[0])),
    ),
  );
  const walk = (directory: string) => {
    for (const file of readdirSync(directory, { withFileTypes: true })) {
      const location = path.join(directory, file.name);
      if (file.isDirectory()) {
        walk(location);
        continue;
      }
      if (!file.isFile() || (!names.has(file.name) && !/^menu_(?:sse|mss).*\.js$/.test(file.name)))
        continue;
      const buffer = readFileSync(location);
      sources.push({
        file: path.relative(process.cwd(), location).replaceAll("\\", "/"),
        sha256: createHash("sha256").update(buffer).digest("hex"),
      });
      for (const ref of parseMeta4References(buffer.toString("utf8"))) candidates.add(ref.object);
    }
  };
  try {
    walk(path.resolve("clon_portal/portal"));
    tasks.push({ id: "original-sources", status: "ok", rows: sources.length });
  } catch {
    tasks.push({ id: "original-sources", status: "error", code: "SOURCE_READ_FAILED" });
  }
  let pool: sql.ConnectionPool | undefined;
  let connectionError = "NOT_CONNECTED";
  try {
    pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
    tasks.push({ id: "connection", status: "ok" });
  } catch (error) {
    connectionError = auditErrorCode(error);
    tasks.push({ id: "connection", status: "error", code: connectionError });
  }
  const connectedPool = pool;
  const read: AuditRead = async (statement, params = {}) => {
    if (!connectedPool) throw new Error(connectionError);
    const request = connectedPool.request();
    for (const [key, value] of Object.entries(params)) {
      if (value instanceof Date) request.input(key, sql.Date, value);
      else if (typeof value === "number") request.input(key, sql.Int, value);
      else
        request.input(
          key,
          key === "organization"
            ? sql.VarChar(4)
            : key === "employeeId"
              ? sql.VarChar(64)
              : sql.NVarChar(128),
          value,
        );
    }
    return (await request.query<Record<string, unknown>>(statement)).recordset;
  };
  const data = await collectReadonlyAudit(PORTAL_FEATURES, read, [...candidates].sort());
  tasks.push(...data.tasks);
  const soap: { service: string; status: number | null; issues: readonly string[] }[] = [];
  let base: string | null = null;
  try {
    base = getMeta4BaseUrl();
  } catch {
    tasks.push({ id: "soap-config", status: "error", code: "SOAP_NOT_CONFIGURED" });
  }
  for (const [service, contract] of Object.entries(SOAP_CATALOG)) {
    try {
      if (!base) {
        soap.push({ service, status: null, issues: ["Configuración no disponible"] });
        continue;
      }
      const response = await fetch(`${base}/services/${service}?wsdl`, {
        redirect: "manual",
        signal: AbortSignal.timeout(15_000),
      });
      const body = response.ok ? await response.text() : "";
      const issues =
        body.length > 4_000_000
          ? ["WSDL_SIZE_LIMIT"]
          : response.ok
            ? inspectPortalWsdl(contract, body)
            : ["WSDL no disponible"];
      soap.push({ service, status: response.status, issues });
      tasks.push({
        id: `wsdl/${service}`,
        status: issues.length ? "incomplete" : "ok",
        ...(issues.length ? { code: "WSDL_INCOMPATIBLE_OR_UNAVAILABLE" } : {}),
      });
    } catch (error) {
      soap.push({ service, status: null, issues: ["Sin respuesta"] });
      tasks.push({ id: `wsdl/${service}`, status: "error", code: auditErrorCode(error) });
    }
  }
  if (pool)
    try {
      await pool.close();
    } catch (error) {
      tasks.push({ id: "connection-close", status: "error", code: auditErrorCode(error) });
    }
  let revision: string | null = null;
  try {
    revision = execFileSync("git", ["rev-parse", "HEAD"], {
      encoding: "utf8",
      windowsHide: true,
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    tasks.push({ id: "git-revision", status: "incomplete", code: "REVISION_UNAVAILABLE" });
  }
  const errors = tasks.filter((task) => task.status !== "ok");
  const manifest = {
    formatVersion: 1,
    generatedAt: new Date().toISOString(),
    revision,
    privacy:
      "Solo metadatos saneados y recuentos sin identidad. Sin blobs, empleados, salarios individuales, sesiones ni credenciales.",
    features: PORTAL_FEATURES.length,
    sources,
    coverage: data.coverage,
    registry: PORTAL_FEATURES.map((feature) => ({
      id: feature.id,
      route: feature.route,
      variants: feature.availableIn ?? ["BASE", "CYC", "IBER", "COLL"],
      sources: feature.sources,
      consults: (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult"
          ? [
              {
                id: section.consult.id,
                meta4: section.consult.meta4,
                reader: section.consult.reader,
                scope: section.consult.query?.scope ?? null,
                tables: section.consult.query?.tables ?? [],
              },
            ]
          : [],
      ),
    })),
    counts: {
      ok: tasks.length - errors.length,
      failed: tasks.filter((task) => task.status === "error").length,
      incomplete: tasks.filter((task) => task.status === "incomplete").length,
    },
    tasks,
  };
  mkdirSync(OUTPUT, { recursive: true });
  const json = (name: string, value: unknown) =>
    writeFileSync(path.join(OUTPUT, name), `${JSON.stringify(value, null, 2)}\n`, "utf8");
  json("dictionary.json", {
    formatVersion: 1,
    tables: data.dictionary,
    referencesInRules: data.referencesInRules,
  });
  json("contracts.json", { formatVersion: 1, columns: data.contracts, soap });
  json("probes.json", { formatVersion: 1, probes: data.probes });
  json("errors.json", { formatVersion: 1, errors });
  json("manifest.json", manifest);
  writeFileSync(
    path.join(OUTPUT, "resumen.md"),
    [
      "# Diagnóstico de solo lectura del portal",
      "",
      `Revisión: ${revision ?? "no disponible"}. Pantallas: ${PORTAL_FEATURES.length}.`,
      "",
      `Tareas correctas: ${manifest.counts.ok}. Errores: ${manifest.counts.failed}. Incompletas: ${manifest.counts.incomplete}.`,
      "",
      "Solo se han intentado SELECT de esquema/diccionario y agregados del código, y GET de WSDL. No se ha ejecutado LN4, APISQL extraído, procedimientos, autenticación SOAP ni escrituras.",
      "",
      "Los literales libres y comentarios de las reglas están omitidos. Las referencias, fórmulas y correspondencias disponibles no acreditan permisos efectivos ni paridad visual del portal original.",
      "",
      "## Pendientes",
      "",
      "| Tarea | Estado | Código |",
      "| --- | --- | --- |",
      ...errors.map(
        (task) => `| ${task.id.replaceAll("|", " ")} | ${task.status} | ${task.code ?? "—"} |`,
      ),
      "",
      "Versionar los seis archivos generados de esta carpeta. No se realizan commits ni push automáticamente.",
      "",
    ].join("\n"),
    "utf8",
  );
  console.log(
    `Diagnóstico terminado: ${manifest.counts.ok} tareas correctas; ${errors.length} pendientes. Resultados en docs/portal/implementacion/evidencias-vm/.`,
  );
  if (errors.length) process.exitCode = 1;
};
main().catch((error: unknown) => {
  console.error(
    `Diagnóstico interrumpido: ${auditErrorCode(error)}. No se muestran mensajes del servidor ni credenciales.`,
  );
  process.exitCode = 1;
});
