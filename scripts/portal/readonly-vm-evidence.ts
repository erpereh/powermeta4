import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { collectMeta4References, parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";
import type { PortalFeature, PortalSqlQuery, ReadContract } from "../../src/lib/portal/types";
import { AUDIT_FILES, verifyAuditArtifacts } from "./readonly-audit-store";
import { AuditFailure, digest, identifier, stripOuterOrderBy } from "./readonly-audit-model";

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
    sources: z.array(z.object({ file: z.string(), sha256: z.string().regex(/^[a-f0-9]{64}$/) })),
    coverage: z.object({
      seedObjects: z.array(technical),
      visited: z.array(z.string()),
      unvisited: z.array(z.object({ key: z.string(), value: technical })),
    }),
  })
  .passthrough();
const dictionarySchema = z
  .object({ tables: z.record(z.array(z.record(z.unknown()))) })
  .passthrough();
const probesSchema = z
  .object({
    probes: z.array(
      z
        .object({
          feature: z.string(),
          consult: z.string(),
          organization: z.enum(["CYC", "IBER", "COLL"]),
          queryHash: z.string(),
          status: z.enum(["ok", "error", "incomplete"]),
          records: z.number().int().nonnegative().nullable(),
          code: z.string().optional(),
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
  dictionary: z.infer<typeof dictionarySchema>;
  probes: z.infer<typeof probesSchema>["probes"];
  contracts: z.infer<typeof contractsSchema>;
  normalizedLineEndings: boolean;
};

/** Lee la generación versionada; no inicia SQL, SOAP ni reutiliza sus sondeos como actuales. */
export function loadReadonlyVmEvidence(directory: string): ReadonlyVmEvidence | null {
  const present = AUDIT_FILES.filter((file) => existsSync(path.join(directory, file)));
  if (!present.length) return null;
  if (present.length !== AUDIT_FILES.length) throw new AuditFailure("EVIDENCE_INCOMPLETE");
  const files = new Map(
    AUDIT_FILES.map((file) => [file, readFileSync(path.join(directory, file), "utf8")]),
  );
  const checked = verifyAuditArtifacts(files);
  return {
    manifest: manifestSchema.parse(JSON.parse(files.get("manifest.json") ?? "null")),
    dictionary: dictionarySchema.parse(JSON.parse(files.get("dictionary.json") ?? "null")),
    probes: probesSchema.parse(JSON.parse(files.get("probes.json") ?? "null")).probes,
    contracts: contractsSchema.parse(JSON.parse(files.get("contracts.json") ?? "null")),
    normalizedLineEndings: checked.normalizedLineEndings,
  };
}

const queryHash = (query: PortalSqlQuery) =>
  digest(query.scope + stripOuterOrderBy(query.statement));

export function vmEvidenceLabel(
  evidence: ReadonlyVmEvidence | null,
  feature: PortalFeature,
  section?: { id: string; meta4: string; read: ReadContract; query?: PortalSqlQuery },
): string {
  if (!evidence) return "pendiente de auditoría nueva";
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
  const found = [...new Set(roots)].filter((root) =>
    Object.keys(evidence.dictionary.tables).some((key) => key.endsWith(`/ID_T3/${root}`)),
  );
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
    `Generación: \`${m.generationId}\`. Revisión analizada: \`${m.revision ?? "desconocida"}\`. Estado: **${m.status}**. Motivo: \`${m.reason ?? "fin de tareas"}\`. Duración: ${(m.durationMs / 1000).toFixed(1)} s.`,
    `Los cinco hashes y los identificadores de generación se han verificado${evidence.normalizedLineEndings ? " normalizando exclusivamente CRLF a LF" : " sobre los bytes guardados"}. No se han recalculado hashes ni cambiado las evidencias.`,
    `Referencias procesadas: ${m.coverage.visited.length}; pendientes: ${m.coverage.unvisited.length}. Contratos de tablas publicados: ${Object.keys(evidence.contracts.columns).length}; sondeos guardados: ${evidence.probes.length}.`,
    "",
    "Una referencia o un nodo encontrados acreditan metadatos. No acreditan compatibilidad SQL, fórmulas, permisos efectivos ni presentación del portal. Las integraciones anteriores se conservan.",
    "",
    "## Contraste con originales y lectores preparados",
    "",
    "| Área / objeto | Fuentes originales con la referencia y hash verificado | Nodos / apartados de diccionario | Lecturas registradas / estado |",
    "| --- | --- | --- | --- |",
  ];
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
    const buckets = Object.keys(evidence.dictionary.tables).filter((key) =>
      key.endsWith(`/ID_T3/${object}`),
    ).length;
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
    "## Cierre pendiente",
    "",
    `${["failed", "interrupted", "running"].includes(m.status) || m.coverage.unvisited.length || !evidence.probes.length ? "Repetir `npm run portal:readonly-audit` en la VM con el ejecutor corregido. " : "La ejecución permite revisar los sondeos disponibles; estudiar sus fallos y dependencias antes de decidir otra extracción. "}Mantener los seis archivos de esta generación. Revisar columnas y sondeos por sociedad y alcance; no marcar lectores nuevos como validados a partir de metadatos parciales.`,
    "",
  );
  return lines.join("\n");
}
