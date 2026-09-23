"use client";

import { FolderOpen, Play } from "lucide-react";
import { useMemo, useRef, useState, type ReactNode } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import {
  Button,
  FileUpload,
  Input,
  StatefulButton,
  createFileUploadItem,
  type ButtonState,
  type FileUploadItem,
} from "@/components/system";
import { cn } from "@/lib/utils";

function toUploadItems(files: readonly File[], prefix: string): FileUploadItem[] {
  return files.map((file, index) => ({
    ...createFileUploadItem(file, index),
    id: `${prefix}-${file.name}-${file.size}-${index}`,
    status: "success" as const,
    progress: 100,
  }));
}

function Step({
  index,
  title,
  hint,
  done,
  children,
  className,
}: Readonly<{ index: number; title: string; hint: string; done: boolean; children: ReactNode; className?: string }>) {
  return (
    <li className={cn("flex min-w-0 flex-col gap-3", className)}>
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold tabular-nums transition-colors",
            done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
          )}
        >
          {index}
        </span>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        <span className="sr-only">{done ? "(completado)" : "(pendiente)"}</span>
      </div>
      <p className="-mt-1 pl-8.5 text-xs text-muted-foreground text-pretty">{hint}</p>
      {children}
    </li>
  );
}

type UploadPanelProps = {
  /** `setup`: tres pasos en horizontal. `stacked`: en columna (Drawer). */
  readonly layout?: "setup" | "stacked";
};

export function UploadPanel({ layout = "setup" }: UploadPanelProps) {
  const {
    pdfFiles,
    registroFile,
    settings,
    analyzing,
    error,
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
  const buttonState: ButtonState = analyzing ? "loading" : error ? "error" : "idle";
  const stacked = layout === "stacked";

  return (
    <section
      data-surface="upload-panel"
      aria-label="Preparar análisis"
      className={cn(!stacked && "rounded-2xl border border-border bg-card p-4 sm:p-6")}
    >
      <ol
        className={cn(
          "grid gap-6",
          !stacked && "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,18rem)] lg:gap-0 lg:divide-x lg:divide-border",
        )}
      >
        <Step index={1} title="Recibos de nómina" hint="Los PDF de las personas a comparar. Puedes subir varios o una carpeta entera." done={pdfFiles.length > 0} className={cn(!stacked && "lg:pr-6")}>
          <FileUpload
            key={`pdf-${pdfKey}-${pdfItems.length}`}
            value={pdfItems}
            multiple
            variant="centered"
            accept="application/pdf,.pdf"
            disabled={disabled}
            title="Arrastra los recibos PDF"
            description="O selecciónalos desde tu equipo."
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
            variant="ghost"
            size="sm"
            disabled={disabled}
            className="self-start"
            onClick={() => pdfFolderInputRef.current?.click()}
          >
            <FolderOpen className="size-3.5" aria-hidden="true" />
            Seleccionar carpeta
          </Button>
          <input
            ref={pdfFolderInputRef}
            type="file"
            multiple
            accept="application/pdf,.pdf"
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
            disabled={disabled}
            {...({ webkitdirectory: "true" } as Record<string, string>)}
            onChange={(event) => setPdfFiles(Array.from(event.target.files ?? []))}
          />
        </Step>

        <Step index={2} title="Registro Retributivo" hint="El Excel con los importes que deberían figurar en los recibos." done={Boolean(registroFile)} className={cn(!stacked && "lg:px-6")}>
          <FileUpload
            key={`excel-${excelKey}-${excelItems.length}`}
            value={excelItems}
            multiple={false}
            maxFiles={1}
            variant="centered"
            accept=".xlsx,.xlsm,.xls,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            disabled={disabled}
            title="Arrastra el Registro Retributivo"
            description="Excel heredado o equivalente (.xlsx, .xlsm, .xls)."
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
        </Step>

        <Step index={3} title="Analizar" hint="Las diferencias por debajo de la tolerancia se dan por buenas." done={false} className={cn(!stacked && "lg:pl-6")}>
          <Input
            id={stacked ? "tolerance-drawer" : "tolerance"}
            label="Tolerancia EUR"
            type="number"
            min={0}
            step={0.5}
            value={String(settings.defaultTolerance)}
            disabled={disabled}
            onChange={(value) => updateSettings({ defaultTolerance: Number(value) })}
          />
          <p className="text-xs text-muted-foreground">Se guarda para próximos análisis.</p>
          <StatefulButton
            type="button"
            variant="primary"
            state={buttonState}
            loadingText="Analizando…"
            errorText="Reintentar"
            icon={<Play className="size-4" aria-hidden="true" />}
            onClick={() => void analyze()}
            disabled={!canAnalyze && !analyzing}
            className="w-full"
          >
            Analizar
          </StatefulButton>
          <p className="text-sm text-muted-foreground" aria-live="polite" role="status">
            {analyzing ? "Analizando recibos..." : canAnalyze ? status : missingReason}
          </p>
        </Step>
      </ol>
    </section>
  );
}
