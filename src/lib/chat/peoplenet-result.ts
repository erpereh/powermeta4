import { z } from "zod";

export const PEOPLENET_PAGE_SIZE = 25;
const cell = z.union([z.string(), z.number().finite(), z.null()]);
const link = z.object({
  label: z.string(),
  href: z.string().regex(/^\/(?:tools\/|api\/portal\/)/),
});

export const peopleNetResultSchema = z.object({
  debug: z.boolean(),
  source: link,
  document: link.optional(),
  message: z.string().optional(),
  filters: z.array(z.string()),
  columns: z.array(z.string()),
  rows: z.array(z.array(cell)).max(PEOPLENET_PAGE_SIZE),
  total: z.number().int().nonnegative(),
  page: z.number().int().nonnegative(),
  calculations: z.array(z.object({ label: z.string(), value: z.number().finite() })),
});

export type PeopleNetResult = z.infer<typeof peopleNetResultSchema>;
export type PeopleNetCell = z.infer<typeof cell>;
