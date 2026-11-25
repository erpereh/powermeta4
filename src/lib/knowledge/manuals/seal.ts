import { readFile } from "node:fs/promises";
import path from "node:path";

import { z } from "zod";

import { GENERATION_ID, SHA256, indexPath } from "./config";

const acceptanceIndex = {
  generation: z.string().regex(GENERATION_ID),
  inventoryHash: z.string().regex(SHA256),
  indexSha256: z.string().regex(SHA256),
};

export const acceptanceSchema = z
  .union([
    z.strictObject({
      ...acceptanceIndex,
      sampleSize: z.literal(20),
      correct: z.number().int().min(19).max(20),
      grounded: z.number().int().min(14).max(15),
      insufficient: z.literal(5),
    }),
    z.strictObject({
      ...acceptanceIndex,
      sampleSize: z.literal(40).optional(),
      correct: z.number().int().min(36).max(40),
      grounded: z.number().int().min(27).max(30),
      insufficient: z.number().int().min(9).max(10),
    }),
  ])
  .refine(({ correct, grounded, insufficient }) => correct === grounded + insufficient);

export const validationSchema = z.strictObject({
  acceptance: acceptanceSchema,
  validatedAt: z.string().datetime(),
});

export function validationPath(root: string, generation: string) {
  return path.join(path.dirname(indexPath(root, generation)), "acceptance.json");
}

export async function readValidation(root: string, generation: string) {
  try {
    return validationSchema.parse(
      JSON.parse(await readFile(validationPath(root, generation), "utf8")),
    );
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return null;
    throw error;
  }
}
