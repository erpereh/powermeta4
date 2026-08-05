import type { Chat } from "@/types/chat";

export type CompanyId = string;

export type CompanyIconName = "building" | "briefcase" | "layers";

export type CompanyColorName = "blue" | "purple" | "green";

export type Company = {
  id: CompanyId;
  name: string;
  shortName: string;
  icon: CompanyIconName;
  color: CompanyColorName;
};

export type ToolVisit = {
  toolId: string;
  visitedAt: string;
};

export type WorkspacePreferences = {
  selectedModelId: string;
};

export type WorkspaceData = {
  chats: Chat[];
  activeChatId: string | null;
  recentTools: ToolVisit[];
  preferences: WorkspacePreferences;
};
