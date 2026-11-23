import "server-only";

import { createHash } from "node:crypto";
import { mkdir, readFile, realpath, writeFile } from "node:fs/promises";
import path from "node:path";

import { getDatabase } from "@/server/database/client";
import { resolveLocalDataPaths } from "@/server/database/paths";
import {
  createAttachmentRepository,
  toChatAttachment,
} from "@/server/database/repositories/attachment-repository";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { CompanyId } from "@/types/workspace";

import {
  ChatAttachmentError,
  extractChatAttachment,
  getAttachmentFormat,
  sanitizeAttachmentName,
} from "./attachment-extraction";
import { type ChatAttachment, type ChatSource } from "./chat-data";
import { managedChatPath, removeManagedChatFiles, resolveManagedFile } from "./file-storage";

const DRAFT_TTL_MS = 24 * 60 * 60 * 1000;
const MAX_TURN_CHARS = 24_000;
const MAX_TURN_FILES = 6;

export async function stageChatAttachment(
  companyId: CompanyId,
  conversationId: string,
  id: string,
  file: File,
): Promise<ChatAttachment> {
  const fileName = sanitizeAttachmentName(file.name);
  const { mimeType } = getAttachmentFormat(fileName);
  const bytes = new Uint8Array(await file.arrayBuffer());
  await extractChatAttachment(fileName, bytes);

  const relativePath = `uploads/chat/${id}`;
  const filePath = managedChatPath(relativePath, "chat");
  const checksum = createHash("sha256").update(bytes).digest("hex");
  return withRepositoryWrite(async () => {
    const database = getDatabase();
    const createdAt = new Date().toISOString();
    const expired = database
      .prepare(
        `DELETE FROM attachments WHERE conversation_id = ? AND message_id IS NULL AND created_at < ?
       AND EXISTS (SELECT 1 FROM conversations WHERE id = ? AND company_id = ?) RETURNING relative_path`,
      )
      .all(
        conversationId,
        new Date(Date.now() - DRAFT_TTL_MS).toISOString(),
        conversationId,
        companyId,
      );
    await removeManagedChatFiles(
      expired.flatMap((row) => (typeof row.relative_path === "string" ? [row.relative_path] : [])),
    );
    const directory = path.dirname(filePath);
    await mkdir(directory, { recursive: true });
    if (
      (await realpath(directory)) !==
      path.join(await realpath(resolveLocalDataPaths().uploadsDir), "chat")
    ) {
      throw new Error("Ruta de adjuntos no disponible.");
    }
    await writeFile(filePath, bytes, { flag: "wx", mode: 0o600 });
    try {
      const result = database
        .prepare(
          `INSERT INTO attachments (id, conversation_id, file_name, mime_type, size_bytes, checksum, relative_path, created_at)
         SELECT ?, id, ?, ?, ?, ?, ?, ? FROM conversations WHERE id = ? AND company_id = ?`,
        )
        .run(
          id,
          fileName,
          mimeType,
          bytes.length,
          checksum,
          relativePath,
          createdAt,
          conversationId,
          companyId,
        );
      if (!result.changes) throw new ChatAttachmentError("No se encontró la conversación.", 404);
    } catch (error) {
      await removeManagedChatFiles([relativePath]);
      throw error;
    }
    return { id, name: fileName, mimeType, sizeBytes: bytes.length };
  });
}

export async function discardChatDraft(
  companyId: CompanyId,
  conversationId: string,
  id: string,
): Promise<void> {
  await withRepositoryWrite(async () => {
    const database = getDatabase();
    const row = database
      .prepare(
        `DELETE FROM attachments WHERE id = ? AND conversation_id = ? AND message_id IS NULL
       AND EXISTS (SELECT 1 FROM conversations WHERE id = ? AND company_id = ?)
       RETURNING relative_path`,
      )
      .get(id, conversationId, conversationId, companyId);
    if (typeof row?.relative_path === "string") await removeManagedChatFiles([row.relative_path]);
  });
}

export async function loadChatAttachmentContext(
  companyId: CompanyId,
  conversationId: string,
  refs: readonly ChatAttachment[],
  signal: AbortSignal,
) {
  if (!refs.length) return { items: [], sources: [], omitted: 0 };
  const selected = refs.slice(0, MAX_TURN_FILES);
  const perFileBudget = Math.floor(MAX_TURN_CHARS / selected.length);
  const repository = createAttachmentRepository();
  const items: Array<{ name: string; text: string; partial: boolean }> = [];
  const sources: ChatSource[] = [];
  let unavailable = 0;
  for (const ref of selected) {
    signal.throwIfAborted();
    try {
      const attachment = repository.get(companyId, conversationId, ref.id);
      if (!attachment?.messageId) throw new Error("Adjunto no vinculado.");
      const bytes = await readFile(await resolveManagedFile(attachment.relativePath, "chat"), {
        signal,
      });
      const extracted = await extractChatAttachment(attachment.fileName, bytes);
      const partial = extracted.partial || extracted.text.length > perFileBudget;
      items.push({
        name: attachment.fileName,
        text: extracted.text.slice(0, perFileBudget),
        partial,
      });
      const { id, name } = toChatAttachment(attachment);
      sources.push({ kind: "attachment", id, name, partial });
    } catch {
      signal.throwIfAborted();
      unavailable += 1;
    }
  }
  return { items, sources, omitted: refs.length - selected.length + unavailable };
}
