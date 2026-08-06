import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { runIdempotent } from "../idempotency";
import { withTransaction } from "../transaction";

export type PersistedAttachment = {
  id: string;
  conversationId: string;
  messageId: string | null;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  checksum: string;
  relativePath: string;
  createdAt: string;
};

type Row = Record<string, unknown>;
const map = (row: Row): PersistedAttachment => ({
  id: String(row.id),
  conversationId: String(row.conversation_id),
  messageId: typeof row.message_id === "string" ? row.message_id : null,
  fileName: String(row.file_name),
  mimeType: String(row.mime_type),
  sizeBytes: Number(row.size_bytes),
  checksum: String(row.checksum),
  relativePath: String(row.relative_path),
  createdAt: String(row.created_at),
});

export const createAttachmentRepository = (database: DatabaseSync = getDatabase()) => ({
  listByConversation: (companyId: CompanyId, conversationId: string): PersistedAttachment[] => {
    if (
      !database
        .prepare("SELECT 1 FROM conversations WHERE id = ? AND company_id = ?")
        .get(conversationId, companyId)
    ) {
      throw new Error("La conversación no pertenece a la empresa activa.");
    }
    return (
      database
        .prepare(
          "SELECT * FROM attachments WHERE conversation_id = ? ORDER BY created_at ASC, id ASC",
        )
        .all(conversationId) as Row[]
    ).map(map);
  },
  create: async (input: {
    companyId: CompanyId;
    conversationId: string;
    id: string;
    messageId?: string | null;
    fileName: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    relativePath: string;
    clientMutationId?: string;
  }): Promise<PersistedAttachment> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        if (
          !input.relativePath.startsWith("uploads/") ||
          input.relativePath.includes("\\") ||
          input.relativePath.split("/").some((segment) => segment === "..")
        ) {
          throw new Error("La ruta del adjunto no es válida.");
        }
        if (
          !database
            .prepare("SELECT 1 FROM conversations WHERE id = ? AND company_id = ?")
            .get(input.conversationId, input.companyId)
        ) {
          throw new Error("La conversación no pertenece a la empresa activa.");
        }
        const timestamp = new Date().toISOString();
        database
          .prepare(
            "INSERT INTO attachments (id, conversation_id, message_id, file_name, mime_type, size_bytes, checksum, relative_path, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            input.id,
            input.conversationId,
            input.messageId ?? null,
            input.fileName,
            input.mimeType,
            input.sizeBytes,
            input.checksum,
            input.relativePath,
            timestamp,
          );
        return map(database.prepare("SELECT * FROM attachments WHERE id = ?").get(input.id) as Row);
      };
      return input.clientMutationId
        ? runIdempotent(database, {
            clientMutationId: input.clientMutationId,
            operation: "attachment.create",
            resourceType: "attachment",
            resourceId: input.id,
            execute: operation,
          })
        : withTransaction(database, operation);
    }),
});
