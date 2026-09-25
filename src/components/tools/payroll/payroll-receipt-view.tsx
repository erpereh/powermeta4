import type { ReactNode } from "react";

import { Callout } from "@/components/system";
import { cn } from "@/lib/utils";
import type { PayrollReceipt, PayrollReceiptLine } from "@/types/payroll-receipt";

const decimalFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  // es-ES no agrupa por defecto importes de cuatro cifras; el recibo Meta4 sí.
  useGrouping: "always",
});

const formatDecimal = (value: number | null): string =>
  value === null ? "" : decimalFormatter.format(value);

const formatPercentage = (value: number | null): string =>
  value === null ? "" : `${decimalFormatter.format(value)} %`;

const formatDate = (value: string | null): string => {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
};

/**
 * Casilla del recibo: etiqueta en versalitas sobre el valor, como el PDF de
 * Meta4. Las rejillas usan `gap-px` sobre `bg-border` para dibujar los filetes.
 */
function Box({
  label,
  children,
  className,
  numeric = false,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  numeric?: boolean;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col bg-card", className)}>
      <dt className="bg-muted/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd
        className={cn(
          "flex-1 px-2.5 py-1.5 text-sm text-foreground",
          numeric ? "text-right tabular-nums" : "break-words",
        )}
      >
        {children || <span className="text-muted-foreground">—</span>}
      </dd>
    </div>
  );
}

const ruledGrid = "grid gap-px bg-border";

const numericCell = "px-2.5 py-0.5 text-right tabular-nums whitespace-nowrap";
const ruledCell = "border-l border-border first:border-l-0";

function ReceiptLineRow({ line }: { line: PayrollReceiptLine }) {
  const informative = line.section === "informative";
  const concept = informative && line.level === 0 ? `*** ${line.concept} ***` : line.concept;
  return (
    <tr data-receipt-section={line.section} className={cn(informative && "text-muted-foreground")}>
      <td className={cn(numericCell, ruledCell)}>
        {line.unitsFormat === "percentage"
          ? formatPercentage(line.units)
          : formatDecimal(line.units)}
      </td>
      <td className={cn(numericCell, ruledCell)}>{formatDecimal(line.price)}</td>
      <td className={cn(numericCell, ruledCell)}>{formatPercentage(line.percentage)}</td>
      <th
        scope="row"
        className={cn(
          ruledCell,
          "px-2.5 py-0.5 text-left font-normal",
          informative ? "text-muted-foreground" : "text-foreground",
          line.level === 1 && "pl-8",
        )}
      >
        {concept}
      </th>
      <td className={cn(numericCell, ruledCell, !informative && "text-foreground")}>
        {formatDecimal(line.earning)}
      </td>
      <td className={cn(numericCell, ruledCell, !informative && "text-foreground")}>
        {formatDecimal(line.deduction)}
      </td>
    </tr>
  );
}

const BODY_COLUMNS = [
  { label: "Unidades", numeric: true },
  { label: "Precio", numeric: true },
  { label: "% Jorn.", numeric: true },
  { label: "Conceptos", numeric: false },
  { label: "Devengos", numeric: true },
  { label: "Retención", numeric: true },
] as const;

function PaymentBoxes({
  title,
  payments,
}: {
  title: string;
  payments: PayrollReceipt["bankPayments"];
}) {
  const empty = payments.length === 0;
  return (
    <div className="flex min-w-0 flex-col bg-card">
      <p className="bg-muted/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <dl className={cn(ruledGrid, "flex-1 grid-cols-[minmax(0,1fr)_auto] border-t border-border")}>
        <Box label="Cuenta">
          {empty
            ? null
            : payments.map((payment, index) => (
                <span key={`${payment.account}-${index}`} className="block break-all">
                  {payment.account}
                </span>
              ))}
        </Box>
        <Box label="Importe" numeric className="min-w-24">
          {empty
            ? null
            : payments.map((payment, index) => (
                <span key={`${payment.account}-${index}`} className="block">
                  {formatDecimal(payment.amount)}
                </span>
              ))}
        </Box>
      </dl>
    </div>
  );
}

/** Recibo de nómina maquetado como el documento de Meta4, con los tokens del producto. */
export function PayrollReceiptView({ receipt }: { receipt: PayrollReceipt }) {
  const { currencyId, worker, bases, totals, accumulated } = receipt;
  const hasUnmapped = receipt.unmapped.accrued !== 0 || receipt.unmapped.deducted !== 0;

  return (
    <div className="space-y-3">
      {hasUnmapped ? (
        <Callout title="Recibo incompleto">
          Este recibo tiene conceptos que powermeta4 todavía no muestra: faltan{" "}
          {formatDecimal(receipt.unmapped.accrued)} {currencyId} en devengos y{" "}
          {formatDecimal(receipt.unmapped.deducted)} {currencyId} en retenciones. Los totales sí son
          los de Meta4.
        </Callout>
      ) : null}

      <article
        aria-label={`Recibo de nómina de ${worker.fullName}, ${receipt.periodLabel}`}
        className="overflow-hidden rounded-md border border-border bg-card text-foreground shadow-sm"
      >
        <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border px-4 py-3">
          <h2 className="text-base font-semibold tracking-tight">
            {receipt.company.name || "Recibo de nómina"}
          </h2>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Recibo de salarios · {currencyId}
          </p>
        </header>

        <dl className={cn(ruledGrid, "grid-cols-2 border-b border-border sm:grid-cols-12")}>
          <Box label="Empresa" className="col-span-2 sm:col-span-4">
            {receipt.company.name}
          </Box>
          <Box label="C.I.F." className="sm:col-span-2">
            {receipt.company.taxId}
          </Box>
          <Box label="Nº inscripción S.S." className="sm:col-span-3">
            {receipt.company.socialSecurityRegistration}
          </Box>
          <Box label="Periodo liquidación" className="col-span-2 sm:col-span-3">
            {receipt.periodLabel}
          </Box>

          <Box label="Trabajador" className="col-span-2 sm:col-span-4">
            {worker.fullName}
          </Box>
          <Box label="NIF" className="sm:col-span-2">
            {worker.nationalId}
          </Box>
          <Box label="Nº afiliación S.S." className="sm:col-span-3">
            {worker.socialSecurityNumber}
          </Box>
          <Box label="GT" className="sm:col-span-1">
            {worker.contributionGroup}
          </Box>
          <Box label="Nº matrícula" className="sm:col-span-2">
            {worker.employeeId}
          </Box>

          <Box label="Centro de trabajo" className="col-span-2 sm:col-span-4">
            {receipt.workCenter}
          </Box>
          <Box label="Grupo profesional" className="col-span-2 sm:col-span-5">
            {receipt.professionalGroup}
          </Box>
          <Box label="Antigüedad en la empresa" className="col-span-2 sm:col-span-3">
            {formatDate(receipt.seniorityDate)}
          </Box>
        </dl>

        <div className="overflow-x-auto border-b border-border">
          <table className="w-full min-w-[44rem] border-collapse text-sm">
            <caption className="sr-only">Conceptos del recibo de nómina</caption>
            <colgroup>
              <col className="w-20" />
              <col className="w-24" />
              <col className="w-16" />
              <col />
              <col className="w-28" />
              <col className="w-28" />
            </colgroup>
            <thead>
              <tr className="border-b border-border bg-muted/60 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                {BODY_COLUMNS.map((column) => (
                  <th
                    key={column.label}
                    scope="col"
                    className={cn(
                      ruledCell,
                      "px-2.5 py-1.5 font-semibold",
                      column.numeric ? "text-right" : "text-left",
                    )}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>tr:first-child>*]:pt-2 [&>tr:last-child>*]:pb-3">
              {receipt.lines.map((line) => (
                <ReceiptLineRow key={line.id} line={line} />
              ))}
            </tbody>
          </table>
        </div>

        <div className={cn(ruledGrid, "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]")}>
          <dl className={cn(ruledGrid, "grid-cols-2 sm:grid-cols-5")}>
            <Box label="Remunerac. total" numeric>
              {formatDecimal(bases.totalRemuneration)}
            </Box>
            <Box label="Prorrata p. extras" numeric>
              {formatDecimal(bases.extraPayProration)}
            </Box>
            <Box label="Base total" numeric>
              {formatDecimal(bases.totalBase)}
            </Box>
            <Box label="Régimen general" numeric>
              {formatDecimal(bases.generalRegimeBase)}
            </Box>
            <Box label="Base desempleo" numeric className="col-span-2 sm:col-span-1">
              {formatDecimal(bases.unemploymentBase)}
            </Box>
          </dl>
          <dl className={cn(ruledGrid, "grid-cols-2")}>
            <Box label="Total devengado" numeric>
              <span className="font-medium">{formatDecimal(totals.accrued)}</span>
            </Box>
            <Box label="Total a deducir" numeric>
              <span className="font-medium">{formatDecimal(totals.deducted)}</span>
            </Box>
          </dl>

          <dl className={cn(ruledGrid, "grid-cols-1 sm:grid-cols-3")}>
            <Box label="Base IRPF acumulada" numeric>
              {formatDecimal(accumulated.irpfBase)}
            </Box>
            <Box label="Cuota IRPF acumulada" numeric>
              {formatDecimal(accumulated.irpfQuota)}
            </Box>
            <Box label="Cuota S.S. acumulada" numeric>
              {formatDecimal(accumulated.socialSecurityQuota)}
            </Box>
          </dl>
          <dl className={ruledGrid}>
            <div className="flex min-w-0 flex-col bg-selected/50">
              <dt className="px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-foreground">
                Líquido total a percibir
              </dt>
              <dd className="flex flex-1 items-center justify-end gap-1.5 px-2.5 py-2 tabular-nums">
                <span className="text-xl font-semibold tracking-tight">
                  {formatDecimal(totals.netPay)}
                </span>
                <span className="text-xs text-muted-foreground">{currencyId}</span>
              </dd>
            </div>
          </dl>

          <div className={cn(ruledGrid, "sm:grid-cols-2 lg:col-span-2")}>
            <PaymentBoxes title="Datos del banco" payments={receipt.bankPayments} />
            <PaymentBoxes
              title="Datos del banco beneficiario"
              payments={receipt.beneficiaryPayments}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
