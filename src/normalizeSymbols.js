import { symbolList, symbolMap } from "./maps/symbols.js";

const allSymbols = new RegExp(symbolList.flatMap(c => c.chars).join("|"), "g");

export function normalizeSymbols(str, options) {
  const trim = options?.trim ?? true;

  let tmp,
    subject = `${str}`;
  if (trim) subject = subject.trim();

  const result = subject.replace(allSymbols, char => {
    if ((tmp = symbolMap.get(char))) return tmp;
    return char;
  });

  return result;
}
