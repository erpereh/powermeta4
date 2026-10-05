import { describe, expect, it } from "vitest";

import { crossCheckIdentity, evaluateProfileIdentity } from "./identity-core";

const record = (fields: Record<string, string>) => ({ fields });

describe("identidad propia del portal", () => {
  it("acepta duplicados equivalentes y bloquea usuarios contradictorios sin perder ceros", () => {
    const profile = record({ clave_Self: "U", id_Empleado: "001471" });
    expect(evaluateProfileIdentity([profile, profile], "u")).toMatchObject({
      status: "resolved",
      person: { employeeId: "001471" },
    });
    expect(
      evaluateProfileIdentity([profile, record({ clave_Self: "otra", id_Empleado: "001471" })], "u")
        .status,
    ).toBe("unresolved");
    expect(
      crossCheckIdentity(
        [
          { employeeId: "001471", selfKey: "u" },
          { employeeId: "001471", selfKey: "U " },
        ],
        "001471",
        "u",
      ),
    ).toBe(true);
    expect(
      crossCheckIdentity(
        [
          { employeeId: "001471", selfKey: "u" },
          { employeeId: "1471", selfKey: "u" },
        ],
        "001471",
        "u",
      ),
    ).toBe(false);
    expect(
      crossCheckIdentity(
        [
          { employeeId: "001471", selfKey: "u" },
          { employeeId: "001471", selfKey: null },
        ],
        "001471",
        "u",
      ),
    ).toBe(false);
  });
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
