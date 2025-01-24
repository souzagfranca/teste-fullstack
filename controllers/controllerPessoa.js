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

async function buscarId(req, res, next) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const pessoa = await Pessoa.findOne({ _id: id });
    if (pessoa) {
      next();
    } else {
      res.status(404).json({ msg: "Cadastro não encontrado" });
    }
  } catch (error) {
    res.status(400).json({ msg: "ID Inválido" });
  }
}

async function deletaPessoa(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  await Pessoa.findOneAndDelete({ _id: id });
  res.status(204).end();
}

module.exports = { criar, listarPessoas, buscarId, deletaPessoa };
