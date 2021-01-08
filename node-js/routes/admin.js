// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const adminControllers = require('../controllers/admin');

router.get('/add-product', adminControllers.getAddProduct);
router.post('/add-product', adminControllers.postAddProduct);
router.get('/edit-product/:productId', adminControllers.getEditProduct);
router.get('/products', adminControllers.getAdminProductsList);
router.post('/edit-product', adminControllers.postEditProduct);
router.post('/delete-product', adminControllers.postDeleteProduct);

module.exports = router;
