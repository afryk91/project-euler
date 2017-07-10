const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let products = _.range(1, 1000)
    .reduce((res, x) => res.concat(
        _.range(x, 1000)
        .reduce((res, y) => res.concat(x * y), [])
    ), []);

let result = _.chain(products)
    .flatten()
    .filter(utils.isPalindrome)
    .max()
    .value();

console.log(`Result: ${result}, test ${result === 906609
    ? "passed"
    : "failed"}`);
