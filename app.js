require('dotenv').config();
const mongoose = require('mongoose');
var express = require('express');

const routerPessoa = require('./routes/routerPessoa');

var app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pessoa', routerPessoa);

module.exports = app;
