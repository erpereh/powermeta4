"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowUp, Users } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import { Avatar } from "@/components/system";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import type { PersonHierarchy, ManagerStatus } from "@/lib/portal/data/person-hierarchy-core";
import { orgChartHref } from "@/lib/portal/organization-navigation";

const linkClass =
  "inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring";
const managerMessages: Record<Exclude<ManagerStatus, "available">, string> = {
  none: "No hay responsable informado.",
  missing: "El responsable no está disponible en esta sociedad.",
  ambiguous: "Las asignaciones indican responsables distintos; no se puede subir a uno de ellos.",
  self: "La persona figura como su propio responsable; no se muestra esa relación.",
};

export function OrgTreeLink({ route }: { route: string }) {
  const params = new URLSearchParams(useSearchParams().toString());
  return (
    <Link href={orgChartHref(route, params)} className={linkClass}>
      <ArrowLeft className="size-4" aria-hidden="true" /> Volver al organigrama
    </Link>
  );
}

function PersonCard({ person, teamHref }: { person: DirectoryEntry; teamHref?: string }) {
  return (
    <article className="flex h-full w-60 flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm">
      <Avatar
        key={person.key}
        name={person.fullName}
        src={`/api/portal/photos/${encodeURIComponent(person.employeeId)}`}
        className="size-16 text-lg"
      />
      <div className="w-full min-w-0">
        <h2 className="break-words text-sm font-semibold text-foreground">{person.fullName}</h2>
        <p className="mt-1 break-words text-xs text-muted-foreground">
          {person.job ?? "Puesto no informado"}
        </p>
      </div>
      {teamHref ? (
        <Link
          href={teamHref}
          prefetch={false}
          className={`${linkClass} mt-auto w-full`}
          aria-label={`Abrir equipo de ${person.fullName}`}
        >
          <Users className="size-4" aria-hidden="true" /> Abrir equipo
        </Link>
      ) : (
        <span className="text-xs text-muted-foreground">Persona seleccionada</span>
      )}
    </article>
  );
}

/** Gráfico de dos niveles: ninguna tarjeta abre una ficha ni inventa un vínculo de jerarquía. */
export function PersonOrgChart({
  hierarchy,
  route,
}: {
  hierarchy: PersonHierarchy | null;
  route: string;
}) {
  const params = new URLSearchParams(useSearchParams().toString());
  const regionRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const region = regionRef.current;
    if (!region) return;
    const center = () => {
      region.scrollLeft = Math.max(0, (region.scrollWidth - region.clientWidth) / 2);
    };
    center();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(center);
    observer.observe(region);
    return () => observer.disconnect();
  }, [hierarchy?.person.employeeId, hierarchy?.reports.length]);
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex min-w-0 flex-wrap items-center gap-3">
        <OrgTreeLink route={route} />
        {hierarchy?.manager ? (
          <Link
            href={orgChartHref(route, params, hierarchy.manager.employeeId)}
            prefetch={false}
            className={linkClass}
            aria-label={`Subir al responsable: ${hierarchy.manager.fullName}`}
          >
            <ArrowUp className="size-4" aria-hidden="true" /> Subir al responsable
          </Link>
        ) : null}
      </div>
      {!hierarchy ? (
        <p role="status" className="text-sm text-muted-foreground">
          La persona no está disponible en el organigrama de esta sociedad.
        </p>
      ) : (
        <>
          {hierarchy.managerStatus !== "available" ? (
            <p role="status" className="text-sm text-muted-foreground">
              {managerMessages[hierarchy.managerStatus]}
            </p>
          ) : null}
          <div
            ref={regionRef}
            role="region"
            aria-label={`Jerarquía de ${hierarchy.person.fullName}`}
            tabIndex={0}
            className="w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-border bg-muted/20 p-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="mx-auto flex w-max min-w-full flex-col items-center py-2">
              <PersonCard person={hierarchy.person} />
              {hierarchy.reports.length > 0 ? (
                <>
                  <div aria-hidden="true" className="h-8 w-px bg-border" />
                  <ul aria-label="Dependientes directos" className="flex w-max items-stretch px-3">
                    {hierarchy.reports.map((person, index) => (
                      <li
                        key={person.key}
                        className="relative flex flex-col items-center px-3 pt-8"
                      >
                        <div
                          aria-hidden="true"
                          className={`absolute top-0 h-px bg-border ${index === 0 ? "left-1/2" : "left-0"} ${index === hierarchy.reports.length - 1 ? "right-1/2" : "right-0"}`}
                        />
                        <div aria-hidden="true" className="absolute top-0 h-8 w-px bg-border" />
                        <PersonCard
                          person={person}
                          teamHref={orgChartHref(route, params, person.employeeId)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p
                  role="status"
                  className="mt-5 max-w-60 text-center text-sm text-muted-foreground"
                >
                  Sin dependientes directos disponibles.
                </p>
              )}
            </div>
          </div>
          {hierarchy.omittedReports > 0 ? (
            <p role="status" className="text-sm text-muted-foreground">
              Hay asignaciones con responsables contradictorios. Esas relaciones no se muestran.
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
