"use client";

import { Plus, RotateCw, UserMinus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { SettingsSectionHeader } from "@/features/registro-retributivo/components/settings/SettingsSectionHeader";
import { Button, Callout, EmptyState, Input, Modal, StatefulButton, Surface } from "@/components/system";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

function parseEmployeeIds(value: string): string[] {
  return [...new Set(value.split(/[,\n;]+/).map(normalizeEmployeeId).filter(Boolean))];
}

function sameIds(left: readonly string[], right: readonly string[]): boolean {
  const set = new Set(left);
  return left.length === right.length && right.every((id) => set.has(id));
}

export function EmployeeExclusionsCard() {
  const { settings, updateSettings, pushToast, saveExclusionsAndRefresh, analyzing, result, activeAnalysis, registroFile, pdfFiles } =
    useAppState();
  const [input, setInput] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  const ids = useMemo(() => settings.excludedEmployeeIds ?? [], [settings.excludedEmployeeIds]);
  const sortedIds = useMemo(() => [...ids].sort((a, b) => a.localeCompare(b, "es", { numeric: true })), [ids]);
  const activeResult = result ?? activeAnalysis?.result;
  const applied = activeResult?.excludedEmployeeIdsApplied ?? [];
  const pending = Boolean(activeResult) && !sameIds(ids, applied);
  const canReanalyze = Boolean(registroFile && pdfFiles.length);
  // Matrículas que no están en ningún fichero del análisis abierto (posible errata).
  const unknownIds = useMemo(() => {
    if (!activeResult) return [];
    const appliedSet = new Set(activeResult.excludedEmployeeIdsApplied ?? []);
    const known = new Set<string>();
    activeResult.people.forEach((row) => known.add(normalizeEmployeeId(row.employeeNumber)));
    activeResult.registroEmployees.forEach((row) => known.add(normalizeEmployeeId(row.employeeNumber)));
    return sortedIds.filter((id) => !known.has(id) && !appliedSet.has(id));
  }, [activeResult, sortedIds]);

  function persist(next: readonly string[]): void {
    updateSettings({ excludedEmployeeIds: next });
  }

  function addIds(): void {
    const parsed = parseEmployeeIds(input);
    if (!parsed.length) return;
    const current = new Set(ids);
    const newIds = parsed.filter((item) => !current.has(item));
    setInput("");

    if (!newIds.length) {
      pushToast({ kind: "info", title: "La matrícula ya estaba excluida." });
      return;
    }
    persist([...ids, ...newIds]);
    pushToast({ kind: "success", title: newIds.length === 1 ? "Matrícula excluida." : `${newIds.length} matrículas excluidas.` });
  }

  function clearIds(): void {
    persist([]);
    setConfirmClear(false);
    pushToast({ kind: "info", title: "Exclusiones eliminadas." });
  }

  return (
    <div data-surface="employee-exclusions">
      <SettingsSectionHeader
        title="Personas excluidas"
        description="Las matrículas de esta lista no se tienen en cuenta en ninguna comparativa ni exportación. Útil para bajas, expatriados o casos que se revisan aparte."
      />

      <Surface className="rounded-2xl">
        <form
          className="flex flex-col gap-2 sm:flex-row sm:items-end"
          onSubmit={(event) => {
            event.preventDefault();
            addIds();
          }}
        >
          <div className="min-w-0 flex-1">
            <label htmlFor="employee-exclusion-input" className="mb-1.5 block text-sm font-medium text-foreground">
              Añadir matrículas
            </label>
            <Input
              id="employee-exclusion-input"
              value={input}
              onChange={setInput}
              placeholder="Una o varias, separadas por coma: 10074, BC6"
            />
          </div>
          <Button type="submit" variant="primary" disabled={!input.trim()}>
            <Plus className="size-4" aria-hidden="true" />
            Excluir
          </Button>
        </form>

        <div className="mt-5 border-t border-border pt-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-foreground">
              {ids.length ? `${ids.length} ${ids.length === 1 ? "persona excluida" : "personas excluidas"}` : "Nadie excluido"}
            </p>
            {ids.length > 1 ? (
              <Button type="button" variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setConfirmClear(true)}>
                Quitar todas
              </Button>
            ) : null}
          </div>

          {sortedIds.length ? (
            <ul aria-label="Matrículas excluidas" className="flex flex-wrap gap-2">
              {sortedIds.map((id) => (
                <li
                  key={id}
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/40 py-1 pr-1 pl-3 font-mono text-sm text-foreground"
                >
                  {id}
                  <button
                    type="button"
                    aria-label={`Volver a incluir ${id}`}
                    onClick={() => {
                      persist(ids.filter((item) => item !== id));
                      pushToast({ kind: "info", title: "Matrícula incluida de nuevo." });
                    }}
                    className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <X className="size-3.5" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {unknownIds.length ? (
            <p className="mt-3 text-sm text-muted-foreground">
              {unknownIds.length === 1 ? "La matrícula" : "Las matrículas"}{" "}
              <span className="font-mono text-foreground">{unknownIds.join(", ")}</span>{" "}
              no {unknownIds.length === 1 ? "aparece" : "aparecen"} en los recibos ni en el Registro del análisis abierto. Comprueba que esté bien escrita.
            </p>
          ) : null}
          {sortedIds.length ? null : (
            <EmptyState
              icon={<UserMinus className="size-5" aria-hidden="true" />}
              title="Todas las personas entran en el análisis"
              description="Añade una matrícula arriba para dejarla fuera."
              className="py-6"
            />
          )}
        </div>
      </Surface>

      {pending ? (
        <Callout
          status="info"
          title="El análisis abierto aún no refleja esta lista"
          className="mt-4"
          action={
            canReanalyze ? (
              <StatefulButton
                type="button"
                variant="outline"
                size="sm"
                state={analyzing ? "loading" : "idle"}
                loadingText="Analizando…"
                icon={<RotateCw className="size-3.5" aria-hidden="true" />}
                onClick={() => void saveExclusionsAndRefresh(ids)}
              >
                Volver a analizar
              </StatefulButton>
            ) : undefined
          }
        >
          {canReanalyze
            ? "Vuelve a analizar para aplicar los cambios."
            : "Se aplicará en el próximo análisis. Para actualizar este, vuelve a cargar los archivos en Inicio."}
        </Callout>
      ) : null}

      <Modal
        open={confirmClear}
        onOpenChange={setConfirmClear}
        size="sm"
        title="¿Volver a incluir a todas?"
        description={`Las ${ids.length} matrículas excluidas volverán a entrar en los próximos análisis.`}
        footer={
          <>
            <Button type="button" variant="outline" size="sm" onClick={() => setConfirmClear(false)}>
              Cancelar
            </Button>
            <Button type="button" variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={clearIds}>
              Quitar todas
            </Button>
          </>
        }
      />
    </div>
  );
}
