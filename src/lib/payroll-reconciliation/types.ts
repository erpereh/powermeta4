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
};
export type Source = {
  id: string;
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
