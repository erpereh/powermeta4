"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  CalendarRange,
  Clock,
  Download,
  FileSpreadsheet,
  Maximize2,
  MessageSquareText,
  ReceiptText,
  Repeat,
  Tag,
  type LucideIcon,
} from "lucide-react";

import {
  Button,
  Callout,
  Input,
  Modal,
  Section,
  StatTile,
  Table,
  Tabs,
  TabsList,
  TabsTrigger,
  type TableProps,
} from "@/components/system";
import { buildPayrollSummary, type PayrollSummaryRow } from "@/lib/payroll-reports/summary";
import type { PayrollReportRunDetail } from "@/types/payroll-report";

import {
  displayReportCell,
  foldReportText,
  formatIsoDay,
  formatRunAt,
  formatSummaryValue,
  isNumericReportCell,
} from "./payroll-results-format";

type View = "data" | "summary";
type DataRow = { id: string; cells: string[] };
type SummaryRow = PayrollSummaryRow & { id: string };

const ROW_HEIGHT = 44;
const MAX_TABLE_HEIGHT = 12 * ROW_HEIGHT;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isView = (value: string): value is View => value === "data" || value === "summary";

const widthFor = (header: string): string =>
  `${Math.min(320, Math.max(110, header.trim().length * 8 + 32))}px`;

/** Datos de la ejecución en fichas: dos filas de cuatro en escritorio. */
const runFacts = (
  detail: PayrollReportRunDetail,
): { label: string; value: string; icon: LucideIcon }[] => [
  { label: "Fecha de ejecución", value: formatRunAt(detail.run.runAt), icon: Clock },
  {
    label: "Paga",
    value: `${formatIsoDay(detail.run.accruedOn)}${detail.payName ? ` · ${detail.payName}` : ""}`,
    icon: CalendarDays,
  },
  {
    label: "Frecuencia",
    value: detail.payFrequencyName
      ? `${detail.payFrequencyName} (${detail.run.payFrequency})`
      : detail.run.payFrequency,
    icon: Repeat,
  },
  { label: "Tipo de paga", value: detail.run.payKind ?? "—", icon: Tag },
  { label: "Tipo de paga Meta4", value: detail.payTypeName ?? "—", icon: ReceiptText },
  {
    label: "Periodo",
    value:
      detail.payStart || detail.payEnd
        ? `${formatIsoDay(detail.payStart)} – ${formatIsoDay(detail.payEnd)}`
        : "—",
    icon: CalendarRange,
  },
  { label: "Plantilla", value: detail.template ?? "—", icon: FileSpreadsheet },
  { label: "Comentario", value: detail.comment ?? "—", icon: MessageSquareText },
];

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

/** Alto disponible de un contenedor flexible, para la tabla de la ventana ampliada. */
function useElementHeight(fallback: number) {
  const [height, setHeight] = useState(fallback);
  const observer = useRef<ResizeObserver | null>(null);
  const ref = useCallback((element: HTMLDivElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!element) return;
    const measure = () => {
      const next = Math.floor(element.getBoundingClientRect().height);
      if (next > 0) setHeight(next);
    };
    measure();
    observer.current = new ResizeObserver(measure);
    observer.current.observe(element);
  }, []);
  return [ref, height] as const;
}

function PayrollResultDownload({ detail }: { detail: PayrollReportRunDetail }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { reportId, runAt, accruedOn, payFrequency } = detail.run;

  const download = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/reports/payroll-results/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reportId, runAt, accruedOn, payFrequency }),
      });
      if (!response.ok) {
        const data: unknown = await response.json().catch(() => null);
        setError(
          isRecord(data) && typeof data.message === "string"
            ? data.message
            : "No se ha podido descargar el Excel.",
        );
        return;
      }
      const fileName =
        /filename="([^"]+)"/.exec(response.headers.get("content-disposition") ?? "")?.[1] ??
        "Informe.xlsx";
      saveFile(await response.blob(), fileName);
    } catch {
      setError("No se ha podido descargar el Excel.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        type="button"
        variant="outline"
        onClick={() => void download()}
        disabled={pending}
        aria-busy={pending}
      >
        <Download aria-hidden="true" className="size-4" />
        {pending ? "Preparando…" : "Descargar Excel"}
      </Button>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Resultado de una ejecución: datos de la paga, hoja «Datos» e «informe». */
export function PayrollResultDetail({ detail }: { detail: PayrollReportRunDetail }) {
  const summary = useMemo(
    () => buildPayrollSummary({ headers: detail.headers, rawRows: detail.rows }),
    [detail.headers, detail.rows],
  );
  const [view, setView] = useState<View>("data");
  const [search, setSearch] = useState("");
  const [enlarged, setEnlarged] = useState(false);
  const enlargeTrigger = useRef<HTMLButtonElement>(null);
  const [enlargedBodyRef, enlargedHeight] = useElementHeight(480);
  const activeView: View = summary ? view : "data";

  const dataRows = useMemo<DataRow[]>(() => {
    const query = foldReportText(search.trim());
    return detail.rows
      .map((cells, index) => ({ id: String(index), cells }))
      .filter((row) => !query || foldReportText(row.cells.join(" ")).includes(query));
  }, [detail.rows, search]);

  const summaryRows = useMemo<SummaryRow[]>(() => {
    if (!summary) return [];
    const query = foldReportText(search.trim());
    return summary.rows
      .map((row, index) => ({ ...row, id: String(index) }))
      .filter(
        (row) =>
          !query ||
          row.kind !== "employee" ||
          foldReportText(row.labels.filter(Boolean).join(" ")).includes(query),
      );
  }, [summary, search]);

  const dataColumns = useMemo<TableProps<DataRow>["columns"]>(
    () =>
      detail.headers.map((header, index) => ({
        key: `c${index}`,
        header,
        width: widthFor(header),
        sortable: true,
        sortValue: (row: DataRow) => {
          const raw = row.cells[index] ?? "";
          return isNumericReportCell(raw, header) ? Number(raw) : displayReportCell(raw, header);
        },
        cell: (row: DataRow) => {
          const raw = row.cells[index] ?? "";
          return (
            <span
              className={
                isNumericReportCell(raw, header)
                  ? "block text-right text-sm tabular-nums"
                  : "text-sm"
              }
            >
              {displayReportCell(raw, header)}
            </span>
          );
        },
      })),
    [detail.headers],
  );

  const summaryColumns = useMemo<TableProps<SummaryRow>["columns"]>(() => {
    if (!summary) return [];
    return summary.fields.map((field, index) => ({
      key: `s${index}`,
      header: field.header.trim(),
      width: index === 2 ? "260px" : widthFor(field.header),
      align: index < 3 ? ("left" as const) : ("right" as const),
      cell: (row: SummaryRow) => {
        const value =
          index < 3 ? (row.labels[index] ?? "") : formatSummaryValue(row.values[index - 3] ?? null);
        return (
          <span
            className={`text-sm ${index < 3 ? "" : "tabular-nums"} ${row.kind === "employee" ? "" : "font-semibold"}`}
          >
            {index === 0 && typeof value === "string" ? value.replace(/^(Total )?'/, "$1") : value}
          </span>
        );
      },
    }));
  }, [summary]);

  const changeEnlarged = (open: boolean) => {
    setEnlarged(open);
    if (!open) requestAnimationFrame(() => enlargeTrigger.current?.focus());
  };

  const visibleCount = activeView === "data" ? dataRows.length : summaryRows.length;
  const tableHeight = Math.min(
    MAX_TABLE_HEIGHT,
    Math.max(ROW_HEIGHT * 3, visibleCount * ROW_HEIGHT + ROW_HEIGHT),
  );

  const toolbar = (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {summary ? (
        <Tabs
          value={activeView}
          onValueChange={(value) => {
            if (isView(value)) setView(value);
          }}
          variant="pill"
        >
          <TabsList aria-label="Hoja">
            <TabsTrigger value="data">Datos</TabsTrigger>
            <TabsTrigger value="summary">Informe</TabsTrigger>
          </TabsList>
        </Tabs>
      ) : (
        <span />
      )}
      <div className="flex min-w-0 items-center gap-2">
        <Input
          type="search"
          value={search}
          onChange={setSearch}
          placeholder="Buscar en los resultados..."
          aria-label="Buscar en los resultados"
          classNames={{ root: "min-w-0 flex-1 md:w-72 md:flex-none" }}
        />
        {!enlarged ? (
          <Button
            ref={enlargeTrigger}
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Ampliar ventana"
            title="Ampliar ventana"
            aria-haspopup="dialog"
            onClick={() => changeEnlarged(true)}
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </div>
  );

  const table = (height: number) =>
    activeView === "data" ? (
      <Table
        data={dataRows}
        columns={dataColumns}
        getRowId={(row) => row.id}
        rowHeight={ROW_HEIGHT}
        height={height}
        emptyState="No hay filas que coincidan con la búsqueda."
        scrollAreaLabel="Hoja Datos del informe"
        className="min-w-0 rounded-xl"
      />
    ) : (
      <Table
        data={summaryRows}
        columns={summaryColumns}
        getRowId={(row) => row.id}
        rowHeight={ROW_HEIGHT}
        height={height}
        emptyState="No hay empleados que coincidan con la búsqueda."
        scrollAreaLabel="Hoja informe por centro y empleado"
        className="min-w-0 rounded-xl"
      />
    );

  const count = (
    <p className="text-sm text-muted-foreground" aria-live="polite">
      {activeView === "data"
        ? `${dataRows.length} de ${detail.rows.length} filas`
        : `${summaryRows.filter((row) => row.kind === "employee").length} empleados`}
      . Desplaza la tabla horizontalmente para ver todas las columnas.
    </p>
  );

  const title = `${detail.run.reportId} · ${detail.run.reportName ?? "Informe"}`;

  return (
    <Section
      title={title}
      actions={detail.rows.length > 0 ? <PayrollResultDownload detail={detail} /> : null}
    >
      <div
        role="group"
        aria-label="Datos de la ejecución"
        className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4"
      >
        {runFacts(detail).map((fact) => (
          <StatTile
            key={fact.label}
            label={fact.label}
            icon={fact.icon}
            value={<span title={fact.value}>{fact.value}</span>}
            valueClassName="text-base"
            className="bg-muted/30 p-3.5"
          />
        ))}
      </div>

      {detail.rows.length === 0 ? (
        <Callout status="info" title="Sin datos">
          Esta ejecución no generó resultados.
        </Callout>
      ) : (
        <div className="space-y-3">
          {toolbar}
          {enlarged ? (
            <div className="flex h-32 items-center justify-center rounded-xl border border-border text-sm text-muted-foreground">
              Resultado abierto en la ventana ampliada.
            </div>
          ) : (
            table(tableHeight)
          )}
          {count}
        </div>
      )}

      <Modal open={enlarged} onOpenChange={changeEnlarged} size="viewport" title={title}>
        {enlarged ? (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            {toolbar}
            <div ref={enlargedBodyRef} className="min-h-0 flex-1">
              {table(enlargedHeight)}
            </div>
            {count}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
