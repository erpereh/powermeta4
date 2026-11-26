import type { SalaryStatus } from "@/features/registro-retributivo/types";
import { roundMoney } from "@/features/registro-retributivo/utils/money";

export const DEFAULT_REVIEW_THRESHOLD = 1;
export const DEFAULT_INCIDENT_THRESHOLD = 50;

export function salaryStatus(
  difference: number,
  options: {
    readonly tolerance: number;
    readonly reviewThreshold?: number;
    readonly incidentThreshold?: number;
  },
): SalaryStatus {
  const abs = Math.abs(difference);
  const tolerance = Math.max(0, options.tolerance);
  const reviewThreshold = Math.max(tolerance, options.reviewThreshold ?? DEFAULT_REVIEW_THRESHOLD);
  const incidentThreshold = Math.max(reviewThreshold, options.incidentThreshold ?? DEFAULT_INCIDENT_THRESHOLD);

  if (abs <= tolerance) {
    return "OK";
  }

  return abs >= incidentThreshold ? "Diferencia" : "Revisar";
}

export function calculateDifference(actual: number, expected: number): number {
  return roundMoney(actual - expected);
}

export function internalCheckStatus(differences: readonly number[], tolerance: number): SalaryStatus {
  const largest = Math.max(0, ...differences.map((difference) => Math.abs(difference)));
  if (largest <= Math.max(0, tolerance)) return "OK";
  return largest > 50 ? "Diferencia" : "Revisar";
}
