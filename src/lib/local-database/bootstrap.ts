import "server-only";

import { getPrismaClient } from "./client";
import { createCompanyRepository } from "./repositories/company-repository";
import type { Company } from "../../types/workspace";

type BootstrapResult = {
  created: boolean;
  company: Company;
};

type CompanyBootstrapRepository = ReturnType<typeof createCompanyRepository>;

const isUniqueConstraintError = (error: unknown): boolean =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2002";

export const bootstrapLocalCompany = async (
  repository: Pick<CompanyBootstrapRepository, "createLocalCompany" | "getFirst"> = createCompanyRepository(
    getPrismaClient(),
  ),
): Promise<BootstrapResult> => {
  const existingCompany = await repository.getFirst();
  if (existingCompany) {
    return {
      created: false,
      company: existingCompany,
    };
  }

  let company: Company;
  try {
    company = await repository.createLocalCompany();
  } catch (error) {
    if (!isUniqueConstraintError(error)) throw error;

    const companyCreatedByAnotherBootstrap = await repository.getFirst();
    if (!companyCreatedByAnotherBootstrap) throw error;

    return {
      created: false,
      company: companyCreatedByAnotherBootstrap,
    };
  }

  return {
    created: true,
    company,
  };
};

export const setupLocalDatabase = () => bootstrapLocalCompany();
