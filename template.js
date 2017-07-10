const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let validAnswer = 0;
let result = 0;

console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
