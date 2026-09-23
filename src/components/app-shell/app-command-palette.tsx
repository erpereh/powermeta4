"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  recordToolVisitAction,
  selectConversationAction,
} from "@/app/actions/workspace";
import { CommandPalette, type CommandItem, useToast } from "@/components/system";
import { createToolsCommandItems } from "@/components/tools/tools-command-palette";
import {
  CHAT_ICONS,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import { createClientMutationId } from "@/lib/client-mutation-id";
import {
  hydrateWorkspaceStore,
  useWorkspaceStore,
} from "@/stores/use-workspace-store";

export type AppCommandPaletteMode = "actions" | "chats";

type AppCommandPaletteContextValue = {
  openCommandPalette: (mode?: AppCommandPaletteMode) => void;
};

const AppCommandPaletteContext = createContext<AppCommandPaletteContextValue | null>(
  null,
);

export const useAppCommandPalette = () => {
  const context = useContext(AppCommandPaletteContext);
  if (!context) {
    throw new Error("useAppCommandPalette debe usarse dentro de AppCommandPaletteProvider.");
  }
  return context;
};

export const useOptionalAppCommandPalette = () => useContext(AppCommandPaletteContext);

export function AppCommandPaletteProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AppCommandPaletteMode>("chats");

  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const recordToolVisit = useWorkspaceStore((state) => state.recordToolVisit);

  const chats = workspace?.chats ?? [];

  const resolveDefaultMode = useCallback(
    (): AppCommandPaletteMode => (pathname === "/home" ? "actions" : "chats"),
    [pathname],
  );

  const openCommandPalette = useCallback(
    (nextMode?: AppCommandPaletteMode) => {
      setMode(nextMode ?? resolveDefaultMode());
      setOpen(true);
    },
    [resolveDefaultMode],
  );

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (next) setMode(resolveDefaultMode());
      setOpen(next);
    },
    [resolveDefaultMode],
  );

  const handleSelectChat = useCallback(
    (chatId: string) => {
      if (!activeCompanyId) return;
      selectChat(chatId, activeCompanyId);
      void selectConversationAction(activeCompanyId, chatId, createClientMutationId()).then(
        (result) => {
          if (!result.ok) void hydrateWorkspaceStore();
        },
      );
      router.push(`/chat/${chatId}`);
      setOpen(false);
    },
    [activeCompanyId, router, selectChat],
  );

  const actionItems = useMemo(
    () =>
      createToolsCommandItems({
        onSelectTool: (tool) => {
          if (!activeCompanyId || !tool.implemented) return;
          recordToolVisit(tool.id, activeCompanyId);
          void recordToolVisitAction(activeCompanyId, tool.id, createClientMutationId()).then(
            (result) => {
              if (!result.ok) void hydrateWorkspaceStore();
            },
          );
          router.push(tool.route);
        },
        onUnavailable: () => {
          toast({
            title: "Acción no disponible",
            description: "Esta acción estará disponible próximamente.",
            status: "info",
          });
        },
      }),
    [activeCompanyId, recordToolVisit, router, toast],
  );

  const chatItems = useMemo<CommandItem[]>(
    () =>
      chats.map((chat) => {
        const Icon = chat.favorite
          ? CHAT_ICONS[chat.icon ?? DEFAULT_CHAT_ICON]
          : undefined;
        return {
          id: chat.id,
          label: chat.title,
          group: "Conversaciones",
          keywords: [chat.title],
          icon: Icon,
          onSelect: () => handleSelectChat(chat.id),
        };
      }),
    [chats, handleSelectChat],
  );

  const items = mode === "actions" ? actionItems : chatItems;
  const placeholder =
    mode === "actions" ? "Buscar acciones..." : "Buscar en tus conversaciones...";
  const emptyMessage =
    mode === "actions"
      ? "No hay acciones que coincidan."
      : "No hay conversaciones que coincidan.";

  const contextValue = useMemo(
    () => ({ openCommandPalette }),
    [openCommandPalette],
  );

  return (
    <AppCommandPaletteContext.Provider value={contextValue}>
      {children}
      <CommandPalette
        items={items}
        open={open}
        onOpenChange={handleOpenChange}
        placeholder={placeholder}
        emptyMessage={emptyMessage}
      />
    </AppCommandPaletteContext.Provider>
  );
}
