export type EmployeeDisambiguationData = {
  pendingId: string;
  candidates: Array<{ choiceId: string; label: string }>;
};

export const isEmployeeDisambiguationPart = (
  part: unknown,
): part is { type: "data-employee-disambiguation"; data: EmployeeDisambiguationData } => {
  if (!part || typeof part !== "object" || !("type" in part) || !("data" in part)) return false;
  if (part.type !== "data-employee-disambiguation") return false;
  const data = part.data;
  if (!data || typeof data !== "object" || !("pendingId" in data) || !("candidates" in data)) {
    return false;
  }
  return typeof data.pendingId === "string" && Array.isArray(data.candidates);
};
