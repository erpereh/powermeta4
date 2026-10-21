import { describe, expect, it, vi } from "vitest";
import type { PortalContext } from "../context";
import { getHolidayCalendar } from "./holidays";
import { getPortalFeatureByRoute } from "../registry";

const mocks = vi.hoisted(() => ({ sql: vi.fn(), soap: vi.fn() }));
vi.mock("../peoplenet/query", () => ({ runPortalSelect: mocks.sql }));
vi.mock("../soap/client", () => ({ executePortalSoap: mocks.soap }));

describe("lectura de festivos pendiente de contrato", () => {
  it.each(["CYC", "IBER", "COLL"] as const)(
    "no consulta GTA ni inventa una asignación en %s",
    async (society) => {
      const context: PortalContext = {
        mode: "meta4",
        society,
        variant: society,
        username: "TEST",
        identity: {
          status: "resolved",
          crossChecked: true,
          person: {
            employeeId: "0042",
            fullName: "Prueba",
            hireDate: null,
            job: null,
            unit: null,
            workCenter: null,
            managerId: null,
          },
        },
      };
      expect(await getHolidayCalendar(context)).toMatchObject({
        status: "unavailable",
        pending: ["P02", "P05"],
      });
      expect(mocks.sql).not.toHaveBeenCalled();
      expect(mocks.soap).not.toHaveBeenCalled();
    },
  );
  it("una identidad incoherente conserva su motivo sin leer datos", async () => {
    expect(
      await getHolidayCalendar({
        mode: "meta4",
        society: "CYC",
        variant: "CYC",
        username: "TEST",
        identity: { status: "unresolved", message: "La ficha no coincide con tu usuario." },
      }),
    ).toMatchObject({
      status: "unavailable",
      pending: ["P03"],
      message: "La ficha no coincide con tu usuario.",
    });
  });
  it("debug no es una conexión real al calendario", async () => {
    expect(
      await getHolidayCalendar({ mode: "unavailable", reason: "debug", message: "Sin Meta4" }),
    ).toMatchObject({ status: "unavailable", pending: ["P03"] });
  });
  it("la ruta conserva su identidad y declara la dependencia del método original", () => {
    expect(getPortalFeatureByRoute("/portal/empleado/tiempo/festivos")).toMatchObject({
      id: "empleado.tiempo.festivos",
      view: "holidays",
      read: {
        kind: "pending",
        meta4: expect.arrayContaining(["SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA"]),
      },
    });
  });
});
