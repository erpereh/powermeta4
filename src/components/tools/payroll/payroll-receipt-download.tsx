"use client";

import { useState } from "react";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "@/components/system";
import type { PayrollReceiptParameters } from "@/types/payroll-receipt";

type ExportFormat = "pdf" | "xlsx";

const FORMAT_LABEL: Record<ExportFormat, string> = { pdf: "PDF", xlsx: "Excel" };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const errorMessage = async (response: Response): Promise<string> => {
  const data: unknown = await response.json().catch(() => null);
  return isRecord(data) && typeof data.message === "string"
    ? data.message
    : "No se han podido descargar las nóminas.";
};

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
 * Descarga en PDF o Excel de la nómina visible o de todas las del rango. El
 * servidor regenera los recibos desde PeopleNet con estos mismos parámetros.
 */
export function PayrollReceiptDownload({
  parameters,
  currentId,
  total,
}: {
  parameters: PayrollReceiptParameters;
  currentId: string;
  total: number;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async (format: ExportFormat, receiptIds?: readonly string[]) => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/payroll/receipts/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ parameters, format, receiptIds }),
      });
      if (!response.ok) {
        setError(await errorMessage(response));
        return;
      }
      const fileName =
        /filename="([^"]+)"/.exec(response.headers.get("content-disposition") ?? "")?.[1] ??
        `nominas.${format}`;
      saveFile(await response.blob(), fileName);
    } catch {
      setError("No se han podido descargar las nóminas.");
    } finally {
      setPending(false);
    }
  };

  const formats: ExportFormat[] = ["pdf", "xlsx"];
  const icon = (format: ExportFormat) =>
    format === "pdf" ? <FileText aria-hidden="true" /> : <FileSpreadsheet aria-hidden="true" />;

  return (
    <div className="flex flex-col items-end gap-1">
      <Menu>
        <MenuTrigger asChild>
          <Button type="button" variant="outline" disabled={pending} aria-busy={pending}>
            <Download aria-hidden="true" className="size-4" />
            {pending ? "Preparando…" : "Descargar"}
          </Button>
        </MenuTrigger>
        <MenuContent align="end" className="w-60">
          <MenuLabel>Esta nómina</MenuLabel>
          {formats.map((format) => (
            <MenuItem key={`one-${format}`} onSelect={() => void download(format, [currentId])}>
              {icon(format)}
              <span>{FORMAT_LABEL[format]}</span>
            </MenuItem>
          ))}
          {total > 1 ? (
            <>
              <MenuSeparator />
              <MenuLabel>Las {total} nóminas del rango</MenuLabel>
              {formats.map((format) => (
                <MenuItem key={`all-${format}`} onSelect={() => void download(format)}>
                  {icon(format)}
                  <span>{FORMAT_LABEL[format]}</span>
                </MenuItem>
              ))}
            </>
          ) : null}
        </MenuContent>
      </Menu>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
