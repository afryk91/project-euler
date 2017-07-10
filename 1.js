const _ = require("underscore");

let sumOf3And5Multiples = (range) => range.filter(num => num % 3 === 0 || num % 5 === 0).reduce((sum, num) => sum + num);
let input = _.range(1,1000);

console.log(sumOf3And5Multiples(input));
