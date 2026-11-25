import { describe, expect, it } from "vitest";

import { crossCheckIdentity, evaluateProfileIdentity } from "./identity-core";

const record = (fields: Record<string, string>) => ({ fields });

describe("identidad propia del portal", () => {
  it("decodifica las entidades XML del perfil en nombre y puesto", () => {
    const evaluation = evaluateProfileIdentity(
      [
        record({
          clave_Self: "u",
          id_Empleado: "1",
          nombre: "Jorge Salvador",
          apellido_1: "Gonz&#xE1;lez",
          n_Puesto: "CMS, CRM, Intranet &amp; HR",
        }),
      ],
      "u",
    );
    expect(evaluation).toMatchObject({
      status: "resolved",
      person: { fullName: "Jorge Salvador González", job: "CMS, CRM, Intranet & HR" },
    });
  });

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
  it("prefiere la ficha del usuario y nunca usa el primer registro por defecto", () => {
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
      selfKey: "usuario",
      person: { employeeId: "2", fullName: "Ana Ruiz", hireDate: "2020-01-15" },
    });
    // Ninguna ficha coincide con el usuario de aplicación: varias matrículas
    // siguen siendo ambiguas y sin clave_Self no hay identidad.
    expect(evaluateProfileIdentity(sets, "otro.usuario")).toEqual({
      status: "unresolved",
      reason: "ambiguous",
    });
    expect(evaluateProfileIdentity([record({ id_Empleado: "1" })], "usuario")).toEqual({
      status: "unresolved",
      reason: "no-coherent-record",
    });
  });

  it("acepta la única ficha del perfil cuando su clave_Self no es el usuario de aplicación", () => {
    // SOFIA.ELICES / selicesm: CSP_CONSULTA_ORO_INTRAN_NEW se consulta con el
    // usuario conectado y devuelve su clave_Self del autoservicio.
    const evaluation = evaluateProfileIdentity(
      [record({ clave_Self: "selicesm", id_Empleado: "1683", nombre: "Sofía" })],
      "SOFIA.ELICES",
    );
    expect(evaluation).toMatchObject({
      status: "resolved",
      selfKey: "selicesm",
      person: { employeeId: "1683" },
    });
    // El contraste con ORO usa la clave del perfil, no el usuario de la sesión.
    expect(
      crossCheckIdentity([{ employeeId: "1683", selfKey: "selicesm" }], "1683", "selicesm"),
    ).toBe(true);
    expect(crossCheckIdentity([{ employeeId: "1683", selfKey: "otra" }], "1683", "selicesm")).toBe(
      false,
    );
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
