const express = require('express');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server...');

app.use(bodyParser.json());


app.use('/', (req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
});

app.use('/', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
