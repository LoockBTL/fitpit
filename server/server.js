const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const productApiRoutes = require('./routes/routes-products')
const providersApiRoutes = require('./routes/routes-providers')
const orderApiRoutes = require('./routes/routes-orders')
const declarationApiRoutes = require('./routes/routes-declaration')

const errorAlert = chalk.bgHex('#f50000').bold;
const acceptAlert = chalk.bgHex('#00852c').bold;

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(acceptAlert(`Connected to DB | Success`)))
  .catch((error) => console.log(errorAlert(error)))

app.listen(process.env.NEWPORT, 'localhost', (error) => {
  error
    ? console.log(errorAlert(error))
    : console.log(acceptAlert(`Connected to port: ${process.env.NEWPORT}`))
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(productApiRoutes);
app.use(providersApiRoutes);
app.use(orderApiRoutes);
app.use(declarationApiRoutes);

