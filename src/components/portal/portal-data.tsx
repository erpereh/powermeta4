"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import {
  Badge,
  Button,
  Drawer,
  PropertyList,
  Surface,
  Table,
  type TableProps,
} from "@/components/system";
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
      className={cn("max-w-full rounded-md", FIELD_TONES[field.tone])}
    >
      {field.value}
    </Badge>
  ) : (
    <span title={field.value} className={field.numeric ? "tabular-nums" : undefined}>
      {field.value}
    </span>
  );
}

/** Keep keyboard navigation inside an open detail, including its header/footer. */
function containDetailFocus(event: KeyboardEvent<HTMLDivElement>) {
  if (event.key !== "Tab") return;
  const panel = event.currentTarget.querySelector<HTMLElement>('[role="dialog"]:not([inert])');
  if (!panel) return;
  const controls = [
    ...panel.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]'),
  ];
  const first = controls[0];
  const last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}

function Fields({ fields, flush = false }: { fields: readonly PortalField[]; flush?: boolean }) {
  return (
    <PropertyList
      className={cn(
        "[&_dt>span]:overflow-visible [&_dt>span]:whitespace-normal [&_dd]:font-normal [&_dl]:divide-border/60",
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
  const [limit, setLimit] = useState(4);
  const [availableWidth, setAvailableWidth] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = rows.find((row) => row.id === selectedId) ?? null;
  const autoHeight = rows.length <= 7;
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setAvailableWidth(width);
      setLimit(width >= 960 ? 4 : width >= 600 ? 3 : 2);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const labels = [...new Set(rows.flatMap((row) => row.fields.map((field) => field.label)))];
  const visibleLabels = labels.slice(0, limit);
  const actionWidth = rows.some((row) => row.download) ? (limit === 2 ? 120 : 140) : 108;
  const weights = visibleLabels.map((label) =>
    Math.min(
      3,
      Math.max(
        1,
        Math.max(
          label.length,
          ...rows.map(
            (row) => row.fields.find((field) => field.label === label)?.value.length ?? 0,
          ),
        ) / 24,
      ),
    ),
  );
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const columns: TableProps<PortalRow>["columns"] = visibleLabels.map((label, index) => ({
    key: label,
    header: label,
    width:
      availableWidth === null
        ? undefined
        : `${80 + Math.floor((Math.max(0, availableWidth - actionWidth - (framed ? 2 : 0) - (autoHeight ? 0 : 18) - visibleLabels.length * 80) * weights[index]) / totalWeight)}px`,
    cell: (row) => {
      const field = row.fields.find((field) => field.label === label) ?? { label, value: "—" };
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
  }));
  columns.push({
    key: "actions",
    header: <span className="sr-only">Acciones</span>,
    width: `${actionWidth}px`,
    align: "right",
    cell: (row) => (
      <div className="flex items-center justify-end gap-1">
        <DownloadLink row={row} />
        <Button
          variant="ghost"
          size="sm"
          className="rounded-md px-2 text-primary"
          aria-label={`Ver detalle: ${
            row.fields
              .slice(0, 2)
              .map((field) => field.value)
              .join(" · ") || title
          }`}
          onClick={() => setSelectedId(row.id)}
        >
          <span className="hidden sm:inline">Ver detalle</span>
          <span className="sm:hidden">Detalle</span>
        </Button>
      </div>
    ),
  });
  return (
    <div
      ref={container}
      className="min-w-0"
      role="group"
      aria-label={title}
      onKeyDownCapture={containDetailFocus}
    >
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        rowHeight={52}
        autoHeight={autoHeight}
        height={440}
        className={cn(
          "rounded-xl border-border/70 bg-background shadow-none [&_table]:w-full [&_td]:px-3 [&_th]:bg-muted/35 [&_th]:px-0 [&_th]:text-xs [&_th]:font-normal [&_tr]:border-border/50 [&_tbody>tr:last-child]:border-b-0",
          !framed && "rounded-none border-0",
          rows.length === 0 && "[&_thead]:hidden [&_td]:p-5",
        )}
        emptyState="No hay registros para este apartado."
      />
      <Drawer
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
        title={title}
        footer={selected ? <DownloadLink row={selected} /> : undefined}
      >
        {selected ? <Fields fields={selected.fields} /> : null}
      </Drawer>
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
  const [open, setOpen] = useState(false);
  const row = { id: title, fields, download };
  return (
    <div className="min-w-0 space-y-2" onKeyDownCapture={containDetailFocus}>
      <Surface
        title={title}
        description={description}
        flush
        headerTone="muted"
        className="overflow-hidden"
      >
        <Fields fields={fields.slice(0, 6)} flush />
        {fields.length > 6 || download ? (
          <div className="flex items-center justify-end gap-2 border-t border-border/60 bg-muted/20 px-3 py-2">
            <DownloadLink row={row} />
            {fields.length > 6 ? (
              <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
                Ver detalle
              </Button>
            ) : null}
          </div>
        ) : null}
      </Surface>
      <Drawer open={open} onOpenChange={setOpen} title={title}>
        <Fields fields={fields} />
      </Drawer>
    </div>
  );
}
