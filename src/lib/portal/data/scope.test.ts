import { describe, expect, it, vi } from "vitest";

vi.mock("../soap/call", () => ({ callPortalService: vi.fn() }));

const { isInManagerScope, MANAGER_SCOPE_VERIFIED, mapPopulationIds, mapResponsibilityUnits } =
  await import("./scope");

describe("alcance del responsable", () => {
  it("la puerta de datos sensibles sigue cerrada hasta la verificación", () => {
    expect(MANAGER_SCOPE_VERIFIED).toBe(false);
  });

  it("deduplica unidades y personas y solo admite matrículas de la población", () => {
    const units = mapResponsibilityUnits(
      [
        { STD_ID_WORK_UNIT: "U1", STD_N_WORK_UNIT: "Unidad" },
        { STD_ID_WORK_UNIT: "U1" },
        { STD_ID_WORK_UNIT: " " },
      ],
      [{ SCO_ID_WU: "U1", SCO_ID_TYPE_RESP: "R" }],
    );
    expect(units).toEqual([
      { unitId: "U1", unitName: "Unidad", parentId: null, responsibilityType: "R" },
    ]);
    const employeeIds = mapPopulationIds([{ SCO_ID_HR: "7" }, { SCO_ID_HR: "7" }, {}]);
    expect(employeeIds).toEqual(["7"]);
    const scope = { units, employeeIds, verified: false };
    expect(isInManagerScope(scope, " 7 ")).toBe(true);
    expect(isInManagerScope(scope, "8")).toBe(false);
  });
});
