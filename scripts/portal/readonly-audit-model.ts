import { createHash } from "node:crypto";
import { z } from "zod";
export const REQUIRED_READ_OBJECTS = [
  "SSE_BFT_EE_BNFT_ELEC",
  "SSE_H_HR_KNC_LVL",
  "SSE_CR_PREFERENC",
  "SSE_OBJECTIVES",
  "SSM_EV_ROL_LV_OBJ",
  "SCO_GTA_EMPLOYEE_PRESENCE_REPR",
  "SCO_MENU",
  "SMCO_BUDGET",
  "SSM_JOB_COMPETENCES",
  "SSM_DEFINE_CRITERIA",
  "SMCO_EVALUATOR",
  "SSCO_H_EVALUTE",
  "SSM_TRAINING_REQUEST",
  "SSM_SALARY_REVIEW_PROCESS",
  "SMCO_EMPLOYEE_PROFESIONAL_DATA",
  "SCO_APPLYVAL_CALEN",
  "SSE_CARGA_FESTIVOS",
  "SSM_R_JOB_COMP",
  "SSCO_OR_RP_BUDGET_SAL_WU",
] as const;

// Nodo/TI confirmado en el diccionario de la VM, no un T3 independiente.
export const REQUIRED_READ_NODES = [
  { object: "SSE_H_HR_KNC_LVL", node: "SSE_H_HR_KNC_EXP", ti: "SSE_H_HR_KNC_EXP" },
] as const;

export type AuditRow = Record<string, unknown>;
export type AuditParams = Readonly<Record<string, string | number | Date>>;
export type AuditKind = "metadata" | "probe" | "private";
export type AuditBinding = { type: string; length?: number };
export type AuditReadOptions = {
  id: string;
  family: string;
  kind: AuditKind;
  bindings?: Readonly<Record<string, AuditBinding>>;
  signal?: AbortSignal;
};
export type AuditRead = (
  statement: string,
  params?: AuditParams,
  options?: AuditReadOptions,
) => Promise<AuditRow[]>;
export type AuditTask = {
  id: string;
  status: "ok" | "error" | "incomplete";
  code?: string;
  rows?: number;
  durationMs?: number;
  reused?: boolean;
};
export const AUDIT_LIMITS = {
  totalMs: 30 * 60_000,
  dictionaryMs: 20 * 60_000,
  probesMs: 8 * 60_000,
  connectionMs: 15_000,
  metadataMs: 15_000,
  probeMs: 30_000,
  wsdlMs: 15_000,
  slowMs: 5_000,
  heartbeatMs: 5_000,
  publishMs: 60_000,
  cancelMs: 2_000,
  closeMs: 5_000,
  batchSize: 150,
  pageSize: 2000,
  maxPages: 100,
  checkpointAgeMs: 24 * 60 * 60_000,
} as const;
export class AuditFailure extends Error {
  constructor(readonly code: string) {
    super(code);
    this.name = "AuditFailure";
  }
}
export const digest = (value: string | Uint8Array): string =>
  createHash("sha256").update(value).digest("hex");
export const identifier = /^[A-Z][A-Z0-9_#$]{0,127}$/i;
export const technicalText = (value: unknown): string | null =>
  typeof value === "string" && identifier.test(value.trim()) ? value.trim() : null;
export const auditErrorCode = (error: unknown): string => {
  if (error instanceof AuditFailure) return error.code;
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    typeof error.code === "string" &&
    [
      "ELOGIN",
      "ETIMEOUT",
      "ESOCKET",
      "EINSTLOOKUP",
      "ECONNREFUSED",
      "ENOTFOUND",
      "ECONNCLOSED",
      "ENOCONN",
      "ECANCEL",
    ].includes(error.code)
  )
    return error.code;
  if (
    error &&
    typeof error === "object" &&
    "number" in error &&
    typeof error.number === "number" &&
    Number.isInteger(error.number) &&
    error.number > 0 &&
    error.number < 100_000
  )
    return `SQL_${error.number}`;
  return error instanceof Error &&
    ["PortalSqlGuardError", "TimeoutError", "AbortError"].includes(error.name)
    ? error.name
    : "READ_FAILED";
};
export type AuditReference = {
  key: "ID_T3" | "ID_TI" | "ID_OBJECT" | "ID_SENTENCE";
  value: string;
};
const technical = z.string().regex(identifier);
const rowSchema = z.record(z.union([z.string(), z.number().finite(), z.null()]));
export const cacheEntrySchema = z
  .object({
    key: z.string().regex(/^[a-f0-9]{64}$/),
    rows: z.array(rowSchema),
    references: z.array(
      z
        .object({ key: z.enum(["ID_T3", "ID_TI", "ID_OBJECT", "ID_SENTENCE"]), value: technical })
        .strict(),
    ),
    physical: z.array(technical),
    symbols: z.array(technical),
    ruleReferences: z.array(technical),
  })
  .strict();
export type AuditCacheEntry = z.infer<typeof cacheEntrySchema>;
export type AuditState = {
  formatVersion: 2;
  dictionary: Record<string, AuditRow[]>;
  metadataSymbols: string[];
  contracts: Record<string, AuditRow[]>;
  probes: AuditRow[];
  tasks: AuditTask[];
  coverage: {
    seedObjects: string[];
    seedNodes: readonly { object: string; node: string; ti: string }[];
    visited: string[];
    unvisited: AuditReference[];
  };
  referencesInRules: string[];
};
export const emptyAuditState = (): AuditState => ({
  formatVersion: 2,
  dictionary: {},
  metadataSymbols: [],
  contracts: {},
  probes: [],
  tasks: [],
  coverage: { seedObjects: [], seedNodes: REQUIRED_READ_NODES, visited: [], unvisited: [] },
  referencesInRules: [],
});
export type AuditMetric = {
  id: string;
  family: string;
  kind: AuditKind;
  queryHash: string;
  durationMs: number;
  rows: number;
  status: "ok" | "error";
  code?: string;
};

/** Elimina solo el ORDER BY exterior; conserva ventanas y subconsultas. */
export function stripOuterOrderBy(statement: string): string {
  const tokens = [
    ...statement.matchAll(/'(?:''|[^'])*'|\[[^\]]*\]|"(?:""|[^"])*"|\(|\)|[A-Z_]+/gi),
  ];
  let depth = 0;
  let orderAt = -1;
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index][0].toUpperCase();
    if (token === "(") depth++;
    else if (token === ")") depth--;
    else if (depth === 0 && token === "ORDER" && tokens[index + 1]?.[0].toUpperCase() === "BY")
      orderAt = tokens[index].index;
  }
  return orderAt < 0 ? statement.trim() : statement.slice(0, orderAt).trim();
}

export async function mapAuditWork<T>(
  items: readonly T[],
  run: (item: T) => Promise<void>,
  stopped: () => boolean = () => false,
): Promise<void> {
  let cursor = 0;
  const worker = async () => {
    while (!stopped()) {
      const item = items[cursor++];
      if (item === undefined) return;
      await run(item);
    }
  };
  await Promise.all([worker(), worker()]);
}
