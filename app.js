const express = require("express");
const connDB = require("./config/mongodb");
const routerPessoa = require("./routes/routerPessoa");

const app = express();

connDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pessoa", routerPessoa);

module.exports = app;
