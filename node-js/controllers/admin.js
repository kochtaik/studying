const Product = require('../model/products-model');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { pageTitle: 'Add product',
  path: '/admin/add-product',
  activeAdmin: true,
  productCss: true,
  formsCss: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getAdminProductsList = (req, res, next) => {
  Product.getProducts((products) => {
    const adminProductsData = {
      articles: products,
      pageTitle: 'Products',
      path: '/admin/products',
    };
    res.render('admin/admin-products-list', adminProductsData);
  });
};