import { latinize } from "./latinize.js";

export function slugify(str) {
  return latinize(str, { lowerCase: true })
    .replace(/\s|_|\(|\)/g, "-")
    .replace(/[^a-z-]/g, "");
}
