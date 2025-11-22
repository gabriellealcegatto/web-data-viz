var database = require("../database/config")
function listar() {
    var instrucao = `
        SELECT * FROM quantidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(vezes, fkUsuario, fkAlbum) {
    var instrucao = `
        INSERT INTO quantidade (vezes, fkUsuario, fkAlbum) VALUES ('${vezes}','${fkUsuario}','${fkAlbum}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};