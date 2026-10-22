import "server-only";

import ExcelJS from "exceljs";

import type { Meta4Society } from "@/lib/meta4/societies";

import type { Meta4UserListItem } from "./types";

const COLUMNS: { header: string; key: keyof Meta4UserListItem; width: number }[] = [
  { header: "ID", key: "id", width: 12 },
  { header: "Usuario Meta4", key: "claveSelf", width: 30 },
  { header: "Nombre y apellidos", key: "fullName", width: 50 },
];

export const usersFileName = (society: Meta4Society, generatedOn: string): string =>
  `Usuarios_${society}_${generatedOn}.xlsx`;

/** Listado de usuarios tal cual se ve en pantalla; el ID es texto para conservar los ceros. */
export async function exportUsersToXlsx(users: readonly Meta4UserListItem[]): Promise<Buffer> {
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
  return Buffer.from(await workbook.xlsx.writeBuffer());
}
