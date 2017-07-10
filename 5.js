const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let withoutNthElement = (array, n) => {
    return _.first(array, n).concat(_.last(array, array.length - n - 1));
}

let crossOutAndMerge = (toMerge, original) => {
    let remainder = toMerge.reduce((res, s) => {
        let indexInOriginal = _.indexOf(res.originalRemaining, s);
        if (indexInOriginal !== -1) {
            return {
                toMerge: _.tail(res.toMerge),
                originalRemaining: withoutNthElement(res.originalRemaining, indexInOriginal)
            };
        }
        return {toMerge: res.toMerge, originalRemaining: res.originalRemaining};
    }, {
        toMerge: toMerge,
        originalRemaining: original
    });
    return original.concat(remainder.toMerge);
}

let smallestDivisibleByRange = (range) => range.reduce((res, number) => {
    let add = utils.primeFactors(number);
    return crossOutAndMerge(add, res);
}, []).reduce((p, i) => p * i);
let result = smallestDivisibleByRange(_.range(2, 21));
console.log(`Result: ${result}, test ${result === 232792560
    ? "passed"
    : "failed"}`);
