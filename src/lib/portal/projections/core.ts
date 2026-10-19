import { decodeXmlEntities } from "@/lib/meta4/format-profile-field";
import type { PortalSqlRow } from "../peoplenet/query";
import type { PortalPerson } from "../identity-core";
import type {
  ProjectionHistory,
  ProjectionReport,
  ProjectionRow,
  ProjectionSegment,
} from "./types";
import { buildProjectionTables, sumProjectionAmounts, type ProjectionBlocks } from "./tables";

export const projectionNumber = (value: unknown): number | null => {
  if (typeof value !== "number" && typeof value !== "string") return null;
  if (typeof value === "string" && !value.trim()) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const text = (value: unknown): string | null => {
  if (value === null || value === undefined) return null;
  const raw = value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
  return decodeXmlEntities(raw).trim() || null;
};

const key = (value: string) =>
  value
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replaceAll(/[.\s_-]+/g, " ")
    .trim();
export const payField = (index: number) => `PAGA${String(index + 1).padStart(2, "0")}`;

/** La cabecera actual no tiene ANIO: se obtiene de las etiquetas de sus pagas. */
export const projectionHeaderYear = (row: PortalSqlRow): number | null => {
  const stored = projectionNumber(row.ANIO);
  if (stored !== null && Number.isInteger(stored) && stored >= 1900 && stored <= 2099)
    return stored;
  const years = Array.from({ length: 20 }, (_, index) => text(row[payField(index)])).flatMap(
    (label) =>
      [...(label ?? "").matchAll(/\b((?:19|20)\d{2})\b/g)].map((match) => Number(match[1])),
  );
  return years.length ? Math.max(...years) : null;
};

/**
 * Bloques de `CSP_RP_PROYECCIONES.CSP_CARGA`: cada nodo filtra
 * `CSP_ID_GRUPO = K AND CSP_ID_SUBGR IN (Z)`. Los conceptos de cada persona
 * salen de sus filas; las filas de otros grupos (G, RET…) no se pintan.
 */
export const PROJECTION_BLOCKS = {
  salary: ["RD", "SC"],
  company: ["RD", "CC"],
  functional: ["RD", "CF"],
  variable: ["RD", "RV"],
  target: ["RD", "RTV"],
  social: ["RD", "SS"],
  aid: ["RI", "AYD"],
  capital: ["RI", "SG"],
  retirement: ["JUB", "CJ"],
  ppse: ["PPSE", "PPSE"],
  defined: ["PPSE", "APOR"],
  flexibleAnnual: ["RI", "RFA"],
  training: ["FORM", "FE"],
  species: ["RI", "VE"],
  travel: ["RI", "DK"],
  meals: ["RI", "CO"],
  flexible: ["RI", "RFX"],
  quinquennial: ["RQ", "RA"],
} as const satisfies Record<string, readonly [string, string]>;

export type ProjectionBlockId = keyof typeof PROJECTION_BLOCKS;

const mapBlocks = <T>(map: (id: ProjectionBlockId) => T): Record<ProjectionBlockId, T> => ({
  salary: map("salary"),
  company: map("company"),
  functional: map("functional"),
  variable: map("variable"),
  target: map("target"),
  social: map("social"),
  aid: map("aid"),
  capital: map("capital"),
  retirement: map("retirement"),
  ppse: map("ppse"),
  defined: map("defined"),
  flexibleAnnual: map("flexibleAnnual"),
  training: map("training"),
  species: map("species"),
  travel: map("travel"),
  meals: map("meals"),
  flexible: map("flexible"),
  quinquennial: map("quinquennial"),
});

/** Suma SQL (`#SUM`): ignora nulos y solo es desconocida si no hay ningún importe. */
const sqlSum = (values: readonly (number | null)[]): number | null => {
  const known = values.filter((value): value is number => value !== null);
  return known.length
    ? Math.round(known.reduce((total, value) => total + value, 0) * 100) / 100
    : null;
};

const sum = sumProjectionAmounts;

export const projectionGraphTotal = (segments: readonly ProjectionSegment[]): number | null =>
  sum(segments.map((segment) => segment.value));

/** `PAGAnn` con nn en 1..20, como `ClcExecuteLN4JIT("…PAGA" + nn)`. */
const payAt = (raw: PortalSqlRow | undefined, pay: number | null): number | null =>
  raw && pay !== null && Number.isInteger(pay) && pay >= 1 && pay <= 20
    ? projectionNumber(raw[payField(pay - 1)])
    : null;

/** Valoración fija de la Ayuda Consumo en `printGrafDoughnut`. */
export const PROJECTION_CONSUMPTION_AID = 100;

/** `printGrafBar` solo pinta la comparativa desde este ejercicio. */
export const PROJECTION_HISTORY_FIRST_YEAR = 2018;

/**
 * Barra de un ejercicio en `printGrafBar`: filas RQ/RA «Retrib anual/variable año
 * actual»; el TOTAL si el ejercicio está cerrado y la paga real si es el vigente.
 * Un concepto ausente cuenta como 0, igual que `|| 0` en el original.
 */
export const projectionQuinquennial = (
  header: PortalSqlRow,
  concepts: readonly PortalSqlRow[],
  today = new Date(),
): { fixed: number; variable: number } => {
  const year = projectionHeaderYear(header);
  const real = projectionNumber(header.CSP_REAL);
  const closed = year !== null && year < today.getFullYear();
  const [group, subgroup] = PROJECTION_BLOCKS.quinquennial;
  const value = (name: string) => {
    const raw = concepts.find(
      (row) =>
        text(row.CSP_ID_GRUPO) === group &&
        text(row.CSP_ID_SUBGR) === subgroup &&
        key(text(row.ID_ITEM) ?? "") === key(name),
    );
    if (!raw) return 0;
    return (closed ? projectionNumber(raw.TOTAL) : payAt(raw, real)) ?? 0;
  };
  return { fixed: value("Retrib anual año actual"), variable: value("Retrib variable año actual") };
};

/** Primera paga con importe positivo de la primera fila (AUXINDICE del JSON). */
const firstPaidPay = (rows: readonly PortalSqlRow[]): number | null => {
  const first = rows[0];
  if (!first) return null;
  const index = Array.from({ length: 20 }, (_, pay) => pay).find(
    (pay) => (projectionNumber(first[payField(pay)]) ?? 0) > 0,
  );
  return index === undefined ? null : index + 1;
};

export const buildProjectionReport = ({
  header,
  concepts,
  person,
  history = [],
  today = new Date(),
}: {
  header: PortalSqlRow;
  concepts: readonly PortalSqlRow[];
  person: PortalPerson;
  history?: ProjectionHistory[];
  today?: Date;
}): ProjectionReport | null => {
  const year = projectionHeaderYear(header);
  if (year === null) return null;
  const rawRealPays = projectionNumber(header.CSP_REAL);
  const realPays =
    rawRealPays !== null && Number.isInteger(rawRealPays) && rawRealPays >= 0 && rawRealPays <= 20
      ? rawRealPays
      : null;
  const lastPay =
    Array.from({ length: 20 }, (_, index) => index)
      .filter(
        (index) =>
          text(header[payField(index)]) !== null ||
          concepts.some((row) => {
            const value = projectionNumber(row[payField(index)]);
            return value !== null && value !== 0;
          }),
      )
      .at(-1) ?? -1;
  const pays = Array.from({ length: 20 }, (_, index) => ({
    id: payField(index),
    label: text(header[payField(index)]) ?? `Paga ${index + 1} · Nombre no informado`,
    kind:
      realPays === null
        ? ("unknown" as const)
        : index < realPays
          ? ("actual" as const)
          : ("projected" as const),
  })).slice(0, lastPay + 1);

  const source = [...concepts].sort(
    (a, b) => (projectionNumber(a.CSP_ORDEN) ?? 0) - (projectionNumber(b.CSP_ORDEN) ?? 0),
  );
  const raws = mapBlocks((id) => {
    const [group, subgroup] = PROJECTION_BLOCKS[id];
    return source.filter(
      (raw) => text(raw.CSP_ID_GRUPO) === group && text(raw.CSP_ID_SUBGR) === subgroup,
    );
  });
  const label = (raw: PortalSqlRow) => text(raw.ID_ITEM) ?? "Concepto no informado";
  const find = (block: ProjectionBlockId, name: string) =>
    raws[block].find((raw) => key(label(raw)) === key(name));
  const total = (raw: PortalSqlRow | undefined) => (raw ? projectionNumber(raw.TOTAL) : null);
  const toRow = (raw: PortalSqlRow, index: number): ProjectionRow => ({
    id: `${index}:${text(raw.CSP_ORDEN) ?? ""}:${label(raw)}`,
    kind: "concept",
    label: label(raw),
    amounts: pays.map((pay) => projectionNumber(raw[pay.id])),
    total: projectionNumber(raw.TOTAL),
    subtotal: false,
  });
  const blocks: ProjectionBlocks = mapBlocks((id) => raws[id].map(toRow));

  // Valoraciones anuales del JSON: importe de la paga real o de la primera paga cobrada.
  const valued = (block: ProjectionBlockId, pay: number | null) =>
    raws[block].map((raw, index) => ({
      ...toRow(raw, index),
      amounts: [],
      total: payAt(raw, pay),
    }));
  const fixedTotal = sqlSum(
    [...raws.salary, ...raws.company, ...raws.functional].map((raw) => total(raw)),
  );
  const variableTotal = sqlSum(raws.variable.map((raw) => total(raw)));
  const targets = valued("target", realPays);
  const ppseOrdinary = total(find("ppse", "Aportación Ordinaria PPSE")) ?? 0;
  const ppseExtra = total(find("ppse", "Aportación Extraordinaria PPSE")) ?? 0;
  const definedLast = payAt(find("defined", "Aportación definida"), realPays) ?? 0;
  const definedAccumulated = payAt(find("defined", "aportacion total"), realPays) ?? 0;
  const sections = buildProjectionTables(blocks, {
    fixedTotal: {
      amounts: pays.map((pay) =>
        sqlSum(
          [...raws.salary, ...raws.company, ...raws.functional].map((raw) =>
            projectionNumber(raw[pay.id]),
          ),
        ),
      ),
      total: fixedTotal,
    },
    variableTotal: {
      amounts: pays.map((pay) => sqlSum(raws.variable.map((raw) => projectionNumber(raw[pay.id])))),
      total: variableTotal,
    },
    targets,
    capital: valued("capital", firstPaidPay(raws.capital)),
    aid: valued("aid", firstPaidPay(raws.aid)),
    ppse: {
      ordinary: ppseOrdinary,
      extra: ppseExtra,
      ordinaryAccumulated: total(find("ppse", "Aportación PPSE Ordinaria Acumulada")) ?? 0,
      extraAccumulated: total(find("ppse", "Aportación PPSE Extraordinaria Acumulada")) ?? 0,
    },
    defined: { last: definedLast, accumulated: definedAccumulated },
    flexibleExtra: raws.flexibleAnnual
      .filter((raw) => key(label(raw)) === key("Acciones GCO"))
      .map((raw, index) => toRow(raw, raws.flexible.length + index)),
  });

  // printGrafDoughnut · getSetup00: Retribución directa.
  const direct: ProjectionSegment[] = [];
  if (raws.salary.length || raws.company.length || raws.functional.length)
    direct.push({ id: "fixed", label: "RBFA", value: fixedTotal });
  if (raws.variable.length)
    direct.push({
      id: "variable",
      label: "R. Variable",
      value: variableTotal !== 0 ? variableTotal : sum(targets.slice(0, 2).map((row) => row.total)),
    });
  const socialCost = find("social", "Coste S.S. empresa");
  if (socialCost)
    direct.push({
      id: "social",
      label: "Coste Empresa SS",
      value: total(socialCost),
    });

  // getSetup01: Compensación total. Un ejercicio cerrado usa el TOTAL; el vigente, la paga real.
  const closed = year < today.getFullYear();
  const notices: string[] = [];
  const compensation: ProjectionSegment[] = [];
  const quinquennial = (name: string) => {
    const raw = find("quinquennial", name);
    return raw ? (closed ? total(raw) : payAt(raw, realPays)) : undefined;
  };
  const annualFixed = quinquennial("Retrib anual año actual");
  const annualVariable = quinquennial("Retrib variable año actual");
  if (annualFixed !== undefined)
    compensation.push({ id: "fixed", label: "RBFA", value: annualFixed });
  if (annualVariable !== undefined)
    compensation.push({ id: "variable", label: "Target R. Variable", value: annualVariable });
  const add = (id: string, segmentLabel: string, value: number | null) =>
    compensation.push({ id, label: segmentLabel, value });
  if (closed) {
    const meals = find("meals", "Compensacion Comida");
    if (meals) add("meals", "Manutención por J.P.", total(meals));
  } else {
    const meals = find("flexible", "Manutención");
    if (meals) add("meals", "Manutención", payAt(meals, realPays === null ? null : realPays + 1));
  }
  const addTotal = (id: string, segmentLabel: string, block: ProjectionBlockId, name: string) => {
    const raw = find(block, name);
    if (raw) add(id, segmentLabel, total(raw));
  };
  addTotal("travel", "Kilometrajes", "travel", "Kilometraje No Exento");
  addTotal("life", "Prima Seguro Vida", "species", "Prima Anual Seg. Vida");
  addTotal("accidents", "Prima Seguro Accidentes", "species", "Prima Anual Seg. Accidente");
  const health = find("species", "Seguro Salud Empresa");
  if (health) {
    const monthly = payAt(health, firstPaidPay(raws.species));
    add(
      "health",
      "Prima Seguro de Salud",
      monthly === null ? null : Math.round(monthly * 1200) / 100,
    );
  }
  if (raws.ppse.length) add("ppse", "Apt. PPSE año Anterior", sum([ppseOrdinary, ppseExtra]));
  if (raws.defined.length) add("defined", "A. Seg. Aport. Definida", definedLast);
  addTotal("christmas", "Cesta de Navidad", "species", "Lote Navidad");
  addTotal("children", "Ayuda Estudios Hijos", "aid", "Ayuda Escolar hijos");
  // El original valora la tarjeta comida en 100 € fijos (`datos.push(100)`).
  if (find("meals", "Comida Tarjeta Importe"))
    add("consumption", "Ayuda Consumo", PROJECTION_CONSUMPTION_AID);
  addTotal("training", "Formación Año Anterior", "training", "Formación Año Anterior");
  addTotal("scholarship", "Becas de empleados", "aid", "Becas de empleados");

  // getSetup02: Retribución flexible, solo si la persona tiene el bloque RI/RFA.
  const flexible: ProjectionSegment[] = raws.flexibleAnnual.map((raw, index) => {
    const name = label(raw);
    const value = key(name) === key("Acciones GCO") ? total(raw) : payAt(raw, realPays);
    return {
      id: `flexible:${index}`,
      label: name.replace("Coste ", ""),
      value: value === null ? null : Math.abs(value),
    };
  });

  if (realPays === null)
    notices.push("No está informado qué pagas son reales y cuáles son proyectadas.");
  return {
    year,
    employee: {
      id: person.employeeId,
      // Como el original: nombre y primer apellido de la cabecera de la proyección.
      name:
        [text(header.STD_N_FIRST_NAME), text(header.STD_N_FAMILY_NAME_1)]
          .filter(Boolean)
          .join(" ") || person.fullName,
      category: text(header.SSP_NM_CATEGORIA),
      workCenter: text(header.SCO_N_WORK_LOCATION),
    },
    calculatedAt: text(header.CSP_FEC_EJECUCION),
    pays,
    sections,
    direct,
    compensation,
    flexible,
    history: history
      .filter((entry) => entry.year <= year)
      .sort((a, b) => a.year - b.year)
      .slice(-5),
    notices,
  };
};
