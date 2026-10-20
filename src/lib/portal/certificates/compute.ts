import type { PortalSqlRow } from "../peoplenet/query";
import { localIsoDate } from "./core";
import {
  CERTIFICATE_ARREARS,
  CERTIFICATE_REFUNDS,
  type CertificateArrearsColumn,
  type CertificateFieldId,
  type CertificateRefundColumn,
} from "./layout";
import type {
  CertificateArrearsRow,
  CertificateRefundRow,
  CertificateValue,
  WithholdingCertificate,
} from "./types";

/**
 * Cálculo del certificado de `SRSP_RP_CERT_RET` (`CYC_RP_CERT_HAB_<año>` desde
 * 2024): traduce `SSP_PERCEPTORES_CERT_RET.SSP_CALC_EMPLEADOS` sobre los
 * registros tipo 2 del modelo 190 del perceptor. Ver
 * `docs/portal/implementacion/certificado-descubrimiento.md`.
 */

/** Registro tipo 2 del 190 (`M4SSP_REGTIP2_190`). */
export type Model190Record = {
  readonly year: string;
  readonly legalEntity: string;
  readonly irpfType: string;
  readonly execution: string;
  readonly recordType: string;
  readonly nif: string;
  readonly key: string;
  readonly subkey: string;
  readonly accrualYear: string;
  readonly gross: number;
  readonly withholding: number;
  readonly valuation: number;
  readonly paidOnAccount: number;
  readonly passedOnAccount: number;
  readonly expenses: number;
  readonly reduction: number;
  readonly grossIl: number;
  readonly withholdingIl: number;
  readonly valuationIl: number;
  readonly paidOnAccountIl: number;
  readonly passedOnAccountIl: number;
};

/** Ejecución del 190 (`M4SSP_TMP_190`). */
export type Model190Execution = {
  readonly year: string;
  readonly legalEntity: string;
  readonly irpfType: string;
  readonly execution: string;
  readonly origin: string | null;
  readonly certificateExecution: string | null;
  readonly declarationState: number | null;
  readonly lastSent: boolean;
  readonly declarationType: string | null;
  readonly testMode: boolean;
  readonly launchedAt: number;
};

/** Pagador (`STD_LEG_ENT` + población de su dirección). */
export type CertificateLegalEntity = {
  readonly name: string | null;
  readonly nif: string | null;
  readonly signer: string | null;
  readonly signerRole: string | null;
  readonly signerNif: string | null;
  readonly place: string | null;
};

export type CertificateInputs = {
  readonly year: number;
  readonly perceptorName: string | null;
  readonly records: readonly Model190Record[];
  readonly executions: readonly Model190Execution[];
  readonly legalEntities: ReadonlyMap<string, CertificateLegalEntity>;
  /** `tipo|clave|subclave` con `SSP_CHK_REDUC_POR_IRREG = 1`. */
  readonly irregularKeys: ReadonlySet<string>;
  readonly today: Date;
};

const text = (value: unknown): string =>
  value === null || value === undefined ? "" : String(value).trim();
const amount = (value: unknown): number => {
  const parsed = typeof value === "number" ? value : Number(text(value).replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
};
const flag = (value: unknown): boolean => amount(value) === 1;
const timestamp = (value: unknown): number => {
  const date = value instanceof Date ? value : new Date(text(value));
  return Number.isFinite(date.getTime()) ? date.getTime() : 0;
};

export const model190RecordFromRow = (row: PortalSqlRow): Model190Record => ({
  year: text(row.SSP_EJERCICIO),
  legalEntity: text(row.STD_ID_LEG_ENT),
  irpfType: text(row.SSP_ID_TP_IRPF),
  execution: text(row.SSP_ID_EXE),
  recordType: text(row.SSP_TIP_REG),
  nif: text(row.SSP_NIF_PERCEPTOR),
  key: text(row.SSP_CLAVE_PERCEP),
  subkey: text(row.SSP_SUBCLAVE_PERCEP),
  accrualYear: text(row.SSP_EJERCICIO_DEVENGO),
  gross: amount(row.SSP_PERCEP_INTEGRA),
  withholding: amount(row.SSP_RETEN_PRACTIC),
  valuation: amount(row.SSP_VALORACION),
  paidOnAccount: amount(row.SSP_INGR_CUENTA_EFEC),
  passedOnAccount: amount(row.SSP_INGR_CUENTA_REPER),
  expenses: amount(row.SSP_GASTOS_DEDUC),
  reduction: amount(row.SSP_REDUCC_IMP_NO_INTEG),
  grossIl: amount(row.SSP_PERCEP_INTEGRA_IL),
  withholdingIl: amount(row.SSP_RETEN_PRACTIC_IL),
  valuationIl: amount(row.SSP_VALORACION_IL),
  paidOnAccountIl: amount(row.SSP_INGR_CUENTA_EFEC_IL),
  passedOnAccountIl: amount(row.SSP_INGR_CUENTA_REPER_IL),
});

export const model190ExecutionFromRow = (row: PortalSqlRow): Model190Execution => {
  const state = text(row.SSP_ID_ESTADO_DECLARACION);
  return {
    year: text(row.SSP_EJERCICIO),
    legalEntity: text(row.STD_ID_LEG_ENT),
    irpfType: text(row.SSP_ID_TP_IRPF),
    execution: text(row.SSP_ID_EXE),
    origin: text(row.SSP_ID_EXE_ORIGEN) || null,
    certificateExecution: text(row.SSP_ID_EXE_190_CERT) || null,
    declarationState: state === "" ? null : amount(state),
    lastSent: flag(row.SSP_CHK_ULT_ENVIADO),
    declarationType: text(row.SSP_TIPO_DECLARA) || null,
    testMode: flag(row.SSP_CHK_MODO_PRUEBA),
    launchedAt: timestamp(row.SSP_FEC_LANZAMIENTO),
  };
};

export const irregularKey = (irpfType: string, key: string, subkey: string) =>
  `${irpfType}|${key}|${subkey}`;

/**
 * Línea del firmante del diseño:
 * `%IIF(%IsNull(FIRM), " ", FIRM && %IIF(%IsNull(CARGO), " ", ", en calidad de " && CARGO && %IIF(%IsNull(NIF), " ", ", N.I.F. " && NIF)))`.
 */
export const certificateSignerText = (
  signer: string | null,
  role: string | null,
  nif: string | null,
): string => {
  if (!signer) return " ";
  if (!role) return `${signer} `;
  return `${signer}, en calidad de ${role}${nif ? `, N.I.F. ${nif}` : " "}`;
};

const maxText = (values: readonly string[]): string | null =>
  values.reduce<string | null>(
    (best, value) => (best === null || value > best ? value : best),
    null,
  );

type Group = { readonly legalEntity: string; readonly irpfType: string };

/**
 * Ejecución cuyos registros forman el certificado. Desde 2024 es
 * `MAX(C.SSP_ID_EXE_190_CERT)` de las declaraciones presentadas
 * (`SSP_CARGA_CAMPOS`). Antes, el último 190 normal enviado o su última
 * complementaria (`SSP_ULT_EJECUCION`).
 */
export const selectCertificateExecution = (
  executions: readonly Model190Execution[],
  records: readonly Model190Record[],
  year: string,
  group: Group,
): string | null => {
  const same = executions.filter(
    (entry) =>
      entry.year === year &&
      entry.legalEntity === group.legalEntity &&
      entry.irpfType === group.irpfType,
  );
  const declared = new Set(
    records
      .filter(
        (record) =>
          record.year === year &&
          record.legalEntity === group.legalEntity &&
          record.irpfType === group.irpfType &&
          ["N", "S", "C"].includes(record.recordType),
      )
      .map((record) => record.execution),
  );
  const certified = same.flatMap((b) =>
    b.declarationState === 1 && declared.has(b.execution)
      ? same.flatMap((c) =>
          c.declarationState === 1 &&
          c.certificateExecution !== null &&
          (b.origin === c.execution || b.execution === c.execution)
            ? [c.certificateExecution]
            : [],
        )
      : [],
  );
  const current = maxText(certified);
  if (current) return current;
  const normal = same.find((entry) => entry.lastSent && entry.declarationType !== "C");
  if (!normal) return null;
  const complementary = same
    .filter(
      (entry) =>
        entry.declarationType === "C" && !entry.testMode && entry.origin === normal.execution,
    )
    .sort((a, b) => b.launchedAt - a.launchedAt)[0];
  return complementary?.execution ?? normal.execution;
};

type Slot = Record<CertificateArrearsColumn, number>;
type RefundSlot = Record<CertificateRefundColumn, number>;

type Draft = {
  readonly key: string;
  readonly page: number;
  readonly fields: Partial<Record<CertificateFieldId, CertificateValue>>;
  readonly arrears: Slot[];
  readonly refunds: RefundSlot[];
};

/** Columnas de cada bloque de la página 2 y de montes públicos (sufijos del LN4). */
type Block = {
  readonly year: CertificateFieldId;
  readonly gross: CertificateFieldId;
  readonly withholding: CertificateFieldId | null;
  readonly valuation: CertificateFieldId;
  readonly paid: CertificateFieldId;
  readonly passed: CertificateFieldId | null;
  readonly irregular: CertificateFieldId | null;
};

const activity = (
  prefix: "profesionales" | "agricolas" | "forestales" | "estimacionObjetiva" | "articulo75",
): Block => ({
  year: "actividadesEjercicio",
  gross: `${prefix}DinerariasIntegro`,
  withholding: `${prefix}DinerariasRetenciones`,
  valuation: `${prefix}EspecieValoracion`,
  paid: `${prefix}EspecieIngresosEfectuados`,
  passed: `${prefix}EspecieIngresosRepercutidos`,
  irregular: `${prefix}ReduccionesIrregularidad`,
});

const prize = (prefix: "premiosJuego" | "premiosConcursos"): Block => ({
  year: "premiosEjercicio",
  gross: `${prefix}DinerariasIntegro`,
  withholding: `${prefix}DinerariasRetenciones`,
  valuation: `${prefix}EspecieValoracion`,
  paid: `${prefix}EspecieIngresosEfectuados`,
  passed: `${prefix}EspecieIngresosRepercutidos`,
  irregular: null,
});

const BLOCK = {
  G: activity("profesionales"),
  H01: activity("agricolas"),
  H02: activity("agricolas"),
  H03: activity("forestales"),
  H04: activity("estimacionObjetiva"),
  I: activity("articulo75"),
  K01: prize("premiosJuego"),
  K03: prize("premiosConcursos"),
  K02: {
    year: "montesEjercicio",
    gross: "montesDinerariasIntegro",
    withholding: "montesDinerariasRetenciones",
    valuation: "montesEspecieValoracion",
    paid: "montesEspecieIngresosEfectuados",
    passed: "montesEspecieIngresosRepercutidos",
    irregular: null,
  },
  J: {
    year: "imagenEjercicio",
    gross: "imagenDinerarias",
    withholding: null,
    valuation: "imagenEspecie",
    paid: "imagenIngresosACuenta",
    passed: null,
    irregular: null,
  },
} as const satisfies Record<string, Block>;

const blockOf = (key: string, subkey: string): Block | null => {
  if (key === "G") return BLOCK.G;
  if (key === "I") return BLOCK.I;
  if (key === "J") return BLOCK.J;
  if (key === "H" && (subkey === "01" || subkey === "02" || subkey === "03" || subkey === "04"))
    return BLOCK[`H${subkey}`];
  if (key === "K" && (subkey === "01" || subkey === "02" || subkey === "03"))
    return BLOCK[`K${subkey}`];
  return null;
};

const EMPLOYMENT_KEYS = new Set(["A", "B", "C", "D", "E", "F"]);
const ACTIVITY_KEYS = new Set(["G", "H", "I", "J", "K"]);
const SLOTS = 4;

const emptyArrears = (): Slot[] =>
  Array.from({ length: SLOTS }, () => ({
    ejercicio: 0,
    integro: 0,
    retenciones: 0,
    reducciones: 0,
    gastos: 0,
    otrasReducciones: 0,
  }));
const emptyRefunds = (): RefundSlot[] =>
  Array.from({ length: SLOTS }, () => ({ ejercicio: 0, integro: 0, reducciones: 0 }));

const add = (draft: Draft, id: CertificateFieldId | null, value: number) => {
  if (!id) return;
  const current = draft.fields[id];
  draft.fields[id] = (typeof current === "number" ? current : 0) + value;
};

/** Ejercicio a imprimir: el original lo pinta solo si alguna casilla de la fila tiene importe. */
const arrearsOutput = (slots: Slot[]): CertificateArrearsRow[] =>
  slots.slice(0, CERTIFICATE_ARREARS.rows.length).map((slot) => {
    const visible =
      slot.retenciones !== 0 || slot.integro !== 0 || slot.gastos !== 0 || slot.reducciones !== 0;
    return { ...slot, ejercicio: visible ? slot.ejercicio : null };
  });
const refundsOutput = (slots: RefundSlot[]): CertificateRefundRow[] =>
  slots.slice(0, CERTIFICATE_REFUNDS.rows.length).map((slot) => ({
    ...slot,
    ejercicio: slot.integro !== 0 || slot.reducciones !== 0 ? slot.ejercicio : null,
  }));

/** Registros `SRSP_DATOS_CERT_RET` de un perceptor en una entidad y tipo de IRPF. */
const buildGroup = (
  records: readonly Model190Record[],
  inputs: CertificateInputs,
  group: Group,
): Draft[] => {
  const year = Number(records[0]?.year ?? inputs.year);
  const drafts: Draft[] = [];
  const create = (key: string, page: number): Draft => {
    const draft: Draft = {
      key,
      page,
      fields: {},
      arrears: emptyArrears(),
      refunds: emptyRefunds(),
    };
    drafts.push(draft);
    return draft;
  };
  const find = (key: string, page: number) =>
    drafts.find((draft) => draft.key === key && draft.page === page) ?? create(key, page);

  let previousKey = "";
  let arrearsYear = 0;
  let refundsYear = 0;
  let arrearsPage = 0;
  let refundsPage = 0;
  let lastArrears = "";
  let lastRefunds = "";
  for (const record of records) {
    const key = record.key;
    if (key !== previousKey) {
      arrearsYear = 0;
      refundsYear = 0;
      arrearsPage = 0;
      refundsPage = 0;
      lastArrears = "";
      lastRefunds = "";
    }
    const irregular = inputs.irregularKeys.has(irregularKey(group.irpfType, key, record.subkey));
    if (EMPLOYMENT_KEYS.has(key)) {
      if (record.accrualYear === "0000") {
        const draft = find(key, 0);
        draft.fields.ejercicio = year;
        add(draft, "trabajoDinerariasIntegro", record.gross);
        add(draft, "trabajoDinerariasRetenciones", record.withholding);
        add(draft, "trabajoEspecieValoracion", record.valuation);
        add(draft, "trabajoEspecieIngresosEfectuados", record.paidOnAccount);
        add(draft, "trabajoEspecieIngresosRepercutidos", record.passedOnAccount);
        add(draft, "gastosDeducibles", record.expenses);
        add(draft, "incapacidadDinerariasIntegro", record.grossIl);
        add(draft, "incapacidadDinerariasRetenciones", record.withholdingIl);
        add(draft, "incapacidadEspecieValoracion", record.valuationIl);
        add(draft, "incapacidadEspecieIngresosRepercutidos", record.passedOnAccountIl);
        add(draft, "incapacidadEspecieIngresosEfectuados", record.paidOnAccountIl);
        add(
          draft,
          irregular ? "otrasReduccionesIrregularidad" : "reduccionesArt18",
          record.reduction,
        );
      } else {
        const gross =
          record.gross +
          record.valuation +
          record.grossIl +
          record.valuationIl +
          (record.paidOnAccount - record.passedOnAccount) +
          (record.paidOnAccountIl - record.passedOnAccountIl);
        const withholding =
          record.withholding +
          record.passedOnAccount +
          record.withholdingIl +
          record.passedOnAccountIl;
        const irregularReduction = irregular ? record.reduction : 0;
        const reduction = irregular ? 0 : record.reduction;
        if (gross > 0 || record.expenses !== 0) {
          if (record.accrualYear !== lastArrears) {
            lastArrears = record.accrualYear;
            arrearsYear += 1;
            if (arrearsYear > SLOTS) {
              arrearsYear = 1;
              arrearsPage += 1;
            }
          }
          const draft = find(key, arrearsPage);
          draft.fields.ejercicio = year;
          const slot = draft.arrears[arrearsYear - 1];
          if (slot) {
            slot.ejercicio = Number(record.accrualYear);
            if (gross > 0) slot.integro += gross;
            if (withholding > 0) slot.retenciones += withholding;
            if (reduction > 0) slot.reducciones += reduction;
            if (record.expenses !== 0) slot.gastos += record.expenses;
            if (irregularReduction > 0) slot.otrasReducciones += irregularReduction;
          }
        }
        if (gross < 0) {
          if (record.accrualYear !== lastRefunds) {
            lastRefunds = record.accrualYear;
            refundsYear += 1;
            if (refundsYear > SLOTS) {
              refundsYear = 1;
              refundsPage += 1;
            }
          }
          const draft = find(key, refundsPage);
          draft.fields.ejercicio = year;
          const slot = draft.refunds[refundsYear - 1];
          if (slot) {
            slot.ejercicio = Number(record.accrualYear);
            slot.integro += gross;
            slot.reducciones += withholding;
          }
        }
      }
    } else if (key === "L") {
      const draft = drafts[0] ?? create(key, 0);
      draft.fields.ejercicio = year;
      if (record.subkey === "01") add(draft, "dietasExceptuadas", record.gross);
      else {
        add(draft, "rentasExentas", record.gross);
        add(draft, "gastosDeducibles", record.expenses);
      }
    } else if (ACTIVITY_KEYS.has(key)) {
      const draft = drafts[0] ?? create(key, 0);
      const block = blockOf(key, record.subkey);
      if (block) {
        draft.fields[block.year] = year;
        add(draft, block.gross, record.gross);
        add(draft, block.valuation, record.valuation);
        add(draft, block.paid, record.paidOnAccount);
        if (key !== "J") {
          add(draft, block.withholding, record.withholding);
          add(draft, block.passed, record.passedOnAccount);
        }
        if (irregular) add(draft, block.irregular, record.reduction);
      }
    }
    previousKey = key;
  }
  return drafts;
};

/**
 * Certificados del ejercicio: uno por registro de `SRSP_DATOS_CERT_RET`
 * (clave y página), en el orden en que el original los imprime. Vacío si el
 * perceptor no tiene 190 de ese año.
 */
export const buildWithholdingCertificates = (
  inputs: CertificateInputs,
): WithholdingCertificate[] => {
  const year = String(inputs.year);
  const groups: Group[] = [];
  for (const record of inputs.records) {
    if (record.year !== year) continue;
    if (
      !groups.some(
        (group) => group.legalEntity === record.legalEntity && group.irpfType === record.irpfType,
      )
    )
      groups.push({ legalEntity: record.legalEntity, irpfType: record.irpfType });
  }
  const issuedAt = localIsoDate(inputs.today);
  return groups.flatMap((group) => {
    const execution = selectCertificateExecution(inputs.executions, inputs.records, year, group);
    if (!execution) return [];
    const records = inputs.records
      .filter(
        (record) =>
          record.year === year &&
          record.legalEntity === group.legalEntity &&
          record.irpfType === group.irpfType &&
          record.execution === execution &&
          (record.recordType === "N" || record.recordType === "T"),
      )
      .sort(
        (a, b) =>
          a.key.localeCompare(b.key) ||
          a.subkey.localeCompare(b.subkey) ||
          b.accrualYear.localeCompare(a.accrualYear),
      );
    if (records.length === 0) return [];
    const entity = inputs.legalEntities.get(group.legalEntity);
    const header: Partial<Record<CertificateFieldId, CertificateValue>> = {
      perceptorNif: records[0]?.nif ?? null,
      perceptorNombre: inputs.perceptorName,
      pagadorNif: entity?.nif ?? null,
      pagadorNombre: entity?.name ?? null,
      lugar: entity?.place ?? null,
    };
    const signer = certificateSignerText(
      entity?.signer ?? null,
      entity?.signerRole ?? null,
      entity?.signerNif ?? null,
    );
    return buildGroup(records, inputs, group).map((draft) => ({
      year: inputs.year,
      fields: { ...header, ...draft.fields },
      arrears: arrearsOutput(draft.arrears),
      refunds: refundsOutput(draft.refunds),
      issuedAt,
      signer,
    }));
  });
};

/** Ejercicios en los que el perceptor tiene registros del 190. */
export const model190Years = (records: readonly Model190Record[]): number[] => [
  ...new Set(
    records.flatMap((record) => {
      const year = Number(record.year);
      return Number.isInteger(year) && year >= 1900 ? [year] : [];
    }),
  ),
];
