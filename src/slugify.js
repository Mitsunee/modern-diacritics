import { sanitize } from "./sanitize.js";

export function slugify(str) {
  return sanitize(str)
    .replace(/\s|_|\(|\)/g, "-")
    .replace(/[^a-z-]/gi, "")
    .toLowerCase();
}
