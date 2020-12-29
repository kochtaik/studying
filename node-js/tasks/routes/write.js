const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/write', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'write.html'));
});

router.post('/write', (req, res) => {
  res.redirect('/');
  console.log(req.body);
})

module.exports = router;