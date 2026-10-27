import { guarded, previewSource } from "@/lib/payroll-reconciliation/server";
export const runtime = "nodejs";
export const POST = (request: Request) => guarded(request, () => previewSource(request));
