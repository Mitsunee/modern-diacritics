import { diacriticMap } from "./maps/diacritics.js";
import { removeDiacritics } from "./removeDiacritics.js";
import { normalizeSymbols } from "./normalizeSymbols.js";

export function latinize(str, options) {
  const symbols = options?.symbols ?? true;
  const lowerCase = options?.lowerCase ?? false;
  const trim = options?.trim ?? true;

  let tmp,
    subject = removeDiacritics(str),
    result = "";

  // prepare subject
  if (symbols) subject = normalizeSymbols(subject, { trim: false });
  if (trim) subject = subject.trim();
  subject = subject.split("");

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
