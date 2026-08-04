import { createStore, type StateCreator, type StoreApi } from "zustand/vanilla";
import {
  createJSONStorage,
  persist,
  type PersistStorage,
  type StorageValue,
} from "zustand/middleware";

import { mockChats } from "@/data/mock-chats";
import { mockModels } from "@/data/mock-models";
import {
  DEFAULT_CHAT_COLOR,
  DEFAULT_CHAT_ICON,
  isChatColorName,
  isChatIconName,
} from "@/lib/chat-customization";
import { getTool } from "@/lib/tools/registry";
import {
  DEFAULT_COMPANY_ID,
  INITIAL_COMPANIES,
  isCompanyColorName,
  isCompanyIconName,
  toCompanyId,
} from "@/lib/workspaces/companies";
import type { Chat, Message, MessageStatus } from "@/types/chat";
import type {
  Company,
  CompanyId,
  ToolVisit,
  WorkspaceData,
  WorkspacePreferences,
} from "@/types/workspace";

export type PersistedWorkspaceState = {
  companies: Company[];
  activeCompanyId: CompanyId;
  workspaces: Record<CompanyId, WorkspaceData>;
  legacyMigrationComplete: boolean;
};

export type WorkspaceStore = PersistedWorkspaceState & {
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
  setMessageContent: (
    chatId: string,
    messageId: string,
    content: string,
    companyId?: CompanyId,
  ) => void;
  setMessageStatus: (
    chatId: string,
    messageId: string,
    status: MessageStatus,
    companyId?: CompanyId,
  ) => void;
  setSelectedModel: (modelId: string, companyId?: CompanyId) => void;
  recordToolVisit: (toolId: string, companyId?: CompanyId) => void;
  migrateLegacyChatState: () => void;
};

const createId = (prefix: string) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `${prefix}-${uuid ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`}`;
};

const createEmptyChat = (): Chat => ({
  id: createId("chat"),
  title: "Nuevo chat",
  favorite: false,
  updatedAt: new Date().toISOString(),
  messages: [],
});

const cloneChats = (chats: readonly Chat[]) =>
  chats.map((chat) => ({
    ...chat,
    messages: chat.messages.map((message) => ({ ...message })),
  }));

const createWorkspaceData = (
  chats: Chat[] = [],
  activeChatId: string | null = null,
): WorkspaceData => ({
  chats,
  activeChatId: chats.some((chat) => chat.id === activeChatId)
    ? activeChatId
    : (chats[0]?.id ?? null),
  recentTools: [],
  preferences: {
    selectedModelId: mockModels[0]?.id ?? "luma-balanced",
  },
});

export const createInitialWorkspaces = (
  mainChats: readonly Chat[] = mockChats,
  mainActiveChatId = "chat-welcome",
): Record<CompanyId, WorkspaceData> => {
  const workspaces = {} as Record<CompanyId, WorkspaceData>;

  for (const company of INITIAL_COMPANIES) {
    workspaces[company.id] =
      company.id === DEFAULT_COMPANY_ID
        ? createWorkspaceData(cloneChats(mainChats), mainActiveChatId)
        : createWorkspaceData();
  }

  return workspaces;
};

const createMemoryStorage = (): PersistStorage<PersistedWorkspaceState> => {
  let storedValue: StorageValue<PersistedWorkspaceState> | null = null;

  return {
    getItem: () => storedValue,
    setItem: (_name, value) => {
      storedValue = value;
    },
    removeItem: () => {
      storedValue = null;
    },
  };
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const normalizeChat = (value: unknown): Chat | null => {
  if (!isRecord(value)) return null;
  if (
    typeof value.id !== "string" ||
    typeof value.title !== "string" ||
    typeof value.favorite !== "boolean" ||
    typeof value.updatedAt !== "string" ||
    !Array.isArray(value.messages)
  ) {
    return null;
  }

  const messages = value.messages.filter(isRecord).filter((message) => {
    return (
      typeof message.id === "string" &&
      (message.role === "user" || message.role === "assistant") &&
      typeof message.content === "string" &&
      typeof message.createdAt === "string" &&
      (message.status === "complete" ||
        message.status === "running" ||
        message.status === "incomplete")
    );
  }) as Array<Record<string, unknown>>;

  const icon =
    typeof value.icon === "string" && isChatIconName(value.icon) ? value.icon : undefined;
  const iconColor =
    typeof value.iconColor === "string" && isChatColorName(value.iconColor)
      ? value.iconColor
      : undefined;

  return {
    id: value.id,
    title: value.title,
    favorite: value.favorite,
    ...(icon ? { icon } : {}),
    ...(iconColor ? { iconColor } : {}),
    updatedAt: value.updatedAt,
    messages: messages.map((message) => ({
      id: message.id as string,
      role: message.role as Message["role"],
      content: message.content as string,
      createdAt: message.createdAt as string,
      status: message.status as MessageStatus,
    })),
  };
};

const dedupeChats = (values: unknown): Chat[] => {
  if (!Array.isArray(values)) return [];
  const seen = new Set<string>();
  const chats: Chat[] = [];

  for (const value of values) {
    const chat = normalizeChat(value);
    if (!chat || seen.has(chat.id)) continue;
    seen.add(chat.id);
    chats.push(chat);
  }

  return chats;
};

const normalizeWorkspaceData = (value: unknown, fallback: WorkspaceData): WorkspaceData => {
  if (!isRecord(value)) return fallback;

  const chats = dedupeChats(value.chats);
  const activeChatId = typeof value.activeChatId === "string" ? value.activeChatId : null;
  const recentTools = Array.isArray(value.recentTools)
    ? value.recentTools.filter((item): item is ToolVisit => {
        if (!isRecord(item)) return false;
        return (
          typeof item.toolId === "string" &&
          typeof item.visitedAt === "string" &&
          Boolean(getTool(item.toolId))
        );
      })
    : [];
  const preferences = isRecord(value.preferences)
    ? ({
        selectedModelId:
          typeof value.preferences.selectedModelId === "string"
            ? value.preferences.selectedModelId
            : fallback.preferences.selectedModelId,
      } satisfies WorkspacePreferences)
    : fallback.preferences;

  return {
    chats,
    activeChatId: chats.some((chat) => chat.id === activeChatId)
      ? activeChatId
      : (chats[0]?.id ?? null),
    recentTools: recentTools.slice(0, 8),
    preferences,
  };
};

const normalizeCompany = (value: unknown): Company | null => {
  if (!isRecord(value)) return null;
  if (
    typeof value.id !== "string" ||
    !value.id.trim() ||
    typeof value.name !== "string" ||
    !value.name.trim() ||
    typeof value.shortName !== "string" ||
    !value.shortName.trim() ||
    !isCompanyIconName(value.icon) ||
    !isCompanyColorName(value.color)
  ) {
    return null;
  }

  return {
    id: toCompanyId(value.id),
    name: value.name.trim(),
    shortName: value.shortName.trim(),
    icon: value.icon,
    color: value.color,
  };
};

const cloneCompanies = (companies: readonly Company[]): Company[] =>
  companies.map((company) => ({ ...company }));

const normalizeCompanies = (value: unknown, fallback: readonly Company[]): Company[] => {
  if (!Array.isArray(value)) return cloneCompanies(fallback);

  const seenIds = new Set<string>();
  const seenNames = new Set<string>();
  const companies: Company[] = [];

  for (const item of value) {
    const company = normalizeCompany(item);
    if (!company) continue;

    const normalizedName = company.name.toLocaleLowerCase();
    if (seenIds.has(company.id) || seenNames.has(normalizedName)) continue;
    seenIds.add(company.id);
    seenNames.add(normalizedName);
    companies.push(company);
  }

  return companies.length > 0 ? companies : cloneCompanies(fallback);
};

const normalizePersistedState = (
  value: unknown,
  fallbackCompanies: readonly Company[],
  fallbackWorkspaces: Record<CompanyId, WorkspaceData>,
): PersistedWorkspaceState => {
  if (!isRecord(value)) {
    return {
      companies: cloneCompanies(fallbackCompanies),
      activeCompanyId: DEFAULT_COMPANY_ID,
      workspaces: fallbackWorkspaces,
      legacyMigrationComplete: false,
    };
  }

  const companies = normalizeCompanies(value.companies, fallbackCompanies);
  const requestedActiveCompanyId =
    typeof value.activeCompanyId === "string" ? toCompanyId(value.activeCompanyId) : null;
  const activeCompanyId =
    requestedActiveCompanyId && companies.some((company) => company.id === requestedActiveCompanyId)
      ? requestedActiveCompanyId
      : (companies[0]?.id ?? DEFAULT_COMPANY_ID);
  const persistedWorkspaces = isRecord(value.workspaces) ? value.workspaces : {};
  const workspaces = {} as Record<CompanyId, WorkspaceData>;

  for (const company of companies) {
    workspaces[company.id] = normalizeWorkspaceData(
      persistedWorkspaces[company.id],
      fallbackWorkspaces[company.id] ?? createWorkspaceData(),
    );
  }

  return {
    companies,
    activeCompanyId,
    workspaces,
    legacyMigrationComplete: value.legacyMigrationComplete === true,
  };
};

export const filterChats = (chats: readonly Chat[], query: string): Chat[] => {
  const normalizedQuery = query
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
  if (!normalizedQuery) return [...chats];

  return chats.filter((chat) => {
    const searchableText = [chat.title, ...chat.messages.map((message) => message.content)]
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
  companyId: CompanyId,
  updater: (workspace: WorkspaceData) => WorkspaceData,
) => {
  const workspace = state.workspaces[companyId];
  if (!workspace) return {};

  return {
    workspaces: {
      ...state.workspaces,
      [companyId]: updater(workspace),
    },
  };
};

const createWorkspaceStoreState =
  (initialState: PersistedWorkspaceState): StateCreator<WorkspaceStore> =>
  (set, get) => ({
    ...initialState,
    createCompany: (name) => {
      const trimmedName = name.trim();
      if (!trimmedName) return null;

      const state = get();
      const duplicate = state.companies.some(
        (company) => company.name.toLocaleLowerCase() === trimmedName.toLocaleLowerCase(),
      );
      if (duplicate) return null;

      const company: Company = {
        id: toCompanyId(createId("company")),
        name: trimmedName,
        shortName: trimmedName.split(/\s+/).slice(0, 2).join(" ").slice(0, 24),
        icon: "building",
        color: "blue",
      };

      set((current) => ({
        companies: [...current.companies, company],
        activeCompanyId: company.id,
        workspaces: {
          ...current.workspaces,
          [company.id]: createWorkspaceData(),
        },
      }));

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
        state.activeCompanyId === companyId
          ? (companies[0]?.id ?? state.activeCompanyId)
          : state.activeCompanyId;
      const workspaces = { ...state.workspaces };
      delete workspaces[companyId];

      set({ companies, activeCompanyId, workspaces });
      return activeCompanyId;
    },
    switchCompany: (companyId) => {
      if (get().companies.some((company) => company.id === companyId)) {
        set({ activeCompanyId: companyId });
      }
    },
    createChat: (companyId) => {
      const targetCompanyId = companyId ?? get().activeCompanyId;
      const chat = createEmptyChat();
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: [chat, ...workspace.chats],
          activeChatId: chat.id,
        })),
      );
      return chat.id;
    },
    selectChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) => {
        const workspace = state.workspaces[targetCompanyId];
        if (!workspace || !workspace.chats.some((chat) => chat.id === chatId)) return {};
        return updateWorkspace(state, targetCompanyId, (current) => ({
          ...current,
          activeChatId: chatId,
        }));
      });
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
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          chats: workspace.chats.map((chat) => (chat.id === chatId ? { ...chat, icon } : chat)),
        })),
      );
    },
    setChatColor: (chatId, iconColor, companyId) => {
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
            chat.id === chatId ? { ...chat, title: title.trim() || "Nuevo chat" } : chat,
          ),
        })),
      );
    },
    deleteChat: (chatId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => {
          const remainingChats = workspace.chats.filter((chat) => chat.id !== chatId);
          if (remainingChats.length === 0) {
            const replacement = createEmptyChat();
            return {
              ...workspace,
              chats: [replacement],
              activeChatId: replacement.id,
            };
          }

          return {
            ...workspace,
            chats: remainingChats,
            activeChatId:
              workspace.activeChatId === chatId
                ? (remainingChats[0]?.id ?? null)
                : workspace.activeChatId,
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
    setSelectedModel: (modelId, companyId) => {
      const targetCompanyId = resolveCompanyId(get(), companyId);
      set((state) =>
        updateWorkspace(state, targetCompanyId, (workspace) => ({
          ...workspace,
          preferences: {
            ...workspace.preferences,
            selectedModelId: modelId,
          },
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
    migrateLegacyChatState: () => {
      if (typeof window === "undefined" || get().legacyMigrationComplete) return;

      let legacyChats: Chat[] | null = null;
      let legacyActiveChatId: string | null = null;
      try {
        const raw = window.localStorage.getItem("powermeta4-chat-store");
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (isRecord(parsed) && isRecord(parsed.state)) {
            legacyChats = dedupeChats(parsed.state.chats);
            legacyActiveChatId =
              typeof parsed.state.activeChatId === "string" ? parsed.state.activeChatId : null;
          }
        }
      } catch {
        legacyChats = null;
        legacyActiveChatId = null;
      }

      if (legacyChats && legacyChats.length > 0) {
        const activeChatId = legacyChats.some((chat) => chat.id === legacyActiveChatId)
          ? legacyActiveChatId
          : (legacyChats[0]?.id ?? null);
        set((state) => ({
          workspaces: {
            ...state.workspaces,
            [DEFAULT_COMPANY_ID]: {
              ...state.workspaces[DEFAULT_COMPANY_ID],
              chats: legacyChats,
              activeChatId,
            },
          },
          legacyMigrationComplete: true,
        }));
      } else {
        set({ legacyMigrationComplete: true });
      }

      try {
        window.localStorage.removeItem("powermeta4-chat-store");
      } catch {
        // A restricted storage implementation must not prevent the app from loading.
      }
    },
  });

export const createWorkspaceStore = (
  initialWorkspaces = createInitialWorkspaces(),
  activeCompanyId: CompanyId = DEFAULT_COMPANY_ID,
): StoreApi<WorkspaceStore> =>
  createStore<WorkspaceStore>()(
    createWorkspaceStoreState({
      companies: cloneCompanies(INITIAL_COMPANIES),
      activeCompanyId,
      workspaces: initialWorkspaces,
      legacyMigrationComplete: true,
    }),
  );

export const createPersistedWorkspaceStore = (
  initialWorkspaces = createInitialWorkspaces(),
  activeCompanyId: CompanyId = DEFAULT_COMPANY_ID,
  storage?: PersistStorage<PersistedWorkspaceState>,
) => {
  const resolvedStorage =
    storage ??
    (typeof window === "undefined"
      ? createMemoryStorage()
      : createJSONStorage<PersistedWorkspaceState>(() => window.localStorage));

  return createStore<WorkspaceStore>()(
    persist(
      createWorkspaceStoreState({
        companies: cloneCompanies(INITIAL_COMPANIES),
        activeCompanyId,
        workspaces: initialWorkspaces,
        legacyMigrationComplete: false,
      }),
      {
        name: "powermeta4-workspace-store",
        storage: resolvedStorage,
        skipHydration: true,
        version: 3,
        migrate: (persistedState) =>
          normalizePersistedState(persistedState, INITIAL_COMPANIES, initialWorkspaces),
        partialize: ({
          companies,
          activeCompanyId: companyId,
          workspaces,
          legacyMigrationComplete,
        }) => ({
          companies,
          activeCompanyId: companyId,
          workspaces,
          legacyMigrationComplete,
        }),
      },
    ),
  );
};

export const getWorkspace = (state: WorkspaceStore, companyId?: CompanyId) =>
  state.workspaces[companyId ?? state.activeCompanyId];
