import { describe, expect, it } from "vitest";
import {
  getOrgSelection,
  orgChartHref,
  orgTreeState,
  orgExpandedPeople,
  orgExpandedHref,
} from "./organization-navigation";

describe("estado del organigrama en URL", () => {
  it("restaura equipos y los separa de las ramas de unidades; cambiar raíz limpia equipos", () => {
    expect(orgExpandedPeople(new URLSearchParams(), "1")).toEqual(new Set(["1"]));
    expect(orgExpandedPeople(new URLSearchParams("equipos="), "1")).toEqual(new Set());
    const params = new URLSearchParams({ filtro: "Ana", ramas: "U", equipos: "1,2,2,../3" });
    expect(orgExpandedPeople(params, "1")).toEqual(new Set(["1", "2"]));
    const href = orgExpandedHref(
      "/portal/organizacion/organigrama",
      params,
      "1",
      new Set(["1", "2"]),
    );
    expect(new URL(href, "https://local.test").searchParams.get("equipos")).toBe("1,2");
    expect(orgChartHref("/portal/organizacion/organigrama", params, "2")).not.toContain("equipos");
  });
  it("valida selección sin confundir una matrícula alfabética con un estado", () => {
    expect(getOrgSelection({})).toEqual({ status: "tree" });
    expect(getOrgSelection({ persona: "invalid" })).toEqual({
      status: "selected",
      employeeId: "invalid",
    });
    for (const persona of ["", "x/y", "a".repeat(21), ["1", "2"]])
      expect(getOrgSelection({ persona })).toEqual({ status: "invalid" });
  });
  it("conserva filtro y expansión al subir, bajar y volver en cada ruta compartida", () => {
    for (const route of [
      "/portal/organizacion/organigrama",
      "/portal/empleado/aplicaciones/organigrama",
      "/portal/empleado/herramientas/organigrama-dinamico",
    ]) {
      const params = new URLSearchParams({
        filtro: "Dirección",
        ramas: "A\nB",
        persona: "1",
        sociedad: "COLL",
      });
      const down = new URL(orgChartHref(route, params, "002"), "https://local.test");
      expect(down.pathname).toBe(route);
      expect(down.searchParams.get("persona")).toBe("002");
      expect(down.searchParams.has("sociedad")).toBe(false);
      const back = new URL(orgChartHref(route, down.searchParams), "https://local.test");
      expect(back.searchParams.has("persona")).toBe(false);
      expect(orgTreeState(back.searchParams, [])).toEqual({
        query: "Dirección",
        expanded: new Set(["A", "B"]),
      });
    }
  });
  it("distingue expansión inicial y todo contraído, incluso después de recarga", () => {
    expect(orgTreeState(new URLSearchParams(), ["root"]).expanded).toEqual(new Set(["root"]));
    expect(orgTreeState(new URLSearchParams("ramas="), ["root"]).expanded.size).toBe(0);
    expect(orgTreeState(new URLSearchParams({ filtro: "a".repeat(130) }), []).query).toHaveLength(
      120,
    );
  });
});
