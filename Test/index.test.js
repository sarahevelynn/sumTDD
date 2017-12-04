const assert = require("assert");
const test = require("../index.js");

describe("Test", function () {
  describe("#sumOfNumbers", function () {
    it("sums numbers", function () {
      assert.equal(test.sumOfNumbers(1, 3), 4);
    });
  });
});
