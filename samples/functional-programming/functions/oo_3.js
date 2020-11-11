class Product {
  _code = 2;
  constructor(name, price, discount = 0.15) {
    this.name = name;
    this.price = price;
    this._discount = discount;
  }
}

Product.prototype.log = function () {
  console.log(
    `Name: ${this.name}, Price: ${this.price}, Discount: ${this._discount}`
  );
};

Object.defineProperty(Product.prototype, "desc", {
  get: function () {
    return this._discount;
  },
  set: function (discount) {
    if (discount >= 0 && discount <= 1) {
      this._discount = discount;
    }
  },
});

Object.defineProperty(Product.prototype, "descString", {
  get: function () {
    return `${this._discount * 100}%`;
  },
});

const p1 = new Product("Pencil", 8.59);
p1.discount = 0;
p1.log();
console.log(p1.desc);
console.log(p1.descString);
