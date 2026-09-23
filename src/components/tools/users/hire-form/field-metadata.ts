export type PeopleNetRequirement =
  | "required"
  | "unmarked"
  | "conditional"
  | "conditional-required"
  | "not-shown";

export type HireFieldKind =
  | "text"
  | "email"
  | "date"
  | "datetime-local"
  | "number"
  | "catalog"
  | "checkbox"
  | "radio"
  | "compound"
  | "textarea";

export type HireFieldMapping =
  | { status: "confirmed"; identifiers: readonly [string, ...string[]] }
  | { status: "unconfirmed" }
  | { status: "ui-only" };

export type HireFieldMeta = {
  label: string;
  kind: HireFieldKind;
  peopleNet: PeopleNetRequirement;
  integration: "connected" | "pending";
  requiredForCurrentHire: boolean;
  mapping: HireFieldMapping;
};

const mapped = (...identifiers: [string, ...string[]]): HireFieldMapping => ({
  status: "confirmed",
  identifiers,
});
const unconfirmed = { status: "unconfirmed" } as const;
const uiOnly = { status: "ui-only" } as const;

const connected = (
  label: string,
  kind: HireFieldKind,
  peopleNet: PeopleNetRequirement,
  requiredForCurrentHire: boolean,
  mapping: HireFieldMapping,
): HireFieldMeta => ({
  label,
  kind,
  peopleNet,
  integration: "connected",
  requiredForCurrentHire,
  mapping,
});

const pending = (
  label: string,
  kind: HireFieldKind,
  mapping: HireFieldMapping,
  peopleNet: PeopleNetRequirement = "unmarked",
): HireFieldMeta => ({
  label,
  kind,
  peopleNet,
  integration: "pending",
  requiredForCurrentHire: false,
  mapping,
});

/** One entry per visible PeopleNet row in sections 3–7, plus the current hire date. */
export const HIRE_FIELD_META = {
  // Datos personales · Datos personales (14 + the existing hire date)
  firstName: connected("Nombre", "text", "required", true, mapped("STD_N_FIRST_NAME")),
  lastName1: connected(
    "Primer apellido",
    "text",
    "required",
    true,
    mapped("SSP_PRIMER_APELLIDO", "STD_N_FAMILY_NAME_1"),
  ),
  lastName2: connected("2º apellido", "text", "unmarked", false, mapped("STD_N_MAIDEN_NAME")),
  documentType: connected("ID Tipo documento", "text", "required", true, mapped("SSP_ID_TP_DOC")),
  documentNumber: connected("Núm. de documento", "text", "required", true, mapped("STD_SSN")),
  legalRepresentativeNif: pending("NIF Representante legal", "text", mapped("SSP_SSN_REP_LEGAL")),
  issuingCountry: pending("ID País emisor documento", "catalog", mapped("SSP_ID_PAIS_EMISOR")),
  birthDate: pending("Fecha nacimiento", "date", mapped("STD_DT_BIRTH")),
  nationality: pending("ID Nacionalidad", "catalog", mapped("STD_ID_COUNTRY_NAC")),
  birthProvince: pending("ID Provincia nacimiento", "catalog", mapped("SCO_BIRTH_ID_SUB_GEO_DIV")),
  birthCommunity: pending("ID Comunidad nacimiento", "catalog", unconfirmed),
  birthCountry: pending("ID País nacimiento", "catalog", mapped("SCO_BIRTH_ID_COUNTRY")),
  gender: pending("ID Sexo", "catalog", mapped("STD_ID_GENDER")),
  maritalStatus: pending("ID Estado civil", "catalog", mapped("STD_ID_MARITAL_STAT")),
  hireDate: connected("Fecha de alta", "date", "not-shown", true, mapped("SRCO_DT_HIRE")),

  // Datos personales · Información Atradius (4)
  atradiusId: pending("ID Atradius", "text", mapped("CSP_ID_ATRADIUS")),
  atradiusJobCode: pending(
    "ID Atradius Job Code",
    "catalog",
    mapped("CSP_ID_ATRADIUS_JOB"),
    "required",
  ),
  atradiusCategory: pending(
    "ID Categoría Atradius",
    "catalog",
    mapped("CSP_ID_CATEG_ATRADIUS"),
    "required",
  ),
  department: pending("ID Department", "catalog", unconfirmed, "required"),

  // Datos personales · Contactos (4)
  phone: pending("Teléfono", "compound", mapped("STD_NAT_REGION_CODE_PHONE", "STD_PHONE")),
  mobile: pending("Móvil", "compound", mapped("STD_NAT_REGION_CODE_CELL", "STD_MOVIL")),
  email: connected(
    "Correo electrónico",
    "email",
    "unmarked",
    true,
    mapped("STD_EMAIL", "STD_EMAIL_ATRADIUS"),
  ),
  fax: pending("Fax", "compound", unconfirmed),

  // Datos personales · Dirección (13)
  locationType: pending(
    "ID Tipo localización",
    "catalog",
    mapped("STD_ID_LOCATION_TYPE"),
    "required",
  ),
  roadType: pending("ID Tipo de vía", "catalog", mapped("SSP_ID_SIGLA_DOMIC"), "required"),
  address: pending(
    "Dirección",
    "compound",
    mapped("STD_ADDRESS_LINE_1", "STD_ADDRESS_LINE_2"),
    "required",
  ),
  streetNumber: pending("Núm.", "text", mapped("SSP_NUM_VIA"), "required"),
  buildingBlock: pending("Bloque", "text", mapped("SSP_BLOQUE")),
  staircase: pending("Escalera", "text", mapped("SSP_ESCALERA")),
  floor: pending("Piso", "text", mapped("SSP_PISO")),
  door: pending("Puerta", "text", mapped("SSP_PUERTA")),
  postalCode: pending("Código postal", "text", mapped("STD_ZIP_CODE"), "required"),
  city: pending("ID Población", "catalog", mapped("STD_ID_GEO_PLACE"), "required"),
  province: pending("ID Provincia", "catalog", mapped("STD_ID_SUB_GEO_DIV"), "required"),
  community: pending("ID Comunidad", "catalog", mapped("STD_ID_GEO_DIV"), "required"),
  country: pending("ID País", "catalog", mapped("STD_ID_COUNTRY"), "required"),

  // Organización (17)
  legalEntity: pending("ID Empresa", "catalog", mapped("SCO_ID_LEG_ENT"), "required"),
  positionChoice: pending("Puesto / Posición", "radio", uiOnly, "conditional"),
  job: pending("ID Puesto", "catalog", mapped("STD_ID_JOB_CODE"), "conditional-required"),
  position: pending("ID Posición", "catalog", mapped("SCO_ID_POSITION"), "conditional-required"),
  workUnit: pending("ID Unidad organizativa", "catalog", mapped("SCO_ID_WORK_UNIT"), "required"),
  workLocation: pending("ID Lugar trabajo", "catalog", mapped("SCO_ID_WORK_LOCATION"), "required"),
  occupationType: pending("Tipo de ocupación", "radio", uiOnly),
  occupationHours: pending("Núm. Horas", "number", mapped("SCO_NUM_HOURS")),
  occupationEjc: pending("Núm. EJC", "number", mapped("SCO_NUM_EJC")),
  occupationHeadcount: pending("Núm. Efectivos", "number", mapped("SCO_NUM_HEADCOUNT")),
  category: pending("Categoría", "catalog", mapped("SSP_ID_CATEGORIA"), "required"),
  project: pending("Proyecto", "catalog", unconfirmed, "required"),
  startReason: pending(
    "ID Motivo inicio",
    "catalog",
    mapped("STD_ID_HRP_START_REASON"),
    "required",
  ),
  keyEmployee: pending("Empleado clave", "checkbox", mapped("STD_KEY_EMPLOYEE")),
  strategicEmployee: pending("Empleado estratégico", "checkbox", mapped("STD_STRATEGIC_EMP")),
  structure: pending("Id Estructura", "catalog", mapped("P_CYC_ID_ESTRUCTURA"), "required"),
  functionalWorkCenter: pending(
    "Centro de Trabajo Funcional",
    "catalog",
    mapped("P_CYC_ID_WORK_FUNCTIONAL"),
    "required",
  ),

  // Seguridad Social · Datos generales (6)
  ssNumberChoice: pending("Con / Sin Núm. S.S. asignado", "radio", mapped("SSP_ALTA_CON_NUM_SS")),
  ssNumber: pending(
    "Núm. SS",
    "compound",
    mapped("SSP_PROV_NUM_SS", "SSP_NUM_SS", "SSP_DIG_NUM_SS"),
    "conditional",
  ),
  tc1Header: pending("ID Cabecera TC1", "catalog", mapped("SSP_ID_CABEC_TC1"), "required"),
  tariffGroup: pending("ID Grupo de tarifa", "catalog", mapped("SSP_ID_GRUP_TARIFA"), "required"),
  ssOccupation: pending("ID Ocupación", "catalog", mapped("SSP_ID_OCUPACION")),
  ssAgreement: pending("ID Convenio S.S.", "catalog", mapped("SSP_ID_CONV_SS")),

  // Seguridad Social · Contrato y jornada (10)
  legalContract: pending("ID Contrato legal", "catalog", mapped("SSP_ID_CONT_LEGAL"), "required"),
  internalContract: pending(
    "ID Contrato interno",
    "catalog",
    mapped("SSP_ID_CONT_INTERN"),
    "required",
  ),
  contractEnd: pending("Fin", "datetime-local", mapped("SSP_FEC_FIN_CONTRA")),
  laborRelation: pending("ID Relación laboral", "catalog", mapped("SSP_ID_REL_LAB")),
  scheduleChoice: pending("Jornada completa / Jornada parcial", "radio", uiOnly),
  partialSchedulePercent: pending(
    "% Jornada parcial",
    "number",
    mapped("SSP_VALOR_COEF_T_P"),
    "conditional",
  ),
  hourType: pending("Tipo de horas", "catalog", mapped("SSP_TIPO_HORAS"), "conditional"),
  numberOfHours: pending("Número de horas", "number", mapped("SSP_NUM_HORAS"), "conditional"),
  partialScheduleType: pending(
    "Tipo de jornada parcial",
    "catalog",
    mapped("SSP_JP_REG_IRREG"),
    "conditional",
  ),
  weeklyWorkDays: pending(
    "Días de trabajo semanales",
    "number",
    mapped("SSP_NUM_DIAS_JP"),
    "conditional",
  ),

  // Seguridad Social · Guarda legal (2)
  legalReductionPercent: pending("% Reducción", "number", mapped("SSP_PORC_GLEGAL")),
  reductionReason: pending("ID Motivo de reducción", "catalog", mapped("SSP_ID_MOTIV_REDUC")),

  // Seguridad Social · Bonificaciones (15)
  substitutionCause: pending("ID Causa sustitución", "catalog", mapped("SSP_ID_CAUSA_SUST")),
  replacedPersonSsNumber: pending(
    "Nº S.S. del sustituido",
    "compound",
    mapped("SRSP_PROV_NUSS", "SRSP_NUSS", "SRSP_DIG_NUSS"),
  ),
  unemploymentCondition: pending(
    "ID Condición desempleado",
    "catalog",
    mapped("SSP_ID_COND_DESEMP"),
  ),
  specialLaborRelation: pending(
    "ID Relación laboral especial",
    "catalog",
    mapped("SSP_ID_REL_LAB_ESP"),
  ),
  socialExclusion: pending("Exclusión social", "catalog", mapped("SSP_TRAB_EXCL_SOC")),
  disabilityChoice: pending("Sin minusvalía / Con minusvalía", "radio", uiOnly),
  disabilityPercent: pending("% minusvalía", "number", mapped("SSP_PORC_MINUSVAL"), "conditional"),
  specificFic: pending("FIC Específico", "checkbox", unconfirmed),
  contractSeniorityStart: pending("Inicio antig. contrato", "date", mapped("SSP_FEC_INI_A_CONT")),
  womanMaternity24: pending("Mujer mater. 24 meses", "checkbox", mapped("SSP_MUJER_24")),
  underrepresentedWoman: pending("Mujer subrepresentada", "checkbox", mapped("SSP_MUJER_SUBREPR")),
  activeInsertionIncome: pending(
    "Renta activa de inserción",
    "checkbox",
    mapped("SSP_RENTACTIVA_INS"),
  ),
  reliefContract: pending("Contrato relevo", "checkbox", mapped("SSP_CONTRAT_RELEVO")),
  readmittedDisabled: pending("Incapacitado readmitido", "checkbox", mapped("SSP_INCAPACITADO_R")),
  firstSelfEmployedWorker: pending(
    "Primer trabajador autónomo",
    "checkbox",
    mapped("SSP_PRIM_TRAB_AUT"),
  ),

  // Seguridad Social · Otros datos contrato (3)
  probationDays: pending("Días de prueba", "number", mapped("SSP_DIAS_PRUEBA")),
  probationEnd: pending("Fecha fin periodo prueba", "date", mapped("SCO_DT_PROBATION_END")),
  additionalClause: pending("Cláusula adicional", "textarea", mapped("SSP_CLAUSULA_ADIC")),

  // Nómina (13)
  payrollAgreement: pending("ID Convenio", "catalog", mapped("SSP_ID_CONVENIO"), "required"),
  adjustmentType: pending("ID Tipo de ajuste", "catalog", mapped("SCO_ID_TYPE_ADJUST"), "required"),
  annualGross: pending("Bruto anual", "number", mapped("SSP_BRUTO_ANUAL")),
  salaryType: pending("ID Tipo salario", "catalog", mapped("SSP_ID_TP_SALARIO"), "required"),
  seniorityDate: pending("Fecha de Antigüedad", "date", mapped("SSP_FEC_ANTIGUEDAD")),
  extrasDate: pending("Fecha Extras", "date", unconfirmed),
  payrollCurrency: pending("ID Moneda", "catalog", mapped("ID_CURRENCY")),
  union: pending("ID Sindicato", "catalog", mapped("SSP_ID_SINDICATO")),
  variableCompensationMode: pending(
    "Tipo modalidad Variable",
    "catalog",
    mapped("CSP_TP_MOD_VAR"),
    "required",
  ),
  irpfType: pending("ID Tipo del IRPF", "catalog", mapped("SSP_ID_TP_IRPF"), "required"),
  perceptionKey: pending(
    "ID Clave percepción",
    "catalog",
    mapped("SSP_ID_CLAVE_PERCEP"),
    "required",
  ),
  referenceModelWeek: pending("ID Modelo/Semana de referencia", "compound", unconfirmed),
  timeManagementPay: pending("Pago con gestión del tiempo", "checkbox", mapped("SSP_PAGO_TA")),

  // Datos de pago (11)
  paymentCurrency: pending("ID Moneda", "catalog", mapped("ID_CURRENCY")),
  paymentType: pending("ID Tipo pago", "catalog", mapped("SCO_ID_PAYM_TYPE")),
  companyBank: pending("ID Banco empresa", "catalog", mapped("SCO_ID_COMP_BANK")),
  personBankOrdinal: pending("Ordinal banco persona", "compound", unconfirmed),
  bankFormatChoice: pending("Formato: IBAN / Otro formato", "radio", uiOnly),
  bankAccount: pending("Cuenta bancaria", "compound", uiOnly, "required"),
  iban: pending("IBAN", "text", unconfirmed, "conditional"),
  bankBranch: pending("Sucursal bancaria", "text", unconfirmed, "conditional"),
  accountNumber: pending("Nº de cuenta", "text", mapped("SCO_ACCOUNT_NUMBER"), "conditional"),
  bic: pending("BIC", "text", unconfirmed, "conditional"),
  accountCurrency: pending("ID Moneda", "catalog", mapped("ID_CURRENCY_2")),
} as const satisfies Record<string, HireFieldMeta>;

export type HireFieldId = keyof typeof HIRE_FIELD_META;
export type CurrentFieldId =
  | "firstName"
  | "lastName1"
  | "lastName2"
  | "documentType"
  | "documentNumber"
  | "email"
  | "hireDate";
export type PendingFieldId = Exclude<HireFieldId, CurrentFieldId>;

export const hireFieldMappingTooltip = (field: HireFieldId): string => {
  const mapping = HIRE_FIELD_META[field].mapping;
  if (mapping.status === "unconfirmed") return "Mapping pendiente de confirmar";
  if (mapping.status === "ui-only") return "Control de UI · sin mapping directo";
  return mapping.identifiers.join(" / ");
};

export const hireFieldVisualStatus = (
  field: HireFieldId,
): "normal" | "confirmed-pending" | "unconfirmed" => {
  const meta = HIRE_FIELD_META[field];
  if (meta.integration === "connected" || meta.mapping.status === "ui-only") return "normal";
  return meta.mapping.status === "confirmed" ? "confirmed-pending" : "unconfirmed";
};

export const hireFieldLabelClass = (field: HireFieldId): string => {
  const status = hireFieldVisualStatus(field);
  if (status === "confirmed-pending") return "text-hire-pending";
  if (status === "unconfirmed") return "text-destructive";
  return "text-foreground";
};
