/* eslint-env mocha */
import { removeDiacritics } from "../index.js";
import assert from "assert";

describe("removeDiacritics", function () {
  it("keeps unrelated symbols", () => {
    assert.strictEqual(
      removeDiacritics(
        "Båｃòл íｐѕùｍ ðｏɭ߀ｒ ѕïｔ ａϻèｔ âùþê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."
      ),
      "Bao iѕu  ѕi e aue uie ee a ie o   e oue."
    );
  });
  it("keeps base of separatable characters", () => {
    assert.strictEqual(removeDiacritics("hambúrguer"), "hamburguer");
  });
  it("removes non-separatable characters", () => {
    assert.strictEqual(removeDiacritics("hŒllœ"), "hll");
  });
});
