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

export type HireFieldMeta = {
  label: string;
  kind: HireFieldKind;
  peopleNet: PeopleNetRequirement;
  integration: "connected" | "pending";
  requiredForCurrentHire: boolean;
};

const connected = (
  label: string,
  kind: HireFieldKind,
  peopleNet: PeopleNetRequirement,
  requiredForCurrentHire: boolean,
): HireFieldMeta => ({
  label,
  kind,
  peopleNet,
  integration: "connected",
  requiredForCurrentHire,
});

const pending = (
  label: string,
  kind: HireFieldKind,
  peopleNet: PeopleNetRequirement = "unmarked",
): HireFieldMeta => ({
  label,
  kind,
  peopleNet,
  integration: "pending",
  requiredForCurrentHire: false,
});

/** One entry per visible PeopleNet row in sections 3–7, plus the current hire date. */
export const HIRE_FIELD_META = {
  // Datos personales · Datos personales (14 + the existing hire date)
  firstName: connected("Nombre", "text", "required", true),
  lastName1: connected("Primer apellido", "text", "required", true),
  lastName2: connected("2º apellido", "text", "unmarked", false),
  documentType: connected("ID Tipo documento", "text", "required", true),
  documentNumber: connected("Núm. de documento", "text", "required", true),
  legalRepresentativeNif: pending("NIF Representante legal", "text"),
  issuingCountry: pending("ID País emisor documento", "catalog"),
  birthDate: pending("Fecha nacimiento", "date"),
  nationality: pending("ID Nacionalidad", "catalog"),
  birthProvince: pending("ID Provincia nacimiento", "catalog"),
  birthCommunity: pending("ID Comunidad nacimiento", "catalog"),
  birthCountry: pending("ID País nacimiento", "catalog"),
  gender: pending("ID Sexo", "catalog"),
  maritalStatus: pending("ID Estado civil", "catalog"),
  hireDate: connected("Fecha de alta", "date", "not-shown", true),

  // Datos personales · Información Atradius (4)
  atradiusId: pending("ID Atradius", "text"),
  atradiusJobCode: pending("ID Atradius Job Code", "catalog", "required"),
  atradiusCategory: pending("ID Categoría Atradius", "catalog", "required"),
  department: pending("ID Department", "catalog", "required"),

  // Datos personales · Contactos (4)
  phone: pending("Teléfono", "compound"),
  mobile: pending("Móvil", "compound"),
  email: connected("Correo electrónico", "email", "unmarked", true),
  fax: pending("Fax", "compound"),

  // Datos personales · Dirección (13)
  locationType: pending("ID Tipo localización", "catalog", "required"),
  roadType: pending("ID Tipo de vía", "catalog", "required"),
  address: pending("Dirección", "compound", "required"),
  streetNumber: pending("Núm.", "text", "required"),
  buildingBlock: pending("Bloque", "text"),
  staircase: pending("Escalera", "text"),
  floor: pending("Piso", "text"),
  door: pending("Puerta", "text"),
  postalCode: pending("Código postal", "text", "required"),
  city: pending("ID Población", "catalog", "required"),
  province: pending("ID Provincia", "catalog", "required"),
  community: pending("ID Comunidad", "catalog", "required"),
  country: pending("ID País", "catalog", "required"),

  // Organización (17)
  legalEntity: pending("ID Empresa", "catalog", "required"),
  positionChoice: pending("Puesto / Posición", "radio", "conditional"),
  job: pending("ID Puesto", "catalog", "conditional-required"),
  position: pending("ID Posición", "catalog", "conditional-required"),
  workUnit: pending("ID Unidad organizativa", "catalog", "required"),
  workLocation: pending("ID Lugar trabajo", "catalog", "required"),
  occupationType: pending("Tipo de ocupación", "radio"),
  occupationHours: pending("Núm. Horas", "number"),
  occupationEjc: pending("Núm. EJC", "number"),
  occupationHeadcount: pending("Núm. Efectivos", "number"),
  category: pending("Categoría", "catalog", "required"),
  project: pending("Proyecto", "catalog", "required"),
  startReason: pending("ID Motivo inicio", "catalog", "required"),
  keyEmployee: pending("Empleado clave", "checkbox"),
  strategicEmployee: pending("Empleado estratégico", "checkbox"),
  structure: pending("Id Estructura", "catalog", "required"),
  functionalWorkCenter: pending("Centro de Trabajo Funcional", "catalog", "required"),

  // Seguridad Social · Datos generales (6)
  ssNumberChoice: pending("Con / Sin Núm. S.S. asignado", "radio"),
  ssNumber: pending("Núm. SS", "compound", "conditional"),
  tc1Header: pending("ID Cabecera TC1", "catalog", "required"),
  tariffGroup: pending("ID Grupo de tarifa", "catalog", "required"),
  ssOccupation: pending("ID Ocupación", "catalog"),
  ssAgreement: pending("ID Convenio S.S.", "catalog"),

  // Seguridad Social · Contrato y jornada (10)
  legalContract: pending("ID Contrato legal", "catalog", "required"),
  internalContract: pending("ID Contrato interno", "catalog", "required"),
  contractEnd: pending("Fin", "datetime-local"),
  laborRelation: pending("ID Relación laboral", "catalog"),
  scheduleChoice: pending("Jornada completa / Jornada parcial", "radio"),
  partialSchedulePercent: pending("% Jornada parcial", "number", "conditional"),
  hourType: pending("Tipo de horas", "catalog", "conditional"),
  numberOfHours: pending("Número de horas", "number", "conditional"),
  partialScheduleType: pending("Tipo de jornada parcial", "catalog", "conditional"),
  weeklyWorkDays: pending("Días de trabajo semanales", "number", "conditional"),

  // Seguridad Social · Guarda legal (2)
  legalReductionPercent: pending("% Reducción", "number"),
  reductionReason: pending("ID Motivo de reducción", "catalog"),

  // Seguridad Social · Bonificaciones (15)
  substitutionCause: pending("ID Causa sustitución", "catalog"),
  replacedPersonSsNumber: pending("Nº S.S. del sustituido", "compound"),
  unemploymentCondition: pending("ID Condición desempleado", "catalog"),
  specialLaborRelation: pending("ID Relación laboral especial", "catalog"),
  socialExclusion: pending("Exclusión social", "catalog"),
  disabilityChoice: pending("Sin minusvalía / Con minusvalía", "radio"),
  disabilityPercent: pending("% minusvalía", "number", "conditional"),
  specificFic: pending("FIC Específico", "checkbox"),
  contractSeniorityStart: pending("Inicio antig. contrato", "date"),
  womanMaternity24: pending("Mujer mater. 24 meses", "checkbox"),
  underrepresentedWoman: pending("Mujer subrepresentada", "checkbox"),
  activeInsertionIncome: pending("Renta activa de inserción", "checkbox"),
  reliefContract: pending("Contrato relevo", "checkbox"),
  readmittedDisabled: pending("Incapacitado readmitido", "checkbox"),
  firstSelfEmployedWorker: pending("Primer trabajador autónomo", "checkbox"),

  // Seguridad Social · Otros datos contrato (3)
  probationDays: pending("Días de prueba", "number"),
  probationEnd: pending("Fecha fin periodo prueba", "date"),
  additionalClause: pending("Cláusula adicional", "textarea"),

  // Nómina (13)
  payrollAgreement: pending("ID Convenio", "catalog", "required"),
  adjustmentType: pending("ID Tipo de ajuste", "catalog", "required"),
  annualGross: pending("Bruto anual", "number"),
  salaryType: pending("ID Tipo salario", "catalog", "required"),
  seniorityDate: pending("Fecha de Antigüedad", "date"),
  extrasDate: pending("Fecha Extras", "date"),
  payrollCurrency: pending("ID Moneda", "catalog"),
  union: pending("ID Sindicato", "catalog"),
  variableCompensationMode: pending("Tipo modalidad Variable", "catalog", "required"),
  irpfType: pending("ID Tipo del IRPF", "catalog", "required"),
  perceptionKey: pending("ID Clave percepción", "catalog", "required"),
  referenceModelWeek: pending("ID Modelo/Semana de referencia", "compound"),
  timeManagementPay: pending("Pago con gestión del tiempo", "checkbox"),

  // Datos de pago (11)
  paymentCurrency: pending("ID Moneda", "catalog"),
  paymentType: pending("ID Tipo pago", "catalog"),
  companyBank: pending("ID Banco empresa", "catalog"),
  personBankOrdinal: pending("Ordinal banco persona", "compound"),
  bankFormatChoice: pending("Formato: IBAN / Otro formato", "radio"),
  bankAccount: pending("Cuenta bancaria", "compound", "required"),
  iban: pending("IBAN", "text", "conditional"),
  bankBranch: pending("Sucursal bancaria", "text", "conditional"),
  accountNumber: pending("Nº de cuenta", "text", "conditional"),
  bic: pending("BIC", "text", "conditional"),
  accountCurrency: pending("ID Moneda", "catalog"),
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

export const HIRE_PENDING_LABEL_CLASS = "text-hire-pending";
