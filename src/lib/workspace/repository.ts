import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { mockModels } from "@/data/mock-models";
import { isChatColorName, isChatIconName } from "@/lib/chat-customization";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { getTool } from "@/lib/tools/registry";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { getDatabase } from "@/server/database/client";
import { runIdempotent } from "@/server/database/idempotency";
import { withTransaction } from "@/server/database/transaction";
import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/server/database/version";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";
import type { WorkspaceSnapshot } from "@/lib/local-database/dtos";
import type {
  Chat,
  Message,
  MessageContent,
  MessageRole,
  PersistedMessageStatus,
} from "@/types/chat";
import type { Company, CompanyId, WorkspaceData } from "@/types/workspace";

export const ACTIVE_COMPANY_SETTING_KEY = "activeCompanyId";
export const ACTIVE_CHAT_SETTING_KEY = "activeChatId";
export const SELECTED_MODEL_SETTING_KEY = "selectedModelId";

type Row = Record<string, unknown>;

const appVersion = process.env.npm_package_version ?? "0.1.0";
const now = () => new Date().toISOString();

const isPersistedStatus = (value: unknown): value is PersistedMessageStatus =>
  value === "running" ||
  value === "complete" ||
  value === "incomplete" ||
  value === "cancelled" ||
  value === "failed";

const isTerminalStatus = (value: PersistedMessageStatus): boolean =>
  value === "complete" || value === "cancelled" || value === "failed";

const validateErrorCode = (value: string | null | undefined): string | null => {
  if (value === null || value === undefined) return null;
  if (!/^[A-Z][A-Z0-9_]{0,63}$/.test(value)) {
    throw new Error("El código de error no es válido.");
  }
  return value;
};

const safeJsonParse = (value: unknown): unknown => {
  if (typeof value !== "string") return null;
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
};

const serializeContent = (content: MessageContent): string => JSON.stringify(content);
const parseContent = (value: unknown): MessageContent => {
  const parsed = safeJsonParse(value);
  return Array.isArray(parsed) ? (parsed as MessageContent) : [];
};
const stringValue = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;
const nullableString = (value: unknown): string | null =>
  typeof value === "string" ? value : null;
const numberValue = (value: unknown, fallback = 0): number =>
  typeof value === "number" ? value : Number(value ?? fallback);

const mapCompany = (row: Row): Company => ({
  id: stringValue(row.id) as CompanyId,
  name: stringValue(row.name),
  shortName: stringValue(row.short_name),
  icon: row.icon === "briefcase" || row.icon === "layers" ? row.icon : "building",
  color: row.color === "purple" || row.color === "green" ? row.color : "blue",
});

const mapMessage = (row: Row): Message => ({
  id: stringValue(row.id),
  conversationId: stringValue(row.conversation_id),
  role: row.role === "assistant" ? "assistant" : "user",
  content: parseContent(row.content_json),
  createdAt: stringValue(row.created_at),
  updatedAt: stringValue(row.updated_at),
  status: isPersistedStatus(row.status) ? row.status : "incomplete",
  parentMessageId: nullableString(row.parent_message_id),
  generationId: nullableString(row.generation_id),
  sequence: numberValue(row.sequence),
  errorCode: nullableString(row.error_code),
});

const mapConversation = (row: Row, messages: Message[]): Chat => ({
  id: stringValue(row.id),
  title: stringValue(row.title, "Nuevo chat"),
  favorite: row.favorite === 1,
  ...(typeof row.icon === "string" && isChatIconName(row.icon) ? { icon: row.icon } : {}),
  ...(typeof row.icon_color === "string" && isChatColorName(row.icon_color)
    ? { iconColor: row.icon_color }
    : {}),
  updatedAt: stringValue(row.updated_at),
  headMessageId: nullableString(row.head_message_id),
  messages,
});

const parseSettingString = (value: unknown): string | null => {
  const parsed = safeJsonParse(value);
  return typeof parsed === "string" ? parsed : typeof value === "string" ? value : null;
};

const ensureCompany = (database: DatabaseSync, companyId: CompanyId): Row => {
  const company = database
    .prepare("SELECT id, name, short_name, icon, color FROM companies WHERE id = ?")
    .get(companyId);
  if (!company) throw new Error("La empresa no existe.");
  return company;
};

const ensureConversation = (
  database: DatabaseSync,
  companyId: CompanyId,
  conversationId: string,
): Row => {
  const conversation = database
    .prepare(
      "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE id = ?",
    )
    .get(conversationId);
  if (!conversation || conversation.company_id !== companyId) {
    throw new Error("La conversación no pertenece a la empresa activa.");
  }
  return conversation;
};

const readMessages = (database: DatabaseSync, conversationId: string): Message[] =>
  (
    database
      .prepare(
        "SELECT id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, error_code, created_at, updated_at FROM messages WHERE conversation_id = ? ORDER BY created_at ASC, sequence ASC, id ASC",
      )
      .all(conversationId) as Row[]
  ).map(mapMessage);

const readConversation = (database: DatabaseSync, conversationId: string): Chat => {
  const conversation = database
    .prepare(
      "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE id = ?",
    )
    .get(conversationId);
  if (!conversation) throw new Error("La conversación no existe.");
  return mapConversation(conversation, readMessages(database, conversationId));
};

const conversationReceipt = (
  database: DatabaseSync,
  companyId: CompanyId,
  fallbackConversationId?: string,
) => ({
  encode: (chat: Chat) => ({
    conversationId: chat.id,
    title: chat.title,
    favorite: chat.favorite,
    headMessageId: chat.headMessageId ?? null,
    updatedAt: chat.updatedAt,
  }),
  decode: (value: unknown) => {
    const candidate =
      typeof value === "object" &&
      value !== null &&
      "conversationId" in value &&
      typeof value.conversationId === "string"
        ? value.conversationId
        : fallbackConversationId;
    if (!candidate) throw new Error("El recibo no identifica la conversación.");
    ensureConversation(database, companyId, candidate);
    return readConversation(database, candidate);
  },
});

const updateSetting = (
  database: DatabaseSync,
  table: "app_settings" | "workspace_settings",
  key: string,
  value: unknown,
  companyId?: string,
) => {
  const timestamp = now();
  const valueJson = JSON.stringify(value);
  if (table === "app_settings") {
    database
      .prepare(
        "INSERT INTO app_settings (key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
      )
      .run(key, valueJson, timestamp, timestamp);
    return;
  }
  if (!companyId) throw new Error("La configuración de empresa requiere companyId.");
  database
    .prepare(
      "INSERT INTO workspace_settings (id, company_id, key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(company_id, key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
    )
    .run(crypto.randomUUID(), companyId, key, valueJson, timestamp, timestamp);
};

const recoverInterruptedMessages = (database: DatabaseSync): void => {
  const timestamp = now();
  const recovered = database
    .prepare(
      "UPDATE messages SET status = 'incomplete', error_code = 'PROCESS_RESTARTED', updated_at = ? WHERE status = 'running'",
    )
    .run(timestamp);
  if (Number(recovered.changes) === 0) return;
  database
    .prepare(
      "UPDATE conversations SET head_message_id = (SELECT messages.id FROM messages WHERE messages.conversation_id = conversations.id AND messages.status = 'incomplete' AND messages.error_code = 'PROCESS_RESTARTED' ORDER BY messages.updated_at DESC, messages.sequence DESC, messages.id DESC LIMIT 1), updated_at = ? WHERE EXISTS (SELECT 1 FROM messages WHERE messages.conversation_id = conversations.id AND messages.status = 'incomplete' AND messages.error_code = 'PROCESS_RESTARTED')",
    )
    .run(timestamp);
};

export const createWorkspaceRepository = (database: DatabaseSync = getDatabase()) => {
  const companyRepository = createCompanyRepository(database);
  const getCompanies = (): Company[] => companyRepository.list();

  const getActiveCompanyId = async (companies: readonly Company[]): Promise<CompanyId | null> => {
    const stored = database
      .prepare("SELECT value_json FROM app_settings WHERE key = ?")
      .get(ACTIVE_COMPANY_SETTING_KEY);
    const storedId = parseSettingString(stored?.value_json) as CompanyId | null;
    const activeCompanyId =
      storedId && companies.some((company) => company.id === storedId)
        ? storedId
        : (companies[0]?.id ?? null);
    if (activeCompanyId && activeCompanyId !== storedId) {
      await withRepositoryWrite(async () => {
        updateSetting(database, "app_settings", ACTIVE_COMPANY_SETTING_KEY, activeCompanyId);
      });
    }
    return activeCompanyId;
  };

  const getWorkspaceData = (company: Company): WorkspaceData => {
    const conversations = database
      .prepare(
        "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE company_id = ? ORDER BY updated_at DESC, id DESC",
      )
      .all(company.id) as Row[];
    const settings = database
      .prepare("SELECT key, value_json FROM workspace_settings WHERE company_id = ?")
      .all(company.id) as Row[];
    const visits = database
      .prepare(
        "SELECT tool_id, created_at FROM tool_activity WHERE company_id = ? ORDER BY created_at DESC LIMIT 8",
      )
      .all(company.id) as Row[];
    const selectedModelId =
      parseSettingString(
        settings.find((setting) => setting.key === SELECTED_MODEL_SETTING_KEY)?.value_json,
      ) ??
      mockModels[0]?.id ??
      "luma-balanced";
    const requestedActiveChatId = parseSettingString(
      settings.find((setting) => setting.key === ACTIVE_CHAT_SETTING_KEY)?.value_json,
    );
    const activeChatId =
      requestedActiveChatId &&
      conversations.some((conversation) => conversation.id === requestedActiveChatId)
        ? requestedActiveChatId
        : conversations[0]?.id
          ? stringValue(conversations[0].id)
          : null;
    return {
      chats: conversations.map((conversation) =>
        mapConversation(conversation, readMessages(database, stringValue(conversation.id))),
      ),
      activeChatId,
      recentTools: visits
        .filter((visit) => Boolean(getTool(stringValue(visit.tool_id))))
        .map((visit) => ({
          toolId: stringValue(visit.tool_id),
          visitedAt: stringValue(visit.created_at),
        })),
      preferences: { selectedModelId },
    };
  };

  const getSnapshot = async (username: string): Promise<WorkspaceSnapshot> => {
    await withRepositoryWrite(async () => {
      withTransaction(database, () => recoverInterruptedMessages(database));
    });
    let companies = getCompanies();
    if (companies.length === 0) {
      await withRepositoryWrite(async () => {
        bootstrapDatabase(database);
      });
      companies = getCompanies();
    }
    const activeCompanyId = await getActiveCompanyId(companies);
    const workspaces: Partial<Record<CompanyId, WorkspaceData>> = {};
    for (const company of companies) workspaces[company.id] = getWorkspaceData(company);
    const soapSession = database
      .prepare("SELECT last_validated_at FROM soap_sessions WHERE id = 'global'")
      .get();
    return {
      companies,
      activeCompanyId,
      workspaces,
      session: {
        username,
        status: "authenticated",
        lastValidatedAt: nullableString(soapSession?.last_validated_at),
      },
      backupVersion: BACKUP_VERSION,
      databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
      appVersion,
    };
  };

  const getConversation = async (companyId: CompanyId, conversationId: string): Promise<Chat> => {
    ensureCompany(database, companyId);
    ensureConversation(database, companyId, conversationId);
    return readConversation(database, conversationId);
  };

  const createCompany = async (input: {
    name: string;
    id?: string;
    clientMutationId?: string;
  }): Promise<Company> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        const name = input.name.trim();
        if (!name) throw new Error("El nombre de empresa es obligatorio.");
        const id = input.id ?? crypto.randomUUID();
        const shortName = name.split(/\s+/).slice(0, 2).join(" ").slice(0, 24);
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
          )
          .run(id, name, shortName, "building", "blue", timestamp, timestamp);
        updateSetting(database, "app_settings", ACTIVE_COMPANY_SETTING_KEY, id);
        return mapCompany({ id, name, short_name: shortName, icon: "building", color: "blue" });
      };
      if (input.clientMutationId) {
        return runIdempotent(database, {
          clientMutationId: input.clientMutationId,
          operation: "company.create",
          resourceType: "company",
          resourceId: input.id,
          execute: operation,
        });
      }
      return withTransaction(database, operation);
    });

  const deleteCompany = async (
    companyId: CompanyId,
    clientMutationId?: string,
  ): Promise<CompanyId> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        const companies = getCompanies();
        if (companies.length <= 1) throw new Error("No se puede eliminar la última empresa.");
        ensureCompany(database, companyId);
        database.prepare("DELETE FROM companies WHERE id = ?").run(companyId);
        const remaining = getCompanies();
        const activeCompanyId = remaining[0]?.id;
        if (!activeCompanyId) throw new Error("No queda una empresa válida.");
        updateSetting(database, "app_settings", ACTIVE_COMPANY_SETTING_KEY, activeCompanyId);
        return activeCompanyId;
      };
      return clientMutationId
        ? runIdempotent(database, {
            clientMutationId,
            operation: "company.delete",
            resourceType: "company",
            resourceId: companyId,
            execute: operation,
          })
        : withTransaction(database, operation);
    });

  const setActiveCompany = async (companyId: CompanyId, clientMutationId?: string) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureCompany(database, companyId);
        updateSetting(database, "app_settings", ACTIVE_COMPANY_SETTING_KEY, companyId);
        return null;
      };
      if (clientMutationId) {
        runIdempotent(database, {
          clientMutationId,
          operation: "company.activate",
          resourceType: "company",
          resourceId: companyId,
          execute: operation,
        });
      } else {
        withTransaction(database, operation);
      }
    });

  const setActiveConversation = async (
    companyId: CompanyId,
    conversationId: string,
    clientMutationId?: string,
  ) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, companyId, conversationId);
        updateSetting(
          database,
          "workspace_settings",
          ACTIVE_CHAT_SETTING_KEY,
          conversationId,
          companyId,
        );
        return null;
      };
      if (clientMutationId) {
        runIdempotent(database, {
          clientMutationId,
          operation: "conversation.activate",
          resourceType: "conversation",
          resourceId: conversationId,
          execute: operation,
        });
      } else {
        withTransaction(database, operation);
      }
    });

  const createConversation = async (
    companyId: CompanyId,
    id?: string,
    clientMutationId?: string,
  ): Promise<Chat> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureCompany(database, companyId);
        const conversationId = id ?? crypto.randomUUID();
        const existing = database
          .prepare(
            "SELECT id, company_id, title, favorite, icon, icon_color, head_message_id, updated_at FROM conversations WHERE id = ?",
          )
          .get(conversationId);
        if (existing) {
          if (existing.company_id !== companyId) {
            throw new Error("La conversación no pertenece a la empresa activa.");
          }
          updateSetting(
            database,
            "workspace_settings",
            ACTIVE_CHAT_SETTING_KEY,
            conversationId,
            companyId,
          );
          return mapConversation(existing, readMessages(database, conversationId));
        }
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES (?, ?, 'Nuevo chat', 0, ?, ?)",
          )
          .run(conversationId, companyId, timestamp, timestamp);
        updateSetting(
          database,
          "workspace_settings",
          ACTIVE_CHAT_SETTING_KEY,
          conversationId,
          companyId,
        );
        return mapConversation(
          {
            id: conversationId,
            title: "Nuevo chat",
            favorite: 0,
            updated_at: timestamp,
            head_message_id: null,
          },
          [],
        );
      };
      if (clientMutationId) {
        return runIdempotent(database, {
          clientMutationId,
          operation: "conversation.create",
          resourceType: "conversation",
          resourceId: id,
          execute: operation,
          receipt: conversationReceipt(database, companyId, id),
        });
      }
      return withTransaction(database, operation);
    });

  const updateConversation = async (
    companyId: CompanyId,
    conversationId: string,
    patch: { title?: string; favorite?: boolean; icon?: string | null; iconColor?: string | null },
    clientMutationId?: string,
  ): Promise<Chat> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, companyId, conversationId);
        const timestamp = now();
        database
          .prepare(
            "UPDATE conversations SET title = COALESCE(?, title), favorite = COALESCE(?, favorite), icon = CASE WHEN ? THEN ? ELSE icon END, icon_color = CASE WHEN ? THEN ? ELSE icon_color END, updated_at = ? WHERE id = ?",
          )
          .run(
            patch.title !== undefined ? patch.title.trim().slice(0, 160) || "Nuevo chat" : null,
            patch.favorite === undefined ? null : patch.favorite ? 1 : 0,
            patch.icon !== undefined ? 1 : 0,
            patch.icon !== undefined && patch.icon && isChatIconName(patch.icon)
              ? patch.icon
              : null,
            patch.iconColor !== undefined ? 1 : 0,
            patch.iconColor !== undefined && patch.iconColor && isChatColorName(patch.iconColor)
              ? patch.iconColor
              : null,
            timestamp,
            conversationId,
          );
        return readConversation(database, conversationId);
      };
      return clientMutationId
        ? runIdempotent(database, {
            clientMutationId,
            operation: "conversation.update",
            resourceType: "conversation",
            resourceId: conversationId,
            execute: operation,
            receipt: conversationReceipt(database, companyId, conversationId),
          })
        : withTransaction(database, operation);
    });

  const deleteConversation = async (
    companyId: CompanyId,
    conversationId: string,
    clientMutationId?: string,
  ) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, companyId, conversationId);
        database.prepare("DELETE FROM conversations WHERE id = ?").run(conversationId);
        return null;
      };
      if (clientMutationId) {
        runIdempotent(database, {
          clientMutationId,
          operation: "conversation.delete",
          resourceType: "conversation",
          resourceId: conversationId,
          execute: operation,
        });
      } else {
        withTransaction(database, operation);
      }
    });

  const upsertMessageSync = (input: {
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
  }): Message => {
    ensureConversation(database, input.companyId, input.conversationId);
    const errorCode = validateErrorCode(input.errorCode);
    const existing = database.prepare("SELECT * FROM messages WHERE id = ?").get(input.id);
    if (existing && existing.conversation_id !== input.conversationId) {
      throw new Error("El mensaje no pertenece a la conversación.");
    }
    const sequence = input.sequence ?? 0;
    if (existing) {
      const currentStatus = isPersistedStatus(existing.status) ? existing.status : "incomplete";
      if (
        numberValue(existing.sequence) >= sequence ||
        isTerminalStatus(currentStatus) ||
        (existing.generation_id &&
          input.generationId &&
          existing.generation_id !== input.generationId)
      ) {
        return mapMessage(existing);
      }
      database
        .prepare(
          "UPDATE messages SET content_json = ?, status = ?, generation_id = ?, sequence = ?, error_code = ?, updated_at = ? WHERE id = ?",
        )
        .run(
          serializeContent(input.content),
          input.status,
          input.generationId ?? null,
          sequence,
          errorCode,
          now(),
          input.id,
        );
      return mapMessage(
        database.prepare("SELECT * FROM messages WHERE id = ?").get(input.id) as Row,
      );
    }
    const timestamp = now();
    database
      .prepare(
        "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, error_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      )
      .run(
        input.id,
        input.conversationId,
        input.parentMessageId ?? null,
        input.role,
        serializeContent(input.content),
        input.status,
        input.generationId ?? null,
        sequence,
        errorCode,
        timestamp,
        timestamp,
      );
    return mapMessage(database.prepare("SELECT * FROM messages WHERE id = ?").get(input.id) as Row);
  };

  const upsertMessage = async (
    input: Parameters<typeof upsertMessageSync>[0] & { clientMutationId?: string },
  ): Promise<Message> =>
    withRepositoryWrite(async () => {
      const operation = () => upsertMessageSync(input);
      if (input.clientMutationId) {
        return runIdempotent(database, {
          clientMutationId: input.clientMutationId,
          operation: input.role === "assistant" ? "assistant.message.create" : "message.create",
          resourceType: "message",
          resourceId: input.id,
          execute: operation,
          receipt: {
            encode: (message) => ({
              messageId: message.id,
              status: message.status,
              sequence: message.sequence ?? 0,
            }),
            decode: () => {
              ensureConversation(database, input.companyId, input.conversationId);
              return mapMessage(
                database.prepare("SELECT * FROM messages WHERE id = ?").get(input.id) as Row,
              );
            },
          },
        });
      }
      return withTransaction(database, operation);
    });

  const updateMessage = async (input: {
    companyId: CompanyId;
    conversationId: string;
    messageId: string;
    content?: MessageContent;
    status?: PersistedMessageStatus;
    generationId?: string | null;
    sequence?: number;
    errorCode?: string | null;
    clientMutationId?: string;
  }): Promise<Message> =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, input.companyId, input.conversationId);
        const existing = database
          .prepare("SELECT * FROM messages WHERE id = ?")
          .get(input.messageId);
        const errorCode = validateErrorCode(input.errorCode);
        if (!existing || existing.conversation_id !== input.conversationId) {
          throw new Error("El mensaje no pertenece a la conversación.");
        }
        const currentStatus = isPersistedStatus(existing.status) ? existing.status : "incomplete";
        const requestedSequence = input.sequence ?? numberValue(existing.sequence) + 1;
        if (
          requestedSequence <= numberValue(existing.sequence) ||
          isTerminalStatus(currentStatus) ||
          (input.generationId &&
            existing.generation_id &&
            input.generationId !== existing.generation_id)
        ) {
          return mapMessage(existing);
        }
        database
          .prepare(
            "UPDATE messages SET content_json = COALESCE(?, content_json), status = COALESCE(?, status), generation_id = COALESCE(?, generation_id), sequence = ?, error_code = ?, updated_at = ? WHERE id = ?",
          )
          .run(
            input.content ? serializeContent(input.content) : null,
            input.status ?? null,
            input.generationId ?? null,
            requestedSequence,
            errorCode,
            now(),
            input.messageId,
          );
        return mapMessage(
          database.prepare("SELECT * FROM messages WHERE id = ?").get(input.messageId) as Row,
        );
      };
      if (input.clientMutationId) {
        return runIdempotent(database, {
          clientMutationId: input.clientMutationId,
          operation: "assistant.partial",
          resourceType: "message",
          resourceId: input.messageId,
          execute: operation,
          receipt: {
            encode: (message) => ({
              messageId: message.id,
              status: message.status,
              sequence: message.sequence ?? 0,
            }),
            decode: () => {
              ensureConversation(database, input.companyId, input.conversationId);
              return mapMessage(
                database.prepare("SELECT * FROM messages WHERE id = ?").get(input.messageId) as Row,
              );
            },
          },
        });
      }
      return withTransaction(database, operation);
    });

  const finalizeMessage = async (input: {
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
      const apply = () => {
        ensureConversation(database, input.companyId, input.conversationId);
        const existing = database
          .prepare("SELECT * FROM messages WHERE id = ?")
          .get(input.messageId);
        if (!existing || existing.conversation_id !== input.conversationId) {
          throw new Error("El mensaje no pertenece a la conversación.");
        }
        const currentStatus = isPersistedStatus(existing.status) ? existing.status : "incomplete";
        if (
          input.sequence <= numberValue(existing.sequence) ||
          isTerminalStatus(currentStatus) ||
          (input.generationId &&
            existing.generation_id &&
            input.generationId !== existing.generation_id)
        ) {
          return mapMessage(existing);
        }
        database
          .prepare(
            "UPDATE messages SET content_json = COALESCE(?, content_json), status = ?, generation_id = COALESCE(?, generation_id), sequence = ?, error_code = ?, updated_at = ? WHERE id = ?",
          )
          .run(
            input.content ? serializeContent(input.content) : null,
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
        return mapMessage(
          database.prepare("SELECT * FROM messages WHERE id = ?").get(input.messageId) as Row,
        );
      };
      const receipt = {
        encode: (message: Message) => ({
          messageId: message.id,
          status: message.status,
          sequence: message.sequence ?? 0,
        }),
        decode: (_value: unknown) => {
          ensureConversation(database, input.companyId, input.conversationId);
          return mapMessage(
            database.prepare("SELECT * FROM messages WHERE id = ?").get(input.messageId) as Row,
          );
        },
      };
      if (input.clientMutationId) {
        return runIdempotent(database, {
          clientMutationId: input.clientMutationId,
          operation: "assistant.finalize",
          resourceType: "message",
          resourceId: input.messageId,
          execute: apply,
          receipt,
        });
      }
      return withTransaction(database, apply);
    });

  const setConversationHead = async (
    companyId: CompanyId,
    conversationId: string,
    headMessageId: string | null,
    clientMutationId?: string,
  ) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureConversation(database, companyId, conversationId);
        if (headMessageId) {
          const head = database
            .prepare("SELECT conversation_id FROM messages WHERE id = ?")
            .get(headMessageId);
          if (!head || head.conversation_id !== conversationId) {
            throw new Error("La rama no pertenece a la conversación.");
          }
        }
        database
          .prepare("UPDATE conversations SET head_message_id = ?, updated_at = ? WHERE id = ?")
          .run(headMessageId, now(), conversationId);
        return null;
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
    });

  const setSelectedModel = async (
    companyId: CompanyId,
    modelId: string,
    clientMutationId?: string,
  ) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureCompany(database, companyId);
        updateSetting(
          database,
          "workspace_settings",
          SELECTED_MODEL_SETTING_KEY,
          modelId,
          companyId,
        );
        return null;
      };
      if (clientMutationId) {
        runIdempotent(database, {
          clientMutationId,
          operation: "workspace.model",
          resourceType: "workspace_setting",
          resourceId: companyId,
          execute: operation,
        });
      } else {
        withTransaction(database, operation);
      }
    });

  const recordToolVisit = async (companyId: CompanyId, toolId: string, clientMutationId?: string) =>
    withRepositoryWrite(async () => {
      const operation = () => {
        ensureCompany(database, companyId);
        if (!getTool(toolId)) throw new Error("La herramienta no existe.");
        const id = crypto.randomUUID();
        database
          .prepare(
            "INSERT INTO tool_activity (id, company_id, tool_id, action_id, metadata_json, created_at) VALUES (?, ?, ?, 'visit', '{}', ?)",
          )
          .run(id, companyId, toolId, now());
        return null;
      };
      if (clientMutationId) {
        return runIdempotent(database, {
          clientMutationId,
          operation: "tool.activity",
          resourceType: "tool_activity",
          resourceId: toolId,
          execute: operation,
        });
      }
      return withTransaction(database, operation);
    });

  return {
    getSnapshot,
    getConversation,
    createCompany,
    deleteCompany,
    setActiveCompany,
    createConversation,
    updateConversation,
    deleteConversation,
    setActiveConversation,
    upsertMessage,
    updateMessage,
    finalizeMessage,
    setConversationHead,
    setSelectedModel,
    recordToolVisit,
  };
};
