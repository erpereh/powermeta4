/*
 * Resultado de un informe de nómina tal como lo guarda Meta4 en
 * `M4CSP_INF_RESULT1.CSP_RESULTADO`: cabecera `~BLOBD\0\0` y texto Latin-1
 * separado por tabuladores (primera línea, cabeceras). Es la hoja «Datos» del
 * Excel que genera PeopleNet; un BLOB de solo 8 bytes significa que la
 * ejecución no produjo filas.
 */

const BLOB_HEADER = "~BLOBD";
const BLOB_HEADER_LENGTH = 8;
const EMPLOYEE_ID_HEADER = "Id Empleado";

/** Celda ya convertida como la deja Excel al pegar el texto de Meta4. */
export type PayrollReportCell = string | number | Date | null;

export type PayrollReportTable = {
  headers: string[];
  /** Texto original de cada celda; las agregaciones del informe lo usan tal cual. */
  rawRows: string[][];
};

export class PayrollReportDataError extends Error {
  constructor() {
    super("El resultado del informe no tiene el formato esperado.");
    this.name = "PayrollReportDataError";
  }
}

/** Decodifica el BLOB de Meta4 en cabeceras y filas de texto. */
export const parsePayrollReportBlob = (blob: Uint8Array | null): PayrollReportTable => {
  if (!blob || blob.length <= BLOB_HEADER_LENGTH) return { headers: [], rawRows: [] };
  const signature = new TextDecoder("latin1").decode(blob.subarray(0, BLOB_HEADER.length));
  if (signature !== BLOB_HEADER) throw new PayrollReportDataError();
  const text = new TextDecoder("latin1").decode(blob.subarray(BLOB_HEADER_LENGTH));
  const lines = text.split(/\r?\n/).filter((line) => line.length > 0);
  const [header, ...rows] = lines;
  if (header === undefined) return { headers: [], rawRows: [] };
  const headers = header.split("\t");
  const rawRows = rows.map((line) => {
    const cells = line.split("\t");
    return headers.map((_, index) => cells[index] ?? "");
  });
  return { headers, rawRows };
};

const NUMBER = /^-?\d+(\.\d+)?$/;
const DATE_TIME = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

/** Columnas con formato texto en la plantilla: el valor no se convierte a número. */
const TEXT_COLUMNS = new Set([EMPLOYEE_ID_HEADER]);

/**
 * Convierte el texto de una celda como lo hace Excel al recibirlo de Meta4:
 * los números y las fechas `AAAA-MM-DD hh:mm:ss` se convierten y el texto
 * queda tal cual, también con su apóstrofo inicial (`'0028`). Solo las
 * columnas con formato texto en la plantilla pierden el apóstrofo.
 */
export const payrollReportCell = (raw: string, header: string): PayrollReportCell => {
  if (raw === "") return null;
  if (TEXT_COLUMNS.has(header)) return raw.startsWith("'") ? raw.slice(1) : raw;
  if (NUMBER.test(raw)) return Number(raw);
  const date = DATE_TIME.exec(raw);
  if (date) {
    const [, year, month, day, hours, minutes, seconds] = date;
    return new Date(
      Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hours),
        Number(minutes),
        Number(seconds),
      ),
    );
  }
  return raw;
};

/** Filas al estilo de la hoja «Datos», con las celdas convertidas. */
export const payrollReportRows = (table: PayrollReportTable): PayrollReportCell[][] =>
  table.rawRows.map((row) =>
    row.map((raw, index) => payrollReportCell(raw, table.headers[index] ?? "")),
  );
