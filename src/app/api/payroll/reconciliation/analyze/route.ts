import { analyzeSource, guarded } from "@/lib/payroll-reconciliation/server";
export const runtime = "nodejs";
export const POST = (request: Request) =>
  guarded(request, (context) => analyzeSource(request, context));
