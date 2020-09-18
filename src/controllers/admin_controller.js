const ingreso = require("./ingreso_controller.js");
const jwt = require("jsonwebtoken");
const jwtClave = require("../config/config.js");

function admin(req, res) {

    const { id, monto } = req.body;

    //OBETENER ADMIN DESDE TOKEN
    let token = req.headers.authorization.split(' ')[1];
	let decoded = jwt.verify(token, jwtClave);

    //COMPROBAR SI EXTISTE EL ID
    let comprobar_id = ingreso.bd.findIndex(elem => elem.id === id);

    if(comprobar_id != -1 && !isNaN(monto) && decoded.admin == true) {

    	let monto_seguro = parseInt(monto);
    	let usuario_destino = ingreso.bd[comprobar_id];

    	//asigno el monto
    	usuario_destino.caja += monto_seguro;

    	let objet_resp = {
    		mensaje: "Transferencia exitosa",
    		usuario: usuario_destino.nombre,
    		monto: monto_seguro,
    		total: usuario_destino.caja
    	}

        let respuesta = {

            error: false,
            codigo: 202,
            mensaje: objet_resp
        };

        console.log("Transferencia exitosa a " + usuario_destino.nombre + " - Monto: $" + monto_seguro + " - Total caja: $" + usuario_destino.caja)
        res.status(202).send(respuesta);

    }else {

    	if (decoded.admin == true) {

        let respuesta = {
            error: true,
            codigo: 409,
            mensaje: "El usuario indicado no existe o el valor es incorrecto",
        };
        res.status(409).send(respuesta);

	    } else {

        let respuesta = {
            error: true,
            codigo: 409,
            mensaje: "No tiene los permisos necesarios",
        };
        res.status(409).send(respuesta);

	    }
    }

}

module.exports = admin;