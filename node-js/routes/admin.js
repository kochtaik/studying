// global
const path = require('path');

// third-party
const express = require('express');
const router = express.Router();

// mine
const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
  console.log(req.body);
});

module.exports = router;