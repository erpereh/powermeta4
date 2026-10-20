import { requireAuthContext } from "@/lib/auth/session";
import { loadCertificatePage } from "@/lib/portal/certificates/load";
import type { CertificateSearchParams } from "@/lib/portal/certificates/types";
import type { PortalContext } from "@/lib/portal/context";

import { DependencyState, PortalError } from "../portal-states";
import { CertificateReportView } from "./certificates/certificate-report";

export async function CertificatesView({
  context,
  params,
}: {
  context: PortalContext;
  params: CertificateSearchParams;
}) {
  const auth = await requireAuthContext();
  const result = await loadCertificatePage(auth, context, params);
  if (result.status === "unavailable")
    return (
      <DependencyState
        title="Certificados pendientes de conexión"
        message={result.message}
        pending={result.pending}
        essential
      />
    );
  if (result.status === "error") return <PortalError message={result.message} />;
  return <CertificateReportView data={result.page} debug={result.debug} />;
}
