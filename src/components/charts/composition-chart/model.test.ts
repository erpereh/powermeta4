import { describe, expect, it } from "vitest";
import { buildComposition, compositionArea } from "./model";

const series = [
  { id: "fixed", name: "Fija", color: "var(--chart-1)", values: [80, 160, 0, null] },
  { id: "variable", name: "Variable", color: "var(--chart-2)", values: [20, 40, 0, 10] },
];
describe("escala de la comparativa beUI", () => {
  it("conserva el modo porcentual y usa una escala común para los importes", () => {
    const percent = buildComposition(series, ["2023", "2024"]);
    expect(percent.columns.map((column) => column.segments[0].height)).toEqual([80, 80]);
    const absolute = buildComposition(series, ["2023", "2024"], "absolute");
    expect(absolute.maximum).toBe(200);
    expect(absolute.columns.map((column) => column.segments[0].height)).toEqual([40, 80]);
    expect(absolute.columns[1].segments[1].offset).toBe(80);
    expect(absolute.columns[0].segments[0].share).toBe(80);
  });
  it("distingue cero de desconocido y no interpola periodos incompletos", () => {
    const model = buildComposition(series, ["2023", "2024", "2025", "2026"], "absolute");
    expect(model.columns[2]).toMatchObject({ valid: true, total: 0 });
    expect(model.columns[3]).toMatchObject({ valid: false, total: null });
    expect(compositionArea(model.columns, 0)).not.toMatch(/NaN|Infinity/);
    expect(buildComposition([], [], "absolute").columns).toEqual([]);
  });
  it("mantiene porcentajes finitos con valores muy grandes", () => {
    const model = buildComposition(
      [
        { id: "one", name: "Uno", color: "", values: [1e308] },
        { id: "two", name: "Dos", color: "", values: [1e308] },
      ],
      ["A"],
    );
    expect(model.columns[0].valid).toBe(true);
    expect(model.columns[0].segments.map((segment) => segment.share)).toEqual([50, 50]);
  });
});
