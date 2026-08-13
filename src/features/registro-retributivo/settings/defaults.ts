import type { AnalysisConfig, ConceptMappingRule, NormalizedConcept } from "@/features/registro-retributivo/types";

export interface AppSettings {
  readonly defaultTolerance: number;
  readonly enableAIByDefault: boolean;
  readonly autoExplainOnOpen: boolean;
  readonly reviewThreshold: number;
  readonly incidentThreshold: number;
  readonly aiModel: string;
  readonly excludedEmployeeIds: readonly string[];
  readonly conceptMap: readonly ConceptMappingRule[];
  readonly normalizedConcepts: readonly NormalizedConcept[];
}

export const DEFAULT_SETTINGS: AppSettings = {
  defaultTolerance: 1,
  enableAIByDefault: true,
  autoExplainOnOpen: false,
  reviewThreshold: 1,
  incidentThreshold: 50,
  aiModel: "gemini-3.1-flash-lite",
  excludedEmployeeIds: [],
  conceptMap: [],
  normalizedConcepts: [],
};

export const STORAGE_SCHEMA_VERSION = 2;

export function configFromSettings(settings: AppSettings): AnalysisConfig {
  return {
    tolerance: settings.defaultTolerance,
    enableAI: false,
    aiModel: settings.aiModel,
    conceptMap: settings.conceptMap,
    excludedEmployeeIds: settings.excludedEmployeeIds,
    thresholds: {
      reviewThreshold: settings.reviewThreshold,
      incidentThreshold: settings.incidentThreshold,
    },
  };
}
