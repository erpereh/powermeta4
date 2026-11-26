import { Uint8ArrayReader, Uint8ArrayWriter, ZipReader } from "@zip.js/zip.js";
import ExcelJS from "exceljs";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import { GROUPINGS } from "@/features/retributive-breakdown/contract";
import { getCurrentAuthContext } from "@/lib/auth/session";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({ getCurrentAuthContext: vi.fn() }));

async function buildInput(
  index: number,
  { year = 2027, company = "IBER", firstSalary = 100, formula = false } = {},
): Promise<File> {
  const workbook = new ExcelJS.Workbook();
  const employees = workbook.addWorksheet("Empleados");
  employees.getRow(4).values = ["Periodo de cálculo", "01/01/" + year + " - 31/12/" + year];
  employees.getRow(11).values = [
    ...Array<null>(13).fill(null),
    "Conceptos Salario",
    "Conceptos C. Salarial",
    "Conceptos Extrasalarial",
  ];
  employees.getRow(12).values = [
    "ID RH",
    "Sexo",
    "ID Empresa",
    ...GROUPINGS.flatMap(({ identifier, label }) => [identifier, label]),
    "SALARIO",
    "COMPLEMENTO",
    "EXTRA",
  ];
  const sample = [
    ["Mujer", "0000", firstSalary],
    ["Mujer", 0, 300],
    ["Mujer", null, null],
    ["Hombre", "0000", 200],
    ["Hombre", 0, 400],
    ["Hombre", null, 50],
    ["Mujer", "NUEVO", 10],
  ] as const;
  for (const [row, [sex, group, salary]] of sample.entries()) {
    employees.getRow(13 + row).values = [
      "FICTICIO-" + row,
      sex,
      company,
      ...GROUPINGS.flatMap(() => [group, "Grupo ficticio"]),
      salary,
      0,
      "Texto",
    ];
  }
  if (formula) employees.getCell("N13").value = { formula: "50+50", result: 100 };

  const grouping = GROUPINGS[index];
  const summary = workbook.addWorksheet(grouping.sheet);
  summary.getRow(12).values = [grouping.identifier, grouping.label];
  summary.getRow(13).values = ["0000", "Clave textual"];
  summary.getRow(14).values = [0, "Clave numérica"];
  summary.getRow(15).values = ["[SIN DEFINIR]", "[SIN DEFINIR]"];
  summary.getCell("BG13").value = 305;
  summary.getCell("C16").value = 450;
  const bytes = new Uint8Array(await workbook.xlsx.writeBuffer());
  return new File([bytes], "original-" + index + ".xlsx");
}

function request(files: readonly File[]) {
  const body = new FormData();
  for (const file of files) body.append("files", file);
  return new Request("http://localhost/api/desglose-retributivo/generate", {
    method: "POST",
    body,
  });
}

function authorize(societyCode: "IBER" | "CYC") {
  vi.mocked(getCurrentAuthContext).mockResolvedValue({
    sessionId: "ficticia",
    cookieHash: "ficticio",
    authContext: {
      mode: "meta4",
      username: "ficticio",
      canUseMeta4: true,
      societyCode,
      availableSocieties: ["CYC", "IBER"],
    },
    expiresAt: new Date(),
    lastValidatedAt: null,
  });
}

let batch: File[];
beforeAll(async () => {
  batch = await Promise.all(GROUPINGS.map((_, index) => buildInput(index)));
});
beforeEach(() => authorize("IBER"));

describe("POST /api/desglose-retributivo/generate", () => {
  it("genera cinco Excel de otro ejercicio aunque lleguen desordenados y sin bloques previos", async () => {
    const response = await POST(request([...batch].reverse()));
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/zip");
    expect(response.headers.get("cache-control")).toBe("no-store");
    const archive = new ZipReader(
      new Uint8ArrayReader(new Uint8Array(await response.arrayBuffer())),
    );
    try {
      const entries = await archive.getEntries();
      expect(entries.map(({ filename }) => filename)).toEqual(
        GROUPINGS.map(({ file }) => "desglose-iber-" + file + ".xlsx"),
      );
      for (const [index, entry] of entries.entries()) {
        if (entry.directory) throw new Error("Se esperaba un Excel.");
        const bytes = await entry.getData(new Uint8ArrayWriter());
        const output = new ExcelJS.Workbook();
        await output.xlsx.load(bytes.buffer);
        expect(output.worksheets.map(({ name }) => name)).toEqual([
          "Empleados",
          GROUPINGS[index].sheet,
        ]);
        expect(output.worksheets[0].getCell("N13").value).toBe(100);
        const sheet = output.worksheets[1];
        expect(sheet.getCell("BG13").value).toBe(305);
        expect(sheet.getCell("BH10").value).toBe("SALARIO");
        expect(sheet.getCell("BH13").value).toBe(200);
        expect(sheet.getCell("BI13").value).toBe(300);
        expect(sheet.getCell("BJ13").value).toBeCloseTo(1 / 3);
        expect(sheet.getCell("BK13").value).toBe(100);
        expect(sheet.getCell("BL13").value).toBe(200);
        expect(sheet.getCell("BM13").value).toBe(0.5);
        expect(sheet.getCell("BH14").value).toBe(200);
        expect(sheet.getCell("BK14").value).toBe(150);
        expect(sheet.getCell("BL14").value).toBe(225);
        expect(sheet.getCell("BK15").value).toBe(0);
        expect(sheet.getCell("BL15").value).toBe(50);
        expect(sheet.getCell("BJ13").numFmt).toBe("0.00%");
        expect(sheet.getCell("BN13").value).toBe(0);
        expect(sheet.getCell("C16").value).toBe(450);
        expect(sheet.getCell("A17").value).toBe("NUEVO");
        expect(sheet.getCell("BH17").value).toBe(10);
      }
    } finally {
      await archive.close();
    }
  });

  it("exige sesión y sociedad IBER antes de leer la subida", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    const anonymous = request(batch);
    expect((await POST(anonymous)).status).toBe(401);
    expect(anonymous.bodyUsed).toBe(false);
    authorize("CYC");
    const cyc = request(batch);
    expect((await POST(cyc)).status).toBe(403);
    expect(cyc.bodyUsed).toBe(false);
  });

  it("rechaza lotes incompletos, agrupaciones repetidas y archivos inválidos", async () => {
    for (const [files, error] of [
      [batch.slice(1), /cinco Excel/],
      [batch.slice(1).concat(batch[1]), /repetida/],
      [batch.slice(1).concat(new File(["texto"], "no-es-un-libro.xlsx")), /\.xlsx válido/],
    ] as const) {
      const response = await POST(request(files));
      expect(response.status).toBe(422);
      expect(await response.json()).toEqual({ error: expect.stringMatching(error) });
    }
  });

  it("rechaza diferencias de empleados o periodo, otras sociedades y fórmulas de entrada", async () => {
    for (const [variant, error] of [
      [{ firstSalary: 101 }, /no coinciden/],
      [{ year: 2026 }, /no coinciden/],
      [{ company: "CYC" }, /íntegramente a IBER/],
      [{ formula: true }, /fórmulas o errores/],
    ] as const) {
      const response = await POST(request(batch.slice(0, -1).concat(await buildInput(4, variant))));
      expect(response.status).toBe(422);
      expect(await response.json()).toEqual({ error: expect.stringMatching(error) });
    }
  });
});
