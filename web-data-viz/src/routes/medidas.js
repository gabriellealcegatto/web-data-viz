var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/buscarMedidaMaxima/:idUsuario", function (req,res){
    medidaController.buscarMedidaMaxima(req,res);
});

router.get("/buscarTempoMaximo/:idUsuario", function (req,res){
    medidaController.buscarTempoMaximo(req,res);
});

router.get("/buscarAlbum/:idUsuario", function (req,res){
    medidaController.buscarAlbum(req,res);
});


module.exports = router;