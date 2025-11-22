var database = require("../database/config")
function listar() {
    var instrucao = `
        SELECT*FROM usuario
JOIN quantidade ON
idUsuario = quantidade.fkUsuario
JOIN album ON
idAlbum = quantidade.fkAlbum;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};