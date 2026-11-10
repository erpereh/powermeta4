"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Button,
  Callout,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/system";
import type { PortalReadPage } from "@/lib/portal/read-provider";

export function PortalReadQuery({
  route,
  featureId,
  page,
}: {
  route: string;
  featureId: string;
  page: PortalReadPage;
}) {
  const params = useSearchParams();
  const [field, setField] = useState(page.filters.field);
  const [value, setValue] = useState(page.filters.value);
  const [employee, setEmployee] = useState(page.filters.employee);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const exportReport = async (format: "xlsx" | "pdf") => {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/portal/reports/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featureId, format, params: Object.fromEntries(params) }),
      });
      if (!response.ok)
        throw new Error("No se ha podido exportar la consulta. Revisa la sesión y los filtros.");
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = `portal-consulta.${format}`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "No se ha podido exportar.");
    } finally {
      setBusy(false);
    }
  };
  const available = Object.values(page.results).some((result) => result.status === "ok");
  return (
    <section aria-label="Filtrar la consulta" className="min-w-0 space-y-3" aria-busy={busy}>
      <form
        action={route}
        method="get"
        className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {["debugActor", "debugVariant", "debugScenario"].map((key) =>
          params.get(key) ? (
            <input key={key} type="hidden" name={key} value={params.get(key) ?? ""} />
          ) : null,
        )}
        <label className="min-w-0 space-y-1 text-sm">
          Buscar en los resultados
          <Input
            name="q"
            defaultValue={page.filters.q}
            maxLength={120}
            placeholder="Texto, persona o estado"
          />
        </label>
        <label className="min-w-0 space-y-1 text-sm">
          Mes de los registros
          <Input type="month" name="period" defaultValue={page.filters.period} />
        </label>
        <div className="min-w-0 space-y-1 text-sm">
          <span id="portal-filter-field">Campo</span>
          <input type="hidden" name="field" value={field} />
          <Select
            value={field || "__all"}
            onValueChange={(next) => {
              setField(next === "__all" ? "" : next);
              setValue("");
            }}
          >
            <SelectTrigger aria-labelledby="portal-filter-field">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__all">Todos los campos</SelectItem>
              {page.labels.map((label) => (
                <SelectItem key={label} value={label}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {field ? (
          <label className="min-w-0 space-y-1 text-sm">
            Valor exacto
            <Input
              name="value"
              value={value}
              onChange={setValue}
              maxLength={200}
              placeholder="Valor de la columna seleccionada"
            />
          </label>
        ) : null}
        {page.people.length ? (
          <div className="min-w-0 space-y-1 text-sm">
            <span id="portal-filter-person">Persona del equipo</span>
            <input type="hidden" name="employee" value={employee} />
            <Select
              value={employee || "__all"}
              onValueChange={(next) => setEmployee(next === "__all" ? "" : next)}
            >
              <SelectTrigger aria-labelledby="portal-filter-person">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all">Todo mi equipo</SelectItem>
                {page.people.map((person) => (
                  <SelectItem key={person.value} value={person.value}>
                    {person.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : null}
        <div className="flex flex-wrap items-end gap-2">
          <Button type="submit">Consultar</Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              const next = new URLSearchParams();
              for (const key of ["debugActor", "debugVariant", "debugScenario"])
                if (params.get(key)) next.set(key, params.get(key) ?? "");
              window.location.assign(`${route}?${next}`);
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      </form>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          El mes filtra las fechas visibles de cada registro. Sin mes, se conserva el rango
          predeterminado de cada apartado.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            disabled={busy || !available || Boolean(page.message)}
            onClick={() => exportReport("xlsx")}
          >
            Excel
          </Button>
          <Button
            size="sm"
            variant="secondary"
            disabled={busy || !available || Boolean(page.message)}
            onClick={() => exportReport("pdf")}
          >
            PDF
          </Button>
        </div>
      </div>
      {error || page.message ? (
        <Callout status="error" title="Consulta no disponible">
          {error || page.message}
        </Callout>
      ) : null}
    </section>
  );
}
