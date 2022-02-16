const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 14000;
const host = process.env.HOST || '0.0.0.0';

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.static('public'));
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, host, error => {
  if (error) throw error;
  console.log(`Server environment "${env}".`);
  console.log(`Server listening at ${host}:${port}.`);
});
