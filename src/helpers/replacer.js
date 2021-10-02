import { stripSymbols } from "./stripSymbols.js";

const reg = /[^\u0020-\u007e]/g;

export function replacer(str, fn, strip = true) {
  if (strip) {
    return stripSymbols(str).replace(reg, fn);
  }
  return str.replace(reg, fn);
}
