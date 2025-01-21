const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("Pessoa", pessoaSchema);
