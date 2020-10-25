// #1
console.log("#1");
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

// #2
console.log("#2");
const cart = [
  { name: "pen", quantity: 10, price: 7.99 },
  { name: "printer", quantity: 4, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

const getName = (e) => e.name;
console.log(cart.map(getName));

const getTotal = (e) => e.quantity * e.price;
const total = cart.map(getTotal);
console.log(total);

// #3
// my custom map function
console.log("#3");
Array.prototype.myMap = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};

console.log(cart.myMap((e) => e.name));
console.log(cart.myMap((e) => e.quantity * e.price));
