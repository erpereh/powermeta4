import type { Meta4ProfileRecordSet } from "@/lib/meta4/user-profile-types";

/** Persona propia que muestra la cabecera del portal. */
export type PortalPerson = {
  readonly employeeId: string;
  readonly fullName: string;
  readonly job: string | null;
  readonly unit: string | null;
  readonly workCenter: string | null;
  readonly hireDate: string | null;
  readonly managerId: string | null;
};

export type IdentityEvaluation =
  | { readonly status: "resolved"; readonly person: PortalPerson }
  | {
      readonly status: "unresolved";
      readonly reason: "no-coherent-record" | "ambiguous" | "cross-check-failed";
    };

const normalizeKey = (key: string): string => key.replaceAll("_", "").toLowerCase();

/** Lee un campo del perfil sin depender de mayúsculas ni guiones bajos. */
export const profileField = (
  fields: Readonly<Record<string, string>>,
  ...names: readonly string[]
): string | null => {
  const wanted = names.map(normalizeKey);
  for (const [key, value] of Object.entries(fields)) {
    if (wanted.includes(normalizeKey(key)) && value.trim() !== "") return value.trim();
  }
  return null;
};

const SENTINEL_DATE = "4000-01-01";

const toIsoDate = (value: string | null): string | null => {
  if (!value) return null;
  const date = value.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && date !== SENTINEL_DATE ? date : null;
};

export const buildFullName = (parts: readonly (string | null)[]): string =>
  parts
    .map((part) => part?.trim() ?? "")
    .filter((part) => part !== "" && part !== ".")
    .join(" ");

/**
 * Exige un único registro del perfil cuyo `clave_Self` coincida con el usuario
 * de la sesión. A diferencia de la carga del perfil, nunca usa el primero por
 * defecto: sin coherencia no hay identidad.
 */
export const evaluateProfileIdentity = (
  recordSets: readonly Meta4ProfileRecordSet[],
  username: string,
): IdentityEvaluation => {
  const expected = username.trim().toLowerCase();
  const coherent = recordSets.flatMap((set) => {
    const selfKey = profileField(set.fields, "clave_Self", "CVE_SELF");
    const employeeId = profileField(set.fields, "id_Empleado");
    if (!selfKey || !employeeId || selfKey.toLowerCase() !== expected) return [];
    return [{ employeeId, fields: set.fields }];
  });
  const ids = new Set(coherent.map((entry) => entry.employeeId));
  if (ids.size === 0) return { status: "unresolved", reason: "no-coherent-record" };
  if (ids.size > 1) return { status: "unresolved", reason: "ambiguous" };
  const [{ employeeId, fields }] = coherent;
  return {
    status: "resolved",
    person: {
      employeeId,
      fullName:
        buildFullName([
          profileField(fields, "nombre"),
          profileField(fields, "apellido_1"),
          profileField(fields, "apellido_2"),
        ]) || employeeId,
      job: profileField(fields, "n_Puesto"),
      unit: profileField(fields, "n_Unidad"),
      workCenter: profileField(fields, "n_Centro_Trabajo"),
      hireDate: toIsoDate(profileField(fields, "fec_Alta_Empleado")),
      managerId: profileField(fields, "id_Responsable"),
    },
  };
};

/** Fila mínima de `M4ORO_EMPLEADOS` para la verificación cruzada. */
export type OroIdentityRow = {
  readonly employeeId: string;
  readonly selfKey: string | null;
};

/** La ficha ORO debe existir, ser única y pertenecer al mismo usuario. */
export const crossCheckIdentity = (
  rows: readonly OroIdentityRow[],
  employeeId: string,
  username: string,
): boolean =>
  rows.length === 1 &&
  rows[0].employeeId === employeeId &&
  (rows[0].selfKey ?? "").trim().toLowerCase() === username.trim().toLowerCase();
