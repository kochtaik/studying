// global
const path = require('path');

//third-party
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// mine
const shop = require('./routes/shop');
const admin = require('./routes/admin');
const rootDir = require('./utils/path.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', admin);
app.use(shop);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404-page.html'));
});

app.listen(3000);
