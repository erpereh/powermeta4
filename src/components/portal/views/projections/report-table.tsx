"use client";

import type { CSSProperties } from "react";
import { Surface, Table, type TableProps } from "@/components/system";
import type {
  ProjectionPay,
  ProjectionRow,
  ProjectionSection,
} from "@/lib/portal/projections/types";
import { formatProjectionAmount, formatProjectionMoney } from "@/lib/portal/projections/format";
import { cn } from "@/lib/utils";
import styles from "./report-tables.module.css";

export function ProjectionTableAmount({
  value,
  compact = false,
  grouping = true,
}: {
  value: number | null;
  compact?: boolean;
  grouping?: boolean;
}) {
  if (value === null)
    return (
      <>
        <span aria-hidden>—</span>
        <span className="sr-only">No informado</span>
      </>
    );
  const money = formatProjectionMoney(value).replaceAll("\u00a0", " ");
  return compact ? (
    <>
      <span className={styles.mobileMoney} aria-hidden>
        {money}
      </span>
      <span className={styles.desktopMoney} aria-hidden>
        {formatProjectionAmount(value, grouping)}
      </span>
      <span className="sr-only">{money}</span>
    </>
  ) : (
    money
  );
}

export function ReportTable({
  section,
  pays,
}: {
  section: ProjectionSection;
  pays: ProjectionPay[];
}) {
  const payTable = section.layout === "pays";
  const payWeight = (pay: ProjectionPay) =>
    pays.length <= 15 && pay.label.split(/\s+/).length > 2 ? 1.25 : 1;
  const columns: TableProps<ProjectionRow>["columns"] = [
    {
      key: "label",
      header: ["target", "christmas", "vehicle"].includes(section.id) ? (
        ""
      ) : (
        <>
          {section.title}
          {payTable ? <span className={styles.desktopMoney}> (€)</span> : null}
        </>
      ),
      width: "var(--projection-concept-width)",
      cell: (row) => (
        <span className={cn(styles.concept, row.subtotal && "font-semibold")}>{row.label}</span>
      ),
    },
  ];
  if (payTable)
    pays.forEach((pay, index) =>
      columns.push({
        key: pay.id,
        width:
          payWeight(pay) > 1
            ? "var(--projection-long-pay-width, var(--projection-pay-width))"
            : "var(--projection-pay-width)",
        align: "right",
        header: (
          <span className={styles.payHeading}>
            {pay.label}
            <span className="sr-only">
              {" "}
              ·{" "}
              {pay.kind === "actual"
                ? "Real"
                : pay.kind === "projected"
                  ? "Proyectada"
                  : "Sin clasificar"}
            </span>
          </span>
        ),
        cell: (row) => (
          <span
            className={cn(
              styles.amount,
              row.subtotal && "font-semibold",
              pay.kind === "projected" && "text-muted-foreground",
            )}
          >
            <ProjectionTableAmount
              value={row.amounts[index] ?? null}
              compact
              grouping={pays.length <= 15}
            />
          </span>
        ),
      }),
    );
  if (section.layout === "ppse")
    ["Ordinaria", "Extraordinaria"].forEach((label, index) =>
      columns.push({
        key: label,
        header: (
          <>
            {index === 0 ? "Ord" : "Ext"}
            <span className="sr-only"> · {label}</span>
          </>
        ),
        width: "var(--projection-pay-width)",
        align: "right",
        cell: (row) => (
          <span className={cn(styles.amount, row.subtotal && "font-semibold")}>
            <ProjectionTableAmount value={row.amounts[index] ?? null} />
          </span>
        ),
      }),
    );
  columns.push({
    key: "total",
    align: "right",
    width: "var(--projection-total-width)",
    header:
      section.id === "target" ? (
        ""
      ) : section.id === "christmas" || section.id === "vehicle" ? (
        "Importe anual"
      ) : section.layout === "annual" ? (
        <>
          Valoración <wbr />
          Proyectado/
          <wbr />
          Acum.
        </>
      ) : (
        "Total"
      ),
    cell: (row) => (
      <span className={cn(styles.amount, "font-medium", row.subtotal && "font-semibold")}>
        <ProjectionTableAmount value={row.total} />
      </span>
    ),
  });
  const sizing: CSSProperties & {
    "--projection-pay-count": number;
    "--projection-total-weight": number;
    "--projection-natural-width": string;
  } = {
    "--projection-pay-count": Math.max(1, pays.length),
    "--projection-total-weight": Math.max(
      1,
      pays.reduce((total, pay) => total + payWeight(pay), 0),
    ),
    "--projection-natural-width": `${160 + pays.length * 110 + 110}px`,
  };
  return (
    <div
      className={cn(
        styles.table,
        payTable ? styles.pays : section.layout === "ppse" ? styles.ppse : styles.annual,
        payTable && pays.length > 15 && styles.manyPays,
        section.id === "target" && styles.reference,
        section.id === "defined" && styles.defined,
      )}
      style={sizing}
      data-projection-table={section.id}
    >
      <Surface flush aria-label={section.title}>
        <Table
          data={section.rows}
          columns={columns}
          getRowId={(row) => row.id}
          getSectionRow={(row) =>
            row.kind === "section" ? <span className={styles.sectionTitle}>{row.label}</span> : null
          }
          autoHeight
          variableRowHeight
          rowHeight={32}
          minColumnWidth={0}
          scrollAreaLabel={`Desglose de ${section.title}`}
        />
      </Surface>
    </div>
  );
}
