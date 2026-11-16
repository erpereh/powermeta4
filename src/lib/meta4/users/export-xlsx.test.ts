import ExcelJS from "exceljs";
import { describe, expect, it, vi } from "vitest";

import { exportUsersToXlsx, usersFileName } from "./export-xlsx";

vi.mock("server-only", () => ({}));

describe("exportUsersToXlsx", () => {
  it("writes the headers and keeps ids as text", async () => {
    const buffer = await exportUsersToXlsx([
      { id: "0579", claveSelf: "antonioramon.sanchez", fullName: "Antonio Ramón Sánchez" },
    ]);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(new Uint8Array(buffer).buffer);
    const sheet = workbook.getWorksheet("Usuarios");
    if (!sheet) throw new Error("Falta la hoja Usuarios");

    expect(sheet.getCell("A1").value).toBe("ID");
    expect(sheet.getCell("B1").value).toBe("Usuario Meta4");
    expect(sheet.getCell("C1").value).toBe("Nombre y apellidos");
    expect(sheet.getCell("A1").font.bold).toBe(true);
    expect(sheet.getCell("A2").value).toBe("0579");
    expect(sheet.getCell("C2").value).toBe("Antonio Ramón Sánchez");
    expect(sheet.rowCount).toBe(2);
  });

  it("adds one detail row per person in a second sheet", async () => {
    const buffer = await exportUsersToXlsx(
      [
        { id: "0579", claveSelf: "a", fullName: "Antonio" },
        { id: "0639", claveSelf: "j", fullName: "José" },
      ],
      [
        {
          employeeId: "0579",
          sections: [
            {
              id: "role",
              title: "Puesto y organización",
              fields: [{ key: "n_Puesto", label: "Puesto", value: "Analista" }],
            },
          ],
          emails: [{ email: "a@cyc.es", dateRange: "01/01/2020 – Vigente" }],
        },
        { employeeId: "0639", error: "No encontrado" },
      ],
    );
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(new Uint8Array(buffer).buffer);
    const sheet = workbook.getWorksheet("Detalle");
    if (!sheet) throw new Error("Falta la hoja Detalle");

    expect(sheet.getCell("C1").value).toBe("Puesto");
    expect(sheet.getCell("E1").value).toBe("Incidencia");
    expect(sheet.getCell("A2").value).toBe("0579");
    expect(sheet.getCell("C2").value).toBe("Analista");
    expect(sheet.getCell("D2").value).toBe("a@cyc.es (01/01/2020 – Vigente)");
    expect(sheet.getCell("E3").value).toBe("No encontrado");
    expect(sheet.rowCount).toBe(3);
  });

  it("names the file with society and date", () => {
    expect(usersFileName("CYC", "2026-10-22")).toBe("Usuarios_CYC_2026-10-22.xlsx");
  });
});
