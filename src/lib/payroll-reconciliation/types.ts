import type { PayrollReportRun } from "@/types/payroll-report";

export type ControlId = `C${string}`;
export type CalculationStatus = "Coincide" | "Con diferencia" | "Falta fuente" | "No comparable";
export type Category =
  | "mercer"
  | "teletrabajo"
  | "comisiones"
  | "apartamentos"
  | "comida"
  | "recarga"
  | "eurest"
  | "excesos"
  | "anticipos"
  | "aniversarios"
  | "ppse"
  | "gimnasio"
  | "excepciones";
export type Snapshot = {
  run: PayrollReportRun;
  headers: string[];
  rows: string[][];
  hash: string;
  capturedAt: string;
  populationConfirmed: boolean;
  /** Sidecar preserves the existing column positions/evidence of other controls. */
  seniorityDates?: string[];
  society?: string;
  /** PeopleNet server/database actually read (no credentials); absent in older captures. */
  origin?: { server: string; database: string };
  /** Legacy conditional evidence; new SQL captures use extraPayAutomatic. */
  extraPayEvidence?: ExtraPayEvidence[];
  /** Optional server capture; old dossiers are never refreshed implicitly. */
  extraPayAutomatic?: AutomaticExtraPay;
  /** Optional C05 capture: Meta4 telework rule inputs (indicator, price, hire, leave). */
  teleworkAutomatic?: AutomaticTelework;
  /** Optional C11 capture: previous net and payments/orders behind SCO_EXC_PREV_PAYMENT. */
  excessAutomatic?: AutomaticExcess;
  hrPeriods?: string[];
};
type AutomaticCaptureBase = {
  version: 1;
  society: string;
  period: string;
  runHash: string;
  issue?: string;
};
export type AutomaticPersonResult = {
  employeeId: string;
  entity: string;
  hrPeriod: string;
  /** Amount in the accumulator read with the inputs; must match the saved report. */
  paid: string | null;
  /** Expected amount derived from the configuration; null keeps the person pending. */
  due: string | null;
  reason: string;
  evidence: string[];
};
export type AutomaticTelework = AutomaticCaptureBase & {
  variant?: TeleworkRuleVariant;
  people: (AutomaticPersonResult & { indicator: string | null })[];
};
export type TeleworkRuleVariant = "telework-2022-06" | "telework-2026-09";
export type AutomaticExcess = AutomaticCaptureBase & {
  people: AutomaticPersonResult[];
};
export type AutomaticExtraPay = {
  version: 1;
  society: string;
  period: string;
  runHash: string;
  /** Optional for compatibility with captures made before rule selection by period. */
  rule?: AutomaticExtraPayRule;
  issue?: string;
  /** Optional price capture (1.3.1); absent in older dossiers, which keep the base formula. */
  price?: { averageThird: boolean; issue?: string };
  people: AutomaticExtraPayPerson[];
};
export type AutomaticExtraPrice = {
  issue?: string;
  /** Orders whose price is individually set to 0 in PeopleNet (SSP_P_PAGA_EX_n). */
  zero: number[];
  /** SSP_TOTAL_P_PAGAS of the month: the current price before averaging. */
  total: string | null;
  /** Closed ordinary months of the accrual year (third extra). */
  history: { prices: string; months: number } | null;
  /** Months of the accrual year still to come, projected at the current price. */
  projected: number;
  /** Non-prorated part of the year when the third extra became prorated in it. */
  switchUnits: string | null;
};
export type ExtraPayRuleVariant = "r1-through-july-2026" | "r1-aug-oct-2026";
export type AutomaticExtraPayRule = {
  mode: "definition" | "R1";
  variant?: ExtraPayRuleVariant;
  versions: {
    id: string;
    validFrom: string;
    validTo: string;
    sourceHash: string;
    priority?: string;
    order?: string | null;
  }[];
};
export type AutomaticExtraPayPerson = {
  employeeId: string;
  entity: string;
  hrPeriod: string;
  issue?: string;
  monthlyFull: boolean;
  accrualIssue?: string;
  paid: Record<string, string | null>;
  price?: AutomaticExtraPrice;
  extras: {
    order: number;
    prorated: boolean | null;
    due: boolean;
    full: boolean;
    percentage: string | null;
    /** Meta4 accrual fraction (SSP_U_PAGA_EX_n); context only, never accredits accrual. */
    units?: string | null;
  }[];
  evidence: string[];
};
export type ExtraPayEvidence = {
  society: string;
  entity: string;
  employeeId: string;
  period: string;
  validFrom: string;
  validTo: string;
  rule: "12-payments-three-prorated-extras";
  reference: string;
};
export type SourceFact = {
  employeeId: string;
  values: Record<string, string | null>;
  reference: string;
  entity?: string;
  recordId?: string;
  documentReference?: string;
  reason?: string;
  issue?: string;
  seniorityDate?: string;
};
export type Source = {
  id: string;
  filename?: string;
  hash: string;
  category: Category;
  period: string;
  accrualPeriod?: string;
  windowStart?: string;
  windowEnd?: string;
  complete: boolean;
  profile: string;
  facts: SourceFact[];
  diagnostics: string[];
  cellCount: number;
};
export type Parameters = {
  tolerance: string;
  percentageTolerance: string;
  teleworkRate: string | null;
  teleworkDays: string | null;
  mealRate: string | null;
  mealDays: string | null;
  cardRate: string | null;
  cardBase: string | null;
  rulesConfirmed: boolean;
  extraMetric: string;
  extraFullEmployeeIds: string[];
  anniversaryFullBase: boolean;
  /**
   * RRHH accepts Meta4's accrual units (SSP_U_PAGA_EX_n) for partial extras. Optional:
   * dossiers saved before 1.3.1 lack it and keep partial accruals pending.
   */
  extraUnitsAccepted?: boolean;
};
export const DEFAULT_PARAMETERS: Parameters = {
  tolerance: "0.01",
  percentageTolerance: "0.01",
  teleworkRate: null,
  teleworkDays: null,
  mealRate: null,
  mealDays: null,
  cardRate: null,
  cardBase: null,
  rulesConfirmed: false,
  extraMetric: "extra3",
  extraFullEmployeeIds: [],
  anniversaryFullBase: false,
};
export type Finding = {
  id: string;
  fingerprint: string;
  control: ControlId;
  metric: string;
  employeeId: string;
  name: string;
  entity?: string;
  actual: string | null;
  expected: string | null;
  delta: string | null;
  unit: "EUR" | "pp";
  status: CalculationStatus;
  reason: string;
  evidence: string[];
};
export type Annotation = {
  findingId: string;
  fingerprint: string;
  state: "Pendiente" | "Diferencia justificada" | "Requiere corrección manual";
  comment: string;
  actor: string;
  at: string;
  invalidated?: boolean;
};
export type ReconciliationResult = {
  engineVersion: string;
  fingerprint: string;
  findings: Finding[];
  diagnostics: string[];
  controls: {
    id: ControlId;
    name: string;
    total: number;
    matches: number;
    differences: number;
    pending: number;
  }[];
};
export type Dossier = {
  id: string;
  title: string;
  period: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  demo: boolean;
  current: Snapshot;
  previous: Snapshot | null;
  sources: Source[];
  parameters: Parameters;
  result: ReconciliationResult;
  annotations: Annotation[];
};
export type DossierSummary = Pick<
  Dossier,
  "id" | "title" | "period" | "revision" | "updatedAt" | "demo"
>;

export type SourceImportResult = {
  dossier: Dossier;
  category: Category;
  filename: string;
  status: "incorporado" | "sustituido" | "ya_incorporado";
  records: number;
  replacedFiles: string[];
};

export type SourceCheckResult = Omit<SourceImportResult, "dossier" | "status"> & {
  operation: "add" | "replace" | "skip";
  hash: string;
  cellCount: number;
  diagnostics: string[];
};
