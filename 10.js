const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let primes = lazy.generate(i => i).filter(utils.isPrime);
let sum = array => array.reduce((sum, n) => sum + n);
let primesBelow = n => primes.takeWhile(p => p < n);

let validAnswer = 142913828922;
let result = sum(primesBelow(2000000));

console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
