const fs = require('fs');
const path = require('path');
const PATH_TO_DATA = path.join(__dirname, '../', 'data', 'products-data.json');

module.exports = class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  static readProductsFile(cb) { // get all the products from the storage
    fs.readFile(PATH_TO_DATA, (err, content) => {
      if (err) {
        cb([]);
      }
      else cb(JSON.parse(content));
    });
  }

  save() {
    Product.getProducts((products) => {
      if (this.id) {
        const updatedProductIdx = products.findIndex((product) => this.id === product.id);
        const productsListCopy = [...products]
        productsListCopy[updatedProductIdx] = this;
        fs.writeFile(PATH_TO_DATA, JSON.stringify(productsListCopy), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        const callback = (products) => {
          products.push(this);
          fs.writeFile(PATH_TO_DATA, JSON.stringify(products), err => {
            console.log(err);
          });
        };
        Product.readProductsFile(callback);
      }
    });
  }

  static getProducts(cb) {
    Product.readProductsFile(cb);
  }

  static getProductData(id, cb) {
    Product.readProductsFile((products => {
      const product = products.find((prod) => prod.id === id);
      cb(product);
    }))
  }
};
