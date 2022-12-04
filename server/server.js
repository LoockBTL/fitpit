const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');

const errorAlert = chalk.bgHex('#f50000').bold;
const acceptAlert = chalk.bgHex('#00852c').bold;

dotenv.config();
const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(acceptAlert(`Connected to DB: ${process.env.DB}`)))
  .catch((error) => console.log(errorAlert(error)))

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorAlert(error))
    : console.log(acceptAlert(`Connected to port: ${process.env.PORT}`))
})
