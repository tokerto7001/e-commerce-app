const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "./server/.env" });
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
app.use(cors());

require('./db/db');

// for parsing the body of the requests
app.use(express.urlencoded({extended : false}))
app.use(express.json());

app.use('*', (req, res, next) => {
  if (!req.originalUrl.includes("/api") ) return res.status(404).send("Not found");
  next();
});

app.use('/api/products', productRouter);
app.use('/api/user', userRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
      status: 'fail',
      message: `Can't find ${req.originalUrl} on this server!`
    });
  });

module.exports = app;