import type { ModelOption } from "@/types/model";

export const mockModels: ModelOption[] = [
  {
    id: "luma-balanced",
    name: "Luma Balanced",
    description: "Equilibrado para el trabajo diario",
    tone: "balanced",
  },
  {
    id: "luma-fast",
    name: "Luma Fast",
    description: "Respuestas ágiles para iterar",
    tone: "fast",
  },
  {
    id: "luma-deep",
    name: "Luma Deep",
    description: "Más contexto para análisis complejos",
    tone: "deep",
  },
];
