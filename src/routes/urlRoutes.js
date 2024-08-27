const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');


// Homepage route
router.get('/', (req, res) => {
    res.json({ message: "Welcome to the URL Shortening API" });
  });
  
router.post('/shorten', urlController.shortenUrl);
router.get('/:shortUrl', urlController.redirectUrl);

module.exports = router;
