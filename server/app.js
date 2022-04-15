const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');

require('./db/db');

app.use(express.urlencoded({extended : false}))
app.use(express.json());

app.use('*', (req, res, next) => {
  if (!req.originalUrl.includes("/products")) return res.status(404).json("Not found");
  next();
});

app.use('/products', productRouter);

module.exports = app;