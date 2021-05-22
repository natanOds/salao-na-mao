const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
  colaboradorId: {
    type: mongoose.Types.ObjectId, //Relacionamento
    ref: 'Colaborador', //Referenciando o Salao
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

module.exports = mongoose.model('SalaoColaborador', salaoColaborador);