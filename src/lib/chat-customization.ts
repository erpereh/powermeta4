import {
  BookOpen,
  Brain,
  Briefcase,
  ChartNoAxesCombined,
  Code2,
  FlaskConical,
  Folder,
  Heart,
  Lightbulb,
  Palette,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ChatColorName, ChatIconName } from "@/types/chat";

export const DEFAULT_CHAT_ICON: ChatIconName = "folder";
export const DEFAULT_CHAT_COLOR: ChatColorName = "neutral";

export const CHAT_ICONS: Record<ChatIconName, LucideIcon> = {
  folder: Folder,
  briefcase: Briefcase,
  code: Code2,
  book: BookOpen,
  brain: Brain,
  lightbulb: Lightbulb,
  rocket: Rocket,
  flask: FlaskConical,
  chart: ChartNoAxesCombined,
  palette: Palette,
  heart: Heart,
  wrench: Wrench,
};

export const CHAT_ICON_LABELS: Record<ChatIconName, string> = {
  folder: "Carpeta",
  briefcase: "Trabajo",
  code: "Código",
  book: "Libro",
  brain: "Ideas",
  lightbulb: "Idea",
  rocket: "Lanzamiento",
  flask: "Experimento",
  chart: "Métricas",
  palette: "Diseño",
  heart: "Personal",
  wrench: "Herramientas",
};

export const CHAT_ICON_OPTIONS = [
  "folder",
  "briefcase",
  "code",
  "book",
  "brain",
  "lightbulb",
  "rocket",
  "flask",
  "chart",
  "palette",
  "heart",
  "wrench",
] as const satisfies readonly ChatIconName[];

export const CHAT_COLORS: Record<ChatColorName, { label: string; className: string }> = {
  neutral: { label: "Neutral", className: "text-muted-foreground" },
  blue: { label: "Azul", className: "text-blue-400" },
  cyan: { label: "Cian", className: "text-cyan-400" },
  green: { label: "Verde", className: "text-emerald-400" },
  yellow: { label: "Amarillo", className: "text-amber-300" },
  orange: { label: "Naranja", className: "text-orange-400" },
  red: { label: "Rojo", className: "text-red-400" },
  pink: { label: "Rosa", className: "text-pink-400" },
  purple: { label: "Morado", className: "text-violet-400" },
};

export const CHAT_COLOR_OPTIONS = [
  "neutral",
  "blue",
  "cyan",
  "green",
  "yellow",
  "orange",
  "red",
  "pink",
  "purple",
] as const satisfies readonly ChatColorName[];

export const isChatIconName = (value: string): value is ChatIconName =>
  CHAT_ICON_OPTIONS.some((option) => option === value);

export const isChatColorName = (value: string): value is ChatColorName =>
  CHAT_COLOR_OPTIONS.some((option) => option === value);
