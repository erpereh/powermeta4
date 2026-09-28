"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button, Callout, Tabs, TabsList, TabsTrigger } from "@/components/system";
import type {
  PayrollMissingReceipt,
  PayrollReceiptEntry,
  PayrollReceiptParameters,
} from "@/types/payroll-receipt";

import { PayrollReceiptDownload } from "./payroll-receipt-download";
import { PayrollReceiptView } from "./payroll-receipt-view";

const decimalFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: "always",
});

const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}/${month}/${year}` : isoDate;
};

/** Una nómina a la vista; el resto del rango se recorre con pestañas o anterior/siguiente. */
export function PayrollReceiptRange({
  parameters,
  receipts,
  missing,
}: {
  parameters: PayrollReceiptParameters;
  receipts: readonly PayrollReceiptEntry[];
  missing: readonly PayrollMissingReceipt[];
}) {
  const [selected, setSelected] = useState(receipts.at(-1)?.id ?? "");
  const index = Math.max(
    0,
    receipts.findIndex((entry) => entry.id === selected),
  );
  const current = receipts[index];
  const previous = receipts[index - 1];
  const next = receipts[index + 1];

  const currencies = new Set(receipts.map((entry) => entry.receipt.currencyId));
  const netTotal = receipts.reduce((total, entry) => total + entry.receipt.totals.netPay, 0);
  const accruedTotal = receipts.reduce((total, entry) => total + entry.receipt.totals.accrued, 0);
  const currencyId = currencies.size === 1 ? (receipts[0]?.receipt.currencyId ?? "") : "";

  return (
    <div className="space-y-4">
      {receipts.length > 1 ? (
        <div className="space-y-3 rounded-xl border border-border bg-card px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <p className="text-sm text-foreground">
              <span className="font-medium">{receipts.length} nóminas</span>
              <span className="text-muted-foreground">
                {" "}
                · del {formatDate(receipts[0]?.paymentDate ?? "")} al{" "}
                {formatDate(receipts.at(-1)?.paymentDate ?? "")}
              </span>
            </p>
            {currencyId ? (
              <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                <div className="flex items-baseline gap-1.5">
                  <dt className="text-muted-foreground">Devengado</dt>
                  <dd className="tabular-nums text-foreground">
                    {decimalFormatter.format(accruedTotal)} {currencyId}
                  </dd>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <dt className="text-muted-foreground">Líquido</dt>
                  <dd className="font-medium tabular-nums text-foreground">
                    {decimalFormatter.format(netTotal)} {currencyId}
                  </dd>
                </div>
              </dl>
            ) : null}
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label="Nómina anterior"
              disabled={!previous}
              onClick={() => previous && setSelected(previous.id)}
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
            </Button>
            <div className="min-w-0 flex-1">
              <Tabs value={current?.id ?? ""} onValueChange={setSelected} variant="underline">
                <TabsList>
                  {receipts.map((entry) => (
                    <TabsTrigger key={entry.id} value={entry.id}>
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-sm">{entry.payName}</span>
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {formatDate(entry.paymentDate)}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label="Nómina siguiente"
              disabled={!next}
              onClick={() => next && setSelected(next.id)}
            >
              <ChevronRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      ) : null}

      {missing.length > 0 ? (
        <Callout title={`${missing.length} paga${missing.length === 1 ? "" : "s"} sin recibo`}>
          <ul className="space-y-0.5">
            {missing.map((entry) => (
              <li key={entry.paymentDate}>
                <span className="font-medium">{entry.payName}</span> (
                {formatDate(entry.paymentDate)}): {entry.reason}
              </li>
            ))}
          </ul>
        </Callout>
      ) : null}

      {current ? (
        <section aria-label={`Nómina ${current.payName}`} className="space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              <span className="font-medium text-foreground">{current.payName}</span> · pago del{" "}
              {formatDate(current.paymentDate)}
            </p>
            <PayrollReceiptDownload
              parameters={parameters}
              currentId={current.id}
              total={receipts.length}
            />
          </div>
          <PayrollReceiptView receipt={current.receipt} />
        </section>
      ) : null}
    </div>
  );
}
