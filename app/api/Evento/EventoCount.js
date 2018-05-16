const _ = require('lodash')
const Evento = require('../Evento/Evento')


const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(500).json({ errors })
}

function getEventoByTipo(req,res){

    const tipo = req.body.tipo

    Evento.count({tipo: tipo},function(err,result){
        if(err){
            return sendErrorsFromDB(res, err)
        }
        else{
            res.status(200).send({count: result})
        }

    })
}

module.exports = { getEventoByTipo }