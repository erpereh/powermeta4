/** Fixed-point arithmetic: 24 decimal places, never binary floating point. */
const SCALE = BigInt("1000000000000000000000000");
export function decimal(text: string | null | undefined): bigint | null {
  if (text === null || text === undefined) return null;
  const trimmed = text.trim().replace(/\s/g, "");
  const value = trimmed.includes(",") ? trimmed.replace(/\./g, "").replace(",", ".") : trimmed;
  const match = /^([+-]?)(\d+)(?:\.(\d+))?(?:e([+-]?\d{1,2}))?$/i.exec(value);
  if (!match || value.length > 50) return null;
  const fraction = match[3] ?? "";
  const shift = 24 + Number(match[4] ?? 0) - fraction.length;
  const digits = BigInt(match[2] + fraction);
  if (Math.abs(shift) > 100) return null;
  const divisor = shift < 0 ? BigInt(10) ** BigInt(-shift) : BigInt(1);
  if (digits % divisor) return null;
  const amount = shift >= 0 ? digits * BigInt(10) ** BigInt(shift) : digits / divisor;
  return match[1] === "-" ? -amount : amount;
}
export function textDecimal(value: bigint): string {
  const negative = value < BigInt(0);
  const absolute = negative ? -value : value;
  const fraction = (absolute % SCALE).toString().padStart(24, "0").replace(/0+$/, "");
  return `${negative ? "-" : ""}${absolute / SCALE}${fraction ? `.${fraction}` : ""}`;
}
export const multiply = (a: bigint, b: bigint): bigint => (a * b) / SCALE;
export const divide = (a: bigint, b: bigint): bigint => {
  if (!b) throw new Error("División por cero.");
  return (a * SCALE) / b;
};
export const magnitude = (a: bigint): bigint => (a < BigInt(0) ? -a : a);
