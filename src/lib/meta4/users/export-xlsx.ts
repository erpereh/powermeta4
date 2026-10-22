import "server-only";

import ExcelJS from "exceljs";

import type { Meta4Society } from "@/lib/meta4/societies";
import type { Meta4EmployeeEmailView } from "@/types/meta4-employee-detail";
import type { Meta4ProfileSectionView } from "@/types/meta4-profile";

import type { Meta4UserListItem } from "./types";

const COLUMNS: { header: string; key: keyof Meta4UserListItem; width: number }[] = [
  { header: "ID", key: "id", width: 12 },
  { header: "Usuario Meta4", key: "claveSelf", width: 30 },
  { header: "Nombre y apellidos", key: "fullName", width: 50 },
];

const DETAIL_WIDTH = 24;

/** Ficha de una persona como la muestra el diálogo de detalle, o el motivo si no se pudo leer. */
export type UserDetailExport =
  | { employeeId: string; sections: Meta4ProfileSectionView[]; emails: Meta4EmployeeEmailView[] }
  | { employeeId: string; error: string };

export const usersFileName = (society: Meta4Society, generatedOn: string): string =>
  `Usuarios_${society}_${generatedOn}.xlsx`;

/** Una fila por persona; las columnas son todos los campos que aparecen, en el orden del detalle. */
const addDetailSheet = (
  workbook: ExcelJS.Workbook,
  users: readonly Meta4UserListItem[],
  details: readonly UserDetailExport[],
) => {
  const byId = new Map(details.map((detail) => [detail.employeeId, detail]));
  const fieldColumns = new Map<string, string>();
  for (const detail of details) {
    if ("error" in detail) continue;
    for (const section of detail.sections) {
      for (const field of section.fields) {
        const key = `${section.id}:${field.key}`;
        if (!fieldColumns.has(key)) fieldColumns.set(key, field.label);
      }
    }
  }

  const sheet = workbook.addWorksheet("Detalle", {
    views: [{ state: "frozen", ySplit: 1, xSplit: 2 }],
  });
  const headers = ["ID", "Nombre y apellidos", ...fieldColumns.values(), "Correos", "Incidencia"];
  sheet.addRow(headers);
  sheet.getRow(1).font = { bold: true };
  headers.forEach((_, index) => {
    sheet.getColumn(index + 1).width = index === 0 ? 12 : DETAIL_WIDTH;
  });
  sheet.getColumn(1).numFmt = "@";

  for (const user of users) {
    const detail = byId.get(user.id);
    const values = new Map<string, string>();
    let emails = "";
    let error = detail ? "" : "Sin datos de detalle.";
    if (detail && "error" in detail) {
      error = detail.error;
    } else if (detail) {
      for (const section of detail.sections) {
        for (const field of section.fields) values.set(`${section.id}:${field.key}`, field.value);
      }
      emails = detail.emails.map((email) => `${email.email} (${email.dateRange})`).join("\n");
    }
    sheet.addRow([
      user.id,
      user.fullName,
      ...[...fieldColumns.keys()].map((key) => values.get(key) ?? ""),
      emails,
      error,
    ]);
  }
  sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: headers.length } };
};

/**
 * Hoja «Usuarios» con el listado tal cual se ve en pantalla y hoja «Detalle»
 * con la ficha de cada persona. El ID es texto para conservar los ceros.
 */
export async function exportUsersToXlsx(
  users: readonly Meta4UserListItem[],
  details: readonly UserDetailExport[] = [],
): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  const sheet = workbook.addWorksheet("Usuarios", { views: [{ state: "frozen", ySplit: 1 }] });
  sheet.columns = COLUMNS;
  sheet.getColumn("id").numFmt = "@";
  sheet.getRow(1).font = { bold: true };
  for (const user of users) {
    sheet.addRow({ id: user.id, claveSelf: user.claveSelf, fullName: user.fullName });
  }
  sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: COLUMNS.length } };
  addDetailSheet(workbook, users, details);
  return Buffer.from(await workbook.xlsx.writeBuffer());
}
