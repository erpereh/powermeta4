import "server-only";

import { GROUPINGS, MAX_UPLOAD_BYTES } from "../contract";
import { analyzeGrouping, readEmployees } from "./calculation";
import { appendBreakdown } from "./export";
import { BreakdownInputError, normalize, readWorkbook, writeZip } from "./workbook";

export async function generateBreakdown(files: readonly File[]) {
  if (
    files.length !== GROUPINGS.length ||
    files.some((file) => !/\.xlsx$/i.test(file.name) || file.size === 0)
  ) {
    throw new BreakdownInputError("Selecciona los cinco Excel .xlsx, uno por cada agrupación.");
  }
  if (files.reduce((size, file) => size + file.size, 0) > MAX_UPLOAD_BYTES) {
    throw new BreakdownInputError("Los cinco archivos deben sumar como máximo 9 MiB.");
  }

  let employeeSignature: string | undefined;
  const results = new Map<string, Uint8Array>();
  for (const file of files) {
    const workbook = await readWorkbook(new Uint8Array(await file.arrayBuffer()));
    const employees = workbook.sheets.find((sheet) => normalize(sheet.name) === "empleados");
    const summary = workbook.sheets.find((sheet) => sheet !== employees);
    const grouping = GROUPINGS.find(
      ({ sheet }) => normalize(sheet) === normalize(summary?.name ?? null),
    );
    if (!employees || !summary || !grouping) {
      throw new BreakdownInputError(
        "Cada Excel debe contener Empleados y una de las cinco agrupaciones requeridas.",
      );
    }
    if (results.has(grouping.file)) {
      throw new BreakdownInputError("La agrupación «" + grouping.sheet + "» está repetida.");
    }
    const source = readEmployees(employees);
    if (employeeSignature !== undefined && employeeSignature !== source.signature) {
      throw new BreakdownInputError(
        "El periodo o los datos de Empleados no coinciden en los cinco Excel.",
      );
    }
    employeeSignature = source.signature;
    const analysis = analyzeGrouping(source, summary, grouping);
    appendBreakdown(workbook, summary, source, analysis);
    results.set(grouping.file, await writeZip(workbook.parts));
  }

  return writeZip(
    GROUPINGS.map(({ file }) => {
      const bytes = results.get(file);
      if (!bytes) throw new BreakdownInputError("Falta una de las cinco agrupaciones requeridas.");
      return ["desglose-iber-" + file + ".xlsx", bytes];
    }),
    0,
  );
}
