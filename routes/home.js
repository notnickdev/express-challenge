const express = require('express');
const path = require('path');

const router = express.Router();

const dirName = require('../utils/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(dirName, 'views', 'index.html'));
});

module.exports = router;
