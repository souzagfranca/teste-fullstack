const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  fantasia: { type: String, trim: true, required: true },
  razaosocial: { type: String, trim: true, required: true },
  cpfcnpj: { type: String, trim: true, required: true },
  endereco: { type: String, trim: true },
  cidade: { type: String, trim: true, required: true },
  bairro: { type: String, trim: true },
  uf: { type: String, trim: true, required: true },
  cep: { type: Number, trim: true },
  contato: { type: String, trim: true },
  telefone: { type: Number, trim: true },
  telefone: { type: String, trim: true },
  status: { type: Boolean },
});

module.exports = mongoose.model("Pessoa", pessoaSchema);
