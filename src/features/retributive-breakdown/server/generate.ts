import "server-only";

import {
  breakdownFilename,
  type BreakdownOutput,
  type BreakdownPreview,
  GROUPINGS,
  type GroupingId,
  MAX_UPLOAD_BYTES,
} from "../contract";
import { analyzeGrouping, readEmployees } from "./calculation";
import { consolidateBreakdown } from "./consolidate";
import { appendBreakdown } from "./export";
import { BreakdownInputError, normalize, readWorkbook, type Workbook, writeZip } from "./workbook";

async function processBreakdown(
  files: readonly File[],
  exportBook?: (id: GroupingId, workbook: Workbook) => Promise<void>,
): Promise<BreakdownPreview> {
  if (
    files.length !== GROUPINGS.length ||
    files.some((file) => !/\.xlsx$/i.test(file.name) || file.size === 0)
  ) {
    throw new BreakdownInputError("Selecciona los cinco Excel .xlsx, uno por cada agrupación.");
  }
  if (files.reduce((size, file) => size + file.size, 0) > MAX_UPLOAD_BYTES) {
    throw new BreakdownInputError("Los cinco archivos deben sumar como máximo 9 MiB.");
  }

  let reference: (Omit<BreakdownPreview, "groupings"> & { signature: string }) | undefined;
  const groupings = new Map<GroupingId, BreakdownPreview["groupings"][number]>();
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
    if (groupings.has(grouping.file)) {
      throw new BreakdownInputError("La agrupación «" + grouping.sheet + "» está repetida.");
    }
    const source = readEmployees(employees);
    if (reference && reference.signature !== source.signature) {
      throw new BreakdownInputError(
        "El periodo o los datos de Empleados no coinciden en los cinco Excel.",
      );
    }
    reference ??= {
      signature: source.signature,
      period: source.period,
      employeeRows: source.rows.length,
      concepts: source.concepts.map(({ code, section }) => ({ code, section })),
    };
    const analysis = analyzeGrouping(source, summary, grouping);
    appendBreakdown(workbook, summary, source, analysis);
    groupings.set(grouping.file, {
      id: grouping.file,
      groups: analysis.groups.map(({ identifier, label, metrics }) => ({
        identifier,
        label,
        metrics,
      })),
    });
    await exportBook?.(grouping.file, workbook);
  }

  if (!reference) throw new BreakdownInputError("Faltan los Excel de entrada.");
  return {
    period: reference.period,
    employeeRows: reference.employeeRows,
    concepts: reference.concepts,
    groupings: GROUPINGS.map(({ file }) => requiredGrouping(groupings, file)),
  };
}

function requiredGrouping<T>(items: ReadonlyMap<GroupingId, T>, file: GroupingId): T {
  const item = items.get(file);
  if (item === undefined) {
    throw new BreakdownInputError("Falta una de las cinco agrupaciones requeridas.");
  }
  return item;
}

export function analyzeBreakdown(files: readonly File[]): Promise<BreakdownPreview> {
  return processBreakdown(files);
}

export async function prepareBreakdown(files: readonly File[], output: BreakdownOutput = "zip") {
  const books = new Map<GroupingId, Uint8Array<ArrayBuffer>>();
  const result = await processBreakdown(files, async (id, workbook) => {
    if (output === "zip" || output === "complete" || output === id) {
      books.set(id, await writeZip(workbook.parts));
    }
  });
  return { result, books };
}

export function exportBreakdown(
  books: ReadonlyMap<GroupingId, Uint8Array<ArrayBuffer>>,
  output: BreakdownOutput,
) {
  const getBook = (id: GroupingId) => requiredGrouping(books, id);
  if (output === "complete") return consolidateBreakdown(getBook);
  if (output !== "zip") return getBook(output);
  return writeZip(
    GROUPINGS.map(({ file }) => [breakdownFilename(file), getBook(file)]),
    0,
  );
}

export async function generateBreakdown(files: readonly File[], output: BreakdownOutput = "zip") {
  const { books } = await prepareBreakdown(files, output);
  return exportBreakdown(books, output);
}
