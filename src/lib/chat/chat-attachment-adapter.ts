import type { AttachmentAdapter, CompleteAttachment } from "@assistant-ui/react";
import { z } from "zod";

import {
  ATTACHMENT_ACCEPT,
  MAX_ATTACHMENTS,
  MAX_FILE_BYTES,
  attachmentDownloadUrl,
  attachmentSchema,
  type ChatAttachment,
} from "./chat-data";

const FILE_REFERENCE = "powermeta4-attachment";

export const toRuntimeAttachment = (attachment: ChatAttachment): CompleteAttachment => ({
  id: attachment.id,
  type: "document",
  name: attachment.name,
  contentType: attachment.mimeType,
  status: { type: "complete" },
  content: [{ type: "data", name: FILE_REFERENCE, data: attachment }],
});

export const getRuntimeAttachments = (
  attachments: readonly {
    id: string;
    content?: CompleteAttachment["content"];
  }[],
) =>
  attachments.flatMap((attachment) => {
    const part = attachment.content?.find(
      (part) => part.type === "data" && part.name === FILE_REFERENCE,
    );
    const result = attachmentSchema.safeParse(part?.type === "data" ? part.data : undefined);
    return result.success && result.data.id === attachment.id ? [result.data] : [];
  });

export function createChatAttachmentAdapter(
  companyId: string,
  conversationId: string,
): AttachmentAdapter & {
  release: (ids: readonly string[]) => void;
} {
  const pending = new Map<string, ChatAttachment | null>();
  const url = (id: string) => attachmentDownloadUrl(companyId, conversationId, id);
  const discard = (id: string) => fetch(url(id), { method: "DELETE" }).catch(() => undefined);
  return {
    accept: ATTACHMENT_ACCEPT,
    release: (ids) => ids.forEach((id) => pending.delete(id)),
    async *add({ file }) {
      if (file.size > MAX_FILE_BYTES) throw new Error("Cada archivo admite hasta 5 MiB.");
      if (pending.size >= MAX_ATTACHMENTS)
        throw new Error("Puedes adjuntar hasta tres archivos por mensaje.");
      const id = crypto.randomUUID();
      pending.set(id, null);
      const initial = {
        id,
        type: "document",
        name: file.name,
        file,
        contentType: file.type,
      } as const;
      yield { ...initial, status: { type: "running", reason: "uploading", progress: 0 } };
      try {
        const body = new FormData();
        body.set("file", file);
        const response = await fetch(url(id), { method: "POST", body });
        const payload: unknown = await response.json().catch(() => null);
        const parsed = attachmentSchema.safeParse(payload);
        if (!response.ok || !parsed.success || parsed.data.id !== id) {
          const failure = z.object({ message: z.string() }).safeParse(payload);
          throw new Error(
            failure.success ? failure.data.message : "No se pudo adjuntar el archivo.",
          );
        }
        if (!pending.has(id)) {
          await discard(id);
          return;
        }
        pending.set(id, parsed.data);
        yield {
          ...initial,
          name: parsed.data.name,
          status: { type: "requires-action", reason: "composer-send" },
        };
      } catch (error) {
        pending.delete(id);
        const message = error instanceof Error ? error.message : "No se pudo adjuntar el archivo.";
        yield { ...initial, status: { type: "incomplete", reason: "error", message } };
      }
    },
    async send(attachment) {
      const file = pending.get(attachment.id);
      if (!file) throw new Error("Completa o retira los adjuntos con error antes de enviar.");
      return toRuntimeAttachment(file);
    },
    async remove(attachment) {
      pending.delete(attachment.id);
      await discard(attachment.id);
    },
  };
}
