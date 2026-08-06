import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { Message, MessageContent, MessageRole, PersistedMessageStatus } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { runIdempotent } from "../idempotency";
import { withTransaction } from "../transaction";

type Row = Record<string, unknown>;

const statuses: readonly PersistedMessageStatus[] = [
  "running",
  "complete",
  "incomplete",
  "cancelled",
  "failed",
];
const terminalStatuses = new Set<PersistedMessageStatus>(["complete", "cancelled", "failed"]);
const now = () => new Date().toISOString();
const validateErrorCode = (value: string | null | undefined): string | null => {
  if (value === null || value === undefined) return null;
  if (!/^[A-Z][A-Z0-9_]{0,63}$/.test(value)) {
    throw new Error("El código de error no es válido.");
  }
  return value;
};
const parseContent = (value: unknown): MessageContent => {
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? (parsed as MessageContent) : [];
  } catch {
    return [];
  }
};
const mapMessage = (row: Row): Message => ({
  id: String(row.id),
  conversationId: String(row.conversation_id),
  role: row.role === "assistant" ? "assistant" : "user",
  content: parseContent(row.content_json),
  createdAt: String(row.created_at),
  updatedAt: String(row.updated_at),
  status: statuses.includes(row.status as PersistedMessageStatus)
    ? (row.status as PersistedMessageStatus)
    : "incomplete",
  parentMessageId: typeof row.parent_message_id === "string" ? row.parent_message_id : null,
  generationId: typeof row.generation_id === "string" ? row.generation_id : null,
  sequence: typeof row.sequence === "number" ? row.sequence : Number(row.sequence ?? 0),
  errorCode: typeof row.error_code === "string" ? row.error_code : null,
});
const ensureConversation = (
  database: DatabaseSync,
  companyId: CompanyId,
  conversationId: string,
): void => {
  if (
    !database
      .prepare("SELECT 1 FROM conversations WHERE id = ? AND company_id = ?")
      .get(conversationId, companyId)
  ) {
    throw new Error("La conversación no pertenece a la empresa activa.");
  }
};

export const createMessageRepository = (database: DatabaseSync = getDatabase()) => {
  const get = (companyId: CompanyId, conversationId: string, messageId: string): Message => {
    ensureConversation(database, companyId, conversationId);
    const row = database
      .prepare("SELECT * FROM messages WHERE id = ? AND conversation_id = ?")
      .get(messageId, conversationId) as Row | undefined;
    if (!row) throw new Error("El mensaje no pertenece a la conversación.");
    return mapMessage(row);
  };
  const receipt = (companyId: CompanyId, conversationId: string, messageId: string) => ({
    encode: (message: Message) => ({
      messageId: message.id,
      status: message.status,
      sequence: message.sequence ?? 0,
    }),
    decode: () => get(companyId, conversationId, messageId),
  });
  const upsert = async (input: {
    companyId: CompanyId;
    conversationId: string;
    id: string;
    role: MessageRole;
    content: MessageContent;
    status: PersistedMessageStatus;
    parentMessageId?: string | null;
    generationId?: string | null;
    sequence?: number;
    errorCode?: string | null;
    clientMutationId?: string;
  }): Promise<Message> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, input.companyId, input.conversationId);
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, error_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET content_json = excluded.content_json, status = excluded.status, generation_id = excluded.generation_id, sequence = excluded.sequence, error_code = excluded.error_code, updated_at = excluded.updated_at WHERE messages.conversation_id = excluded.conversation_id AND messages.sequence < excluded.sequence AND messages.status NOT IN ('complete', 'cancelled', 'failed')",
          )
          .run(
            input.id,
            input.conversationId,
            input.parentMessageId ?? null,
            input.role,
            JSON.stringify(input.content),
            input.status,
            input.generationId ?? null,
            input.sequence ?? 0,
            validateErrorCode(input.errorCode),
            timestamp,
            timestamp,
          );
        return get(input.companyId, input.conversationId, input.id);
      };
      return input.clientMutationId
        ? runIdempotent(database, {
            clientMutationId: input.clientMutationId,
            operation: "message.upsert",
            resourceType: "message",
            resourceId: input.id,
            execute: operation,
            receipt: receipt(input.companyId, input.conversationId, input.id),
          })
        : withTransaction(database, operation);
    });
  return {
    get,
    listByConversation: (companyId: CompanyId, conversationId: string): Message[] => {
      ensureConversation(database, companyId, conversationId);
      return (
        database
          .prepare(
            "SELECT * FROM messages WHERE conversation_id = ? ORDER BY created_at ASC, sequence ASC, id ASC",
          )
          .all(conversationId) as Row[]
      ).map(mapMessage);
    },
    upsert,
    update: async (input: {
      companyId: CompanyId;
      conversationId: string;
      messageId: string;
      content?: MessageContent;
      status?: PersistedMessageStatus;
      generationId?: string | null;
      sequence: number;
      errorCode?: string | null;
      clientMutationId?: string;
    }): Promise<Message> =>
      withRepositoryWrite(async () => {
        const operation = () => {
          const current = get(input.companyId, input.conversationId, input.messageId);
          if (
            input.sequence <= (current.sequence ?? 0) ||
            terminalStatuses.has(current.status) ||
            (input.generationId &&
              current.generationId &&
              input.generationId !== current.generationId)
          )
            return current;
          database
            .prepare(
              "UPDATE messages SET content_json = COALESCE(?, content_json), status = COALESCE(?, status), generation_id = COALESCE(?, generation_id), sequence = ?, error_code = ?, updated_at = ? WHERE id = ?",
            )
            .run(
              input.content ? JSON.stringify(input.content) : null,
              input.status ?? null,
              input.generationId ?? null,
              input.sequence,
              validateErrorCode(input.errorCode),
              now(),
              input.messageId,
            );
          return get(input.companyId, input.conversationId, input.messageId);
        };
        return input.clientMutationId
          ? runIdempotent(database, {
              clientMutationId: input.clientMutationId,
              operation: "message.update",
              resourceType: "message",
              resourceId: input.messageId,
              execute: operation,
              receipt: receipt(input.companyId, input.conversationId, input.messageId),
            })
          : withTransaction(database, operation);
      }),
    finalize: async (input: {
      companyId: CompanyId;
      conversationId: string;
      messageId: string;
      content?: MessageContent;
      status: Extract<PersistedMessageStatus, "complete" | "cancelled" | "failed">;
      generationId?: string | null;
      sequence: number;
      errorCode?: string | null;
      clientMutationId?: string;
    }): Promise<Message> =>
      withRepositoryWrite(async () => {
        const operation = () => {
          const current = get(input.companyId, input.conversationId, input.messageId);
          if (
            input.sequence <= (current.sequence ?? 0) ||
            terminalStatuses.has(current.status) ||
            (input.generationId &&
              current.generationId &&
              input.generationId !== current.generationId)
          ) {
            return current;
          }
          database
            .prepare(
              "UPDATE messages SET content_json = COALESCE(?, content_json), status = ?, generation_id = COALESCE(?, generation_id), sequence = ?, error_code = ?, updated_at = ? WHERE id = ?",
            )
            .run(
              input.content ? JSON.stringify(input.content) : null,
              input.status,
              input.generationId ?? null,
              input.sequence,
              validateErrorCode(input.errorCode),
              now(),
              input.messageId,
            );
          database
            .prepare("UPDATE conversations SET head_message_id = ?, updated_at = ? WHERE id = ?")
            .run(input.messageId, now(), input.conversationId);
          return get(input.companyId, input.conversationId, input.messageId);
        };
        return input.clientMutationId
          ? runIdempotent(database, {
              clientMutationId: input.clientMutationId,
              operation: "message.finalize",
              resourceType: "message",
              resourceId: input.messageId,
              execute: operation,
              receipt: receipt(input.companyId, input.conversationId, input.messageId),
            })
          : withTransaction(database, operation);
      }),
  };
};
