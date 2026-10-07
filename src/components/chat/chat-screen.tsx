"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Thread } from "@/components/assistant-ui/thread";
import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { ChatRuntimeProvider } from "@/components/chat/chat-runtime-provider";
import {
  createConversationAction,
  selectConversationAction,
} from "@/app/actions/workspace";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { PageHeader } from "@/components/system";
import type { GlobalChatStatus } from "@/lib/chat/global-chat-client";
import type { CompanyId } from "@/types/workspace";

type ChatScreenProps = {
  requestedChatId?: string;
  chatStatus: GlobalChatStatus;
};

export function ChatScreen({ requestedChatId, chatStatus }: ChatScreenProps) {
  const router = useRouter();
  const hydrated = useWorkspaceHydrated();
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const createChat = useWorkspaceStore((state) => state.createChat);
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const activeChat = requestedChatId
    ? workspace?.chats.find((chat) => chat.id === requestedChatId)
    : workspace?.chats.find((chat) => chat.id === workspace.activeChatId);

  useEffect(() => {
    if (!hydrated) return;

    if (requestedChatId) {
      if (!activeChat || !companyId) {
        router.replace("/home");
      } else if (workspace?.activeChatId !== requestedChatId) {
        selectChat(requestedChatId, companyId);
        void selectConversationAction(companyId, requestedChatId, createClientMutationId()).then(
          (result) => {
            if (!result.ok) void hydrateWorkspaceStore();
          },
        );
      }
      return;
    }

    if (!activeChat && companyId) {
      const chatId = createChat(companyId);
      void createConversationAction(companyId, chatId, createClientMutationId()).then((result) => {
        if (!result.ok) {
          void hydrateWorkspaceStore();
          return;
        }
        router.replace(`/chat/${chatId}`);
      });
    }
  }, [
    activeChat,
    companyId,
    createChat,
    hydrated,
    requestedChatId,
    router,
    selectChat,
    workspace?.activeChatId,
  ]);

  if (!hydrated || !companyId || !activeChat || !workspace) return null;

  return (
    <main className="flex h-svh min-h-0 flex-col">
      <PageHeader
        className="pb-1 sm:pt-3"
        title={
          <h1 className="min-w-0 truncate text-sm font-medium text-muted-foreground">
            {activeChat.title}
          </h1>
        }
      />

      <div className="min-h-0 flex-1">
        <ChatRuntimeProvider
          key={`${companyId}:${activeChat.id}`}
          companyId={companyId as CompanyId}
          chatId={activeChat.id}
          chatStatus={chatStatus}
        >
          <Thread chatStatus={chatStatus} />
        </ChatRuntimeProvider>
      </div>
    </main>
  );
}
