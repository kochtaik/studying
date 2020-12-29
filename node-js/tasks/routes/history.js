const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/history', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'history.html'));
});

module.exports = router;