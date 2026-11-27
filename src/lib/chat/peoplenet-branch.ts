import "server-only";

import type { Message } from "@/types/chat";
import { isPeopleNetSource, readChatSources } from "./chat-data";
import { textContent } from "./chat-history";
import { detectPeopleNetTurn, type PeopleNetQuery, type PeopleNetTurn } from "./peoplenet-query";

export function getPeopleNetBranch(branch: readonly Message[]): {
  turn: PeopleNetTurn;
  publicHistory: Message[];
  /**
   * Pregunta en curso cuando el lenguaje local la consideró operativa y la
   * dejó fuera del historial. Quien redacta la respuesta la necesita: la
   * decisión del planificador puede no coincidir con esa clasificación, y
   * aunque coincida, el redactor tiene que saber qué se preguntó.
   */
  pending?: Message;
} {
  // A persisted marker still protects an older turn if the wording rules change.
  const marked = new Set(
    branch.flatMap((message) =>
      message.role === "assistant" && readChatSources(message.content).some(isPeopleNetSource)
        ? [message.parentMessageId]
        : [],
    ),
  );
  const operational = new Set<string>();
  const publicHistory: Message[] = [];
  let turn: PeopleNetTurn = { kind: "general" };
  let previous: PeopleNetQuery | undefined;
  let protectedContext = false;
  for (const message of branch) {
    if (message.role === "assistant") {
      protectedContext = readChatSources(message.content).some(isPeopleNetSource);
      if (!message.parentMessageId || !operational.has(message.parentMessageId))
        publicHistory.push(message);
      continue;
    }
    const input = textContent(message.content);
    turn = detectPeopleNetTurn(input, previous);
    const operationalFollowup =
      protectedContext &&
      /^\s*[¿¡]?(?:y\s+(?:en|para|con|el|la|de|al)\b|comp[aá]ra\w*\b|suma\b|cu[aá]ntos\b|[a-z]*\d{3,12}[a-z]*\s*[?.!]?\s*$)/i.test(
        input,
      );
    if (turn.kind === "general" && (marked.has(message.id) || operationalFollowup))
      turn = {
        kind: "clarify",
        text: "Reformula la consulta de PeopleNet para volver a ejecutarla.",
      };
    if (turn.kind === "general") {
      publicHistory.push(message);
      previous = undefined;
    } else {
      operational.add(message.id);
      if (turn.kind === "query") previous = turn.query;
    }
  }
  const last = branch.findLast(({ role }) => role === "user");
  return {
    turn,
    publicHistory,
    ...(last && !publicHistory.includes(last) ? { pending: last } : {}),
  };
}
