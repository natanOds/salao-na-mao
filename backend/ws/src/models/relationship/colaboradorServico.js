const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
  servicoId: {
    type: mongoose.Types.ObjectId, //Relacionamento
    ref: 'Servico', //Referenciando o Salao
    required: true,
  },
  status: {
    type: String,
    enum: ['A', 'I'],
    required: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico);