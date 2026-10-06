import { describe, expect, it } from "vitest";
import { toDirectoryEntry } from "./data/organization-core";
import type { PersonHierarchy } from "./data/person-hierarchy-core";
import { CARD_WIDTH, CARD_HEIGHT, layoutOrgChart, zoomCamera, fitCamera } from "./org-chart-layout";
const person = (id: string) =>
  toDirectoryEntry({ ID_EMPLEADO: id, ID_ORGANIZATION: "CYC", NOMBRE: id })!;
const team = (id: string, children: string[]): PersonHierarchy => ({
  person: person(id),
  manager: null,
  managerStatus: "none",
  reports: children.map(person),
  omittedReports: 0,
});
describe("distribución y cámara del organigrama", () => {
  it("reserva subárboles de varios niveles sin solapar tarjetas", () => {
    const teams = new Map([
      ["1", team("1", ["2", "3"])],
      ["2", team("2", ["4", "5"])],
      ["4", team("4", ["6"])],
    ]);
    const layout = layoutOrgChart(person("1"), teams, new Set(["1", "2", "4"]));
    expect(layout.nodes.map((node) => node.person.employeeId)).toEqual([
      "1",
      "2",
      "4",
      "6",
      "5",
      "3",
    ]);
    for (const node of layout.nodes)
      for (const other of layout.nodes) {
        if (node === other) continue;
        expect(
          Math.abs(node.x - other.x) >= CARD_WIDTH || Math.abs(node.y - other.y) >= CARD_HEIGHT,
        ).toBe(true);
      }
    expect(layout.nodes.find((node) => node.person.employeeId === "6")?.depth).toBe(3);
    expect(
      layoutOrgChart(person("1"), teams, new Set(["1", "4"])).nodes.map(
        (node) => node.person.employeeId,
      ),
    ).toEqual(["1", "2", "3"]);
  });
  it("detiene ciclos, autorreferencias y duplicados", () => {
    const teams = new Map([
      ["1", team("1", ["1", "2", "2"])],
      ["2", team("2", ["1"])],
    ]);
    const layout = layoutOrgChart(person("1"), teams, new Set(["1", "2"]));
    expect(layout.nodes).toHaveLength(2);
    expect([...layout.cycleIds]).toEqual(["1", "2"]);
  });
  it("ancla el zoom al puntero y lo limita entre 20 y 200 por ciento", () => {
    const camera = { x: 30, y: 40, scale: 1 },
      at = { x: 230, y: 140 };
    const next = zoomCamera(camera, 1.5, at);
    expect((at.x - next.x) / next.scale).toBe((at.x - camera.x) / camera.scale);
    expect((at.y - next.y) / next.scale).toBe((at.y - camera.y) / camera.scale);
    expect(zoomCamera(camera, 20, at).scale).toBe(2);
    expect(zoomCamera(camera, 0.01, at).scale).toBe(0.2);
    expect(fitCamera(600, 800, { width: 900, height: 700 }).scale).toBeLessThan(1);
  });
});
