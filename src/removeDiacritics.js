import { stripSymbols } from "./helpers/stripSymbols.js";
import { diacriticMap } from "./diacritics.js";

export function removeDiacritics(str) {
  return stripSymbols(str).replace(/[^\u0020-\u007e]/g, function (c) {
    // apply map
    return diacriticMap.get(c) ? "" : c;
  });
}
