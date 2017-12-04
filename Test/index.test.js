const assert = require ("chai").assert
const test = require ("../index.js")

describe ("Test", function () {
    describe ("sumOfNumbers ()", function () {
        assert.deepEqual (test.sumOfNumbers(1,3), 4)
    })
})
