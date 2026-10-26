import type { ConceptMappingRule } from "@/features/registro-retributivo/types";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

/** Un año natural como máximo, igual que el Registro Retributivo de PeopleNet. */
export const PEOPLENET_MAX_PERIOD_DAYS = 366;
export const PEOPLENET_MAX_EMPLOYEE_IDS = 200;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const EMPLOYEE_ID = /^[A-Za-z0-9_-]{1,64}$/;

export interface PeopleNetAnalyzeRequest {
  readonly from: string;
  readonly to: string;
  readonly employeeIds: readonly string[];
  readonly tolerance: number;
  readonly reviewThreshold?: number;
  readonly incidentThreshold?: number;
  readonly conceptMap: readonly ConceptMappingRule[];
  readonly excludedEmployeeIds: readonly string[];
}

export type ParsedPeopleNetRequest =
  | { readonly ok: true; readonly value: PeopleNetAnalyzeRequest }
  | { readonly ok: false; readonly message: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const toUtc = (iso: string): number | null => {
  if (!ISO_DATE.test(iso)) return null;
  const [year, month, day] = iso.split("-").map(Number);
  const time = Date.UTC(year ?? 0, (month ?? 1) - 1, day ?? 1);
  // Rechaza fechas imposibles como 2025-02-31, que `Date.UTC` desplazaría.
  return new Date(time).toISOString().slice(0, 10) === iso ? time : null;
};

export const periodDays = (from: string, to: string): number | null => {
  const start = toUtc(from);
  const end = toUtc(to);
  return start === null || end === null ? null : Math.round((end - start) / 86_400_000) + 1;
};

/** Último día del mes de una fecha `AAAA-MM-…` o de un mes `AAAA-MM`. */
export const lastDayOfMonth = (value: string): string => {
  const [year = 0, month = 1] = value.split("-").map(Number);
  const day = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
};

/**
 * El cálculo de PeopleNet trabaja con meses completos (`SSP_PROCESS_ACUM`
 * reparte las horas de convenio por número de meses del informe).
 */
export const isMonthAligned = (from: string, to: string): boolean =>
  from.endsWith("-01") && lastDayOfMonth(to) === to;

/** Matrículas escritas por el usuario, separadas por comas, espacios o saltos de línea. */
export function parseEmployeeIdsInput(text: string): string[] {
  return [
    ...new Set(
      text
        .split(/[\s,;]+/)
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  ];
}

/** Periodo por defecto: el último año natural cerrado. */
export function defaultPeopleNetPeriod(today = new Date()): { from: string; to: string } {
  const year = today.getFullYear() - 1;
  return { from: `${year}-01-01`, to: `${year}-12-31` };
}

const optionalNumber = (value: unknown): number | undefined =>
  typeof value === "number" && Number.isFinite(value) ? value : undefined;

const isConceptRule = (value: unknown): value is ConceptMappingRule =>
  isRecord(value) &&
  typeof value.pdfConcept === "string" &&
  typeof value.normalizedPdfConcept === "string" &&
  typeof value.block === "string" &&
  typeof value.blockKey === "string" &&
  typeof value.status === "string";

export function parsePeopleNetAnalyzeRequest(body: unknown): ParsedPeopleNetRequest {
  if (!isRecord(body)) return { ok: false, message: "La petición de análisis no es válida." };
  const { from, to } = body;
  if (typeof from !== "string" || typeof to !== "string") {
    return { ok: false, message: "Indica las fechas desde y hasta." };
  }
  const days = periodDays(from, to);
  if (days === null) return { ok: false, message: "Las fechas no son válidas." };
  if (days < 1)
    return { ok: false, message: "La fecha hasta debe ser posterior a la fecha desde." };
  if (days > PEOPLENET_MAX_PERIOD_DAYS) {
    return { ok: false, message: `El periodo no puede superar ${PEOPLENET_MAX_PERIOD_DAYS} días.` };
  }
  if (!isMonthAligned(from, to)) {
    return { ok: false, message: "El periodo debe ir del día 1 de un mes al último día de otro." };
  }

  const rawIds = body.employeeIds ?? [];
  if (!Array.isArray(rawIds) || !rawIds.every((id) => typeof id === "string")) {
    return { ok: false, message: "Las matrículas no son válidas." };
  }
  const employeeIds = [...new Set(rawIds.map((id) => id.trim()).filter(Boolean))];
  if (employeeIds.length > PEOPLENET_MAX_EMPLOYEE_IDS) {
    return {
      ok: false,
      message: `Indica como máximo ${PEOPLENET_MAX_EMPLOYEE_IDS} matrículas o deja el campo vacío para toda la sociedad.`,
    };
  }
  const invalid = employeeIds.find((id) => !EMPLOYEE_ID.test(id));
  if (invalid) return { ok: false, message: `La matrícula «${invalid}» no es válida.` };

  const tolerance = optionalNumber(body.tolerance);
  if (tolerance === undefined || tolerance < 0) {
    return { ok: false, message: "La tolerancia debe ser un número mayor o igual que 0." };
  }

  const conceptMap = Array.isArray(body.conceptMap) ? body.conceptMap.filter(isConceptRule) : [];
  const excludedEmployeeIds = Array.isArray(body.excludedEmployeeIds)
    ? [...new Set(body.excludedEmployeeIds.map(normalizeEmployeeId).filter(Boolean))]
    : [];

  return {
    ok: true,
    value: {
      from,
      to,
      employeeIds,
      tolerance,
      reviewThreshold: optionalNumber(body.reviewThreshold),
      incidentThreshold: optionalNumber(body.incidentThreshold),
      conceptMap,
      excludedEmployeeIds,
    },
  };
}
