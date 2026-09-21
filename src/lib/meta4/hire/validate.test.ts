import { describe, expect, it } from "vitest";

import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import { parseHirePeople } from "./validate";

const validPerson = {
  firstName: "Ana",
  lastName1: "López",
  lastName2: "",
  documentType: "DNI",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
};

describe("parseHirePeople", () => {
  it("accepts one valid person and trims fields", () => {
    const people = parseHirePeople([
      {
        ...validPerson,
        firstName: "  Ana  ",
        lastName2: "  ",
      },
    ]);
    expect(people).toEqual([{ ...validPerson, firstName: "Ana", lastName2: "" }]);
  });

  it("rejects an empty list", () => {
    expect(() => parseHirePeople([])).toThrow(Meta4HireError);
    expect(() => parseHirePeople([])).toThrow(/al menos una persona/);
  });

  it("rejects missing name, document, email or hire date", () => {
    expect(() => parseHirePeople([{ ...validPerson, firstName: "" }])).toThrow(/nombre/);
    expect(() => parseHirePeople([{ ...validPerson, documentNumber: " " }])).toThrow(
      /número de documento/,
    );
    expect(() => parseHirePeople([{ ...validPerson, email: "nolemail" }])).toThrow(/correo/);
    expect(() => parseHirePeople([{ ...validPerson, hireDate: "01/10/2026" }])).toThrow(
      /AAAA-MM-DD/,
    );
    expect(() => parseHirePeople([{ ...validPerson, hireDate: "2026-13-01" }])).toThrow(
      /fecha válida/,
    );
  });

  it("rejects more people than the template row budget", () => {
    const people = Array.from({ length: MAX_PERSON_COUNT + 1 }, () => validPerson);
    expect(() => parseHirePeople(people)).toThrow(new RegExp(String(MAX_PERSON_COUNT)));
  });
});
