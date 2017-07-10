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

module.exports = {
    fibonacci,
    isPrime,
    primeFactors,
    lowestPrimeDivisor,
    isPalindrome
}
