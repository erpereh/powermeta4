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
