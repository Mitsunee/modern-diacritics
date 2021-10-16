/* eslint-env mocha */
import { latinize } from "../dist/index.js";
import assert from "assert";

describe("latinize", function () {
  it("sanitizes everything (with default options)", () => {
    assert.strictEqual(
      latinize("\u2019Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ\u2018"),
      "'Internationalizati0n'"
    );
  });
  it("sanitizes diacritics (symbols disabled)", () => {
    assert.strictEqual(
      latinize(
        "Båｃòл\u00A0íｐѕùｍ\u00A0ðｏɭ߀ｒ\u00A0ѕïｔ\u00A0ａϻèｔ\u00A0âùþê.",
        { symbols: false }
      ),
      "Bacon\u00A0ipѕum\u00A0dhol0r\u00A0ѕit\u00A0aMet\u00A0authe."
    );
  });
  it("latinizes diacritics from diacriticMap", () => {
    assert.strictEqual(latinize("ᴎᴑᴅᴇȷʂ"), "NoDEJs");
  });
  it("can return all lowercase text", () => {
    assert.strictEqual(latinize("Lówᴇrcåsᴇ", { lowerCase: true }), "lowercase");
  });
});
