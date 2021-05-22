const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new mongoose.Schema({

  salaoId: {
    type: mongoose.Types.ObjectId, //Relacionamento
    ref: 'Salao', //Referenciando o Salao
    required: true,
  },
  especialidade: [{
    type: mongoose.Types.ObjectId,
    ref: 'Servico',
    required: true,
  }],
  colaboradores: [{
    type: mongoose.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
  }],
  dias: {
    type: [Array], //Só pode ser um array de números
    required: true,
  },
  inicio: {
    type: Date,
    required: true,
  },
  fim: {
    type: Date,
    required: true,
  },
  dataCdastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Horario', horario);
