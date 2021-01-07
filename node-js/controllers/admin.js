const Product = require('../model/products-model');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
  pageTitle: 'Add product',
  path: '/admin/add-product',
  editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) res.redirect('/');
  const { productId } = req.params;
  Product.getProductData(productId, (product) => {
    if (!product) {
      res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product,
    });  
  })
};

exports.postEditProduct = (req, res, next) => {
  const { title, imageUrl, price, description, productId } = req.body;
  const updatedProduct = new Product(productId, title, imageUrl, price, description)
  updatedProduct.save();
  res.redirect('/admin/products');
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