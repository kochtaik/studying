// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const rootDir = require('../utils/path');
const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product');
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
