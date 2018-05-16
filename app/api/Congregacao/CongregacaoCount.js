const _ = require('lodash')
const Congregacao = require('../Congregacao/Congregacao')


const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(500).json({ errors })
}

function getCongregacaoByMinisterio(req,res){
    
    const ministerio = req.body.ministerio

    Congregacao.count({ministerio: ministerio}, function(err,result){
        if(err){
            return sendErrorsFromDB(res, err)
        }
        else{
            res.status(200).send({count: result})
        }
    })

}

module.exports = { getCongregacaoByMinisterio }
