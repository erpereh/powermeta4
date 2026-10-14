import { decodeXmlEntities } from "@/lib/meta4/format-profile-field";
import type { PortalSqlRow } from "../peoplenet/query";
import type { PortalPerson } from "../identity-core";
import type {
  ProjectionHistory,
  ProjectionReport,
  ProjectionRow,
  ProjectionSection,
  ProjectionSegment,
} from "./types";

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
    .replaceAll(/[\u0300-\u036f]/g, "")
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

// Etiquetas literales del JSP y de los scripts del informe original. Los
// conceptos desconocidos se conservan en su grupo, nunca se descartan.
const definitions = [
  ["salary", "Salario convenio", "pays", ["Salario Base", "Paga Extra Prorrateada"]],
  [
    "company",
    "Complementos de compañía",
    "pays",
    ["Complemento Personal", "Salario base organigrama"],
  ],
  [
    "functional",
    "Complemento funcional",
    "pays",
    ["Compl Puesto Trabajo", "Total Retribución fija"],
  ],
  [
    "variable",
    "Retribución variable",
    "pays",
    ["Retribución Variable", "Total Retribución variable"],
  ],
  [
    "target",
    "Base de referencia de retribución variable",
    "annual",
    ["Base Referencia Retribucion Variable", "Base Referencia Evaluacion anual"],
  ],
  ["social", "Seguridad Social", "pays", ["Coste S.S. empresa"]],
  [
    "meals",
    "Manutención por jornada partida",
    "pays",
    ["Comida Tarjeta Importe", "Compensacion Comida"],
  ],
  [
    "capital",
    "Capitales de pólizas de seguros",
    "annual",
    ["Capital Seguro Accidentes", "Capital Seguro de Vida Importe"],
  ],
  [
    "premiums",
    "Primas de seguros",
    "annual",
    ["Prima Anual Seg. Accidente", "Prima Anual Seg. Vida", "Seguro Salud Empresa"],
  ],
  ["aid", "Ayudas", "annual", ["Ayuda Escolar hijos", "Becas de empleados", "Ayuda Consumo"]],
  [
    "ppse",
    "Plan de previsión social empresarial",
    "ppse",
    [
      "Aportación Ordinaria PPSE",
      "Aportación Extraordinaria PPSE",
      "Aportación PPSE Ordinaria Acumulada",
      "Aportación PPSE Extraordinaria Acumulada",
    ],
  ],
  [
    "defined",
    "Seguro de aportación definida",
    "annual",
    ["Aportación definida", "aportacion total"],
  ],
  [
    "flexible",
    "Retribución flexible",
    "pays",
    ["Desc. Seguro Medico", "Especie Seguro Medico", "Manutención"],
  ],
  ["christmas", "Lote de Navidad", "annual", ["Lote Navidad"]],
  ["travel", "Dietas y kilometrajes", "pays", ["Kilometraje No Exento"]],
  [
    "training",
    "Inversión individual en formación",
    "annual",
    ["Inversion Individual en Formacion", "Formación Año Anterior"],
  ],
] as const;

const groupTitles: Readonly<Record<string, string>> = {
  RD: "Retribución directa",
  RI: "Retribución indirecta y beneficios sociales",
  PPSE: "Plan de previsión social empresarial",
  RQ: "Compromisos a la jubilación",
  RET: "Retenciones",
};

const sum = (values: readonly (number | null)[]): number | null =>
  values.length && values.every((value) => value !== null)
    ? Math.round(values.reduce<number>((total, value) => total + (value ?? 0), 0) * 100) / 100
    : null;

export const projectionGraphTotal = (segments: readonly ProjectionSegment[]): number | null =>
  sum(segments.map((segment) => segment.value));

export const buildProjectionReport = ({
  header,
  concepts,
  person,
  history = [],
  economic = null,
}: {
  header: PortalSqlRow;
  concepts: readonly PortalSqlRow[];
  person: PortalPerson;
  history?: ProjectionHistory[];
  economic?: ProjectionHistory | null;
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
  const sections = new Map<string, ProjectionSection>();
  const rows = source.map((raw, index) => {
    const label = text(raw.ID_ITEM) ?? "Concepto no informado";
    const definition = definitions.find((entry) =>
      entry[3].some((item) => key(item) === key(label)),
    );
    const group = text(raw.CSP_ID_GRUPO) ?? "Sin grupo";
    const subgroup = text(raw.CSP_ID_SUBGR);
    const id = definition?.[0] ?? `group:${group}:${subgroup ?? ""}`;
    const title =
      definition?.[1] ?? [groupTitles[group] ?? group, subgroup].filter(Boolean).join(" · ");
    const row: ProjectionRow = {
      id: `${index}:${text(raw.CSP_ORDEN) ?? ""}:${label}`,
      label,
      amounts: pays.map((pay) => projectionNumber(raw[pay.id])),
      total: projectionNumber(raw.TOTAL),
      subtotal: /^total\b/i.test(label),
    };
    const section = sections.get(id) ?? { id, title, layout: definition?.[2] ?? "pays", rows: [] };
    section.rows.push(row);
    sections.set(id, section);
    return { raw, row };
  });
  const find = (...names: string[]) =>
    rows.find(({ row }) => names.some((name) => key(name) === key(row.label)));
  const amount = (...names: string[]) => find(...names)?.row.total ?? null;
  const fixed = amount("Total Retribución fija");
  const base = amount("Base Referencia Retribucion Variable");
  const evaluation = find("Base Referencia Evaluacion anual");
  const target = evaluation ? sum([base, evaluation.row.total]) : base;
  const variable = amount("Total Retribución variable", "Retribución Variable");
  const direct: ProjectionSegment[] = [
    { id: "fixed", label: "Retribución bruta fija anual", value: fixed },
    {
      id: "variable",
      label:
        variable === 0 ? "Objetivo de retribución variable" : "Retribución variable del informe",
      value: variable === 0 ? target : variable,
    },
    {
      id: "social",
      label: "Coste de Seguridad Social de la empresa",
      value: amount("Coste S.S. empresa"),
    },
  ];
  const notices: string[] = [];
  const annualFixed = economic?.fixed ?? null;
  const annualVariable = economic?.variable ?? null;
  const compensation: ProjectionSegment[] = [
    { id: "fixed", label: "Retribución bruta fija anual", value: annualFixed },
    { id: "variable", label: "Objetivo de retribución variable", value: annualVariable },
  ];
  const add = (
    id: string,
    label: string,
    name: string,
    transform?: (raw: PortalSqlRow, total: number | null) => number | null,
  ) => {
    const entry = find(name);
    if (entry)
      compensation.push({
        id,
        label,
        value: transform ? transform(entry.raw, entry.row.total) : entry.row.total,
      });
  };
  add("meals", "Manutención", "Manutención", (raw) =>
    realPays === null ? null : projectionNumber(raw[payField(realPays)]),
  );
  if (!find("Manutención")) add("meals", "Manutención", "Compensacion Comida");
  add("travel", "Kilometrajes", "Kilometraje No Exento");
  add("life", "Prima de seguro de vida", "Prima Anual Seg. Vida");
  add("accidents", "Prima de seguro de accidentes", "Prima Anual Seg. Accidente");
  add("health", "Prima de seguro de salud", "Seguro Salud Empresa", (raw) => {
    const monthly =
      realPays === null || realPays < 1 ? null : projectionNumber(raw[payField(realPays - 1)]);
    return monthly === null ? null : Math.round(monthly * 1200) / 100;
  });
  const ordinary = amount("Aportación Ordinaria PPSE");
  const extra = amount("Aportación Extraordinaria PPSE");
  if (sections.has("ppse"))
    compensation.push({
      id: "ppse",
      label: "Aportación al PPSE del último año",
      value: sum([
        ordinary,
        ordinary !== null && extra !== null ? Math.min(ordinary, extra) : extra,
      ]),
    });
  add("defined", "Seguro de aportación definida", "Aportación definida", (raw) =>
    realPays === null || realPays < 1 ? null : projectionNumber(raw[payField(realPays - 1)]),
  );
  add("christmas", "Cesta de Navidad", "Lote Navidad");
  add("children", "Ayuda para estudios de hijos", "Ayuda Escolar hijos");
  add("scholarship", "Becas de empleados", "Becas de empleados");
  add("consumption", "Ayuda de consumo", "Ayuda Consumo");
  add("training", "Formación del año anterior", "Formación Año Anterior");
  if (find("Comida Tarjeta Importe") && !find("Ayuda Consumo"))
    notices.push(
      "Ayuda de consumo: importe no disponible. El informe no aplica una valoración fija.",
    );
  if (annualFixed === null || annualVariable === null)
    notices.push(
      "Faltan las cifras económicas de este ejercicio para completar la compensación total.",
    );
  if (realPays === null)
    notices.push("No está informado qué pagas son reales y cuáles son proyectadas.");
  // El PPSE usa aportaciones ordinarias/extraordinarias, no columnas de paga.
  const ppse = sections.get("ppse");
  const ordinaryAccumulated = amount("Aportación PPSE Ordinaria Acumulada");
  const extraAccumulated = amount("Aportación PPSE Extraordinaria Acumulada");
  if (ppse) {
    const capped = ordinary !== null && extra !== null ? Math.min(ordinary, extra) : null;
    const ordinaryTotal = sum([ordinary, ordinaryAccumulated]);
    const extraTotal = sum([capped, extraAccumulated]);
    ppse.rows = [
      {
        id: "last",
        label: "Aportación de la compañía del último año",
        amounts: [ordinary, capped],
        total: sum([ordinary, capped]),
        subtotal: false,
      },
      {
        id: "accumulated",
        label: "Aportación de la compañía acumulada",
        amounts: [ordinaryAccumulated, extraAccumulated],
        total: sum([ordinaryAccumulated, extraAccumulated]),
        subtotal: false,
      },
      {
        id: "total",
        label: "Total",
        amounts: [ordinaryTotal, extraTotal],
        total: sum([ordinaryTotal, extraTotal]),
        subtotal: true,
      },
      ...ppse.rows.filter(
        (row) => !definitions[10][3].some((name) => key(name) === key(row.label)),
      ),
    ];
  }
  return {
    year,
    employee: {
      id: person.employeeId,
      name: person.fullName,
      category: text(header.SSP_NM_CATEGORIA),
      workCenter: text(header.SCO_N_WORK_LOCATION),
    },
    calculatedAt: text(header.CSP_FEC_EJECUCION),
    pays,
    sections: [...sections.values()],
    direct,
    compensation,
    history: history
      .filter((entry) => entry.year <= year)
      .sort((a, b) => a.year - b.year)
      .slice(-5),
    notices,
  };
};
