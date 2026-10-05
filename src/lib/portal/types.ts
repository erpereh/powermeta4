/**
 * Modelo del portal del empleado y del responsable (`/portal`).
 *
 * Todo es declarativo y seguro para el cliente: describe pantallas, contratos
 * y operaciones. Las lecturas reales viven en módulos `server-only`.
 */

export type PortalProfile = "empleado" | "responsable";

/** Variante de personalización Meta4 (`m4custom/<sociedad>` o BASE). */
export type PortalVariant = "CYC" | "IBER" | "COLL" | "BASE";

/** Pendientes trazables de `docs/portal/implementacion/pendientes.md`. */
export type PendingId = "P01" | "P02" | "P03" | "P04" | "P05" | "P06" | "P07" | "P08" | "P09";

export type PortalDomainId =
  | "inicio"
  | "tareas"
  | "organizacion"
  | "datos"
  | "retribucion"
  | "talento"
  | "tiempo"
  | "conocimiento"
  | "alcance"
  | "equipo"
  | "retribucion-equipo"
  | "talento-equipo"
  | "tiempo-equipo";

export type PortalIconName =
  | "home"
  | "tasks"
  | "org"
  | "person"
  | "id-card"
  | "contact"
  | "address"
  | "mail"
  | "phone"
  | "family"
  | "emergency"
  | "document"
  | "tax"
  | "bank"
  | "payslip"
  | "certificate"
  | "chart"
  | "loan"
  | "benefit"
  | "package"
  | "job"
  | "training"
  | "evaluation"
  | "career"
  | "mobility"
  | "goal"
  | "calendar"
  | "vacation"
  | "absence"
  | "clock"
  | "planning"
  | "knowledge"
  | "team"
  | "scope"
  | "delegation"
  | "approval"
  | "salary"
  | "budget"
  | "review"
  | "vacancy"
  | "interview"
  | "movement"
  | "link"
  | "search"
  | "report";

/** Cómo se obtiene la lectura de una pantalla. */
export type ReadContract =
  | {
      /** Servicio SOAP publicado y ejecutado con la sesión Meta4 del usuario. */
      readonly kind: "soap";
      readonly service: string;
      readonly operation: string;
      /** `true` cuando el usuario ha comprobado el servicio en el servidor vivo. */
      readonly verified: boolean;
    }
  | {
      /** `SELECT` parametrizada en PeopleNet. */
      readonly kind: "sql";
      readonly tables: readonly string[];
      readonly verified: boolean;
    }
  | {
      /** Sin contrato real disponible: se muestra el estado de dependencia. */
      readonly kind: "pending";
      /** Objetos/nodos Meta4 que lee el original. */
      readonly meta4: readonly string[];
      readonly pending: readonly PendingId[];
      readonly detail: string;
    };

/** Operación de escritura del original. Nunca se ejecuta sin contrato aprobado. */
export type WriteOperation = {
  readonly id: string;
  readonly label: string;
  /** Método Meta4 exacto que ejecuta el original. */
  readonly meta4Method: string;
  /** Argumentos visibles del controlador original (TAG/ACC/NOD...). */
  readonly arguments?: string;
  readonly pending: readonly PendingId[];
};

export type FieldOption = { readonly value: string; readonly label: string };

/** Catálogos PeopleNet ya conectados y reutilizables (consultas del alta). */
export type ConnectedCatalog =
  | "country"
  | "province"
  | "community"
  | "roadType"
  | "locationType"
  | "maritalStatus"
  | "currency"
  | "documentType"
  | "gender";

export type FieldOptionsSource =
  | { readonly kind: "static"; readonly values: readonly FieldOption[] }
  | { readonly kind: "catalog"; readonly catalog: ConnectedCatalog }
  | {
      /** Catálogo Meta4 aún sin consulta verificada: el control queda deshabilitado. */
      readonly kind: "pending";
      readonly meta4: string;
    };

export type FieldType =
  | "text"
  | "textarea"
  | "date"
  | "number"
  | "email"
  | "tel"
  | "select"
  | "checkbox"
  | "radio"
  | "iban";

export type FieldCondition = {
  /** Campo del mismo formulario del que depende. */
  readonly field: string;
  /** El campo se muestra cuando el otro vale uno de estos valores. */
  readonly equals: readonly string[];
};

export type FormFieldSpec = {
  /** Nombre del control/ítem original. */
  readonly name: string;
  readonly label: string;
  readonly type: FieldType;
  readonly required?: boolean;
  readonly maxLength?: number;
  readonly min?: number;
  readonly max?: number;
  readonly help?: string;
  readonly placeholder?: string;
  /** Formato exigido por el validador del original. */
  readonly pattern?: { readonly regex: string; readonly message: string };
  readonly options?: FieldOptionsSource;
  readonly showWhen?: FieldCondition;
  /** Ancho en la rejilla (2 = fila completa). */
  readonly span?: 1 | 2;
};

/** Reglas de validación visibles en el JavaScript original. */
export type FormRule =
  | {
      readonly kind: "dateOrder";
      readonly start: string;
      readonly end: string;
      readonly message: string;
    }
  | { readonly kind: "notBeforeHireDate"; readonly field: string; readonly message: string }
  | { readonly kind: "oneOf"; readonly fields: readonly string[]; readonly message: string }
  | {
      readonly kind: "emailMatch";
      readonly field: string;
      readonly confirm: string;
      readonly message: string;
    };

export type FormSpec = {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly fields: readonly FormFieldSpec[];
  readonly rules?: readonly FormRule[];
  /** Operación que ejecutaría el envío. */
  readonly write: WriteOperation;
  /** `query`: consulta o cálculo del original (no escribe); por defecto, petición. */
  readonly mode?: "request" | "query";
  /** Aviso literal del original (p. ej. fecha efectiva). */
  readonly notice?: string;
};

/** Columna o dato que muestra una consulta del original. */
export type ConsultField = {
  /** Ítem Meta4 solo cuando la ficha lo identifica literalmente. */
  readonly item?: string;
  readonly label: string;
};

export type ConsultSpec = {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  /** `record`: un registro como lista de datos; `list`: tabla de registros. */
  readonly layout: "record" | "list";
  readonly meta4: string;
  readonly fields: readonly ConsultField[];
  readonly reader: PortalReaderId;
  readonly read: ReadContract;
};

export type PortalReaderId =
  | "dependency"
  | "own-emails"
  | "own-payment-accounts"
  | "own-oro-status";

/** Solo campos declarados, sin objetos de BD ni información ajena a la sección. */
export type ConsultData = {
  readonly rows: readonly (readonly { readonly label: string; readonly value: string }[])[];
};

export type FeatureSection =
  | { readonly kind: "consult"; readonly consult: ConsultSpec }
  | { readonly kind: "form"; readonly form: FormSpec }
  | { readonly kind: "note"; readonly title: string; readonly body: string };

/** Vistas con implementación propia (contrato real conectado). */
export type FeatureView =
  | "generic"
  | "home"
  | "tasks"
  | "directory"
  | "orgchart"
  | "my-file"
  | "payslips"
  | "manager-home"
  | "population"
  | "team";

export type PortalFeature = {
  readonly id: string;
  readonly profile: PortalProfile;
  readonly domain: PortalDomainId;
  readonly title: string;
  readonly summary: string;
  readonly icon: PortalIconName;
  /** Ruta pública bajo `/portal`. */
  readonly route: string;
  /** Rutas lógicas JSP del original (fichas en docs/portal). */
  readonly sources: readonly string[];
  /** Ficha principal, relativa a docs/portal. */
  readonly ficha: string;
  readonly keywords?: readonly string[];
  /** Datos personales o económicos de una persona. */
  readonly sensitive: boolean;
  readonly read: ReadContract;
  readonly view: FeatureView;
  readonly sections?: readonly FeatureSection[];
  readonly writes?: readonly WriteOperation[];
  /** Diferencias comprobadas por variante. */
  readonly variants?: Partial<Record<PortalVariant, string>>;
  /** Variantes donde existe la pantalla (por defecto todas). */
  readonly availableIn?: readonly PortalVariant[];
};

export type PortalDomain = {
  readonly id: PortalDomainId;
  readonly profile: PortalProfile;
  readonly title: string;
  readonly summary: string;
  readonly icon: PortalIconName;
  readonly route: string;
  readonly guide: string;
};
