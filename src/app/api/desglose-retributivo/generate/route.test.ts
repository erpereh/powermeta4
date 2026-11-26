import { DatabaseSync } from "node:sqlite";

import { Uint8ArrayReader, Uint8ArrayWriter, ZipReader } from "@zip.js/zip.js";
import ExcelJS from "exceljs";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import {
  breakdownFilename,
  type BreakdownHistory,
  type BreakdownOutput,
  type BreakdownPreview,
  GROUPINGS,
  type SavedBreakdown,
  XLSX_CONTENT_TYPE,
} from "@/features/retributive-breakdown/contract";
import { getCurrentAuthContext } from "@/lib/auth/session";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { getDatabase } from "@/server/database/client";
import { runMigrations } from "@/server/database/migrations";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";

import { POST as analyze } from "../analyze/route";
import { GET as exportSaved } from "../history/[analysisId]/export/route";
import { DELETE as remove, GET as open } from "../history/[analysisId]/route";
import { DELETE as clear, GET as list, PATCH as activate, POST as save } from "../history/route";
import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({ getCurrentAuthContext: vi.fn() }));
vi.mock("@/server/database/client", () => ({ getDatabase: vi.fn() }));

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

function request(files: readonly File[], output?: BreakdownOutput) {
  const body = new FormData();
  for (const file of files) body.append("files", file);
  if (output) body.set("output", output);
  return new Request("http://localhost/api/desglose-retributivo/generate", {
    method: "POST",
    body,
  });
}

function authorize(societyCode: "IBER" | "CYC" | null) {
  vi.mocked(getCurrentAuthContext).mockResolvedValue({
    sessionId: "ficticia",
    cookieHash: "ficticio",
    authContext: {
      mode: societyCode === null ? "debug" : "meta4",
      username: "ficticio",
      canUseMeta4: societyCode !== null,
      societyCode,
      availableSocieties: societyCode === null ? [] : [societyCode],
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
  it.each(["complete", ...GROUPINGS.map(({ file }) => file)] as const)(
    "descarga el Excel %s con el formato y las agrupaciones solicitadas",
    async (output) => {
      const response = await POST(request([...batch].reverse(), output));
      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe(XLSX_CONTENT_TYPE);
      expect(response.headers.get("content-disposition")).toContain(breakdownFilename(output));
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(await response.arrayBuffer());
      const expected =
        output === "complete"
          ? [3, 4, 1, 2, 0].map((index) => GROUPINGS[index].sheet)
          : GROUPINGS.filter(({ file }) => file === output).map(({ sheet }) => sheet);
      expect(workbook.worksheets.map(({ name }) => name)).toEqual(["Empleados", ...expected]);
      expect(workbook.worksheets[0].getCell("N13").value).toBe(100);
      for (const sheet of workbook.worksheets.slice(1)) {
        expect(sheet.getCell("BG13").value).toBe(305);
        expect(sheet.getCell("BH10").value).toBe("SALARIO");
        expect(sheet.getCell("BI10").master.address).toBe("BH10");
        expect(sheet.getCell("BH13").value).toBe(200);
        expect(sheet.getCell("BJ13").value).toBeCloseTo(1 / 3);
        expect(sheet.getCell("BJ13").numFmt).toBe("0.00%");
      }
    },
  );

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

  it("exige sesión antes de leer la subida", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    const anonymous = request(batch);
    expect((await POST(anonymous)).status).toBe(401);
    expect(anonymous.bodyUsed).toBe(false);
  });

  it.each([
    ["DEBUG", null],
    ["CYC", "CYC"],
  ] as const)(
    "genera un ZIP con cinco Excel válidos en una sesión %s",
    async (_session, societyCode) => {
      authorize(societyCode);
      const response = await POST(request(batch));
      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe("application/zip");
      const archive = new ZipReader(
        new Uint8ArrayReader(new Uint8Array(await response.arrayBuffer())),
      );
      try {
        expect(await archive.getEntries()).toHaveLength(GROUPINGS.length);
      } finally {
        await archive.close();
      }
    },
  );

  it("describe un formato incompatible sin pedir un cambio de sociedad", async () => {
    authorize(null);
    const incompatible = await buildInput(4, { company: "CYC" });
    const response = await POST(request(batch.slice(0, -1).concat(incompatible)));
    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({
      error: expect.stringMatching(/ID Empresa.*formato admitido/),
    });
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

  it("rechaza diferencias de empleados o periodo y fórmulas de entrada", async () => {
    for (const [variant, error] of [
      [{ firstSalary: 101 }, /no coinciden/],
      [{ year: 2026 }, /no coinciden/],
      [{ formula: true }, /fórmulas o errores/],
    ] as const) {
      const response = await POST(request(batch.slice(0, -1).concat(await buildInput(4, variant))));
      expect(response.status).toBe(422);
      expect(await response.json()).toEqual({ error: expect.stringMatching(error) });
    }
  });
});

describe("POST /api/desglose-retributivo/analyze", () => {
  it("entrega el resumen y las seis métricas por concepto sin filas individuales", async () => {
    authorize(null);
    const response = await analyze(request([...batch].reverse()));
    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    const data: BreakdownPreview = await response.json();
    expect(Object.keys(data).sort()).toEqual(["concepts", "employeeRows", "groupings", "period"]);
    expect(data.period).toEqual({ from: "01/01/2027", to: "31/12/2027" });
    expect(data.employeeRows).toBe(7);
    expect(data.concepts.map(({ code }) => code)).toEqual(["SALARIO", "COMPLEMENTO", "EXTRA"]);
    expect(data.groupings.map(({ id }) => id)).toEqual(GROUPINGS.map(({ file }) => file));
    const first = data.groupings[0].groups[0];
    expect(first.identifier).toBe("0000");
    expect(first.metrics[0]).toEqual([200, 300, 1 / 3, 100, 200, 0.5]);
  });

  it("valida la sesión y el lote antes de entregar resultados", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    expect((await analyze(request(batch))).status).toBe(401);
    expect((await analyze(request(batch.slice(1)))).status).toBe(422);
  });
});
it("distingue una migración pendiente de un historial vacío y exige sesión", async () => {
  const database = new DatabaseSync(":memory:");
  try {
    database.exec("PRAGMA user_version = 12");
    vi.mocked(getDatabase).mockReturnValue(database);

    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    expect((await list()).status).toBe(401);

    const message = { error: "La base local debe actualizarse para usar el Desglose Retributivo." };
    for (const response of [await list(), await save(request(batch))]) {
      expect(response.status).toBe(503);
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(await response.json()).toEqual(message);
    }
  } finally {
    database.close();
  }
});

it("guarda, restaura y exporta el historial dentro del workspace autenticado", async () => {
  const database = new DatabaseSync(":memory:");
  vi.mocked(getDatabase).mockReturnValue(database);
  try {
    runMigrations(database);
    bootstrapDatabase(database);
    const companies = createCompanyRepository(database);
    companies.ensureSocietyCompanySync("IBER");
    companies.ensureSocietyCompanySync("CYC");

    authorize(null);
    expect((await save(request(batch.slice(1)))).status).toBe(422);
    expect(await (await list()).json()).toEqual({ entries: [], activeAnalysisId: null });
    const created = await save(request(batch));
    expect(created.status).toBe(201);
    const saved: SavedBreakdown = await created.json();
    const id = saved.entry.id;
    const context = { params: Promise.resolve({ analysisId: id }) };
    const url = "http://localhost/api/desglose-retributivo/history/" + id;
    const reload = new Request(url);
    const select = (activeAnalysisId: string | null) =>
      activate(
        new Request(url, {
          method: "PATCH",
          body: JSON.stringify({ activeAnalysisId }),
        }),
      );
    expect((await list()).headers.get("cache-control")).toBe("no-store");
    expect(await (await list()).json()).toEqual({ entries: [saved.entry], activeAnalysisId: id });
    expect(await (await open(reload, context)).json()).toEqual(saved);
    expect(saved.result.employeeRows).toBe(7);
    expect(saved.entry.groupCount).toBeGreaterThan(0);
    expect(JSON.stringify(saved)).not.toContain("FICTICIO-");

    for (const output of ["complete", "zip", ...GROUPINGS.map(({ file }) => file)] as const) {
      const response = await exportSaved(new Request(url + "/export?output=" + output), context);
      expect(response.status).toBe(200);
      expect(response.headers.get("content-disposition")).toContain(breakdownFilename(output));
      if (output === "zip") {
        const reader = new ZipReader(
          new Uint8ArrayReader(new Uint8Array(await response.arrayBuffer())),
        );
        try {
          expect((await reader.getEntries()).map(({ filename }) => filename)).toEqual(
            GROUPINGS.map(({ file }) => breakdownFilename(file)),
          );
        } finally {
          await reader.close();
        }
      } else {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(await response.arrayBuffer());
        expect(workbook.worksheets).toHaveLength(output === "complete" ? 6 : 2);
        expect(workbook.getWorksheet("Empleados")?.getCell("N13").value).toBe(100);
      }
    }

    authorize("CYC");
    expect(await (await list()).json()).toEqual({ entries: [], activeAnalysisId: null });
    expect((await open(reload, context)).status).toBe(404);
    expect((await select(id)).status).toBe(404);
    expect((await exportSaved(reload, context)).status).toBe(404);
    expect((await remove(reload, context)).status).toBe(404);
    await clear();

    authorize(null);
    expect(await (await select(null)).json()).toBeNull();
    const history: BreakdownHistory = await (await list()).json();
    expect(history.activeAnalysisId).toBeNull();
    expect(history.entries).toHaveLength(1);
    expect(await (await select(id)).json()).toEqual(saved);
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    expect((await exportSaved(reload, context)).status).toBe(401);
    expect((await remove(reload, context)).status).toBe(200);
    expect(await (await list()).json()).toEqual({ entries: [], activeAnalysisId: null });
    expect(
      database.prepare("SELECT COUNT(*) AS count FROM retributive_breakdown_books").get()?.count,
    ).toBe(0);
  } finally {
    database.close();
  }
}, 15_000);
