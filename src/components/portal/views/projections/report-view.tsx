"use client";

import { CalendarDays, Download, FileChartColumn, ShieldCheck, Wallet } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId, useTransition } from "react";
import {
  AnimatedNumber,
  ButtonLink,
  Callout,
  EmptyState,
  Section,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  StatTile,
  Surface,
  Table,
  DonutChart,
  DonutChartCenter,
  DonutChartLegend,
  DonutChartPlot,
  CompositionChart,
} from "@/components/system";
import type { ProjectionPageData, ProjectionSegment } from "@/lib/portal/projections/types";
import { projectionGraphTotal } from "@/lib/portal/projections/core";
import { formatProjectionMoney as money } from "@/lib/portal/projections/format";
import { ProjectionTableAmount, ReportTable } from "./report-table";

const chartColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--tone-teal-foreground)",
  "var(--tone-rose-foreground)",
  "var(--tone-violet-foreground)",
  "var(--tone-amber-foreground)",
  "var(--tone-green-foreground)",
  "var(--tone-slate-foreground)",
  "var(--tone-orange-foreground)",
] as const;
const date = (iso: string | null) =>
  iso && /^\d{4}-\d{2}-\d{2}/.test(iso)
    ? iso.slice(0, 10).split("-").reverse().join("/")
    : "No informada";

function BreakdownChart({
  title,
  description,
  segments,
}: {
  title: string;
  description: string;
  segments: ProjectionSegment[];
}) {
  const total = projectionGraphTotal(segments);
  const hasNegative = segments.some((segment) => segment.value !== null && segment.value < 0);
  const available = segments
    .filter((segment) => segment.value !== null && segment.value > 0)
    .map((segment, index) => ({
      id: segment.id,
      name: segment.label,
      value: segment.value ?? 0,
      color: chartColors[index % chartColors.length],
    }));
  return (
    <Surface title={title} description={description}>
      {available.length && !hasNegative ? (
        <DonutChart
          segments={available}
          label={title}
          formatValue={money}
          thickness={18}
          rounded={segments.length <= 5}
          gap={segments.length <= 5 ? 1 : 0}
        >
          <div className="flex min-w-0 flex-col gap-5">
            <DonutChartPlot className="mx-auto w-full max-w-60">
              <DonutChartCenter>
                {(active, availableTotal) => (
                  <div className="space-y-1">
                    <p className="text-lg font-semibold tracking-tight tabular-nums sm:text-xl">
                      {money(active?.value ?? availableTotal)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {active
                        ? `${(active.share * 100).toLocaleString("es-ES", { maximumFractionDigits: 1 })} %`
                        : total === null
                          ? "Importes disponibles"
                          : "Total anual"}
                    </p>
                  </div>
                )}
              </DonutChartCenter>
            </DonutChartPlot>
            <DonutChartLegend
              className="[&_button]:px-2 [&_button]:py-1.5"
              renderValue={(segment) => (
                <span className="flex flex-col gap-0.5 text-xs">
                  <span className="font-medium">{money(segment.value)}</span>
                  <span className="text-muted-foreground">
                    {(segment.share * 100).toLocaleString("es-ES", { maximumFractionDigits: 1 })} %
                  </span>
                </span>
              )}
            />
          </div>
        </DonutChart>
      ) : (
        <EmptyState
          title={
            hasNegative
              ? "Este desglose contiene ajustes negativos"
              : "Sin importes para la gráfica"
          }
          description={
            hasNegative
              ? "Los ajustes no se representan como porcentajes. Consulta sus importes completos."
              : "El desglose se mostrará cuando existan datos de este ejercicio."
          }
        />
      )}
      {hasNegative ? (
        <dl className="mt-3 divide-y divide-border">
          {segments.map((segment) => (
            <div key={segment.id} className="flex justify-between gap-3 py-2 text-sm">
              <dt>{segment.label}</dt>
              <dd className="shrink-0 tabular-nums">{money(segment.value)}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {!hasNegative && segments.some((segment) => segment.value === 0) ? (
        <dl className="mt-3 space-y-2 text-sm">
          {segments
            .filter((segment) => segment.value === 0)
            .map((segment) => (
              <div key={segment.id} className="flex flex-wrap justify-between gap-2 px-2">
                <dt className="min-w-0 flex-1 basis-36">{segment.label}</dt>
                <dd className="shrink-0 text-right text-xs tabular-nums">
                  {money(0)} <span className="text-muted-foreground">· 0 %</span>
                </dd>
              </div>
            ))}
        </dl>
      ) : null}
      {segments.some((segment) => segment.value === null) ? (
        <p className="mt-3 text-xs text-muted-foreground">
          No informado:{" "}
          {segments
            .filter((segment) => segment.value === null)
            .map((segment) => segment.label)
            .join(" · ")}
          . Los porcentajes corresponden a los importes disponibles.
        </p>
      ) : null}
    </Surface>
  );
}

export function ProjectionReportView({
  data,
  debug = false,
}: {
  data: ProjectionPageData;
  debug?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();
  const selectId = useId();
  const scenario = params.get("scenario");
  const scenarioLabel =
    scenario === "partial"
      ? "Datos parciales"
      : scenario === "empty"
        ? "Sin datos"
        : scenario === "many-pays"
          ? "20 pagas"
          : "Completo";
  const navigate = (name: "year" | "scenario", value: string) => {
    const next = new URLSearchParams();
    const year = name === "year" ? value : params.get("year");
    if (year) next.set("year", year);
    const scenario = name === "scenario" ? value : params.get("scenario");
    if (debug && scenario && scenario !== "full") next.set("scenario", scenario);
    startTransition(() => router.push(`${pathname}?${next}`, { scroll: false }));
  };
  const report = data.report;
  const benefitTables =
    report?.sections.filter((section) => section.placement === "benefits") ?? [];
  const documents = data.documents.filter((doc) => doc.year === data.selectedYear);
  return (
    <div className="flex min-w-0 flex-col gap-6" aria-busy={pending} data-projection-report>
      {debug ? (
        <Callout status="info" title="Vista de desarrollo · Datos ficticios">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              Esta muestra permite revisar el informe sin consultar Meta4 ni guardar datos de
              empleado.
            </p>
            <Select
              value={params.get("scenario") ?? "full"}
              onValueChange={(value) => navigate("scenario", value)}
            >
              <SelectTrigger aria-label="Escenario de desarrollo" className="w-40">
                <span>{scenarioLabel}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Completo</SelectItem>
                <SelectItem value="partial">Datos parciales</SelectItem>
                <SelectItem value="empty">Sin datos</SelectItem>
                <SelectItem value="many-pays">20 pagas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Callout>
      ) : null}
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            Compensación total{data.selectedYear ? ` · ${data.selectedYear}` : ""}
          </h2>
          {report ? (
            <>
              <p className="text-sm font-medium">
                {report.employee.name}{" "}
                <span className="font-normal text-muted-foreground">· {report.employee.id}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {[report.employee.category, report.employee.workCenter].filter(Boolean).join(" · ")}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" aria-hidden />
                Calculada el {date(report.calculatedAt)}
              </p>
            </>
          ) : null}
        </div>
        <div className="flex flex-wrap items-end gap-3">
          {data.years.length ? (
            <div className="space-y-1">
              <span id={selectId} className="block text-xs text-muted-foreground">
                Ejercicio
              </span>
              <Select
                value={String(data.selectedYear ?? "")}
                disabled={pending}
                onValueChange={(value) => navigate("year", value)}
              >
                <SelectTrigger aria-labelledby={selectId} className="w-28">
                  <span>{data.selectedYear}</span>
                </SelectTrigger>
                <SelectContent>
                  {data.years.map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null}
          {documents.map((doc) => (
            <ButtonLink key={doc.href} href={doc.href} download variant="outline" size="sm">
              <Download className="size-4" aria-hidden />
              Descargar PDF original<span className="sr-only"> · {doc.label}</span>
            </ButtonLink>
          ))}
        </div>
      </div>
      {data.notices.length ? (
        <Callout status="info" title="Información pendiente">
          <ul className="space-y-1">
            {data.notices.map((notice) => (
              <li key={notice}>{notice}</li>
            ))}
          </ul>
        </Callout>
      ) : null}
      {!report ? (
        <EmptyState
          icon={<FileChartColumn />}
          title="Sin desglose de proyecciones"
          description={
            documents.length
              ? "Puedes descargar el documento original de este ejercicio. Su desglose no está disponible."
              : "No hay una proyección calculada disponible para este ejercicio."
          }
        />
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            Proyección teórica de haberes y beneficios. Las pagas proyectadas son estimaciones y no
            equivalen a una nómina abonada.
          </p>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Retribución fija",
                value: report.direct[0]?.value ?? null,
                icon: Wallet,
                note: "Total de haberes del informe",
              },
              {
                label: "Retribución variable",
                value: report.direct[1]?.value ?? null,
                icon: Wallet,
                note: report.direct[1]?.label ?? "Importe no informado",
              },
              {
                label: "Seguridad Social",
                value: report.direct[2]?.value ?? null,
                icon: ShieldCheck,
                note: "Coste de la empresa",
              },
              {
                label: "Compensación total",
                value: projectionGraphTotal(report.compensation),
                icon: FileChartColumn,
                note: "Retribución, objetivo y beneficios",
              },
            ].map((tile) => (
              <StatTile
                key={tile.label}
                label={tile.label}
                icon={tile.icon}
                note={tile.note}
                value={
                  tile.value === null ? (
                    <span className="text-sm font-normal text-muted-foreground">No informado</span>
                  ) : (
                    <>
                      <span className="sr-only">{money(tile.value)}</span>
                      <span aria-hidden>
                        <AnimatedNumber value={tile.value} format={money} duration={0.5} />
                      </span>
                    </>
                  )
                }
              />
            ))}
          </div>
          <div className="grid min-w-0 items-start gap-4 lg:grid-cols-2">
            <BreakdownChart
              title="Retribución directa"
              description="Haberes fijos, variable y coste de Seguridad Social"
              segments={report.direct}
            />
            <BreakdownChart
              title="Compensación total"
              description="Retribución anual, objetivo variable y beneficios"
              segments={report.compensation}
            />
          </div>
          {report.notices.length ? (
            <Callout status="info" title="Sobre los importes de este informe">
              <ul className="space-y-1">
                {report.notices.map((notice) => (
                  <li key={notice}>{notice}</li>
                ))}
              </ul>
            </Callout>
          ) : null}
          <Section
            title="Desglose de haberes y beneficios"
            description="Todos los conceptos y pagas del ejercicio, en el orden del informe."
          >
            <div className="flex min-w-0 flex-col items-start gap-4">
              {report.sections.map((section) =>
                section.placement === "benefits" ? (
                  section.id === benefitTables[0]?.id ? (
                    <div
                      key="benefits"
                      data-projection-benefits
                      className="flex max-w-full flex-wrap items-start gap-4"
                    >
                      {benefitTables.map((entry) => (
                        <ReportTable key={entry.id} section={entry} pays={report.pays} />
                      ))}
                    </div>
                  ) : null
                ) : (
                  <div
                    key={section.id}
                    className={
                      section.placement === "wide" ? "w-full min-w-0" : "max-w-full min-w-0"
                    }
                  >
                    <ReportTable section={section} pays={report.pays} />
                  </div>
                ),
              )}
            </div>
          </Section>
          <Section
            title="Comparativa de retribución de los últimos cinco años"
            description="Retribución fija y variable en euros; solo ejercicios con datos disponibles."
          >
            <Surface>
              {report.history.length ? (
                <>
                  <CompositionChart
                    scale="absolute"
                    periods={report.history.map((entry) => String(entry.year))}
                    formatValue={money}
                    label="Retribución fija y variable por ejercicio"
                    series={[
                      {
                        id: "fixed",
                        name: "Retribución fija",
                        color: chartColors[0],
                        values: report.history.map((entry) => entry.fixed),
                      },
                      {
                        id: "variable",
                        name: "Retribución variable",
                        color: chartColors[1],
                        values: report.history.map((entry) => entry.variable),
                      },
                    ]}
                  />
                  <div className="mt-5">
                    <Table
                      data={report.history}
                      columns={[
                        { key: "year", header: "Ejercicio", width: "120px" },
                        {
                          key: "fixed",
                          header: "Retribución fija",
                          width: "180px",
                          align: "right",
                          cell: (row) => <ProjectionTableAmount value={row.fixed} />,
                        },
                        {
                          key: "variable",
                          header: "Retribución variable",
                          width: "180px",
                          align: "right",
                          cell: (row) => <ProjectionTableAmount value={row.variable} />,
                        },
                      ]}
                      autoHeight
                      variableRowHeight
                      className="[&_th:first-child]:left-0 [&_th:first-child]:z-20 [&_td:first-child]:sticky [&_td:first-child]:left-0 [&_td:first-child]:bg-card"
                      scrollAreaLabel="Importes de la comparativa anual"
                    />
                  </div>
                </>
              ) : (
                <EmptyState
                  title="Sin histórico comparable"
                  description="La comparativa aparecerá cuando existan cifras económicas de ejercicios anteriores."
                />
              )}
            </Surface>
          </Section>
        </>
      )}
    </div>
  );
}
