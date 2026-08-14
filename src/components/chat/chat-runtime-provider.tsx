"use client";

import {
  AssistantRuntimeProvider,
  fromThreadMessageLike,
  useExternalStoreRuntime,
  type AppendMessage,
  type ExportedMessageRepository,
  type MessageStatus as RuntimeMessageStatus,
  type ThreadMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { confirmAgentDisambiguationAction } from "@/app/actions/agent";
import {
  createConversationAction,
  finalizeMessageAction,
  setConversationHeadAction,
  updateConversationAction,
  upsertMessageAction,
  updateMessageAction,
} from "@/app/actions/workspace";
import { AgentDisambiguationProvider } from "@/components/chat/agent-disambiguation-context";
import { runAgentChatStream } from "@/lib/chat/agent-runtime-adapter";
import { visibleMessages } from "@/lib/chat/visible-messages";
import {
  createStreamingPersistenceScheduler,
  type StreamingPersistenceScheduler,
} from "@/lib/chat/stream-persistence";
import { toAssistantUiMessageStatus, toInterruptedStatus } from "@/lib/chat/message-status";
import {
  hydrateWorkspaceStore,
  useWorkspaceStore,
  workspaceStore,
} from "@/stores/use-workspace-store";
import type { Chat, Message, MessageContent, PersistedMessageStatus } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

type ChatRuntimeProviderProps = {
  companyId: CompanyId;
  chatId: string;
  children: ReactNode;
  selectedProviderConfigId: string | null;
};

type RunOptions = {
  userMessage?: Message;
  preserveUserMessage?: boolean;
};

const createRuntimeId = () => crypto.randomUUID();
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

const mergeMessages = (messages: readonly Message[], additions: readonly Message[]): Message[] => {
  const byId = new Map(messages.map((message) => [message.id, message]));
  for (const message of additions) byId.set(message.id, message);
  return [...byId.values()].sort((left, right) => {
    const leftDate = left.createdAt;
    const rightDate = right.createdAt;
    return leftDate.localeCompare(rightDate) || left.id.localeCompare(right.id);
  });
};

const toThreadMessageLike = (message: Message): ThreadMessageLike => ({
  role: message.role,
  id: message.id,
  createdAt: new Date(message.createdAt),
  content: message.content,
  ...(message.role === "assistant"
    ? { status: toAssistantUiMessageStatus(message.status, message.errorCode) }
    : { status: { type: "complete", reason: "stop" } }),
});

const toThreadMessage = (message: Message): ThreadMessage => {
  const status: RuntimeMessageStatus =
    message.role === "assistant"
      ? toAssistantUiMessageStatus(message.status, message.errorCode)
      : { type: "complete", reason: "stop" };
  return fromThreadMessageLike(toThreadMessageLike(message), message.id, status);
};

const actionFailed = (result: { ok: boolean; message?: string }) =>
  !result.ok ? new Error(result.message ?? "No se pudo guardar el cambio.") : null;

export function ChatRuntimeProvider({
  companyId,
  chatId,
  children,
  selectedProviderConfigId,
}: ChatRuntimeProviderProps) {
  const chat = useWorkspaceStore((state) =>
    getChat(state.workspaces[companyId]?.chats ?? [], chatId),
  );
  const setChatMessages = useWorkspaceStore((state) => state.setChatMessages);
  const setChatHead = useWorkspaceStore((state) => state.setChatHead);
  const setChatTitle = useWorkspaceStore((state) => state.setChatTitle);
  const setMessageContent = useWorkspaceStore((state) => state.setMessageContent);
  const setMessageStatus = useWorkspaceStore((state) => state.setMessageStatus);
  const controllerRef = useRef<AbortController | null>(null);
  const schedulerRef = useRef<StreamingPersistenceScheduler | null>(null);
  const [runningMessageId, setRunningMessageId] = useState<string | null>(null);

  const messageRepository = useMemo<ExportedMessageRepository>(() => {
    if (!chat) return { headId: null, messages: [] };
    return {
      headId: chat.headMessageId ?? chat.messages.at(-1)?.id ?? null,
      messages: chat.messages.map((message) => ({
        message: toThreadMessage(message),
        parentId: message.parentMessageId ?? null,
      })),
    };
  }, [chat]);

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
        id: createRuntimeId(),
        conversationId: chatId,
        role: "user",
        parentMessageId: parentId,
        content: [{ type: "text", text: cleanInput }],
        createdAt: new Date().toISOString(),
        status: "complete",
        sequence: 0,
      };
      const generationId = createRuntimeId();
      const assistantMessage: Message = {
        id: createRuntimeId(),
        conversationId: chatId,
        role: "assistant",
        parentMessageId: userMessage.id,
        content: [],
        createdAt: new Date().toISOString(),
        status: "running",
        generationId,
        sequence: 0,
        errorCode: null,
      };
      const currentMessages =
        getChat(workspaceStore.getState().workspaces[companyId]?.chats ?? [], chatId)?.messages ??
        baseMessages;
      const nextMessages = mergeMessages(
        currentMessages,
        options.preserveUserMessage ? [assistantMessage] : [userMessage, assistantMessage],
      );
      const controller = new AbortController();
      const scheduler = createStreamingPersistenceScheduler();
      schedulerRef.current = scheduler;
      let latestContent: MessageContent = [];
      let sequence = 0;
      let persistenceError: Error | null = null;

      const persistPartial = async (content: string) => {
        if (!content || persistenceError) return;
        sequence += 1;
        const result = await updateMessageAction({
          companyId,
          conversationId: chatId,
          messageId: assistantMessage.id,
          content: [{ type: "text", text: content }],
          status: "running",
          generationId,
          sequence,
          clientMutationId: createRuntimeId(),
        });
        const error = actionFailed(result);
        if (error) {
          persistenceError = error;
          controller.abort();
          throw error;
        }
      };

      controllerRef.current = controller;
      setRunningMessageId(assistantMessage.id);
      setChatMessages(chatId, nextMessages, companyId);
      setChatHead(chatId, assistantMessage.id, companyId);

      try {
        const conversationResult = await createConversationAction(
          companyId,
          chatId,
          createRuntimeId(),
        );
        const conversationError = actionFailed(conversationResult);
        if (conversationError) throw conversationError;

        if (!options.preserveUserMessage) {
          const userResult = await upsertMessageAction({
            companyId,
            conversationId: chatId,
            id: userMessage.id,
            role: "user",
            content: userMessage.content,
            status: "complete",
            parentMessageId: userMessage.parentMessageId,
            clientMutationId: createRuntimeId(),
          });
          const userError = actionFailed(userResult);
          if (userError) throw userError;
        }

        const currentChat = getChat(
          workspaceStore.getState().workspaces[companyId]?.chats ?? [],
          chatId,
        );
        if (currentChat?.title === "Nuevo chat") {
          const title = cleanInput.slice(0, 56);
          setChatTitle(chatId, title, companyId);
          const titleResult = await updateConversationAction(
            companyId,
            chatId,
            { title },
            createRuntimeId(),
          );
          const titleError = actionFailed(titleResult);
          if (titleError) throw titleError;
        }

        const assistantResult = await upsertMessageAction({
          companyId,
          conversationId: chatId,
          id: assistantMessage.id,
          role: "assistant",
          content: assistantMessage.content,
          status: "running",
          parentMessageId: assistantMessage.parentMessageId,
          generationId,
          sequence: 0,
          clientMutationId: createRuntimeId(),
        });
        const assistantError = actionFailed(assistantResult);
        if (assistantError) throw assistantError;

        const stream = runAgentChatStream({
          companyId,
          providerConfigId: selectedProviderConfigId,
          conversationId: chatId,
          assistantMessageId: assistantMessage.id,
          abortSignal: controller.signal,
        });

        for await (const result of stream) {
          if (controller.signal.aborted) break;
          const nextContent = (result.content ?? []) as MessageContent;
          if (!Array.isArray(nextContent) || nextContent.length === 0) continue;
          latestContent = nextContent;
          setMessageContent(chatId, assistantMessage.id, latestContent, companyId);
          scheduler.push(getContentText(latestContent), persistPartial);
        }

        await scheduler.flush(persistPartial);
        if (persistenceError) throw persistenceError;
        const finalStatus: Extract<PersistedMessageStatus, "cancelled" | "complete"> = controller
          .signal.aborted
          ? "cancelled"
          : "complete";
        sequence += 1;
        const finalContent: MessageContent = latestContent.length > 0 ? latestContent : [];
        const finalResult = await finalizeMessageAction({
          companyId,
          conversationId: chatId,
          messageId: assistantMessage.id,
          content: finalContent,
          status: finalStatus,
          generationId,
          sequence,
          clientMutationId: createRuntimeId(),
        });
        const finalError = actionFailed(finalResult);
        if (finalError) throw finalError;
        setMessageContent(chatId, assistantMessage.id, finalContent, companyId);
        setMessageStatus(chatId, assistantMessage.id, finalStatus, companyId);
      } catch {
        const interruptedStatus: Extract<PersistedMessageStatus, "cancelled" | "failed"> =
          toInterruptedStatus(controller.signal.aborted);
        try {
          await scheduler.flush(persistPartial);
          sequence += 1;
          const failedContent: MessageContent = latestContent.length > 0 ? latestContent : [];
          await finalizeMessageAction({
            companyId,
            conversationId: chatId,
            messageId: assistantMessage.id,
            content: failedContent,
            status: interruptedStatus,
            generationId,
            sequence,
            errorCode: interruptedStatus === "failed" ? "MODEL_REQUEST_FAILED" : null,
            clientMutationId: createRuntimeId(),
          });
          setMessageContent(chatId, assistantMessage.id, failedContent, companyId);
          setMessageStatus(chatId, assistantMessage.id, interruptedStatus, companyId);
        } catch {
          // The persisted terminal state is best effort after an earlier storage failure.
        }
        await hydrateWorkspaceStore();
      } finally {
        scheduler.dispose();
        if (schedulerRef.current === scheduler) schedulerRef.current = null;
        if (controllerRef.current === controller) controllerRef.current = null;
        setRunningMessageId(null);
      }
    },
    [
      chatId,
      companyId,
      selectedProviderConfigId,
      setChatHead,
      setChatMessages,
      setChatTitle,
      setMessageContent,
      setMessageStatus,
    ],
  );

  const onNew = useCallback(
    async (message: AppendMessage) => {
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;
      await runConversation(
        getAppendText(message),
        visibleMessages(currentChat),
        message.parentId,
        message.runConfig,
      );
    },
    [chatId, companyId, runConversation],
  );

  const confirmDisambiguation = useCallback(
    async (pendingId: string, choiceId: string) => {
      const result = await confirmAgentDisambiguationAction({
        companyId,
        conversationId: chatId,
        pendingId,
        choiceId,
      });
      if (!result.ok) {
        await hydrateWorkspaceStore();
        return;
      }
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;
      await runConversation(
        result.data.rewrittenText,
        visibleMessages(currentChat),
        currentChat.headMessageId ?? null,
      );
    },
    [chatId, companyId, runConversation],
  );

  const onEdit = useCallback(
    async (message: AppendMessage) => {
      const currentChat = getChat(
        workspaceStore.getState().workspaces[companyId]?.chats ?? [],
        chatId,
      );
      if (!currentChat) return;
      const visible = visibleMessages(currentChat);
      const sourceIndex = visible.findIndex((item) => item.id === message.sourceId);
      const baseMessages = sourceIndex >= 0 ? visible.slice(0, sourceIndex) : visible;
      await runConversation(
        getAppendText(message),
        baseMessages,
        message.parentId,
        message.runConfig,
      );
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
      const visible = visibleMessages(currentChat);
      const parentIndex = visible.findIndex((item) => item.id === parentId);
      const parentMessage = visible[parentIndex];
      if (!parentMessage || parentMessage.role !== "user") return;
      await runConversation(
        getContentText(parentMessage.content),
        visible.slice(0, parentIndex + 1),
        parentMessage.parentMessageId ?? null,
        config.runConfig,
        { userMessage: parentMessage, preserveUserMessage: true },
      );
    },
    [chatId, companyId, runConversation],
  );

  const onCancel = useCallback(async () => {
    controllerRef.current?.abort();
  }, []);

  const onBranchChange = useCallback(
    (event: { headId: string | null }) => {
      setChatHead(chatId, event.headId, companyId);
      void setConversationHeadAction({
        companyId,
        conversationId: chatId,
        headMessageId: event.headId,
        clientMutationId: createRuntimeId(),
      }).then((result) => {
        if (!result.ok) void hydrateWorkspaceStore();
      });
    },
    [chatId, companyId, setChatHead],
  );

  useEffect(
    () => () => {
      controllerRef.current?.abort();
      schedulerRef.current?.dispose();
      schedulerRef.current = null;
    },
    [chatId, companyId],
  );

  const runtime = useExternalStoreRuntime(
    useMemo(
      () => ({
        messageRepository,
        convertMessage: (message: ThreadMessage) => message,
        isRunning: runningMessageId !== null,
        isSendDisabled: runningMessageId !== null,
        setMessages: () => undefined,
        unstable_onBranchChange: onBranchChange,
        onNew,
        onEdit,
        onReload,
        onCancel,
      }),
      [messageRepository, onBranchChange, onCancel, onEdit, onNew, onReload, runningMessageId],
    ),
  );

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <AgentDisambiguationProvider value={confirmDisambiguation}>
        {children}
      </AgentDisambiguationProvider>
    </AssistantRuntimeProvider>
  );
}
