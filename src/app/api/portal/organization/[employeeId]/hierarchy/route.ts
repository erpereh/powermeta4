import { readOrganizationApi } from "@/lib/portal/organization-api";

export const runtime = "nodejs";
export async function GET(_request: Request, context: { params: Promise<{ employeeId: string }> }) {
  return readOrganizationApi((await context.params).employeeId, "hierarchy");
}
