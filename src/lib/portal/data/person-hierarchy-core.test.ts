import { describe, expect, it } from "vitest";
import { buildPersonHierarchy } from "./person-hierarchy-core";
import type { OroRow } from "./organization-core";

const row = (id: string, manager: string | null, extra: OroRow = {}): OroRow => ({
  ID_ORGANIZATION: "CYC",
  COMPUTA: "1",
  ID_EMPLEADO: id,
  ID_RESPONSABLE: manager,
  NOMBRE: `Persona ${id}`,
  ...extra,
});
describe("jerarquía de personas", () => {
  it("une asignaciones y devuelve solo dependientes directos", () => {
    const result = buildPersonHierarchy(
      "2",
      "CYC",
      [row("2", "1"), row("2", "1")],
      [
        row("1", null),
        row("3", "2", { N_PUESTO: "A" }),
        row("3", "2", { N_PUESTO: "B" }),
        row("4", "3"),
      ],
    );
    expect(result?.manager?.employeeId).toBe("1");
    expect(result?.reports).toHaveLength(1);
    expect(result?.reports[0].job).toBe("A / B");
  });
  it("no elige responsables contradictorios ni dibuja relaciones ambiguas", () => {
    const result = buildPersonHierarchy(
      "2",
      "CYC",
      [row("2", "1"), row("2", "9")],
      [row("3", "2"), row("3", "9")],
    );
    expect(result).toMatchObject({
      managerStatus: "ambiguous",
      manager: null,
      reports: [],
      omittedReports: 1,
    });
  });
  it.each([
    [null, "none"],
    ["9", "missing"],
    ["2", "self"],
  ])("resuelve responsable %s sin inventar relaciones", (manager, status) => {
    expect(buildPersonHierarchy("2", "CYC", [row("2", manager)], [row("2", "2")])).toMatchObject({
      managerStatus: status,
      manager: null,
      reports: [],
    });
  });
  it("rechaza otra sociedad y COMPUTA distinto de 1", () => {
    expect(
      buildPersonHierarchy("2", "CYC", [row("2", null, { ID_ORGANIZATION: "IBER" })], []),
    ).toBeNull();
    expect(buildPersonHierarchy("2", "CYC", [row("2", null, { COMPUTA: "0" })], [])).toBeNull();
    const result = buildPersonHierarchy(
      "2",
      "CYC",
      [row("2", "1")],
      [row("1", null, { ID_ORGANIZATION: "IBER" }), row("3", "2", { COMPUTA: "0" })],
    );
    expect(result).toMatchObject({ managerStatus: "missing", reports: [] });
  });
});
