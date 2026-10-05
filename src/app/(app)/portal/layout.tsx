import type { ReactNode } from "react";

import { PortalShell, type PortalShellContext } from "@/components/portal/portal-shell";
import { getRequestPortalContext } from "@/lib/portal/server";

export const metadata = { title: "Portal del empleado · powermeta4" };

/** Contexto del portal resuelto en servidor: sociedad, variante y persona propia. */
export default async function PortalLayout({ children }: { children: ReactNode }) {
  const context = await getRequestPortalContext();
  const shell: PortalShellContext =
    context.mode === "meta4"
      ? {
          mode: "meta4",
          society: context.society,
          variant: context.variant,
          person:
            context.identity.status === "resolved"
              ? {
                  fullName: context.identity.person.fullName,
                  employeeId: context.identity.person.employeeId,
                  job: context.identity.person.job,
                  unit: context.identity.person.unit,
                  workCenter: context.identity.person.workCenter,
                }
              : null,
          identityMessage:
            context.identity.status === "unresolved" ? context.identity.message : null,
        }
      : { mode: "unavailable", message: context.message };

  return <PortalShell context={shell}>{children}</PortalShell>;
}
