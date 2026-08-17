import "server-only";

import type { DatabaseSync } from "node:sqlite";
import { createHmac } from "node:crypto";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

export type EmployeeBinding = {
  token: string;
  employeeId: string;
};

export type AgentProjectionKind = "sanitized_text" | "tool_result" | "omit";

export type AgentProjection = {
  kind: AgentProjectionKind;
  text: string;
};

export type DisambiguationCandidateRecord = {
  choiceId: string;
  employeeId: string;
  fullName: string;
};

export type PendingDisambiguationRecord = {
  id: string;
  conversationId: string;
  companyId: CompanyId;
  assistantMessageId: string;
  userMessageId: string;
  originalText: string;
  candidates: DisambiguationCandidateRecord[];
};

type BindingRow = {
  id: string;
  token: string;
  kind: string;
  payload_encrypted: string;
};

type ProjectionRow = {
  message_id: string;
  kind: string;
  projection_json: string;
};

type PendingRow = {
  id: string;
  conversation_id: string;
  company_id: string;
  assistant_message_id: string;
  user_message_id: string;
  original_text: string;
  candidates_json: string;
};

const now = () => new Date().toISOString();

const parseJson = (value: string): unknown => {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
};

const mintEmployeeToken = (conversationId: string, employeeId: string): string => {
  const digest = createHmac("sha256", conversationId)
    .update(`employee:${employeeId}`)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
  return `EMP_${digest}`;
};

const tokenEmbedsSubstring = (token: string, needles: readonly string[]): boolean => {
  const haystack = token.toUpperCase();
  return needles.some((needle) => {
    const trimmed = needle.trim().toUpperCase();
    if (trimmed.length < 2) return false;
    return haystack.includes(trimmed);
  });
};

export const createAgentPrivacyRepository = (
  database: DatabaseSync = getDatabase(),
  dpapi: DpapiAdapter,
) => {
  const listEmployeeBindings = async (
    conversationId: string,
    companyId: CompanyId,
  ): Promise<EmployeeBinding[]> => {
    const rows = database
      .prepare(
        "SELECT id, token, kind, payload_encrypted FROM agent_privacy_bindings WHERE conversation_id = ? AND company_id = ? AND kind = 'employee'",
      )
      .all(conversationId, companyId) as BindingRow[];
    const bindings: EmployeeBinding[] = [];
    for (const row of rows) {
      const payload = parseJson(await dpapi.unprotectSecret(row.payload_encrypted));
      if (
        payload &&
        typeof payload === "object" &&
        "employeeId" in payload &&
        typeof payload.employeeId === "string"
      ) {
        bindings.push({ token: row.token, employeeId: payload.employeeId });
      }
    }
    return bindings;
  };

  const bindEmployee = async (
    conversationId: string,
    companyId: CompanyId,
    employeeId: string,
    options?: { avoidSubstrings?: readonly string[] },
  ): Promise<string> => {
    const existing = await listEmployeeBindings(conversationId, companyId);
    const found = existing.find((binding) => binding.employeeId === employeeId);
    if (found) return found.token;

    const avoidSubstrings = options?.avoidSubstrings ?? [];
    const takenByOther = (candidate: string): boolean =>
      existing.some((binding) => binding.token === candidate && binding.employeeId !== employeeId);

    let nonce = 0;
    let token = mintEmployeeToken(conversationId, employeeId);
    while (
      (takenByOther(token) || tokenEmbedsSubstring(token, avoidSubstrings)) &&
      nonce < 64
    ) {
      nonce += 1;
      token = mintEmployeeToken(conversationId, `${employeeId}:${nonce}`);
    }

    const encrypted = await dpapi.protectSecret(JSON.stringify({ employeeId }));
    await withRepositoryWrite(async () => {
      withTransaction(database, () => {
        database
          .prepare(
            "INSERT INTO agent_privacy_bindings (id, conversation_id, company_id, token, kind, payload_encrypted, created_at) VALUES (?, ?, ?, ?, 'employee', ?, ?)",
          )
          .run(crypto.randomUUID(), conversationId, companyId, token, encrypted, now());
      });
    });
    return token;
  };

  const getEmployeeId = async (
    conversationId: string,
    companyId: CompanyId,
    token: string,
  ): Promise<string | null> => {
    const bindings = await listEmployeeBindings(conversationId, companyId);
    const normalized = token.trim().toUpperCase();
    return (
      bindings.find((binding) => binding.token.toUpperCase() === normalized)?.employeeId ?? null
    );
  };

  const putProjection = async (
    messageId: string,
    conversationId: string,
    projection: AgentProjection,
  ): Promise<void> => {
    await withRepositoryWrite(async () => {
      withTransaction(database, () => {
        database
          .prepare(
            "INSERT INTO agent_turn_projections (message_id, conversation_id, kind, projection_json, created_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(message_id) DO UPDATE SET kind = excluded.kind, projection_json = excluded.projection_json",
          )
          .run(
            messageId,
            conversationId,
            projection.kind,
            JSON.stringify({ text: projection.text }),
            now(),
          );
      });
    });
  };

  const getProjection = (messageId: string): AgentProjection | null => {
    const row = database
      .prepare("SELECT message_id, kind, projection_json FROM agent_turn_projections WHERE message_id = ?")
      .get(messageId) as ProjectionRow | undefined;
    if (!row) return null;
    if (row.kind !== "sanitized_text" && row.kind !== "tool_result" && row.kind !== "omit") {
      return null;
    }
    const parsed = parseJson(row.projection_json);
    const text =
      parsed && typeof parsed === "object" && "text" in parsed && typeof parsed.text === "string"
        ? parsed.text
        : "";
    return { kind: row.kind, text };
  };

  const putPendingDisambiguation = async (record: PendingDisambiguationRecord): Promise<void> => {
    await withRepositoryWrite(async () => {
      withTransaction(database, () => {
        database
          .prepare(
            "INSERT INTO agent_pending_disambiguation (id, conversation_id, company_id, assistant_message_id, user_message_id, original_text, candidates_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            record.id,
            record.conversationId,
            record.companyId,
            record.assistantMessageId,
            record.userMessageId,
            record.originalText,
            JSON.stringify(record.candidates),
            now(),
          );
      });
    });
  };

  const getPendingDisambiguation = (
    id: string,
    companyId: CompanyId,
    conversationId: string,
  ): PendingDisambiguationRecord | null => {
    const row = database
      .prepare(
        "SELECT id, conversation_id, company_id, assistant_message_id, user_message_id, original_text, candidates_json FROM agent_pending_disambiguation WHERE id = ? AND company_id = ? AND conversation_id = ?",
      )
      .get(id, companyId, conversationId) as PendingRow | undefined;
    if (!row) return null;
    const parsed = parseJson(row.candidates_json);
    if (!Array.isArray(parsed)) return null;
    const candidates: DisambiguationCandidateRecord[] = [];
    for (const item of parsed) {
      if (
        item &&
        typeof item === "object" &&
        "choiceId" in item &&
        "employeeId" in item &&
        "fullName" in item &&
        typeof item.choiceId === "string" &&
        typeof item.employeeId === "string" &&
        typeof item.fullName === "string"
      ) {
        candidates.push({
          choiceId: item.choiceId,
          employeeId: item.employeeId,
          fullName: item.fullName,
        });
      }
    }
    return {
      id: row.id,
      conversationId: row.conversation_id,
      companyId: row.company_id,
      assistantMessageId: row.assistant_message_id,
      userMessageId: row.user_message_id,
      originalText: row.original_text,
      candidates,
    };
  };

  const deletePendingDisambiguation = async (id: string, companyId: CompanyId): Promise<void> => {
    await withRepositoryWrite(async () => {
      withTransaction(database, () => {
        database
          .prepare("DELETE FROM agent_pending_disambiguation WHERE id = ? AND company_id = ?")
          .run(id, companyId);
      });
    });
  };

  return {
    listEmployeeBindings,
    bindEmployee,
    getEmployeeId,
    putProjection,
    getProjection,
    putPendingDisambiguation,
    getPendingDisambiguation,
    deletePendingDisambiguation,
  };
};
