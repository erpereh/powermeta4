import "server-only";

import type { PrismaClient } from "@/generated/prisma/client";
import { mockModels } from "@/data/mock-models";
import { isChatColorName, isChatIconName } from "@/lib/chat-customization";
import { getTool } from "@/lib/tools/registry";
import { bootstrapLocalCompany } from "@/lib/local-database/bootstrap";
import { createCompanyRepository } from "@/lib/local-database/repositories/company-repository";
import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/lib/local-database/server-constants";
import type { WorkspaceSnapshot } from "@/lib/local-database/dtos";
import { isCompanyColorName, isCompanyIconName, toCompanyId } from "@/lib/workspaces/companies";
import { assertMaintenanceAvailable } from "@/lib/backups/maintenance-lock";
import type { Chat, Message, MessageContent, MessageRole, MessageStatus } from "@/types/chat";
import type { Company, CompanyId, WorkspaceData } from "@/types/workspace";

export const ACTIVE_COMPANY_SETTING_KEY = "activeCompanyId";
export const ACTIVE_CHAT_SETTING_KEY = "activeChatId";
export const SELECTED_MODEL_SETTING_KEY = "selectedModelId";

type WorkspacePrismaClient = Pick<
  PrismaClient,
  | "company"
  | "conversation"
  | "message"
  | "appSetting"
  | "workspaceSetting"
  | "toolActivity"
  | "soapSession"
  | "$transaction"
>;

const appVersion = process.env.npm_package_version ?? "0.1.0";

const safeJsonParse = (value: string): unknown => {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return null;
  }
};

const serializeContent = (content: MessageContent): string => JSON.stringify(content);

const parseContent = (value: string): MessageContent => {
  const parsed = safeJsonParse(value);
  if (typeof parsed === "string") return [{ type: "text", text: parsed }];
  if (Array.isArray(parsed)) return parsed as MessageContent;
  return [];
};

const mapCompany = (company: {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
}): Company => ({
  id: toCompanyId(company.id),
  name: company.name,
  shortName: company.shortName,
  icon: isCompanyIconName(company.icon) ? company.icon : "building",
  color: isCompanyColorName(company.color) ? company.color : "blue",
});

const mapMessage = (message: {
  id: string;
  role: string;
  contentJson: string;
  createdAt: Date;
  status: string;
}): Message => ({
  id: message.id,
  role: message.role === "assistant" ? "assistant" : "user",
  content: parseContent(message.contentJson),
  createdAt: message.createdAt.toISOString(),
  status:
    message.status === "complete" || message.status === "cancelled" || message.status === "failed"
      ? message.status
      : "incomplete",
});

const mapConversation = (conversation: {
  id: string;
  title: string;
  favorite: boolean;
  icon: string | null;
  iconColor: string | null;
  updatedAt: Date;
  messages: Array<{
    id: string;
    role: string;
    contentJson: string;
    createdAt: Date;
    status: string;
  }>;
}): Chat => ({
  id: conversation.id,
  title: conversation.title,
  favorite: conversation.favorite,
  ...(conversation.icon && isChatIconName(conversation.icon) ? { icon: conversation.icon } : {}),
  ...(conversation.iconColor && isChatColorName(conversation.iconColor)
    ? { iconColor: conversation.iconColor }
    : {}),
  updatedAt: conversation.updatedAt.toISOString(),
  messages: conversation.messages.map(mapMessage),
});

const ensureCompany = async (prisma: WorkspacePrismaClient, companyId: CompanyId) => {
  const company = await prisma.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error("La empresa no existe.");
  return company;
};

const ensureConversation = async (
  prisma: WorkspacePrismaClient,
  companyId: CompanyId,
  conversationId: string,
) => {
  const conversation = await prisma.conversation.findUnique({ where: { id: conversationId } });
  if (!conversation || conversation.companyId !== companyId) {
    throw new Error("La conversación no pertenece a la empresa activa.");
  }
  return conversation;
};

const parseSettingString = (value: string | null | undefined): string | null => {
  if (typeof value !== "string") return null;
  const parsed = safeJsonParse(value);
  return typeof parsed === "string" ? parsed : value;
};

export const createWorkspaceRepository = (prisma: WorkspacePrismaClient) => {
  const getCompanies = async (): Promise<Company[]> => {
    assertMaintenanceAvailable();
    await bootstrapLocalCompany(createCompanyRepository(prisma));
    const companies = await prisma.company.findMany({ orderBy: { createdAt: "asc" } });
    return companies.map(mapCompany);
  };

  const getActiveCompanyId = async (companies: readonly Company[]): Promise<CompanyId | null> => {
    const setting = await prisma.appSetting.findUnique({
      where: { key: ACTIVE_COMPANY_SETTING_KEY },
    });
    const storedId = parseSettingString(setting?.valueJson);
    const activeCompanyId =
      storedId && companies.some((company) => company.id === storedId)
        ? storedId
        : (companies[0]?.id ?? null);
    if (activeCompanyId && activeCompanyId !== storedId) {
      await prisma.appSetting.upsert({
        where: { key: ACTIVE_COMPANY_SETTING_KEY },
        create: { key: ACTIVE_COMPANY_SETTING_KEY, valueJson: JSON.stringify(activeCompanyId) },
        update: { valueJson: JSON.stringify(activeCompanyId) },
      });
    }
    return activeCompanyId;
  };

  const getWorkspaceData = async (company: Company): Promise<WorkspaceData> => {
    const [conversations, settings, visits] = await Promise.all([
      prisma.conversation.findMany({
        where: { companyId: company.id },
        orderBy: { updatedAt: "desc" },
        include: { messages: { orderBy: { createdAt: "asc" } } },
      }),
      prisma.workspaceSetting.findMany({ where: { companyId: company.id } }),
      prisma.toolActivity.findMany({
        where: { companyId: company.id },
        orderBy: { createdAt: "desc" },
        take: 8,
      }),
    ]);
    const selectedModelId =
      parseSettingString(
        settings.find((setting) => setting.key === SELECTED_MODEL_SETTING_KEY)?.valueJson,
      ) ??
      mockModels[0]?.id ??
      "luma-balanced";
    const requestedActiveChatId = parseSettingString(
      settings.find((setting) => setting.key === ACTIVE_CHAT_SETTING_KEY)?.valueJson,
    );
    const activeChatId =
      requestedActiveChatId &&
      conversations.some((conversation) => conversation.id === requestedActiveChatId)
        ? requestedActiveChatId
        : (conversations[0]?.id ?? null);
    return {
      chats: conversations.map(mapConversation),
      activeChatId,
      recentTools: visits
        .filter((visit) => Boolean(getTool(visit.toolId)))
        .map((visit) => ({ toolId: visit.toolId, visitedAt: visit.createdAt.toISOString() })),
      preferences: { selectedModelId },
    };
  };

  const getSnapshot = async (username: string): Promise<WorkspaceSnapshot> => {
    const companies = await getCompanies();
    const activeCompanyId = await getActiveCompanyId(companies);
    const workspaces: Partial<Record<CompanyId, WorkspaceData>> = {};
    for (const company of companies) workspaces[company.id] = await getWorkspaceData(company);
    const soapSession = await prisma.soapSession.findUnique({
      where: { id: "global" },
      select: { lastValidatedAt: true },
    });
    return {
      companies,
      activeCompanyId,
      workspaces,
      session: {
        username,
        status: "authenticated",
        lastValidatedAt: soapSession?.lastValidatedAt?.toISOString() ?? null,
      },
      backupVersion: BACKUP_VERSION,
      databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
      appVersion,
    };
  };

  const getConversation = async (companyId: CompanyId, conversationId: string): Promise<Chat> => {
    await ensureCompany(prisma, companyId);
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    });
    if (!conversation || conversation.companyId !== companyId)
      throw new Error("La conversación no pertenece a la empresa activa.");
    return mapConversation(conversation);
  };

  const createCompany = async (input: { name: string; id?: string }): Promise<Company> => {
    assertMaintenanceAvailable();
    const name = input.name.trim();
    if (!name) throw new Error("El nombre de empresa es obligatorio.");
    const created = await prisma.company.create({
      data: {
        id: input.id ?? crypto.randomUUID(),
        name,
        shortName: name.split(/\s+/).slice(0, 2).join(" ").slice(0, 24),
        icon: "building",
        color: "blue",
      },
    });
    await setActiveCompany(created.id);
    return mapCompany(created);
  };

  const deleteCompany = async (companyId: CompanyId): Promise<CompanyId> => {
    assertMaintenanceAvailable();
    const companies = await getCompanies();
    if (companies.length <= 1) throw new Error("No se puede eliminar la última empresa.");
    await ensureCompany(prisma, companyId);
    await prisma.company.delete({ where: { id: companyId } });
    const remaining = companies.filter((company) => company.id !== companyId);
    const storedActiveCompanyId = parseSettingString(
      (await prisma.appSetting.findUnique({ where: { key: ACTIVE_COMPANY_SETTING_KEY } }))
        ?.valueJson,
    );
    const activeCompanyId =
      storedActiveCompanyId && remaining.some((company) => company.id === storedActiveCompanyId)
        ? storedActiveCompanyId
        : remaining[0]?.id;
    if (!activeCompanyId) throw new Error("No queda una empresa válida.");
    await prisma.appSetting.upsert({
      where: { key: ACTIVE_COMPANY_SETTING_KEY },
      create: { key: ACTIVE_COMPANY_SETTING_KEY, valueJson: JSON.stringify(activeCompanyId) },
      update: { valueJson: JSON.stringify(activeCompanyId) },
    });
    return activeCompanyId;
  };

  const setActiveCompany = async (companyId: CompanyId) => {
    assertMaintenanceAvailable();
    await ensureCompany(prisma, companyId);
    await prisma.appSetting.upsert({
      where: { key: ACTIVE_COMPANY_SETTING_KEY },
      create: { key: ACTIVE_COMPANY_SETTING_KEY, valueJson: JSON.stringify(companyId) },
      update: { valueJson: JSON.stringify(companyId) },
    });
  };

  const setActiveConversation = async (companyId: CompanyId, conversationId: string) => {
    assertMaintenanceAvailable();
    await ensureConversation(prisma, companyId, conversationId);
    await prisma.workspaceSetting.upsert({
      where: { companyId_key: { companyId, key: ACTIVE_CHAT_SETTING_KEY } },
      create: {
        id: crypto.randomUUID(),
        companyId,
        key: ACTIVE_CHAT_SETTING_KEY,
        valueJson: JSON.stringify(conversationId),
      },
      update: { valueJson: JSON.stringify(conversationId) },
    });
  };

  const createConversation = async (companyId: CompanyId, id?: string): Promise<Chat> => {
    assertMaintenanceAvailable();
    await ensureCompany(prisma, companyId);
    const conversationId = id ?? crypto.randomUUID();
    const existing = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { messages: true },
    });
    if (existing) {
      if (existing.companyId !== companyId)
        throw new Error("La conversación no pertenece a la empresa activa.");
      await setActiveConversation(companyId, conversationId);
      return mapConversation({ ...existing, messages: existing.messages });
    }
    const conversation = await prisma.conversation.create({
      data: { id: conversationId, companyId, title: "Nuevo chat", favorite: false },
      include: { messages: true },
    });
    await setActiveConversation(companyId, conversationId);
    return mapConversation({ ...conversation, messages: conversation.messages });
  };

  const updateConversation = async (
    companyId: CompanyId,
    conversationId: string,
    patch: { title?: string; favorite?: boolean; icon?: string | null; iconColor?: string | null },
  ) => {
    assertMaintenanceAvailable();
    await ensureConversation(prisma, companyId, conversationId);
    const data = {
      ...(patch.title !== undefined
        ? { title: patch.title.trim().slice(0, 160) || "Nuevo chat" }
        : {}),
      ...(patch.favorite !== undefined ? { favorite: patch.favorite } : {}),
      ...(patch.icon !== undefined
        ? { icon: patch.icon && isChatIconName(patch.icon) ? patch.icon : null }
        : {}),
      ...(patch.iconColor !== undefined
        ? {
            iconColor: patch.iconColor && isChatColorName(patch.iconColor) ? patch.iconColor : null,
          }
        : {}),
    };
    const conversation = await prisma.conversation.update({
      where: { id: conversationId },
      data,
      include: { messages: true },
    });
    return mapConversation({ ...conversation, messages: conversation.messages });
  };

  const deleteConversation = async (companyId: CompanyId, conversationId: string) => {
    assertMaintenanceAvailable();
    await ensureConversation(prisma, companyId, conversationId);
    await prisma.conversation.delete({ where: { id: conversationId } });
  };

  const upsertMessage = async (input: {
    companyId: CompanyId;
    conversationId: string;
    id: string;
    role: MessageRole;
    content: MessageContent;
    status: MessageStatus;
  }): Promise<Message> => {
    assertMaintenanceAvailable();
    await ensureConversation(prisma, input.companyId, input.conversationId);
    const existing = await prisma.message.findUnique({ where: { id: input.id } });
    if (existing && existing.conversationId !== input.conversationId)
      throw new Error("El mensaje no pertenece a la conversación.");
    const message = await prisma.message.upsert({
      where: { id: input.id },
      create: {
        id: input.id,
        conversationId: input.conversationId,
        role: input.role,
        contentJson: serializeContent(input.content),
        status: input.status,
      },
      update: {
        contentJson: serializeContent(input.content),
        status: input.status,
      },
    });
    return mapMessage(message);
  };

  const updateMessage = async (input: {
    companyId: CompanyId;
    conversationId: string;
    messageId: string;
    content?: MessageContent;
    status?: MessageStatus;
  }): Promise<Message> => {
    assertMaintenanceAvailable();
    await ensureConversation(prisma, input.companyId, input.conversationId);
    const existing = await prisma.message.findUnique({ where: { id: input.messageId } });
    if (!existing || existing.conversationId !== input.conversationId)
      throw new Error("El mensaje no pertenece a la conversación.");
    const message = await prisma.message.update({
      where: { id: input.messageId },
      data: {
        ...(input.content ? { contentJson: serializeContent(input.content) } : {}),
        ...(input.status ? { status: input.status } : {}),
      },
    });
    return mapMessage(message);
  };

  const setSelectedModel = async (companyId: CompanyId, modelId: string) => {
    assertMaintenanceAvailable();
    await ensureCompany(prisma, companyId);
    await prisma.workspaceSetting.upsert({
      where: { companyId_key: { companyId, key: SELECTED_MODEL_SETTING_KEY } },
      create: {
        id: crypto.randomUUID(),
        companyId,
        key: SELECTED_MODEL_SETTING_KEY,
        valueJson: JSON.stringify(modelId),
      },
      update: { valueJson: JSON.stringify(modelId) },
    });
  };

  const recordToolVisit = async (companyId: CompanyId, toolId: string) => {
    assertMaintenanceAvailable();
    await ensureCompany(prisma, companyId);
    if (!getTool(toolId)) throw new Error("La herramienta no existe.");
    await prisma.toolActivity.create({
      data: { id: crypto.randomUUID(), companyId, toolId, actionId: "visit" },
    });
  };

  return {
    getSnapshot,
    getConversation,
    createCompany,
    deleteCompany,
    setActiveCompany,
    createConversation,
    updateConversation,
    deleteConversation,
    setActiveConversation,
    upsertMessage,
    updateMessage,
    setSelectedModel,
    recordToolVisit,
  };
};
