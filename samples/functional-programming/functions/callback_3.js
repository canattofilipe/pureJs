const numbers = [1, 2, 3, 4, 5];
const double = (n) => n * 2;
const doublePlusIndex = (n, i) => n * 2 + i;
const doublePlusIndexPlusArrayLength = (n, i, a) => n * 2 + i + a.length;

console.log(numbers.map(double));
console.log(numbers.map(doublePlusIndex));
console.log(numbers.map(doublePlusIndexPlusArrayLength));

const names = ["Peter", "Jhon", "Mike", "Adan"];
const firstLetter = (e) => e[0];
console.log(names.map(firstLetter));
