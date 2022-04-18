export interface DiacriticOptions {
  lowerCase?: boolean;
}

export function removeDiacritics(
  str: string,
  options?: DiacriticOptions
): string {
  const subject = `${str}`.normalize("NFD");
  let result;

  try {
    // more complete modern variant
    result = subject.replace(/\p{Diacritic}/gu, "");
  } catch {
    // backwards compatible variant
    result = subject.replace(/[\u0300-\u036f]/g, "");
  }

  if (options?.lowerCase) {
    return result.toLowerCase();
  }
  return result;
}
