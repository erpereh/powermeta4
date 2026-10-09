/**
 * Compara la consulta quinquenal de powermeta4 con un Excel exportado desde
 * PeopleNet (`npm run quinquenal:verify -- <excel> [sociedad] [matrícula]`). Solo ejecuta
 * `SELECT` y solo imprime recuentos de coincidencias por columna; nunca valores
 * de empleados.
 */
import ExcelJS from "exceljs";

import { getPeopleNetPool } from "../../src/lib/peoplenet/client";
import { getQuinquenalReport } from "../../src/lib/peoplenet/quinquenal";
import {
  quinquenalCells,
  quinquenalHeaders,
  type QuinquenalCell,
} from "../../src/lib/quinquenal/sheet";

const loadEnv = () => {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      // El fichero es opcional: las variables pueden venir del entorno.
    }
  }
};

/** Normaliza para comparar: textos sin espacios extremos, fechas ISO, importes en céntimos. */
const normalize = (value: unknown): string => {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "number") return (Math.round(value * 100) / 100).toFixed(2);
  if (typeof value === "object" && "result" in value) return normalize(value.result);
  const text = String(value).trim();
  if (/^-?\d+(\.\d+)?$/.test(text) && text.includes(".")) return Number(text).toFixed(2);
  return text;
};

const isNumeric = (value: string) => /^-?\d+(\.\d+)?$/.test(value);

const main = async () => {
  loadEnv();
  const [file, society = "CYC", employeeId] = process.argv.slice(2);
  if (!file) throw new Error("Uso: npm run quinquenal:verify -- <excel> [sociedad] [matrícula]");

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(file);
  const sheet = workbook.worksheets[0];
  if (!sheet) throw new Error("El Excel no tiene hojas.");

  const today = new Date().toISOString().slice(0, 10);
  const report = await getQuinquenalReport({ organization: society, today, employeeId });
  const headers = quinquenalHeaders(report.currentYear);

  const expectedHeaders = headers.map((_, index) => normalize(sheet.getCell(3, 2 + index).value));
  const headerMismatches = headers.filter((header, index) => header !== expectedHeaders[index]);

  const excelRows = new Map<string, unknown[]>();
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber < 4) return;
    const values = headers.map((_, index) => row.getCell(2 + index).value);
    const id = normalize(values[1]);
    if (!employeeId || id === employeeId) excelRows.set(id, values);
  });

  const mine = new Map<string, QuinquenalCell[]>(
    report.rows.map((row) => [row.employeeId, quinquenalCells(row, report.currentYear)]),
  );
  const onlyExcel = [...excelRows.keys()].filter((id) => !mine.has(id)).length;
  const onlyMine = [...mine.keys()].filter((id) => !excelRows.has(id)).length;

  const stats = headers.map(() => ({ ok: 0, ko: 0, emptyVsZero: 0 }));
  const failingEmployees = new Set<string>();
  for (const [id, expected] of excelRows) {
    const actual = mine.get(id);
    if (!actual) continue;
    headers.forEach((_, index) => {
      const a = normalize(actual[index]);
      const b = normalize(expected[index]);
      const same =
        a === b || (isNumeric(a) && isNumeric(b) && Math.abs(Number(a) - Number(b)) < 0.011);
      const stat = stats[index];
      if (!stat) return;
      if (same) stat.ok += 1;
      else {
        stat.ko += 1;
        failingEmployees.add(id);
        if ((a === "" && Number(b) === 0) || (b === "" && Number(a) === 0)) stat.emptyVsZero += 1;
        if (process.env.QUINQUENAL_DEBUG === "1") {
          // Solo nombres de unidades organizativas o el tipo de diferencia: nunca datos personales.
          const header = headers[index] ?? "";
          const detail = /^NOMBRE (DIRECCION|UNIDAD|SERVICIO|AREA)$/.test(header)
            ? `${JSON.stringify(a)} vs ${JSON.stringify(b)}`
            : `${a === "" ? "vacío" : Number(a) === 0 ? "0" : "valor"} vs Excel ${b === "" ? "vacío" : Number(b) === 0 ? "0" : "valor"} (retribución del año en Excel: ${normalize(expected[index - 2]) === "" ? "vacía" : "con valor"})`;
          console.log(`    [${header}] ${detail}`);
        }
      }
    });
  }

  console.log(`Sociedad ${society} · año ${report.currentYear}`);
  console.log(`Filas: Excel ${excelRows.size} · powermeta4 ${report.rows.length}`);
  console.log(`Solo en Excel: ${onlyExcel} · solo en powermeta4: ${onlyMine}`);
  console.log(`Cabeceras distintas: ${headerMismatches.length}`);
  headers.forEach((header, index) => {
    const stat = stats[index];
    if (stat && stat.ko > 0) {
      console.log(
        `  ${header}: ${stat.ok} coinciden · ${stat.ko} distintas (${stat.emptyVsZero} vacío/0)`,
      );
    }
  });
  console.log(
    `Columnas idénticas: ${stats.filter((stat) => stat.ko === 0).length}/${headers.length}`,
  );
  console.log(`Empleados con alguna diferencia: ${failingEmployees.size}`);

  const pool = await getPeopleNetPool();
  await pool.close();
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? `${error.name}: ${error.message}` : error);
  process.exitCode = 1;
});
