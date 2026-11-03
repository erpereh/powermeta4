import type { Category } from "@/lib/payroll-reconciliation/types";

export class ReconciliationRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly category?: Category,
  ) {
    super(message);
    this.name = "ReconciliationRequestError";
  }
}
