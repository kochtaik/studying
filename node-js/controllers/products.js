const Product = require('../model/products-model');
const productsModel = require('../model/products-model');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add product',
  path: '/admin/add-product',
  activeAdmin: true,
  productCss: true,
  formsCss: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getShopProducts = (req, res, next) => {
  Product.getProducts((products) => {
    const data = {
      articles: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
    };
    res.render('shop', data);
  });
};
