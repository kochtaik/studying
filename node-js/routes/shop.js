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
const data = {
  articles: products,
  pageTitle: 'Shop',
  path: '/',
}
  res.render('shop', data);
});

module.exports = router;
