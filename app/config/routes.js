const express = require('express')

module.exports = function(server) {

  // API routes
  const router = express.Router()
  server.use('/api', router)
  router.get('/', (req, res) => res.json({ message: 'Acesso Restrito!' }));
  
  //Criando as Rotas
  const AuthService = require('../api/user/AuthService')
  const CongregacaoService = require('../api/Congregacao/CongregacaoService')
  const CongregacaoCountService = require('../api/congregacao/CongregacaoCount')
  const DepartamentoService = require('../api/Departamento/DepartamentoService')
  const EventoService = require('../api/Evento/EventoService')
  const EventoCountService = require('../api/evento/EventoCount')
  const PessoaService = require('../api/Pessoa/PessoaService')
  const PessoaSummaryService = require('../api/Pessoa/PessoaSummary')
  const PessoaCountService = require('../api/Pessoa/PessoaCount')
  
  //Serviço de Login
  router.post('/login', AuthService.login)
  router.post('/signup', AuthService.signup)    
  //Serviços Congregacao
  CongregacaoService.register(router, '/congregacao')
  router.post('/CongregacaoByMinisterio', CongregacaoCountService.getCongregacaoByMinisterio)
  //Serviços Departamento
  DepartamentoService.register(router,'/departamento')
  //Serviços Evento
  EventoService.register(router,'/evento')
  router.post('/EventoByTipo', EventoCountService.getEventoByTipo)
  //Serviços Pessoa
  PessoaService.register(router,'/pessoa')
  router.route('/PessoaSummary').get(PessoaSummaryService.getSummary)
  router.post('/PessoaByType', PessoaCountService.getCountMembroByType)

}
