import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import type { Meta4Society } from "@/lib/meta4/societies";

import { loadHireCatalogsForLaunch } from "./catalog-queries";
import { assertHireCatalogSelections, type HireCatalogs } from "./catalogs";
import { launchDirectHire } from "./direct/service";
import { Meta4HireError } from "./errors";
import { assertNewHireDocuments, findExistingHireDocuments } from "./existing-people";
import { hireExecutionQueue, type SerializedTask } from "./mutex";
import type { HireLaunchResult, HirePerson } from "./types";
import { parseHirePeople } from "./validate";

export type LaunchMeta4HireDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  loadCatalogs?: (society: Meta4Society, placeIds: readonly string[]) => Promise<HireCatalogs>;
  findExistingDocuments?: (documents: readonly string[]) => Promise<ReadonlyMap<string, string>>;
  serialize?: SerializedTask;
  directHire?: typeof launchDirectHire;
};

/**
 * Hire of people in PeopleNet, written in its tables as Meta4's SAVE_HIRE does
 * (direct/). Before any write: the society comes from the server's operational
 * context, every catalog ID is checked against that society, the form rules
 * run with the catalog names and no document may exist or repeat (Meta4 would
 * modify the existing person). Hires are serialized in this process.
 */
export const launchMeta4Hire = async (
  authSession: ResolvedAuthSession,
  people: readonly HirePerson[],
  deps: LaunchMeta4HireDeps = {},
): Promise<HireLaunchResult> => {
  const getContext = deps.getOperationalContext ?? getMeta4OperationalContext;
  const loadCatalogs = deps.loadCatalogs ?? loadHireCatalogsForLaunch;
  const findExisting = deps.findExistingDocuments ?? findExistingHireDocuments;
  const directHire = deps.directHire ?? launchDirectHire;
  const serialize = deps.serialize ?? hireExecutionQueue;

  const context = await getContext(authSession);
  const catalogs = await loadCatalogs(
    context.society,
    people.map((person) => person.city),
  );
  assertHireCatalogSelections(people, catalogs, context.society);
  // Rules that need catalog names (document type) run once catalogs are loaded.
  const validated = parseHirePeople(people, { documentTypes: catalogs.documentType });
  const existing = await findExisting(validated.map((person) => person.documentNumber)).catch(
    () => {
      throw new Meta4HireError(
        "META4_HIRE_CATALOG_UNAVAILABLE",
        "No se ha podido comprobar en PeopleNet si los documentos ya existen.",
      );
    },
  );
  assertNewHireDocuments(validated, existing);
  return serialize(() => directHire(context, validated));
};
