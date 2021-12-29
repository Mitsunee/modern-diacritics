/* eslint-env mocha */
const { removeDiacritics } = require("../dist/index.cjs");
const { strictEqual } = require("assert");

describe("removeDiacritics (cjs)", () => {
  it("removes diacritics", () => {
    strictEqual(removeDiacritics("éÂ Çü"), "eA Cu");
  });
  it("transforms to lowerCase with option enabled", () => {
    strictEqual(removeDiacritics("éÂ Çü", { lowerCase: true }), "ea cu");
  });
});
