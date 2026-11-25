import { decodeXmlEntities } from "@/lib/meta4/format-profile-field";
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
  | { readonly status: "resolved"; readonly person: PortalPerson; readonly selfKey: string }
  | {
      readonly status: "unresolved";
      readonly reason: "no-coherent-record" | "ambiguous" | "cross-check-failed";
    };

const normalizeKey = (key: string): string => key.replaceAll("_", "").toLowerCase();

/**
 * Lee un campo del perfil sin depender de mayúsculas ni guiones bajos. El perfil
 * se parsea sin procesar entidades, así que «Gonz&#xE1;lez» o «&amp;» se decodifican aquí.
 */
export const profileField = (
  fields: Readonly<Record<string, string>>,
  ...names: readonly string[]
): string | null => {
  const wanted = names.map(normalizeKey);
  for (const [key, value] of Object.entries(fields)) {
    const text = decodeXmlEntities(value).trim();
    if (wanted.includes(normalizeKey(key)) && text !== "") return text;
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
 * Exige un único registro del perfil con `clave_Self` y matrícula. Se prefiere
 * el que coincide con el usuario de la sesión; cuando ninguno coincide vale la
 * única ficha que devuelve el perfil, porque `CSP_CONSULTA_ORO_INTRAN_NEW` se
 * consulta con el usuario conectado y su `clave_Self` del autoservicio puede
 * no ser su usuario de aplicación (`SOFIA.ELICES` / `selicesm`). La coherencia
 * la cierra `crossCheckIdentity` contra `M4ORO_EMPLEADOS`. A diferencia de la
 * carga del perfil, nunca usa el primero por defecto: sin una única matrícula
 * y una única `clave_Self` no hay identidad.
 */
export const evaluateProfileIdentity = (
  recordSets: readonly Meta4ProfileRecordSet[],
  username: string,
): IdentityEvaluation => {
  const expected = username.trim().toLowerCase();
  const candidates = recordSets.flatMap((set) => {
    const selfKey = profileField(set.fields, "clave_Self", "CVE_SELF");
    const employeeId = profileField(set.fields, "id_Empleado");
    if (!selfKey || !employeeId) return [];
    return [{ employeeId, selfKey: selfKey.trim().toLowerCase(), fields: set.fields }];
  });
  const matching = candidates.filter((entry) => entry.selfKey === expected);
  const coherent = matching.length ? matching : candidates;
  const ids = new Set(coherent.map((entry) => entry.employeeId));
  if (ids.size === 0) return { status: "unresolved", reason: "no-coherent-record" };
  if (ids.size > 1) return { status: "unresolved", reason: "ambiguous" };
  const [{ employeeId, selfKey, fields }] = coherent;
  // Dos fichas de la misma matrícula con usuarios distintos no se adivinan.
  if (candidates.some((entry) => entry.employeeId === employeeId && entry.selfKey !== selfKey)) {
    return { status: "unresolved", reason: "ambiguous" };
  }
  return {
    status: "resolved",
    selfKey,
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

/**
 * La ficha ORO debe existir, ser única y pertenecer al mismo autoservicio que
 * el perfil Meta4: misma matrícula y misma `clave_Self` (no el usuario de
 * aplicación, que puede diferir).
 */
export const crossCheckIdentity = (
  rows: readonly OroIdentityRow[],
  employeeId: string,
  selfKey: string,
): boolean => {
  const identities = new Set(
    rows.map((row) =>
      JSON.stringify([row.employeeId.trim(), (row.selfKey ?? "").trim().toLowerCase()]),
    ),
  );
  return (
    identities.size === 1 &&
    identities.has(JSON.stringify([employeeId.trim(), selfKey.trim().toLowerCase()]))
  );
};
