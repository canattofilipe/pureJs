function execute(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}`;
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

const r1 = execute(sum, 4, 5, 7)("The sum result is");
const r2 = execute(multiply, 5, 2)("The multiply result is");

console.log(r1);
console.log(r2);
