import { test } from "uvu";
import { is } from "uvu/assert";
import { normalizeSymbols } from "../src/normalizeSymbols.ts";

test("sanitizes symbols", () => {
  is(
    normalizeSymbols("\u2019Quótes\u00A0\uFF02\u00A0Tèst\u2018"),
    "'Quótes \" Tèst'"
  );
});

test("trims whitespace at start and end", () => {
  is(normalizeSymbols("\u00A0 With \u00A0 Spaces \u00A0"), "With   Spaces");
});

test("trim option can be disabled", () => {
  is(
    normalizeSymbols("\u00A0 With \u00A0 Spaces \u00A0", { trim: false }),
    "  With   Spaces  "
  );
});

test("can replace white spaces", () => {
  is(
    normalizeSymbols("replace with dashes", { replaceWhiteSpace: "-" }),
    "replace-with-dashes"
  );
});

test("can remove duplicate spaces", () => {
  is(
    normalizeSymbols("only   one\u00A0\u00A0\u00A0space", {
      forceSingleSpace: true
    }),
    "only one space"
  );
});

test("can normalize dashes", () => {
  is(
    normalizeSymbols("hyphen-minus:- endash:– emdash:— minus:−"),
    "hyphen-minus:- endash:- emdash:- minus:-"
  );
});

test.run();
