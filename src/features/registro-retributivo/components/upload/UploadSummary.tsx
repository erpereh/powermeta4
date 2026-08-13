"use client";

interface UploadSummaryProps {
  readonly pdfCount: number;
  readonly registroName?: string;
  readonly status: string;
}

export function UploadSummary({ pdfCount, registroName, status }: UploadSummaryProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="rounded-md border border-border bg-card p-4">
        <p className="text-xs font-semibold uppercase text-muted-foreground">Recibos cargados</p>
        <p className="mt-1 font-mono text-2xl font-semibold text-foreground">{pdfCount}</p>
      </div>
      <div className="rounded-md border border-border bg-card p-4">
        <p className="text-xs font-semibold uppercase text-muted-foreground">Excel Reg. Retrib.</p>
        <p className="mt-1 truncate text-sm font-semibold text-foreground">{registroName ?? "Pendiente"}</p>
      </div>
      <div className="rounded-md border border-border bg-card p-4" aria-live="polite">
        <p className="text-xs font-semibold uppercase text-muted-foreground">Estado</p>
        <p className="mt-1 text-sm font-semibold text-foreground">{status}</p>
      </div>
    </div>
  );
}
