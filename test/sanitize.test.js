/* eslint-env mocha */
import { sanitize } from "../index.js";
import assert from "assert";

describe("sanitize", function () {
  it("sanitizes everything (with default options)", () => {
    assert.strictEqual(
      sanitize("\u2019Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ\u2018"),
      "'Internationalizati0n'"
    );
  });
  it("sanitizes diacritics (symbols disabled)", () => {
    assert.strictEqual(
      sanitize(
        "Båｃòл\u00A0íｐѕùｍ\u00A0ðｏɭ߀ｒ\u00A0ѕïｔ\u00A0ａϻèｔ\u00A0âùþê.",
        { symbols: false }
      ),
      "Bacon\u00A0ipѕum\u00A0dhol0r\u00A0ѕit\u00A0aMet\u00A0authe."
    );
  });
  it("latinizes diacritics from diacriticMap", () => {
    assert.strictEqual(sanitize("ᴎᴑᴅᴇȷʂ"), "NoDEJs");
  });
  it("sanitizes symbols (diacritics disabled)", () => {
    assert.strictEqual(
      sanitize("\u2019Quótes\u00A0\uFF02\u00A0Tèst\u2018", {
        diacritics: false
      }),
      "'Quótes \" Tèst'"
    );
  });
});
