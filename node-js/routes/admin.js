const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="product-type"><button type="submit">Send</button></form>');
});

router.post('/product', (req, res, next) => {
  res.redirect('/');
  console.log(req.body);
});

module.exports = router;