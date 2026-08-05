import { createCompanyRepository } from "./repositories/company-repository";
import type { Company } from "../../types/workspace";

type BootstrapResult = {
  created: boolean;
  company: Company;
};

type CompanyBootstrapRepository = ReturnType<typeof createCompanyRepository>;

const isUniqueConstraintError = (error: unknown): boolean =>
  typeof error === "object" && error !== null && "code" in error && error.code === "P2002";

export const bootstrapLocalCompany = async (
  repository?: Pick<CompanyBootstrapRepository, "createLocalCompany" | "getFirst">,
): Promise<BootstrapResult> => {
  const effectiveRepository =
    repository ?? createCompanyRepository((await import("./client")).getPrismaClient());
  const existingCompany = await effectiveRepository.getFirst();
  if (existingCompany) {
    return {
      created: false,
      company: existingCompany,
    };
  }

  let company: Company;
  try {
    company = await effectiveRepository.createLocalCompany();
  } catch (error) {
    if (!isUniqueConstraintError(error)) throw error;

    const companyCreatedByAnotherBootstrap = await effectiveRepository.getFirst();
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

export const setupLocalDatabase = (
  repository?: Pick<CompanyBootstrapRepository, "createLocalCompany" | "getFirst">,
) => bootstrapLocalCompany(repository);
