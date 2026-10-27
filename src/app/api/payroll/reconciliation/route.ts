import {
  createDossier,
  deleteDossier,
  getDossiers,
  guarded,
  updateDossier,
} from "@/lib/payroll-reconciliation/server";
export const runtime = "nodejs";
export const GET = (request: Request) =>
  guarded(request, (context) => getDossiers(request, context));
export const POST = (request: Request) =>
  guarded(request, (context) => createDossier(request, context));
export const PATCH = (request: Request) =>
  guarded(request, (context) => updateDossier(request, context));
export const DELETE = (request: Request) =>
  guarded(request, (context) => deleteDossier(request, context));
