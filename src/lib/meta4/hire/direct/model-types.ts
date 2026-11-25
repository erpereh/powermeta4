/**
 * Shape of `model.generated.json`, produced by `npm run hire:model` from the
 * Meta4 dictionary (category SAVE_HIRE) and the hire template.
 */

/** One step of a transfer group: copy an item into a maintenance node, or run a method. */
export type HireModelMap =
  | {
      kind: "copy";
      /** Destination node of the maintenance Meta4Object. */
      node: string;
      item: string;
      /** Source `NODE.ITEM` of the hire Meta4Object; missing when only `default` applies. */
      from?: string;
      default?: string;
      pk?: true;
      /** Physical `TABLE.COLUMN`s the item is persisted to (several for split objects). */
      columns: string[];
    }
  | { kind: "exec"; node: string; item: string };

export type HireModelGroup = {
  group: string;
  order: number;
  /** Hire T3 level that defines the group order (CSP, SRSP or SRCO). */
  t3: string;
  /** Maintenance Meta4Object the group writes into. */
  destT3: string;
  maps: HireModelMap[];
};

export type HireModelColumn = {
  name: string;
  sqlType: string;
  length?: number;
  precision?: number;
  scale?: number;
  /** Position in the Meta4 primary key. */
  pk?: number;
  required?: true;
  /** SQL Server fills the column when the INSERT leaves it out. */
  sqlDefault?: true;
  /** Meta4 extended type (`M4RDC_FIELDS.ID_TYPE`). */
  type?: string;
  /** `M4RDC_EXTENDED_TPS.ID_DEFAULT_FUNC` when it sets a value (not 1). */
  defaultFunction?: number;
  defaultArgs?: string;
  /**
   * Only values Meta4 accepts, from `CONSTRAINT_ARGS` of the extended type
   * (`ID_CONSTRAINT_FUNC` 11 numeric / 12 text).
   */
  allowed?: string[];
  /** Range Meta4 accepts (`ID_CONSTRAINT_FUNC` 14 numbers, 15 dates). */
  range?: { kind: "number" | "date"; min: string; max: string };
};

export type HireModelTable = {
  /** Meta4 logic object. */
  object: string;
  /** Audit table written by the LDB when the logic object has HAS_AUDITORY = 1. */
  audit?: string;
  columns: HireModelColumn[];
};

export type HireModel = {
  generatedFrom: { category: string; t3: string[]; template: string };
  template: {
    /** Excel column -> `NODE.ITEM` of the hire Meta4Object (row 5). */
    headers: Record<string, string>;
    /** Row 6 values of the columns the form never writes. */
    defaults: Record<string, string | number>;
  };
  groups: HireModelGroup[];
  tables: Record<string, HireModelTable>;
};
