import type { Chat } from "@/types/chat";

export type CompanyId = "company-main" | "company-cyc" | "company-nexo";

export type CompanyIconName = "building" | "briefcase" | "layers";

export type CompanyColorName = "blue" | "purple" | "green";

export type Company = {
  id: CompanyId;
  name: string;
  shortName: string;
  icon: CompanyIconName;
  color: CompanyColorName;
};

export type WorkspaceUserRole = "administrator" | "manager" | "user";

export type WorkspaceUserStatus = "active" | "inactive";

export type WorkspaceUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: WorkspaceUserRole;
  status: WorkspaceUserStatus;
  createdAt: string;
};

export type UserDraft = Omit<WorkspaceUser, "id" | "createdAt">;

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
  users: WorkspaceUser[];
  recentTools: ToolVisit[];
  preferences: WorkspacePreferences;
};
