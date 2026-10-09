import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";

import { exportPayrollReportToXlsx, payrollReportFileName } from "./export-xlsx";
import { sampleRunDetail } from "./payroll-report.fixture";

const generatedAt = new Date(2026, 9, 9, 11, 54);

const load = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(
    new Uint8Array(await exportPayrollReportToXlsx(sampleRunDetail, generatedAt)).buffer,
  );
  return workbook;
};

describe("exportPayrollReportToXlsx", () => {
  it("writes the Datos sheet converted as PeopleNet does", async () => {
    const sheet = (await load()).getWorksheet("Datos");
    if (!sheet) throw new Error("Falta la hoja Datos");

    expect(sheet.getCell("A1").value).toBe("Id Empleado");
    expect(sheet.getCell("A2").value).toBe("9001");
    expect(sheet.getCell("A2").numFmt).toBe("@");
    expect(sheet.getCell("D2").value).toBe("'00000000T");
    expect(sheet.getCell("H2").value).toEqual(new Date("2026-09-25T00:00:00.000Z"));
    expect(sheet.getCell("H2").numFmt).toBe("dd/mm/yyyy");
    expect(sheet.getCell("J3").value).toBe(1200.5);
    expect(sheet.getCell("J3").numFmt).toBe("#,##0.00");
    expect(sheet.getCell("I2").value).toBeNull();
    // Cabecera destacada, filtros y paneles inmovilizados.
    expect(sheet.getCell("A1").font.bold).toBe(true);
    expect(sheet.getCell("A1").fill).toMatchObject({ fgColor: { argb: "FF1F3A5F" } });
    expect(sheet.autoFilter).toBe("A1:L1");
    expect(sheet.views[0]).toMatchObject({ state: "frozen", xSplit: 3, ySplit: 1 });
  });

  it("writes the informe sheet with the template header and totals", async () => {
    const workbook = await load();
    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["Datos", "informe"]);
    const sheet = workbook.getWorksheet("informe");
    if (!sheet) throw new Error("Falta la hoja informe");

    expect(sheet.getCell("A3").value).toBe("Informe Normal");
    expect(sheet.getCell("F2").value).toBe("Fecha Pago:");
    expect(sheet.getCell("G2").value).toEqual(new Date("2026-09-25T00:00:00.000Z"));
    expect(sheet.getCell("G3").value).toBe("Paga Regular");
    expect(sheet.getCell("G4").value).toBe("Euro");
    expect(sheet.getCell("D5").value).toBe("Data");
    expect(sheet.getCell("D6").value).toBe("Nº Empl.");
    expect(sheet.getCell("B8").value).toBe("9002");
    expect(sheet.getCell("D8").value).toBe(2);
    expect(sheet.getCell("A12").value).toBe("Total general");
    expect(sheet.getCell("D12").value).toBe(4);
    expect(sheet.getCell("A12").fill).toMatchObject({ fgColor: { argb: "FF1F3A5F" } });
    expect(sheet.getCell("A9").fill).toMatchObject({ fgColor: { argb: "FFDCE6F2" } });
    expect(sheet.getCell("I8").numFmt).toBe("#,##0.00");
    expect(sheet.getCell("D8").numFmt).toBe("#,##0");
  });

  it("names the file like PeopleNet", () => {
    expect(payrollReportFileName(sampleRunDetail, generatedAt)).toBe(
      "Normal_Inf 0001_20261091154.xlsx",
    );
  });
});
