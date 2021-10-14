export function stripAccents(str) {
  try {
    // more complete modern variant
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  } catch {
    // backwards compatible variant
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
