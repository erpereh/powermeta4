"use client";

import Link from "next/link";
import { ChevronRight, Search, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { searchPortalDirectoryAction } from "@/app/actions/portal";
import { EmptyState, Input, Skeleton } from "@/components/system";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import { useWorkspaceStore, workspaceStore } from "@/stores/use-workspace-store";

type SearchState =
  | { kind: "idle" }
  | { kind: "short" }
  | { kind: "loading" }
  | { kind: "ready"; entries: readonly DirectoryEntry[] }
  | { kind: "unavailable"; message: string };

const DEBOUNCE_MS = 300;

/** «Quién es quién»: búsqueda incremental de personas de la sociedad activa. */
export function DirectorySearch() {
  const society = useWorkspaceStore((state) => state.auth?.societyCode ?? null);
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>({ kind: "idle" });
  const requestRef = useRef(0);

  useEffect(() => {
    const text = query.trim();
    const request = ++requestRef.current;
    if (text.length === 0) {
      setState({ kind: "idle" });
      return;
    }
    if (text.length < 2) {
      setState({ kind: "short" });
      return;
    }
    setState({ kind: "loading" });
    const timer = setTimeout(() => {
      void searchPortalDirectoryAction(text)
        .then((result) => {
          if (request !== requestRef.current) return;
          if (result.status === "ok") {
            // Una respuesta de otra sociedad (cambio de workspace en curso) se descarta.
            const currentSociety = workspaceStore.getState().auth?.societyCode ?? null;
            if (result.society !== currentSociety) {
              setState({
                kind: "unavailable",
                message: "La sociedad ha cambiado. Repite la búsqueda.",
              });
              return;
            }
            setState({ kind: "ready", entries: result.data });
          } else {
            setState({ kind: "unavailable", message: result.message });
          }
        })
        .catch(() => {
          if (request === requestRef.current)
            setState({
              kind: "unavailable",
              message: "No se ha podido completar la búsqueda. Vuelve a intentarlo.",
            });
        });
    }, DEBOUNCE_MS);
    return () => {
      clearTimeout(timer);
      requestRef.current++;
    };
  }, [query, society]);

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <Input
        type="search"
        label="Buscar personas"
        placeholder="Nombre, apellidos, puesto, unidad o correo"
        value={query}
        onChange={setQuery}
        leftIcon={<Search className="size-4" aria-hidden="true" />}
        aria-describedby="directorio-ayuda"
      />
      <p id="directorio-ayuda" className="-mt-2 text-xs text-muted-foreground">
        Introduzca por lo menos dos caracteres.
      </p>
      <div aria-live="polite" aria-busy={state.kind === "loading"} className="min-w-0">
        {state.kind === "idle" ? (
          <EmptyState
            icon={<UserRound />}
            title="Comenzar búsqueda"
            description="Busca a cualquier persona de tu sociedad para ver su puesto, unidad, centro y correo."
          />
        ) : null}
        {state.kind === "short" ? (
          <p className="text-sm text-muted-foreground">Introduzca por lo menos dos caracteres.</p>
        ) : null}
        {state.kind === "loading" ? (
          <div className="flex flex-col gap-2" aria-label="Buscando personas">
            {[0, 1, 2].map((index) => (
              <Skeleton key={index} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        ) : null}
        {state.kind === "unavailable" ? (
          <p role="alert" className="text-sm text-muted-foreground">
            {state.message}
          </p>
        ) : null}
        {state.kind === "ready" ? (
          state.entries.length === 0 ? (
            <EmptyState
              title="Sin resultados"
              description="Ninguna persona de tu sociedad coincide con la búsqueda."
            />
          ) : (
            <div className="flex min-w-0 flex-col gap-2">
              <p className="text-xs text-muted-foreground">
                {state.entries.length === 50
                  ? "Se muestran las 50 primeras coincidencias; afina la búsqueda para ver más."
                  : `${state.entries.length} ${state.entries.length === 1 ? "persona" : "personas"}`}
              </p>
              <ul className="flex min-w-0 flex-col divide-y divide-border rounded-xl border border-border bg-card">
                {state.entries.map((entry) => (
                  <li key={entry.key} className="min-w-0">
                    <Link
                      href={`/portal/organizacion/personas/${encodeURIComponent(entry.employeeId)}`}
                      className="flex min-w-0 items-center gap-3 px-4 py-3 outline-none transition-colors hover:bg-elevated focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60"
                    >
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate text-sm font-medium text-foreground">
                          {entry.fullName}
                        </span>
                        <span className="truncate text-xs text-muted-foreground">
                          {[entry.job, entry.unit, entry.workCenter].filter(Boolean).join(" · ") ||
                            "Sin puesto informado"}
                        </span>
                      </span>
                      {entry.email ? (
                        <span className="hidden max-w-[16rem] truncate text-xs text-muted-foreground md:inline">
                          {entry.email}
                        </span>
                      ) : null}
                      <ChevronRight
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
