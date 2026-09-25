import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import { PayrollReceiptConsult } from "@/components/tools/payroll/payroll-receipt-consult";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { listPayrollPays } from "@/lib/peoplenet/payroll-receipt";

export default function PayrollReceiptPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader title="Consultar una nómina" />
      <Suspense fallback={<PayrollReceiptSkeleton />}>
        <PayrollReceiptContent />
      </Suspense>
    </main>
  );
}

async function PayrollReceiptContent() {
  const authSession = await requireAuthContext();

  try {
    const context = await getMeta4OperationalContext(authSession);
    const pays = await listPayrollPays(context.society, new Date().toISOString().slice(0, 10));
    return <PayrollReceiptConsult pays={pays} paysError={null} />;
  } catch (error) {
    return <PayrollReceiptConsult pays={[]} paysError={resolvePaysErrorMessage(error)} />;
  }
}

function resolvePaysErrorMessage(error: unknown): string {
  if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
    return error.message;
  }
  console.error("[peoplenet] payroll pays query failed", {
    name: error instanceof Error ? error.name : "unknown",
  });
  return "No se ha podido cargar el calendario de pagas desde PeopleNet.";
}

function PayrollReceiptSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
      <Skeleton className="h-12 w-72" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
