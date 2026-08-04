"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Inbox, MessageSquarePlus, Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useChatStore } from "@/stores/use-chat-store";
import { filterChats } from "@/stores/chat-store";
import { ChatSidebarItem } from "@/components/sidebar/chat-sidebar-item";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import type { Chat } from "@/types/chat";

const navigation = [
  { label: "Inicio", href: "/home", icon: Home },
  { label: "Bandeja de entrada", href: "/inbox", icon: Inbox },
] as const;

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const chats = useChatStore((state) => state.chats);
  const activeChatId = useChatStore((state) => state.activeChatId);
  const createChat = useChatStore((state) => state.createChat);
  const selectChat = useChatStore((state) => state.selectChat);
  const toggleFavorite = useChatStore((state) => state.toggleFavorite);
  const setChatIcon = useChatStore((state) => state.setChatIcon);
  const setChatColor = useChatStore((state) => state.setChatColor);
  const deleteChat = useChatStore((state) => state.deleteChat);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    createChat();
    router.push("/");
    closeMobileSidebar();
  };

  const handleSelectChat = (chatId: string) => {
    selectChat(chatId);
    router.push("/");
    closeMobileSidebar();
  };

  const handleSearchSelect = (chatId: string) => {
    handleSelectChat(chatId);
    setSearchOpen(false);
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
                <Link href="/" aria-label="powermeta4" onClick={closeMobileSidebar}>
                  <PowermetaLogo wordmarkClassName="group-data-[collapsible=icon]:hidden" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarGroup className="px-0 pb-1 pt-2">
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
                {navigation.map((item) => {
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
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>
              Favoritos
              <span className="ml-auto tabular-nums text-sidebar-foreground/45">
                {favorites.length}
              </span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {favorites.length === 0 ? (
                  <SidebarMenuItem>
                    <span className="block px-2 py-2 text-xs text-sidebar-foreground/50">
                      Aún no hay favoritos
                    </span>
                  </SidebarMenuItem>
                ) : (
                  favorites.map((chat) => (
                    <ChatSidebarItem
                      key={chat.id}
                      chat={chat}
                      active={activeChatId === chat.id && pathname === "/"}
                      onSelect={() => handleSelectChat(chat.id)}
                      onToggleFavorite={() => toggleFavorite(chat.id)}
                      onSetIcon={(icon) => setChatIcon(chat.id, icon)}
                      onSetColor={(color) => setChatColor(chat.id, color)}
                      onDelete={() => deleteChat(chat.id)}
                    />
                  ))
                )}
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
                    active={activeChatId === chat.id && pathname === "/"}
                    onSelect={() => handleSelectChat(chat.id)}
                    onToggleFavorite={() => toggleFavorite(chat.id)}
                    onSetIcon={(icon) => setChatIcon(chat.id, icon)}
                    onSetColor={(color) => setChatColor(chat.id, color)}
                    onDelete={() => deleteChat(chat.id)}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border/70">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="David García" aria-label="David García">
                <Avatar className="size-8 rounded-lg">
                  <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    DG
                  </AvatarFallback>
                </Avatar>
                <span className="min-w-0 truncate text-left text-sm font-medium group-data-[collapsible=icon]:hidden">
                  David García
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
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
                value={chat.id}
                onSelect={() => handleSearchSelect(chat.id)}
              >
                <SearchChatIcon chat={chat} />
                <span className="min-w-0 truncate">{chat.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Acciones">
            <CommandItem onSelect={handleNewChat}>
              <MessageSquarePlus />
              <span>Crear nuevo chat</span>
            </CommandItem>
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
