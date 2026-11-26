"use client";

import { Download } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/components/system";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { BREAKDOWN_ZIP_NAME, GROUPINGS, MAX_UPLOAD_BYTES } from "./contract";

function selectionError(files: readonly File[]): string | null {
  if (files.some((file) => !/\.xlsx$/i.test(file.name) || file.size === 0)) {
    return "Selecciona archivos .xlsx con contenido.";
  }
  if (files.reduce((size, file) => size + file.size, 0) > MAX_UPLOAD_BYTES) {
    return "Los cinco archivos deben sumar como máximo 9 MiB.";
  }
  if (files.length > GROUPINGS.length) return "Selecciona solo los cinco Excel de IBER.";
  return null;
}

async function responseError(response: Response): Promise<string> {
  if (response.redirected || response.status === 401)
    return "Tu sesión ha caducado. Vuelve a iniciar sesión.";
  if (response.headers.get("content-type")?.includes("application/json")) {
    const payload: unknown = await response.json().catch(() => null);
    if (
      payload &&
      typeof payload === "object" &&
      "error" in payload &&
      typeof payload.error === "string"
    ) {
      return payload.error;
    }
  }
  return "No se ha podido generar el ZIP. Vuelve a intentarlo.";
}

export function BreakdownForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const currentRequest = useRef<AbortController | null>(null);
  const inputError = selectionError(files);
  const ready = files.length === GROUPINGS.length && !inputError;

  useEffect(() => () => currentRequest.current?.abort(), []);

  async function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || currentRequest.current) return;
    const controller = new AbortController();
    currentRequest.current = controller;
    setBusy(true);
    setError(null);
    setSuccess(false);
    try {
      const form = new FormData();
      for (const file of files) form.append("files", file);
      const response = await fetch("/api/desglose-retributivo/generate", {
        method: "POST",
        body: form,
        signal: controller.signal,
      });
      if (!response.ok || response.headers.get("content-type") !== "application/zip") {
        setError(await responseError(response));
        return;
      }
      const blob = await response.blob();
      if (controller.signal.aborted) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = BREAKDOWN_ZIP_NAME;
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(URL.revokeObjectURL.bind(URL, url), 1000);
      setSuccess(true);
    } catch {
      if (!controller.signal.aborted)
        setError("Se ha interrumpido la conexión. Vuelve a intentarlo.");
    } finally {
      currentRequest.current = null;
      if (!controller.signal.aborted) setBusy(false);
    }
  }

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">
      <form onSubmit={generate} className="min-w-0 space-y-4 rounded-lg border bg-card p-4 sm:p-6">
        <div className="space-y-1">
          <label htmlFor="breakdown-files" className="block text-base font-semibold">
            Excel de PeopleNet
          </label>
          <p id="breakdown-help" className="text-sm text-muted-foreground">
            Selecciona los cinco archivos del mismo periodo. Cada uno debe contener Empleados y una
            agrupación.
          </p>
        </div>
        <input
          id="breakdown-files"
          type="file"
          className="block w-full min-w-0 cursor-pointer rounded-md border border-input bg-background p-1 text-sm text-foreground file:me-2 file:rounded-sm file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-default disabled:opacity-50"
          multiple
          accept=".xlsx"
          aria-describedby="breakdown-help breakdown-status"
          aria-invalid={inputError ? true : undefined}
          disabled={busy}
          onChange={(event) => {
            setFiles(Array.from(event.currentTarget.files ?? []));
            setError(null);
            setSuccess(false);
          }}
        />
        <p id="breakdown-status" role="status" className="text-sm text-muted-foreground">
          {busy
            ? "Generando los cinco Excel…"
            : success
              ? "Descarga iniciada."
              : files.length + " de 5 archivos seleccionados"}
        </p>
        {files.length > 0 && (
          <ul
            aria-label="Archivos seleccionados"
            className="space-y-1.5 text-sm text-muted-foreground"
          >
            {files.map((file, index) => (
              <li className="wrap-anywhere" key={index}>
                {file.name}
              </li>
            ))}
          </ul>
        )}
        {(inputError || error) && (
          <Alert variant="destructive">
            <AlertDescription>{inputError || error}</AlertDescription>
          </Alert>
        )}
        <Button type="submit" disabled={!ready || busy}>
          <Download aria-hidden="true" className="size-4" />
          {busy ? "Generando…" : "Generar y descargar ZIP"}
        </Button>
      </form>
      <section
        aria-labelledby="breakdown-groupings"
        className="space-y-3 self-start border-t pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6"
      >
        <h2 id="breakdown-groupings" className="text-sm font-semibold">
          Agrupaciones de IBER
        </h2>
        <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
          {GROUPINGS.map(({ sheet }) => (
            <li key={sheet}>{sheet}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
