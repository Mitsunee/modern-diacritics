import { test } from "uvu";
import { is } from "uvu/assert";
import { slugify } from "../src/slugify.ts";

test("creates slugs", () => {
  is(slugify("Lorem ipsum"), "lorem-ipsum");
});

test("strips symbols first", () => {
  is(slugify("Lorém Îpsüm"), "lorem-ipsum");
});

test("maps replaceable symbols", () => {
  is(slugify("lorem\u00A0ipsum_dolor"), "lorem-ipsum-dolor");
});

test("removes unrelated symbols", () => {
  is(slugify("! !lorem! !"), "-lorem-");
});

test("test keeps existing dashes", () => {
  is(slugify("lorem-Îpsum"), "lorem-ipsum");
});

test("does not use trim option by default and transforms spaces instead", () => {
  is(slugify("  spáaaaacè  "), "--spaaaaace--");
});

test("can use trim option", () => {
  is(slugify("  spáaaaacè  ", { trim: true }), "spaaaaace");
});

test("can use forceSingleSpace option", () => {
  is(slugify("  spáaaaacè  ", { forceSingleSpace: true }), "-spaaaaace-");
});

test.run();
