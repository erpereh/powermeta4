import { describe, expect, it } from "vitest";

import { crossCheckIdentity, evaluateProfileIdentity } from "./identity-core";

const record = (fields: Record<string, string>) => ({ fields });

describe("identidad propia del portal", () => {
  it("exige clave_Self igual al usuario y nunca usa el primer registro por defecto", () => {
    const sets = [
      record({ clave_Self: "otra", id_Empleado: "1" }),
      record({
        clave_Self: "Usuario",
        id_Empleado: "2",
        nombre: "Ana",
        apellido_1: "Ruiz",
        fec_Alta_Empleado: "2020-01-15",
      }),
    ];
    expect(evaluateProfileIdentity(sets, "usuario")).toMatchObject({
      status: "resolved",
      person: { employeeId: "2", fullName: "Ana Ruiz", hireDate: "2020-01-15" },
    });
    expect(evaluateProfileIdentity([sets[0]], "usuario")).toEqual({
      status: "unresolved",
      reason: "no-coherent-record",
    });
  });

  it("rechaza identidades ambiguas e ignora fechas centinela", () => {
    const ambiguous = [
      record({ clave_Self: "u", id_Empleado: "1" }),
      record({ clave_Self: "u", id_Empleado: "2" }),
    ];
    expect(evaluateProfileIdentity(ambiguous, "u")).toEqual({
      status: "unresolved",
      reason: "ambiguous",
    });
    const sentinel = evaluateProfileIdentity(
      [record({ clave_Self: "u", id_Empleado: "1", fec_Alta_Empleado: "4000-01-01" })],
      "u",
    );
    expect(sentinel.status === "resolved" ? sentinel.person.hireDate : "sin identidad").toBeNull();
  });

  it("verifica en ORO una única ficha del mismo usuario", () => {
    expect(crossCheckIdentity([{ employeeId: "1", selfKey: "U " }], "1", "u")).toBe(true);
    expect(crossCheckIdentity([{ employeeId: "1", selfKey: "x" }], "1", "u")).toBe(false);
    expect(crossCheckIdentity([], "1", "u")).toBe(false);
  });
});
