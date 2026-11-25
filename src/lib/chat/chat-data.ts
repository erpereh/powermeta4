import { z } from "zod";

import type { Message, MessageContent } from "@/types/chat";
import { PEOPLENET_ACTIONS } from "./peoplenet-query";

export const MAX_ATTACHMENTS = 3;
export const MAX_FILE_BYTES = 5 * 1024 * 1024;
export const ATTACHMENT_MIME_TYPES = {
  pdf: "application/pdf",
  txt: "text/plain",
  md: "text/markdown",
  csv: "text/csv",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
} as const;
export const ATTACHMENT_ACCEPT = Object.keys(ATTACHMENT_MIME_TYPES)
  .map((type) => `.${type}`)
  .join(",");
export const ATTACHMENTS_PART = "powermeta4-attachments";
export const SOURCES_PART = "powermeta4-sources";
export const PEOPLENET_RECIPE_PART = "powermeta4-peoplenet-recipe";

export const attachmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(180),
  mimeType: z.string(),
  sizeBytes: z.number().int().positive().max(MAX_FILE_BYTES),
});
export type ChatAttachment = z.infer<typeof attachmentSchema>;

export const sourcesSchema = z
  .array(
    z.discriminatedUnion("kind", [
      z.object({
        kind: z.literal("manual"),
        id: z.string().min(1).max(160),
        name: z.string(),
        page: z.number().int().positive(),
        version: z.number().int().positive(),
      }),
      z.object({
        kind: z.literal("attachment"),
        id: z.string().uuid(),
        name: z.string(),
        partial: z.boolean(),
      }),
      z.object({
        kind: z.literal("peoplenet"),
        id: z.enum(PEOPLENET_ACTIONS),
        name: z.literal("PeopleNet"),
      }),
      z.object({
        kind: z.literal("peoplenet-call"),
        id: z.string().uuid(),
        action: z.enum([...PEOPLENET_ACTIONS, "analysis"]),
        name: z.literal("PeopleNet"),
      }),
      z.object({
        kind: z.literal("peoplenet-context"),
        id: z.literal("peoplenet"),
        name: z.literal("PeopleNet"),
      }),
    ]),
  )
  .max(24);
export type ChatSource = z.infer<typeof sourcesSchema>[number];
export const isPeopleNetSource = (source: ChatSource) =>
  source.kind === "peoplenet" ||
  source.kind === "peoplenet-call" ||
  source.kind === "peoplenet-context";

export const readChatAttachments = (content: MessageContent): ChatAttachment[] => {
  const part =
    typeof content === "string"
      ? undefined
      : content.find((part) => part.type === "data" && part.name === ATTACHMENTS_PART);
  const result = z
    .array(attachmentSchema)
    .max(MAX_ATTACHMENTS)
    .safeParse(part?.type === "data" ? part.data : undefined);
  return result.success ? result.data : [];
};

export const readChatSources = (content: MessageContent): ChatSource[] => {
  const part =
    typeof content === "string"
      ? undefined
      : content.find((part) => part.type === "data" && part.name === SOURCES_PART);
  const result = sourcesSchema.safeParse(part?.type === "data" ? part.data : undefined);
  return result.success ? result.data : [];
};

export const stripInternalParts = (content: MessageContent) =>
  typeof content === "string"
    ? content
    : content.filter(
        (part) =>
          part.type !== "data" ||
          (part.name !== ATTACHMENTS_PART &&
            part.name !== SOURCES_PART &&
            part.name !== PEOPLENET_RECIPE_PART),
      );

export const withChatAttachments = (
  content: MessageContent,
  attachments: ChatAttachment[],
): MessageContent => appendPart(content, ATTACHMENTS_PART, attachments);

export const withChatSources = (content: MessageContent, sources: ChatSource[]): MessageContent =>
  appendPart(content, SOURCES_PART, sources);

function appendPart(
  content: MessageContent,
  name: string,
  data: ChatAttachment[] | ChatSource[],
): MessageContent {
  const parts =
    typeof content === "string"
      ? [{ type: "text" as const, text: content }]
      : content.filter((part) => part.type !== "data" || part.name !== name);
  return data.length ? [...parts, { type: "data", name, data }] : parts;
}

export const attachmentDownloadUrl = (companyId: string, conversationId: string, id: string) =>
  `/api/chat/attachments?${new URLSearchParams({ companyId, conversationId, id })}`;

export const attachmentRefsFromBranch = (branch: readonly Message[]): ChatAttachment[] => {
  const byId = new Map<string, ChatAttachment>();
  for (const message of branch.toReversed()) {
    if (message.role !== "user") continue;
    for (const attachment of readChatAttachments(message.content)) {
      if (!byId.has(attachment.id)) byId.set(attachment.id, attachment);
    }
  }
  return [...byId.values()];
};
