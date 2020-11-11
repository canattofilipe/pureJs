// constructor function
function Product(name, price, discount = 0.15) {
  // private
  let code = 2;

  // public
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.finalPrice = function () {
    return this.price * (1 - this.discount);
  };
}

const p1 = new Product("Pencil", 8.59);
console.log(p1.name);

const p2 = new Product("Refrigerator", 2345.98);
console.log(p2.price);
console.log(p2.code);
console.log(p2.finalPrice());

// expected output
// Pencil
// 2345.98
// undefined
// 1994.0829999999999
