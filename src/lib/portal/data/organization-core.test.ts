import { describe, expect, it } from "vitest";

import {
  buildDirectorySections,
  buildOwnFileSections,
  buildOrgTree,
  distinctFileRows,
  groupDirectoryEntries,
  toDirectoryEntry,
} from "./organization-core";

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
  it("deduplica matrículas antes de contar y conserva distintas asignaciones", () => {
    const entries = groupDirectoryEntries([
      row("001471", { N_PUESTO: "Analista" }),
      row("001471", { N_PUESTO: "Analista" }),
      row("001471", { N_PUESTO: "Consultor" }),
      row("1471"),
    ]);
    expect(entries).toHaveLength(2);
    expect(entries.find((entry) => entry.employeeId === "001471")?.job).toBe(
      "Analista / Consultor",
    );
    const tree = buildOrgTree([
      row("001471"),
      row("001471"),
      row("001471", { ID_UNIDAD: "U2" }),
      row("1471"),
    ]);
    expect(tree[0].total).toBe(2);
    expect(tree[0].children[0].people).toHaveLength(2);
  });
  it("no mezcla la misma matrícula entre sociedades", () => {
    const entries = groupDirectoryEntries([
      row("001471", { ID_ORGANIZATION: "CYC", NOMBRE: "Ana" }),
      row("001471", { ID_ORGANIZATION: "IBER", NOMBRE: "Eva" }),
    ]);
    expect(entries).toHaveLength(2);
    expect(new Set(entries.map((entry) => entry.key)).size).toBe(2);
    expect(
      buildOrgTree([
        row("001471", { ID_ORGANIZATION: "CYC" }),
        row("001471", { ID_ORGANIZATION: "IBER" }),
      ]),
    ).toHaveLength(2);
  });

  it("colapsa fichas equivalentes y preserva las contradictorias", () => {
    expect(
      distinctFileRows([
        { ID_EMPLEADO: "001", NOMBRE: "Ana " },
        { NOMBRE: "Ana", ID_EMPLEADO: "001" },
      ]),
    ).toHaveLength(1);
    expect(
      distinctFileRows([
        { ID_EMPLEADO: "001", NOMBRE: "Ana" },
        { ID_EMPLEADO: "001", NOMBRE: "Eva" },
      ]),
    ).toHaveLength(2);
    expect(
      buildOwnFileSections(row("1"))
        .flatMap((section) => section.fields)
        .find((field) => field.label === "Fecha de nacimiento")?.value,
    ).toBe("No informado");
  });
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
