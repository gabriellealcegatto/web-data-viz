var express = require("express");
var router = express.Router();

var dashMainController = require("../controllers/dashMainController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /dashMain/listar
    dashMainController.listar(req, res);
});

module.exports = router;