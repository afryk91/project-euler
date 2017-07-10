const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let sumOfSquaresUpTo = number => _.range(number).reduce((sum, n) => sum + Math.pow(n + 1, 2), 0);
let squareOfSumUpTo = number => Math.pow(_.range(number).reduce((sum, n) => sum + n + 1, 0), 2);

let validAnswer = 25164150;
let result = Math.abs(sumOfSquaresUpTo(100) - squareOfSumUpTo(100));

console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
