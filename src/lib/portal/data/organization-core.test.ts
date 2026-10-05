import { describe, expect, it } from "vitest";

import { buildDirectorySections, buildOrgTree, toDirectoryEntry } from "./organization-core";

const row = (id: string, extra: Record<string, string | null> = {}) => ({
  ID_EMPLEADO: id,
  NOMBRE: `Nombre${id}`,
  APELLIDO_1: ".",
  ID_DIRECCION: "D1",
  N_DIRECCION: "Dirección",
  ID_AREA: "A1",
  N_AREA: "Área",
  ...extra,
});

describe("datos ORO del directorio", () => {
  it("construye la entrada de directorio ignorando marcadores vacíos", () => {
    expect(toDirectoryEntry(row("1"))).toMatchObject({
      employeeId: "1",
      fullName: "Nombre1",
      unit: "Área",
    });
    expect(toDirectoryEntry({ ID_EMPLEADO: null })).toBeNull();
  });

  it("el directorio no incluye datos personales", () => {
    const labels = buildDirectorySections(
      row("1", { ID_LEGAL: "X", FEC_NACIMIENTO: "1990-01-01" }),
    ).flatMap((section) => section.fields.map((field) => field.label));
    expect(labels).not.toContain("Documento de identidad");
    expect(labels).not.toContain("Fecha de nacimiento");
  });

  it("cuelga cada persona del nivel más profundo y suma totales", () => {
    const tree = buildOrgTree([row("1"), row("2", { ID_UNIDAD: "U1", N_UNIDAD: "Unidad" })]);
    expect(tree).toHaveLength(1);
    expect(tree[0].total).toBe(2);
    const area = tree[0].children[0];
    expect(area.people.map((person) => person.employeeId)).toEqual(["1"]);
    expect(area.children[0].people.map((person) => person.employeeId)).toEqual(["2"]);
  });
});
