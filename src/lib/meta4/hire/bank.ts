/** IBAN and Spanish CCC helpers shared by the form validation and the Excel writer. */

export const normalizeIban = (value: string): string => value.replace(/\s+/g, "").toUpperCase();

/** ISO 13616 mod-97 check of an already normalized IBAN. */
export const ibanChecksumIsValid = (iban: string): boolean => {
  let remainder = 0;
  for (const character of `${iban.slice(4)}${iban.slice(0, 4)}`) {
    const digits = /[A-Z]/.test(character) ? String(character.charCodeAt(0) - 55) : character;
    for (const digit of digits) remainder = (remainder * 10 + Number(digit)) % 97;
  }
  return remainder === 1;
};

const CCC_WEIGHTS = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6] as const;

const cccDigit = (digits: string): string => {
  const sum = [...digits.padStart(10, "0")].reduce(
    (total, digit, index) => total + Number(digit) * CCC_WEIGHTS[index],
    0,
  );
  const digit = 11 - (sum % 11);
  return String(digit === 11 ? 0 : digit === 10 ? 1 : digit);
};

/** The two control digits of a Spanish account: bank + branch, then account. */
export const spanishControlDigits = (bank: string, branch: string, account: string): string =>
  `${cccDigit(`${bank}${branch}`)}${cccDigit(account)}`;

export type SpanishAccount = {
  bank: string;
  branch: string;
  controlDigits: string;
  account: string;
};

/** Parts of an ES IBAN (ESkk bbbb ssss dd cccccccccc), or null if it is not one. */
export const splitSpanishIban = (iban: string): SpanishAccount | null => {
  const match = /^ES\d{2}(\d{4})(\d{4})(\d{2})(\d{10})$/.exec(iban);
  if (!match) return null;
  return { bank: match[1], branch: match[2], controlDigits: match[3], account: match[4] };
};
