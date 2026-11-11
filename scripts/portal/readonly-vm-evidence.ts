import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { z } from "zod";
import { collectMeta4References, parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";
import type { PortalFeature, PortalSqlQuery, ReadContract } from "../../src/lib/portal/types";
import { AUDIT_FILES, verifyAuditArtifacts } from "./readonly-audit-store";
import { AuditFailure, digest, identifier, stripOuterOrderBy } from "./readonly-audit-model";
import { reviewSqlContract } from "./readonly-sql-review";

const technical = z.string().regex(identifier);
const manifestSchema = z
  .object({
    generationId: z.string().uuid(),
    revision: z
      .string()
      .regex(/^[a-f0-9]{40,64}$/)
      .nullable(),
    status: z.enum(["running", "complete", "partial", "interrupted", "failed"]),
    reason: z
      .string()
      .regex(/^[A-Z][A-Z0-9_]*$/)
      .nullable(),
    durationMs: z.number(),
    tasks: z
      .array(
        z
          .object({
            id: z.string(),
            status: z.enum(["ok", "error", "incomplete"]),
            code: z
              .string()
              .regex(/^[A-Z][A-Z0-9_]*$/)
              .optional(),
          })
          .passthrough(),
      )
      .default([]),
    sources: z.array(z.object({ file: z.string(), sha256: z.string().regex(/^[a-f0-9]{64}$/) })),
    coverage: z.object({
      seedObjects: z.array(technical),
      visited: z.array(z.string()),
      unvisited: z.array(z.object({ key: z.string(), value: technical })),
    }),
  })
  .passthrough();
const probesSchema = z
  .object({
    probes: z.array(
      z
        .object({
          feature: z.string(),
          consult: z.string(),
          organization: z.enum(["CYC", "IBER", "COLL"]),
          queryHash: z.string().regex(/^[a-f0-9]{64}$/),
          status: z.enum(["ok", "error", "incomplete"]),
          records: z.number().int().nonnegative().nullable(),
          code: z
            .string()
            .regex(/^[A-Z][A-Z0-9_]*$/)
            .optional(),
        })
        .strict(),
    ),
  })
  .passthrough();
const contractsSchema = z
  .object({
    columns: z.record(z.array(z.record(z.unknown()))),
    soap: z.array(
      z
        .object({ service: z.string(), status: z.number().nullable(), issues: z.array(z.string()) })
        .strict(),
    ),
  })
  .passthrough();
export type ReadonlyVmEvidence = {
  manifest: z.infer<typeof manifestSchema>;
  dictionary: { tables: Record<string, Record<string, unknown>[]> };
  probes: z.infer<typeof probesSchema>["probes"];
  contracts: z.infer<typeof contractsSchema>;
  normalizedLineEndings: boolean;
  history?: HistoricalProbeRun[];
  historyIssue?: string;
};

export type HistoricalProbeRun = {
  commit: string;
  generationId: string;
  revision: string | null;
  probes: z.infer<typeof probesSchema>["probes"];
};

/** Verifica la procedencia y los bytes de sondeos históricos sin cargar otro diccionario. */
export function historicalProbeRun(
  commit: string,
  manifestText: string,
  probesText: string,
): HistoricalProbeRun {
  if (!/^[a-f0-9]{40,64}$/.test(commit)) throw new AuditFailure("HISTORY_INVALID");
  const manifest = manifestSchema
    .extend({ files: z.record(z.string().regex(/^[a-f0-9]{64}$/)) })
    .parse(JSON.parse(manifestText));
  if (
    ![digest(probesText), digest(probesText.replaceAll("\r\n", "\n"))].includes(
      manifest.files["probes.json"],
    )
  )
    throw new AuditFailure("HISTORY_HASH_INVALID");
  const document = probesSchema
    .extend({ generationId: z.literal(manifest.generationId) })
    .parse(JSON.parse(probesText));
  const tasks = new Map(manifest.tasks.map((task) => [task.id, task]));
  return {
    commit,
    generationId: manifest.generationId,
    revision: manifest.revision,
    probes: document.probes.map((probe) => {
      const task = tasks.get(`probe/${probe.organization}/${probe.queryHash.slice(0, 12)}`);
      return probe.status === "error" && task?.status === "incomplete"
        ? { ...probe, status: "incomplete" as const, code: task.code ?? "NOT_EXECUTED" }
        : probe;
    }),
  };
}

export function loadHistoricalProbes(root: string, evidence: ReadonlyVmEvidence): void {
  const directory = "docs/portal/implementacion/evidencias-vm";
  const git = (args: string[]) =>
    execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
  evidence.history = [];
  try {
    const commits = git(["log", "--format=%H", "--", `${directory}/probes.json`])
      .trim()
      .split(/\r?\n/);
    const seen = new Set([evidence.manifest.generationId]);
    for (const commit of commits) {
      if (!/^[a-f0-9]{40,64}$/.test(commit)) continue;
      try {
        const run = historicalProbeRun(
          commit,
          git(["show", `${commit}:${directory}/manifest.json`]),
          git(["show", `${commit}:${directory}/probes.json`]),
        );
        if (seen.has(run.generationId)) continue;
        seen.add(run.generationId);
        if (run.probes.length) evidence.history.push(run);
      } catch {
        evidence.historyIssue = "HISTORY_ENTRY_UNVERIFIED";
      }
    }
  } catch {
    evidence.historyIssue = "HISTORY_UNAVAILABLE";
  }
}

/** Lee la generación versionada; no inicia SQL, SOAP ni reutiliza sus sondeos como actuales. */
export function loadReadonlyVmEvidence(directory: string): ReadonlyVmEvidence | null {
  const present = AUDIT_FILES.filter((file) => existsSync(path.join(directory, file)));
  if (!present.length) return null;
  if (present.length !== AUDIT_FILES.length) throw new AuditFailure("EVIDENCE_INCOMPLETE");
  const files = new Map(
    AUDIT_FILES.map((file) => [file, readFileSync(path.join(directory, file), "utf8")]),
  );
  const checked = verifyAuditArtifacts(files);
  const manifest = manifestSchema.parse(checked.documents.get("manifest.json"));
  const taskById = new Map(manifest.tasks.map((task) => [task.id, task]));
  const probes = probesSchema.parse(checked.documents.get("probes.json")).probes.map((probe) => {
    const task = taskById.get(`probe/${probe.organization}/${probe.queryHash.slice(0, 12)}`);
    // Las generaciones anteriores atribuían error a las sociedades diferidas.
    // Solo se corrige la interpretación: los archivos y hashes siguen intactos.
    return probe.status === "error" && task?.status === "incomplete"
      ? { ...probe, status: "incomplete" as const, code: task.code ?? "NOT_EXECUTED" }
      : probe;
  });
  return {
    manifest,
    dictionary: checked.dictionary,
    probes,
    contracts: contractsSchema.parse(checked.documents.get("contracts.json")),
    normalizedLineEndings: checked.normalizedLineEndings,
  };
}

const dictionaryIndexes = new WeakMap<
  ReadonlyVmEvidence["dictionary"]["tables"],
  Map<string, number>
>();
function t3Index(evidence: ReadonlyVmEvidence): ReadonlyMap<string, number> {
  const tables = evidence.dictionary.tables;
  let index = dictionaryIndexes.get(tables);
  if (!index) {
    index = new Map();
    for (const key of Object.keys(tables)) {
      const object = /\/ID_T3\/([^/]+)$/.exec(key)?.[1];
      if (object) index.set(object, (index.get(object) ?? 0) + 1);
    }
    dictionaryIndexes.set(tables, index);
  }
  return index;
}

export function vmCoverageLabel(evidence: ReadonlyVmEvidence): string {
  return evidence.manifest.tasks.some((task) => task.code === "REFERENCE_LIMIT")
    ? "desconocidas por recorte de referencias (REFERENCE_LIMIT); el cero registrado no acredita cierre"
    : String(evidence.manifest.coverage.unvisited.length);
}

const queryHash = (query: PortalSqlQuery) =>
  digest(query.scope + stripOuterOrderBy(query.statement));

export function staticEvidenceLabel(
  evidence: ReadonlyVmEvidence | null,
  query?: PortalSqlQuery,
): string {
  if (!query) return "sin sentencia SQL registrada";
  if (!evidence) return "sin esquema disponible";
  const review = reviewSqlContract(query, evidence.contracts.columns);
  return `${review.tables.length} tablas y ${review.checkedColumns} columnas calificadas contrastadas; ${review.missing.length} ausentes; ${review.unresolved.length} referencias no verificables; no acredita ejecución SQL`;
}

export function vmEvidenceLabel(
  evidence: ReadonlyVmEvidence | null,
  feature: PortalFeature,
  section?: { id: string; meta4: string; read: ReadContract; query?: PortalSqlQuery },
): string {
  if (!evidence) return "sin evidencia VM disponible";
  const previous = section?.read ?? feature.read;
  const prefix =
    previous.kind !== "pending" && previous.verified ? "Verificación anterior conservada; " : "";
  const currentQueries = new Map(
    (section
      ? [section]
      : (feature.sections ?? []).flatMap((item) => (item.kind === "consult" ? [item.consult] : []))
    ).flatMap((item) => (item.query ? [[item.id, queryHash(item.query)] as const] : [])),
  );
  const probes = evidence.probes.filter(
    (probe) =>
      probe.feature === feature.id &&
      (!section || probe.consult === section.id) &&
      currentQueries.get(probe.consult) === probe.queryHash,
  );
  const queryCount = section
    ? 1
    : (feature.sections ?? []).filter((item) => item.kind === "consult" && item.consult.query)
        .length;
  if (probes.length) {
    const ok = probes.filter((probe) => probe.status === "ok" && probe.records !== null).length;
    return `${prefix}${ok}/${Math.max(probes.length, queryCount * 3)} sondeos SQL correctos; permisos efectivos y paridad visual pendientes`;
  }
  const historical = (evidence.history ?? []).flatMap((run) =>
    run.probes
      .filter(
        (probe) =>
          probe.status === "ok" &&
          probe.records !== null &&
          probe.feature === feature.id &&
          (!section || probe.consult === section.id) &&
          currentQueries.get(probe.consult) === probe.queryHash,
      )
      .map((probe) => ({ run, probe })),
  );
  if (historical.length) {
    const societies = [...new Set(historical.map(({ probe }) => probe.organization))]
      .sort()
      .join(", ");
    return `${prefix}sondeo histórico con sentencia y alcance coincidentes (${societies}; ${[...new Set(historical.map(({ run }) => run.generationId))].join(", ")}); captura actual sin sondeo; permisos efectivos y paridad visual pendientes`;
  }
  if (
    section?.query &&
    evidence.probes.some((probe) => probe.feature === feature.id && probe.consult === section.id)
  )
    return `${prefix}sentencia modificada; nuevo sondeo VM pendiente; permisos efectivos y paridad visual pendientes`;
  if (previous.kind === "soap") {
    const wsdl = evidence.contracts.soap.find((row) => row.service === previous.service);
    if (wsdl?.status === 200 && !wsdl.issues.length)
      return `${prefix}WSDL compatible por GET; operación, permisos y paridad visual pendientes`;
  }
  const roots = section
    ? parseMeta4References(section.meta4).map((ref) => ref.object)
    : collectMeta4References([feature])
        .filter((ref) => ref.usage.includes("read"))
        .map((ref) => ref.object);
  const index = t3Index(evidence);
  const found = [...new Set(roots)].filter((root) => index.has(root));
  return `${prefix}${found.length ? `diccionario parcial de ${found.length} objeto(s)` : "sin contrato confirmado por esta evidencia"}; sondeos de esta función no realizados (${evidence.manifest.status})`;
}

const AREAS = [
  ["Beneficios", "SSE_BFT_EE_BNFT_ELEC"],
  ["Conocimientos", "SSE_H_HR_KNC_LVL"],
  ["Preferencias", "SSE_CR_PREFERENC"],
  ["Objetivos del empleado", "SSE_OBJECTIVES"],
  ["Objetivos del responsable", "SSM_EV_ROL_LV_OBJ"],
  ["Valoración", "SSCO_H_EVALUTE"],
  ["Criterios", "SSM_DEFINE_CRITERIA"],
  ["Presencia", "SCO_GTA_EMPLOYEE_PRESENCE_REPR"],
  ["Competencias/GAP", "SSM_R_JOB_COMP"],
  ["Presupuesto", "SSCO_OR_RP_BUDGET_SAL_WU"],
] as const;
const cell = (value: string) => value.replaceAll("|", " / ").replaceAll("\n", " ");

export function readonlyEvidenceReview(
  evidence: ReadonlyVmEvidence | null,
  features: readonly PortalFeature[],
  root: string,
): string {
  if (!evidence)
    return "# Revisión de evidencias VM\n\nNo hay una generación completa de seis archivos. La validación VM permanece pendiente.\n";
  const m = evidence.manifest;
  const lines = [
    "# Revisión de evidencias VM",
    "",
    "> Generado por `npm run portal:docs`. Solo lee metadatos versionados y originales locales.",
    "",
    `Generación: \`${m.generationId}\`. Revisión analizada: \`${m.revision ?? "desconocida"}\`. Estado guardado: **${m.status}**. Interpretación: ${m.status === "running" ? "captura parcial anterior a la interrupción; no contiene el cierre de la ejecución" : (m.reason ?? "ver tareas")}. Duración de la captura: ${(m.durationMs / 1000).toFixed(1)} s.`,
    `Los cinco hashes y los identificadores de generación se han verificado${evidence.normalizedLineEndings ? " normalizando exclusivamente CRLF a LF" : " sobre los bytes guardados"}. No se han recalculado hashes ni cambiado las evidencias.`,
    `Referencias procesadas: ${m.coverage.visited.length}; pendientes: ${vmCoverageLabel(evidence)}. Contratos de tablas publicados: ${Object.keys(evidence.contracts.columns).length}; atribuciones de sondeos guardadas: ${evidence.probes.length}.`,
    "",
    "Una referencia o un nodo encontrados acreditan metadatos. No acreditan compatibilidad SQL, fórmulas, permisos efectivos ni presentación del portal. Las integraciones anteriores se conservan.",
    "",
    "## Contraste con originales y lectores preparados",
    "",
    "| Área / objeto | Fuentes originales con la referencia y hash verificado | Nodos / apartados de diccionario | Lecturas registradas / estado |",
    "| --- | --- | --- | --- |",
  ];
  const uniqueProbes = [
    ...new Map(
      evidence.probes.map((probe) => [`${probe.organization}/${probe.queryHash}`, probe]),
    ).values(),
  ];
  lines.splice(
    9,
    0,
    `Combinaciones únicas de consulta y sociedad: ${uniqueProbes.length}; correctas: ${uniqueProbes.filter((probe) => probe.status === "ok").length}; fallidas: ${uniqueProbes.filter((probe) => probe.status === "error").length}; diferidas/no ejecutadas: ${uniqueProbes.filter((probe) => probe.status === "incomplete").length}. La interpretación de las tareas diferidas conserva los seis archivos originales.`,
    "",
  );
  const originalBase = path.resolve(root, "clon_portal/portal");
  const sourceDetails: string[] = [];
  const originals = evidence.manifest.sources.flatMap((source) => {
    const location = path.resolve(root, source.file);
    const relative = path.relative(originalBase, location);
    if (
      !relative ||
      relative === ".." ||
      relative.startsWith(`..${path.sep}`) ||
      path.isAbsolute(relative) ||
      !/\.(?:jsp|js)$/i.test(location) ||
      !existsSync(location)
    )
      return [];
    const bytes = readFileSync(location);
    if (digest(bytes) !== source.sha256) return [];
    return [
      {
        file: source.file,
        vmHash: true,
        objects: new Set(parseMeta4References(bytes.toString("utf8")).map((ref) => ref.object)),
      },
    ];
  });
  const paths = new Set(originals.map((source) => path.resolve(root, source.file)));
  for (const source of new Set(features.flatMap((feature) => feature.sources))) {
    const logical = path.resolve(originalBase, source.split("?")[0]);
    const spanish = path.join(path.dirname(logical), "espanol", path.basename(logical));
    const location = existsSync(logical) ? logical : spanish;
    const relative = path.relative(originalBase, location);
    if (
      paths.has(location) ||
      !relative ||
      relative === ".." ||
      relative.startsWith(`..${path.sep}`) ||
      path.isAbsolute(relative) ||
      !/\.(?:jsp|js)$/i.test(location) ||
      !existsSync(location)
    )
      continue;
    paths.add(location);
    originals.push({
      file: path.relative(root, location).replaceAll("\\", "/"),
      vmHash: false,
      objects: new Set(
        parseMeta4References(readFileSync(location, "utf8")).map((ref) => ref.object),
      ),
    });
  }
  for (const [area, object] of AREAS) {
    const sources = originals.filter((source) => source.objects.has(object));
    const hashed = sources.filter((source) => source.vmHash).length;
    const nodes = evidence.dictionary.tables[`M4RCH_NODES/ID_T3/${object}`] ?? [];
    const buckets = t3Index(evidence).get(object) ?? 0;
    const sections = features.flatMap((feature) =>
      (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult" &&
        parseMeta4References(section.consult.meta4).some((ref) => ref.object === object)
          ? [{ feature: feature.id, consult: section.consult }]
          : [],
      ),
    );
    const prepared = sections.filter((section) => section.consult.query).length;
    const probeCount = evidence.probes.filter(
      (probe) =>
        probe.status === "ok" &&
        probe.records !== null &&
        sections.some(
          (section) =>
            section.feature === probe.feature &&
            section.consult.id === probe.consult &&
            section.consult.query &&
            queryHash(section.consult.query) === probe.queryHash,
        ),
    ).length;
    lines.push(
      `| ${area} / \`${object}\` | ${sources.length} fuentes con mención literal; ${hashed} con hash VM coincidente, ${sources.length - hashed} locales añadidas al registro | ${nodes.length} nodos; ${buckets} apartados | ${prepared}/${sections.length} consultas SQL preparadas; ${probeCount}/${prepared * 3} sondeos correctos; permisos/visual pendientes |`,
    );
    sourceDetails.push(
      `### ${area} / ${object}`,
      "",
      ...(sources.length
        ? sources.map(
            (source) =>
              `- [${cell(source.file)}](../../../${source.file}) · ${source.vmHash ? "hash VM coincidente" : "original local; no incluido en la huella VM anterior"}`,
          )
        : ["Sin mención directa recuperada; no acredita inexistencia del objeto."]),
      "",
    );
  }
  const experience = (evidence.dictionary.tables["M4RCH_NODES/ID_T3/SSE_H_HR_KNC_LVL"] ?? []).some(
    (row) => row.ID_NODE === "SSE_H_HR_KNC_EXP" && row.ID_TI === "SSE_H_HR_KNC_EXP",
  );
  const soapRows = [
    ...new Set([
      ...Object.keys(SOAP_CATALOG),
      ...evidence.contracts.soap.map((row) => row.service),
    ]),
  ].map(
    (service) =>
      evidence.contracts.soap.find((row) => row.service === service) ?? {
        service,
        status: null,
        issues: ["Sin resultado en esta generación"],
      },
  );
  lines.push(
    "",
    "## Clasificación de conocimientos",
    "",
    `${experience ? "`SSE_H_HR_KNC_EXP` figura como nodo y TI de `SSE_H_HR_KNC_LVL` en M4RCH_NODES." : "Esta generación no recupera el nodo de experiencia; el registro conserva el vínculo documentado con SSE_H_HR_KNC_LVL."} Se recorre por su T3 padre y por ID_TI; no se reclama un T3 independiente. Esta corrección no habilita un lector ni deduce una tabla física.`,
    "",
    "## WSDL publicados",
    "",
    "| Servicio | GET / contraste | Alcance de la evidencia |",
    "| --- | --- | --- |",
    ...soapRows.map(
      (row) =>
        `| \`${cell(row.service)}\` | ${row.status === 200 && !row.issues.length ? "200; compatible" : `${row.status ?? "no completado"}; ${cell(row.issues.join(", "))}`} | Solo contrato WSDL; ninguna operación SOAP ejecutada |`,
    ),
    "",
    "## Fuentes originales contrastadas",
    "",
    ...sourceDetails,
    "## Contraste estático de las consultas registradas",
    "",
    "Se contrastan nombres físicos de tablas y columnas calificadas con el esquema recuperado. Alias reutilizados, CTE y columnas sin calificar se declaran no verificables. Este análisis no compila ni ejecuta SQL y no prueba permisos ni resultados.",
    "",
    "| Huella de sentencia y alcance | Apartados | Tablas / columnas contrastadas | Ausentes | No verificables / ambiguas |",
    "| --- | --- | --- | --- | --- |",
  );
  const queries = new Map<string, { query: PortalSqlQuery; sections: string[] }>();
  for (const feature of features)
    for (const item of feature.sections ?? []) {
      if (item.kind !== "consult" || !item.consult.query) continue;
      const query = item.consult.query;
      const key = queryHash(query);
      const entry = queries.get(key) ?? { query, sections: [] };
      entry.sections.push(`${feature.id}/${item.consult.id}`);
      queries.set(key, entry);
    }
  for (const [hash, entry] of queries) {
    const review = reviewSqlContract(entry.query, evidence.contracts.columns);
    lines.push(
      `| \`${hash}\` / ${entry.query.scope} | ${cell(entry.sections.join(", "))} | ${review.tables.length} / ${review.checkedColumns} | ${cell(review.missing.join(", ") || "ninguna detectada")} | ${cell(review.unresolved.join(", ") || "ninguna detectada en este análisis limitado")} |`,
    );
  }
  lines.push(
    "",
    "## Sondeos históricos con procedencia",
    "",
    "Los resultados anteriores permanecen separados de los cero sondeos de la captura actual. Solo respaldan una atribución con la misma funcionalidad, apartado, sociedad y huella de sentencia efectiva más alcance. Los contratos modificados quedan sin sondeo coincidente.",
    "",
  );
  if (evidence.historyIssue)
    lines.push(
      `Limitación del historial: \`${evidence.historyIssue}\`; no se atribuye validación a entradas no verificadas.`,
      "",
    );
  if (!evidence.history?.length)
    lines.push("Sin sondeos históricos verificables disponibles localmente.", "");
  for (const run of evidence.history ?? []) {
    lines.push(
      `### Generación ${run.generationId}`,
      "",
      `Commit conservado: \`${run.commit}\`; revisión analizada: \`${run.revision ?? "desconocida"}\`. Hash de probes.json e identificador de generación verificados contra su manifiesto.`,
      "",
      "| Sentencia efectiva + alcance (SHA-256) | Sociedad / resultado | Atribuciones coincidentes con el código actual |",
      "| --- | --- | --- |",
    );
    const grouped = new Map<string, typeof run.probes>();
    for (const probe of run.probes)
      grouped.set(probe.queryHash, [...(grouped.get(probe.queryHash) ?? []), probe]);
    for (const [hash, probes] of grouped) {
      const societies = [
        ...new Map(
          probes.map((probe) => [
            probe.organization,
            `${probe.organization}: ${probe.status}${probe.code ? ` (${probe.code})` : ""}`,
          ]),
        ).values(),
      ].join("; ");
      const current = queries.get(hash)?.sections ?? [];
      const matching = [
        ...new Set(
          probes
            .filter((probe) => current.includes(`${probe.feature}/${probe.consult}`))
            .map((probe) => `${probe.feature}/${probe.consult}`),
        ),
      ];
      lines.push(
        `| \`${hash}\` | ${cell(societies)} | ${cell(matching.join(", ") || "ninguna; contrato cambiado o no registrado")} |`,
      );
    }
    lines.push("");
  }
  lines.push(
    "## Cierre local y límites de evidencia",
    "",
    "Las cuatro consultas corregidas (contratos, preferencias registradas y las dos lecturas de objetivos) conservan sus alias de presentación. La población del certificado usa la correspondencia confirmada SSP_LG_ENT_ADDRESS → M4SSP_LG_ENT_ADD, STD_N_GEO_PLACESP y el orden SSP_FEC_FIN, conservando el filtro de sociedad. Implementación y contraste estático no equivalen a sondeos VM de estas sentencias corregidas.",
    "",
    "Experiencia de conocimientos, criterios, competencias/GAP y presupuesto conservan sus dependencias explícitas: disponer de nodos no completa sus reglas, cálculos ni autorizaciones.",
    "",
    "Cierre con las fuentes locales disponibles, sin solicitar ni ejecutar otra auditoría VM. Se conservan los seis archivos originales. Las validaciones SQL, permisos efectivos, paridad visual y métodos nativos que esta captura no contiene permanecen sin acreditar; las dependencias desconocidas siguen visibles y bloqueadas.",
    "",
  );
  return lines.join("\n");
}
