"use client";

import { RotateCw, Trash2, UserMinus, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Badge, Button } from "@/components/system";
import { Textarea } from "@/components/ui/textarea";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

function parseEmployeeIds(value: string): string[] {
  return [...new Set(value.split(/[,\n;]+/).map(normalizeEmployeeId).filter(Boolean))];
}

function countLabel(count: number): string {
  return `${count} ${count === 1 ? "matrícula excluida" : "matrículas excluidas"}`;
}

export function EmployeeExclusionsCard() {
  const { settings, updateSettings, pushToast, saveExclusionsAndRefresh, analyzing } = useAppState();
  const [input, setInput] = useState("");
  const [ids, setIds] = useState<readonly string[]>(settings.excludedEmployeeIds ?? []);
  const [dirty, setDirty] = useState(false);

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
    const next = [...ids];
    const newIds = parsed.filter((item) => !current.has(item));
    newIds.forEach((item) => {
      current.add(item);
      next.push(item);
    });

    if (!newIds.length) {
      pushToast({ kind: "info", title: "La matrícula ya estaba excluida." });
      setInput("");
      return;
    }

    persist(next);
    setInput("");
    pushToast({ kind: "success", title: "Matrícula excluida." });
  }

  function removeId(id: string): void {
    persist(ids.filter((item) => item !== id));
    pushToast({ kind: "info", title: "Matrícula incluida de nuevo." });
  }

  function clearIds(): void {
    if (!ids.length) {
      return;
    }
    if (!window.confirm("¿Eliminar todas las exclusiones por matrícula?")) {
      return;
    }
    persist([]);
    pushToast({ kind: "info", title: "Exclusiones eliminadas." });
  }

  return (
    <section
      data-surface="employee-exclusions"
      className="rounded-xl border border-border bg-card p-4 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <UserMinus aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Exclusiones por matrícula</h2>
            <p className="text-sm text-muted-foreground">
              Las matrículas excluidas no se tendrán en cuenta en ninguna comparativa ni exportación.
            </p>
          </div>
        </div>
        <Badge status="warning" size="sm" className="px-3 py-1 text-sm font-semibold">
          {countLabel(ids.length)}
        </Badge>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label htmlFor="employee-exclusion-input" className="text-sm font-medium text-foreground">
            Matrícula / ID RH
          </label>
          <Textarea
            id="employee-exclusion-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                addIds();
              }
            }}
            placeholder="Escribe una matrícula, por ejemplo 10074 o BC6"
            rows={2}
            className="mt-2 min-h-12 resize-y"
          />
        </div>
        <div className="flex items-end gap-2">
          <Button type="button" variant="primary" size="sm" onClick={addIds} className="h-12 rounded-lg px-5">
            Añadir
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearIds}
            disabled={!ids.length}
            className="h-12 rounded-lg px-5"
          >
            <Trash2 className="size-4" aria-hidden="true" />
            Limpiar lista
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {sortedIds.length ? (
          sortedIds.map((id) => (
            <Badge
              key={id}
              status="warning"
              size="sm"
              className="gap-2 px-3 py-2 font-mono text-sm font-semibold"
            >
              {id}
              <button
                type="button"
                aria-label={`Quitar ${id}`}
                onClick={() => removeId(id)}
                className="inline-flex size-6 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </Badge>
          ))
        ) : (
          <p className="w-full border-y border-border bg-muted/30 px-1 py-3 text-sm text-muted-foreground">
            No hay matrículas excluidas.
          </p>
        )}
      </div>

      {dirty ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-y border-primary/20 bg-primary/10 px-1 py-3 text-sm font-semibold text-foreground">
          <span>Vuelve a analizar o pulsa Actualizar datos para aplicar los cambios.</span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => void saveExclusionsAndRefresh(ids)}
            disabled={analyzing}
            className="min-h-10 px-4"
          >
            <RotateCw className="size-4" aria-hidden="true" />
            Actualizar datos
          </Button>
        </div>
      ) : null}
    </section>
  );
}
