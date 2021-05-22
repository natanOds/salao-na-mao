const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId, //Relacionamento
    ref: 'Servico', //Referenciando o Salao
    required: true,
  },
  clienteId:{
    type: mongoose.Types.ObjectId,
    ref: 'Cliente',
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

module.exports = mongoose.model('SalaoCliente', salaoCliente);