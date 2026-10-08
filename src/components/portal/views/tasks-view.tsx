import { EmptyState, Section } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { loadPortalTaskGroup } from "@/lib/portal/data/tasks";
import type { PortalTaskLine } from "@/lib/portal/data/tasks-core";
import { getPortalFeatureBySource } from "@/lib/portal/registry";
import { readPortal } from "@/lib/portal/server";

import { PortalDataTable } from "../portal-data";
import { DependencyState, PortalError } from "../portal-states";

const GROUPS: readonly { kind: PortalTaskLine["kind"]; title: string; description: string }[] = [
  {
    kind: "validation",
    title: "Validaciones pendientes",
    description: "Peticiones que esperan tu aprobación, por funcionalidad y nivel.",
  },
  {
    kind: "task",
    title: "Tareas",
    description: "Tareas de flujo que debes realizar (se cierran con «Hecho»).",
  },
  {
    kind: "valuation",
    title: "Valoraciones",
    description: "Valoraciones pendientes (cursos, eficacia, evaluaciones).",
  },
];

const formatDate = (iso: string): string => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

/** «Mis tareas»: líneas reales de PGCO_ES_WS_VALIDATIONS con su destino en el portal. */
export async function TasksView({
  context,
  compact = false,
}: {
  context: PortalContext;
  compact?: boolean;
}) {
  // El objeto Axis vive en sesión: las operaciones se leen en orden, sin carreras.
  const groups = [];
  for (const group of GROUPS)
    groups.push({
      group,
      result: await readPortal(context, () => loadPortalTaskGroup(group.kind), group.title),
    });
  if (groups.every(({ result }) => result.status === "ok" && result.data.length === 0)) {
    return (
      <EmptyState
        title="No tienes tareas pendientes"
        description="Meta4 no devuelve validaciones, tareas ni valoraciones para tu usuario."
      />
    );
  }
  return (
    <div className="flex min-w-0 flex-col gap-4">
      {groups.map(({ group, result }) => {
        return (
          <Section
            key={group.kind}
            title={group.title}
            description={compact ? undefined : group.description}
          >
            {result.status === "error" ? (
              <div className="p-4">
                <PortalError message={result.message} />
              </div>
            ) : result.status === "unavailable" ? (
              <div className="p-4">
                <DependencyState
                  message={result.message}
                  pending={result.pending}
                  meta4={["PGCO_ES_WS_VALIDATIONS"]}
                />
              </div>
            ) : result.data.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">
                No hay registros para este apartado.
              </p>
            ) : (
              <PortalDataTable
                title={group.title}
                rows={result.data.map((line, index) => ({
                  id: String(index),
                  href: line.source ? getPortalFeatureBySource(line.source)?.route : undefined,
                  fields: [
                    { label: "Tarea", value: line.title },
                    { label: "Pendientes", value: line.count === null ? "—" : String(line.count) },
                    {
                      label: "Fecha límite",
                      value: line.deadline ? formatDate(line.deadline) : "—",
                    },
                    ...(line.tooltip ? [{ label: "Descripción", value: line.tooltip }] : []),
                    ...(line.source ? [{ label: "Origen", value: line.source }] : []),
                  ],
                }))}
              />
            )}
          </Section>
        );
      })}
    </div>
  );
}
