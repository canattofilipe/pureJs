// sum(2)(3)(4)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const total = sum(2)(3)(4);
console.log(total);

const totalAB = sum(2)(3);
console.log(totalAB(5));

// calcular (3)(7)(fn)

function calculate(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function multiply(x, y) {
  return x * y;
}

const product = calculate(6)(6)(multiply);
console.log(product);
