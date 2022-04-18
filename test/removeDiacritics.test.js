import { test } from "uvu";
import { is } from "uvu/assert";
import { removeDiacritics } from "../src/removeDiacritics.ts";

test("removes diacritics", () => {
  is(removeDiacritics("éÂ Çü"), "eA Cu");
});

test("transforms to lowerCase with option enabled", () => {
  is(removeDiacritics("éÂ Çü", { lowerCase: true }), "ea cu");
});

test.run();
