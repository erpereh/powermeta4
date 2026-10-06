import {
  groupDirectoryEntries,
  oroText,
  type DirectoryEntry,
  type OroRow,
} from "./organization-core";

export type ManagerStatus = "available" | "none" | "missing" | "ambiguous" | "self";
export type PersonHierarchy = {
  readonly person: DirectoryEntry;
  readonly manager: DirectoryEntry | null;
  readonly managerStatus: ManagerStatus;
  readonly reports: readonly DirectoryEntry[];
  readonly omittedReports: number;
};

export const managerIds = (rows: readonly OroRow[]): string[] => [
  ...new Set(
    rows.flatMap((row) => {
      const id = oroText(row.ID_RESPONSABLE);
      return id ? [id] : [];
    }),
  ),
];

/** Una persona puede tener varias asignaciones, pero nunca se elige un responsable arbitrario. */
export const buildPersonHierarchy = (
  employeeId: string,
  society: string,
  selected: readonly OroRow[],
  related: readonly OroRow[],
): PersonHierarchy | null => {
  const inScope = (row: OroRow) =>
    oroText(row.ID_ORGANIZATION) === society && oroText(row.COMPUTA) === "1";
  const own = selected.filter((row) => inScope(row) && oroText(row.ID_EMPLEADO) === employeeId);
  const [person] = groupDirectoryEntries(own);
  if (!person) return null;
  const rows = related.filter(inScope);
  const ids = managerIds(own);
  const manager =
    ids.length === 1 && ids[0] !== employeeId
      ? (groupDirectoryEntries(rows.filter((row) => oroText(row.ID_EMPLEADO) === ids[0]))[0] ??
        null)
      : null;
  const candidates = groupDirectoryEntries(
    rows.filter(
      (row) =>
        oroText(row.ID_RESPONSABLE) === employeeId && oroText(row.ID_EMPLEADO) !== employeeId,
    ),
  );
  const reports = candidates.filter((entry) => {
    const assignmentIds = managerIds(
      rows.filter((row) => oroText(row.ID_EMPLEADO) === entry.employeeId),
    );
    return assignmentIds.length === 1 && assignmentIds[0] === employeeId;
  });
  return {
    person,
    manager,
    managerStatus:
      ids.length > 1
        ? "ambiguous"
        : ids.length === 0
          ? "none"
          : ids[0] === employeeId
            ? "self"
            : manager
              ? "available"
              : "missing",
    reports,
    omittedReports: candidates.length - reports.length,
  };
};
