"use client";

import {
  AssistantRuntimeProvider,
  fromThreadMessageLike,
  useExternalStoreRuntime,
  type AppendMessage,
  type MessageStatus as RuntimeMessageStatus,
  type ThreadMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import {
  createConversationAction,
  updateConversationAction,
  updateMessageAction,
  upsertMessageAction,
} from "@/app/actions/workspace";
import { mockChatModel } from "@/lib/mock-runtime";
import { toInterruptedStatus, toRuntimeStatus } from "@/lib/chat/message-status";
import {
  hydrateWorkspaceStore,
  useWorkspaceStore,
  workspaceStore,
} from "@/stores/use-workspace-store";
import type {
  Chat,
  Message,
  MessageContent,
  MessageStatus as ChatMessageStatus,
} from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

type ChatRuntimeProviderProps = {
  companyId: CompanyId;
  chatId: string;
  children: ReactNode;
  selectedModelId: string;
};

type RunOptions = {
  userMessage?: Message;
  assistantMessageId?: string;
};

const createRuntimeId = (prefix: string) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `${prefix}-${uuid ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`}`;
};

const convertMessage = (message: Message, runningMessageId: string | null): ThreadMessageLike => ({
  role: message.role,
  id: message.id,
  createdAt: new Date(message.createdAt),
  content: message.content,
  ...(message.role === "assistant"
    ? {
        status:
          message.id === runningMessageId
            ? ({ type: "running" } satisfies RuntimeMessageStatus)
            : toRuntimeStatus(message.status),
      }
    : {}),
});

const toThreadMessage = (message: Message): ThreadMessage =>
  fromThreadMessageLike(
    convertMessage(message, null),
    message.id,
    message.role === "assistant"
      ? toRuntimeStatus(message.status)
      : { type: "complete", reason: "stop" },
  );

const getContentText = (content: MessageContent): string => {
  if (typeof content === "string") return content;
  return content
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
};

const getAppendText = (message: AppendMessage): string => getContentText(message.content).trim();

const getChat = (chats: readonly Chat[], chatId: string): Chat | undefined =>
  chats.find((chat) => chat.id === chatId);

const actionFailed = (result: { ok: boolean; message?: string }) =>
  !result.ok ? new Error(result.message ?? "No se pudo guardar el cambio.") : null;

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
  const runningMessageIdRef = useRef<string | null>(null);
  const [runningMessageId, setRunningMessageId] = useState<string | null>(null);

  const runConversation = useCallback(
    async (
      input: string,
      baseMessages: Message[],
      parentId: string | null,
      runConfig: AppendMessage["runConfig"] = {},
      options: RunOptions = {},
    ): Promise<void> => {
      const cleanInput = input.trim();
      if (!cleanInput || controllerRef.current) return;

      const userMessage: Message = options.userMessage ?? {
        id: createRuntimeId("message-user"),
        role: "user",
        content: [{ type: "text", text: cleanInput }],
        createdAt: new Date().toISOString(),
        status: "complete",
      };
      const assistantMessage: Message = {
        id: options.assistantMessageId ?? createRuntimeId("message-assistant"),
        role: "assistant",
        content: [],
        createdAt: new Date().toISOString(),
        status: "incomplete",
      };
      const nextMessages = [...baseMessages, userMessage, assistantMessage];
      const threadMessages = [...baseMessages, userMessage].map(toThreadMessage);
      const controller = new AbortController();
      let latestContent = "";
      let persistedAssistant = false;

      controllerRef.current = controller;
      runningMessageIdRef.current = assistantMessage.id;
      setRunningMessageId(assistantMessage.id);
      setChatMessages(chatId, nextMessages, companyId);

      try {
        const conversationResult = await createConversationAction(companyId, chatId);
        const conversationError = actionFailed(conversationResult);
        if (conversationError) throw conversationError;

        const userResult = await upsertMessageAction({
          companyId,
          conversationId: chatId,
          id: userMessage.id,
          role: "user",
          content: userMessage.content,
          status: "complete",
        });
        const userError = actionFailed(userResult);
        if (userError) throw userError;

        const currentChat = getChat(
          workspaceStore.getState().workspaces[companyId]?.chats ?? [],
          chatId,
        );
        if (currentChat?.title === "Nuevo chat") {
          const title = cleanInput.slice(0, 56);
          setChatTitle(chatId, title, companyId);
          const titleResult = await updateConversationAction(companyId, chatId, { title });
          const titleError = actionFailed(titleResult);
          if (titleError) throw titleError;
        }

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
          if (controller.signal.aborted) break;
          latestContent = getContentText(result.content ?? "");
          if (!latestContent) continue;
          const content: MessageContent = [{ type: "text", text: latestContent }];
          persistedAssistant = true;
          setMessageContent(chatId, assistantMessage.id, content, companyId);
          const partialResult = await upsertMessageAction({
            companyId,
            conversationId: chatId,
            id: assistantMessage.id,
            role: "assistant",
            content,
            status: "incomplete",
          });
          const partialError = actionFailed(partialResult);
          if (partialError) throw partialError;
        }

        const finalStatus: ChatMessageStatus = controller.signal.aborted ? "cancelled" : "complete";
        if (latestContent) {
          const finalContent: MessageContent = [{ type: "text", text: latestContent }];
          setMessageContent(chatId, assistantMessage.id, finalContent, companyId);
          setMessageStatus(chatId, assistantMessage.id, finalStatus, companyId);
          const finalResult = await updateMessageAction({
            companyId,
            conversationId: chatId,
            messageId: assistantMessage.id,
            content: finalContent,
            status: finalStatus,
          });
          const finalError = actionFailed(finalResult);
          if (finalError) throw finalError;
        } else {
          setChatMessages(chatId, [...baseMessages, userMessage], companyId);
        }
      } catch (error) {
        const interruptedStatus: ChatMessageStatus = toInterruptedStatus(controller.signal.aborted);
        if (latestContent && persistedAssistant) {
          const failedContent: MessageContent = [{ type: "text", text: latestContent }];
          setMessageContent(chatId, assistantMessage.id, failedContent, companyId);
          setMessageStatus(chatId, assistantMessage.id, interruptedStatus, companyId);
          await updateMessageAction({
            companyId,
            conversationId: chatId,
            messageId: assistantMessage.id,
            content: failedContent,
            status: interruptedStatus,
          }).catch(() => undefined);
        } else {
          setChatMessages(chatId, [...baseMessages, userMessage], companyId);
        }
        if (error instanceof Error && error.message) {
          console.error("No se pudo completar la generación local", error);
        }
        await hydrateWorkspaceStore();
      } finally {
        if (controllerRef.current === controller) controllerRef.current = null;
        if (runningMessageIdRef.current === assistantMessage.id) {
          runningMessageIdRef.current = null;
          setRunningMessageId(null);
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
      if (!currentChat || !parentId) return;
      const parentIndex = currentChat.messages.findIndex((item) => item.id === parentId);
      const parentMessage = currentChat.messages[parentIndex];
      const existingAssistant = currentChat.messages[parentIndex + 1];
      if (
        parentIndex < 0 ||
        !parentMessage ||
        parentMessage.role !== "user" ||
        !existingAssistant ||
        existingAssistant.role !== "assistant"
      ) {
        return;
      }
      await runConversation(
        getContentText(parentMessage.content),
        currentChat.messages.slice(0, parentIndex + 1),
        parentId,
        config.runConfig,
        { userMessage: parentMessage, assistantMessageId: existingAssistant.id },
      );
    },
    [chatId, companyId, runConversation],
  );

  const onCancel = useCallback(async () => {
    controllerRef.current?.abort();
  }, []);

  useEffect(() => () => controllerRef.current?.abort(), [chatId, companyId]);

  const convert = useCallback(
    (message: Message): ThreadMessageLike => convertMessage(message, runningMessageId),
    [runningMessageId],
  );
  const isRunning = runningMessageId !== null;
  const runtime = useExternalStoreRuntime(
    useMemo(
      () => ({
        messages,
        isRunning,
        isSendDisabled: isRunning,
        convertMessage: convert,
        onNew,
        onEdit,
        onReload,
        onCancel,
      }),
      [convert, isRunning, messages, onCancel, onEdit, onNew, onReload],
    ),
  );

  return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>;
}
