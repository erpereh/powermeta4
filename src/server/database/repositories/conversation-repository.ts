import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { Chat } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { runIdempotent } from "../idempotency";
import { withTransaction } from "../transaction";

type Row = Record<string, unknown>;

const now = () => new Date().toISOString();

const ensureCompany = (database: DatabaseSync, companyId: CompanyId): void => {
  if (!database.prepare("SELECT 1 FROM companies WHERE id = ?").get(companyId)) {
    throw new Error("La empresa no existe.");
  }
};

const mapChat = (row: Row): Chat => ({
  id: String(row.id),
  title: typeof row.title === "string" ? row.title : "Nuevo chat",
  favorite: row.favorite === 1,
  updatedAt: String(row.updated_at),
  headMessageId: typeof row.head_message_id === "string" ? row.head_message_id : null,
  messages: [],
});

export const createConversationRepository = (database: DatabaseSync = getDatabase()) => {
  const get = (companyId: CompanyId, conversationId: string): Chat => {
    ensureCompany(database, companyId);
    const row = database
      .prepare(
        "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE id = ? AND company_id = ?",
      )
      .get(conversationId, companyId) as Row | undefined;
    if (!row) throw new Error("La conversación no pertenece a la empresa activa.");
    return mapChat(row);
  };

  return {
    get,
    listByCompany: (companyId: CompanyId): Chat[] => {
      ensureCompany(database, companyId);
      return (
        database
          .prepare(
            "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE company_id = ? ORDER BY updated_at DESC, id DESC",
          )
          .all(companyId) as Row[]
      ).map(mapChat);
    },
    create: async (
      companyId: CompanyId,
      conversationId: string,
      clientMutationId?: string,
    ): Promise<Chat> =>
      withRepositoryWrite(async () => {
        const operation = () => {
          ensureCompany(database, companyId);
          const timestamp = now();
          database
            .prepare(
              "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES (?, ?, 'Nuevo chat', 0, ?, ?)",
            )
            .run(conversationId, companyId, timestamp, timestamp);
          return get(companyId, conversationId);
        };
        return clientMutationId
          ? runIdempotent(database, {
              clientMutationId,
              operation: "conversation.create",
              resourceType: "conversation",
              resourceId: conversationId,
              execute: operation,
            })
          : withTransaction(database, operation);
      }),
    setHead: async (
      companyId: CompanyId,
      conversationId: string,
      headMessageId: string | null,
      clientMutationId?: string,
    ): Promise<void> =>
      withRepositoryWrite(async () => {
        const operation = () => {
          get(companyId, conversationId);
          if (
            headMessageId &&
            !database
              .prepare("SELECT 1 FROM messages WHERE id = ? AND conversation_id = ?")
              .get(headMessageId, conversationId)
          ) {
            throw new Error("La rama no pertenece a la conversación.");
          }
          database
            .prepare("UPDATE conversations SET head_message_id = ?, updated_at = ? WHERE id = ?")
            .run(headMessageId, now(), conversationId);
        };
        if (clientMutationId) {
          runIdempotent(database, {
            clientMutationId,
            operation: "conversation.head",
            resourceType: "conversation",
            resourceId: conversationId,
            execute: operation,
          });
        } else {
          withTransaction(database, operation);
        }
      }),
  };
};
