const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../database/url-shortener.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    db.run(
      'CREATE TABLE IF NOT EXISTS urls (id INTEGER PRIMARY KEY, shortUrl TEXT, longUrl TEXT)',
      (createErr) => {
        if (createErr) {
          console.error('Error creating table:', createErr.message);
        }
      }
    );
  }
});

module.exports = db;
