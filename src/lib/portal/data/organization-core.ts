/** Mapeos puros de `M4ORO_EMPLEADOS` para el directorio, la ficha y el organigrama. */
import { buildFullName } from "../identity-core";

export type OroRow = Readonly<Record<string, string | number | boolean | Date | null>>;

export type DirectoryEntry = {
  readonly key: string;
  readonly society: string | null;
  readonly employeeId: string;
  readonly fullName: string;
  readonly job: string | null;
  readonly unit: string | null;
  readonly workCenter: string | null;
  readonly email: string | null;
};

export type FileField = { readonly label: string; readonly value: string };
export type FileSection = {
  readonly id: string;
  readonly title: string;
  readonly fields: readonly FileField[];
};

const SENTINEL_DATE = "4000-01-01";

export const oroText = (value: OroRow[string] | undefined): string | null => {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) {
    const iso = value.toISOString().slice(0, 10);
    return iso === SENTINEL_DATE ? null : iso;
  }
  const text = String(value).trim();
  if (text === "" || text === ".") return null;
  return /^\d{4}-\d{2}-\d{2}/.test(text) && text.startsWith(SENTINEL_DATE) ? null : text;
};

const formatDate = (iso: string): string => {
  const [year, month, day] = iso.slice(0, 10).split("-");
  return year && month && day ? `${day}/${month}/${year}` : iso;
};

export const toDirectoryEntry = (row: OroRow): DirectoryEntry | null => {
  const employeeId = oroText(row.ID_EMPLEADO);
  if (!employeeId) return null;
  return {
    key: JSON.stringify([oroText(row.ID_ORGANIZATION), employeeId]),
    society: oroText(row.ID_ORGANIZATION),
    employeeId,
    fullName:
      buildFullName([oroText(row.NOMBRE), oroText(row.APELLIDO_1), oroText(row.APELLIDO_2)]) ||
      employeeId,
    job: oroText(row.N_PUESTO),
    unit: oroText(row.N_UNIDAD) ?? oroText(row.N_AREA) ?? oroText(row.N_DIRECCION),
    workCenter: oroText(row.N_CENTRO_TRABAJO),
    email: oroText(row.CORREO),
  };
};

/** Agrupa personas, conservando los distintos puestos y destinos de ORO. */
export const groupDirectoryEntries = (rows: readonly OroRow[]): DirectoryEntry[] => {
  const groups = new Map<string, DirectoryEntry[]>();
  for (const row of rows) {
    const entry = toDirectoryEntry(row);
    if (entry) groups.set(entry.key, [...(groups.get(entry.key) ?? []), entry]);
  }
  const values = (
    entries: readonly DirectoryEntry[],
    field: keyof DirectoryEntry,
  ): string | null => {
    const unique = [...new Set(entries.flatMap((entry) => (entry[field] ? [entry[field]] : [])))];
    return unique.sort((a, b) => a.localeCompare(b, "es")).join(" / ") || null;
  };
  return [...groups.values()]
    .map((entries) => ({
      key: entries[0].key,
      society: entries[0].society,
      employeeId: entries[0].employeeId,
      fullName: values(entries, "fullName") ?? entries[0].employeeId,
      job: values(entries, "job"),
      unit: values(entries, "unit"),
      workCenter: values(entries, "workCenter"),
      email: values(entries, "email"),
    }))
    .sort(
      (a, b) =>
        a.fullName.localeCompare(b.fullName, "es") || a.employeeId.localeCompare(b.employeeId),
    );
};

/** Solo colapsa fichas equivalentes; nunca elige entre fichas contradictorias. */
export const distinctFileRows = (rows: readonly OroRow[]): OroRow[] => {
  const unique = new Map<string, OroRow>();
  for (const row of rows) {
    const key = JSON.stringify(
      Object.keys(row)
        .sort()
        .map((column) => [column, oroText(row[column])]),
    );
    unique.set(key, row);
  }
  return [...unique.values()];
};

type FieldSpec = readonly [column: string, label: string, kind?: "date"];

const section = (
  id: string,
  title: string,
  row: OroRow,
  specs: readonly FieldSpec[],
): FileSection => ({
  id,
  title,
  fields: specs.map(([column, label, kind]) => {
    const value = oroText(row[column]);
    return { label, value: value ? (kind === "date" ? formatDate(value) : value) : "No informado" };
  }),
});

/** Datos de directorio: los que cualquier empleado ve en «Quién es quién». */
export const buildDirectorySections = (row: OroRow): FileSection[] =>
  [
    section("puesto", "Puesto", row, [
      ["N_PUESTO", "Puesto"],
      ["N_TIPO_PUESTO", "Tipo de puesto"],
      ["N_CLASE_PUESTO", "Clase de puesto"],
    ]),
    section("organizacion", "Organización", row, [
      ["STD_N_LEG_ENT", "Empresa"],
      ["N_DIRECCION", "Dirección"],
      ["N_AREA", "Área"],
      ["N_UNIDAD", "Unidad"],
      ["N_SERVICIO", "Servicio"],
    ]),
    section("centro", "Centro de trabajo", row, [
      ["N_CENTRO_TRABAJO", "Centro de trabajo"],
      ["DIR_CENTRO_TRABAJO", "Dirección del centro"],
      ["N_CENT_TRAB_FIS", "Centro físico"],
    ]),
    section("contacto", "Contacto", row, [["CORREO", "Correo corporativo"]]),
  ].filter((entry) => entry.fields.length > 0);

/** Ficha propia: añade datos laborales y personales que solo ve su titular. */
export const buildOwnFileSections = (row: OroRow): FileSection[] =>
  [
    ...buildDirectorySections(row),
    section("laboral", "Datos laborales", row, [
      ["ID_EMPLEADO", "Matrícula"],
      ["FEC_ALTA_EMPLEADO", "Fecha de alta", "date"],
      ["FEC_ANTIGUEDAD", "Antigüedad", "date"],
      ["ID_STATUS_PUESTO", "Situación del puesto"],
      ["N_STATUS_PUESTO", "Estado del puesto"],
      ["CLAVE_SELF", "Usuario del portal"],
    ]),
    section("personal", "Datos personales", row, [
      ["ID_LEGAL", "Documento de identidad"],
      ["NUM_AFILIACION_SS", "Número de afiliación a la Seguridad Social"],
      ["FEC_NACIMIENTO", "Fecha de nacimiento", "date"],
      ["ID_ESTADO_CIVIL", "Estado civil"],
    ]),
  ].filter((entry) => entry.fields.length > 0);

/** Nivel del organigrama ORO: dirección → área → unidad → servicio. */
export const ORG_LEVELS = [
  { id: "direccion", idColumn: "ID_DIRECCION", nameColumn: "N_DIRECCION", label: "Dirección" },
  { id: "area", idColumn: "ID_AREA", nameColumn: "N_AREA", label: "Área" },
  { id: "unidad", idColumn: "ID_UNIDAD", nameColumn: "N_UNIDAD", label: "Unidad" },
  { id: "servicio", idColumn: "ID_SERVICIO", nameColumn: "N_SERVICIO", label: "Servicio" },
] as const;

export type OrgNode = {
  readonly key: string;
  readonly id: string;
  readonly name: string;
  readonly level: (typeof ORG_LEVELS)[number]["id"];
  readonly levelLabel: string;
  readonly people: readonly DirectoryEntry[];
  readonly children: readonly OrgNode[];
  /** Personas de este nodo y de todos sus descendientes. */
  readonly total: number;
};

type MutableNode = {
  key: string;
  id: string;
  name: string;
  level: OrgNode["level"];
  levelLabel: string;
  people: DirectoryEntry[];
  children: Map<string, MutableNode>;
};

const freeze = (node: MutableNode): OrgNode => {
  const children = [...node.children.values()]
    .map(freeze)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
  const people = groupDirectoryEntries(
    node.people.map((person) => ({
      ID_ORGANIZATION: person.society,
      ID_EMPLEADO: person.employeeId,
      NOMBRE: person.fullName,
      N_PUESTO: person.job,
      N_UNIDAD: person.unit,
      N_CENTRO_TRABAJO: person.workCenter,
      CORREO: person.email,
    })),
  );
  const descendantIds = (entry: OrgNode): string[] => [
    ...entry.people.map((person) => person.key),
    ...entry.children.flatMap(descendantIds),
  ];
  return {
    key: node.key,
    id: node.id,
    name: node.name,
    level: node.level,
    levelLabel: node.levelLabel,
    people,
    children,
    total: new Set([...people.map((person) => person.key), ...children.flatMap(descendantIds)])
      .size,
  };
};

/**
 * Árbol de unidades a partir de la jerarquía de cada empleado en ORO. Cada
 * persona cuelga del nivel más profundo informado de su ficha.
 */
export const buildOrgTree = (rows: readonly OroRow[]): OrgNode[] => {
  const roots = new Map<string, MutableNode>();
  for (const row of rows) {
    const entry = toDirectoryEntry(row);
    if (!entry) continue;
    let siblings = roots;
    let current: MutableNode | null = null;
    let path = entry.society ?? "";
    for (const level of ORG_LEVELS) {
      const id = oroText(row[level.idColumn]);
      if (!id) continue;
      path = `${path}/${level.id}:${id}`;
      let node = siblings.get(path);
      if (!node) {
        node = {
          key: path,
          id,
          name: oroText(row[level.nameColumn]) ?? id,
          level: level.id,
          levelLabel: level.label,
          people: [],
          children: new Map(),
        };
        siblings.set(path, node);
      }
      current = node;
      siblings = node.children;
    }
    if (current) current.people.push(entry);
  }
  return [...roots.values()].map(freeze).sort((a, b) => a.name.localeCompare(b.name, "es"));
};
