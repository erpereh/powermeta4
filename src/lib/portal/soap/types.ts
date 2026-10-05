/** Contrato de un servicio SOAP Meta4 tal como lo describen sus fuentes generadas. */
export type SoapArgKind = "string" | "date" | "number" | "block";

export type SoapServiceArg = {
  readonly name: string;
  readonly kind: SoapArgKind;
  readonly node?: string;
};

export type SoapOutputBlock = {
  /** Propiedad del bloque en la salida (elemento XML). */
  readonly field: string;
  /** Nodo Meta4 del bloque. */
  readonly node: string;
  /** Elemento XML que repite cada registro. */
  readonly recordSet: string;
  /** Ítems Meta4 de cada registro. */
  readonly items: readonly string[];
  /** Nodos hijos anidados dentro de cada registro. */
  readonly children: readonly SoapOutputBlock[];
};

export type SoapServiceOperation = {
  readonly operation: string;
  readonly methodNode: string;
  readonly methodName: string;
  readonly args: readonly SoapServiceArg[];
  readonly blocks: readonly SoapOutputBlock[];
};

export type SoapServiceContract = {
  readonly service: string;
  readonly m4Object: string;
  readonly deployedInWsdd: boolean;
  readonly operations: readonly SoapServiceOperation[];
};

/** Un registro devuelto: ítem Meta4 (mayúsculas) → texto. */
export type SoapRecord = Readonly<Record<string, string>>;

/** Registros devueltos por nodo Meta4. */
export type SoapResult = {
  readonly returnValue: string | null;
  readonly nodes: Readonly<Record<string, readonly SoapRecord[]>>;
};
