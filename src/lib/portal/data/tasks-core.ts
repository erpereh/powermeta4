import type { SoapRecord } from "../soap/types";

/** Una línea de tareas/validaciones de `PGCO_ES_WS_VALIDATIONS`. */
export type PortalTaskLine = {
  readonly kind: "task" | "validation" | "valuation";
  readonly level: string | null;
  readonly title: string;
  readonly tooltip: string | null;
  readonly count: number | null;
  readonly deadline: string | null;
  readonly lastUpdate: string | null;
  /** Ruta JSP del original (`sse_g4/...jsp`) cuando la línea enlaza una pantalla. */
  readonly source: string | null;
};

const clean = (value: string | undefined): string | null => {
  const text = value?.trim() ?? "";
  return text === "" ? null : text;
};

const toCount = (value: string | undefined): number | null => {
  if (value === undefined || value.trim() === "") return null;
  const number = Number(value.replace(",", "."));
  return Number.isFinite(number) ? Math.trunc(number) : null;
};

/** Extrae `carpeta/pagina.jsp` de un enlace del portal clásico. */
export const jspSourceFromLink = (link: string | null): string | null => {
  if (!link) return null;
  const match = /(?:JSP\/|\/)?([a-z0-9_]+\/[a-z0-9_]+\.jsp)/i.exec(link.replaceAll("\\", "/"));
  return match ? match[1].toLowerCase() : null;
};

const isoDate = (value: string | null): string | null =>
  value && /^\d{4}-\d{2}-\d{2}/.test(value) && !value.startsWith("4000-01-01")
    ? value.slice(0, 10)
    : null;

/** Interpreta los registros según el método llamado; nunca rellena huecos. */
export const mapTaskRecords = (
  kind: PortalTaskLine["kind"],
  records: readonly SoapRecord[],
): PortalTaskLine[] =>
  records.flatMap((record) => {
    const title =
      clean(kind === "validation" ? record.PGCO_VAL_TITLE : record.PGCO_TASK_TITLE) ??
      clean(record.PGCO_TITLE);
    if (!title) return [];
    const link =
      clean(kind === "validation" ? record.PGCO_VAL_LINK : record.PGCO_TASK_LINK) ??
      clean(record.PGCO_LINK_LEVEL) ??
      clean(record.PGCO_DESC_LINK);
    return [
      {
        kind,
        level: clean(record.PGCO_LEVEL),
        title,
        tooltip:
          clean(kind === "validation" ? record.PGCO_VAL_TOOLTIP : record.PGCO_TASK_TOOLTIP) ??
          clean(record.PGCO_TOOLTIP),
        count:
          toCount(kind === "validation" ? record.PGCO_VAL_COUNT : record.PGCO_TASK_COUNT) ??
          toCount(record.PGCO_COUNT_LEVEL),
        deadline: isoDate(clean(record.PGCO_TASK_DT_DEADLINE)),
        lastUpdate: isoDate(clean(record.PGCO_LAST_UPDATE)),
        source: jspSourceFromLink(link),
      },
    ];
  });
