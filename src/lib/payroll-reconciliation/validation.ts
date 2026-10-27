import { z } from "zod";
import { decimal } from "./decimal";
import { ReconciliationError } from "./import";
import { parsePayrollReportRunKey } from "@/lib/payroll-reports/run-key";
import type { Parameters } from "./types";

const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
const amount = z
  .string()
  .max(50)
  .refine(
    (value) => decimal(value) !== null && decimal(value)! >= BigInt(0),
    "Decimal no negativo requerido.",
  );
export const parametersSchema: z.ZodType<Parameters> = z
  .object({
    tolerance: amount,
    percentageTolerance: amount,
    teleworkRate: amount.nullable(),
    teleworkDays: amount.nullable(),
    mealRate: amount.nullable(),
    mealDays: amount.nullable(),
    cardRate: amount.nullable(),
    cardBase: amount.nullable(),
    rulesConfirmed: z.boolean(),
    extraMetric: z.enum(["extra1", "extra2", "extra3", "extra4"]),
    extraFullEmployeeIds: z.array(z.string().min(1).max(40)).max(10_000),
    anniversaryFullBase: z.boolean(),
  })
  .strict();
export const creationSchema = z
  .object({
    title: z.string().trim().min(1).max(140),
    period: month,
    currentKey: z.unknown().optional(),
    previousKey: z.unknown().optional(),
    populationConfirmed: z.literal(true),
    demo: z.boolean().default(false),
  })
  .strict();
export const identitySchema = z.object({
  id: z.string().uuid(),
  revision: z.number().int().positive(),
});
export const mutationSchema = identitySchema
  .extend({
    action: z.enum(["parameters", "review", "refresh", "removeSource", "rename"]),
    parameters: parametersSchema.optional(),
    findingId: z.string().max(30).optional(),
    fingerprint: z.string().length(64).optional(),
    state: z.enum(["Pendiente", "Diferencia justificada", "Requiere corrección manual"]).optional(),
    comment: z.string().max(2000).optional(),
    sourceId: z.string().uuid().optional(),
    title: z.string().trim().min(1).max(140).optional(),
    currentKey: z.unknown().optional(),
    previousKey: z.unknown().optional(),
    populationConfirmed: z.boolean().optional(),
  })
  .strict();
export const sourceSchema = identitySchema
  .extend({
    category: z.enum([
      "mercer",
      "teletrabajo",
      "comisiones",
      "apartamentos",
      "comida",
      "recarga",
      "eurest",
      "excesos",
      "anticipos",
      "aniversarios",
      "ppse",
      "gimnasio",
      "excepciones",
    ]),
    period: month,
    accrualPeriod: month.optional(),
    windowStart: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    windowEnd: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    complete: z.boolean(),
    replaceId: z.string().uuid().optional(),
    confirmed: z.literal(true),
  })
  .strict();
export const previewSchema = sourceSchema.omit({
  id: true,
  revision: true,
  replaceId: true,
  confirmed: true,
});
export function validRunKey(value: unknown) {
  const parsed = parsePayrollReportRunKey(value);
  if (!parsed.ok) throw new ReconciliationError(parsed.message);
  return parsed.value;
}
export function parse<T>(schema: z.ZodType<T>, value: unknown): T {
  const parsed = schema.safeParse(value);
  if (!parsed.success)
    throw new ReconciliationError(
      `Entrada inválida: ${parsed.error.issues[0]?.path.join(".") ?? "datos"}.`,
    );
  return parsed.data;
}
