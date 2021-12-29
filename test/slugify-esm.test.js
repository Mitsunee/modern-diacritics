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
  it("does not use trim option by default and transforms spaces instead", () => {
    strictEqual(slugify("  spáaaaacè  "), "--spaaaaace--");
  });
  it("can use trim option", () => {
    strictEqual(slugify("  spáaaaacè  ", { trim: true }), "spaaaaace");
  });
  it("can use forceSingleSpace option", () => {
    strictEqual(
      slugify("  spáaaaacè  ", { forceSingleSpace: true }),
      "-spaaaaace-"
    );
  });
});
