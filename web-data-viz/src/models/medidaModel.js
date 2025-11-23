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



module.exports = {
    buscarUltimasMedidas
}
