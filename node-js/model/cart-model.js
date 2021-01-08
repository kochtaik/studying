const fs = require('fs');
const path = require('path');

const PATH_TO_DATA = path.join(__dirname, '../', 'data', 'cart.json');

module.exports = class Cart {
  static addToCart(id, price) {
    fs.readFile(PATH_TO_DATA, (err, content) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(content);
      }
      // check whether the product exists yet
      const existingProductIdx = cart.products.findIndex((product) => product.id === id);
      const existingProduct = cart.products[existingProductIdx];
      if (existingProduct !== undefined) {
        existingProduct.quantity = existingProduct.quantity + 1;
      } else { // if completely new product
        console.log('cart', cart);
        cart.products = [...cart.products, { quantity: 1, id: id }];
      }
      cart.totalPrice += +price;
      fs.writeFile(PATH_TO_DATA, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static deleteProduct(id, price) {
    fs.readFile(PATH_TO_DATA, (err, content) => {
      if (err) return
      const cartCopy = {...JSON.parse(content)};
      const { products, totalPrice } = cartCopy;
      const productToDelete = products.find((product) => product.id === id);
      if (!productToDelete) return;
      cartCopy.totalPrice = totalPrice - (price * productToDelete.quantity);
      cartCopy.products = products.filter((product) => product.id !== id);
      fs.writeFile(PATH_TO_DATA, JSON.stringify(cartCopy), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static getCart(cb) {
    fs.readFile(PATH_TO_DATA, (err, content) => {
      if (err) cb(null);
      else cb(JSON.parse(content));
    });
  }
}
