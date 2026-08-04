"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Home, MessageSquarePlus, Search, Wrench } from "lucide-react";

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
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { filterChats } from "@/stores/workspace-store";
import { useWorkspaceStore, workspaceStore } from "@/stores/use-workspace-store";
import { TOOL_ICONS, TOOL_MODULES } from "@/lib/tools/registry";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import type { Chat } from "@/types/chat";

const mainNavigation = [{ label: "Inicio", href: "/home", icon: Home }] as const;

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const activeCompanyId = useWorkspaceStore((state) => state.activeCompanyId);
  const workspace = useWorkspaceStore((state) => state.workspaces[state.activeCompanyId]);
  const createChat = useWorkspaceStore((state) => state.createChat);
  const selectChat = useWorkspaceStore((state) => state.selectChat);
  const toggleFavorite = useWorkspaceStore((state) => state.toggleFavorite);
  const setChatIcon = useWorkspaceStore((state) => state.setChatIcon);
  const setChatColor = useWorkspaceStore((state) => state.setChatColor);
  const deleteChat = useWorkspaceStore((state) => state.deleteChat);
  const [toolsOpen, setToolsOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const chats = workspace?.chats ?? [];
  const activeChatId = workspace?.activeChatId ?? null;
  const favorites = useMemo(() => chats.filter((chat) => chat.favorite), [chats]);
  const regularChats = useMemo(() => chats.filter((chat) => !chat.favorite), [chats]);
  const searchResults = useMemo(() => filterChats(chats, searchQuery), [chats, searchQuery]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobileSidebar = () => {
    if (isMobile) setOpenMobile(false);
  };

  const handleNewChat = () => {
    const chatId = createChat(activeCompanyId);
    router.push(`/chat/${chatId}`);
    closeMobileSidebar();
  };

  const handleSelectChat = (chatId: string) => {
    selectChat(chatId, activeCompanyId);
    router.push(`/chat/${chatId}`);
    closeMobileSidebar();
  };

  const handleDeleteChat = (chatId: string) => {
    deleteChat(chatId, activeCompanyId);
    const nextActiveChatId = workspaceStore.getState().workspaces[activeCompanyId]?.activeChatId;
    if (pathname.startsWith("/chat/") && nextActiveChatId) router.push(`/chat/${nextActiveChatId}`);
  };

  const handleSearchOpenChange = (open: boolean) => {
    setSearchOpen(open);
    if (!open) setSearchQuery("");
  };

  return (
    <>
      <Sidebar collapsible="icon" variant="sidebar" {...props}>
        <SidebarHeader className="border-b border-sidebar-border/70">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild size="lg" tooltip="powermeta4">
                <Link href="/home" aria-label="powermeta4" onClick={closeMobileSidebar}>
                  <PowermetaLogo wordmarkClassName="group-data-[collapsible=icon]:hidden" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
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
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      isActive={pathname === "/tools"}
                      tooltip="Herramientas"
                      onClick={() => {
                        router.push("/tools");
                        closeMobileSidebar();
                      }}
                    >
                      <Wrench />
                      <span>Herramientas</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
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
                    onToggleFavorite={() => toggleFavorite(chat.id, activeCompanyId)}
                    onSetIcon={(icon) => setChatIcon(chat.id, icon, activeCompanyId)}
                    onSetColor={(color) => setChatColor(chat.id, color, activeCompanyId)}
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
                    onToggleFavorite={() => toggleFavorite(chat.id, activeCompanyId)}
                    onSetIcon={(icon) => setChatIcon(chat.id, icon, activeCompanyId)}
                    onSetColor={(color) => setChatColor(chat.id, color, activeCompanyId)}
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
