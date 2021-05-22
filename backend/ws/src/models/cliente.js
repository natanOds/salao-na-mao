const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
  telefone: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A',
  },
  sexo: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    default: Date.now,
  },
  documento: {
    tipo: {
      type: String,
      required: true,
      enum: ['individual', 'corporation'],
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endereço: {
    cidade: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },


});

module.exports = mongoose.model('Cliente', cliente);