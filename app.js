const express = require("express");
const connDB = require("./config/mongodb");
const routerPessoa = require("./routes/routerPessoa");

const app = express();
const cors = require("cors");

connDB();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pessoa", routerPessoa);

module.exports = app;
