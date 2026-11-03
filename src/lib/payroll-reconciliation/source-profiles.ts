import * as XLSX from "xlsx";
import { CATEGORIES, MONTHS, normalizeHeader } from "./catalogue";
import type { Category } from "./types";

const text = (sheet: XLSX.WorkSheet | undefined, address: string): string =>
  normalizeHeader(String(sheet?.[address]?.v ?? ""));
const has = (book: XLSX.WorkBook, sheet: string, cells: readonly (readonly [string, string])[]) =>
  Boolean(book.Sheets[sheet]) &&
  cells.every(([address, value]) => text(book.Sheets[sheet], address) === normalizeHeader(value));
const firstHeaders = (book: XLSX.WorkBook) => {
  const sheet = book.Sheets[book.SheetNames[0]];
  return new Set(
    Object.entries(sheet ?? {})
      .filter(([address]) => /^[A-Z]+1$/.test(address))
      .map(([, cell]) => normalizeHeader(String(cell.v ?? ""))),
  );
};
const template = (book: XLSX.WorkBook, fields: readonly string[]) => {
  const headers = firstHeaders(book);
  return fields.every((field) => headers.has(field));
};

/** Structural signatures only. Filenames never determine a category. */
export const SOURCE_PROFILES: Record<Category, (book: XLSX.WorkBook) => boolean> = {
  mercer: (book) =>
    has(book, "Sheet0", [
      ["A2", "Nº EMPL"],
      ["K2", "Seguro Salud Cia Mensual"],
      ["I2", "Exento Mes SS"],
    ]),
  comisiones: (book) =>
    has(book, "Carga de Valores", [
      ["A2", "id_emp_f"],
      ["B2", "id_articulo"],
      ["G2", "imp_totexekm_c"],
    ]),
  gimnasio: (book) =>
    has(book, "Hoja1", [["A1", "Id Empleado"]]) &&
    monthlyColumns(book.Sheets.Hoja1, 1, "pago de ").length > 0,
  teletrabajo: (book) =>
    has(book, "80-20", [
      ["A1", "Matr."],
      ["F1", "Empresa"],
    ]),
  comida: (book) =>
    has(book, "Descuentos", [
      ["A1", "Id emp"],
      ["D1", "Nº Ausencias"],
    ]),
  recarga: (book) =>
    has(book, "Hoja1", [
      ["A1", "MATRICULA"],
      ["C1", "IMPORTE_CARGA"],
    ]) && text(book.Sheets.Hoja1, "D1").startsWith("cargado en eurest"),
  eurest: (book) =>
    has(book, "Hoja1", [
      ["B1", "Numero de Matricula"],
      ["E1", "EUREST"],
    ]),
  ppse: (book) => {
    const name = book.Sheets["Fichero PPSE"] ? "Fichero PPSE" : book.SheetNames[0];
    return has(book, name, [
      ["A1", "EMPRESA"],
      ["B1", "MATRICULA"],
      ["M1", "Aportacion Personal"],
    ]);
  },
  apartamentos: (book) =>
    Boolean(book.Sheets["Bonos disfrute"]) &&
    monthlyColumns(book.Sheets["Bonos disfrute"], 2).length > 0,
  aniversarios: (book) =>
    has(book, "ACYC", [
      ["B3", "EMPRESA"],
      ["C3", "MATRICULA"],
    ]) ||
    has(book, "Iberinform", [
      ["B2", "EMPRESA"],
      ["C2", "MATRICULA"],
    ]),
  excesos: (book) =>
    template(book, [
      "registro_id",
      "matricula",
      "periodo_origen",
      "periodo_compensacion",
      "importe_firmado",
      "moneda",
      "motivo",
      "referencia_documental",
    ]),
  anticipos: (book) =>
    template(book, [
      "solicitud_id",
      "cuota_id",
      "matricula",
      "tipo",
      "periodo_cuota",
      "importe_nomina_firmado",
      "moneda",
      "estado",
      "referencia_documental",
    ]),
  excepciones: (book) =>
    template(book, [
      "registro_id",
      "control",
      "metrica",
      "matricula",
      "periodo_devengo",
      "vigencia_desde",
      "vigencia_hasta",
      "importe_esperado_firmado",
      "motivo",
      "referencia_documental",
      "confirmada",
    ]),
};

type Result<T> = { ok: true; value: T } | { ok: false; message: string };
export function detectSourceProfile(book: XLSX.WorkBook): Result<Category> {
  const matches = CATEGORIES.map((category) => category.id).filter((category) =>
    SOURCE_PROFILES[category](book),
  );
  if (matches.length !== 1)
    return {
      ok: false,
      message: matches.length
        ? "El archivo coincide con varias categorías. Separa sus fuentes en archivos independientes."
        : "No se reconoce la categoría por las hojas y cabeceras del archivo.",
    };
  return { ok: true, value: matches[0] };
}

type MonthColumn = { column: string; month: number; year?: number };
export function monthlyColumns(sheet: XLSX.WorkSheet, row: number, prefix = ""): MonthColumn[] {
  return Object.entries(sheet).flatMap(([address, cell]) => {
    if (!new RegExp(`^[A-Z]+${row}$`).test(address)) return [];
    const label = normalizeHeader(String(cell.v ?? ""));
    if (!label.startsWith(prefix)) return [];
    const parts = label.slice(prefix.length).match(/^([a-z]+)(?:\s+(20\d{2}))?$/);
    if (!parts) return [];
    const month = MONTHS.indexOf(parts[1]);
    return month < 0
      ? []
      : [
          {
            column: address.replace(/\d+$/, ""),
            month: month + 1,
            ...(parts[2] ? { year: Number(parts[2]) } : {}),
          },
        ];
  });
}
export function selectMonthColumn(columns: MonthColumn[], period: string): Result<string> {
  const matches = columns.filter(
    (item) =>
      item.month === Number(period.slice(5)) &&
      (!item.year || item.year === Number(period.slice(0, 4))),
  );
  if (matches.length === 1) return { ok: true, value: matches[0].column };
  if (matches.length > 1)
    return {
      ok: false,
      message: `Hay varias columnas para ${period}; no se puede elegir el importe automáticamente.`,
    };
  const available = [
    ...new Set(
      columns.map((item) => `${MONTHS[item.month - 1]}${item.year ? ` de ${item.year}` : ""}`),
    ),
  ];
  return {
    ok: false,
    message: `El archivo no contiene datos para ${MONTHS[Number(period.slice(5)) - 1]} de ${period.slice(0, 4)}. Meses disponibles: ${available.join(", ") || "ninguno"}.`,
  };
}

/** Only explicit period declarations are checked; creation dates are not payroll periods. */
export function sourceAccrualPeriod(
  book: XLSX.WorkBook,
  category: Category,
  period: string,
  filename: string,
): Result<string | undefined> {
  let declared: { month: number; year?: number } | undefined;
  const previous = new Date(`${period}-01T00:00:00Z`);
  previous.setUTCMonth(previous.getUTCMonth() - 1);
  const delayed = ["comida", "recarga", "eurest"].includes(category);
  const expected = delayed ? previous.toISOString().slice(0, 7) : period;
  const parseMonth = (label: string) => {
    const normalized = normalizeHeader(label);
    const match = normalized.match(
      new RegExp(`\\b(${MONTHS.join("|")})(?:\\s+(?:de\\s+)?(20\\d{2}))?\\b`),
    );
    return match
      ? { month: MONTHS.indexOf(match[1]) + 1, ...(match[2] ? { year: Number(match[2]) } : {}) }
      : undefined;
  };
  if (category === "comida") declared = parseMonth(String(book.Sheets.Hoja2?.A2?.v ?? ""));
  if (category === "recarga") {
    const declarations = ["D1", "F1"]
      .map((address) => parseMonth(String(book.Sheets.Hoja1?.[address]?.v ?? "")))
      .filter((item) => item !== undefined);
    if (new Set(declarations.map((item) => `${item.year ?? ""}-${item.month}`)).size > 1)
      return { ok: false, message: "Las columnas de carga y descarga declaran meses distintos." };
    declared = declarations[0];
  }
  if (category === "eurest") declared = parseMonth(filename);
  if (category === "mercer") {
    const match = filename.match(/(?:^|_)(20\d{2})[-_](0[1-9]|1[0-2])(?:[_.]|$)/);
    if (match) declared = { year: Number(match[1]), month: Number(match[2]) };
  }
  if (
    declared &&
    (declared.month !== Number(expected.slice(5)) ||
      (declared.year && declared.year !== Number(expected.slice(0, 4))))
  ) {
    return {
      ok: false,
      message: `El archivo declara ${MONTHS[declared.month - 1]}${declared.year ? ` de ${declared.year}` : ""}${delayed ? " de devengo" : ""}; no corresponde a la nómina ${period}.`,
    };
  }
  if (["excesos", "anticipos", "excepciones"].includes(category)) {
    const field =
      category === "excesos"
        ? "periodo_compensacion"
        : category === "anticipos"
          ? "periodo_cuota"
          : "periodo_devengo";
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(
      book.Sheets[book.SheetNames[0]],
      { raw: true },
    );
    const periods = [
      ...new Set(
        rows.map((row) => String(row[field] ?? "")).filter((value) => /^\d{4}-\d{2}$/.test(value)),
      ),
    ];
    if (periods.length && !periods.includes(period))
      return {
        ok: false,
        message: `El archivo no contiene datos para ${period}. Periodos disponibles: ${periods.join(", ")}.`,
      };
    return { ok: true, value: periods.includes(period) ? period : undefined };
  }
  return {
    ok: true,
    value: declared?.year
      ? `${declared.year}-${String(declared.month).padStart(2, "0")}`
      : undefined,
  };
}
