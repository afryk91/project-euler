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

let isPrimeOptimal = n => {
    if (n === 1) return false;
    if (n < 4) return true;
    if (n % 2 === 0) return false;
    if (n < 9) return true;
    if (n % 3 === 0) return false;
    return _.range(5, Math.floor(Math.sqrt(n)) + 1, 6).reduce((result, f) => {
        if (!result) return false;
        if (n % f === 0) return false;
        if (n % (f + 2) === 0) return false;
        return true;
    }, true);
}

let primeFactors = n => {
    if (n === 1) {
        return;
    }
    let LPD = lowestPrimeDivisor(n);
    return _.compact([LPD].concat(primeFactors(n/LPD)));
}

let lowestPrimeDivisor = n => {
    return lazy.generate(i => i + 1)
        .filter(isPrimeOptimal)
        .dropWhile(p => p < n && n % p)
        .first();
}

let isPalindrome = x => x.toString().split("").reverse().join("") === x.toString();

let sum = array => array.reduce((sum, n) => sum + n, 0);

let prod = array => _.reduce(array, (p, n) => p * n, 1);

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

let findDivisors = number => _.unique(number <= 2 ? [1, number] : _.range(1, number / 2)
    .reduce((divisors, div) => !(number % div) ? divisors.concat([div, number/div]) : divisors, []));

let countOccurences = (accumulator, value) => {
    let acc = _.clone(accumulator);
    if(acc[value]) {
        acc[value] = accumulator[value] + 1;
    } else {
        acc[value] = 1;
    }
    return acc;
}

let findNumberOfDivisors = number => {
    if (number === 1) {
        return 1;
    }
    const counts = primeFactors(number).reduce(countOccurences, {});
    return _.reduce(counts, (divisorsCount, factorCount) => divisorsCount * (factorCount + 1), 1)
}

module.exports = {
    fibonacci,
    isPrime,
    isPrimeOptimal,
    primeFactors,
    lowestPrimeDivisor,
    isPalindrome,
    sum,
    prod,
    getCols,
    getDiagonals,
    findDivisors,
    findNumberOfDivisors
}
