const ingreso = require("./ingreso_controller.js");
const jwt = require("jsonwebtoken");
const jwtClave = require("../config/config.js");

function usuario(req, res) {

    const { id, monto } = req.body;

    //OBTENER USUARIO ORIGEN
    let token = req.headers.authorization.split(' ')[1];
	let decoded = jwt.verify(token, jwtClave);
    let comprobar_id_origen = ingreso.bd.findIndex(elem => elem.id === decoded.id);
    let usuario_origen = ingreso.bd[comprobar_id_origen];

    //OBTENER USUARIO DESTINO
    let comprobar_id_destino = ingreso.bd.findIndex(elem => elem.id === id);
   	let usuario_destino = ingreso.bd[comprobar_id_destino];

    if(comprobar_id_destino != -1 && !isNaN(monto)) {

    	let monto_seguro = parseInt(monto);

    	if (usuario_origen.caja >= monto_seguro) {

	    	//asigno el monto a usuario destino
	    	usuario_destino.caja += monto_seguro;
	    	//restar el monto a usuario origen
	    	usuario_origen.caja -= monto_seguro;

	    	let objet_resp = {
	    		mensaje: "Transferencia exitosa",
	    		usuario: usuario_destino.nombre,
	    		monto: monto_seguro,
	    		total: usuario_origen.caja
	    	}

	        let respuesta = {
	            error: false,
	            codigo: 202,
	            mensaje: objet_resp
	        };

	        console.log("Transferencia exitosa a " + usuario_destino.nombre + " - Monto: $" + monto_seguro + " - Total caja: $" + usuario_origen.caja)
	        res.status(202).send(respuesta);

        } else {

	        let respuesta = {
	            error: true,
	            codigo: 409,
	            mensaje: "Operacion rechazada, fondos insuficientes",
	        };
	        res.status(409).send(respuesta);

        }

    } else {

        let respuesta = {
            error: true,
            codigo: 409,
            mensaje: "El usuario indicado no existe o el valor es incorrecto",
        };
        res.status(409).send(respuesta);
    }

}

module.exports = usuario;