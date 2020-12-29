const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const historyPage = require('./routes/history');
const writePage = require('./routes/write');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});
app.use(writePage);
app.use(historyPage);

app.listen(8080);

