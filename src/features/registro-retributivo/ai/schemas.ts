import { z } from "zod";

export const issueObservationSchema = z.object({
  observations: z.string().min(1),
  recommendedAction: z.string().min(1),
  severity: z.enum(["Alta", "Media", "Baja"]).optional(),
});

export type IssueObservation = z.infer<typeof issueObservationSchema>;
