const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório'],
  },
  telefone: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    default: null,
  },
  foto: {
    type: String,
    default: true,
  },
  dataNascimento: {
    type: String, // YYYY-MM-DD
    required: true,
  },
  sexo: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A',
  },
  contaBancaria: { //CONSTRUINDO UM OBJETO DO contaBancaria
    titular: {
      type: String,
      required: true,
    },
    cpfCnpj: {
      type: String,
      required: true,
    },
    banco:{
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    agencia: {
      type: String,
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
    dv: {
      type: String,
      required: true,
    },
  },
  recipientId: {
    type: String,
    required: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Colaborador', colaborador);