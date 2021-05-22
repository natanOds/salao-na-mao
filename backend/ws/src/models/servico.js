const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
  
  salaoId: {
    type: mongoose.Types.ObjectId, //Relacionamento
    ref: 'Salao', //Referenciando o Salao
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  duracao: {
    type: Number,
    required: true,
  },
  comissao: { //Porcentagem de comissão sobre o preço
    type: Number,
    required: true,
  },
  recorrencia: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: required,
    enum: ['A', 'I', 'E'],
    default: 'A',
  },
  dataCadastro: {
    type: Date,

    default: Date.now,
  },

});

module.exports = mongoose.model('Servico', servico);