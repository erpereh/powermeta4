"use client";

import { FileArchive, FolderUp } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import {
  Button,
  FileUpload,
  Input,
  Loader,
  createFileUploadItem,
  type FileUploadItem,
} from "@/components/system";

function toUploadItems(files: readonly File[], prefix: string): FileUploadItem[] {
  return files.map((file, index) => ({
    ...createFileUploadItem(file, index),
    id: `${prefix}-${file.name}-${file.size}-${index}`,
    status: "success" as const,
    progress: 100,
  }));
}

export function UploadPanel() {
  const {
    pdfFiles,
    registroFile,
    settings,
    analyzing,
    setPdfFiles,
    setRegistroFile,
    updateSettings,
    analyze,
    status,
  } = useAppState();
  const disabled = analyzing;
  const canAnalyze = pdfFiles.length > 0 && Boolean(registroFile) && !analyzing;
  const missingReason = !pdfFiles.length
    ? "Faltan recibos."
    : !registroFile
      ? "Falta el Excel Reg. Retrib."
      : "Listo para analizar.";

  const pdfItems = useMemo(() => toUploadItems(pdfFiles, "pdf"), [pdfFiles]);
  const excelItems = useMemo(
    () => (registroFile ? toUploadItems([registroFile], "excel") : []),
    [registroFile],
  );
  const [pdfKey, setPdfKey] = useState(0);
  const [excelKey, setExcelKey] = useState(0);
  const pdfFolderInputRef = useRef<HTMLInputElement>(null);

  return (
    <section
      data-surface="upload-panel"
      className="rounded-xl border border-border bg-card p-4 sm:p-6"
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr_320px]">
        <div className="min-w-0 flex flex-col gap-2">
          <FileUpload
            key={`pdf-${pdfKey}-${pdfItems.length}`}
            value={pdfItems}
            multiple
            accept="application/pdf,.pdf"
            disabled={disabled}
            title="Recibos"
            description="Arrastra los recibos o selecciona archivos PDF."
            browseLabel="Seleccionar recibos"
            onFilesAdded={(_items, files) => {
              const next = files.filter((file) => file.name.toLowerCase().endsWith(".pdf"));
              setPdfFiles(next.length ? [...pdfFiles, ...next] : pdfFiles);
            }}
            onRemove={(item) => {
              setPdfFiles(pdfFiles.filter((file) => file.name !== item.name || file.size !== item.size));
              setPdfKey((current) => current + 1);
            }}
            className="min-w-0"
          />
          <Button
            type="button"
            variant="secondary"
            size="sm"
            disabled={disabled}
            className="self-start rounded-lg"
            onClick={() => pdfFolderInputRef.current?.click()}
          >
            Seleccionar carpeta
          </Button>
          <input
            ref={pdfFolderInputRef}
            type="file"
            multiple
            accept="application/pdf,.pdf"
            className="sr-only"
            disabled={disabled}
            {...({ webkitdirectory: "true" } as Record<string, string>)}
            onChange={(event) => setPdfFiles(Array.from(event.target.files ?? []))}
          />
        </div>

        <FileUpload
          key={`excel-${excelKey}-${excelItems.length}`}
          value={excelItems}
          multiple={false}
          maxFiles={1}
          accept=".xlsx,.xlsm,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          disabled={disabled}
          title="Excel Reg. Retrib."
          description="Sube el Registro Retributivo heredado o equivalente."
          browseLabel="Seleccionar Excel"
          onFilesAdded={(_items, files) => {
            const file = files.find((item) => /\.(xlsx|xlsm|xls)$/i.test(item.name));
            setRegistroFile(file);
          }}
          onRemove={() => {
            setRegistroFile(undefined);
            setExcelKey((current) => current + 1);
          }}
          className="min-w-0"
        />

        <div data-surface="quick-config" className="min-w-0 rounded-xl border border-border bg-muted/40 p-4">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-primary">
              <FolderUp className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">Configuración rápida</h3>
              <p className="text-sm text-muted-foreground">Se guarda para próximos análisis.</p>
            </div>
          </div>

          <div className="mt-4">
            <Input
              id="tolerance"
              label="Tolerancia EUR"
              type="number"
              min={0}
              step={0.5}
              value={String(settings.defaultTolerance)}
              disabled={disabled}
              onChange={(value) => updateSettings({ defaultTolerance: Number(value) })}
            />
          </div>

          <Button
            type="button"
            variant="primary"
            onClick={analyze}
            disabled={!canAnalyze}
            className="mt-4 w-full rounded-lg"
          >
            {analyzing ? (
              <Loader variant="spinner" size={16} label="Analizando" />
            ) : (
              <FileArchive className="size-4" aria-hidden="true" />
            )}
            {analyzing ? "Analizando..." : "Analizar"}
          </Button>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite" role="status">
            {analyzing ? "Analizando recibos..." : canAnalyze ? status : missingReason}
          </p>
        </div>
      </div>
    </section>
  );
}
