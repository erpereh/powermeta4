"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/system";
import {
  lastGeoSegment,
  type HireCatalogOption,
  type HireCatalogState,
} from "@/lib/meta4/hire/catalogs";

import { createDevHirePersonDraft, findDevTestPlace, getDevTestPlaceQuery } from "./dev-test-data";
import type { HirePersonDraft } from "./draft";

const isCatalogOption = (value: unknown): value is HireCatalogOption =>
  typeof value === "object" &&
  value !== null &&
  "id" in value &&
  typeof value.id === "string" &&
  "name" in value &&
  typeof value.name === "string" &&
  (!("detail" in value) || value.detail === undefined || typeof value.detail === "string");

const readPlaces = (body: unknown): HireCatalogOption[] => {
  if (
    typeof body === "object" &&
    body !== null &&
    "ok" in body &&
    body.ok === true &&
    "data" in body &&
    Array.isArray(body.data) &&
    body.data.every(isCatalogOption)
  ) {
    return body.data;
  }
  throw new Error("No se ha podido buscar una población para los datos de prueba.");
};

/** Remove this component and its guarded form insertion to retire the development button. */
export function DevTestDataControls({
  draft,
  catalogs,
  disabled,
  onFill,
}: {
  draft: HirePersonDraft;
  catalogs: HireCatalogState;
  disabled: boolean;
  onFill: (draft: HirePersonDraft) => void;
}) {
  const request = useRef<AbortController | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(
    () => () => {
      request.current?.abort();
      request.current = null;
    },
    [draft.id],
  );

  useEffect(() => {
    if (disabled) {
      request.current?.abort();
      request.current = null;
      setLoading(false);
    }
  }, [disabled]);

  const fill = async () => {
    if (disabled || catalogs.status !== "ready" || request.current) return;
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const selected = draft.current.city
        ? [
            {
              id: draft.current.city,
              name: draft.pendingValues.cityName || lastGeoSegment(draft.current.city),
            },
          ]
        : [];
      let place = findDevTestPlace(catalogs.catalogs, [...selected, ...catalogs.catalogs.place]);
      if (!place) {
        const query = getDevTestPlaceQuery(catalogs.catalogs);
        if (!query) {
          throw new Error("No hay provincias con país y comunidad disponibles para la prueba.");
        }
        const response = await fetch(`/api/hire/places?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("No se ha podido buscar una población para los datos de prueba.");
        }
        const body: unknown = await response.json();
        place = findDevTestPlace(catalogs.catalogs, readPlaces(body));
      }
      if (!place) {
        throw new Error("No se ha encontrado una población compatible para los datos de prueba.");
      }
      if (controller.signal.aborted) return;

      const next = createDevHirePersonDraft(draft.id, catalogs, place, new Date());
      onFill(next);
      setMessage("Datos ficticios preparados. Puedes revisarlos y editarlos antes de confirmar.");
    } catch (caught) {
      if (!controller.signal.aborted) {
        setError(
          caught instanceof Error
            ? caught.message
            : "No se han podido preparar los datos de prueba.",
        );
      }
    } finally {
      if (request.current === controller) {
        request.current = null;
        setLoading(false);
      }
    }
  };

  return (
    <aside
      aria-label="Datos de prueba de desarrollo"
      className="mb-5 flex flex-col gap-3 rounded-xl border border-dashed border-border bg-muted/50 p-3 sm:flex-row sm:items-start sm:justify-between"
    >
      <div className="min-w-0 space-y-1">
        <p className="text-sm font-medium">Desarrollo</p>
        <p className="text-sm text-muted-foreground">
          Sustituye los datos de esta persona por datos ficticios de prueba.
        </p>
        {catalogs.status !== "ready" ? (
          <p className="text-sm text-muted-foreground">
            Los catálogos deben estar disponibles para rellenar.
          </p>
        ) : null}
        {loading || message ? (
          <p role="status" className="text-sm text-muted-foreground">
            {loading ? "Buscando una población para la prueba…" : message}
          </p>
        ) : null}
        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="shrink-0 self-start"
        disabled={disabled || loading || catalogs.status !== "ready"}
        aria-busy={loading}
        onClick={() => {
          void fill();
        }}
      >
        Rellenar datos de prueba
      </Button>
    </aside>
  );
}
