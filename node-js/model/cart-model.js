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
        cart.products = [...cart.products, { quantity: 1, id: id }];
      }
      cart.totalPrice += +price;
      fs.writeFile(PATH_TO_DATA, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
}

