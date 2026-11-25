import { randomUUID } from "node:crypto";

import { sourcesSchema } from "../src/lib/chat/chat-data";
import { getAuthService } from "../src/lib/auth/server";
import { SESSION_COOKIE_NAME } from "../src/lib/auth/token";
import { getDatabase } from "../src/server/database/client";
import type { EvaluationCase } from "./kb-evaluation-cases";

export async function createHttpEvaluation(url: string) {
  const endpoint = new URL(url);
  if (
    endpoint.protocol !== "http:" ||
    !["localhost", "127.0.0.1", "[::1]"].includes(endpoint.hostname) ||
    process.env.NODE_ENV !== "development" ||
    process.env.POWERMETA4_DEBUG_AUTH !== "true" ||
    !process.env.POWERMETA4_DATA_DIR ||
    !process.env.KB_DATA_DIR
  )
    throw new Error("La evaluación HTTP requiere Next local, DEBUG y los directorios aislados.");
  const auth = getAuthService();
  const { sessionNonce } = await auth.debugLogin();
  const session = await auth.resolveSession(sessionNonce);
  if (!session) throw new Error("No se pudo abrir la sesión DEBUG para la evaluación.");
  const headers = {
    Cookie: SESSION_COOKIE_NAME + "=" + sessionNonce,
    "Content-Type": "application/json",
  };
  const response = await fetch(new URL("/api/workspace", endpoint), {
    headers,
    signal: AbortSignal.timeout(60_000),
  });
  if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
    throw new Error("El servidor no reconoce la sesión DEBUG de evaluación.");
  }
  const snapshot = await response.json();
  if (!snapshot.ok || typeof snapshot.data?.activeCompanyId !== "string") {
    throw new Error("La sesión DEBUG carece de workspace.");
  }
  const companyId: string = snapshot.data.activeCompanyId;
  const database = getDatabase();
  const addChat = database.prepare(
    "INSERT INTO conversations (id, company_id, created_at, updated_at) VALUES (?,?,?,?)",
  );
  const addMessage = database.prepare(
    "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)",
  );

  return {
    async run(sample: EvaluationCase) {
      const conversationId = randomUUID();
      const timestamp = new Date().toISOString();
      addChat.run(conversationId, companyId, timestamp, timestamp);
      let parentMessageId: string | null = null;
      for (const content of [sample.previous, sample.question]) {
        if (!content) continue;
        const id = randomUUID();
        addMessage.run(
          id,
          conversationId,
          parentMessageId,
          "user",
          JSON.stringify([{ type: "text", text: content }]),
          "complete",
          timestamp,
          timestamp,
        );
        parentMessageId = id;
      }
      const assistantMessageId = randomUUID();
      addMessage.run(
        assistantMessageId,
        conversationId,
        parentMessageId,
        "assistant",
        JSON.stringify([]),
        "running",
        timestamp,
        timestamp,
      );
      const start = performance.now();
      const response = await fetch(new URL("/api/chat/run", endpoint), {
        method: "POST",
        headers,
        body: JSON.stringify({ companyId, conversationId, assistantMessageId }),
        signal: AbortSignal.timeout(100_000),
      });
      if (!response.ok || !response.body)
        throw new Error("El chat respondió con HTTP " + response.status);

      let answer = "";
      let sources: ReturnType<typeof sourcesSchema.parse> = [];
      let firstMs = 0;
      let pending = "";
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      try {
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          pending += decoder.decode(value, { stream: true });
          const blocks = pending.split("\n\n");
          pending = blocks.pop() ?? "";
          for (const block of blocks) {
            const line = block.split("\n").find((entry) => entry.startsWith("data: "));
            if (!line) continue;
            const event: unknown = JSON.parse(line.slice(6));
            if (!event || typeof event !== "object" || !("type" in event)) continue;
            if (event.type === "error") {
              throw new Error(
                "message" in event ? String(event.message) : "Falló la generación del chat.",
              );
            }
            if (event.type === "sources" && "sources" in event)
              sources = sourcesSchema.parse(event.sources);
            if (event.type === "content" && "content" in event && Array.isArray(event.content)) {
              answer = String(event.content[0]?.text ?? "");
              if (!firstMs && answer.trim()) firstMs = performance.now() - start;
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
      if (!answer.trim()) throw new Error("El chat no emitió texto.");
      return { answer, sources, firstMs, generationMs: performance.now() - start };
    },
    async verifySource(source: { id: string; version: number }) {
      const url = new URL("/api/chat/sources", endpoint);
      url.search = new URLSearchParams({
        id: source.id,
        version: String(source.version),
      }).toString();
      const response = await fetch(url, { headers, signal: AbortSignal.timeout(25_000) });
      const pdf = Buffer.from(await response.arrayBuffer());
      if (!response.ok || !pdf.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
        throw new Error("La fuente autenticada no devolvió un PDF.");
      }
      const anonymous = await fetch(url, {
        signal: AbortSignal.timeout(25_000),
        redirect: "manual",
      });
      if (
        anonymous.status !== 401 &&
        !(anonymous.status === 307 && anonymous.headers.get("location")?.includes("/login"))
      ) {
        throw new Error("La fuente se pudo abrir sin sesión.");
      }
    },
  };
}
