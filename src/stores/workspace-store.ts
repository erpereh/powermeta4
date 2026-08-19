import { createStore, type StateCreator, type StoreApi } from "zustand/vanilla";

import {
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
  isChatColorName,
  isChatIconName,
} from "@/lib/chat-customization";
import { getTool } from "@/lib/tools/registry";
import type { Chat, Message, MessageContent, MessageStatus } from "@/types/chat";
import type { AuthView } from "@/types/session";
import type {
  Company,
  CompanyColorName,
  CompanyIconName,
  CompanyId,
  ToolVisit,
  WorkspaceData,
} from "@/types/workspace";

export type WorkspaceSnapshotState = {
  companies: Company[];
  activeCompanyId: CompanyId | null;
  workspaces: Partial<Record<CompanyId, WorkspaceData>>;
  auth: AuthView | null;
};

export type WorkspaceStore = WorkspaceSnapshotState & {
  hydrated: boolean;
  applySnapshot: (snapshot: WorkspaceSnapshotState) => void;
  setHydrated: (hydrated: boolean) => void;
  createCompany: (name: string) => CompanyId | null;
  deleteCompany: (companyId: CompanyId) => CompanyId | null;
  switchCompany: (companyId: CompanyId) => void;
  createChat: (companyId?: CompanyId) => string;
  selectChat: (chatId: string, companyId?: CompanyId) => void;
  toggleFavorite: (chatId: string, companyId?: CompanyId) => void;
  setChatIcon: (chatId: string, icon: Chat["icon"], companyId?: CompanyId) => void;
  setChatColor: (chatId: string, iconColor: Chat["iconColor"], companyId?: CompanyId) => void;
  setChatTitle: (chatId: string, title: string, companyId?: CompanyId) => void;
  deleteChat: (chatId: string, companyId?: CompanyId) => void;
  setChatMessages: (chatId: string, messages: Message[], companyId?: CompanyId) => void;
  setChatHead: (chatId: string, headMessageId: string | null, companyId?: CompanyId) => void;
  setMessageContent: (
    chatId: string,
    messageId: string,
    content: MessageContent,
    companyId?: CompanyId,
  ) => void;
  setMessageStatus: (
    chatId: string,
    messageId: string,
    status: MessageStatus,
    companyId?: CompanyId,
  ) => void;
  setSelectedProviderConfig: (providerConfigId: string, companyId?: CompanyId) => void;
  recordToolVisit: (toolId: string, companyId?: CompanyId) => void;
};

const createId = (_prefix: string) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return uuid ?? `${Date.now()}-${Math.random().toString(36).slice(2, 14)}`;
};

const toCompanyId = (id: string): CompanyId => id as CompanyId;

const createEmptyChat = (): Chat => ({
  id: createId("conversation"),
  title: "Nuevo chat",
  favorite: false,
  updatedAt: new Date().toISOString(),
  headMessageId: null,
  messages: [],
});

const createWorkspaceData = (): WorkspaceData => ({
  chats: [],
  activeChatId: null,
  recentTools: [],
  preferences: {
    selectedProviderConfigId: null,
  },
  aiProviderConfigs: [],
});

export const createInitialWorkspaces = (): Partial<Record<CompanyId, WorkspaceData>> => ({});

export const createInitialWorkspaceState = (): WorkspaceSnapshotState => ({
  companies: [],
  activeCompanyId: null,
  workspaces: createInitialWorkspaces(),
  auth: null,
});

const cloneWorkspaceState = (state: WorkspaceSnapshotState): WorkspaceSnapshotState => ({
  companies: state.companies.map((company) => ({ ...company })),
  activeCompanyId: state.activeCompanyId,
  auth: state.auth
    ? {
        mode: state.auth.mode,
        username: state.auth.username,
        canUseMeta4: state.auth.canUseMeta4,
        societyCode: state.auth.societyCode ?? null,
        availableSocieties: Array.isArray(state.auth.availableSocieties)
          ? state.auth.availableSocieties.filter(
              (society): society is "CYC" | "IBER" | "COLL" =>
                society === "CYC" || society === "IBER" || society === "COLL",
            )
          : [],
      }
    : null,
  workspaces: Object.fromEntries(
    Object.entries(state.workspaces).flatMap(([companyId, workspace]) => {
      if (!workspace) return [];
      return [
        [
          companyId,
          {
            ...workspace,
            chats: workspace.chats.map((chat) => ({
              ...chat,
              messages: chat.messages.map((message) => ({ ...message })),
            })),
            recentTools: workspace.recentTools.map((visit) => ({ ...visit })),
            preferences: { ...workspace.preferences },
            aiProviderConfigs: (workspace.aiProviderConfigs ?? []).map((config) => ({ ...config })),
          },
        ] as const,
      ];
    }),
  ) as Partial<Record<CompanyId, WorkspaceData>>,
});

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const messageText = (content: MessageContent): string => {
  if (typeof content === "string") return content;
  return content
    .filter((part) => isRecord(part) && part.type === "text" && typeof part.text === "string")
    .map((part) => {
      const candidate: unknown = part;
      if (typeof candidate !== "object" || candidate === null || !("text" in candidate)) return "";
      return typeof candidate.text === "string" ? candidate.text : "";
    })
    .join(" ");
};

export const filterChats = (chats: readonly Chat[], query: string): Chat[] => {
  const normalizedQuery = query
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
  if (!normalizedQuery) return [...chats];

  return chats.filter((chat) => {
    const searchableText = [
      chat.title,
      ...chat.messages.map((message) => messageText(message.content)),
    ]
      .join(" ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

    return searchableText.includes(normalizedQuery);
  });
};

const resolveCompanyId = (state: WorkspaceStore, companyId?: CompanyId) =>
  companyId ?? state.activeCompanyId;

const updateWorkspace = (
  state: WorkspaceStore,
  companyId: CompanyId | null,
  updater: (workspace: WorkspaceData) => WorkspaceData,
) => {
  if (!companyId || !state.workspaces[companyId]) return {};
  return {
    workspaces: {
      ...state.workspaces,
      [companyId]: updater(state.workspaces[companyId]),
    },
  };
};

const createCompanyDraft = (name: string): Company | null => {
  const trimmedName = name.trim();
  if (!trimmedName) return null;
  return {
    id: toCompanyId(createId("company")),
    name: trimmedName,
    shortName: trimmedName.split(/\s+/).slice(0, 2).join(" ").slice(0, 24),
    icon: "building",
    color: "blue",
  };
};

const createWorkspaceStoreState =
  (initialState: WorkspaceSnapshotState): StateCreator<WorkspaceStore> =>
  (set, get) => ({
    ...cloneWorkspaceState(initialState),
    hydrated: false,
    applySnapshot: (snapshot) => set({ ...cloneWorkspaceState(snapshot), hydrated: true }),
    setHydrated: (hydrated) => set({ hydrated }),
    createCompany: (name) => {
      const company = createCompanyDraft(name);
      if (!company) return null;
      const state = get();
      if (
        state.companies.some(
          (item) => item.name.toLocaleLowerCase() === company.name.toLocaleLowerCase(),
        )
      ) {
        return null;
      }
      set({
        companies: [...state.companies, company],
        activeCompanyId: company.id,
        workspaces: { ...state.workspaces, [company.id]: createWorkspaceData() },
      });
      return company.id;
    },
    deleteCompany: (companyId) => {
      const state = get();
      if (
        state.companies.length <= 1 ||
        !state.companies.some((company) => company.id === companyId)
      ) {
        return null;
      }
      const companies = state.companies.filter((company) => company.id !== companyId);
      const activeCompanyId =
        state.activeCompanyId === companyId ? (companies[0]?.id ?? null) : state.activeCompanyId;
      const workspaces = { ...state.workspaces };
      delete workspaces[companyId];
      set({ companies, activeCompanyId, workspaces });
      return activeCompanyId;
    },
    switchCompany: (companyId) => {
      if (get().companies.some((company) => company.id === companyId))
        set({ activeCompanyId: companyId });
    },
    createChat: (companyId) => {
      const targetCompanyId = companyId ?? get().activeCompanyId;
      const chat = createEmptyChat();
      if (targetCompanyId) {
        set((state) =>
          updateWorkspace(state, targetCompanyId, (workspace) => ({
            ...workspace,
            chats: [chat, ...workspace.chats],
            activeChatId: chat.id,
          })),
        );
      }
      return chat.id;
    },
    selectChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) =>
          workspace.chats.some((chat) => chat.id === chatId)
            ? { ...workspace, activeChatId: chatId }
            : workspace,
        ),
      );
    },
    toggleFavorite: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  favorite: !chat.favorite,
                  ...(!chat.favorite
                    ? {
                        icon: chat.icon ?? DEFAULT_CHAT_ICON,
                        iconColor: chat.iconColor ?? DEFAULT_CHAT_COLOR,
                      }
                    : {}),
                }
              : chat,
          ),
        })),
      );
    },
    setChatIcon: (chatId, icon, companyId) => {
      if (icon && !isChatIconName(icon)) return;
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) => (chat.id === chatId ? { ...chat, icon } : chat)),
        })),
      );
    },
    setChatColor: (chatId, iconColor, companyId) => {
      if (iconColor && !isChatColorName(iconColor)) return;
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId ? { ...chat, iconColor } : chat,
          ),
        })),
      );
    },
    setChatTitle: (chatId, title, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  title: title.trim() || "Nuevo chat",
                  updatedAt: new Date().toISOString(),
                }
              : chat,
          ),
        })),
      );
    },
    deleteChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => {
          const chats = workspace.chats.filter((chat) => chat.id !== chatId);
          return {
            ...workspace,
            chats,
            activeChatId:
              workspace.activeChatId === chatId ? (chats[0]?.id ?? null) : workspace.activeChatId,
          };
        }),
      );
    },
    setChatMessages: (chatId, messages, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId ? { ...chat, messages, updatedAt: new Date().toISOString() } : chat,
          ),
        })),
      );
    },
    setChatHead: (chatId, headMessageId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId
              ? { ...chat, headMessageId, updatedAt: new Date().toISOString() }
              : chat,
          ),
        })),
      );
    },
    setMessageContent: (chatId, messageId, content, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  updatedAt: new Date().toISOString(),
                  messages: chat.messages.map((message) =>
                    message.id === messageId ? { ...message, content } : message,
                  ),
                }
              : chat,
          ),
        })),
      );
    },
    setMessageStatus: (chatId, messageId, status, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: chat.messages.map((message) =>
                    message.id === messageId ? { ...message, status } : message,
                  ),
                }
              : chat,
          ),
        })),
      );
    },
    setSelectedProviderConfig: (providerConfigId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          preferences: { ...workspace.preferences, selectedProviderConfigId: providerConfigId },
        })),
      );
    },
    recordToolVisit: (toolId, companyId) => {
      if (!getTool(toolId)) return;
      const targetCompanyId = resolveCompanyId(get(), companyId);
      const visit: ToolVisit = { toolId, visitedAt: new Date().toISOString() };
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          recentTools: [
            visit,
            ...workspace.recentTools.filter((item) => item.toolId !== toolId),
          ].slice(0, 8),
        })),
      );
    },
  });

export const createWorkspaceStore = (
  initialState: WorkspaceSnapshotState = createInitialWorkspaceState(),
): StoreApi<WorkspaceStore> =>
  createStore<WorkspaceStore>()(createWorkspaceStoreState(initialState));

export const getWorkspace = (state: WorkspaceStore, companyId?: CompanyId) =>
  companyId
    ? state.workspaces[companyId]
    : state.activeCompanyId
      ? state.workspaces[state.activeCompanyId]
      : undefined;

export const normalizeCompanyForClient = (company: {
  id: string;
  name: string;
  shortName: string;
  icon: CompanyIconName;
  color: CompanyColorName;
}): Company => ({ ...company, id: toCompanyId(company.id) });

export const defaultWorkspaceData = createWorkspaceData;
