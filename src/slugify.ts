import { latinize } from "./latinize";

export interface SlugifyOptions {
  forceSingleSpace?: boolean;
  trim?: boolean;
}

export function slugify(str: string, options?: SlugifyOptions): string {
  return latinize(str, {
    lowerCase: true,
    replaceWhiteSpace: "-",
    forceSingleSpace: options?.forceSingleSpace ?? false,
    trim: options?.trim ?? false
  })
    .replace(/_|\(|\)/g, "-")
    .replace(/[^a-z-]/g, "");
}
