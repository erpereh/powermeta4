"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Thread } from "@/components/assistant-ui/thread";
import { useWorkspaceHydrated } from "@/components/app-shell/app-shell";
import { ChatRuntimeProvider } from "@/components/chat/chat-runtime-provider";
import { mockModels } from "@/data/mock-models";
import {
  createConversationAction,
  selectConversationAction,
  setSelectedModelAction,
} from "@/app/actions/workspace";
import { hydrateWorkspaceStore, useWorkspaceStore } from "@/stores/use-workspace-store";
import { createClientMutationId } from "@/lib/client-mutation-id";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { CompanyId } from "@/types/workspace";

type ChatScreenProps = {
  requestedChatId?: string;
};

export function ChatScreen({ requestedChatId }: ChatScreenProps) {
  const router = useRouter();
  const { isMobile, open, openMobile } = useSidebar();
  const hydrated = useWorkspaceHydrated();
  const companyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const createChat = useWorkspaceStore((state) => state.createChat);
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const setSelectedModel = useWorkspaceStore((state) => state.setSelectedModel);
  const sidebarOpen = isMobile ? openMobile : open;
  const sidebarTriggerLabel = sidebarOpen ? "Cerrar barra lateral" : "Abrir barra lateral";
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

  const selectedModelId = workspace.preferences.selectedModelId || mockModels[0].id;

  return (
    <main className="flex h-svh min-h-0 flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/70 px-3 sm:px-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger
              aria-label={sidebarTriggerLabel}
              aria-expanded={sidebarOpen}
              title={sidebarTriggerLabel}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">{sidebarTriggerLabel}</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="h-5" />
        <h1 className="min-w-0 truncate text-sm font-medium">{activeChat.title}</h1>
      </header>

      <div className="min-h-0 flex-1">
        <ChatRuntimeProvider
          key={`${companyId}:${activeChat.id}`}
          companyId={companyId as CompanyId}
          chatId={activeChat.id}
          selectedModelId={selectedModelId}
        >
          <Thread
            models={mockModels}
            selectedModelId={selectedModelId}
            onModelChange={(modelId) => {
              setSelectedModel(modelId, companyId);
              void setSelectedModelAction(companyId, modelId, createClientMutationId()).then(
                (result) => {
                  if (!result.ok) void hydrateWorkspaceStore();
                },
              );
            }}
          />
        </ChatRuntimeProvider>
      </div>
    </main>
  );
}
