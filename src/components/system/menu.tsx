"use client";

/**
 * Menú de acciones de producto: DropdownMenu de Radix (shadcn).
 * popover-morph es role=dialog y no ofrece typeahead / aria-haspopup=menu.
 * No reexporta el popover gooey.
 */
export {
  DropdownMenu as Menu,
  DropdownMenuTrigger as MenuTrigger,
  DropdownMenuContent as MenuContent,
  DropdownMenuGroup as MenuGroup,
  DropdownMenuLabel as MenuLabel,
  DropdownMenuItem as MenuItem,
  DropdownMenuCheckboxItem as MenuCheckboxItem,
  DropdownMenuRadioGroup as MenuRadioGroup,
  DropdownMenuRadioItem as MenuRadioItem,
  DropdownMenuSeparator as MenuSeparator,
  DropdownMenuShortcut as MenuShortcut,
  DropdownMenuSub as MenuSub,
  DropdownMenuSubTrigger as MenuSubTrigger,
  DropdownMenuSubContent as MenuSubContent,
  DropdownMenuPortal as MenuPortal,
} from "@/components/ui/dropdown-menu";
