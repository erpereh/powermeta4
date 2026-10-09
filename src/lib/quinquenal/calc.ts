import type { QuinquenalUnit, QuinquenalYear } from "@/types/quinquenal";

/** Años que muestra la consulta: el actual y los cuatro anteriores. */
export const QUINQUENAL_YEARS = 5;

/** Entidad legal cuyo cálculo sigue los conceptos de Portugal. */
export const PORTUGAL_LEGAL_ENTITY = "ACYC_PT";

/**
 * Importes acumulados de un año (diciembre) o de la última paga publicada, tal
 * como los leen los nodos `CYC_DATOS_ECONOMICOS_*` de PeopleNet.
 */
export type QuinquenalFigures = {
  coefficient: number;
  /** `SSP_TOTAL_P_COMPL`: total mensual de percepciones. */
  monthlyTotal: number;
  /** `SSP_PR_EXT_PRORRAT`: prorrata de pagas extra incluida en el total. */
  extraPayProration: number;
  /** `SSP_P_PAGA_EX_1..5`. */
  extraPays: number;
  /** `CSP_P_ASIG_MIN_DESEMPENIO` (anual). */
  minPerformance: number;
  /** `CSP_P_PLUS_INSPECCION` (mensual). */
  inspectionPlus: number;
  /** Conceptos mensuales de Portugal. */
  vencimiento: number;
  diuturnidades: number;
  insencaoHorario: number;
  compInsencaoHorario: number;
  diuturnidadesIt: number;
  compensacaoPosto: number;
  ajudasCusto: number;
  target: number;
  evaluation: number;
  /** `CYC_PORC_RETR_VAR`: porcentaje de la retribución que es variable. */
  variablePercent: number;
};

/** Redondeo a céntimos sin el sesgo de coma flotante (1.005 → 1.01). */
export const roundCents = (value: number): number =>
  Math.round((value + Number.EPSILON) * 100) / 100;

/** Retribución anual con la reducción de jornada aplicada. */
export const reducedAnnualSalary = (
  legalEntity: string | null,
  figures: QuinquenalFigures,
): number => {
  if (legalEntity === PORTUGAL_LEGAL_ENTITY) {
    // 14 pagas (12 + subsidios de férias y natal), compensación en 12 y ajudas en 11.
    const fourteen =
      figures.vencimiento +
      figures.diuturnidades +
      figures.insencaoHorario +
      figures.compInsencaoHorario +
      figures.diuturnidadesIt;
    return fourteen * 14 + figures.compensacaoPosto * 12 + figures.ajudasCusto * 11;
  }
  return (
    (figures.monthlyTotal - figures.extraPayProration) * 12 +
    figures.extraPays +
    figures.minPerformance +
    figures.inspectionPlus * 12
  );
};

const salaryFromReduced = (reduced: number, coefficient: number): number =>
  coefficient ? reduced / coefficient : reduced;

export type QuinquenalYearsInput = {
  legalEntity: string | null;
  currentYear: number;
  /** Acumulado de la última paga publicada; `null` si no hay. */
  current: QuinquenalFigures | null;
  /** Acumulados de diciembre por año. */
  previous: ReadonlyMap<number, QuinquenalFigures>;
  /** Variable pagado por año de imputación. */
  paidVariable: ReadonlyMap<number, number>;
};

/** Los 5 años de la consulta, del actual al más antiguo. */
export const buildQuinquenalYears = ({
  legalEntity,
  currentYear,
  current,
  previous,
  paidVariable,
}: QuinquenalYearsInput): QuinquenalYear[] => {
  const years: QuinquenalYear[] = [];

  if (current) {
    const reduced = reducedAnnualSalary(legalEntity, current);
    const salary = salaryFromReduced(reduced, current.coefficient);
    const variable =
      current.variablePercent > 0
        ? (current.variablePercent / 100) * salary
        : current.target + current.evaluation;
    years.push({
      year: currentYear,
      coefficient: current.coefficient,
      salary: roundCents(salary),
      reducedSalary: roundCents(reduced),
      variable: roundCents(variable),
    });
  } else {
    years.push({ year: currentYear, coefficient: null, salary: 0, reducedSalary: 0, variable: 0 });
  }

  for (let year = currentYear - 1; year > currentYear - QUINQUENAL_YEARS; year -= 1) {
    const figures = previous.get(year);
    // Sin acumulado de diciembre el año queda vacío, también el variable.
    if (!figures) {
      years.push({ year, coefficient: null, salary: null, reducedSalary: null, variable: null });
      continue;
    }
    // El variable de un año se imputa al año siguiente; si aún no se ha pagado
    // el del año pasado, se muestra el objetivo.
    const paid = paidVariable.get(year + 1) ?? 0;
    const variable =
      paid !== 0 ? paid : year === currentYear - 1 ? figures.target + figures.evaluation : 0;
    const reduced = reducedAnnualSalary(legalEntity, figures);
    years.push({
      year,
      coefficient: figures.coefficient,
      salary: roundCents(salaryFromReduced(reduced, figures.coefficient)),
      reducedSalary: roundCents(reduced),
      variable: roundCents(variable),
    });
  }

  return years;
};

/**
 * Un nivel organizativo solo se muestra si su id pertenece a ese nivel
 * (`0-…` CEO, `1_…` MB, `2_…` ALT, `3_…` dirección, `4_…` área, `5_…` unidad,
 * `6_…` servicio). Así, una dirección que ORO rellena con el ALT queda vacía.
 */
export const organizationLevel = (
  id: string | null,
  name: string | null,
  level: number,
  maxNameLength?: number,
): QuinquenalUnit =>
  id !== null && id.startsWith(String(level))
    ? { id, name: name !== null && maxNameLength ? name.slice(0, maxNameLength).trimEnd() : name }
    : { id: null, name: null };

/** Longitud de los ítems de nombre de dirección, unidad y servicio en el Meta4Object. */
export const ORGANIZATION_NAME_LENGTH = 40;

/** Grupo y nivel de puesto a partir de `STD_ID_JOB_CATEGOR` («II4» → «II», «4»). */
export const splitJobCategory = (
  code: string | null,
): { group: string | null; level: string | null } => {
  if (code === null) return { group: null, level: null };
  const lettered = /^([A-Z]+)(\d+)$/.exec(code);
  if (lettered) return { group: lettered[1] ?? null, level: lettered[2] ?? null };
  const numbered = /^0(\d{2,})$/.exec(code);
  if (numbered) return { group: "0", level: numbered[1] ?? null };
  if (/^0+$/.test(code)) return { group: "0", level: code };
  return { group: code, level: code };
};
