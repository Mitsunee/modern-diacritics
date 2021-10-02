/* eslint-env mocha */
import { sanitize } from "../index.js";
import assert from "assert";

// TODO: find better test names for the old tests and/or replace them

describe("sanitize", function () {
  it("test 1", () => {
    assert.strictEqual(
      sanitize("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"),
      "Internationalizati0n"
    );
  });
  it("test 2", () => {
    assert.strictEqual(
      sanitize(
        "Båｃòл íｐѕùｍ ðｏɭ߀ｒ ѕïｔ ａϻèｔ âùþê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."
      ),
      "Bacon ipѕum dhol0r ѕit aMet authe and0uille beef culpa filet Mignon cupidatat ut enim tonGue."
    );
  });
  it("test 3", () => {
    assert.strictEqual(sanitize("ᴎᴑᴅᴇȷʂ"), "NoDEJs");
  });
  it("test 4", () => {
    assert.strictEqual(sanitize("hambúrguer"), "hamburguer");
  });
  it("test 5", () => {
    assert.strictEqual(sanitize("hŒllœ"), "hOElloe");
  });
  it("test 6", () => {
    assert.strictEqual(sanitize("Fußball"), "Fussball");
  });
  it("test 7", () => {
    assert.strictEqual(
      sanitize("ABCDEFGHIJKLMNOPQRSTUVWXYZé"),
      "ABCDEFGHIJKLMNOPQRSTUVWXYZe"
    );
  });
  it("sanitizes symbols", () => {
    assert.strictEqual(
      sanitize("\u2019Quotes\u00A0\uFF02\u00A0Test\u2018"),
      "'Quotes \" Test'"
    );
  });
});
