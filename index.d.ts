// sanitizer
export interface LatinizeOptions {
  symbols?: boolean;
  lowerCase?: boolean;
  trim?: boolean;
}
export function latinize(str: string, options?: LatinizeOptions): string;
export function normalizeSymbols(
  str: string,
  options?: { trim?: boolean }
): string;
export function removeDiacritics(
  str: string,
  options?: { lowerCase?: boolean }
): string;

// slugify
export function slugify(str: string): string;
