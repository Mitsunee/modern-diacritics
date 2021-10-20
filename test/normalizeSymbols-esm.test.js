/* eslint-env mocha */
import { normalizeSymbols } from "../dist/index.js";
import { strictEqual } from "assert";

describe("normalizeSymbols (esm)", () => {
  it("sanitizes symbols", () => {
    strictEqual(
      normalizeSymbols("\u2019Quótes\u00A0\uFF02\u00A0Tèst\u2018"),
      "'Quótes \" Tèst'"
    );
  });
  it("trims whitespace at start and end", () => {
    strictEqual(
      normalizeSymbols("\u00A0 With \u00A0 Spaces \u00A0"),
      "With   Spaces"
    );
  });
  it("trim option can be disabled", () => {
    strictEqual(
      normalizeSymbols("\u00A0 With \u00A0 Spaces \u00A0", { trim: false }),
      "  With   Spaces  "
    );
  });
});
