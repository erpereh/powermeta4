import "server-only";

import { callPortalService, type CallPortalServiceDeps } from "../soap/call";
import type { SoapRecord } from "../soap/types";

/**
 * Puerta de datos sensibles del responsable. Permanece cerrada hasta que el
 * usuario confirme que la población de `SNTC_AD_POPULATION` coincide con la del
 * SSM real (decisión registrada en spec/todo.md). Con la puerta cerrada solo se
 * muestran datos de directorio.
 */
export const MANAGER_SCOPE_VERIFIED = false;

export type ResponsibilityUnit = {
  readonly unitId: string;
  readonly unitName: string | null;
  readonly parentId: string | null;
  readonly responsibilityType: string | null;
};

export type ManagerScope = {
  readonly units: readonly ResponsibilityUnit[];
  readonly employeeIds: readonly string[];
  readonly verified: boolean;
};

const text = (value: string | undefined): string | null => {
  const trimmed = value?.trim() ?? "";
  return trimmed === "" ? null : trimmed;
};

export const mapResponsibilityUnits = (
  responsibilities: readonly SoapRecord[],
  hierarchy: readonly SoapRecord[],
): ResponsibilityUnit[] => {
  const typeByUnit = new Map(
    hierarchy.flatMap((record) => {
      const unit = text(record.SCO_ID_WU);
      return unit ? [[unit, text(record.SCO_ID_TYPE_RESP)] as const] : [];
    }),
  );
  const seen = new Set<string>();
  return responsibilities.flatMap((record) => {
    const unitId = text(record.STD_ID_WORK_UNIT);
    if (!unitId || seen.has(unitId)) return [];
    seen.add(unitId);
    return [
      {
        unitId,
        unitName: text(record.STD_N_WORK_UNIT),
        parentId: text(record.SCO_ID_WU_PARENT),
        responsibilityType: typeByUnit.get(unitId) ?? null,
      },
    ];
  });
};

export const mapPopulationIds = (records: readonly SoapRecord[]): string[] => [
  ...new Set(
    records.flatMap((record) => (text(record.SCO_ID_HR) ? [text(record.SCO_ID_HR) as string] : [])),
  ),
];

const today = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

/**
 * Unidades de responsabilidad y población del responsable según Meta4. La
 * sesión del usuario determina la persona; no se envía ninguna matrícula.
 */
export const loadManagerScope = async (deps: CallPortalServiceDeps = {}): Promise<ManagerScope> => {
  const structure = await callPortalService("SNTC_AD_POPULATION", "M4LoadObject", {}, deps);
  const persons = await callPortalService(
    "SNTC_AD_POPULATION",
    "LOAD_PERSONS",
    { AI_FILTER_DATE: today() },
    deps,
  );
  return {
    units: mapResponsibilityUnits(
      structure.nodes.SNCO_AD_H_HR_RESP ?? [],
      structure.nodes.SNCO_AD_HIERARCHIC_WU ?? [],
    ),
    employeeIds: mapPopulationIds([
      ...(persons.nodes.SNCO_AD_PERSON_LIST ?? []),
      ...(persons.nodes.SNCO_INFO_PERSON ?? []),
    ]),
    verified: MANAGER_SCOPE_VERIFIED,
  };
};

/** Toda lectura de otra persona exige que pertenezca a la población. */
export const isInManagerScope = (scope: ManagerScope, employeeId: string): boolean =>
  scope.employeeIds.includes(employeeId.trim());
