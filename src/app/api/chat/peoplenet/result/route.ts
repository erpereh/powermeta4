import { z } from "zod";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getChatAncestors } from "@/lib/chat/chat-history";
import { readChatSources } from "@/lib/chat/chat-data";
import { getPeopleNetBranch } from "@/lib/chat/peoplenet-branch";
import { executePeopleNetQuery, PeopleNetScopeError } from "@/lib/chat/peoplenet-service";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getWorkspaceRepository, getWorkspaceScope } from "@/lib/workspace/service";

export const runtime = "nodejs";

const id = z.string().trim().min(1).max(160);
const inputSchema = z
  .object({
    companyId: id,
    conversationId: id,
    assistantMessageId: id,
    page: z.number().int().min(0).max(10000),
  })
  .strict();

const json = (data: object, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const auth = await getCurrentAuthContext();
  if (!auth) {
    await deleteSessionCookie();
    return json({ message: "Inicia sesión para consultar PeopleNet." }, 401);
  }
  const input = inputSchema.safeParse(await request.json().catch(() => null));
  if (!input.success) return json({ message: "La referencia de la consulta no es válida." }, 400);
  const { companyId, conversationId, assistantMessageId, page } = input.data;
  const active = async () => {
    const scope = await getWorkspaceScope(auth.authContext);
    return (
      scope.activeCompanyId === companyId && scope.companies.some(({ id }) => id === companyId)
    );
  };
  const forbidden = () =>
    json(
      {
        message:
          "La consulta no pertenece a la sociedad activa. Abre la conversación en su workspace.",
      },
      403,
    );
  if (!(await active())) return forbidden();
  const notFound = () =>
    json({ message: "La referencia de PeopleNet ya no está disponible." }, 404);

  let conversation;
  try {
    conversation = await getWorkspaceRepository().getConversation(companyId, conversationId);
  } catch {
    return notFound();
  }
  const message = conversation.messages.find((message) => message.id === assistantMessageId);
  if (message?.role !== "assistant" || message.status !== "complete") return notFound();
  const marker = readChatSources(message.content).find((source) => source.kind === "peoplenet");
  if (!marker) return notFound();
  try {
    const branch = getChatAncestors(conversation.messages, message.id);
    const { turn } = getPeopleNetBranch(branch);
    if (turn.kind !== "query" || turn.query.action !== marker.id) return notFound();
    const result = await executePeopleNetQuery(turn.query, auth, companyId, page, request.signal);
    if (!(await active())) return forbidden();
    return json(result);
  } catch (error) {
    if (request.signal.aborted) return new Response(null, { status: 499 });
    if (error instanceof PeopleNetScopeError) return forbidden();
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error))
      return json(
        { message: "Hace falta una sesión Meta4 operativa para consultar estos datos." },
        403,
      );
    console.error("[chat] PeopleNet query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return json(
      { message: "PeopleNet no ha podido completar la consulta. Puedes volver a intentarlo." },
      502,
    );
  }
}
