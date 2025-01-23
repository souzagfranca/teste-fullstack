const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, trim: true, required: true },
  cidade: { type: String, trim: true, required: true },
  uf: { type: String, trim: true, required: true },
  status: { type: Boolean },
});

module.exports = mongoose.model("Pessoa", pessoaSchema);
