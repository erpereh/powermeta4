import type { ReactNode } from "react";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { diffClass, toleranceDiffClass } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/features/registro-retributivo/utils/money";

/** Par etiqueta/valor para paneles de detalle (dentro de un `dl`). */
export function DetailField({
  label,
  value,
  className,
}: Readonly<{ label: string; value?: string | number | ReactNode; className?: string }>) {
  const content = typeof value === "string" || typeof value === "number" || value === undefined ? displayText(value) || "Sin dato" : value;
  return (
    <div className={cn("min-w-0", className)}>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 min-w-0 break-words text-sm font-medium text-foreground">{content}</dd>
    </div>
  );
}

export type MoneyRow = {
  readonly label: string;
  readonly left: number;
  readonly right: number;
  readonly diff: number;
};

/**
 * Tabla compacta de importes: bloque · fuente A · fuente B · diferencia.
 * Con `tolerance`, solo se resaltan las diferencias que la superan.
 */
export function MoneyTable({
  caption,
  leftLabel,
  rightLabel,
  rows,
  tolerance,
}: Readonly<{ caption: string; leftLabel: string; rightLabel: string; rows: readonly MoneyRow[]; tolerance?: number }>) {
  const amountClass = "wrap-break-word px-2 py-2 text-right font-mono tabular-nums sm:px-3";

  return (
    <div data-surface="economic-breakdown" className="min-w-0 overflow-x-auto rounded-xl border border-border">
      <table className="w-full table-fixed text-xs sm:table-auto sm:text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 text-xs text-muted-foreground">
          <tr>
            <th scope="col" className="w-[29%] px-2 py-2 text-left font-medium sm:w-auto sm:px-3">Bloque</th>
            <th scope="col" className="wrap-break-word px-2 py-2 text-right font-medium sm:px-3">{leftLabel}</th>
            <th scope="col" className="wrap-break-word px-2 py-2 text-right font-medium sm:px-3">{rightLabel}</th>
            <th scope="col" className="px-2 py-2 text-right font-medium sm:px-3">Dif.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, index) => {
            const total = index === rows.length - 1 && row.label === "Total";
            return (
              <tr key={row.label} className={cn(total && "bg-muted/30 font-semibold")}>
                <th scope="row" className="wrap-break-word px-2 py-2 text-left font-medium text-foreground sm:px-3">{row.label}</th>
                <td className={amountClass}>{formatEuro(row.left)}</td>
                <td className={amountClass}>{formatEuro(row.right)}</td>
                <td className={cn(amountClass, tolerance === undefined ? diffClass(row.diff) : toleranceDiffClass(row.diff, tolerance))}>{formatEuro(row.diff)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
