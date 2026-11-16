import { requireAuthContext } from "@/lib/auth/session";
import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import { ReconciliationApp } from "@/features/payroll-reconciliation/ReconciliationApp";
export default async function PayrollReconciliationPage() {
  const session = await requireAuthContext();
  return <ReconciliationApp demo={session.authContext.mode === "debug" && isDebugAuthEnabled()} />;
}
