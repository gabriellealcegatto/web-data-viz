var express = require("express");
var router = express.Router();


//Importando a controller que vai ser criada posteriormente:**


var albumController = require("../controllers/albumController");


//Criando a rota que vai indicar /carros/cadastrar ao ser acessada pelo front-end. O /cadastrar é do tipo post e o /listar é do tipo get:**

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    albumController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    albumController.listar(req, res);
});

module.exports = router;