import "server-only";

import type { PrismaClient } from "@/generated/prisma/client";

export const GLOBAL_SOAP_SESSION_ID = "global";

export type SoapSessionData = {
  username: string;
  jsessionIdEncrypted: string;
  refreshSessionIdEncrypted: string;
  lastValidatedAt: Date;
};

export type LocalBrowserSessionData = {
  id: string;
  cookieHash: string;
  username: string;
  expiresAt: Date;
};

export type AuthRepository = {
  getSoapSession: () => Promise<{
    id: string;
    username: string;
    jsessionIdEncrypted: string;
    refreshSessionIdEncrypted: string | null;
    lastValidatedAt: Date | null;
  } | null>;
  replaceSoapSession: (data: SoapSessionData) => Promise<void>;
  updateJSessionId: (encryptedJSessionId: string, lastValidatedAt: Date) => Promise<void>;
  clearAuthState: () => Promise<void>;
  revokeAllLocalBrowserSessions: () => Promise<void>;
  createLocalBrowserSession: (data: LocalBrowserSessionData) => Promise<void>;
  getLocalBrowserSession: (cookieHash: string) => Promise<{
    id: string;
    username: string;
    cookieHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    lastSeenAt: Date;
  } | null>;
  touchLocalBrowserSession: (id: string, lastSeenAt: Date) => Promise<void>;
  revokeLocalBrowserSession: (id: string) => Promise<void>;
};

type AuthPrismaClient = Pick<PrismaClient, "soapSession" | "localBrowserSession" | "$transaction">;

export const createAuthRepository = (prisma: AuthPrismaClient): AuthRepository => ({
  getSoapSession: () =>
    prisma.soapSession.findUnique({
      where: { id: GLOBAL_SOAP_SESSION_ID },
      select: {
        id: true,
        username: true,
        jsessionIdEncrypted: true,
        refreshSessionIdEncrypted: true,
        lastValidatedAt: true,
      },
    }),
  replaceSoapSession: async (data) => {
    await prisma.$transaction([
      prisma.soapSession.deleteMany(),
      prisma.soapSession.create({
        data: {
          id: GLOBAL_SOAP_SESSION_ID,
          username: data.username,
          jsessionIdEncrypted: data.jsessionIdEncrypted,
          refreshSessionIdEncrypted: data.refreshSessionIdEncrypted,
          lastValidatedAt: data.lastValidatedAt,
        },
      }),
    ]);
  },
  updateJSessionId: async (encryptedJSessionId, lastValidatedAt) => {
    await prisma.soapSession.update({
      where: { id: GLOBAL_SOAP_SESSION_ID },
      data: { jsessionIdEncrypted: encryptedJSessionId, lastValidatedAt },
    });
  },
  clearAuthState: async () => {
    await prisma.$transaction([
      prisma.soapSession.deleteMany(),
      prisma.localBrowserSession.deleteMany(),
    ]);
  },
  revokeAllLocalBrowserSessions: async () => {
    await prisma.localBrowserSession.deleteMany();
  },
  createLocalBrowserSession: async (data) => {
    await prisma.localBrowserSession.create({
      data: {
        id: data.id,
        cookieHash: data.cookieHash,
        username: data.username,
        expiresAt: data.expiresAt,
      },
    });
  },
  getLocalBrowserSession: (cookieHash) =>
    prisma.localBrowserSession.findUnique({
      where: { cookieHash },
      select: {
        id: true,
        username: true,
        cookieHash: true,
        expiresAt: true,
        revokedAt: true,
        lastSeenAt: true,
      },
    }),
  touchLocalBrowserSession: async (id, lastSeenAt) => {
    await prisma.localBrowserSession.update({ where: { id }, data: { lastSeenAt } });
  },
  revokeLocalBrowserSession: async (id) => {
    await prisma.localBrowserSession.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  },
});
