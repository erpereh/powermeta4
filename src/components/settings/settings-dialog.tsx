"use client";

import { Modal } from "@/components/system";
import { SettingsContent } from "@/components/settings/settings-content";

export type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Ajustes"
      description="Perfil Meta4 y copias locales de este equipo."
      size="lg"
      className="max-h-[min(85vh,calc(100dvh-2rem))]"
    >
      <div className="min-h-0 max-h-[calc(min(85vh,100dvh-2rem)-9rem)] overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch]">
        <SettingsContent variant="dialog" className="min-h-0" />
      </div>
    </Modal>
  );
}
