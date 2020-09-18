const ingreso = require("./ingreso_controller.js");

class UsuarioNuevo {

    constructor(id_, nombre_, apellido_, email_, pass_, caja_, admin_) {

        this.id= id_;
        this.nombre = nombre_;
        this.apellido = apellido_;
        this.email = email_;
        this.pass = pass_;
        this.caja = caja_;
        this.admin = admin_;
    }
}

function registro(req, res) {

    const { nombre, apellido, email, pass } = req.body;

    let indiceEmail = ingreso.bd.findIndex(elem => elem.email === email);

    if(indiceEmail == -1) {

        let id_contador = ingreso.bd.length;

        let nuevoRegistro = new UsuarioNuevo(id_contador, nombre, apellido, email, pass, 0, false);

        ingreso.bd.push(nuevoRegistro);

        console.log(ingreso.bd);

        let respuesta = {

            error: false,
            codigo: 202,
            mensaje: "Su registro fue exitoso",
        };

        res.status(202).send(respuesta);

    }else {

        let respuesta = {
            error: true,
            codigo: 409,
            mensaje: "Usuario ya registrado"
        }
        res.status(409).send(respuesta);
    }
}

module.exports = registro;