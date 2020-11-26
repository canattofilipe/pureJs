// example of impure function
function genRandomNumber(min, max) {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
}

console.log(genRandomNumber(1, 10000));
console.log(genRandomNumber(1, 10000));
console.log(genRandomNumber(1, 10000));
console.log(genRandomNumber(1, 10000));
console.log(genRandomNumber(1, 10000));
console.log(genRandomNumber(1, 10000));
