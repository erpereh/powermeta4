import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";

import { exportQuinquenalToXlsx } from "./export-xlsx";
import { sampleQuinquenalRow } from "./quinquenal.fixture";

describe("exportQuinquenalToXlsx", () => {
  it("reproduces the PeopleNet layout: year bands, headers and data from row 4", async () => {
    const buffer = await exportQuinquenalToXlsx({
      generatedOn: "2026-10-09",
      currentYear: 2026,
      rows: [sampleQuinquenalRow],
    });
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(new Uint8Array(buffer).buffer);
    const sheet = workbook.getWorksheet("Sheet1");
    if (!sheet) throw new Error("Falta la hoja Sheet1");

    expect(sheet.getCell("A3").value).toBeNull();
    expect(sheet.getCell("B3").value).toBe("EMPRESA");
    expect(sheet.getCell("C3").value).toBe("MATRICULA");
    expect(sheet.getCell("AL3").value).toBe("FAMILIA PUESTO");
    expect(sheet.getCell("AM2").value).toBe("AÑO : 2026");
    expect(sheet.getCell("AM3").value).toBe("COEFICIENTE JORNADA AÑO 2026");
    expect(sheet.getCell("AQ2").value).toBe("AÑO : 2025");
    expect(sheet.getCell("BF3").value).toBe("VARIABLE AÑO 2022");
    expect(sheet.getCell("AM3").font.bold).toBe(true);
    expect(sheet.getCell("AM4").fill).toMatchObject({ fgColor: { argb: "FFEEE4DA" } });
    expect(sheet.getCell("AQ4").fill).toMatchObject({ fgColor: { argb: "FFC9CE9A" } });

    expect(sheet.getCell("C4").value).toBe("9001");
    expect(sheet.getCell("G4").value).toEqual(new Date("1980-05-01T00:00:00.000Z"));
    expect(sheet.getCell("G4").numFmt).toBe("mm-dd-yy");
    expect(sheet.getCell("S4").value).toBeNull();
    expect(sheet.getCell("AJ4").value).toBe(8);
    expect(sheet.getCell("AN4").value).toBe(40000);
    expect(sheet.getCell("AR4").value).toBe(39000);
    expect(sheet.getCell("AS4").value).toBe(19500);
    expect(sheet.getCell("AY4").value).toBeNull();
  });
});
