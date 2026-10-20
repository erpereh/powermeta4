import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import { CertificatesView } from "@/components/portal/views/certificates-view";
import { TeamProjectionLookup } from "@/components/portal/views/projections/team-lookup";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import type { CertificateSearchParams } from "@/lib/portal/certificates/types";
import { getRequestPortalContext } from "@/lib/portal/server";

const ROUTE = "/tools/reports/certificado-retenciones";

const LOOKUP_COPY = {
  title: "Certificado de otra persona",
  description:
    "Escribe la matrícula de cualquier persona de la sociedad activa para ver su certificado de retenciones.",
  submit: "Ver certificado",
};

/**
 * Certificado de retenciones desde Acciones: el propio o, con `?employee=`, el
 * de cualquier matrícula de la sociedad activa (`CERTIFICATE_LOOKUP`), que el
 * servidor vuelve a validar en la pantalla y en el PDF.
 */
export default async function CertificadoRetencionesPage({
  searchParams,
}: {
  searchParams: Promise<CertificateSearchParams>;
}) {
  const params = await searchParams;
  const context = await getRequestPortalContext();
  const employee = typeof params.employee === "string" ? params.employee : "";
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Consultar certificado de retenciones"
        icon="report-certificate"
        moduleId="reports"
      />
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-6 px-4 py-5 sm:px-6">
        <TeamProjectionLookup
          key={employee}
          route={ROUTE}
          defaultValue={employee}
          copy={LOOKUP_COPY}
        />
        <Suspense
          key={`${employee}|${typeof params.year === "string" ? params.year : ""}`}
          fallback={
            <div role="status" className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Cargando el certificado de retenciones…
              </p>
              <Skeleton aria-hidden className="h-40 w-full rounded-xl" />
            </div>
          }
        >
          <CertificatesView context={context} params={params} />
        </Suspense>
      </div>
    </main>
  );
}
