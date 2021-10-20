/* eslint-env mocha */
import { latinize } from "../dist/index.js";
import { strictEqual } from "assert";

describe("latinize (esm)", function () {
  it("latinizes everything by default", () => {
    strictEqual(
      latinize("\u00A0\u2019Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ\u2018\u00A0"),
      " 'Internationalizati0n' "
    );
  });
  it("preserves symbols with symbols option disabled", () => {
    strictEqual(
      latinize(
        "Båｃòл\u00A0íｐѕùｍ\u00A0ðｏɭ߀ｒ\u00A0ѕïｔ\u00A0ａϻèｔ\u00A0âùþê.",
        { symbols: false }
      ),
      "Bacon\u00A0ipѕum\u00A0dhol0r\u00A0ѕit\u00A0aMet\u00A0authe."
    );
  });
  it("transforms to lowercase with lowerCase option enabled", () => {
    strictEqual(latinize("Lówᴇrcåsᴇ", { lowerCase: true }), "lowercase");
  });
  it("can trim whitespace at start and end with trim option enabled", () => {
    strictEqual(latinize("  Wîｔh tｒïm  ", { trim: true }), "With trim");
  });
  it("does not trim by default (trim option disabled)", () => {
    strictEqual(latinize("\u00A0ᴎᴑᴅᴇȷʂ "), " NoDEJs ");
  });
});
