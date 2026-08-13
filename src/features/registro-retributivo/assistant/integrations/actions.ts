export type AppNavigationIntent =
  | { type: "assistant_conversation"; conversationId: string }
  | { type: "settings_ai" }
  | { type: "open_person"; analysisId: string; personId: string }
  | {
      type: "open_cuadre";
      analysisId: string;
      personId?: string;
      view?: "non_normalized" | "normalized_variables";
    }
  | { type: "open_grouping"; analysisId: string; groupingId: string }
  | { type: "show_sources"; sourceIds: string[] };
