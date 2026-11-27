import "server-only";

import { z } from "zod/v4";
import { getTool } from "@/lib/tools/registry";
import type { ChatToolDefinition } from "@/lib/ai/chat-provider";
import type { PeopleNetAction, PeopleNetQuery } from "./peoplenet-query";

export const MAX_TOOL_ROUNDS = 6;
export const MAX_TOOL_CALLS = 10;
export const TOOL_TIMEOUT_MS = 45_000;
export const MAX_TOOL_ARGUMENTS = 4096;

const text = z.string().trim().min(1).max(120);
const year = z.int().min(1900).max(2099);
const month = z.int().min(1).max(12);
const period = z.strictObject({
  year,
  month: month.optional(),
  day: z.int().min(1).max(31).optional(),
});
const ref = z.string().uuid();
const person = z
  .strictObject({
    type: z.enum(["own", "id", "name", "reference"]),
    value: text.optional(),
  })
  .describe(
    "own sin valor, id para matrícula con sus ceros, name para el nombre indicado, reference para una referencia devuelta por la herramienta",
  );
const metric = z.string().regex(/^[a-z][a-zA-Z0-9]{0,39}$/);
const metrics = z
  .array(metric)
  .min(1)
  .max(4)
  .optional()
  .describe(
    "Métricas solicitadas. Son la única vía para conocer los importes: inclúyelas siempre que la respuesta deba comentar una cifra. Omitir solo para mostrar la tabla sin comentarla.",
  );
const years = z.array(year).min(1).max(2).optional();
const payrollMetrics = ["earnings", "deductions", "net", "irpf", "base", "ss", "price"] as const;

export const PEOPLE_TOOLS = {
  listar_usuarios: {
    action: "users.consult",
    description:
      "Busca personas o lista/recuenta usuarios por unidad, centro o correo informado. Una coincidencia única aporta una referencia para otras consultas.",
    schema: z.strictObject({
      person: person.optional(),
      unit: text.optional(),
      center: text.optional(),
      withEmail: z.boolean().optional(),
      showEmail: z.boolean().optional(),
    }),
    metrics: [],
  },
  consultar_nomina: {
    action: "payroll.consult",
    description:
      "Consulta recibos de una persona. Métricas posibles: earnings (devengos), deductions, net (líquido), irpf, base, ss y price (detalle).",
    schema: z.strictObject({
      person,
      periods: z.array(period).min(1).max(5),
      range: z.boolean().optional(),
      payGroup: z.enum(["all", "ordinary", "revision", "variable", "other"]).optional(),
      paymentType: z.enum(["current", "retroactive", "current-and-retroactive"]).optional(),
      detail: z.enum(["concepts", "informative"]).optional(),
      concept: text.optional(),
      metrics,
    }),
    metrics: payrollMetrics,
  },
  consultar_quinquenal: {
    action: "reports.quinquenal",
    description:
      "Consulta la evolución retributiva quinquenal. Métricas: salary, reduced, variable y coefficient (jornada).",
    schema: z.strictObject({
      person: person.optional(),
      years: z.array(year).min(1).max(5).optional(),
      unit: text.optional(),
      center: text.optional(),
      metrics,
    }),
    metrics: ["salary", "reduced", "variable", "coefficient"],
  },
  resultados_nomina: {
    action: "reports.payroll-results",
    description:
      "Localiza ejecuciones guardadas por informe, fecha de paga o fecha de ejecución. Usa listRuns para listar y una ejecución única para el detalle. Métricas reconocidas cuando existan: baseSalary y net. Las demás columnas se muestran en la tarjeta.",
    schema: z.strictObject({
      person: person.optional(),
      report: text.optional(),
      runDate: z.string().max(24).optional(),
      periods: z.array(period).min(1).max(5).optional(),
      listRuns: z.boolean().optional(),
      center: text.optional(),
      metrics,
    }),
    metrics: ["baseSalary", "net"],
  },
  consultar_proyecciones: {
    action: "reports.projections",
    description:
      "Consulta proyecciones de una persona. Métricas: compensation, direct, fixed, variable o amount para conceptos.",
    schema: z.strictObject({
      person,
      years,
      detail: z.boolean().optional(),
      concept: text.optional(),
      metrics,
    }),
    metrics: ["compensation", "direct", "fixed", "variable", "amount"],
  },
  consultar_certificado: {
    action: "reports.certificate",
    description:
      "Consulta ejercicios, importes y disponibilidad de PDF de retenciones. Métrica amount, con concept para seleccionar el concepto que se quiere interpretar.",
    schema: z.strictObject({
      person,
      years,
      listYears: z.boolean().optional(),
      concept: text.optional(),
      metrics,
    }),
    metrics: ["amount"],
  },
  consultar_primavera: {
    action: "reports.primavera",
    description:
      "Consulta el cuadre de Portugal de la sociedad activa. Métricas: earnings, earningsConcepts, deductions, deductionsConcepts, net, earningsDifference, deductionsDifference y netDifference.",
    schema: z.strictObject({
      person: person.optional(),
      year,
      months: z.array(month).min(1).max(12).optional(),
      mismatchesOnly: z.boolean().optional(),
      metrics,
    }),
    metrics: [
      "earnings",
      "earningsConcepts",
      "deductions",
      "deductionsConcepts",
      "net",
      "earningsDifference",
      "deductionsDifference",
      "netDifference",
    ],
  },
} satisfies Record<
  string,
  { action: PeopleNetAction; description: string; schema: z.ZodType; metrics: readonly string[] }
>;

export type PeopleToolName = keyof typeof PEOPLE_TOOLS;
export const getPeopleTool = (name: string) =>
  Object.hasOwn(PEOPLE_TOOLS, name) ? PEOPLE_TOOLS[name as PeopleToolName] : undefined;

const operand = z.strictObject({
  ref,
  metric: metric.optional(),
  period: z
    .string()
    .regex(/^\d{4}(?:-\d{2}(?:-\d{2})?)?$/)
    .optional(),
});
export const analysisSchema = z.strictObject({
  operation: z.enum([
    "count",
    "distinct",
    "sum",
    "average",
    "difference",
    "percentChange",
    "intersection",
  ]),
  left: operand,
  right: operand.optional(),
  match: z.enum(["person", "personPeriod"]).optional(),
  granularity: z
    .enum(["year", "month", "day"])
    .optional()
    .describe(
      "Granularidad del cruce por persona y periodo. Usa month para relacionar fechas de paga y meses de Primavera.",
    ),
});
export type PeopleAnalysis = z.infer<typeof analysisSchema>;
export const clarificationSchema = z.strictObject({
  field: z.enum(["person", "period", "report", "run", "metric", "scope", "operation"]),
});
export const MAX_MANUAL_LOOKUPS = 3;
export const manualSchema = z.strictObject({
  pregunta: z
    .string()
    .trim()
    .min(3)
    .max(400)
    .describe("Pregunta o tema a buscar, con los nombres técnicos tal como aparecen."),
});
export const presentationSchema = z.strictObject({ refs: z.array(ref).min(1).max(MAX_TOOL_CALLS) });

export function toolDefinitions(): ChatToolDefinition[] {
  const publicSchema = (
    name: string,
    description: string,
    schema: z.ZodType,
  ): ChatToolDefinition => {
    const { $schema: dialect, ...parameters } = z.toJSONSchema(schema, { target: "draft-7" });
    void dialect;
    return { type: "function", function: { name, description, parameters } };
  };
  return [
    ...Object.entries(PEOPLE_TOOLS).flatMap(([name, entry]) => {
      const action = getTool(entry.action);
      return action?.implemented && !action.permissions.length
        ? [publicSchema(name, `${action.name}. ${entry.description}`, entry.schema)]
        : [];
    }),
    publicSchema(
      "analizar_resultados",
      "Calcula en servidor sobre referencias de este turno o de la rama. Diferencia es izquierda menos derecha. Variación compara izquierda frente a derecha. Intersección cruza por persona o persona y periodo. Diferencia y variación exigen un único valor por lado: si el lado tiene varias filas, acota su period al día concreto (2025-02-25) o calcula antes su suma y usa como operando la referencia que devuelve esa suma. El resultado de un cálculo solo puede salir de aquí.",
      analysisSchema,
    ),
    publicSchema(
      "consultar_manual",
      "Busca pasajes en los manuales internos de PeopleNet y Meta4. Úsalo para preguntas documentales, para explicar la sintaxis LN4 y para interpretar lo que devuelven las lecturas. Puede combinarse con ellas en el mismo turno.",
      manualSchema,
    ),
    publicSchema(
      "aclarar_consulta",
      "Pide un dato imprescindible para completar una consulta operativa, sin suponérselo.",
      clarificationSchema,
    ),
    publicSchema(
      "presentar_resultados",
      "Finaliza una respuesta operativa seleccionando y ordenando las referencias verificadas que la contestan. Incluye los análisis relevantes. Cada referencia se convierte en una tarjeta para el usuario: incluye solo las que aportan algo distinto, no los tanteos intermedios ni los subconjuntos de otra lectura más amplia, y no arrastres referencias de turnos anteriores salvo que la respuesta se apoye en ellas.",
      presentationSchema,
    ),
  ];
}

type ToolInput = z.infer<(typeof PEOPLE_TOOLS)[PeopleToolName]["schema"]>;
type PersonInput = z.infer<typeof person>;

export function buildToolQuery(
  action: PeopleNetAction,
  input: ToolInput,
  resolvePerson: (reference: string) => string | undefined,
): PeopleNetQuery | undefined {
  const subject: PersonInput | undefined = input.person;
  const value = subject?.type === "reference" ? resolvePerson(subject.value ?? "") : subject?.value;
  if (subject && (subject.type === "own" ? value !== undefined : !value)) return;
  const selector: PeopleNetQuery["person"] =
    subject?.type === "own"
      ? { type: "own" }
      : subject && value
        ? { type: subject.type === "name" ? "name" : "id", value }
        : undefined;
  if (selector?.type === "id" && !/^[a-z0-9][a-z0-9._-]{0,19}$/i.test(selector.value)) return;
  const filters: PeopleNetQuery["filters"] = [];
  if ("unit" in input && input.unit) filters.push({ field: "unit", value: input.unit });
  if ("center" in input && input.center) filters.push({ field: "center", value: input.center });
  if ("concept" in input && input.concept) filters.push({ field: "concept", value: input.concept });
  const periods: PeopleNetQuery["periods"] =
    "year" in input
      ? input.months?.length
        ? input.months.map((month) => ({ year: input.year, month }))
        : [{ year: input.year }]
      : "years" in input && input.years
        ? input.years.map((year) => ({ year }))
        : "periods" in input
          ? (input.periods ?? [])
          : [];
  const runDate = "runDate" in input ? input.runDate?.toLowerCase() : undefined;
  if (runDate) {
    const [date] = runDate.split("t");
    const parsed = new Date(runDate);
    if (
      !/^\d{4}-\d{2}-\d{2}(?:t\d{2}:\d{2}:\d{2}(?:\.\d{3})?z)?$/.test(runDate) ||
      !Number.isFinite(parsed.getTime()) ||
      parsed.toISOString().slice(0, 10) !== date
    )
      return;
  }
  if (
    periods.some(
      ({ day, month, year }) =>
        day !== undefined && (!month || day > new Date(Date.UTC(year, month, 0)).getUTCDate()),
    )
  )
    return;
  const range = "range" in input && input.range === true;
  if (range && periods.length !== 2) return;
  return {
    action,
    person: selector,
    periods,
    filters,
    range,
    runDate,
    text: "",
    report: "report" in input ? input.report : undefined,
    compare: false,
    includeColumns: false,
    withEmail: "withEmail" in input && input.withEmail === true,
    mismatchesOnly: "mismatchesOnly" in input && input.mismatchesOnly === true,
    payGroup: ("payGroup" in input && input.payGroup) || "all",
    paymentType: ("paymentType" in input && input.paymentType) || "current",
    structured: {
      metrics: "metrics" in input ? (input.metrics ?? []) : [],
      detail: "detail" in input && Boolean(input.detail),
      informative: "detail" in input && input.detail === "informative",
      listRuns: "listRuns" in input && input.listRuns === true,
      listYears: "listYears" in input && input.listYears === true,
      showEmail: "showEmail" in input && input.showEmail === true,
    },
  };
}
