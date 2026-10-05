import Link from "next/link";
import { CalendarClock, ChevronRight } from "lucide-react";

import { EmptyState, Surface } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { loadPortalTaskGroup } from "@/lib/portal/data/tasks";
import type { PortalTaskLine } from "@/lib/portal/data/tasks-core";
import { getPortalFeatureBySource } from "@/lib/portal/registry";
import { readPortal } from "@/lib/portal/server";

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

function TaskLine({ line }: { line: PortalTaskLine }) {
  const feature = line.source ? getPortalFeatureBySource(line.source) : undefined;
  const body = (
    <>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground">{line.title}</span>
        {line.tooltip ? (
          <span className="text-xs text-muted-foreground">{line.tooltip}</span>
        ) : null}
        <span className="flex flex-wrap gap-x-3 text-[11px] text-muted-foreground">
          {line.deadline ? (
            <span className="inline-flex items-center gap-1">
              <CalendarClock className="size-3" aria-hidden="true" />
              Fecha límite {formatDate(line.deadline)}
            </span>
          ) : null}
          {!feature && line.source ? (
            <span className="font-mono">Original: {line.source}</span>
          ) : null}
        </span>
      </span>
      {line.count !== null ? (
        <span className="shrink-0 rounded-full bg-selected px-2.5 py-0.5 text-sm font-semibold tabular-nums text-selected-foreground">
          {line.count}
        </span>
      ) : null}
    </>
  );
  return (
    <li className="min-w-0">
      {feature ? (
        <Link
          href={feature.route}
          className="flex min-w-0 items-center gap-3 px-4 py-3 outline-none transition-colors hover:bg-elevated focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60"
        >
          {body}
          <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        </Link>
      ) : (
        <div className="flex min-w-0 items-center gap-3 px-4 py-3">{body}</div>
      )}
    </li>
  );
}

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
          <Surface
            key={group.kind}
            title={group.title}
            description={compact ? undefined : group.description}
            flush
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
              <ul className="flex min-w-0 flex-col divide-y divide-border border-t border-border">
                {result.data.map((line, index) => (
                  <TaskLine key={`${line.title}-${index}`} line={line} />
                ))}
              </ul>
            )}
          </Surface>
        );
      })}
    </div>
  );
}
