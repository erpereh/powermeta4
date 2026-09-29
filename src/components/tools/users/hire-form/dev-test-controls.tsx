"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/system";
import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";

import { loadDevHirePersonDraft } from "./dev-test-data";
import type { HirePersonDraft } from "./draft";

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
      const next = await loadDevHirePersonDraft(draft.id, catalogs, new Date(), controller.signal);
      if (controller.signal.aborted) return;

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
