import { replacer } from "./helpers/replacer.js";
import { diacriticMap } from "./maps/diacritics.js";
import { symbolMap } from "./maps/symbols.js";

export function sanitize(str, options) {
  const diacritics = options?.diacritics ?? true;
  const symbols = options?.symbols ?? true;
  const lowerCase = options?.lowerCase ?? false;

  const result = replacer(
    str,
    function (c) {
      let temp;

      if (diacritics && (temp = diacriticMap.get(c))) return temp;
      if (symbols && (temp = symbolMap.get(c))) return temp;

      return c;
    },
    diacritics // pass diacritics option
  );

  return lowerCase ? result.toLowerCase() : result;
}
