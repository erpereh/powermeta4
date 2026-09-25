import { describe, expect, it } from "vitest";

import type { PeopleNetEmployeeListRow } from "@/lib/peoplenet/employees";

import { buildFullName, mapEmployeeListRows } from "./mapper";

const row = (values: Partial<PeopleNetEmployeeListRow> = {}): PeopleNetEmployeeListRow => ({
  ID_EMPLEADO: "0013",
  CLAVE_SELF: "mariana",
  NOMBRE: "Mariana",
  APELLIDO_1: "Ruiz",
  APELLIDO_2: "Soto",
  DT_LAST_UPDATE: null,
  ...values,
});

describe("PeopleNet employee list mapping", () => {
  it("keeps the UI contract, leading zeros, accents and empty login values", () => {
    expect(
      mapEmployeeListRows([
        row({
          ID_EMPLEADO: " 0001 ",
          CLAVE_SELF: " paula ",
          NOMBRE: " Paula ",
          APELLIDO_1: "García",
          APELLIDO_2: "López",
        }),
        row({ ID_EMPLEADO: "0021", CLAVE_SELF: null, NOMBRE: "Federica", APELLIDO_2: "." }),
      ]),
    ).toEqual([
      { id: "0001", fullName: "Paula García López", claveSelf: "paula" },
      { id: "0021", fullName: "Federica Ruiz", claveSelf: "" },
    ]);
  });

  it("drops rows without an ID or name, then keeps the first valid row per ID", () => {
    expect(
      mapEmployeeListRows([
        row({ ID_EMPLEADO: null }),
        row({ ID_EMPLEADO: "0013", NOMBRE: null, APELLIDO_1: ".", APELLIDO_2: "" }),
        row(),
        row({ NOMBRE: "Duplicada" }),
        row({ ID_EMPLEADO: 23, NOMBRE: "Raúl", APELLIDO_1: "Pérez" }),
      ]),
    ).toEqual([
      { id: "0013", fullName: "Mariana Ruiz Soto", claveSelf: "mariana" },
      { id: "23", fullName: "Raúl Pérez Soto", claveSelf: "mariana" },
    ]);
  });

  it("accepts an empty list and normalizes name parts", () => {
    expect(mapEmployeeListRows([])).toEqual([]);
    expect(buildFullName("  Ana  ", "  Luz  ", ".")).toBe("Ana Luz");
    expect(buildFullName(".", "", " . ")).toBeNull();
  });
});
