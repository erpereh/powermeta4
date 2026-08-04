"use client";

import Link from "next/link";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import type { Chat, ChatColorName, ChatIconName } from "@/types/chat";
import { ChatAppearanceMenu } from "@/components/sidebar/chat-appearance-menu";
import { MoreHorizontal, Star, StarOff, Trash2 } from "lucide-react";

type ChatSidebarItemProps = {
  chat: Chat;
  active: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
  onSetIcon: (icon: ChatIconName) => void;
  onSetColor: (color: ChatColorName) => void;
  onDelete: () => void;
};

export function ChatSidebarItem({
  chat,
  active,
  onSelect,
  onToggleFavorite,
  onSetIcon,
  onSetColor,
  onDelete,
}: ChatSidebarItemProps) {
  const { isMobile } = useSidebar();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const ChatIcon = CHAT_ICONS[chat.icon ?? DEFAULT_CHAT_ICON];
  const iconColor = CHAT_COLORS[chat.iconColor ?? DEFAULT_CHAT_COLOR].className;

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={active} tooltip={chat.title}>
          <Link href="/" onClick={onSelect}>
            {chat.favorite && (
              <ChatIcon aria-hidden="true" className={cn("size-4 shrink-0", iconColor)} />
            )}
            <span className="min-w-0 truncate" title={chat.title}>
              {chat.title}
            </span>
          </Link>
        </SidebarMenuButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuAction
              showOnHover
              aria-label={`Acciones para ${chat.title}`}
              className="aria-expanded:bg-sidebar-accent"
            >
              <MoreHorizontal />
            </SidebarMenuAction>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "end" : "start"}
            className="w-52"
          >
            <DropdownMenuItem onSelect={onToggleFavorite}>
              {chat.favorite ? <StarOff /> : <Star />}
              <span>{chat.favorite ? "Quitar de favoritos" : "Añadir a favoritos"}</span>
            </DropdownMenuItem>
            {chat.favorite && (
              <ChatAppearanceMenu chat={chat} onIconChange={onSetIcon} onColorChange={onSetColor} />
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onSelect={() => setDeleteOpen(true)}
            >
              <Trash2 />
              <span>Eliminar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar esta conversación?</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará «{chat.title}». Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                onDelete();
                setDeleteOpen(false);
              }}
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
