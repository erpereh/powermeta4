/**
 * Validación de lo que llega del navegador. La sociedad nunca viaja en la
 * petición: la pone el contexto operativo en el servidor.
 */
import { JOB_CHANGE_EDITABLE_FIELDS, type JobChangeFieldId } from "./fields";
import type { JobChangeRequest } from "./types";

const EMPLOYEE_ID = /^[A-Za-z0-9]{1,20}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const CODE = /^[A-Za-z0-9ÁÉÍÓÚÑÜáéíóúñü ._/-]{0,60}$/;
const NUMBER = /^\d{0,4}(?:[.,]\d{0,2})?$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const textOf = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

export const normalizeEmployeeId = (value: string): string | null => {
  const trimmed = value.trim();
  return EMPLOYEE_ID.test(trimmed) ? trimmed : null;
};

export type JobChangeParseResult =
  | { ok: true; value: JobChangeRequest }
  | { ok: false; message: string };

export const parseJobChangeRequest = (input: unknown): JobChangeParseResult => {
  if (!isRecord(input)) return { ok: false, message: "Los datos del cambio no son válidos." };
  const employeeId = normalizeEmployeeId(textOf(input.employeeId));
  if (!employeeId) return { ok: false, message: "La matrícula no es válida." };
  const cutDate = textOf(input.cutDate);
  if (!ISO_DATE.test(cutDate)) return { ok: false, message: "La fecha de corte no es válida." };
  const reason = textOf(input.reason);
  if (!CODE.test(reason)) return { ok: false, message: "El motivo del cambio no es válido." };
  const positionChoice = input.positionChoice === "position" ? "position" : "job";
  const occupationType =
    input.occupationType === "ejc"
      ? "ejc"
      : input.occupationType === "headcount"
        ? "headcount"
        : "hours";
  const numbers = {
    occupationHours: textOf(input.occupationHours),
    occupationEjc: textOf(input.occupationEjc),
    occupationHeadcount: textOf(input.occupationHeadcount),
  };
  for (const value of Object.values(numbers)) {
    if (!NUMBER.test(value)) return { ok: false, message: "La ocupación no es un número válido." };
  }
  const rawValues = isRecord(input.values) ? input.values : {};
  const values: Partial<Record<JobChangeFieldId, string>> = {};
  for (const field of JOB_CHANGE_EDITABLE_FIELDS) {
    const value = textOf(rawValues[field]);
    if (value === "") continue;
    if (!CODE.test(value)) return { ok: false, message: `El valor de ${field} no es válido.` };
    values[field] = value;
  }
  return {
    ok: true,
    value: { employeeId, cutDate, reason, positionChoice, occupationType, ...numbers, values },
  };
};
