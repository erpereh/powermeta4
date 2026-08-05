import "server-only";

import {
  INITIAL_LOCAL_COMPANY_NAME,
  INITIAL_LOCAL_COMPANY_SHORT_NAME,
} from "../constants";
import { toCompanyId } from "../../workspaces/companies";
import type { Company } from "../../../types/workspace";

type CompanyRecord = {
  id: string;
  name: string;
  shortName: string;
  icon: "building" | "briefcase" | "layers";
  color: "blue" | "purple" | "green";
};

type CompanyTable = {
  count(): Promise<number>;
  create(args: {
    data: {
      id: string;
      name: string;
      shortName: string;
      icon: "building" | "briefcase" | "layers";
      color: "blue" | "purple" | "green";
    };
  }): Promise<CompanyRecord>;
  findFirst(args: { orderBy: { createdAt: "asc" | "desc" } }): Promise<CompanyRecord | null>;
  findMany(args: { orderBy: { createdAt: "asc" | "desc" } }): Promise<CompanyRecord[]>;
};

type CompanyPrismaClient = {
  company: CompanyTable;
};

const mapCompanyRecord = (company: CompanyRecord): Company => ({
  id: toCompanyId(company.id),
  name: company.name,
  shortName: company.shortName,
  icon: company.icon,
  color: company.color,
});

export const createCompanyRepository = (prisma: CompanyPrismaClient) => ({
  count: () => prisma.company.count(),
  list: async () => {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return companies.map(mapCompanyRecord);
  },
  getFirst: async () => {
    const company = await prisma.company.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });

    return company ? mapCompanyRecord(company) : null;
  },
  createCompany: async (company: {
    id?: string;
    name: string;
    shortName: string;
    icon: "building" | "briefcase" | "layers";
    color: "blue" | "purple" | "green";
  }) => {
    const createdCompany = await prisma.company.create({
      data: {
        id: company.id ?? crypto.randomUUID(),
        name: company.name,
        shortName: company.shortName,
        icon: company.icon,
        color: company.color,
      },
    });

    return mapCompanyRecord(createdCompany);
  },
  createLocalCompany: () =>
    prisma.company
      .create({
        data: {
          id: crypto.randomUUID(),
          name: INITIAL_LOCAL_COMPANY_NAME,
          shortName: INITIAL_LOCAL_COMPANY_SHORT_NAME,
          icon: "building",
          color: "blue",
        },
      })
      .then(mapCompanyRecord),
});
