"use client";

import { FolderOpen, Play } from "lucide-react";
import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import {
  PEOPLENET_MAX_EMPLOYEE_IDS,
  PEOPLENET_MAX_PERIOD_DAYS,
  lastDayOfMonth,
  parseEmployeeIdsInput,
  periodDays,
} from "@/features/registro-retributivo/peoplenet/request";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import type { AnalysisPeriod, AnalysisSource } from "@/features/registro-retributivo/types";
import {
  Button,
  FileUpload,
  FileUploadList,
  Modal,
  Input,
  StatefulButton,
  Tabs,
  TabsList,
  TabsTrigger,
  createFileUploadItem,
  type ButtonState,
  type FileUploadItem,
} from "@/components/system";
import { cn } from "@/lib/utils";

const SOURCE_OPTIONS: ReadonlyArray<{ value: AnalysisSource; label: string }> = [
  { value: "files", label: "Subir ficheros" },
  { value: "peoplenet", label: "Desde PeopleNet" },
];

const isAnalysisSource = (value: string): value is AnalysisSource =>
  SOURCE_OPTIONS.some((option) => option.value === value);

/** Motivo por el que no se puede lanzar el análisis desde PeopleNet, o `null`. */
function peopleNetProblem(period: AnalysisPeriod, employeeIdsText: string): string | null {
  const days = periodDays(period.from, period.to);
  if (days === null) return "Indica los meses desde y hasta.";
  if (days < 1) return "El mes hasta debe ser igual o posterior al mes desde.";
  if (days > PEOPLENET_MAX_PERIOD_DAYS) return "El periodo no puede superar doce meses.";
  if (parseEmployeeIdsInput(employeeIdsText).length > PEOPLENET_MAX_EMPLOYEE_IDS) {
    return `Indica como máximo ${PEOPLENET_MAX_EMPLOYEE_IDS} matrículas.`;
  }
  return null;
}

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
}: Readonly<{
  index: number;
  title: string;
  hint: string;
  done: boolean;
  children: ReactNode;
  className?: string;
}>) {
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
    sourceMode,
    peopleNetPeriod,
    peopleNetEmployeeIds,
    pdfFiles,
    registroFile,
    settings,
    analyzing,
    error,
    setSourceMode,
    setPeopleNetPeriod,
    setPeopleNetEmployeeIds,
    setPdfFiles,
    setRegistroFile,
    updateSettings,
    analyze,
    status,
  } = useAppState();
  const disabled = analyzing;
  const fromPeopleNet = sourceMode === "peoplenet";
  const peopleNetIssue = fromPeopleNet ? peopleNetProblem(peopleNetPeriod, peopleNetEmployeeIds) : null;
  const canAnalyze = fromPeopleNet
    ? !peopleNetIssue && !analyzing
    : pdfFiles.length > 0 && Boolean(registroFile) && !analyzing;
  const missingReason = fromPeopleNet
    ? (peopleNetIssue ?? "Listo para leer de PeopleNet.")
    : !pdfFiles.length
      ? "Faltan recibos."
      : !registroFile
        ? "Falta el Excel Reg. Retrib."
        : "Listo para analizar.";
  const idPrefix = layout === "stacked" ? "drawer-" : "";

  const pdfItems = useMemo(() => toUploadItems(pdfFiles, "pdf"), [pdfFiles]);
  const excelItems = useMemo(
    () => (registroFile ? toUploadItems([registroFile], "excel") : []),
    [registroFile],
  );
  const [pdfKey, setPdfKey] = useState(0);
  const [excelKey, setExcelKey] = useState(0);
  const pdfFolderInputRef = useRef<HTMLInputElement>(null);
  const pdfListTrigger = useRef<HTMLButtonElement>(null);
  const pdfFolderTrigger = useRef<HTMLButtonElement>(null);
  const [pdfListOpen, setPdfListOpen] = useState(false);
  const changePdfListOpen = useCallback((open: boolean) => {
    setPdfListOpen(open);
    if (!open)
      requestAnimationFrame(() => {
        if (!pdfListTrigger.current) pdfFolderTrigger.current?.focus();
      });
  }, []);
  const removePdf = (item: FileUploadItem) => {
    setPdfFiles(pdfFiles.filter((file) => file.name !== item.name || file.size !== item.size));
    setPdfKey((current) => current + 1);
  };
  const buttonState: ButtonState = analyzing ? "loading" : error ? "error" : "idle";
  const stacked = layout === "stacked";

  return (
    <section
      data-surface="upload-panel"
      aria-label="Preparar análisis"
      onKeyDownCapture={(event) => {
        // A portaled child modal must not also close its enclosing sources Drawer.
        if (pdfListOpen && event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          changePdfListOpen(false);
        }
      }}
      className={cn(!stacked && "rounded-xl border border-border bg-card p-4 sm:p-6")}
    >
      <div className="mb-6 flex min-w-0 flex-col gap-1.5">
        <p id={`${idPrefix}analysis-source-label`} className="text-sm font-medium text-foreground">
          Origen de los datos
        </p>
        <div role="group" aria-labelledby={`${idPrefix}analysis-source-label`} className="min-w-0 self-start">
          <Tabs
            value={sourceMode}
            onValueChange={(value) => {
              if (isAnalysisSource(value) && !analyzing) setSourceMode(value);
            }}
            variant="segment"
          >
            <TabsList>
              {SOURCE_OPTIONS.map((option) => (
                <TabsTrigger key={option.value} value={option.value}>
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <ol
        className={cn(
          "grid gap-6",
          !stacked &&
            "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,18rem)] lg:gap-0 lg:divide-x lg:divide-border",
        )}
      >
        {fromPeopleNet ? (
          <>
            <Step
              index={1}
              title="Periodo"
              hint="Meses imputados de las nóminas, completos como en el Registro Retributivo de PeopleNet. Como máximo doce."
              done={!peopleNetIssue}
              className={cn(!stacked && "lg:pr-6")}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  id={`${idPrefix}peoplenet-from`}
                  label="Desde"
                  type="month"
                  value={peopleNetPeriod.from.slice(0, 7)}
                  max={peopleNetPeriod.to.slice(0, 7) || undefined}
                  disabled={disabled}
                  onChange={(value) =>
                    setPeopleNetPeriod({ ...peopleNetPeriod, from: value ? `${value}-01` : "" })
                  }
                />
                <Input
                  id={`${idPrefix}peoplenet-to`}
                  label="Hasta"
                  type="month"
                  value={peopleNetPeriod.to.slice(0, 7)}
                  min={peopleNetPeriod.from.slice(0, 7) || undefined}
                  disabled={disabled}
                  onChange={(value) =>
                    setPeopleNetPeriod({ ...peopleNetPeriod, to: value ? lastDayOfMonth(value) : "" })
                  }
                />
              </div>
            </Step>
            <Step
              index={2}
              title="Personas"
              hint="Se leen las nóminas y el Registro Retributivo de la sociedad activa. Sin matrículas se analiza toda la sociedad."
              done={!peopleNetIssue}
              className={cn(!stacked && "lg:px-6")}
            >
              <Input
                id={`${idPrefix}peoplenet-employees`}
                label="Matrículas (opcional)"
                value={peopleNetEmployeeIds}
                placeholder="Ej.: 1023, 1045"
                autoComplete="off"
                disabled={disabled}
                onChange={setPeopleNetEmployeeIds}
              />
              <p className="text-xs text-muted-foreground">
                Separa las matrículas con comas o espacios. Nada se sube ni se guarda en ficheros.
              </p>
            </Step>
          </>
        ) : (
          <>
        <Step
          index={1}
          title="Recibos de nómina"
          hint="Los PDF de las personas a comparar. Puedes subir varios o una carpeta entera."
          done={pdfFiles.length > 0}
          className={cn(!stacked && "lg:pr-6")}
        >
          <FileUpload
            key={`pdf-${pdfKey}-${pdfItems.length}`}
            value={pdfItems}
            maxVisibleItems={3}
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
            onRemove={removePdf}
            className="min-w-0"
            classNames={{ name: "overflow-visible whitespace-normal wrap-anywhere text-clip" }}
          />
          {pdfItems.length > 3 || pdfListOpen ? (
            <Button
              ref={pdfListTrigger}
              type="button"
              variant="outline"
              size="sm"
              className="self-start"
              aria-haspopup="dialog"
              aria-expanded={pdfListOpen}
              onClick={() => changePdfListOpen(true)}
            >
              Ver todos ({pdfItems.length})
            </Button>
          ) : null}
          <Button
            ref={pdfFolderTrigger}
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

        <Step
          index={2}
          title="Registro Retributivo"
          hint="El Excel con los importes que deberían figurar en los recibos."
          done={Boolean(registroFile)}
          className={cn(!stacked && "lg:px-6")}
        >
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
          </>
        )}

        <Step
          index={3}
          title="Analizar"
          hint="Las diferencias por debajo de la tolerancia se dan por buenas."
          done={false}
          className={cn(!stacked && "lg:pl-6")}
        >
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
            {analyzing
              ? fromPeopleNet
                ? "Leyendo PeopleNet..."
                : "Analizando recibos..."
              : canAnalyze
                ? fromPeopleNet
                  ? missingReason
                  : status
                : missingReason}
          </p>
        </Step>
      </ol>
      <Modal
        open={pdfListOpen}
        onOpenChange={changePdfListOpen}
        title={`Recibos de nómina (${pdfItems.length})`}
        description="Archivos seleccionados para el análisis."
        size="lg"
        className="max-w-[min(640px,calc(100vw-2rem))]"
      >
        <div
          role="region"
          aria-label="Lista completa de recibos PDF"
          tabIndex={0}
          className="max-h-[65dvh] overflow-y-auto overscroll-contain rounded-md outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          {pdfItems.length ? (
            <FileUploadList
              items={pdfItems}
              onRemove={removePdf}
              classNames={{ name: "overflow-visible whitespace-normal wrap-anywhere text-clip" }}
            />
          ) : (
            <p className="py-4 text-sm text-muted-foreground">No hay recibos seleccionados.</p>
          )}
        </div>
      </Modal>
    </section>
  );
}
