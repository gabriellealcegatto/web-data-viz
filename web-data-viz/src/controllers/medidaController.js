var medidaModel = require("../models/medidaModel");


function buscarUltimasMedidas(req, res) {

    var idUsuario = req.params.idUsuario;

    medidaModel.buscarUltimasMedidas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



 function buscarMedidaMaxima(req,res){
    var user = req.params.idUsuario;
    medidaModel.buscarMedidaMaxima(user)
    .then(function(resposta){
        res.json(resposta)
    }).catch(function(erro){
        res.status(500).jason(erro.sqlMessage);
    })
 }

  function buscarTempoMaximo(req,res){
    var user2 = req.params.idUsuario;
    medidaModel.buscarTempoMaximo(user2)
    .then(function(resposta){
        res.json(resposta)
    }).catch(function(erro){
        res.status(500).jason(erro.sqlMessage);
    })
 }
 
 function buscarAlbum(req,res){
    var user2 = req.params.idUsuario;
    medidaModel.buscarAlbum(user2)
    .then(function(resposta){
        res.json(resposta)
    }).catch(function(erro){
        res.status(500).jason(erro.sqlMessage);
    })
 }


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidaMaxima,
    buscarTempoMaximo,
    buscarAlbum

}