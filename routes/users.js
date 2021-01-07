const express = require('express');
const path = require('path');

const router = express.Router();

const dirName = require('../utils/path');

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(dirName, 'views', 'user.html'));
});

module.exports = router;
