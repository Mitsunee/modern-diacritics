/* eslint-env mocha */
import { slugify } from "../dist/index.js";
import { strictEqual } from "assert";

describe("slugify (esm)", () => {
  it("creates slugs", () => {
    strictEqual(slugify("Lorem ipsum"), "lorem-ipsum");
  });
  it("strips symbols first", () => {
    strictEqual(slugify("Lorém Îpsüm"), "lorem-ipsum");
  });
  it("maps replaceable symbols", () => {
    strictEqual(slugify("lorem\u00A0ipsum_dolor"), "lorem-ipsum-dolor");
  });
  it("removes unrelated symbols", () => {
    strictEqual(slugify("! !lorem! !"), "-lorem-");
  });
  it("it keeps existing dashes", () => {
    strictEqual(slugify("lorem-Îpsum"), "lorem-ipsum");
  });
  it("does not use trim option and transforms spaces instead", () => {
    strictEqual(slugify("  spáaaaacè  "), "--spaaaaace--");
  });
});
