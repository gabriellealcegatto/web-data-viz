
CREATE DATABASE aquatech;

USE aquatech;



CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE album (
idAlbum INT PRIMARY KEY AUTO_INCREMENT, 
nomeAlbum VARCHAR(45),
tempo INT
);

INSERT INTO album VALUES
(DEFAULT, 'Antichrist Superstar', 61),
(DEFAULT, 'Mechanical Animals', 77),
(DEFAULT, 'Holy Wood', 73),
(DEFAULT, 'The Golden Age of Grotesque', 57),
(DEFAULT, 'Eat Me, Drink Me', 52),
(DEFAULT, 'The High End of Low', 76),
(DEFAULT, 'Born Villain', 50),
(DEFAULT, 'The Pale Emperor', 52),
(DEFAULT, 'Heaven Upside Down', 47),
(DEFAULT, 'We Arw Chaos', 42),
(DEFAULT, 'One Assassination Under God', 42);


CREATE TABLE quantidade(
idVezes INT PRIMARY KEY AUTO_INCREMENT,
vezes INT,
fkUsuario INT,
fkAlbum INT,
CONSTRAINT vezesUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
CONSTRAINT vezesAlbum FOREIGN KEY (fkAlbum) REFERENCES album (idAlbum)
);





SELECT vezes,
nome2
 FROM quantidade
JOIN album ON fkAlbum = album.idAlbum
WHERE fkUsuario = 1;


