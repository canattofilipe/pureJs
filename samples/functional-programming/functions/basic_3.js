// arrow function
const hello = () => console.log("hello!");
hello();

const hi = (name) => `Hi ${name}`;
console.log(hi("Thommy"));

// now you can pass any param, everything will converted to an array
const sum = (...numbers) => {
  let total = 0;
  for (n of numbers) {
    total += n;
  }
  return total;
};

const multiply = (a, b) => a * b;

console.log(sum(40, 5.9, 22));
console.log(sum(40, 5.9, 22, 25));
console.log(multiply(2, 5));

// this
Array.prototype.log = function () {
  console.log(this);
};

Array.prototype.logArrow = () => console.log(this);

const numbers = [1, 2, 3];
numbers.log();
numbers.logArrow();
