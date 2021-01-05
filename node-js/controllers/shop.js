const Product = require('../model/products-model');
const Cart = require('../model/cart-model');

exports.getShopProducts = (req, res, next) => {
  Product.getProducts((products) => {
    const shopProuctsData = {
      articles: products,
      pageTitle: 'Products list',
      path: '/products',
    };
    res.render('shop/user-products-list', shopProuctsData);
  });
};

exports.getProductId = (req, res, next) => {
  const { productId } = req.params;
  Product.getProductData(productId, (product) => {
    const productDetalisData = {
      pageTitle: product.title,
      path: '/products',
      product: product,
    }
    res.render('shop/product-details', productDetalisData);
  });
}

exports.getCartContent = (req, res, next) => {
  const cartContentData = {
    pageTitle: 'Cart',
    path: '/cart',
  };
  res.render(('shop/cart'), cartContentData);
};

exports.postCartContent = (req, res, next) => {
  const { productId } = req.body;
  Product.getProductData(productId, (product) => {
    Cart.addToCart(productId, product.price);
  })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  const ordersData = {
    pageTitle: 'Orders',
    path: '/orders',
  };
  res.render(('shop/orders'), ordersData);
};

exports.getIndex = (req, res, next) => {
  Product.getProducts((products) => {
    const shopProuctsData = {
      articles: products,
      pageTitle: 'Shop',
      path: '/',
    };
    res.render('shop/index', shopProuctsData);
  });
};

exports.getCheckout = (req, res, next) => {
  const checkoutData = {
    pageTitle: 'Checkout',
    path: '/checkout',
  };
  res.render(('shop/checkout'), checkoutData);
}