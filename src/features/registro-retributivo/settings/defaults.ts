import type { AnalysisConfig, ConceptMappingRule, NormalizedConcept } from "@/features/registro-retributivo/types";

export interface AppSettings {
  readonly defaultTolerance: number;
  readonly reviewThreshold: number;
  readonly incidentThreshold: number;
  readonly excludedEmployeeIds: readonly string[];
  readonly conceptMap: readonly ConceptMappingRule[];
  readonly normalizedConcepts: readonly NormalizedConcept[];
}

export const DEFAULT_SETTINGS: AppSettings = {
  defaultTolerance: 1,
  reviewThreshold: 1,
  incidentThreshold: 50,
  excludedEmployeeIds: [],
  conceptMap: [],
  normalizedConcepts: [],
};

export const STORAGE_SCHEMA_VERSION = 2;

export function configFromSettings(settings: AppSettings): AnalysisConfig {
  return {
    tolerance: settings.defaultTolerance,
    conceptMap: settings.conceptMap,
    excludedEmployeeIds: settings.excludedEmployeeIds,
    thresholds: {
      reviewThreshold: settings.reviewThreshold,
      incidentThreshold: settings.incidentThreshold,
    },
  };
}
