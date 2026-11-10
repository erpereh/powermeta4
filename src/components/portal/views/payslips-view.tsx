import type { PortalContext } from "@/lib/portal/context";
import { readPortal } from "@/lib/portal/server";
import { listPayrollPays } from "@/lib/peoplenet/payroll-receipt";

import { DependencyState, PortalError } from "../portal-states";
import { OwnPayslips } from "./own-payslips";
import { requireAuthContext } from "@/lib/auth/session";
import { canUsePortalDebug } from "@/lib/portal/read-provider";
import type { PortalReadParams } from "@/lib/portal/read-model";

/** Calendario de pagas de la sociedad y recibos propios. */
export async function PayslipsView({ context, params = {} }: { context: PortalContext; params?: PortalReadParams }) {
  if (canUsePortalDebug(await requireAuthContext(), context)) {
    const { debugPays } = await import("@/lib/portal/payroll-debug.fixture");
    return <OwnPayslips key={JSON.stringify(params)} pays={debugPays} debugParams={params} />;
  }
  if (context.mode === "meta4" && context.identity.status !== "resolved") {
    return (
      <DependencyState
        title="No se ha podido identificar tu ficha"
        essential
        message={context.identity.message}
        pending={["P03"]}
      />
    );
  }
  const result = await readPortal(
    context,
    (meta4) => listPayrollPays(meta4.society, new Date().toISOString().slice(0, 10)),
    "el calendario de pagas",
  );
  if (result.status === "unavailable") {
    return (
      <DependencyState
        message={result.message}
        pending={result.pending}
        meta4={["M4SCO_HT_PAYS"]}
      />
    );
  }
  if (result.status === "error") return <PortalError message={result.message} />;
  return <OwnPayslips pays={result.data} />;
}
