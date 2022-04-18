import { test } from "uvu";
import { is } from "uvu/assert";
import { latinize } from "../src/latinize.ts";

test("latinizes everything by default", () => {
  is(
    latinize("\u00A0\u2019Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ\u2018\u00A0"),
    " 'Internationalizati0n' "
  );
});

test("preserves symbols with symbols option disabled", () => {
  is(
    latinize(
      "Båｃòл\u00A0íｐѕùｍ\u00A0ðｏɭ߀ｒ\u00A0ѕïｔ\u00A0ａϻèｔ\u00A0âùþê.",
      { symbols: false }
    ),
    "Bacon\u00A0ipѕum\u00A0dhol0r\u00A0ѕit\u00A0aMet\u00A0authe."
  );
});

test("transforms to lowercase with lowerCase option enabled", () => {
  is(latinize("Lówᴇrcåsᴇ", { lowerCase: true }), "lowercase");
});

test("can trim whitespace at start and end with trim option enabled", () => {
  is(latinize("  Wîｔh tｒïm  ", { trim: true }), "With trim");
});

test("does not trim by default (trim option disabled)", () => {
  is(latinize("\u00A0ᴎᴑᴅᴇȷʂ "), " NoDEJs ");
});

test.run();
