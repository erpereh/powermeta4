import { normalizeComparableText, normalizeProfessionalGroup } from "@/features/registro-retributivo/utils/normalize";
import { toIsoDate } from "@/features/registro-retributivo/utils/spanishDates";

export function areFieldValuesEqual(field: string, expected: unknown, actual: unknown): boolean {
  if (!expected && !actual) {
    return true;
  }

  if (field.toLowerCase().includes("grupo profesional")) {
    return normalizeProfessionalGroup(expected) === normalizeProfessionalGroup(actual);
  }

  if (field.toLowerCase().includes("antig")) {
    return toIsoDate(expected) === toIsoDate(actual);
  }

  return normalizeComparableText(expected) === normalizeComparableText(actual);
}
