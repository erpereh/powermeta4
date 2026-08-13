const MOJIBAKE_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["ÃƒÂ¡", "á"],
  ["ÃƒÂ©", "é"],
  ["ÃƒÂ­", "í"],
  ["ÃƒÂ³", "ó"],
  ["ÃƒÂº", "ú"],
  ["ÃƒÂ±", "ñ"],
  ["ÃƒÂ", "Á"],
  ["ÃƒÂ‰", "É"],
  ["ÃƒÂ", "Í"],
  ["ÃƒÂ“", "Ó"],
  ["ÃƒÂš", "Ú"],
  ["ÃƒÂ‘", "Ñ"],
  ["Ã¡", "á"],
  ["Ã©", "é"],
  ["Ã­", "í"],
  ["Ã³", "ó"],
  ["Ãº", "ú"],
  ["Ã±", "ñ"],
  ["Ã", "Á"],
  ["Ã‰", "É"],
  ["Ã", "Í"],
  ["Ã“", "Ó"],
  ["Ãš", "Ú"],
  ["Ã‘", "Ñ"],
  ["Â¿", "¿"],
  ["Â¡", "¡"],
];

export function displayText(value?: string | number): string {
  if (value === undefined || value === null) {
    return "";
  }

  return MOJIBAKE_REPLACEMENTS.reduce((text, [from, to]) => text.replaceAll(from, to), String(value));
}
