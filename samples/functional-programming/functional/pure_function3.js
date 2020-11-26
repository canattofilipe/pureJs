let execQuantity = 0;

// example of pure functions
function sum(a, b) {
  execQuantity++;
  return a + b;
}

console.log(execQuantity);
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(sum(68, 31));
console.log(execQuantity);
