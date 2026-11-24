import "server-only";

import sql from "mssql";

import type { Meta4OperationalContext } from "@/lib/meta4/operational-context";
import { getPeopleNetPool } from "@/lib/peoplenet/client";

import { bankAccountParts } from "../cells";
import { Meta4HireError, isMeta4HireError } from "../errors";
import {
  chooseHirePersonId,
  findExistingHireDocuments,
  normalizeHireDocument,
} from "../existing-people";
import type { HireLaunchResult, HirePerson } from "../types";
import { countPeopleWithGlobalName, loadHireLookups } from "./lookups";
import modelJson from "./model.generated.json";
import type { HireModel } from "./model-types";
import { planHire, type HireLookups, type HirePlan } from "./plan";
import { familyName, globalName } from "./rules";
import { writeDirectHire, type DirectHireTarget } from "./write";

export const HIRE_MODEL = modelJson as HireModel;

/**
 * `META4_HIRE_MODE=plan` runs every step with real PeopleNet reads but writes
 * nothing and reports the rows it would insert.
 */
export const isDirectHireDryRun = (env: NodeJS.ProcessEnv = process.env): boolean =>
  env.META4_HIRE_MODE?.trim().toLowerCase() === "plan";

/** «STD_PERSON 1, STD_EMAIL 2, …»: table names and counts only, never values. */
const planSummary = (plan: HirePlan): string => {
  const counts = new Map<string, number>();
  for (const row of [...plan.rows, ...plan.audit])
    counts.set(row.table, (counts.get(row.table) ?? 0) + 1);
  return [...counts].map(([table, count]) => `${table} ${count}`).join(", ");
};

type Meta4UserRow = {
  user: string | null;
  connectionRole: string | null;
  defaultRole: string | null;
};

export type HireRowOwner = { secUser: string; appRole: string };

/**
 * Meta4's LDB stamps `ID_SECUSER` with the user as `M4RSC_APPUSER.ID_APP_USER`
 * stores it and `ID_APPROLE` with the role of the session, which Meta4 records
 * in `ID_APP_ROLE_CON` on logon (the default role unless another was chosen).
 * Every 2025–2026 hire by a user still in `M4RSC_APPUSER` matches both.
 */
export const hireRowOwner = (username: string, row: Meta4UserRow | undefined): HireRowOwner => {
  const secUser = row?.user?.trim() || username.trim().toUpperCase();
  const appRole = row?.connectionRole?.trim() || row?.defaultRole?.trim();
  if (!appRole)
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      "No se puede grabar el alta con este usuario.",
      [
        {
          field: "people",
          message: `El usuario ${secUser} no tiene rol en Meta4 (M4RSC_APPUSER).`,
        },
      ],
    );
  return { secUser, appRole };
};

/**
 * Logical objects the role may insert into, as Meta4's LDB checks them: the
 * role's security mask (`M4RSC_APPROLE.ID_RSM`) needs a row with `MASK_INS = 1`
 * in `M4RDC_SEC_LOBJ` for each object. The `M4ADM` mask (M4_USER, M4_USER_RRHH,
 * M4ADM…) has no rows and no restriction: `null`.
 */
export type HireInsertAccess = { mask: string; objects: ReadonlySet<string> | null };

const UNRESTRICTED_MASK = "M4ADM";

const loadMeta4User = async (
  username: string,
): Promise<HireRowOwner & { access: HireInsertAccess }> => {
  const pool = await getPeopleNetPool();
  const request = pool.request();
  request.input("user", sql.VarChar(60), username.trim());
  const result = await request.query<Meta4UserRow>(
    "SELECT TOP 1 ID_APP_USER AS [user], ID_APP_ROLE_CON AS connectionRole, ID_APP_ROLE_DEF AS defaultRole FROM M4RSC_APPUSER WHERE ID_APP_USER = @user",
  );
  const owner = hireRowOwner(username, result.recordset[0]);
  const maskRequest = pool.request();
  maskRequest.input("role", sql.VarChar(60), owner.appRole);
  const masks = await maskRequest.query<{ mask: string | null }>(
    "SELECT TOP 1 ID_RSM AS mask FROM M4RSC_APPROLE WHERE ID_APP_ROLE = @role",
  );
  const mask = masks.recordset[0]?.mask?.trim() ?? "";
  if (mask === UNRESTRICTED_MASK) return { ...owner, access: { mask, objects: null } };
  const objectsRequest = pool.request();
  objectsRequest.input("mask", sql.VarChar(60), mask);
  const objects = await objectsRequest.query<{ object: string }>(
    "SELECT ID_OBJECT AS object FROM M4RDC_SEC_LOBJ WHERE ID_RSM = @mask AND MASK_INS = 1",
  );
  return {
    ...owner,
    access: { mask, objects: new Set(objects.recordset.map((row) => row.object.trim())) },
  };
};

/** Tables of the plan whose logical object the role may not insert into. */
export const deniedHireTables = (
  model: HireModel,
  plan: HirePlan,
  access: HireInsertAccess,
): string[] => {
  if (!access.objects) return [];
  const allowed = access.objects;
  const denied = new Set<string>();
  for (const row of plan.rows) {
    const object = model.tables[row.table]?.object ?? "";
    if (object && !allowed.has(object)) denied.add(object);
  }
  return [...denied].sort();
};

export type DirectHireDeps = {
  choosePersonId?: typeof chooseHirePersonId;
  loadLookups?: typeof loadHireLookups;
  countSameName?: typeof countPeopleWithGlobalName;
  loadUser?: typeof loadMeta4User;
  write?: (model: HireModel, plan: HirePlan, target: DirectHireTarget) => Promise<void>;
  findExistingDocuments?: typeof findExistingHireDocuments;
  now?: () => Date;
  /** Plan with real reads, write nothing (META4_HIRE_MODE=plan). */
  dryRun?: boolean;
  log?: (details: Record<string, string>) => void;
};

/** SRSP_CONTROL_OBLIGATORIEDAD with SSP_SOLICITAR_BIC = 1: a Spanish account needs its BIC. */
const assertBic = (person: HirePerson, lookups: HireLookups, index: number): void => {
  const bank = bankAccountParts(person);
  if (!bank.iban.toUpperCase().startsWith("ES") || lookups.bic) return;
  throw new Meta4HireError(
    "META4_HIRE_VALIDATION",
    "No se encuentra el BIC del banco de la cuenta.",
    [
      {
        person: index + 1,
        field: "iban",
        message: `IBAN: el banco ${bank.bank} no está en el catálogo de BIC de PeopleNet (M4SSP_BANK_BIC_CODES).`,
      },
    ],
  );
};

/**
 * Hire written directly in PeopleNet's tables: per person, a free ID, the
 * lookups Meta4 reads while saving, the plan of every row (plan.ts) and one
 * transaction (write.ts). Each person is checked afterwards in STD_PERSON.
 * The validated people come from launchMeta4Hire, which already checked the
 * form, the catalogs of the context society and that no document exists.
 */
export const launchDirectHire = async (
  context: Meta4OperationalContext,
  people: readonly HirePerson[],
  deps: DirectHireDeps = {},
): Promise<HireLaunchResult> => {
  const choosePersonId = deps.choosePersonId ?? chooseHirePersonId;
  const loadLookups = deps.loadLookups ?? loadHireLookups;
  const countSameName = deps.countSameName ?? countPeopleWithGlobalName;
  const write = deps.write ?? writeDirectHire;
  const findExisting = deps.findExistingDocuments ?? findExistingHireDocuments;
  const dryRun = deps.dryRun ?? isDirectHireDryRun();
  const log =
    deps.log ??
    ((details: Record<string, string>) =>
      console.error(`[meta4-hire-direct] ${JSON.stringify(details)}`));
  const user = await (deps.loadUser ?? loadMeta4User)(context.username);
  const simulated: string[] = [];
  const reserved = new Set<string>();
  const personIds: string[] = [];
  const warnings: string[] = [];

  for (const [index, person] of people.entries()) {
    try {
      const choice = await choosePersonId(person, context.society, reserved);
      if (!choice) {
        throw new Meta4HireError(
          "META4_HIRE_CONFIG",
          "PeopleNet no tiene contador de personas para esta sociedad (M4CSP_BLOCK_SEQ).",
        );
      }
      reserved.add(choice.id);
      const lookups = await loadLookups(person, context.society);
      assertBic(person, lookups, index);
      const sameName = await countSameName(
        globalName(familyName(person.lastName1, person.lastName2), person.firstName),
      );
      if (sameName > 0) {
        warnings.push(
          `Persona ${index + 1}: ya hay ${sameName === 1 ? "otra persona" : `${sameName} personas`} con el mismo nombre en PeopleNet; Meta4 solo avisa, revisa que no sea la misma.`,
        );
      }
      const plan = planHire({
        model: HIRE_MODEL,
        person,
        personId: choice.id,
        society: context.society,
        secUser: user.secUser,
        appRole: user.appRole,
        now: deps.now?.() ?? new Date(),
        lookups,
      });
      const denied = deniedHireTables(HIRE_MODEL, plan, user.access);
      if (denied.length > 0) {
        // Role, mask and tables go to the server log; the person reads what to do.
        log({
          reason: "role-without-insert",
          role: user.appRole,
          mask: user.access.mask,
          objects: denied.join(","),
        });
        throw new Meta4HireError(
          "META4_HIRE_PERMISSION",
          "Tu usuario de Meta4 no tiene permiso para dar de alta a personas.",
          [
            {
              message: `Estás conectado con el rol ${user.appRole}, que en Meta4 no puede crear empleados. No se ha grabado nada.`,
            },
            {
              message:
                "Para dar altas necesitas un rol de Recursos Humanos (por ejemplo M4_USER_RRHH). Pide al administrador de Meta4 que te lo asigne y vuelve a intentarlo.",
            },
          ],
        );
      }
      if (dryRun) {
        simulated.push(
          `Persona ${index + 1} (ID ${choice.id}): ${plan.rows.length} filas y ${plan.audit.length} de auditoría — ${planSummary(plan)}.${
            plan.skipped.length > 0
              ? ` Sin grabar, como Meta4: ${plan.skipped.map((s) => s.table).join(", ")}.`
              : ""
          }`,
        );
        continue;
      }
      await write(HIRE_MODEL, plan, {
        personId: choice.id,
        document: normalizeHireDocument(person.documentNumber),
        counter: { society: context.society, process: choice.process, sequence: choice.sequence },
      });
      const found = await findExisting([person.documentNumber]).catch(() => null);
      if (found?.get(normalizeHireDocument(person.documentNumber)) !== choice.id) {
        throw new Meta4HireError(
          "META4_HIRE_IMPORT_FAILED",
          "La transacción terminó pero PeopleNet no muestra la persona con su ID.",
          [{ person: index + 1, message: `Comprueba en Meta4 la persona ${choice.id}.` }],
        );
      }
      personIds.push(choice.id);
    } catch (error) {
      if (!isMeta4HireError(error)) {
        // SQL Server messages name tables, columns and keys, not the person's data.
        log({
          person: String(index + 1),
          name: error instanceof Error ? error.name : "unknown",
          message: error instanceof Error ? error.message.slice(0, 500) : "",
        });
        throw new Meta4HireError(
          "META4_HIRE_FETCH_FAILED",
          personIds.length > 0
            ? `Se ha dado de alta a ${personIds.length} de ${people.length} personas (IDs ${personIds.join(", ")}). No se ha podido grabar la persona ${index + 1} en PeopleNet; no se ha escrito nada de ella.`
            : "No se ha podido grabar el alta en PeopleNet; no se ha escrito nada.",
        );
      }
      // The role is the same for everyone: not a problem of one person.
      if (error.code === "META4_HIRE_PERMISSION" && personIds.length === 0) throw error;
      const done =
        personIds.length > 0
          ? `Se ha dado de alta a ${personIds.length} de ${people.length} personas (IDs ${personIds.join(", ")}). `
          : "";
      throw new Meta4HireError(error.code, `${done}${error.message}`, [
        ...error.issues.map((issue) => ({ ...issue, person: issue.person ?? index + 1 })),
        ...(index + 1 < people.length
          ? [{ message: `No se han grabado las personas ${index + 2} a ${people.length}.` }]
          : []),
      ]);
    }
  }
  if (dryRun) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      "Simulación del alta directa (META4_HIRE_MODE=plan): no se ha grabado nada en PeopleNet.",
      [...simulated, ...warnings].map((message) => ({ message })),
    );
  }
  return {
    personCount: personIds.length,
    personIds,
    ...(warnings.length > 0 ? { warnings } : {}),
  };
};
