import { sanitize } from "./sanitize.js";

export function slugify(str) {
  return sanitize(str, { lowerCase: true })
    .replace(/\s|_|\(|\)/g, "-")
    .replace(/[^a-z-]/g, "");
}
