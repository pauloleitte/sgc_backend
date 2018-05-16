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
  const MembroService = require('../api/Membro/MembroService')
  const MembroSummaryService = require('../api/Membro/MembroSummary')
  const MembroCountService = require('../api/membro/MembroCount')
  
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
  //Serviços Membro
  MembroService.register(router,'/membro')
  router.route('/MembroSummary').get(MembroSummaryService.getSummary)
  router.post('/MembroByType', MembroCountService.getCountMembroByType)

}
