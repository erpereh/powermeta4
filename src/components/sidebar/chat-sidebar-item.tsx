"use client";

import { useState } from "react";
import { MoreHorizontal, Star, StarOff, Trash2 } from "lucide-react";

import { ChatAppearanceMenu } from "@/components/sidebar/chat-appearance-menu";
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Modal,
  SidebarMenuButton,
  SidebarMenuItem,
  Tooltip,
  useSidebar,
} from "@/components/system";
import {
  CHAT_COLORS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
} from "@/lib/chat-customization";
import { cn } from "@/lib/utils";
import type { Chat, ChatColorName, ChatIconName } from "@/types/chat";

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
      <SidebarMenuItem className="group/chat-row">
        <Tooltip content={chat.title} side="right" wrapperClassName="flex w-full min-w-0 pr-8">
          <SidebarMenuButton
            isActive={active}
            onSelect={onSelect}
            icon={
              chat.favorite ? (
                <ChatIcon aria-hidden="true" className={cn("size-4 shrink-0", iconColor)} />
              ) : undefined
            }
          >
            {chat.title}
          </SidebarMenuButton>
        </Tooltip>
        <Menu>
          <MenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Acciones para ${chat.title}`}
              className="absolute top-1 right-1 z-10 size-7 text-muted-foreground opacity-100 md:opacity-0 md:group-hover/chat-row:opacity-100 md:focus-visible:opacity-100 aria-expanded:opacity-100"
            >
              <MoreHorizontal className="size-4" />
            </Button>
          </MenuTrigger>
          <MenuContent
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "end" : "start"}
            className="w-52"
          >
            <MenuItem onSelect={onToggleFavorite}>
              {chat.favorite ? <StarOff /> : <Star />}
              <span>{chat.favorite ? "Quitar de favoritos" : "Añadir a favoritos"}</span>
            </MenuItem>
            {chat.favorite ? (
              <ChatAppearanceMenu chat={chat} onIconChange={onSetIcon} onColorChange={onSetColor} />
            ) : null}
            <MenuSeparator />
            <MenuItem
              className="text-destructive focus:text-destructive"
              onSelect={() => setDeleteOpen(true)}
            >
              <Trash2 />
              <span>Eliminar</span>
            </MenuItem>
          </MenuContent>
        </Menu>
      </SidebarMenuItem>

      <Modal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        size="sm"
        title="¿Eliminar esta conversación?"
        description={`Se eliminará «${chat.title}». Esta acción no se puede deshacer.`}
        footer={
          <>
            <Button type="button" variant="outline" size="sm" onClick={() => setDeleteOpen(false)}>
              Cancelar
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                onDelete();
                setDeleteOpen(false);
              }}
            >
              Eliminar
            </Button>
          </>
        }
      />
    </>
  );
}
