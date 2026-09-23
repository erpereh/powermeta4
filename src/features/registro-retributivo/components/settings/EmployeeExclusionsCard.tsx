"use client";

import { Plus, RotateCw, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Badge, Button, Callout, Input, Modal, StatefulButton, Surface } from "@/components/system";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

function parseEmployeeIds(value: string): string[] {
  return [...new Set(value.split(/[,\n;]+/).map(normalizeEmployeeId).filter(Boolean))];
}

function countLabel(count: number): string {
  return `${count} ${count === 1 ? "excluida" : "excluidas"}`;
}

export function EmployeeExclusionsCard() {
  const { settings, updateSettings, pushToast, saveExclusionsAndRefresh, analyzing } = useAppState();
  const [input, setInput] = useState("");
  const [ids, setIds] = useState<readonly string[]>(settings.excludedEmployeeIds ?? []);
  const [dirty, setDirty] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    setIds(settings.excludedEmployeeIds ?? []);
  }, [settings.excludedEmployeeIds]);

  const sortedIds = useMemo(() => [...ids].sort((a, b) => a.localeCompare(b, "es")), [ids]);

  function persist(next: readonly string[]): void {
    setIds(next);
    setDirty(true);
    updateSettings({ excludedEmployeeIds: next });
  }

  function addIds(): void {
    const parsed = parseEmployeeIds(input);
    if (!parsed.length) {
      return;
    }
    const current = new Set(ids);
    const newIds = parsed.filter((item) => !current.has(item));

    if (!newIds.length) {
      pushToast({ kind: "info", title: "La matrícula ya estaba excluida." });
      setInput("");
      return;
    }

    persist([...ids, ...newIds]);
    setInput("");
    pushToast({ kind: "success", title: newIds.length === 1 ? "Matrícula excluida." : `${newIds.length} matrículas excluidas.` });
  }

  function removeId(id: string): void {
    persist(ids.filter((item) => item !== id));
    pushToast({ kind: "info", title: "Matrícula incluida de nuevo." });
  }

  function clearIds(): void {
    persist([]);
    setConfirmClear(false);
    pushToast({ kind: "info", title: "Exclusiones eliminadas." });
  }

  return (
    <Surface
      data-surface="employee-exclusions"
      title="Exclusiones por matrícula"
      description="No se tienen en cuenta en ninguna comparativa ni exportación."
      actions={
        <Badge status={ids.length ? "warning" : "neutral"} size="sm" className="tabular-nums">
          {countLabel(ids.length)}
        </Badge>
      }
      className="rounded-2xl"
    >
      <form
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
        onSubmit={(event) => {
          event.preventDefault();
          addIds();
        }}
      >
        <Input
          id="employee-exclusion-input"
          aria-label="Matrícula / ID RH"
          value={input}
          onChange={setInput}
          placeholder="Matrículas separadas por coma, p. ej. 10074, BC6"
          className="min-w-0 flex-1"
        />
        <Button type="submit" variant="primary" size="sm" disabled={!input.trim()}>
          <Plus className="size-3.5" aria-hidden="true" />
          Añadir
        </Button>
      </form>

      {sortedIds.length ? (
        <ul aria-label="Matrículas excluidas" className="mt-4 flex flex-wrap gap-1.5">
          {sortedIds.map((id) => (
            <li key={id} className="flex items-center gap-1 rounded-full border border-border bg-muted/50 py-0.5 pr-0.5 pl-3 font-mono text-sm">
              {id}
              <button
                type="button"
                aria-label={`Quitar ${id}`}
                onClick={() => removeId(id)}
                className="inline-flex size-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">No hay matrículas excluidas.</p>
      )}

      <div className="mt-4 flex flex-col gap-3">
        {dirty ? (
          <Callout
            status="info"
            title="Cambios pendientes de aplicar"
            action={
              <StatefulButton
                type="button"
                variant="outline"
                size="sm"
                state={analyzing ? "loading" : "idle"}
                loadingText="Actualizando…"
                icon={<RotateCw className="size-3.5" aria-hidden="true" />}
                onClick={() => void saveExclusionsAndRefresh(ids)}
              >
                Actualizar datos
              </StatefulButton>
            }
          >
            Vuelve a analizar o actualiza los datos para aplicar las exclusiones.
          </Callout>
        ) : null}
        {ids.length ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="self-start text-destructive hover:text-destructive"
            onClick={() => setConfirmClear(true)}
          >
            <Trash2 className="size-3.5" aria-hidden="true" />
            Limpiar lista
          </Button>
        ) : null}
      </div>

      <Modal
        open={confirmClear}
        onOpenChange={setConfirmClear}
        size="sm"
        title="¿Eliminar todas las exclusiones?"
        description={`Se incluirán de nuevo ${ids.length} matrículas en los próximos análisis.`}
        footer={
          <>
            <Button type="button" variant="outline" size="sm" onClick={() => setConfirmClear(false)}>
              Cancelar
            </Button>
            <Button type="button" variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={clearIds}>
              Eliminar todas
            </Button>
          </>
        }
      />
    </Surface>
  );
}
