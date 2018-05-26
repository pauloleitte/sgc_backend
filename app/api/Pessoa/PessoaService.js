const Pessoa = require('./Pessoa')
const _ = require('lodash')

Pessoa.methods(['get', 'post', 'put', 'delete'])
Pessoa.updateOptions({new: true, runValidators: true})

Pessoa.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Pessoa.route('count', function(req, res, next){
  Pessoa.count(function(error, value){
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = Pessoa