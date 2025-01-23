const mongoose = require("mongoose");
const Pessoa = require("../models/modelPessoa");

async function criar(req, res) {
  const pessoa = await Pessoa.create(req.body);
  res.status(201).json(pessoa);
}

async function listarPessoas(req, res) {
  const pessoas = await Pessoa.find({});
  res.json(pessoas);
}

module.exports = { criar, listarPessoas };
