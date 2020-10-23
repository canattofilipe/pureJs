function exec(fn, a, b) {
  return fn(a, b);
}

const sum = (a, b) => console.log(a + b);
const subtract = (a, b) => console.log(a - b);

exec(sum, 10, 20);
exec(subtract, 10, 20);

const fn = () => console.log("Hi");
setInterval(fn, 1000);

setInterval(() => {
  console.log("Hello");
}, 1000);
