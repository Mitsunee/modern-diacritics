import { CharList, CharMap } from "./types";

export const symbolList: CharList = [
  {
    base: " ",
    chars: ["\u00A0"]
  },
  {
    base: "'",
    chars: ["\u2019", "\u2018"]
  },
  {
    base: '"',
    chars: ["\u201C", "\u201D", "\uFF02"]
  },
  {
    base: "-",
    chars: ["\u2013", "\u2014", "\u2212"]
  }
];

export const symbolMap: CharMap = new Map(
  symbolList.flatMap(({ base, chars }) => chars.map(char => [char, base]))
);
