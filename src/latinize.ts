import { diacriticMap } from "./maps/diacritics";
import { removeDiacritics, DiacriticOptions } from "./removeDiacritics";
import { normalizeSymbols, SymbolOptions } from "./normalizeSymbols";

export interface LatinizeOptions extends SymbolOptions, DiacriticOptions {
  symbols?: boolean;
  removeDiacritics?: boolean;
}

export function latinize(str: string, options: LatinizeOptions): string {
  const symbols = options?.symbols ?? true;
  const lowerCase = options?.lowerCase ?? false;
  const trim = options?.trim ?? false;
  const forceSingleSpace = options?.forceSingleSpace ?? false;
  const replaceWhiteSpace = options?.replaceWhiteSpace ?? undefined;

  let tmp,
    subject = removeDiacritics(str),
    result = "";

  // prepare subject
  if (trim) subject = subject.trim();
  if (symbols) {
    subject = normalizeSymbols(subject, {
      trim: false,
      forceSingleSpace,
      replaceWhiteSpace
    });
  }

  for (let i = 0; i < subject.length; i++) {
    const char = subject[i];
    if (/[\u0300-\u036f]/.test(char)) continue;

    tmp = diacriticMap.get(char);

    // handle lowerCase
    if (lowerCase && (tmp || /[A-Z]/.test(char))) {
      tmp = (tmp || char).toLowerCase();
    }

    result += tmp || char;
  }

  return result;
}
