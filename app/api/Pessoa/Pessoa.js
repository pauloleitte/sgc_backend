const restful = require('node-restful')
const mongoose = restful.mongoose

const PessoaFinanceiro = new mongoose.Schema({
	valor: { type: Number, min: 0, required: false },
	data_pagamento: { type: String, required: false }
})

const pessoaSchema = new mongoose.Schema({

	nome: { type: String, required: true },
	telefone: { type: String, required: false },
	email: { type: String, required: false },
	dataNascimento: { type: String, required: true },
	sexo: { type: String, required: true },
	estado_civil: { type: String, required: true },
	rua: { type: String, required: true },
	complemento: { type: String, required: false },
	numero: { type: String, required: false },
	bairro: { type: String, required: true },
	cidade: { type: String, required: false },
	estado: { type: String, required: false },
	cep: { type: String, required: false },
	tipo: { type: String, required: false },
	atualizacao: { type: Date, default: Date.now },
	dizimos: [PessoaFinanceiro]
})

module.exports = restful.model('Pessoa', pessoaSchema)
