class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export default [
  new Product(1, "Shirt", 19.99, "buy one get the other half off"),
  new Product(2, "hat", 12.99, "buy ten and get one for free"),
  new Product(3, "pants", 45.99, "all jeans are free after five"),
  new Product(4, "dress shirt", 20.99, "whatever you can carry is half off"),
  new Product(5, "leggings", 60.99, "free"),
  new Product(6, "pan", 30.99, "hi there"),
  new Product(7, "pork", 50.99, "hello how are you "),
  new Product(8, "pinky", 5.99, "if its your pinky free"),
  new Product(9, "pool", 200.99, "all jeans are free after five"),
  new Product(10, "rope", 1.99, "all jeans are free after five")
];
