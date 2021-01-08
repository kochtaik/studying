// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const shopControllers = require('../controllers/shop');

router.get('/', shopControllers.getIndex);
router.get('/products', shopControllers.getShopProducts);
router.get('/products/:productId', shopControllers.getProductId);
router.get('/checkout', shopControllers.getCheckout);
router.get('/cart', shopControllers.getCartContent);
router.post('/cart', shopControllers.postCartContent);
router.post('/delete-from-cart', shopControllers.postDeleteCartItem);
router.get('/orders', shopControllers.getOrders);

module.exports = router;
