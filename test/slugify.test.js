/* eslint-env mocha */
import { slugify } from "../index.js";
import assert from "assert";

describe("slugify", () => {
  it("creates slugs", () => {
    assert.strictEqual(slugify("Lorem ipsum"), "lorem-ipsum");
  });
  it("strips symbols first", () => {
    assert.strictEqual(slugify("Lorém Îpsüm"), "lorem-ipsum");
  });
  it("maps replaceable symbols", () => {
    assert.strictEqual(slugify("lorem\u00A0ipsum_dolor"), "lorem-ipsum-dolor");
  });
  it("removes unrelated symbols", () => {
    assert.strictEqual(slugify("! !lorem! !"), "-lorem-");
  });
  it("it keeps existing dashes", () => {
    assert.strictEqual(slugify("lorem-ipsum"), "lorem-ipsum");
  });
});
