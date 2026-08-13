"use client";

import { FileArchive, FileSpreadsheet, FolderUp, Sparkles } from "lucide-react";
import { useRef, useState, type DragEvent, type ReactNode } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

function fileSummary(files: readonly File[], empty: string): string {
  if (!files.length) return empty;
  if (files.length === 1) return files[0].name;
  return `${files.length} recibos seleccionados`;
}

function DropCard({
  title,
  description,
  icon,
  children,
  active,
  onDrop,
}: Readonly<{
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  active: boolean;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
}>) {
  const [dragging, setDragging] = useState(false);
  const isActive = active || dragging;

  return (
    <div
      data-surface="drop-zone"
      onDragOver={(event) => {
        event.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(event) => {
        setDragging(false);
        onDrop(event);
      }}
      className={cn(
        "min-w-0 rounded-xl border border-dashed p-4 transition-colors",
        isActive ? "border-primary bg-primary/5" : "border-border bg-muted/30",
      )}
    >
      <div className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background text-primary">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
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
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const pdfFolderInputRef = useRef<HTMLInputElement>(null);
  const excelInputRef = useRef<HTMLInputElement>(null);
  const disabled = analyzing;
  const canAnalyze = pdfFiles.length > 0 && Boolean(registroFile) && !analyzing;
  const missingReason = !pdfFiles.length ? "Faltan recibos." : !registroFile ? "Falta el Excel Reg. Retrib." : "Listo para analizar.";

  return (
    <Card data-surface="upload-panel">
      <CardContent className="pt-6">
        <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr_320px]">
          <DropCard
            title="Recibos"
            description="Arrastra los recibos o selecciona archivos/carpeta."
            icon={<FolderUp aria-hidden="true" />}
            active={pdfFiles.length > 0}
            onDrop={(event) => {
              event.preventDefault();
              setPdfFiles(Array.from(event.dataTransfer.files).filter((file) => file.name.toLowerCase().endsWith(".pdf")));
            }}
          >
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" disabled={disabled} onClick={() => pdfInputRef.current?.click()}>
                Seleccionar recibos
              </Button>
              <Button type="button" variant="secondary" disabled={disabled} onClick={() => pdfFolderInputRef.current?.click()}>
                Seleccionar carpeta
              </Button>
              <input
                ref={pdfInputRef}
                type="file"
                multiple
                accept="application/pdf,.pdf"
                className="sr-only"
                disabled={disabled}
                onChange={(event) => setPdfFiles(Array.from(event.target.files ?? []))}
              />
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
            <p className="mt-4 truncate text-sm font-medium">{fileSummary(pdfFiles, "Ningún recibo seleccionado")}</p>
          </DropCard>

          <DropCard
            title="Excel Reg. Retrib."
            description="Sube el Registro Retributivo heredado o equivalente."
            icon={<FileSpreadsheet aria-hidden="true" />}
            active={Boolean(registroFile)}
            onDrop={(event) => {
              event.preventDefault();
              const file = Array.from(event.dataTransfer.files).find((item) => /\.(xlsx|xlsm|xls)$/i.test(item.name));
              setRegistroFile(file);
            }}
          >
            <Button type="button" variant="outline" disabled={disabled} onClick={() => excelInputRef.current?.click()}>
              Seleccionar Excel
            </Button>
            <input
              ref={excelInputRef}
              type="file"
              accept=".xlsx,.xlsm,.xls"
              className="sr-only"
              disabled={disabled}
              onChange={(event) => setRegistroFile(event.target.files?.[0])}
            />
            <p className="mt-4 truncate text-sm font-medium">{registroFile?.name ?? "Ningún Excel seleccionado"}</p>
          </DropCard>

          <div data-surface="quick-config" className="min-w-0 rounded-xl bg-muted/50 p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg border bg-background text-primary">
                <Sparkles aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold">Configuración rápida</h3>
                <p className="text-sm text-muted-foreground">Se guarda para próximos análisis.</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Label htmlFor="tolerance">Tolerancia EUR</Label>
              <Input
                id="tolerance"
                type="number"
                min="0"
                step="0.5"
                value={settings.defaultTolerance}
                disabled={disabled}
                onChange={(event) => updateSettings({ defaultTolerance: Number(event.target.value) })}
              />
            </div>

            <Button type="button" onClick={analyze} disabled={!canAnalyze} className="mt-4 w-full">
              {analyzing ? <Spinner data-icon="inline-start" /> : <FileArchive data-icon="inline-start" />}
              {analyzing ? "Analizando..." : "Analizar"}
            </Button>
            <Alert className="mt-3" aria-live="polite">
              <AlertDescription>{analyzing ? "Analizando recibos..." : canAnalyze ? status : missingReason}</AlertDescription>
            </Alert>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
