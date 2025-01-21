const mongoose = require("mongoose");
const Pessoa = require("../models/modelPessoa");

async function criar(req, res) {
  const pessoa = await Pessoa.create(req.body);
  res.status(201).json(pessoa);
}

module.exports = { criar };
