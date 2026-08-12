"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, Home, MessageSquarePlus, Search, Wrench } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChatSidebarItem } from "@/components/sidebar/chat-sidebar-item";
import { CompanySwitcher } from "@/components/sidebar/company-switcher";
import { UserMenu } from "@/components/sidebar/user-menu";
import {
  createConversationAction,
  deleteConversationAction,
  selectConversationAction,
  updateConversationAction,
} from "@/app/actions/workspace";
import { filterChats } from "@/stores/workspace-store";
import {
  hydrateWorkspaceStore,
  useWorkspaceStore,
  workspaceStore,
} from "@/stores/use-workspace-store";
import { TOOL_ICONS, TOOL_MODULES } from "@/lib/tools/registry";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import type { Chat } from "@/types/chat";
import { createClientMutationId } from "@/lib/client-mutation-id";

const mainNavigation = [{ label: "Inicio", href: "/home", icon: Home }] as const;

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) =>
    state.activeCompanyId ? state.workspaces[state.activeCompanyId] : undefined,
  );
  const createChat = useWorkspaceStore((state) => state.createChat);
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const toggleFavorite = useWorkspaceStore((state) => state.toggleFavorite);
  const setChatIcon = useWorkspaceStore((state) => state.setChatIcon);
  const setChatColor = useWorkspaceStore((state) => state.setChatColor);
  const deleteChat = useWorkspaceStore((state) => state.deleteChat);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (pathname.startsWith("/tools/")) setToolsOpen(true);
  }, [pathname]);

  const chats = workspace?.chats ?? [];
  const activeChatId = workspace?.activeChatId ?? null;
  const favorites = useMemo(() => chats.filter((chat) => chat.favorite), [chats]);
  const regularChats = useMemo(() => chats.filter((chat) => !chat.favorite), [chats]);
  const searchResults = useMemo(() => filterChats(chats, searchQuery), [chats, searchQuery]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (pathname !== "/home") {
          setSearchOpen(true);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [pathname]);

  const closeMobileSidebar = () => {
    if (isMobile) setOpenMobile(false);
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

  const handleSearchOpenChange = (open: boolean) => {
    setSearchOpen(open);
    if (!open) setSearchQuery("");
  };

  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar" {...props}>
        <SidebarHeader className="border-b border-sidebar-border/70">
          <CompanySwitcher />
          <SidebarGroup className="px-0 pb-1 pt-0">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => setSearchOpen(true)} tooltip="Buscar">
                    <Search />
                    <span>Buscar</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleNewChat} tooltip="Nuevo chat">
                    <MessageSquarePlus />
                    <span>Nuevo chat</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {mainNavigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={item.label}
                      >
                        <Link href={item.href} onClick={closeMobileSidebar}>
                          <Icon />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="pt-1">
            <Collapsible open={toolsOpen} onOpenChange={setToolsOpen}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/tools"}
                    tooltip="Herramientas"
                  >
                    <Link href="/tools" onClick={closeMobileSidebar}>
                      <Wrench />
                      <span>Herramientas</span>
                    </Link>
                  </SidebarMenuButton>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction
                      type="button"
                      showOnHover
                      aria-expanded={toolsOpen}
                      aria-controls="sidebar-tools-submenu"
                      aria-label={toolsOpen ? "Ocultar herramientas" : "Mostrar herramientas"}
                      title={toolsOpen ? "Ocultar herramientas" : "Mostrar herramientas"}
                    >
                      {toolsOpen ? <ChevronDown /> : <ChevronRight />}
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent id="sidebar-tools-submenu">
                    <SidebarMenuSub>
                      {TOOL_MODULES.map((module) => {
                        const Icon = TOOL_ICONS[module.icon];
                        return (
                          <SidebarMenuSubItem key={module.id}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname.startsWith(module.route)}
                            >
                              <Link href={module.route} onClick={closeMobileSidebar}>
                                <Icon />
                                <span>{module.name}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
          </SidebarGroup>

          <SidebarGroup className="group-data-[collapsible=icon]:hidden pt-0">
            <SidebarGroupLabel>
              Favoritos
              <span className="ml-auto tabular-nums text-sidebar-foreground/45">
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

          <SidebarGroup className="group-data-[collapsible=icon]:hidden pt-0">
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
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border/70">
          <UserMenu />
        </SidebarFooter>
      </Sidebar>

      <CommandDialog
        open={searchOpen}
        onOpenChange={handleSearchOpenChange}
        title="Buscar conversaciones"
        description="Busca y abre una conversación"
      >
        <CommandInput
          placeholder="Buscar en tus conversaciones..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No hay conversaciones que coincidan.</CommandEmpty>
          <CommandGroup heading="Conversaciones">
            {searchResults.map((chat) => (
              <CommandItem
                key={chat.id}
                value={`${chat.id} ${chat.title}`}
                onSelect={() => {
                  handleSelectChat(chat.id);
                  setSearchOpen(false);
                }}
              >
                <SearchChatIcon chat={chat} />
                <span className="min-w-0 truncate">{chat.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function SearchChatIcon({ chat }: { chat: Chat }) {
  if (!chat.favorite) return null;

  const Icon = CHAT_ICONS[chat.icon ?? DEFAULT_CHAT_ICON];
  const colorClass = CHAT_COLORS[chat.iconColor ?? DEFAULT_CHAT_COLOR].className;

  return <Icon aria-hidden="true" className={`size-4 shrink-0 ${colorClass}`} />;
}
