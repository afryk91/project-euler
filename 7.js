const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let primes = lazy.generate(i => i).filter(utils.isPrime);
let getNthPrime = n => primes.get(n);

let validAnswer = 104743;
let result = getNthPrime(10000);

console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
