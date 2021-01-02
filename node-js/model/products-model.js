const fs = require('fs');
const path = require('path');
const PATH_TO_DATA = path.join(__dirname, '../', 'data', 'products-data.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  static readProductsFile(cb) {
    fs.readFile(PATH_TO_DATA, (err, content) => {
      if (err) {
        cb([]);
      }
      else cb(JSON.parse(content));
    });
  }

  save() {
    const callback = (products) => {
      products.push(this);
      fs.writeFile(PATH_TO_DATA, JSON.stringify(products), err => {
        console.log(err);
      });
    };
    Product.readProductsFile(callback);
  }

  static getProducts(cb) {
    Product.readProductsFile(cb);
  }
};
