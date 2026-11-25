import "server-only";

import sql from "mssql";
import { buildEmployeeSections, buildEmployeeEmails } from "@/lib/meta4/users/employee-detail-view";
import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";
import { normalizeUsersSearch } from "@/lib/meta4/users/list-filter";
import { mapEmployeeListRows } from "@/lib/meta4/users/mapper";
import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";
import { getPeopleNetEmployeeDetail } from "@/lib/peoplenet/employee-detail";
import { listEmployeesByOrganization } from "@/lib/peoplenet/employees";
import { PayrollReceiptError, getPayrollReceiptRange } from "@/lib/peoplenet/payroll-receipt";
import { getQuinquenalReport } from "@/lib/peoplenet/quinquenal";
import { listPayrollReportRuns, getPayrollReportRun } from "@/lib/peoplenet/payroll-reports";
import { getPrimaveraReport } from "@/lib/peoplenet/primavera";
import { payrollReportCell } from "@/lib/payroll-reports/result-data";
import { sampleRunDetail } from "@/lib/payroll-reports/payroll-report.fixture";
import { parsePayrollReceiptParameters } from "@/lib/payroll/receipt-parameters";
import { debugPayslips } from "@/lib/portal/payroll-debug.fixture";
import { DEBUG_ACTORS, debugSelection } from "@/lib/portal/read-model";
import { loadProjectionPage } from "@/lib/portal/projections/load";
import { projectionGraphTotal } from "@/lib/portal/projections/core";
import { loadCertificatePage } from "@/lib/portal/certificates/load";
import { assertReadOnlySql } from "@/lib/portal/peoplenet/query";
import { CERTIFICATE_FIELDS, type CertificateFieldId } from "@/lib/portal/certificates/layout";
import { parsePrimaveraParameters, round2 } from "@/lib/primavera/cuadre";
import { sampleQuinquenalRow } from "@/lib/quinquenal/quinquenal.fixture";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import type { PortalContext } from "@/lib/portal/context";
import type { PeopleNetQuery } from "./peoplenet-query";
import type { PeopleNetCell, PeopleNetResult } from "./peoplenet-result";

export type Column = { key: string; label: string; aliases: string[]; unit?: string };
type Row = Record<string, PeopleNetCell>;
export type Table = {
  columns: Column[];
  rows: Row[];
  message?: string;
  document?: { label: string; href: string };
  calculations?: PeopleNetResult["calculations"];
  defaultKeys?: string[];
  outcome?: "missing" | "ambiguous" | "partial" | "unavailable";
  employeeId?: string;
};
type Employee = {
  id: string;
  fullName: string;
  claveSelf: string;
  email: string | null;
  email2: string | null;
  unit: string | null;
  center: string | null;
  job: string | null;
};
export type ReadContext = {
  debug: boolean;
  society: Meta4Society;
  auth: ResolvedAuthSession;
  portal: () => Promise<PortalContext>;
  employee?: Employee;
  directory: () => Promise<Employee[]>;
  signal: AbortSignal;
};

const column = (key: string, label: string, aliases: string[] = [], unit?: string): Column => ({
  key,
  label,
  aliases,
  unit,
});
const amount = (key: string, label: string, aliases: string[] = []) =>
  column(key, label, aliases, "importe");
const idColumn = column("id", "Matrícula", ["empleado"]);
const yearColumn = column("year", "Ejercicio", ["ano"]);
const periodColumn = column("period", "Periodo", ["mes", "fecha"]);
const conceptColumn = column("concept", "Concepto");
const fold = normalizeUsersSearch;
const contains = (value: PeopleNetCell | undefined, filter: string) =>
  typeof value === "string" && fold(value).includes(fold(filter));
const empty = (message: string, outcome: Table["outcome"] = "missing"): Table => ({
  columns: [],
  rows: [],
  message,
  outcome,
});

export async function readDirectory(
  debug: boolean,
  society: Meta4Society,
  includeProfile: boolean,
): Promise<Employee[]> {
  if (debug)
    return DEBUG_ACTORS.map((person) => ({
      id: person.id,
      fullName: person.name.split(" · ")[0] ?? person.name,
      claveSelf: "debug-" + person.id,
      email: person.id === "91001" ? null : person.id + "@example.invalid",
      email2: null,
      unit: person.unit,
      center: "Madrid · muestra",
      job: null,
    }));
  if (!includeProfile) {
    return mapEmployeeListRows(await listEmployeesByOrganization(society)).map((user) => ({
      ...user,
      email: null,
      email2: null,
      unit: null,
      center: null,
      job: null,
    }));
  }
  const statement =
    "SELECT ID_EMPLEADO, CLAVE_SELF, NOMBRE, APELLIDO_1, APELLIDO_2, DT_LAST_UPDATE, CORREO, CORREO2, N_UNIDAD, N_CENTRO_TRABAJO, N_PUESTO FROM M4ORO_EMPLEADOS WHERE ID_ORGANIZATION = @organization ORDER BY ID_EMPLEADO, DT_LAST_UPDATE DESC";
  assertReadOnlySql(statement);
  const pool = await getPeopleNetPool();
  const { recordset } = await pool.request().input("organization", sql.VarChar(4), society).query<{
    ID_EMPLEADO: string | number | null;
    CLAVE_SELF: string | null;
    NOMBRE: string | null;
    APELLIDO_1: string | null;
    APELLIDO_2: string | null;
    DT_LAST_UPDATE: Date | null;
    CORREO: string | null;
    CORREO2: string | null;
    N_UNIDAD: string | null;
    N_CENTRO_TRABAJO: string | null;
    N_PUESTO: string | null;
  }>(statement);
  const firstById = new Map<string, (typeof recordset)[number]>();
  for (const row of recordset) {
    const [user] = mapEmployeeListRows([row]);
    if (user && !firstById.has(user.id)) firstById.set(user.id, row);
  }
  const value = (field?: string | null) => field?.trim() || null;
  return mapEmployeeListRows(recordset)
    .sort((a, b) => compareEmployeeIds(a.id, b.id))
    .map((user) => {
      const row = firstById.get(user.id);
      return {
        ...user,
        email: value(row?.CORREO),
        email2: value(row?.CORREO2),
        unit: value(row?.N_UNIDAD),
        center: value(row?.N_CENTRO_TRABAJO),
        job: value(row?.N_PUESTO),
      };
    });
}

export async function readUsers(query: PeopleNetQuery, context: ReadContext): Promise<Table> {
  const columns = [
    idColumn,
    column("name", "Nombre"),
    column("email", "Correo principal", ["correo", "correos", "email"]),
    column("email2", "Correo secundario", ["segundo correo"]),
    column("user", "Usuario Meta4", ["clave self"]),
    column("unit", "Unidad", ["departamento"]),
    column("center", "Centro de trabajo", ["centro"]),
    column("job", "Puesto"),
  ];
  const employees = context.employee ? [context.employee] : await context.directory();
  const rows = employees.map((employee) => ({
    id: employee.id,
    name: employee.fullName,
    email: employee.email,
    email2: employee.email2,
    user: employee.claveSelf || null,
    unit: employee.unit,
    center: employee.center,
    job: employee.job,
  }));
  if (query.structured || !context.employee || !/\bficha\b|correo(?:s)? historico/.test(query.text))
    return { columns, rows, defaultKeys: ["id", "name", "user"] };
  if (context.debug) return { columns, rows };
  const detail = await getPeopleNetEmployeeDetail(context.employee.id, context.society);
  return {
    columns: [column("section", "Sección"), column("concept", "Campo"), column("value", "Valor")],
    rows: [
      ...buildEmployeeSections(detail.fields).flatMap((section) =>
        section.fields.map((field) => ({
          section: section.title,
          concept: field.label,
          value: field.value,
        })),
      ),
      ...buildEmployeeEmails(detail).map((email) => ({
        section: "Correos",
        concept: email.dateRange,
        value: email.email,
      })),
    ],
  };
}

const pad = (value: number) => String(value).padStart(2, "0");
const iso = (date: Date) => date.toISOString().slice(0, 10);
function bounds(period: PeopleNetQuery["periods"][number]): [string, string] | undefined {
  const { year, month, day } = period;
  if (month === undefined) return [String(year) + "-01-01", String(year) + "-12-31"];
  if (month < 1 || month > 12) return;
  const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  if (day !== undefined && (day < 1 || day > days)) return;
  const start = year + "-" + pad(month) + "-" + pad(day ?? 1);
  return [start, year + "-" + pad(month) + "-" + pad(day ?? days)];
}

export function getPeriodRanges(query: PeopleNetQuery): [string, string][] | undefined {
  const ranges: [string, string][] = [];
  for (const period of query.periods) {
    const dates = bounds(period);
    if (!dates) return;
    ranges.push(dates);
  }
  if (query.range && ranges.length > 1) {
    const first = ranges[0][0];
    const last = ranges[ranges.length - 1][1];
    if (first > last) return;
    return [[first, last]];
  }
  return ranges;
}

export async function readPayroll(query: PeopleNetQuery, context: ReadContext): Promise<Table> {
  if (!context.employee)
    return empty("Indica la matrícula o el nombre de la persona cuya nómina quieres consultar.");
  const ranges = getPeriodRanges(query);
  if (!ranges?.length)
    return empty("Indica un periodo válido, por ejemplo octubre de 2026 o 2026-10-25.");
  if (ranges.length > 5)
    return empty("Acota la consulta de nómina a un intervalo o a un máximo de cinco periodos.");
  const receipts = new Map<
    string,
    Awaited<ReturnType<typeof getPayrollReceiptRange>>["receipts"][number]
  >();
  let missing = 0;
  for (const [from, to] of ranges) {
    context.signal.throwIfAborted();
    const parsed = parsePayrollReceiptParameters({
      employeeId: context.employee.id,
      fromPaymentDate: from,
      toPaymentDate: to,
      payFilter: query.payGroup,
      paymentType: query.paymentType,
      currency: { mode: "calculation" },
    });
    if (!parsed.ok) return empty(parsed.message);
    if (context.debug && query.payGroup !== "all" && query.payGroup !== "ordinary") continue;
    try {
      const result = context.debug
        ? {
            receipts: debugPayslips(
              debugSelection({ debugActor: context.employee.id }),
              from,
              to,
              query.paymentType,
            ),
            missing: [],
          }
        : await getPayrollReceiptRange({ organization: context.society, ...parsed.value });
      for (const receipt of result.receipts)
        receipts.set(receipt.paymentDate + "/" + receipt.id, receipt);
      missing += result.missing.length;
    } catch (error) {
      if (error instanceof PayrollReceiptError) return empty(error.message, "unavailable");
      throw error;
    }
  }
  const entries = [...receipts.values()];
  const lines =
    query.structured?.detail ??
    (/\b(?:desglos\w*|conceptos?|lineas|detalle)\b/.test(query.text) && !query.compare);
  const currencies = new Set(entries.map(({ receipt }) => receipt.currencyId));
  const currency = currencies.size === 1 ? entries[0]?.receipt.currencyId : undefined;
  const earnings = amount("earnings", "Devengos", ["devengado", "bruto"]);
  const deductions = amount("deductions", "Deducciones", ["retenidos", "retenciones"]);
  const common = [periodColumn, column("pay", "Paga"), column("currency", "Moneda")];
  const columns = lines
    ? [
        ...common,
        conceptColumn,
        column("units", "Unidades"),
        amount("price", "Precio"),
        earnings,
        deductions,
      ]
    : [
        ...common,
        earnings,
        deductions,
        amount("net", "Líquido", ["neto"]),
        amount("irpf", "Cuota IRPF", ["irpf"]),
        amount("base", "Base de cotización", ["base"]),
        amount("ss", "Cuota Seguridad Social", ["seguridad social"]),
      ];
  return {
    outcome: missing ? "partial" : undefined,
    columns: columns.map((item) => (item.unit ? { ...item, unit: currency } : item)),
    rows: entries.flatMap(({ paymentDate, payName, receipt }): Row[] => {
      const base = {
        period: paymentDate,
        pay: payName,
        currency: receipt.currencyId,
        id: context.employee?.id ?? null,
      };
      if (!lines)
        return [
          {
            ...base,
            earnings: receipt.totals.accrued,
            deductions: receipt.totals.deducted,
            net: receipt.totals.netPay,
            irpf: receipt.accumulated.irpfQuota,
            base: receipt.bases.totalBase,
            ss: receipt.accumulated.socialSecurityQuota,
          },
        ];
      return receipt.lines
        .filter(
          (line) =>
            line.section === "concept" ||
            (query.structured?.informative ?? /\b(?:informativ|coste empresa)/.test(query.text)),
        )
        .map((line) => ({
          ...base,
          concept: line.concept,
          units: line.units,
          price: line.price,
          earnings: line.earning,
          deductions: line.deduction,
        }));
    }),
    calculations: lines
      ? entries.map(({ paymentDate, payName, receipt }) => ({
          label: "Líquido · " + paymentDate + " · " + payName + " · " + receipt.currencyId,
          value: receipt.totals.netPay,
        }))
      : undefined,
    message: missing
      ? "Hay pagas del intervalo sin recibo. Los cálculos solo incluyen los recibos disponibles."
      : undefined,
  };
}

export async function readQuinquenal(query: PeopleNetQuery, context: ReadContext): Promise<Table> {
  const report = context.debug
    ? {
        rows: DEBUG_ACTORS.map(({ id, name, unit }) => ({
          ...sampleQuinquenalRow,
          employeeId: id,
          firstName: name.split(" · ")[0] ?? name,
          lastName1: null,
          lastName2: null,
          unit: { id: null, name: unit },
        })),
      }
    : await getQuinquenalReport({
        organization: context.society,
        today: iso(new Date()),
        employeeId: context.employee?.id,
      });
  const years = new Set(query.periods.map(({ year }) => year));
  return {
    columns: [
      idColumn,
      column("name", "Nombre"),
      yearColumn,
      amount("salary", "Retribución", ["salario"]),
      amount("reduced", "Retribución reducida"),
      amount("variable", "Variable"),
      column("coefficient", "Coeficiente de jornada", ["jornada", "coeficiente"], "coeficiente"),
      column("unit", "Unidad"),
      column("center", "Centro de coste", ["centro"]),
      column("job", "Puesto"),
      column("category", "Categoría"),
      column("entity", "Entidad legal"),
    ],
    rows: report.rows
      .filter((row) => !context.employee || row.employeeId === context.employee.id)
      .flatMap((row) =>
        row.years
          .filter(({ year }) => !years.size || years.has(year))
          .map((year) => ({
            id: row.employeeId,
            name: [row.firstName, row.lastName1, row.lastName2].filter(Boolean).join(" "),
            year: year.year,
            salary: year.salary,
            reduced: year.reducedSalary,
            variable: year.variable,
            coefficient: year.coefficient,
            unit: row.unit.name,
            center: row.costCenter,
            job: row.jobName,
            category: row.categoryName,
            entity: row.legalEntity,
          })),
      ),
  };
}

export async function readPayrollResults(
  query: PeopleNetQuery,
  context: ReadContext,
): Promise<Table> {
  const ranges = getPeriodRanges(query);
  if (!ranges) return empty("Indica un periodo válido para buscar la ejecución.");
  const runs = context.debug ? [sampleRunDetail.run] : await listPayrollReportRuns(context.society);
  const matching = runs.filter(
    (run) =>
      (!query.report ||
        contains(run.reportName, query.report) ||
        fold(run.reportId) === fold(query.report)) &&
      (!query.runDate || run.runAt.toLowerCase().startsWith(query.runDate)) &&
      (!ranges.length || ranges.some(([from, to]) => run.accruedOn >= from && run.accruedOn <= to)),
  );
  const showRuns =
    matching.length !== 1 ||
    (query.structured?.listRuns ?? /\b(?:lista|listar) (?:las )?ejecuciones\b/.test(query.text));
  if (showRuns)
    return {
      outcome: matching.length > 1 && !query.structured?.listRuns ? "ambiguous" : undefined,
      columns: [
        column("report", "Informe"),
        column("id", "ID de informe"),
        column("period", "Paga"),
        column("runAt", "Ejecutado el"),
        column("frequency", "Frecuencia"),
        column("kind", "Tipo de paga"),
      ],
      rows: matching.map((run) => ({
        report: run.reportName,
        id: run.reportId,
        period: run.accruedOn,
        runAt: run.runAt,
        frequency: run.payFrequency,
        kind: run.payKind,
      })),
      message:
        matching.length > 1
          ? "Hay varias ejecuciones. Acota por nombre, fecha de paga o fecha exacta de ejecución para ver su detalle."
          : undefined,
    };
  const run = matching[0];
  const detail = context.debug ? sampleRunDetail : await getPayrollReportRun(context.society, run);
  if (!detail) return empty("La ejecución seleccionada ya no está disponible.", "unavailable");
  const recognized = new Set<string>();
  const columns = detail.headers.map((header, index) => {
    const normalized = fold(header.trim());
    const semanticKey = /^(?:id empleado|matricula|empleado|id hr|id_hr)$/.test(normalized)
      ? "id"
      : /^(?:id )?centro(?: de coste| trabajo| de trabajo)?$/.test(normalized)
        ? "center"
        : normalized === "salario base"
          ? "baseSalary"
          : normalized === "liquido"
            ? "net"
            : undefined;
    const key = semanticKey && !recognized.has(semanticKey) ? semanticKey : "col" + index;
    recognized.add(key);
    const numeric = detail.rows.some(
      (row) => typeof payrollReportCell(row[index] ?? "", header) === "number",
    );
    return column(key, header || "Columna " + (index + 1), [], numeric ? "valor" : undefined);
  });
  const rows = detail.rows.map((row) =>
    Object.fromEntries(
      columns.map(({ key, label }, index) => {
        const value =
          key === "id"
            ? (row[index] ?? "").replace(/^'/, "")
            : payrollReportCell(row[index] ?? "", label);
        return [key, value instanceof Date ? value.toISOString() : value];
      }),
    ),
  );
  if (context.employee && !columns.some(({ key }) => key === "id"))
    return empty(
      "La ejecución no incluye una columna de matrícula identificable. Abre su pantalla para consultar el detalle.",
    );
  return {
    columns,
    rows: rows
      .filter((row) => !context.employee || row.id === context.employee.id)
      .map((row) => ({ ...row, period: run.accruedOn })),
  };
}

export async function readProjections(query: PeopleNetQuery, context: ReadContext): Promise<Table> {
  if (!query.person) return empty("Indica una matrícula, un nombre o «mi proyección».");
  const years = [...new Set(query.periods.map(({ year }) => year))];
  if (years.length > 2) return empty("Indica uno o dos ejercicios para la proyección.");
  const portal = await context.portal();
  const reports = [];
  const notices: string[] = [];
  for (const year of years.length ? years : [undefined]) {
    context.signal.throwIfAborted();
    const result = await loadProjectionPage(context.auth, portal, {
      year: year?.toString(),
      employee: context.employee?.id,
    });
    if (result.status !== "ok") {
      notices.push(result.message);
      continue;
    }
    if (result.data.report) reports.push(result.data.report);
  }
  const detail =
    query.structured?.detail ??
    (/\b(?:por paga|conceptos?|desglos\w*)\b/.test(query.text) && !query.compare);
  return {
    outcome: notices.length ? (reports.length ? "partial" : "unavailable") : undefined,
    employeeId:
      context.employee?.id ??
      (portal.mode === "meta4" && portal.identity.status === "resolved"
        ? portal.identity.person.employeeId
        : context.debug
          ? debugSelection().actor
          : undefined),
    columns: detail
      ? [
          yearColumn,
          column("section", "Bloque"),
          conceptColumn,
          column("pay", "Paga"),
          amount("amount", "Importe"),
        ]
      : [
          yearColumn,
          amount("compensation", "Compensación total"),
          amount("direct", "Retribución directa"),
          amount("fixed", "Retribución fija", ["fija", "rbfa"]),
          amount("variable", "Retribución variable", ["variable"]),
        ],
    rows: reports.flatMap((report): Row[] =>
      !detail
        ? [
            {
              year: report.year,
              compensation: projectionGraphTotal(report.compensation),
              direct: projectionGraphTotal(report.direct),
              fixed: report.direct.find(({ id }) => id === "fixed")?.value ?? null,
              variable: report.direct.find(({ id }) => id === "variable")?.value ?? null,
            },
          ]
        : report.sections.flatMap((section) =>
            section.rows
              .filter(({ kind }) => kind === "concept")
              .flatMap((row) => {
                const base = { year: report.year, section: section.title, concept: row.label };
                return report.pays.length && section.layout === "pays"
                  ? report.pays.map((pay, index) => ({
                      ...base,
                      pay: pay.label,
                      amount: row.amounts[index] ?? null,
                    }))
                  : [{ ...base, pay: "Anual", amount: row.total }];
              }),
          ),
    ),
    calculations: detail
      ? reports.flatMap((report) => {
          const value = projectionGraphTotal(report.compensation);
          return value === null ? [] : [{ label: "Compensación total · " + report.year, value }];
        })
      : undefined,
    message: notices.at(0),
  };
}

const certificateLabels: Partial<Record<CertificateFieldId, string>> = {
  trabajoDinerariasIntegro: "Retribuciones dinerarias",
  trabajoDinerariasRetenciones: "Retenciones del trabajo",
};

export async function readCertificates(
  query: PeopleNetQuery,
  context: ReadContext,
): Promise<Table> {
  if (!query.person)
    return empty("Indica una matrícula, un nombre o «mi certificado de retenciones».");
  const years = [...new Set(query.periods.map(({ year }) => year))];
  if (years.length > 2) return empty("Indica uno o dos ejercicios para el certificado.");
  const portal = await context.portal();
  const rows: Row[] = [];
  const notices: string[] = [];
  let document: Table["document"];
  for (const year of years.length ? years : [undefined]) {
    context.signal.throwIfAborted();
    const result = await loadCertificatePage(context.auth, portal, {
      year: year?.toString(),
      employee: context.employee?.id,
    });
    if (result.status !== "ok") {
      notices.push(result.message);
      continue;
    }
    if (query.structured?.listYears ?? /\b(?:ejercicios|anos) disponibles\b/.test(query.text)) {
      return {
        columns: [yearColumn],
        rows: result.page.years.map((entry) => ({ year: entry.year })),
      };
    }
    const selection = result.page.selection;
    if (selection.kind === "unavailable") {
      notices.push(selection.message);
      continue;
    }
    if (selection.kind === "stored") {
      document ??= { href: selection.document.href, label: "Abrir certificado PDF" };
      notices.push(
        "El certificado guardado de " + result.page.selectedYear + " está disponible en PDF.",
      );
    }
    for (const certificate of result.certificates) {
      if (!document && result.page.selectedYear) {
        const params = new URLSearchParams({ year: String(result.page.selectedYear) });
        if (context.employee) params.set("employee", context.employee.id);
        document = {
          href: "/api/portal/certificates/pdf?" + params,
          label: "Abrir certificado PDF",
        };
      }
      const requestedSummary =
        /\bdinerari\w*|\bretencion(?:es)? (?:del trabajo|practicadas)\b/.test(query.text);
      for (const [field, value] of Object.entries(certificate.fields)) {
        const key = Object.keys(CERTIFICATE_FIELDS).find(
          (candidate): candidate is CertificateFieldId => candidate === field,
        );
        if (!key || CERTIFICATE_FIELDS[key].kind !== "amount") continue;
        if (requestedSummary && !certificateLabels[key]) continue;
        const concept = certificateLabels[key] ?? field.replace(/([a-z])([A-Z])/g, "$1 $2");
        rows.push({ year: certificate.year, concept, amount: value ?? null });
      }
    }
  }
  return {
    outcome: notices.length && !document ? (rows.length ? "partial" : "unavailable") : undefined,
    employeeId:
      context.employee?.id ??
      (portal.mode === "meta4" && portal.identity.status === "resolved"
        ? portal.identity.person.employeeId
        : context.debug
          ? debugSelection().actor
          : undefined),
    columns: [yearColumn, conceptColumn, amount("amount", "Importe")],
    rows,
    document,
    message: notices.at(0),
  };
}

export async function readPrimavera(query: PeopleNetQuery, context: ReadContext): Promise<Table> {
  const ranges = getPeriodRanges(query);
  if (!ranges?.length)
    return empty(
      "Indica el ejercicio de Primavera y, si quieres, los meses que quieres consultar.",
    );
  if (ranges.length > 12) return empty("Indica como máximo doce meses para la consulta.");
  const rows = new Map<string, Row>();
  for (const [from, to] of ranges) {
    context.signal.throwIfAborted();
    if (from.slice(0, 4) !== to.slice(0, 4))
      return empty("El intervalo de Primavera debe pertenecer al mismo ejercicio.");
    const year = Number(from.slice(0, 4));
    const parsed = parsePrimaveraParameters({
      year,
      fromMonth: Number(from.slice(5, 7)),
      toMonth: Number(to.slice(5, 7)),
    });
    if (!parsed.ok) return empty(parsed.message);
    const period = parsed.value;
    const report = context.debug
      ? {
          months: Array.from({ length: period.toMonth - period.fromMonth + 1 }, (_, index) => {
            const month = period.fromMonth + index;
            return {
              month,
              rows:
                year !== 2026
                  ? []
                  : DEBUG_ACTORS.slice(0, 3).map(({ id }, actor) => ({
                      employeeId: id,
                      earnings: 1000 + month * 10,
                      earningsConcepts: 1000 + month * 10 - actor,
                      deductions: 200,
                      deductionsConcepts: 200,
                      net: 800 + month * 10,
                      ok: actor === 0,
                    })),
            };
          }),
        }
      : await getPrimaveraReport(context.society, period);
    for (const { month, rows: employees } of report.months)
      for (const employee of employees) {
        if (context.employee && employee.employeeId !== context.employee.id) continue;
        if (context.employee && employee.employeeId !== context.employee.id) continue;
        const key = year + "-" + pad(month);
        rows.set(key + "/" + employee.employeeId, {
          period: key,
          id: employee.employeeId,
          earnings: employee.earnings,
          earningsConcepts: employee.earningsConcepts,
          deductions: employee.deductions,
          deductionsConcepts: employee.deductionsConcepts,
          net: employee.net,
          earningsDifference: round2(employee.earnings - employee.earningsConcepts),
          deductionsDifference: round2(employee.deductions - employee.deductionsConcepts),
          netDifference: round2(employee.net - employee.earnings + employee.deductions),
          status: employee.ok ? "Cuadra" : "Descuadre",
        });
      }
  }
  return {
    columns: [
      periodColumn,
      idColumn,
      amount("earnings", "Devengos"),
      amount("earningsConcepts", "Conceptos R"),
      amount("deductions", "Retenidos"),
      amount("deductionsConcepts", "Conceptos D"),
      amount("net", "Líquido", ["neto"]),
      amount("earningsDifference", "Diferencia de devengos"),
      amount("deductionsDifference", "Diferencia de retenidos"),
      amount("netDifference", "Diferencia de líquido"),
      column("status", "Estado"),
    ],
    rows: [...rows.values()],
  };
}
