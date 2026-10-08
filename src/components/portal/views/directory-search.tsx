"use client";

import { Search, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { searchPortalDirectoryAction } from "@/app/actions/portal";
import { EmptyState, Input, Skeleton } from "@/components/system";
import { PortalDataTable } from "../portal-data";
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
              <PortalDataTable
                title="Personas"
                rows={state.entries.map((entry) => ({
                  id: entry.key,
                  href: `/portal/organizacion/personas/${encodeURIComponent(entry.employeeId)}`,
                  fields: [
                    { label: "Persona", value: entry.fullName },
                    { label: "Puesto", value: entry.job ?? "No informado" },
                    { label: "Unidad", value: entry.unit ?? "No informado" },
                    { label: "Centro", value: entry.workCenter ?? "No informado" },
                    { label: "Correo", value: entry.email ?? "No informado" },
                  ],
                }))}
              />
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
