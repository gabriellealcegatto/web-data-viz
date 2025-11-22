var albumModel = require("../models/albumModel");

function listar(req, res) {
    albumModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var vezes = req.body.vezesServer;
    var fkUsuario = req.body.fkUsuario;
    var fkAlbum = req.body.fkAlbumServer;

    if (vezes == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    albumModel.cadastrar(vezes, fkUsuario, fkAlbum).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}