"use client";

import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";

import { Button, ButtonLink } from "@/components/system";

import type { HireBulkDraftValues } from "./draft";

export type HireBulkLoadedPerson = { values: HireBulkDraftValues; cityName: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isValues = (value: unknown): value is HireBulkDraftValues =>
  isRecord(value) &&
  Object.values(value).every((item) => typeof item === "string" || typeof item === "boolean");

const readResponse = (
  body: unknown,
): { people: HireBulkLoadedPerson[]; problems: string[] } | { message: string } => {
  if (!isRecord(body)) return { message: "Respuesta no válida al leer el Excel." };
  if (body.ok !== true) {
    return {
      message: typeof body.message === "string" ? body.message : "No se ha podido leer el Excel.",
    };
  }
  const people = Array.isArray(body.people) ? body.people : [];
  const problems = Array.isArray(body.problems)
    ? body.problems.filter((item): item is string => typeof item === "string")
    : [];
  const loaded: HireBulkLoadedPerson[] = [];
  for (const person of people) {
    if (isRecord(person) && isValues(person.values)) {
      loaded.push({
        values: person.values,
        cityName: typeof person.cityName === "string" ? person.cityName : "",
      });
    }
  }
  return { people: loaded, problems };
};

/**
 * Downloads the bulk template and loads a filled one into the form, where each
 * person is reviewed before launching. Nothing is sent to Meta4 here.
 */
export function HireBulkControls({
  disabled,
  onLoad,
}: {
  disabled: boolean;
  onLoad: (people: readonly HireBulkLoadedPerson[]) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [problems, setProblems] = useState<readonly string[]>([]);

  const upload = async (file: File) => {
    setLoading(true);
    setStatus(null);
    setError(null);
    setProblems([]);
    try {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch("/api/hire/bulk-import", { method: "POST", body: form });
      const result = readResponse(await response.json().catch(() => null));
      if ("message" in result) {
        setError(result.message);
        return;
      }
      setProblems(result.problems);
      if (result.people.length === 0) {
        setError("El Excel no tiene personas que cargar.");
        return;
      }
      onLoad(result.people);
      setStatus(
        `${result.people.length === 1 ? "Se ha cargado 1 persona" : `Se han cargado ${result.people.length} personas`}. Revísalas antes de lanzar el alta.`,
      );
    } catch {
      setError("No se ha podido enviar el Excel.");
    } finally {
      setLoading(false);
      if (input.current) input.current.value = "";
    }
  };

  return (
    <section
      aria-label="Alta desde Excel"
      className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-start sm:justify-between"
    >
      <div className="min-w-0 space-y-1">
        <p className="text-sm font-medium">Varias personas desde Excel</p>
        <p className="text-sm text-muted-foreground">
          Descarga la plantilla con los catálogos de tu sociedad, rellena una fila por persona y
          cárgala para revisar el alta aquí.
        </p>
        {loading || status ? (
          <p role="status" className="text-sm text-muted-foreground">
            {loading ? "Leyendo el Excel…" : status}
          </p>
        ) : null}
        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        {problems.length > 0 ? (
          <ul
            aria-label="Datos del Excel por revisar"
            className="list-disc space-y-1 pl-5 text-sm text-destructive"
          >
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <ButtonLink variant="outline" size="sm" href="/api/hire/bulk-template" download>
          <Download className="size-4" aria-hidden="true" />
          Descargar plantilla
        </ButtonLink>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled || loading}
          aria-busy={loading}
          onClick={() => input.current?.click()}
        >
          <Upload className="size-4" aria-hidden="true" />
          Cargar Excel
        </Button>
        <input
          ref={input}
          type="file"
          accept=".xlsx,.xls"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void upload(file);
          }}
        />
      </div>
    </section>
  );
}
