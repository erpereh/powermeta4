"use client";

import { FileSpreadsheet, FileText } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/system";

type Format = "pdf" | "xlsx";

const LABELS: Record<Format, string> = { pdf: "PDF", xlsx: "Excel" };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const saveFile = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

/**
 * Exporta el informe visible a PDF o Excel. Solo envía el ejercicio y la
 * matrícula de la URL; el servidor vuelve a leer y valida como la pantalla.
 */
export function ProjectionExport({
  year,
  employee,
  scenario,
}: {
  year: number | null;
  employee: string | null;
  scenario: string | null;
}) {
  const [pending, setPending] = useState<Format | null>(null);
  const [error, setError] = useState<string | null>(null);

  const download = async (format: Format) => {
    setPending(format);
    setError(null);
    const fallback = `No se ha podido descargar el ${LABELS[format]}.`;
    try {
      const response = await fetch("/api/portal/projections/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          format,
          ...(year === null ? {} : { year: String(year) }),
          ...(employee ? { employee } : {}),
          ...(scenario ? { scenario } : {}),
        }),
      });
      if (!response.ok) {
        const data: unknown = await response.json().catch(() => null);
        setError(isRecord(data) && typeof data.message === "string" ? data.message : fallback);
        return;
      }
      const fileName =
        /filename="([^"]+)"/.exec(response.headers.get("content-disposition") ?? "")?.[1] ??
        `Proyeccion.${format}`;
      saveFile(await response.blob(), fileName);
    } catch {
      setError(fallback);
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="flex flex-wrap gap-2">
        {(["pdf", "xlsx"] as const).map((format) => {
          const Icon = format === "pdf" ? FileText : FileSpreadsheet;
          return (
            <Button
              key={format}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => void download(format)}
              disabled={pending !== null}
              aria-busy={pending === format}
            >
              <Icon className="size-4" aria-hidden />
              {pending === format ? "Preparando…" : `Exportar a ${LABELS[format]}`}
            </Button>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
