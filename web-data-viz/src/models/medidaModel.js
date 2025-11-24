
var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    var instrucaoSql = ` SELECT vezes,
nomeAlbum
 FROM quantidade
JOIN album ON fkAlbum = album.idAlbum
                    WHERE fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function  buscarMedidaMaxima(idUsuario){
    var instrucaoSql = `SELECT a.nomeAlbum, q.vezes
FROM quantidade q
JOIN album a ON a.idAlbum = q.fkAlbum
WHERE q.fkUsuario = ${idUsuario}
ORDER BY q.vezes DESC
LIMIT 1;`
    return database.executar(instrucaoSql);
}


function buscarTempoMaximo(idUsuario){

   var instrucaoSql = `SELECT SUM(TEMPO) AS tempo FROM album
JOIN quantidade ON idAlbum = quantidade.fkAlbum
JOIN usuario ON quantidade.fkAlbum = usuario.idUsuario
WHERE idUsuario = ${idUsuario};`
    return database.executar(instrucaoSql);
}


function buscarAlbum(idUsuario){
    var instrucaoSql = `SELECT nomeAlbum FROM album
JOIN quantidade ON idAlbum = quantidade.fkAlbum
JOIN usuario ON idUsuario = quantidade.fkUsuario
WHERE idUsuario = ${idUsuario}
ORDER BY vezes
LIMIT 1
;`
     return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidaMaxima,
    buscarTempoMaximo,
    buscarAlbum
}
