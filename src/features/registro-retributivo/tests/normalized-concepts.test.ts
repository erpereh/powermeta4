import { describe, expect, test } from "vitest";
import {
  hasNormalizedConceptDuplicate,
  parseNormalizedConceptAmount,
  sortNormalizedConcepts,
} from "@/features/registro-retributivo/settings/normalizedConcepts";
import type { NormalizedConcept } from "@/features/registro-retributivo/types";

const concepts: readonly NormalizedConcept[] = [
  {
    id: "dietas-2026",
    year: 2026,
    name: "Dietas",
    amount: 10.5,
    comments: "",
    active: true,
    createdAt: "2026-07-10T10:00:00.000Z",
    updatedAt: "2026-07-10T10:00:00.000Z",
  },
  {
    id: "dietas-2025",
    year: 2025,
    name: "Dietas",
    amount: 9,
    comments: "",
    active: false,
    createdAt: "2026-07-10T10:00:00.000Z",
    updatedAt: "2026-07-10T10:00:00.000Z",
  },
];

describe("normalized concept helpers", () => {
  test.each([
    ["10", 10],
    ["10,50", 10.5],
    ["10.50", 10.5],
    ["1.234,56", 1234.56],
    ["-10,50", -10.5],
    ["0", 0],
    ["10,555", 10.56],
  ])("parses %s as %s", (input, expected) => {
    expect(parseNormalizedConceptAmount(input)).toBe(expected);
  });

  test.each(["texto", "Infinity", "NaN", "1.234", "1,234.56", "1..234,56", "1.23.4", "10,50,2", ""])(
    "rejects invalid or ambiguous amount %s",
    (input) => {
      expect(parseNormalizedConceptAmount(input)).toBeUndefined();
    },
  );

  test("rejects non-finite numeric values", () => {
    expect(parseNormalizedConceptAmount(Number.POSITIVE_INFINITY)).toBeUndefined();
    expect(parseNormalizedConceptAmount(Number.NaN)).toBeUndefined();
  });

  test("detects normalized duplicates only within the same year", () => {
    expect(hasNormalizedConceptDuplicate(concepts, 2026, "  DIÉTAS  ")).toBe(true);
    expect(hasNormalizedConceptDuplicate(concepts, 2027, "  DIÉTAS  ")).toBe(false);
    expect(hasNormalizedConceptDuplicate(concepts, 2026, "Dietas", "dietas-2026")).toBe(false);
  });

  test("sorts by year descending and concept ascending", () => {
    const sorted = sortNormalizedConcepts([
      concepts[1],
      { ...concepts[0], id: "zeta", name: "Zeta" },
      { ...concepts[0], id: "abono", name: "Abono" },
    ]);

    expect(sorted.map((concept) => concept.id)).toEqual(["abono", "zeta", "dietas-2025"]);
  });
});
