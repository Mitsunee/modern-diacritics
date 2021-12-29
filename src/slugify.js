import { latinize } from "./latinize.js";

export function slugify(str, options) {
  return latinize(str, {
    lowerCase: true,
    replaceWhiteSpace: "-",
    forceSingleSpace: options?.forceSingleSpace ?? false,
    trim: options?.trim ?? false
  })
    .replace(/_|\(|\)/g, "-")
    .replace(/[^a-z-]/g, "");
}
