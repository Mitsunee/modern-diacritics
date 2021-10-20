/* eslint-env mocha */
import { removeDiacritics } from "../dist/index.js";
import { strictEqual } from "assert";

describe("removeDiacritics (esm)", () => {
  it("removes diacritics", () => {
    strictEqual(removeDiacritics("éÂ Çü"), "eA Cu");
  });
  it("transforms to lowerCase with option enabled", () => {
    strictEqual(removeDiacritics("éÂ Çü", { lowerCase: true }), "ea cu");
  });
});
