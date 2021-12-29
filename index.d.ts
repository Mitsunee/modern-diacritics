export interface SymbolOptions {
  trim?: boolean;
  forceSingleSpace?: boolean;
  replaceWhiteSpace?: string;
}

export interface DiacriticOptions {
  lowerCase?: boolean;
}

//export interface CustomMap {
//  [key: string]: string | {
//    char: string;
//    lowerCase?: boolean;
//  }
//}

export interface LatinizeOptions extends SymbolOptions, DiacriticOptions {}

export interface SlugifyOptions {
  forceSingleSpace?: boolean;
  trim?: boolean;
}

// sanitizer
export function latinize(str: string, options?: LatinizeOptions): string;
export function normalizeSymbols(str: string, options?: SymbolOptions): string;
export function removeDiacritics(
  str: string,
  options?: DiacriticOptions
): string;

// slugify
export function slugify(str: string, options?: SymbolOptions): string;
