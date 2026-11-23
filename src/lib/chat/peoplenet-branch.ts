import "server-only";

import type { Message } from "@/types/chat";
import { readChatSources } from "./chat-data";
import { textContent } from "./chat-history";
import { detectPeopleNetTurn, type PeopleNetQuery, type PeopleNetTurn } from "./peoplenet-query";

export function getPeopleNetBranch(branch: readonly Message[]): {
  turn: PeopleNetTurn;
  publicHistory: Message[];
} {
  // A persisted marker still protects an older turn if the wording rules change.
  const marked = new Set(
    branch.flatMap((message) =>
      message.role === "assistant" &&
      readChatSources(message.content).some((source) => source.kind === "peoplenet")
        ? [message.parentMessageId]
        : [],
    ),
  );
  const operational = new Set<string>();
  const publicHistory: Message[] = [];
  let turn: PeopleNetTurn = { kind: "general" };
  let previous: PeopleNetQuery | undefined;
  for (const message of branch) {
    if (message.role === "assistant") {
      if (!message.parentMessageId || !operational.has(message.parentMessageId))
        publicHistory.push(message);
      continue;
    }
    turn = detectPeopleNetTurn(textContent(message.content), previous);
    if (turn.kind === "general" && marked.has(message.id))
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
  return { turn, publicHistory };
}
