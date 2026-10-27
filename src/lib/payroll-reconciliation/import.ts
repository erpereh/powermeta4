import { createHash } from "node:crypto";
import * as XLSX from "xlsx";
import { BlobReader, ZipReader } from "@zip.js/zip.js";
import { identity, METRICS, MONTHS, normalizeHeader } from "./catalogue";
import { decimal, textDecimal } from "./decimal";
import type { Category, Source, SourceFact } from "./types";

export const LIMITS = {
  files: 20,
  fileBytes: 16 * 1024 * 1024,
  requestBytes: 32 * 1024 * 1024,
  expandedBytes: 128 * 1024 * 1024,
  rows: 100_000,
  cells: 2_000_000,
} as const;
export class ReconciliationError extends Error {
  constructor(
    message: string,
    readonly status = 400,
  ) {
    super(message);
    this.name = "ReconciliationError";
  }
}
const fail = (message: string): never => {
  throw new ReconciliationError(message, 422);
};

async function guardPackage(bytes: Uint8Array): Promise<void> {
  if (bytes[0] !== 0x50 || bytes[1] !== 0x4b) return;
  const reader = new ZipReader(new BlobReader(new Blob([Uint8Array.from(bytes)])));
  try {
    const entries = await reader.getEntries();
    let total = 0;
    if (entries.length > 10_000) fail("Demasiadas entradas en el libro.");
    for (const entry of entries) {
      total += entry.uncompressedSize;
      if (entry.encrypted || total > LIMITS.expandedBytes)
        throw new ReconciliationError("Libro cifrado o expansión superior a 128 MiB.", 413);
    }
  } finally {
    await reader.close();
  }
}

export async function importSource(
  bytes: Uint8Array,
  filename: string,
  category: Category,
  period: string,
  complete: boolean,
): Promise<Source> {
  if (!/\.(xlsx|xls|csv)$/i.test(filename)) fail("Formato admitido: .xls, .xlsx o .csv.");
  if (!bytes.length || bytes.length > LIMITS.fileBytes)
    throw new ReconciliationError("Archivo vacío o superior a 16 MiB.", 413);
  const ext = filename.split(".").at(-1)?.toLowerCase();
  if (ext === "xlsx" && !(bytes[0] === 0x50 && bytes[1] === 0x4b))
    fail("El contenido no es un libro XLSX.");
  if (ext === "xls" && !(bytes[0] === 0xd0 && bytes[1] === 0xcf))
    fail("El contenido no es un libro XLS BIFF.");
  if (ext === "csv" && bytes.includes(0)) fail("El CSV contiene datos binarios.");
  await guardPackage(bytes);
  let workbook: XLSX.WorkBook;
  try {
    workbook = XLSX.read(bytes, {
      type: "array",
      cellFormula: false,
      cellHTML: false,
      cellNF: false,
      raw: true,
    });
  } catch {
    return fail("Libro corrupto, cifrado o no interpretable.");
  }
  let cellCount = 0;
  for (const sheet of Object.values(workbook.Sheets)) {
    const range = sheet["!ref"] ? XLSX.utils.decode_range(sheet["!ref"]) : null;
    if (range && (range.e.r >= LIMITS.rows || range.e.c > 2047))
      throw new ReconciliationError("El libro supera los límites de filas o columnas.", 413);
    cellCount += Object.keys(sheet).filter((key) => !key.startsWith("!")).length;
    if (cellCount > LIMITS.cells)
      throw new ReconciliationError("El libro supera dos millones de celdas.", 413);
  }
  const facts: SourceFact[] = [],
    diagnostics: string[] = [];
  const month = MONTHS[Number(period.slice(5)) - 1];
  const sheet = (name: string): XLSX.WorkSheet =>
    workbook.Sheets[name] ?? fail(`Falta la hoja acreditada «${name}».`);
  const cell = (s: XLSX.WorkSheet, col: string, row: number): XLSX.CellObject | undefined =>
    s[`${col}${row}`];
  const value = (s: XLSX.WorkSheet, col: string, row: number): string => {
    const c = cell(s, col, row);
    if (!c || c.v === undefined || c.v === null) return "";
    return c.t === "e" ? "#ERROR" : String(c.v).trim();
  };
  const numeric = (s: XLSX.WorkSheet, col: string, row: number): string | null => {
    const parsed = decimal(value(s, col, row));
    return parsed === null ? null : textDecimal(parsed);
  };
  const header = (s: XLSX.WorkSheet, col: string, row: number, expected: string) => {
    if (normalizeHeader(value(s, col, row)) !== normalizeHeader(expected))
      fail(`Estructura no acreditada en ${col}${row}; se esperaba «${expected}».`);
  };
  const lastRow = (s: XLSX.WorkSheet): number =>
    s["!ref"] ? XLSX.utils.decode_range(s["!ref"]).e.r + 1 : 0;
  const push = (
    s: XLSX.WorkSheet,
    name: string,
    col: string,
    row: number,
    values: SourceFact["values"],
    extras: Partial<SourceFact> = {},
  ) => {
    const raw = identity(value(s, col, row));
    if (!raw) return;
    const valid =
      /^[\dA-Za-z_-]+$/.test(raw) &&
      !["total", "matricula", "id_empleado"].includes(raw.toLowerCase());
    facts.push({
      employeeId: valid ? raw : `INVALIDO-${row}`,
      values,
      reference: `${name}!${col}${row}`,
      ...extras,
      ...(!valid
        ? { issue: "Identidad inválida; corregir el original. No se une por nombre." }
        : {}),
    });
  };
  const sequential = (
    s: XLSX.WorkSheet,
    col: string,
    first: number,
    action: (row: number) => void,
  ) => {
    for (let row = first; row <= lastRow(s); row++) {
      if (!value(s, col, row)) break;
      action(row);
    }
  };
  if (category === "mercer") {
    const s = sheet("Sheet0");
    header(s, "A", 2, "Nº EMPL");
    const maps = [
      ["healthCompany", "K", 1, "Seguro Salud Cia Mensual"],
      ["healthDeduction", "I", -1, "Exento Mes SS"],
      ["healthKind", "J", -1, "Especie Mes SS"],
      ["nursery", "O", -1, "Coste Mes guarderia"],
      ["transport", "AI", -1, "Exento Mes transporte"],
      ["transportKind", "AJ", -1, "Especie Mes transporte"],
      ["renting", "AC", -1, "Exento Mes renting coche"],
      ["rentingKind", "AD", -1, "Especie Mes renting coche"],
      ["savings", "V", -1, "Exento Mes Ahorro"],
    ] as const;
    for (const [, col, , label] of maps) header(s, col, 2, label);
    sequential(s, "A", 3, (row) =>
      push(
        s,
        "Sheet0",
        "A",
        row,
        Object.fromEntries(
          maps.map(([metric, col, sign]) => {
            const n = numeric(s, col, row);
            return [metric, n === null ? null : textDecimal(decimal(n)! * BigInt(sign))];
          }),
        ),
      ),
    );
  } else if (category === "comisiones") {
    const s = sheet("Carga de Valores");
    header(s, "A", 2, "id_emp_f");
    header(s, "B", 2, "id_articulo");
    for (const [col, label] of [
      ["G", "imp_totexekm_c"],
      ["H", "imp_totdeckm_c"],
      ["I", "imp_totcocpro_c"],
    ])
      header(s, col, 2, label);
    sequential(s, "A", 3, (row) =>
      push(
        s,
        "Carga de Valores",
        "A",
        row,
        {
          kmExempt: numeric(s, "G", row),
          kmSubject: numeric(s, "H", row),
          kmCancellation: numeric(s, "I", row),
        },
        {
          recordId: value(s, "B", row),
          ...(value(s, "B", row) !== "GV-KILOM01"
            ? { issue: "Artículo de comisiones no acreditado en el perfil v1." }
            : {}),
        },
      ),
    );
  } else if (category === "gimnasio") {
    const s = sheet("Hoja1");
    header(s, "A", 1, "Id Empleado");
    header(s, "F", 1, `Pago de ${month}`);
    sequential(s, "A", 2, (row) => push(s, "Hoja1", "A", row, { gym: numeric(s, "F", row) }));
  } else if (category === "teletrabajo") {
    const s = sheet("80-20");
    header(s, "A", 1, "Matr.");
    header(s, "F", 1, "Empresa");
    sequential(s, "A", 2, (row) => push(s, "80-20", "A", row, { member: "1" }));
    diagnostics.push(
      "El colectivo no acredita tarifa/días: confirmar parámetros y excepciones del periodo. No se utiliza BP/BQ como esperado.",
    );
  } else if (category === "comida") {
    const s = sheet("Descuentos");
    header(s, "A", 1, "Id emp");
    header(s, "D", 1, "Nº Ausencias");
    sequential(s, "A", 2, (row) =>
      push(s, "Descuentos", "A", row, { absences: numeric(s, "D", row) }),
    );
    diagnostics.push(
      "Confirmar días de derecho, tarifa y excepciones. No se incluyen ajustes de otros meses.",
    );
  } else if (category === "recarga") {
    const s = sheet("Hoja1");
    header(s, "A", 1, "MATRICULA");
    header(s, "C", 1, "IMPORTE_CARGA");
    if (
      !normalizeHeader(value(s, "D", 1)).startsWith("cargado en eurest") ||
      !normalizeHeader(value(s, "F", 1)).startsWith("descarga")
    )
      fail("Faltan las columnas acreditadas de recarga/descarga.");
    sequential(s, "A", 2, (row) => {
      const load = numeric(s, "C", row),
        included = numeric(s, "D", row),
        discharge = numeric(s, "F", row);
      const invalid =
        ["C", "D", "F"].some((col) => value(s, col, row) && numeric(s, col, row) === null) ||
        (load === null && included === null);
      push(
        s,
        "Hoja1",
        "A",
        row,
        {
          net: invalid
            ? null
            : textDecimal(
                (decimal(load) ?? BigInt(0)) +
                  (decimal(included) ?? BigInt(0)) -
                  (decimal(discharge) ?? BigInt(0)),
              ),
        },
        invalid ? { issue: "Carga/descarga inválida o ambas cargas vacías." } : {},
      );
    });
  } else if (category === "eurest") {
    const s = sheet("Hoja1");
    header(s, "B", 1, "Numero de Matricula");
    header(s, "E", 1, "EUREST");
    sequential(s, "B", 2, (row) => push(s, "Hoja1", "B", row, { net: numeric(s, "E", row) }));
  } else if (category === "ppse") {
    const name = workbook.Sheets["Fichero PPSE"] ? "Fichero PPSE" : workbook.SheetNames[0];
    const s = sheet(name);
    header(s, "A", 1, "EMPRESA");
    header(s, "B", 1, "MATRICULA");
    header(s, "M", 1, "Aportacion Personal");
    const monthCol = Object.entries(s)
      .find(
        ([address, c]) => /^[A-Z]+1$/.test(address) && normalizeHeader(String(c.v)) === month,
      )?.[0]
      .replace(/1$/, "");
    if (!monthCol) fail(`No hay columna mensual «${month}» en PPSE.`);
    for (let row = 2; row <= lastRow(s); row++) {
      if (!/^\d+$/.test(identity(value(s, "B", row))) || !value(s, "A", row)) continue;
      push(
        s,
        name,
        "B",
        row,
        { ppse: numeric(s, monthCol!, row), personalReference: numeric(s, "M", row) },
        { entity: value(s, "A", row) },
      );
    }
    diagnostics.push(
      "Se usa el mes seleccionado, no M ni el límite histórico de fila 252. Validar semántica/calendario PPSE (Q13).",
    );
  } else if (category === "apartamentos") {
    const s = sheet("Bonos disfrute");
    const blocks = [
      { id: "A", first: 3, last: 25, months: { 10: "D", 11: "E" } },
      { id: "I", first: 3, last: 25, months: { 10: "L", 11: "M", 12: "N" } },
      { id: "P", first: 3, last: 15, months: { 10: "S", 11: "T", 12: "U", 1: "V" } },
    ];
    let recognized = false;
    for (const block of blocks) {
      const col = (block.months as Record<number, string>)[Number(period.slice(5))];
      if (!col) continue;
      if (!normalizeHeader(value(s, col, 2)).includes(month)) continue;
      recognized = true;
      for (let row = block.first; row <= block.last; row++) {
        if (!/^\d+$/.test(identity(value(s, block.id, row)))) continue;
        push(s, "Bonos disfrute", block.id, row, { apartments: numeric(s, col, row) });
      }
      for (let row = block.last + 1; row < 32; row++) {
        if (/^\d+$/.test(identity(value(s, block.id, row))) && numeric(s, col, row) !== null)
          fail(
            "El bloque de cuotas ha crecido fuera del perfil acreditado; validar su nueva delimitación.",
          );
      }
    }
    if (!recognized)
      fail("No se reconoce el bloque mensual de cuotas; no se utilizará el coste total.");
    diagnostics.push(
      "Perfil de tres bloques acreditados (filas 3:25/15); confirmar año de las cuotas y cobertura del documento.",
    );
  } else if (category === "aniversarios") {
    for (const name of ["ACYC", "Iberinform"]) {
      if (!workbook.Sheets[name]) continue;
      const s = sheet(name),
        first = name === "ACYC" ? 4 : 3,
        dateCol = name === "ACYC" ? "H" : "G";
      header(s, "B", first - 1, "EMPRESA");
      header(s, "C", first - 1, "MATRICULA");
      for (let row = first; row <= lastRow(s); row++) {
        if (!/^\d+$/.test(identity(value(s, "C", row)))) continue;
        const rawDate = numeric(s, dateCol, row);
        const date = rawDate !== null ? XLSX.SSF.parse_date_code(Number(rawDate)) : null;
        if (!date) {
          push(
            s,
            name,
            "C",
            row,
            { anniversary: null },
            { issue: "Antigüedad no interpretable.", entity: value(s, "B", row) },
          );
          continue;
        }
        const years = Number(period.slice(0, 4)) - date.y;
        if (date.m !== Number(period.slice(5)) || ![25, 40].includes(years)) continue;
        push(
          s,
          name,
          "C",
          row,
          { anniversary: `anniversary${years}` },
          { entity: value(s, "B", row) },
        );
      }
    }
  } else {
    const name = workbook.SheetNames[0],
      s = sheet(name);
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(s, { raw: true, defval: null });
    const unique = new Set<string>();
    for (let index = 0; index < rows.length; index++) {
      const record = rows[index],
        row = index + 2;
      const get = (key: string) => String(record[key] ?? "").trim();
      if (!Object.hasOwn(record, "matricula"))
        fail("La plantilla debe incluir «matricula» y sus campos obligatorios.");
      const periodField =
        category === "excesos"
          ? "periodo_compensacion"
          : category === "anticipos"
            ? "periodo_cuota"
            : "periodo_devengo";
      if (!get(periodField)) fail(`Falta ${periodField}.`);
      if (get(periodField) !== period) continue;
      const id = identity(get("matricula"));
      if (!id) fail(`Falta matrícula en fila ${row}.`);
      let metric: string, amount: string;
      if (category === "excesos") {
        metric = "excess";
        amount = get("importe_firmado");
      } else if (category === "anticipos") {
        if (!["vigente", "cancelada"].includes(get("estado")))
          fail(`Estado de cuota inválido en fila ${row}.`);
        if (get("estado") === "cancelada") continue;
        if (!["prorrateado", "a_descontar"].includes(get("tipo")))
          fail(`Tipo de anticipo inválido en fila ${row}.`);
        metric = get("tipo") === "prorrateado" ? "advanceProrated" : "advanceDeduct";
        amount = get("importe_nomina_firmado");
      } else {
        metric = get("metrica");
        amount = get("importe_esperado_firmado");
        const definition = METRICS.find((item) => item.id === metric && !item.monthly);
        if (!definition || get("control") !== definition.control)
          fail(`Control/métrica de excepción no acreditados en fila ${row}.`);
        if (!get("motivo") || !get("referencia_documental") || get("confirmada") !== "SI")
          fail(`Excepción sin confirmación/motivo/referencia en fila ${row}.`);
        if (
          !/^\d{4}-\d{2}-\d{2}$/.test(get("vigencia_desde")) ||
          !/^\d{4}-\d{2}-\d{2}$/.test(get("vigencia_hasta"))
        )
          fail(`Vigencia inválida en fila ${row}.`);
        if (get("vigencia_desde") > `${period}-31` || get("vigencia_hasta") < `${period}-01`)
          fail(`Excepción fuera de vigencia en fila ${row}.`);
      }
      const parsed = decimal(amount);
      if ([get("motivo"), get("referencia_documental")].some((text) => text.length > 2000))
        fail(`Motivo o referencia demasiado largos en fila ${row}.`);
      const recordId =
        category === "anticipos" ? `${get("solicitud_id")}:${get("cuota_id")}` : get("registro_id");
      if (
        category === "anticipos" &&
        (!get("solicitud_id") || !get("cuota_id") || !get("referencia_documental"))
      )
        fail(`Faltan identificadores/referencia de cuota en fila ${row}.`);
      if (
        category === "excesos" &&
        (!/^\d{4}-(0[1-9]|1[0-2])$/.test(get("periodo_origen")) ||
          !get("motivo") ||
          !get("referencia_documental"))
      )
        fail(`Faltan origen, motivo o referencia del exceso en fila ${row}.`);
      if (!recordId || unique.has(recordId))
        fail(`ID de registro ausente o duplicado en fila ${row}.`);
      unique.add(recordId);
      if (parsed === null || (category !== "excepciones" && get("moneda") !== "EUR"))
        fail(`Importe/moneda inválidos en fila ${row}.`);
      facts.push({
        employeeId: id,
        values: { [metric]: textDecimal(parsed!) },
        recordId,
        documentReference: get("referencia_documental"),
        reason: get("motivo"),
        reference: `${name}!fila ${row}`,
      });
    }
  }
  if (!facts.length)
    diagnostics.push(
      "Sin registros aplicables al periodo; confirmar si el listado está vacío o el mes no corresponde.",
    );
  if (facts.some((fact) => fact.issue))
    diagnostics.push("Hay identidades o valores no interpretables; se conservan como pendientes.");
  const fileHash = createHash("sha256").update(bytes).digest("hex");
  const idHash = createHash("sha256").update(`${fileHash}:${category}:${period}`).digest("hex");
  const id = `${idHash.slice(0, 8)}-${idHash.slice(8, 12)}-5${idHash.slice(13, 16)}-a${idHash.slice(17, 20)}-${idHash.slice(20, 32)}`;
  return {
    id,
    hash: fileHash,
    category,
    period,
    complete,
    profile: `${category}-v1`,
    facts,
    diagnostics,
    cellCount,
  };
}
