import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import { PayrollResultsConsult } from "@/components/tools/reports/payroll-results-consult";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { listPayrollReportRuns } from "@/lib/peoplenet/payroll-reports";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";

export default function PayrollResultsPage() {
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Resultados de nómina"
        icon="report-payroll-results"
        moduleId="reports"
        contentClassName="mx-auto w-full max-w-6xl"
      />
      <Suspense fallback={<PayrollResultsSkeleton />}>
        <PayrollResultsContent />
      </Suspense>
    </main>
  );
}

async function PayrollResultsContent() {
  const authSession = await requireAuthContext();

  try {
    const context = await getMeta4OperationalContext(authSession);
    const runs = await listPayrollReportRuns(context.society);
    return <PayrollResultsConsult runs={runs} runsError={null} />;
  } catch (error) {
    return <PayrollResultsConsult runs={[]} runsError={resolveRunsErrorMessage(error)} />;
  }
}

function resolveRunsErrorMessage(error: unknown): string {
  if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
    return error.message;
  }
  if (error instanceof PortalSqlContractError) {
    return "Los resultados de informes no están disponibles en esta sociedad.";
  }
  console.error("[peoplenet] payroll report runs query failed", {
    name: error instanceof Error ? error.name : "unknown",
  });
  return "No se han podido cargar los resultados de informes desde PeopleNet.";
}

function PayrollResultsSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
      <Skeleton className="h-12 w-72" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
