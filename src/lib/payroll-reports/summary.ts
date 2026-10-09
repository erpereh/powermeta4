import type { PayrollReportTable } from "./result-data";

/*
 * Hoja «informe» de `plantilla_infconnom.xls`: tabla dinámica de la hoja
 * «Datos» por centro de trabajo, empleado y nombre, con total por centro y
 * total general. «Nº Empl.» cuenta filas, «Cuenta de X» cuenta celdas no
 * vacías y las sumas suman. Los nombres de los campos vienen de la plantilla.
 */

export const SUMMARY_ROW_FIELDS = [
  "Id Centro Trabajo",
  "Id Empleado",
  "Apellidos y Nombres",
] as const;

/** Primer campo de datos de la tabla dinámica; los anteriores no se agregan. */
const FIRST_DATA_FIELD = "Porcentaje Jornada";

/** Campos que la plantilla cuenta («Cuenta de X»). */
const COUNT_FIELDS = new Set([
  "Contrato (Fijo o Eventual)",
  "Tipo de parcialidad",
  "Contrato Interno",
  "Contrato Legal",
  "Nombre Contrato",
  "Fin Previsto Contrato",
  "Id Cabecera TC1",
  "Nombre Cabecera TC1",
  "Id Centro Trabajo",
  "Centro Trabajo",
  "Id Empresa",
  "Empresa",
  "Id Puesto",
  "Puesto",
  "Id Posicion",
  "Posicion",
  "Id Categoria",
  "Categoria",
  "Id Unid. Org.",
  "Unidad Organizativa",
  "Fecha de pago",
  "Fecha de imputación",
]);

/** Sumas que la plantilla renombra con un espacio delante («␠X»). */
const RENAMED_SUM_FIELDS = new Set([
  "Porcentaje Jornada",
  "Salario Base",
  "Compl Puesto Trabajo",
  "Antigüedad",
  "Complemento Personal Importe",
  "Plus Convenio",
  "Plus de Asistencia",
  "Plus de Transporte",
  "Importe compl. personal no absentismo",
  "importe prima demora convenio",
  "Compensacion Comida",
  "Beca Curricular",
  "Kilometraje No Exento",
  "Kilometraje Exento",
  "Paga 25 años",
  "Gratificación una sola Vez",
  "Gratificación Variable",
  "Retribución Variable",
  "Participación en Resultados",
  "Variable Comercial",
  "Comisiones Cross Sell Importe",
  "Ayuda Escolar Hijos Importe",
  "Ayuda Vivienda",
  "Beca Empleado",
  "Paga Extra Prorrateada",
  "Paga Extra 1ª",
]);

const EMPLOYEE_COUNT_HEADER = "Nº Empl.";

const NUMBER = /^-?\d+(\.\d+)?$/;

export type PayrollSummaryField = {
  header: string;
  kind: "rows" | "count" | "sum";
  /** Columna de la hoja «Datos»; -1 para «Nº Empl.». */
  column: number;
};

export type PayrollSummaryRow = {
  kind: "employee" | "subtotal" | "total";
  /** Etiquetas de las tres columnas de fila. */
  labels: [string | null, string | null, string | null];
  /** Valores por campo de datos; `null` cuando la tabla dinámica deja la celda vacía. */
  values: (number | null)[];
};

export type PayrollSummary = {
  fields: PayrollSummaryField[];
  rows: PayrollSummaryRow[];
};

const isCountField = (header: string, values: readonly string[]): boolean => {
  if (COUNT_FIELDS.has(header)) return true;
  if (RENAMED_SUM_FIELDS.has(header)) return false;
  // Campo añadido fuera de la plantilla: Excel cuenta si hay texto y suma si todo es numérico.
  return values.some((value) => value !== "" && !NUMBER.test(value));
};

const fieldHeader = (header: string, kind: "count" | "sum"): string => {
  if (kind === "count") return `Cuenta de ${header}`;
  return RENAMED_SUM_FIELDS.has(header) ? ` ${header}` : `Suma de ${header}`;
};

/**
 * Tabla dinámica de la plantilla, o `null` si los datos no tienen los campos
 * de fila (otros informes usan plantillas distintas).
 */
export const buildPayrollSummary = (table: PayrollReportTable): PayrollSummary | null => {
  const rowColumns = SUMMARY_ROW_FIELDS.map((field) => table.headers.indexOf(field));
  const firstData = table.headers.indexOf(FIRST_DATA_FIELD);
  if (rowColumns.some((column) => column < 0) || firstData < 0) return null;

  const fields: PayrollSummaryField[] = [
    ...SUMMARY_ROW_FIELDS.map((header, index) => ({
      header,
      kind: "rows" as const,
      column: rowColumns[index] ?? -1,
    })),
    { header: EMPLOYEE_COUNT_HEADER, kind: "sum", column: -1 },
  ];
  for (let column = firstData; column < table.headers.length; column += 1) {
    const header = table.headers[column] ?? "";
    const kind = isCountField(
      header,
      table.rawRows.map((row) => row[column] ?? ""),
    )
      ? "count"
      : "sum";
    // Con cabeceras repetidas, la tabla dinámica usa la primera columna de ese nombre.
    fields.push({ header: fieldHeader(header, kind), kind, column: table.headers.indexOf(header) });
  }
  const dataFields = fields.filter((field) => field.kind !== "rows");

  const aggregate = (rows: readonly string[][]): (number | null)[] =>
    dataFields.map((field) => {
      if (field.column < 0) return rows.length;
      if (field.kind === "count") {
        const count = rows.filter((row) => (row[field.column] ?? "") !== "").length;
        return count === 0 ? null : count;
      }
      return rows.reduce((total, row) => {
        const raw = row[field.column] ?? "";
        return NUMBER.test(raw) ? total + Number(raw) : total;
      }, 0);
    });

  type EmployeeGroup = { employeeId: string; name: string; rows: string[][] };
  const [centerColumn, employeeColumn, nameColumn] = rowColumns as [number, number, number];
  const centers = new Map<string, Map<string, EmployeeGroup>>();
  for (const row of table.rawRows) {
    const center = row[centerColumn] ?? "";
    // El Id Empleado tiene formato texto en la plantilla y pierde el apóstrofo.
    const employeeId = (row[employeeColumn] ?? "").replace(/^'/, "");
    const name = row[nameColumn] ?? "";
    const key = JSON.stringify([employeeId, name]);
    const employees = centers.get(center) ?? new Map<string, EmployeeGroup>();
    const group = employees.get(key) ?? { employeeId, name, rows: [] };
    group.rows.push(row);
    employees.set(key, group);
    centers.set(center, employees);
  }

  // La tabla dinámica de la plantilla no ordena: los elementos salen en el orden de «Datos».
  const rows: PayrollSummaryRow[] = [];
  for (const center of centers.keys()) {
    const groups = [...(centers.get(center)?.values() ?? [])];
    groups.forEach((group, index) => {
      rows.push({
        kind: "employee",
        labels: [index === 0 ? center : null, group.employeeId, group.name],
        values: aggregate(group.rows),
      });
    });
    rows.push({
      kind: "subtotal",
      labels: [`Total ${center}`, null, null],
      values: aggregate(groups.flatMap((group) => group.rows)),
    });
  }
  rows.push({
    kind: "total",
    labels: ["Total general", null, null],
    values: aggregate(table.rawRows),
  });

  return { fields, rows };
};
