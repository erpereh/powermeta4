import type { NormalizedConcept } from "@/features/registro-retributivo/types";
import { roundMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

export function parseNormalizedConceptAmount(value: unknown): number | undefined {
  if (typeof value === "number") {
    return Number.isFinite(value) ? roundMoney(value) : undefined;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed || /\s/.test(trimmed)) {
    return undefined;
  }

  let normalized: string;
  if (/^-?\d+$/.test(trimmed)) {
    normalized = trimmed;
  } else if (/^-?\d+,\d+$/.test(trimmed)) {
    normalized = trimmed.replace(",", ".");
  } else if (/^-?\d+\.\d{1,2}$/.test(trimmed)) {
    normalized = trimmed;
  } else if (/^-?\d{1,3}(?:\.\d{3})+,\d+$/.test(trimmed)) {
    normalized = trimmed.replace(/\./g, "").replace(",", ".");
  } else {
    return undefined;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? roundMoney(parsed) : undefined;
}

export function hasNormalizedConceptDuplicate(
  concepts: readonly NormalizedConcept[],
  year: number,
  name: string,
  excludedId?: string,
): boolean {
  const normalizedName = normalizeComparableText(name);
  return concepts.some(
    (concept) =>
      concept.id !== excludedId &&
      concept.year === year &&
      normalizeComparableText(concept.name) === normalizedName,
  );
}

export function sortNormalizedConcepts(concepts: readonly NormalizedConcept[]): NormalizedConcept[] {
  return [...concepts].sort((left, right) => {
    if (left.year !== right.year) {
      return right.year - left.year;
    }
    return left.name.localeCompare(right.name, "es", { sensitivity: "base" });
  });
}
