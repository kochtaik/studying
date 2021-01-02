// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const productsControllers = require('../controllers/products');

router.get('/', productsControllers.getShopProducts);

module.exports = router;
