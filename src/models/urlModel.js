const db = require('../config/db');

function insertUrl(shortUrl, longUrl, callback) {
  const query = 'INSERT INTO urls (shortUrl, longUrl) VALUES (?, ?)';
  db.run(query, [shortUrl, longUrl], function(err) {
    callback(err, this ? this.lastID : null);
  });
}

function findUrlByShortCode(shortUrl, callback) {
  const query = 'SELECT longUrl FROM urls WHERE shortUrl = ?';
  db.get(query, [shortUrl], (err, row) => {
    callback(err, row ? row.longUrl : null);
  });
}

module.exports = {
  insertUrl,
  findUrlByShortCode,
};
