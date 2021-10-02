import { replacer } from "./helpers/replacer.js";
import { diacriticMap } from "./maps/diacritics.js";
import { symbolMap } from "./maps/symbols.js";

export function sanitize(str) {
  return replacer(str, function (c) {
    // apply map
    return diacriticMap.get(c) || symbolMap.get(c) || c;
  });
}
