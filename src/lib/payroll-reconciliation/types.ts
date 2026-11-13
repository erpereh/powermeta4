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
  /** Legacy conditional evidence; new SQL captures use extraPayAutomatic. */
  extraPayEvidence?: ExtraPayEvidence[];
  /** Optional server capture; old dossiers are never refreshed implicitly. */
  extraPayAutomatic?: AutomaticExtraPay;
  hrPeriods?: string[];
};
export type AutomaticExtraPay = {
  version: 1;
  society: string;
  period: string;
  runHash: string;
  issue?: string;
  people: AutomaticExtraPayPerson[];
};
export type AutomaticExtraPayPerson = {
  employeeId: string;
  entity: string;
  hrPeriod: string;
  issue?: string;
  monthlyFull: boolean;
  accrualIssue?: string;
  paid: Record<string, string | null>;
  extras: {
    order: number;
    prorated: boolean | null;
    due: boolean;
    full: boolean;
    percentage: string | null;
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
