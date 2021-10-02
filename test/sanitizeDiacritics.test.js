/* eslint-env mocha */
import { sanitizeDiacritics } from "../index.js";
import assert from "assert";

// TODO: find better test names

describe("sanitizeDiacritics", function () {
  it("test 1", () => {
    assert.strictEqual(
      sanitizeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"),
      "Internationalizati0n"
    );
  });
  it("test 2", () => {
    assert.strictEqual(
      sanitizeDiacritics(
        "Båｃòл íｐѕùｍ ðｏɭ߀ｒ ѕïｔ ａϻèｔ âùþê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."
      ),
      "Bacon ipѕum dhol0r ѕit aMet authe and0uille beef culpa filet Mignon cupidatat ut enim tonGue."
    );
  });
  it("test 3", () => {
    assert.strictEqual(sanitizeDiacritics("ᴎᴑᴅᴇȷʂ"), "NoDEJs");
  });
  it("test 4", () => {
    assert.strictEqual(sanitizeDiacritics("hambúrguer"), "hamburguer");
  });
  it("test 5", () => {
    assert.strictEqual(sanitizeDiacritics("hŒllœ"), "hOElloe");
  });
  it("test 6", () => {
    assert.strictEqual(sanitizeDiacritics("Fußball"), "Fussball");
  });
  it("test 7", () => {
    assert.strictEqual(
      sanitizeDiacritics("ABCDEFGHIJKLMNOPQRSTUVWXYZé"),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZe"
    );
  });
});
