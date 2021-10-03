// sanitizer
export interface SanitizerOptions {
  diacritics?: boolean;
  symbols?: boolean;
}
export function sanitize(str: string, options?: SanitizerOptions): string;

// slugify
export function slugify(str: string): string;
