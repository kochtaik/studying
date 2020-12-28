// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const rootDir = require('../utils/path');
const admin = require('./admin');

router.get('/', (req, res, next) => {
const { products } = admin;
  res.render('shop', {articles: products, pageTitle: 'Shop'});
});

module.exports = router;
