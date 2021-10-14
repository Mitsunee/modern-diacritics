import { stripAccents } from "./stripAccents.js";

const reg = /[^\u0020-\u007e]/g;

export function replacer(str, fn, strip = true) {
  if (strip) {
    return stripAccents(str).replace(reg, fn);
  }
  return str.replace(reg, fn);
}
