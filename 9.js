const lazy = require("lazy.js");
const _ = require("underscore");
const utils = require("./utils");

let triple = (a, b, c) => {
    return {
        a,b,c
    }
};
let isPythagorean = (a, b, c) => Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);

let generateTriples = (s) => {
    let as = _.range(3, (s - 3) / 3 + 1);
    return as.map(a => {
        let bs = _.range(a + 1, (s - a) / 2);
        return bs.map(b => {
            let c = s - a - b;
            return isPythagorean(a,b,c) ? triple(a,b,c) : undefined
        });
    });
}

let findTruethy = _.partial(_.find, _, x => x);
let operations = _.compose(findTruethy , _.flatten, generateTriples);
let specialTriple = operations(1000);
let result = specialTriple.a * specialTriple.b * specialTriple.c;

let validAnswer = 31875000;
console.log(`Result: ${result}, test ${result === validAnswer
    ? "passed"
    : "failed"}`);
