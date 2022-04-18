import { symbolList, symbolMap } from "./maps/symbols";

const allSymbols = new RegExp(symbolList.flatMap(c => c.chars).join("|"), "g");

export interface SymbolOptions {
  trim?: boolean;
  forceSingleSpace?: boolean;
  replaceWhiteSpace?: string;
}

export function normalizeSymbols(str: string, options?: SymbolOptions): string {
  const trim = options?.trim ?? true;
  const forceSingleSpace = options?.forceSingleSpace ?? false;
  const replaceWhiteSpace = options?.replaceWhiteSpace ?? false;
  const subject = `${str}`;

  let tmp,
    result = subject.replace(allSymbols, char => {
      if ((tmp = symbolMap.get(char))) return tmp;
      return char;
    });

  if (trim) result = result.trim();
  if (forceSingleSpace) result = result.replace(/\s{2,}/g, " ");
  if (replaceWhiteSpace !== false) {
    result = result.replace(/\s/g, replaceWhiteSpace);
  }

  return result;
}
