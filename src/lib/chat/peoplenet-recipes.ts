import "server-only";

import { z } from "zod/v4";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { analyzePeopleNet } from "./peoplenet-analysis";
import { type PeopleNetRead, PeopleNetScopeError, readPeopleNetQuery } from "./peoplenet-service";
import { analysisSchema, buildToolQuery, getPeopleTool, MAX_TOOL_CALLS } from "./peoplenet-tools";

const readRecipe = z.strictObject({
  id: z.uuid(),
  kind: z.literal("read"),
  tool: z.string().max(64),
  args: z.record(z.string(), z.unknown()),
});
const calculationRecipe = z.strictObject({
  id: z.uuid(),
  kind: z.literal("analysis"),
  args: analysisSchema,
});
const recipeSchema = z.strictObject({
  version: z.literal(1),
  companyId: z.string(),
  conversationId: z.string(),
  messageId: z.string(),
  mode: z.enum(["meta4", "debug"]),
  username: z.string(),
  calls: z.array(z.discriminatedUnion("kind", [readRecipe, calculationRecipe])).max(MAX_TOOL_CALLS),
  dependencies: z.array(readRecipe).max(MAX_TOOL_CALLS * 2),
  needsInput: z.boolean(),
});

export type ReadRecipe = z.infer<typeof readRecipe>;
export type ToolRecipe = z.infer<typeof recipeSchema>["calls"][number];
export type RunRecipe = z.infer<typeof recipeSchema>;
export type RecipeScope = Pick<
  RunRecipe,
  "companyId" | "conversationId" | "messageId" | "mode" | "username"
>;

export function recipeScope(
  auth: ResolvedAuthSession,
  companyId: string,
  conversationId: string,
  messageId: string,
): RecipeScope {
  return {
    companyId,
    conversationId,
    messageId,
    mode: auth.authContext.mode,
    username: auth.authContext.username,
  };
}

export const sealPeopleNetRecipe = (
  scope: RecipeScope,
  outcome: Pick<RunRecipe, "calls" | "dependencies" | "needsInput">,
) =>
  createDpapiAdapter().protectSecret(
    JSON.stringify(recipeSchema.parse({ version: 1, ...scope, ...outcome })),
  );

export async function openPeopleNetRecipe(
  ciphertext: string,
  scope: RecipeScope,
): Promise<RunRecipe | undefined> {
  try {
    const raw = await createDpapiAdapter().unprotectSecret(ciphertext);
    const plan = recipeSchema.safeParse(JSON.parse(raw));
    if (!plan.success) return;
    const recipe = plan.data;
    if (
      recipe.companyId === scope.companyId &&
      recipe.conversationId === scope.conversationId &&
      recipe.messageId === scope.messageId &&
      recipe.mode === scope.mode &&
      recipe.username === scope.username
    )
      return recipe;
  } catch {
    // A backup restored under a different Windows account cannot decrypt its recipes.
    return;
  }
}

export type ReadPeopleNetContext = {
  auth: ResolvedAuthSession;
  companyId: string;
  signal: AbortSignal;
  assertScope: () => Promise<void>;
};

export async function executePeopleNetRecipe(
  recipe: ReadRecipe,
  context: ReadPeopleNetContext,
  page = 0,
): Promise<PeopleNetRead> {
  const entry = getPeopleTool(recipe.tool);
  const input = entry?.schema.safeParse(recipe.args);
  const query =
    entry && input?.success ? buildToolQuery(entry.action, input.data, () => undefined) : undefined;
  if (
    !query ||
    query.structured?.metrics.some((metric) => !entry?.metrics.some((key) => key === metric))
  )
    throw new PeopleNetScopeError();
  await context.assertScope();
  const result = await readPeopleNetQuery(
    query,
    context.auth,
    context.companyId,
    page,
    context.signal,
  );
  await context.assertScope();
  return result;
}

export async function replayPeopleNetCall(
  recipe: RunRecipe,
  id: string,
  context: ReadPeopleNetContext,
  page: number,
): Promise<PeopleNetRead | undefined> {
  const call = recipe.calls.find((item) => item.id === id);
  if (!call) return;
  if (call.kind === "read") return executePeopleNetRecipe(call, context, page);
  const reads = [...recipe.calls, ...recipe.dependencies].filter(
    (item): item is ReadRecipe => item.kind === "read",
  );
  const left = reads.find((item) => item.id === call.args.left.ref);
  const right = reads.find((item) => item.id === call.args.right?.ref);
  if (!left || (call.args.right && !right)) return;
  const a = await executePeopleNetRecipe(left, context);
  const b = right
    ? right.id === left.id
      ? a
      : await executePeopleNetRecipe(right, context)
    : undefined;
  return analyzePeopleNet(call.args, a, b);
}
