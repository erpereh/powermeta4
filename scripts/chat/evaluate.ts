/**
 * Banco de pruebas del chat contra el servidor de desarrollo y una sesión
 * Meta4 real. Crea la conversación y los mensajes en SQLite, llama a
 * `POST /api/chat/run` con la cookie de sesión y muestra el texto, las fuentes
 * y la acción elegida. Solo imprime metadatos y el texto de la respuesta.
 *
 *   npm run chat:evaluate -- [--base http://localhost:3000] [--case <id>]
 *   npm run chat:evaluate -- --ask "PeopleNet: nómina de la matrícula 1683 de marzo de 2025"
 */
import { randomUUID } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

import { getAuthService } from "../../src/lib/auth/server";
import { getQuickLoginCredentials } from "../../src/lib/auth/debug-config";
import {
  createOpaqueSessionId,
  hashOpaqueSessionId,
  SESSION_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
} from "../../src/lib/auth/token";
import { closeDatabase, getDatabase } from "../../src/server/database/client";
import { CASES, type EvaluationCase } from "./cases";

type Turn = { text: string; sources: string[]; errorCode?: string };

const sessionFile = join(process.env.POWERMETA4_DATA_DIR ?? "data", "temp", "chat-evaluate.json");

const argument = (name: string): string | undefined => {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const base = argument("base") ?? "http://localhost:3000";
/** Segundos entre turnos. El proveedor limita las ráfagas con 429. */
const pace = Number(argument("pace") ?? 8);
const wait = (seconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000));

const store = (session: { sessionNonce: string; companyId: string }) => {
  mkdirSync(dirname(sessionFile), { recursive: true });
  writeFileSync(sessionFile, JSON.stringify(session), "utf8");
  return session;
};

/**
 * Emite una cookie adicional sobre la sesión Meta4 que ya existe, sin volver a
 * entrar y sin tocar la del navegador. Devuelve undefined si no hay sesión.
 */
function adoptBrowserSession(): { sessionNonce: string; companyId: string } | undefined {
  const database = getDatabase();
  const soap = database.prepare("SELECT username FROM soap_sessions LIMIT 1").get() as
    | { username: string }
    | undefined;
  const company = database
    .prepare(
      "SELECT value_json FROM workspace_settings WHERE key = 'activeCompanyId' ORDER BY updated_at DESC LIMIT 1",
    )
    .get() as { value_json: string } | undefined;
  if (!soap || !company) return undefined;
  const sessionNonce = createOpaqueSessionId();
  const current = now();
  database
    .prepare(
      "INSERT INTO local_browser_sessions (id, cookie_hash, username, auth_mode, created_at, last_seen_at, expires_at) VALUES (?, ?, ?, 'meta4', ?, ?, ?)",
    )
    .run(
      randomUUID(),
      hashOpaqueSessionId(sessionNonce),
      soap.username,
      current,
      current,
      new Date(Date.now() + SESSION_DURATION_SECONDS * 1000).toISOString(),
    );
  return { sessionNonce, companyId: JSON.parse(company.value_json) as string };
}

async function resolveSession(): Promise<{ sessionNonce: string; companyId: string }> {
  const service = getAuthService();
  try {
    const cached = JSON.parse(readFileSync(sessionFile, "utf8")) as {
      sessionNonce: string;
      companyId: string;
    };
    if (await service.resolveSession(cached.sessionNonce)) return cached;
  } catch {
    // Sin sesión reutilizable: se adopta la existente o se vuelve a entrar.
  }
  const adopted = adoptBrowserSession();
  if (adopted) return store(adopted);
  if (process.argv.includes("--debug")) {
    const { sessionNonce } = await service.debugLogin();
    const company = getDatabase()
      .prepare("SELECT value_json FROM app_settings WHERE key = 'activeCompanyId'")
      .get() as { value_json: string } | undefined;
    if (!company) throw new Error("No hay empresa activa en la base local.");
    return store({ sessionNonce, companyId: JSON.parse(company.value_json) as string });
  }
  const credentials = getQuickLoginCredentials();
  if (!credentials)
    throw new Error(
      "No hay sesión Meta4 abierta. Entra en la aplicación o configura POWERMETA4_QUICK_LOGIN_*.",
    );
  const login = await service.login(credentials.username, credentials.password);
  return store({ sessionNonce: login.sessionNonce, companyId: login.companyId });
}

const now = () => new Date().toISOString();

function createConversation(companyId: string): string {
  const database = getDatabase();
  const id = randomUUID();
  database
    .prepare(
      "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES (?, ?, 'Banco de pruebas', 0, ?, ?)",
    )
    .run(id, companyId, now(), now());
  return id;
}

function deleteConversation(id: string): void {
  getDatabase().prepare("DELETE FROM conversations WHERE id = ?").run(id);
}

function insertMessage(input: {
  conversationId: string;
  id: string;
  role: "user" | "assistant";
  content: unknown;
  status: string;
  parentMessageId: string | null;
}): void {
  getDatabase()
    .prepare(
      "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?)",
    )
    .run(
      input.id,
      input.conversationId,
      input.parentMessageId,
      input.role,
      JSON.stringify(input.content),
      input.status,
      input.role === "assistant" ? randomUUID() : null,
      now(),
      now(),
    );
}

async function runTurn(
  session: { sessionNonce: string; companyId: string },
  conversationId: string,
  parentMessageId: string | null,
  input: string,
): Promise<{ turn: Turn; assistantMessageId: string }> {
  const userMessageId = randomUUID();
  const assistantMessageId = randomUUID();
  insertMessage({
    conversationId,
    id: userMessageId,
    role: "user",
    content: [{ type: "text", text: input }],
    status: "complete",
    parentMessageId,
  });
  insertMessage({
    conversationId,
    id: assistantMessageId,
    role: "assistant",
    content: [],
    status: "running",
    parentMessageId: userMessageId,
  });

  const response = await fetch(`${base}/api/chat/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `${SESSION_COOKIE_NAME}=${session.sessionNonce}`,
    },
    body: JSON.stringify({
      companyId: session.companyId,
      conversationId,
      assistantMessageId,
    }),
  });
  if (!response.ok || !response.body) {
    const detail: unknown = await response.json().catch(() => null);
    throw new Error(`HTTP ${response.status} ${JSON.stringify(detail)}`);
  }
  const turn: Turn = { text: "", sources: [] };
  const decoder = new TextDecoder();
  let buffer = "";
  for await (const chunk of response.body as unknown as AsyncIterable<Uint8Array>) {
    buffer += decoder.decode(chunk, { stream: true });
    const parts = buffer.split("\n\n");
    buffer = parts.pop() ?? "";
    for (const part of parts) {
      const payload = part.replace(/^data: /, "").trim();
      if (!payload) continue;
      const event = JSON.parse(payload) as {
        type: string;
        content?: { text: string }[];
        sources?: { kind: string; action?: string; id: string; name: string; page?: number }[];
        errorCode?: string;
        message?: string;
      };
      if (event.type === "content") turn.text = event.content?.[0]?.text ?? "";
      if (event.type === "sources")
        turn.sources = (event.sources ?? []).map(
          (source) =>
            `${source.kind}${source.action ? `:${source.action}` : ""}${source.page ? `:p${source.page}` : ""}`,
        );
      if (event.type === "error") {
        turn.errorCode = event.errorCode;
        turn.text = event.message ?? "";
      }
    }
  }
  // El servidor ya ha podido añadir fuentes al contenido: se conserva y solo
  // se cierra el mensaje con el texto recibido.
  const database = getDatabase();
  const stored = database
    .prepare("SELECT content_json FROM messages WHERE id = ?")
    .get(assistantMessageId) as { content_json: string } | undefined;
  const parts: unknown[] = stored ? (JSON.parse(stored.content_json) as unknown[]) : [];
  const content = [
    ...parts.filter(
      (part) => !(typeof part === "object" && part && "type" in part && part.type === "text"),
    ),
    { type: "text", text: turn.text },
  ];
  database
    .prepare("UPDATE messages SET content_json = ?, status = ?, sequence = 2 WHERE id = ?")
    .run(
      JSON.stringify(content),
      turn.errorCode ? "failed" : "complete",
      assistantMessageId,
    );
  return { turn, assistantMessageId };
}

async function runCase(
  session: { sessionNonce: string; companyId: string },
  evaluation: EvaluationCase,
): Promise<boolean> {
  const conversationId = createConversation(session.companyId);
  let parent: string | null = null;
  const turns: Turn[] = [];
  for (const input of evaluation.inputs) {
    let attempt = await runTurn(session, conversationId, parent, input);
    // El proveedor limita las ráfagas: un 429 no es un fallo del chat.
    for (let retry = 0; retry < 2 && attempt.turn.errorCode === "CHAT_RATE_LIMITED"; retry += 1) {
      await wait(pace * 4);
      attempt = await runTurn(session, conversationId, parent, input);
    }
    parent = attempt.assistantMessageId;
    turns.push(attempt.turn);
    await wait(pace);
  }
  const last = turns.at(-1);
  const sources = last?.sources ?? [];
  const expectation = evaluation.expect;
  const kind = sources.some((source) => source.startsWith("peoplenet"))
    ? "accion"
    : sources.some((source) => source.startsWith("manual"))
      ? "manual"
      : "general";
  const failures: string[] = [];
  if (expectation.kind && expectation.kind !== kind)
    failures.push(`tipo ${kind}, esperado ${expectation.kind}`);
  if (expectation.action && !sources.some((source) => source.includes(expectation.action ?? "")))
    failures.push(`sin la acción ${expectation.action} (${sources.join(", ") || "sin fuentes"})`);
  if (expectation.notAbstain && /No tengo información suficiente/i.test(last?.text ?? ""))
    failures.push("se abstuvo");
  if (expectation.contains?.some((needle) => !new RegExp(needle, "i").test(last?.text ?? "")))
    failures.push(`falta ${expectation.contains.join(" / ")}`);
  console.log(`\n### ${evaluation.id} [${failures.length ? "FALLA" : "ok"}] ${kind}`);
  for (const [index, input] of evaluation.inputs.entries()) {
    console.log(`  > ${input}`);
    console.log(`  < ${(turns[index]?.text ?? "").replace(/\n+/g, " ").slice(0, 400)}`);
    if (turns[index]?.sources.length) console.log(`    fuentes: ${turns[index].sources.join(", ")}`);
  }
  for (const failure of failures) console.log(`  ! ${failure}`);
  deleteConversation(conversationId);
  return failures.length === 0;
}

async function main() {
  const session = await resolveSession();
  console.log(`Sesión lista para la empresa ${session.companyId.slice(0, 8)}…`);
  const ask = argument("ask");
  const only = argument("case");
  const selected: EvaluationCase[] = ask
    ? [{ id: "ad-hoc", inputs: [ask], expect: {} }]
    : only
      ? CASES.filter((item) => item.id === only || item.id.startsWith(only))
      : CASES;
  let passed = 0;
  for (const evaluation of selected) {
    try {
      if (await runCase(session, evaluation)) passed += 1;
    } catch (error) {
      console.log(`\n### ${evaluation.id} [ERROR] ${(error as Error).message}`);
    }
  }
  console.log(`\n${passed}/${selected.length} casos correctos`);
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    closeDatabase();
  });
