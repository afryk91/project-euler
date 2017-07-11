const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let triangleNumbers = lazy.generate(i => utils.sum(_.range(1, i + 2)));

let validAnswer = 76576500;
let result = triangleNumbers.dropWhile(n => utils.findNumberOfDivisors(n) <= 500).first();

console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
