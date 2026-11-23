"use client";

import {
  AssistantRuntimeProvider,
  useExternalStoreRuntime,
  type AppendMessage,
  type ExportedMessageRepository,
  type ThreadMessage,
} from "@assistant-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import {
  createConversationAction,
  finalizeMessageAction,
  setConversationHeadAction,
  updateConversationAction,
  upsertMessageAction,
  updateMessageAction,
} from "@/app/actions/workspace";
import { runGlobalChatStream } from "@/lib/chat/chat-runtime-adapter";
import { PeopleNetChatContext } from "@/components/chat/peoplenet-card";
import { detectPeopleNetTurn } from "@/lib/chat/peoplenet-query";
import {
  createChatAttachmentAdapter,
  getRuntimeAttachments,
} from "@/lib/chat/chat-attachment-adapter";
import {
  withChatAttachments,
  withChatSources,
  type ChatAttachment,
  type ChatSource,
} from "@/lib/chat/chat-data";
import { toExportedMessageRepository } from "@/lib/chat/message-repository";
import {
  getCaughtErrorCode,
  getCaughtErrorMessage,
  inferFailedErrorCode,
  toInterruptedStatus,
} from "@/lib/chat/message-status";
import {
  createStreamingPersistenceScheduler,
  type StreamingPersistenceScheduler,
} from "@/lib/chat/stream-persistence";
import { visibleMessages } from "@/lib/chat/visible-messages";
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
};

type RunOptions = {
  userMessage?: Message;
  preserveUserMessage?: boolean;
  attachments?: ChatAttachment[];
  editSourceId?: string;
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

const actionFailed = (result: { ok: boolean; message?: string }) =>
  !result.ok ? new Error(result.message ?? "No se pudo guardar el cambio.") : null;

export function ChatRuntimeProvider({ companyId, chatId, children }: ChatRuntimeProviderProps) {
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
  const [autoOpenMessageId, setAutoOpenMessageId] = useState<string | null>(null);
  const attachmentAdapter = useMemo(
    () => createChatAttachmentAdapter(companyId, chatId),
    [companyId, chatId],
  );

  const messageRepository = useMemo<ExportedMessageRepository>(() => {
    if (!chat) return { headId: null, messages: [] };
    return toExportedMessageRepository(chat);
  }, [chat]);

  const runConversation = useCallback(
    async (
      input: string,
      baseMessages: Message[],
      parentId: string | null,
      runConfig: AppendMessage["runConfig"] = {},
      options: RunOptions = {},
    ): Promise<void> => {
      const attached = options.attachments ?? [];
      const cleanInput = input.trim() || (attached.length ? "Resume los archivos adjuntos." : "");
      if (!cleanInput || controllerRef.current) return;
      const userMessage: Message = options.userMessage ?? {
        id: createRuntimeId(),
        conversationId: chatId,
        role: "user",
        parentMessageId: parentId,
        content: withChatAttachments([{ type: "text", text: cleanInput }], attached),
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
      let sources: ChatSource[] = [];
      const showContent = (content: MessageContent) =>
        setMessageContent(
          chatId,
          assistantMessage.id,
          withChatSources(content, sources),
          companyId,
        );
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
            attachmentIds: attached.map(({ id }) => id),
            editSourceId: options.editSourceId,
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
          const title =
            detectPeopleNetTurn(cleanInput).kind === "general"
              ? cleanInput.slice(0, 56)
              : "Consulta de PeopleNet";
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

        const stream = runGlobalChatStream({
          companyId,
          conversationId: chatId,
          assistantMessageId: assistantMessage.id,
          abortSignal: controller.signal,
        });

        for await (const result of stream) {
          if (controller.signal.aborted) break;
          if (result.sources) {
            sources = result.sources;
            showContent(latestContent);
            continue;
          }
          const nextContent = result.content ?? [];
          if (!Array.isArray(nextContent) || nextContent.length === 0) continue;
          latestContent = nextContent;
          showContent(latestContent);
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
        if (finalStatus === "complete" && sources.some(({ kind }) => kind === "peoplenet"))
          setAutoOpenMessageId(assistantMessage.id);
        showContent(finalContent);
        setMessageStatus(chatId, assistantMessage.id, finalStatus, companyId);
      } catch (error) {
        const interruptedStatus: Extract<PersistedMessageStatus, "cancelled" | "failed"> =
          toInterruptedStatus(controller.signal.aborted);
        const errorMessage = getCaughtErrorMessage(error);
        const failedContent: MessageContent =
          latestContent.length > 0
            ? latestContent
            : interruptedStatus === "failed"
              ? [{ type: "text", text: errorMessage }]
              : [];
        const errorCode =
          interruptedStatus === "failed"
            ? (getCaughtErrorCode(error) ?? inferFailedErrorCode(errorMessage))
            : null;
        try {
          await scheduler.flush(persistPartial);
          sequence += 1;
          await finalizeMessageAction({
            companyId,
            conversationId: chatId,
            messageId: assistantMessage.id,
            content: failedContent,
            status: interruptedStatus,
            generationId,
            sequence,
            errorCode,
            clientMutationId: createRuntimeId(),
          });
        } catch {
          // The persisted terminal state is best effort after an earlier storage failure.
        }
        showContent(failedContent);
        setMessageStatus(chatId, assistantMessage.id, interruptedStatus, companyId);
        await hydrateWorkspaceStore();
      } finally {
        attachmentAdapter.release(attached.map(({ id }) => id));
        scheduler.dispose();
        if (schedulerRef.current === scheduler) schedulerRef.current = null;
        if (controllerRef.current === controller) controllerRef.current = null;
        setRunningMessageId(null);
      }
    },
    [
      attachmentAdapter,
      chatId,
      companyId,
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
        { attachments: getRuntimeAttachments(message.attachments ?? []) },
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
        {
          attachments: getRuntimeAttachments(message.attachments ?? []),
          editSourceId: message.sourceId ?? undefined,
        },
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
      setAutoOpenMessageId(null);
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
        adapters: { attachments: attachmentAdapter },
      }),
      [
        attachmentAdapter,
        messageRepository,
        onBranchChange,
        onCancel,
        onEdit,
        onNew,
        onReload,
        runningMessageId,
      ],
    ),
  );

  const peopleNetContext = useMemo(
    () => ({ companyId, chatId, autoOpenMessageId }),
    [companyId, chatId, autoOpenMessageId],
  );
  return (
    <PeopleNetChatContext.Provider value={peopleNetContext}>
      <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>
    </PeopleNetChatContext.Provider>
  );
}
