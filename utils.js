const lazy = require("lazy.js");
const _ = require("underscore");

let fibonacci = n => {
    return n < 2 ?
        n + 1 :
        _.last(_.range(2, n + 1).reduce((fibs, i) => fibs.concat(fibs[i - 1] + fibs[i - 2]), [1, 2]))
}

let isPrime = n => {
    let v = _.every(_.range(2, Math.ceil(Math.sqrt(n)) + 1), d => n % d !== 0);
    return n < 2 ? false : n === 2 || n === 3 || v;
}

let primeFactors = n => {
    if (n === 1) {
        return;
    }
    let LPD = lowestPrimeDivisor(n);
    return _.compact([LPD].concat(primeFactors(n/LPD)));
}

let lowestPrimeDivisor = n => {
    return lazy.generate(i => i)
        .filter(isPrime)
        .dropWhile(p => p < n && n % p)
        .first();
}

let isPalindrome = x => x.toString().split("").reverse().join("") === x.toString();

let sum = array => array.reduce((sum, n) => sum + n);

let prod = array => _.reduce(array, (p, n) => p * n);

let getCols = grid => _.range(0, grid.length * 2 - 1)
        .map(i => grid.map(row => row[i]))
        .filter(row => !row.every(x => x === undefined));

let undefines = len => _.range(len).map(() => undefined);

let getDiagonalsUpRight = grid => {
    let expanded = grid.map((row, index) => undefines(index).concat(row));
    return getCols(expanded).map(d => _.compact(d));
};
let getDiagonalsUpLeft = grid => {
    let expanded = grid.map((row, index) => undefines(row.length - index - 1).concat(row));
    return getCols(expanded).map(d => _.compact(d));
};
let getDiagonals = grid => getDiagonalsUpRight(grid).concat(getDiagonalsUpLeft(grid));

module.exports = {
    fibonacci,
    isPrime,
    primeFactors,
    lowestPrimeDivisor,
    isPalindrome,
    sum,
    prod,
    getCols,
    getDiagonals
}
