export function stripSymbols(str) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
