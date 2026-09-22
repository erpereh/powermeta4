"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, MessageSquarePlus, Search, Wrench } from "lucide-react";

import { useOptionalAppCommandPalette } from "@/components/app-shell/app-command-palette";
import { ChatSidebarItem } from "@/components/sidebar/chat-sidebar-item";
import { SocietyHeader } from "@/components/sidebar/society-header";
import { UserMenu } from "@/components/sidebar/user-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  Tooltip,
  useSidebar,
} from "@/components/system";
import {
  createConversationAction,
  deleteConversationAction,
  selectConversationAction,
  updateConversationAction,
} from "@/app/actions/workspace";
import { SIDEBAR_TOOL_ITEMS, TOOL_ICONS } from "@/lib/tools/registry";
import {
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import { createClientMutationId } from "@/lib/client-mutation-id";
import {
  hydrateWorkspaceStore,
  useWorkspaceStore,
  workspaceStore,
} from "@/stores/use-workspace-store";
import type { Chat } from "@/types/chat";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, setOpenMobile, state } = useSidebar();
  const palette = useOptionalAppCommandPalette();
  const activeCompanyId = useWorkspaceStore((store) => store.activeCompanyId);
  const workspace = useWorkspaceStore((store) =>
    store.activeCompanyId ? store.workspaces[store.activeCompanyId] : undefined,
  );
  const createChat = useWorkspaceStore((store) => store.createChat);
  const selectChat = useWorkspaceStore((store) => store.selectChat);
  const toggleFavorite = useWorkspaceStore((store) => store.toggleFavorite);
  const setChatIcon = useWorkspaceStore((store) => store.setChatIcon);
  const setChatColor = useWorkspaceStore((store) => store.setChatColor);
  const deleteChat = useWorkspaceStore((store) => store.deleteChat);
  const [toolsOpen, setToolsOpen] = useState(true);

  useEffect(() => {
    if (pathname.startsWith("/tools/")) setToolsOpen(true);
  }, [pathname]);

  const chats = workspace?.chats ?? [];
  const activeChatId = workspace?.activeChatId ?? null;
  const favorites = useMemo(() => chats.filter((chat) => chat.favorite), [chats]);
  const regularChats = useMemo(() => chats.filter((chat) => !chat.favorite), [chats]);
  const showChatLists = isMobile || state === "expanded";

  const closeMobileSidebar = () => {
    if (isMobile) setOpenMobile(false);
  };

  const handleToolsSelect = () => {
    if (!isMobile && state === "collapsed") {
      setToolsOpen(true);
      return;
    }
    setToolsOpen((current) => !current);
  };

  const handleNewChat = () => {
    if (!activeCompanyId) return;
    const chatId = createChat(activeCompanyId);
    void createConversationAction(activeCompanyId, chatId, createClientMutationId()).then(
      (result) => {
        if (!result.ok) void hydrateWorkspaceStore();
      },
    );
    router.push(`/chat/${chatId}`);
    closeMobileSidebar();
  };

  const handleSelectChat = (chatId: string) => {
    if (!activeCompanyId) return;
    selectChat(chatId, activeCompanyId);
    void selectConversationAction(activeCompanyId, chatId, createClientMutationId()).then(
      (result) => {
        if (!result.ok) void hydrateWorkspaceStore();
      },
    );
    router.push(`/chat/${chatId}`);
    closeMobileSidebar();
  };

  const handleDeleteChat = (chatId: string) => {
    if (!activeCompanyId) return;
    deleteChat(chatId, activeCompanyId);
    const nextActiveChatId = workspaceStore.getState().workspaces[activeCompanyId]?.activeChatId;
    void deleteConversationAction(activeCompanyId, chatId, createClientMutationId()).then(
      (result) => {
        if (!result.ok) void hydrateWorkspaceStore();
      },
    );
    if (pathname.startsWith("/chat/") && nextActiveChatId) router.push(`/chat/${nextActiveChatId}`);
    else if (pathname.startsWith("/chat/")) router.push("/home");
  };

  const handleToggleFavorite = (chat: Chat) => {
    if (!activeCompanyId) return;
    const favorite = !chat.favorite;
    toggleFavorite(chat.id, activeCompanyId);
    void updateConversationAction(
      activeCompanyId,
      chat.id,
      {
        favorite,
        ...(favorite
          ? {
              icon: chat.icon ?? DEFAULT_CHAT_ICON,
              iconColor: chat.iconColor ?? DEFAULT_CHAT_COLOR,
            }
          : {}),
      },
      createClientMutationId(),
    ).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const handleSetIcon = (chat: Chat, icon: Chat["icon"]) => {
    if (!activeCompanyId) return;
    setChatIcon(chat.id, icon, activeCompanyId);
    void updateConversationAction(
      activeCompanyId,
      chat.id,
      { icon },
      createClientMutationId(),
    ).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  const handleSetColor = (chat: Chat, iconColor: Chat["iconColor"]) => {
    if (!activeCompanyId) return;
    setChatColor(chat.id, iconColor, activeCompanyId);
    void updateConversationAction(
      activeCompanyId,
      chat.id,
      { iconColor },
      createClientMutationId(),
    ).then((result) => {
      if (!result.ok) void hydrateWorkspaceStore();
    });
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar" ariaLabel="Navegación principal">
      <SidebarHeader className="border-b border-border/70">
        <SocietyHeader />
        <SidebarGroup className="px-0 pb-1 pt-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Tooltip content="Buscar" side="right" wrapperClassName="flex w-full min-w-0">
                  <SidebarMenuButton
                    icon={<Search className="size-4" />}
                    onSelect={() => palette?.openCommandPalette("chats")}
                  >
                    Buscar
                  </SidebarMenuButton>
                </Tooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Tooltip content="Nuevo chat" side="right" wrapperClassName="flex w-full min-w-0">
                  <SidebarMenuButton
                    icon={<MessageSquarePlus className="size-4" />}
                    onSelect={handleNewChat}
                  >
                    Nuevo chat
                  </SidebarMenuButton>
                </Tooltip>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Tooltip content="Inicio" side="right" wrapperClassName="flex w-full min-w-0">
                  <SidebarMenuButton
                    icon={<Home className="size-4" />}
                    isActive={pathname === "/home"}
                    onSelect={() => {
                      router.push("/home");
                      closeMobileSidebar();
                    }}
                  >
                    Inicio
                  </SidebarMenuButton>
                </Tooltip>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="pt-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip content="Herramientas" side="right" wrapperClassName="flex w-full min-w-0">
                <SidebarMenuButton
                  icon={<Wrench className="size-4" />}
                  ariaExpanded={toolsOpen}
                  onSelect={handleToolsSelect}
                  closeOnSelect={false}
                >
                  Herramientas
                </SidebarMenuButton>
              </Tooltip>
              <SidebarMenuSub open={toolsOpen} id="sidebar-tools-submenu">
                {SIDEBAR_TOOL_ITEMS.map((item) => {
                  const Icon = TOOL_ICONS[item.icon];
                  return (
                    <SidebarMenuSubItem key={item.id}>
                      <SidebarMenuSubButton
                        icon={<Icon className="size-4" />}
                        isActive={pathname.startsWith(item.route)}
                        onSelect={() => {
                          router.push(item.route);
                          closeMobileSidebar();
                        }}
                      >
                        {item.name}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {showChatLists ? (
          <>
            <SidebarGroup className="pt-0">
              <SidebarGroupLabel className="flex items-center gap-2">
                Favoritos
                <span className="ml-auto tabular-nums text-muted-foreground/70">
                  {favorites.length}
                </span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {favorites.map((chat) => (
                    <ChatSidebarItem
                      key={chat.id}
                      chat={chat}
                      active={
                        activeChatId === chat.id &&
                        (pathname === "/" || pathname === `/chat/${chat.id}`)
                      }
                      onSelect={() => handleSelectChat(chat.id)}
                      onToggleFavorite={() => handleToggleFavorite(chat)}
                      onSetIcon={(icon) => handleSetIcon(chat, icon)}
                      onSetColor={(color) => handleSetColor(chat, color)}
                      onDelete={() => handleDeleteChat(chat.id)}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="pt-0">
              <SidebarGroupLabel>Chats</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {regularChats.map((chat) => (
                    <ChatSidebarItem
                      key={chat.id}
                      chat={chat}
                      active={
                        activeChatId === chat.id &&
                        (pathname === "/" || pathname === `/chat/${chat.id}`)
                      }
                      onSelect={() => handleSelectChat(chat.id)}
                      onToggleFavorite={() => handleToggleFavorite(chat)}
                      onSetIcon={(icon) => handleSetIcon(chat, icon)}
                      onSetColor={(color) => handleSetColor(chat, color)}
                      onDelete={() => handleDeleteChat(chat.id)}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : null}
      </SidebarContent>

      <SidebarFooter className="border-t border-border/70">
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
