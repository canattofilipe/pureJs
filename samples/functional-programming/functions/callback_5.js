const cart = [
  { name: "pen", quantity: 10, price: 7.99 },
  { name: "printer", quantity: 0, price: 649.5 },
  { name: "notebook", quantity: 4, price: 27.1 },
  { name: "pencil", quantity: 3, price: 5.82 },
  { name: "scissors", quantity: 1, price: 19.2 },
];

const getTotal = (item) => item.quantity * item.price;
const sum = (acc, el) => {
  console.log(acc, el);
  return acc + el;
};

const finalTotal = cart.map(getTotal).reduce(sum);

console.log(finalTotal);
