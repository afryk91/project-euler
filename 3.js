const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let result = _.max(utils.primeFactors(600851475143));

console.log(`Result: ${result}, test ${result === 6857
    ? "passed"
    : "failed"}`);
