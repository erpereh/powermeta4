"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Badge, PropertyList, Surface, Table, type TableProps } from "@/components/system";
import { cn } from "@/lib/utils";

/** Presentation data only: readers and their contracts stay on the server. */
export type PortalFieldTone = "neutral" | "info" | "warning" | "success" | "danger";
export type PortalField = {
  label: string;
  value: string;
  tone?: PortalFieldTone;
  numeric?: boolean;
};
export type PortalRow = {
  id: string;
  fields: readonly PortalField[];
  href?: string;
  download?: { href: string; label: string };
};

const FIELD_TONES: Record<PortalFieldTone, string> = {
  neutral: "border-border bg-muted/40 text-muted-foreground",
  info: "border-primary/15 bg-primary/10 text-primary",
  warning: "border-tone-amber-foreground/15 bg-tone-amber text-tone-amber-foreground",
  success: "border-tone-green-foreground/15 bg-tone-green text-tone-green-foreground",
  danger: "border-destructive/15 bg-destructive/10 text-destructive",
};

function FieldValue({ field }: { field: PortalField }) {
  return field.tone ? (
    <Badge
      status={field.tone}
      size="sm"
      showIcon={false}
      pulse={false}
      title={field.value}
      className={cn(
        "max-w-full rounded-md whitespace-normal wrap-anywhere [&_[data-badge-label]]:wrap-anywhere",
        FIELD_TONES[field.tone],
      )}
    >
      {field.value}
    </Badge>
  ) : (
    <span title={field.value} className={field.numeric ? "tabular-nums" : undefined}>
      {field.value}
    </span>
  );
}

function Fields({ fields, flush = false }: { fields: readonly PortalField[]; flush?: boolean }) {
  return (
    <PropertyList
      className={cn(
        "[&_dt>span]:overflow-visible [&_dt>span]:whitespace-normal [&_dt>span]:wrap-anywhere [&_dd]:wrap-anywhere [&_dd]:font-normal [&_dl]:divide-border/60",
        flush && "rounded-none border-0 bg-background",
      )}
      items={fields.map((field, index) => ({
        id: `${index}:${field.label}`,
        label: field.label,
        value: <FieldValue field={field} />,
      }))}
    />
  );
}

function DownloadLink({ row }: { row: PortalRow }) {
  return row.download ? (
    <a
      href={row.download.href}
      download
      aria-label={`${row.download.label}: ${row.fields.map((field) => field.value).join(", ")}`}
      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-primary outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
      title={row.download.label}
    >
      <Download className="size-4" aria-hidden="true" />
    </a>
  ) : null;
}

export function PortalDataTable({
  title,
  rows,
  framed = true,
}: {
  title: string;
  rows: PortalRow[];
  framed?: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);
  const hintId = useId();
  const [availableWidth, setAvailableWidth] = useState<number | null>(null);
  const autoHeight = rows.length <= 7;
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setAvailableWidth(width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  // Occurrences keep fields with repeated labels instead of silently dropping values.
  const fields = new Map<
    string,
    { key: string; label: string; occurrence: number; length: number }
  >();
  for (const row of rows) {
    const occurrences = new Map<string, number>();
    for (const field of row.fields) {
      const occurrence = occurrences.get(field.label) ?? 0;
      occurrences.set(field.label, occurrence + 1);
      const key = JSON.stringify([field.label, occurrence]);
      const previous = fields.get(key);
      fields.set(key, {
        key,
        label: field.label,
        occurrence,
        length: Math.max(previous?.length ?? 0, field.label.length, field.value.length),
      });
    }
  }
  const descriptors = [...fields.values()];
  const hasDownloads = rows.some((row) => row.download);
  const actionWidth = hasDownloads ? 48 : 0;
  const widths = descriptors.map((field) => Math.max(144, Math.min(360, 24 + field.length * 8)));
  const totalWidth = widths.reduce((sum, width) => sum + width, 0);
  const usableWidth = Math.max(0, (availableWidth ?? 0) - (framed ? 2 : 0) - (autoHeight ? 0 : 18));
  const extraWidth = Math.max(0, usableWidth - actionWidth - totalWidth);
  const hasMoreColumns = availableWidth !== null && totalWidth + actionWidth > usableWidth;
  const columns: TableProps<PortalRow>["columns"] = descriptors.map(
    ({ key, label, occurrence }, index) => ({
      key,
      header: label,
      width: `${widths[index] + Math.floor((extraWidth * widths[index]) / totalWidth)}px`,
      cell: (row) => {
        const field = row.fields.filter((field) => field.label === label)[occurrence] ?? {
          label,
          value: "—",
        };
        const value = field.value;
        return index === 0 && row.href ? (
          <Link
            href={row.href}
            title={value}
            className="rounded-sm font-medium text-foreground outline-none hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            {value}
          </Link>
        ) : (
          <span className={index === 0 ? "font-medium" : "font-normal"}>
            <FieldValue field={field} />
          </span>
        );
      },
    }),
  );
  if (hasDownloads)
    columns.push({
      key: "downloads",
      header: <span className="sr-only">Descargar</span>,
      width: `${actionWidth}px`,
      align: "right",
      cell: (row) => (
        <div className="flex items-center justify-end gap-1">
          <DownloadLink row={row} />
        </div>
      ),
    });
  return (
    <div ref={container} className="min-w-0" role="group" aria-label={title}>
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        rowHeight={52}
        variableRowHeight
        scrollAreaLabel={`${title}: tabla completa`}
        scrollAreaDescription={hasMoreColumns ? hintId : undefined}
        autoHeight={autoHeight}
        height={440}
        className={cn(
          "rounded-xl border-border/70 bg-background shadow-none [&_table]:w-full [&_td]:overflow-visible [&_td]:text-clip [&_td]:whitespace-normal [&_td]:wrap-anywhere [&_td]:px-3 [&_td]:py-3 [&_td]:align-top [&_th]:px-0 [&_th]:text-xs [&_th]:font-normal [&_tr]:border-border/50 [&_tbody>tr:last-child]:border-b-0",
          !framed && "rounded-none border-0",
          rows.length === 0 && "[&_thead]:hidden [&_td]:p-5",
        )}
        emptyState="No hay registros para este apartado."
      />
      {hasMoreColumns ? (
        <p id={hintId} className="px-3 py-2 text-xs text-muted-foreground">
          Desplaza la tabla horizontalmente para ver todas las columnas.
        </p>
      ) : null}
    </div>
  );
}

export function PortalRecord({
  title,
  fields,
  download,
  description,
}: {
  title: string;
  fields: readonly PortalField[];
  download?: PortalRow["download"];
  description?: string;
}) {
  const row = { id: title, fields, download };
  return (
    <div className="min-w-0">
      <Surface
        title={title}
        description={description}
        flush
        headerTone="muted"
        className="overflow-hidden"
      >
        <div
          role="region"
          aria-label={`${title}: todos los campos`}
          tabIndex={0}
          className="max-h-[440px] overflow-y-auto overscroll-contain outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
        >
          <Fields fields={fields} flush />
        </div>
        {download ? (
          <div className="flex items-center justify-end gap-2 border-t border-border/60 bg-muted/20 px-3 py-2">
            <DownloadLink row={row} />
          </div>
        ) : null}
      </Surface>
    </div>
  );
}
