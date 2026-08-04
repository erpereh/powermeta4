"use client";

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CHAT_COLOR_OPTIONS,
  CHAT_COLORS,
  CHAT_ICON_LABELS,
  CHAT_ICON_OPTIONS,
  CHAT_ICONS,
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
  isChatColorName,
  isChatIconName,
} from "@/lib/chat-customization";
import type { Chat, ChatColorName, ChatIconName } from "@/types/chat";
import { Palette, Shapes } from "lucide-react";

type ChatAppearanceMenuProps = {
  chat: Chat;
  onIconChange: (icon: ChatIconName) => void;
  onColorChange: (color: ChatColorName) => void;
};

export function ChatAppearanceMenu({ chat, onIconChange, onColorChange }: ChatAppearanceMenuProps) {
  return (
    <>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger aria-label={`Cambiar icono de ${chat.title}`}>
          <Shapes />
          <span>Cambiar icono</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-48">
          <DropdownMenuRadioGroup
            value={chat.icon ?? DEFAULT_CHAT_ICON}
            onValueChange={(value) => {
              if (isChatIconName(value)) onIconChange(value);
            }}
          >
            {CHAT_ICON_OPTIONS.map((iconName) => {
              const Icon = CHAT_ICONS[iconName];
              return (
                <DropdownMenuRadioItem
                  key={iconName}
                  value={iconName}
                  aria-label={`Usar icono ${CHAT_ICON_LABELS[iconName]} en ${chat.title}`}
                >
                  <Icon aria-hidden="true" />
                  <span>{CHAT_ICON_LABELS[iconName]}</span>
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>

      <DropdownMenuSub>
        <DropdownMenuSubTrigger aria-label={`Cambiar color de ${chat.title}`}>
          <Palette />
          <span>Cambiar color</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-44">
          <DropdownMenuRadioGroup
            value={chat.iconColor ?? DEFAULT_CHAT_COLOR}
            onValueChange={(value) => {
              if (isChatColorName(value)) onColorChange(value);
            }}
          >
            {CHAT_COLOR_OPTIONS.map((colorName) => {
              const color = CHAT_COLORS[colorName];
              return (
                <DropdownMenuRadioItem
                  key={colorName}
                  value={colorName}
                  aria-label={`Usar color ${color.label} en ${chat.title}`}
                >
                  <span
                    aria-hidden="true"
                    className={`size-2.5 rounded-full bg-current ${color.className}`}
                  />
                  <span>{color.label}</span>
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </>
  );
}
