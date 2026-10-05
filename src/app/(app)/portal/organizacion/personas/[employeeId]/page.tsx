import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Avatar } from "@/components/system";
import { DependencyState, PortalError } from "@/components/portal/portal-states";
import { FileSections } from "@/components/portal/views/person-file";
import { getDirectoryPerson } from "@/lib/portal/data/organization";
import { readPortal, getRequestPortalContext } from "@/lib/portal/server";

const EMPLOYEE_ID = /^[A-Za-z0-9]{1,20}$/;

/** Ficha de directorio de una persona («Quién es quién - Datos Empleado»). */
export default async function PortalPersonPage({
  params,
}: {
  params: Promise<{ employeeId: string }>;
}) {
  const { employeeId: raw } = await params;
  const employeeId = decodeURIComponent(raw).trim();
  const context = await getRequestPortalContext();
  const back = (
    <Link
      href="/portal/organizacion"
      className="inline-flex w-fit items-center gap-1.5 rounded-md text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      Volver a Quién es quién
    </Link>
  );
  if (!EMPLOYEE_ID.test(employeeId)) {
    return (
      <div className="flex min-w-0 flex-col gap-4">
        {back}
        <PortalError message="La matrícula no es válida." />
      </div>
    );
  }
  const result = await readPortal(
    context,
    async (meta4) => {
      const file = await getDirectoryPerson(meta4.society, employeeId);
      const manager = file?.managerId
        ? await getDirectoryPerson(meta4.society, file.managerId)
        : null;
      return { file, manager: manager?.person ?? null };
    },
    "la ficha de la persona",
  );
  if (result.status === "unavailable") {
    return (
      <div className="flex min-w-0 flex-col gap-4">
        {back}
        <DependencyState
          message={result.message}
          pending={result.pending}
          meta4={["M4ORO_EMPLEADOS"]}
        />
      </div>
    );
  }
  if (result.status === "error") {
    return (
      <div className="flex min-w-0 flex-col gap-4">
        {back}
        <PortalError message={result.message} />
      </div>
    );
  }
  const { file, manager } = result.data;
  if (!file) {
    return (
      <div className="flex min-w-0 flex-col gap-4">
        {back}
        <DependencyState
          title="Persona no encontrada"
          message="No hay ninguna persona con esa matrícula en tu sociedad."
          pending={[]}
        />
      </div>
    );
  }
  return (
    <div className="flex min-w-0 flex-col gap-6">
      {back}
      <header className="flex min-w-0 items-center gap-4">
        <Avatar name={file.person.fullName} size="md" />
        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold tracking-tight text-foreground">
            {file.person.fullName}
          </h1>
          <p className="truncate text-sm text-muted-foreground">
            {[file.person.job, file.person.unit].filter(Boolean).join(" · ")}
          </p>
        </div>
      </header>
      {manager ? (
        <p className="text-sm text-muted-foreground">
          Responsable:{" "}
          <Link
            href={`/portal/organizacion/personas/${encodeURIComponent(manager.employeeId)}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {manager.fullName}
          </Link>
        </p>
      ) : null}
      <FileSections sections={file.sections} />
      <p className="text-xs text-muted-foreground">
        Teléfonos y fotografía del dossier original quedan pendientes de su contrato de lectura
        (P02, P08).
      </p>
    </div>
  );
}
