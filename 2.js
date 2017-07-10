const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

const fibonacci = utils.fibonacci;

let result = lazy.generate(fibonacci)
    .takeWhile(f => f < 4000000)
    .filter(f => !(f % 2))
    .reduce((sum, f) => sum + f);

console.log(`Result: ${result}, test ${result === 4613732
    ? "passed"
    : "failed"}`);
