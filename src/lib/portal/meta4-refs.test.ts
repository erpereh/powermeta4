import { describe, expect, it } from "vitest";

import { collectMeta4References, parseMeta4References } from "./meta4-refs";
import { PORTAL_FEATURES } from "./registry";

describe("referencias Meta4 del registro", () => {
  it("separa objeto y nodo e ignora métodos, JSP y texto libre", () => {
    expect(parseMeta4References("SSM_HOLYDAYS!SSM_PRINCIPAL.CARGA")).toEqual([
      { object: "SSM_HOLYDAYS", node: "SSM_PRINCIPAL" },
    ]);
    expect(parseMeta4References("SMCO_AB_MANUAL_ADJUST (smco_ab_manual_adjustment.jsp)")).toEqual([
      { object: "SMCO_AB_MANUAL_ADJUST", node: null },
    ]);
    expect(parseMeta4References("Sin objeto")).toEqual([]);
  });

  it("recoge los objetos de lecturas, escrituras y catálogos pendientes", () => {
    const refs = collectMeta4References(PORTAL_FEATURES);
    const holidays = refs.find((ref) => ref.object === "SSM_HOLYDAYS");
    expect(holidays?.nodes).toContain("SSM_PRINCIPAL");
    expect(holidays?.features).toContain("responsable.tiempo.vacaciones");
    expect(refs.every((ref) => ref.features.length > 0)).toBe(true);
  });
});
