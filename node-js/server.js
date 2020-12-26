const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="product-type"><button type="submit">Send</button></form>');
});

app.post('/product', (req, res, next) => {
  res.redirect('/');
  console.log(req.body);
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to the main page!</h1>');
});

app.listen(3000);
