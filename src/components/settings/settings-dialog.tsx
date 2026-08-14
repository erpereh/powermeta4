"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SettingsContent } from "@/components/settings/settings-content";

export type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="flex h-[85vh] w-[min(96vw,72rem)] max-w-5xl flex-col gap-4 overflow-hidden p-4 sm:max-w-5xl"
        showCloseButton
      >
        <DialogHeader className="shrink-0">
          <DialogTitle>Ajustes</DialogTitle>
          <DialogDescription>
            Perfil Meta4, configuraciones de IA y copias locales de este equipo.
          </DialogDescription>
        </DialogHeader>
        <SettingsContent variant="dialog" className="min-h-0" />
      </DialogContent>
    </Dialog>
  );
}
