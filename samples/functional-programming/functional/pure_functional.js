// A pure function is a function that the returned value
// is determined ONLY by the input values
// without side effects (change things out of function scope)

const PI = 3.14;

// example of impure function (PI is a external thing)
function circleArea(radius) {
  return radius * radius * PI;
}

// example of pure function
function circleAreaPure(radius, pi) {
  return radius * radius * pi;
}

console.log(circleArea(10));
console.log(circleAreaPure(10, 3.14));
