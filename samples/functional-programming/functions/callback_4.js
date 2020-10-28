const cart = [
  { name: "pen", quantity: 10, price: 7.99 },
  { name: "printer", quantity: 0, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

const getName = (item) => item.name;
const higherThanZero = (item) => item.quantity > 0;
const validItens = cart.filter(higherThanZero).map(getName);
console.log(validItens);

Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const validItens2 = cart.myFilter(higherThanZero).map(getName);
console.log(validItens2);
