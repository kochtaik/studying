// global
const path = require('path');

//third-party
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// mine
const shop = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use(shop);

app.use(errorController.get404Page);

app.listen(3000);
