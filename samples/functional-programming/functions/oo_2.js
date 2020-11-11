class Product {
  _code = 2;
  constructor(name, price, discount = 0.15) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  get name() {
    return `name: ${this._name}`;
  }

  set name(name) {
    this._name = name.toUpperCase();
  }

  get price() {
    return this._price;
  }

  set price(price) {
    if (price >= 0) {
      this._price = price;
    }
  }

  get finalPrice() {
    return this.price * (1 - this.discount);
  }
}

const p1 = new Product("Pencil", 8.59);
p1.price = -20;
console.log(p1.name);
console.log(p1.price);

const p2 = new Product("Refrigerator", 2345.98);
console.log(p2.price);
console.log(p2.code);
console.log(p2.finalPrice);

// expected output
// 8.59
// 2345.98
// undefined
// 1994.0829999999999
