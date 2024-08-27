const shortid = require('shortid');
const urlModel = require('../models/urlModel');

function shortenUrl(req, res) {
  const longUrl = req.body.longUrl;
  const shortUrl = shortid.generate();

  urlModel.insertUrl(shortUrl, longUrl, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to shorten the URL.' });
    }
    res.json({ shortUrl });
  });
}

function redirectUrl(req, res) {
  const shortUrl = req.params.shortUrl;

  urlModel.findUrlByShortCode(shortUrl, (err, longUrl) => {
    if (err || !longUrl) {
      return res.status(404).json({ error: 'URL not found.' });
    }
    res.redirect(longUrl);
  });
}

module.exports = {
  shortenUrl,
  redirectUrl,
};
