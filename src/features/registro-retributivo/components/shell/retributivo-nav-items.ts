import {
  BotIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  LayersIcon,
  SettingsIcon,
  TableIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { type AppView, RETRIBUTIVO_VIEW_LABELS } from "@/features/registro-retributivo/types/views";

export type RetributivoNavItem = {
  readonly id: AppView;
  readonly label: string;
  readonly icon: LucideIcon;
};

export const RETRIBUTIVO_NAV_ITEMS: readonly RetributivoNavItem[] = [
  { id: "dashboard", label: RETRIBUTIVO_VIEW_LABELS.dashboard, icon: LayoutDashboardIcon },
  { id: "personas", label: RETRIBUTIVO_VIEW_LABELS.personas, icon: UsersIcon },
  { id: "cuadre-excel", label: RETRIBUTIVO_VIEW_LABELS["cuadre-excel"], icon: TableIcon },
  { id: "agrupaciones", label: RETRIBUTIVO_VIEW_LABELS.agrupaciones, icon: LayersIcon },
  { id: "asistente", label: RETRIBUTIVO_VIEW_LABELS.asistente, icon: BotIcon },
  { id: "historial", label: RETRIBUTIVO_VIEW_LABELS.historial, icon: HistoryIcon },
  { id: "ajustes", label: RETRIBUTIVO_VIEW_LABELS.ajustes, icon: SettingsIcon },
];
