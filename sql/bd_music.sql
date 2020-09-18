CREATE DATABASE music;
USE music;
CREATE TABLE bandas(
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(64) NOT NULL,
    integrantes int(48) NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_separacion date ,
    pais varchar(64) NOT NULL,
    primary key(id)
)ENGINE =  InnoDB;
CREATE TABLE canciones(
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(64) NOT NULL,
    duracion int(11) NOT NULL,
    album int(64) NOT NULL,
    banda varchar(64) NOT NULL,
    fecha_publicacion date NOT NULL,
    primary key(id)
)ENGINE =  InnoDB;
CREATE TABLE albums(
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre_album varchar(64) NOT NULL,
    banda varchar(64) NOT NULL,
    fecha_publicacion date NOT NULL,
    primary key(id)
)ENGINE =  InnoDB;