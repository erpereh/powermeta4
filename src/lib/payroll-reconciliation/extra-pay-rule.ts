import type { ExtraPayRuleVariant } from "./types";

/** Earlier R1 supplied from PeopleNet; five indicators with no IBER exceptions. */
export const HISTORICAL_EXTRA_RULE = `
SSP_PAG_EXT1.DESTROYBLOCK()
SSP_PAG_EXT1.load_blk()
if SSP_PAG_EXT1.count()>0 then
For i=0 to SSP_PAG_EXT1.count()-1
SSP_PAG_EXT1.MoveTo(i)
if CSP_PRORRATEADA_PE1 = 1 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE1 = 0 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE2 = 1 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE2 = 0 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE3 = 1 and SSP_PAG_EXT1.SSP_ORDEN=3 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE3 = 0 and SSP_PAG_EXT1.SSP_ORDEN=3 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE4 = 1 and SSP_PAG_EXT1.SSP_ORDEN=4 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE4 = 0 and SSP_PAG_EXT1.SSP_ORDEN=4 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE5 = 1 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE5 = 0 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
Next
Endif
Return(CSP_PRORRATEADA)`;

/** R1 first supplied for August–October 2026, including IBER exceptions. */
export const VERIFIED_EXTRA_RULE = `
SSP_PAG_EXT1.DESTROYBLOCK()
SSP_PAG_EXT1.load_blk()
if SSP_PAG_EXT1.count()>0 then
For i=0 to SSP_PAG_EXT1.count()-1
SSP_PAG_EXT1.MoveTo(i)
A = SSP_PAG_EXT1.SSP_PRORRATEADA
B = SSP_PAG_EXT1.SSP_ORDEN
IF ID_ORGANIZATION <> "IBER" THEN
if CSP_PRORRATEADA_PE1 = 1 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE1 = 0 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE2 = 1 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE2 = 0 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE3 = 1 and SSP_PAG_EXT1.SSP_ORDEN=3 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE3 = 0 and SSP_PAG_EXT1.SSP_ORDEN=3 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE4 = 1 and SSP_PAG_EXT1.SSP_ORDEN=4 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE4 = 0 and SSP_PAG_EXT1.SSP_ORDEN=4 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE5 = 1 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE5 = 0 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
Endif
IF ID_ORGANIZATION = "IBER" THEN
if CSP_PRORRATEADA_PE1 = 1 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE1 = 0 and SSP_PAG_EXT1.SSP_ORDEN=1 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if CSP_PRORRATEADA_PE2 = 1 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE2 = 0 and SSP_PAG_EXT1.SSP_ORDEN=2 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if SSP_PAG_EXT1.SSP_ORDEN=3 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if SSP_PAG_EXT1.SSP_ORDEN=4 AND SSP_ID_CONVENIO = "0041" then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
if SSP_PAG_EXT1.SSP_ORDEN=4 AND SSP_ID_CONVENIO <> "0041" then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE5 = 1 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "S"
if CSP_PRORRATEADA_PE5 = 0 and SSP_PAG_EXT1.SSP_ORDEN=5 then SSP_PAG_EXT1.SSP_PRORRATEADA = "N"
Endif
Next
Endif
Return(CSP_PRORRATEADA)`;

/** Verified executable variants. Validity comes from the selected PeopleNet rows. */
export const EXTRA_RULE_VERSIONS = [
  {
    variant: "r1-through-july-2026",
    priority: "2",
    order: "100",
    source: HISTORICAL_EXTRA_RULE,
  },
  {
    variant: "r1-aug-oct-2026",
    priority: "3",
    order: "100",
    source: VERIFIED_EXTRA_RULE,
  },
] as const;

/** Ignore formatting/comments, preserving every quoted literal and executable token. */
export function extraRuleTokens(source: string): string {
  return [...source.matchAll(/"(?:[^"\n]|"")*"|\/\/[^\n]*|'[^\n]*|\s+|[A-Za-z_][\w]*|./g)]
    .map(([token]) =>
      token.startsWith('"') ? token : /^(?:\/\/|'|\s)/.test(token) ? "" : token.toUpperCase(),
    )
    .join("");
}

export function extraProration(
  variant: ExtraPayRuleVariant,
  society: string,
  agreement: string,
  order: number,
  flag: 0 | 1 | null,
  original: boolean | null,
): boolean | null {
  if (variant === "r1-aug-oct-2026" && society === "IBER") {
    if (order === 3) return true;
    if (order === 4) return agreement ? agreement !== "0041" : null;
  }
  return flag === null ? original : flag === 1;
}
