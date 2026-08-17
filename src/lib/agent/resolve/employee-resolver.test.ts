import { describe, expect, it } from "vitest";

import type { Meta4UserListItem } from "@/lib/meta4/users/types";

import {
  collectDigitSpans,
  replaceMentionWithToken,
  resolveEmployeeMention,
} from "./employee-resolver";

const users: Meta4UserListItem[] = [
  { id: "10", fullName: "El Carmen Ruiz", claveSelf: "ecruiz" },
  { id: "13", fullName: "De La Fuente", claveSelf: "dfuente" },
  { id: "0013", fullName: "Empleado Cero", claveSelf: "ecero" },
  { id: "1013", fullName: "Empleado Prueba", claveSelf: "eprueba" },
  { id: "0001", fullName: "Paula García López", claveSelf: "paula" },
  { id: "1001512", fullName: "Matrícula Larga", claveSelf: "mlarga" },
];

describe("collectDigitSpans", () => {
  it.each(["1013", "0001", "0013", "1001512"])(
    "treats %s as a single opaque enrolment token",
    (span) => {
      expect(collectDigitSpans(span)).toEqual([span]);
      expect(collectDigitSpans(`¿Qué puesto tiene el ${span}?`)).toEqual([span]);
    },
  );

  it("does not split a contiguous enrolment into digit pairs", () => {
    expect(collectDigitSpans("1013")).not.toEqual(["10", "13"]);
  });
});

describe("resolveEmployeeMention", () => {
  it("resolves 1013 to the matching employee id string", () => {
    const result = resolveEmployeeMention("1013", users);
    expect(result).toMatchObject({
      status: "unique",
      employee: { employeeId: "1013", matchedSpan: "1013" },
    });
  });

  it("resolves an enrolment mentioned inside a Spanish question", () => {
    const result = resolveEmployeeMention("¿Qué puesto tiene el 1013?", users);
    expect(result).toMatchObject({
      status: "unique",
      employee: { employeeId: "1013", matchedSpan: "1013" },
    });
  });

  it("keeps leading zeros on 0013", () => {
    const result = resolveEmployeeMention("0013", users);
    expect(result).toMatchObject({
      status: "unique",
      employee: { employeeId: "0013", matchedSpan: "0013" },
    });
    if (result.status === "unique") {
      expect(result.employee.employeeId).toBe("0013");
      expect(result.employee.employeeId).not.toBe("13");
    }
  });
});

describe("replaceMentionWithToken", () => {
  it("replaces a whole enrolment without splitting neighboring digits", () => {
    expect(replaceMentionWithToken("¿Qué puesto tiene el 1013?", "1013", "EMP_A81F3C2D")).toBe(
      "¿Qué puesto tiene el EMP_A81F3C2D?",
    );
    expect(replaceMentionWithToken("10130 y 1013", "1013", "EMP_A81F3C2D")).toBe("10130 y EMP_A81F3C2D");
  });
});
