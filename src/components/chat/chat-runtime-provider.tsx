"use client";

import {
  AssistantRuntimeProvider,
  fromThreadMessageLike,
  useExternalStoreRuntime,
  type AppendMessage,
  type ThreadMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";
import { useCallback, useEffect, useRef, type ReactNode } from "react";

import { mockChatModel } from "@/lib/mock-runtime";
import { useWorkspaceStore, workspaceStore } from "@/stores/use-workspace-store";
import type { Chat, Message, MessageStatus as ChatMessageStatus } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

type ChatRuntimeProviderProps = {
  companyId: CompanyId;
  chatId: string;
  children: ReactNode;
  selectedModelId: string;
};

const createRuntimeId = (prefix: string) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `${prefix}-${uuid ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`}`;
};

const toRuntimeStatus = (status: ChatMessageStatus) => {
  if (status === "running") return { type: "running" as const };
  if (status === "incomplete") {
    return { type: "incomplete" as const, reason: "error" as const };
  }
  return { type: "complete" as const, reason: "stop" as const };
};

const convertMessage = (message: Message): ThreadMessageLike => ({
  role: message.role,
  id: message.id,
  createdAt: new Date(message.createdAt),
  content: [{ type: "text", text: message.content }],
  ...(message.role === "assistant" ? { status: toRuntimeStatus(message.status) } : {}),
});

const toThreadMessage = (message: Message): ThreadMessage =>
  fromThreadMessageLike(
    convertMessage(message),
    message.id,
    message.role === "assistant"
      ? toRuntimeStatus(message.status)
      : { type: "complete", reason: "stop" },
  );

const getAppendText = (message: AppendMessage) => {
  return message.content
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
};

const getChat = (chats: readonly Chat[], chatId: string) =>
  chats.find((chat) => chat.id === chatId);

export function ChatRuntimeProvider({
  companyId,
  chatId,
  children,
  selectedModelId,
}: ChatRuntimeProviderProps) {
  const messages = useWorkspaceStore(
    (state) => getChat(state.workspaces[companyId]?.chats ?? [], chatId)?.messages ?? [],
  );
  const setChatMessages = useWorkspaceStore((state) => state.setChatMessages);
  const setChatTitle = useWorkspaceStore((state) => state.setChatTitle);
  const setMessageContent = useWorkspaceStore((state) => state.setMessageContent);
  const setMessageStatus = useWorkspaceStore((state) => state.setMessageStatus);
  const controllerRef = useRef<AbortController | null>(null);
  const isRunning = messages.some((message) => message.status === "running");

  const runConversation = useCallback(
    async (
      input: string,
      baseMessages: Message[],
      parentId: string | null,
      runConfig: AppendMessage["runConfig"] = {},
    ) => {
      const cleanInput = input.trim();
      if (!cleanInput) return;

      const userMessage: Message = {
        id: createRuntimeId("message-user"),
        role: "user",
        content: cleanInput,
        createdAt: new Date().toISOString(),
        status: "complete",
      };
      const assistantMessage: Message = {
        id: createRuntimeId("message-assistant"),
        role: "assistant",
        content: "",
        createdAt: new Date().toISOString(),
        status: "running",
      };
      const nextMessages = [...baseMessages, userMessage, assistantMessage];
      const threadMessages = nextMessages.slice(0, -1).map(toThreadMessage);
      const controller = new AbortController();

      controllerRef.current = controller;
      setChatMessages(chatId, nextMessages, companyId);

      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (currentChat?.title === "Nuevo chat") {
        setChatTitle(chatId, cleanInput.slice(0, 56), companyId);
      }

      try {
        const stream = mockChatModel.run({
          messages: threadMessages,
          runConfig: runConfig ?? {},
          abortSignal: controller.signal,
          context: { config: { modelName: selectedModelId } },
          unstable_parentId: parentId,
          unstable_assistantMessageId: assistantMessage.id,
          unstable_threadId: chatId,
          unstable_getMessage: () => threadMessages.at(-1)!,
        });

        for await (const result of stream) {
          const content =
            result.content
              ?.filter((part) => part.type === "text")
              .map((part) => part.text)
              .join("") ?? "";
          setMessageContent(chatId, assistantMessage.id, content, companyId);
        }

        setMessageStatus(
          chatId,
          assistantMessage.id,
          controller.signal.aborted ? "incomplete" : "complete",
          companyId,
        );
      } catch {
        setMessageStatus(chatId, assistantMessage.id, "incomplete", companyId);
      } finally {
        if (controllerRef.current === controller) {
          controllerRef.current = null;
        }
      }
    },
    [
      chatId,
      companyId,
      selectedModelId,
      setChatMessages,
      setChatTitle,
      setMessageContent,
      setMessageStatus,
    ],
  );

  const onNew = useCallback(
    async (message: AppendMessage) => {
      const input = getAppendText(message);
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;

      await runConversation(input, currentChat.messages, message.parentId, message.runConfig);
    },
    [chatId, companyId, runConversation],
  );

  const onEdit = useCallback(
    async (message: AppendMessage) => {
      const input = getAppendText(message);
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;

      const sourceIndex = currentChat.messages.findIndex((item) => item.id === message.sourceId);
      const baseMessages =
        sourceIndex >= 0 ? currentChat.messages.slice(0, sourceIndex) : currentChat.messages;
      await runConversation(input, baseMessages, message.parentId, message.runConfig);
    },
    [chatId, companyId, runConversation],
  );

  const onReload = useCallback(
    async (parentId: string | null, config: { runConfig: AppendMessage["runConfig"] }) => {
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;

      const parentIndex = currentChat.messages.findIndex((item) => item.id === parentId);
      const baseMessages =
        parentIndex >= 0 ? currentChat.messages.slice(0, parentIndex + 1) : currentChat.messages;
      const parentMessage =
        parentIndex >= 0
          ? currentChat.messages[parentIndex]
          : [...currentChat.messages].reverse().find((item) => item.role === "user");
      if (!parentMessage || parentMessage.role !== "user") return;

      await runConversation(parentMessage.content, baseMessages, parentId, config.runConfig);
    },
    [chatId, companyId, runConversation],
  );

  const onCancel = useCallback(async () => {
    controllerRef.current?.abort();
  }, []);

  useEffect(() => () => controllerRef.current?.abort(), [chatId, companyId]);

  const runtime = useExternalStoreRuntime({
    messages,
    isRunning,
    isSendDisabled: isRunning,
    convertMessage,
    onNew,
    onEdit,
    onReload,
    onCancel,
  });

  return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>;
}
