const restful = require('node-restful')
const mongoose = restful.mongoose

const congregacaoSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	ministerio: { type: String, required: true },
	rua: { type: String, required: true },
	bairro: { type: String, required: true },
	cidade: { type: String, required: false },
	estado: { type: String, required: false },
	cep: { type: String, required: false },
	telefone: { type: String, required: true },
	email: { type: String, required: false },
	numero: { type: String, required: false },
	complemento: { type: String, required: false },
	atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Congregacao', congregacaoSchema)
