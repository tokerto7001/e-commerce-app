const express = require('express');
const app = express();
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: "./server/.env" });

require('./db/db');

app.use(cors());
app.use(express.urlencoded({extended : false}))
app.use(express.json());

// app.use('*', (req, res, next) => {
//   if (!req.originalUrl.includes("/products") || !req.originalUrl.includes('/users')) return res.status(404).json("Not found");
//   next();
// });

app.use('/products', productRouter);
app.use('/user', userRouter);

module.exports = app;