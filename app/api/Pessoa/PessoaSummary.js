const _ = require('lodash')
const Pessoa = require('../Pessoa/Pessoa')

// Mais uma função middleware
function getSummary(req, res) {
  Pessoa.aggregate({
    $project: {dizimo: {$sum: "$dizimos.valor"}}
  }, {
    $group: {_id: null, dizimo: {$sum: "$dizimo"}}
  }, {
    $project: {_id: 0, dizimo: 1}
  }, function(error, result) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(_.defaults(result[0], {dizimo: 0}))
    }
  })
}

module.exports = { getSummary }