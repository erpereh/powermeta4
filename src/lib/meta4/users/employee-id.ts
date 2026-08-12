/**
 * Digit-only employee IDs: strip leading zeros for a comparison key, compare by
 * key length then lexicographic order, then original string as tiebreak.
 * Never uses Number(). Leading zeros are preserved on the rendered id.
 */
export const compareEmployeeIds = (a: string, b: string): number => {
  const digitOnly = /^\d+$/;
  if (digitOnly.test(a) && digitOnly.test(b)) {
    const keyA = a.replace(/^0+/, "") || "0";
    const keyB = b.replace(/^0+/, "") || "0";
    if (keyA.length !== keyB.length) return keyA.length - keyB.length;
    const lex = keyA.localeCompare(keyB);
    if (lex !== 0) return lex;
    return a.localeCompare(b);
  }
  return a.localeCompare(b);
};
