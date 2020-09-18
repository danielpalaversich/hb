const jwt = require("jsonwebtoken");
const jwtClave = require("../config/config.js");

let usuario_origen = "";

let bd = [
    {   
        id: 0,
        nombre: "Daniel",
        apellido: "Palaversich",
        email: "daniel@hb.com",
        pass: "acamica",
        caja: 1000,
        admin: false
    },
    {
        id: 1,
        nombre: "German",
        apellido: "Saracca",
        email: "german@hb.com",
        pass: "acamica",
        caja: 10000,
        admin: true
    },
    {
        id: 2,
        nombre: "Santiago",
        apellido: "Prono",
        email: "santiago@hb.com",
        pass: "acamica",
        caja: 1000,
        admin: false
    }
]

function loginConToken(req, res) {

    const {email, pass} = req.body;

    let emailLogin = bd.findIndex(elem => elem.email === email);
    let passwordLogin = bd.findIndex(elem => elem.pass === pass);

    if((emailLogin >= 0)
       && (passwordLogin >= 0)) {

        var token = jwt.sign({

            check: true,
            id: bd[emailLogin].id,
            nombre: bd[emailLogin].nombre,
            admin: bd[emailLogin].admin

        }, jwtClave);

        let respuesta = {

            error: false,
            codigo: 202,
            mensaje: "Bienvenido " + bd[emailLogin].nombre,
            token: token,
            admin: bd[emailLogin].admin
        };

        console.log("Bienvenido " + bd[emailLogin].nombre)

        res.status(202).send(respuesta);

    }else {
        let respuesta = {
            error: true,
            codigo: 404,
            mensaje: "Usuario no encontrado",
        }
        res.status(404).send(respuesta);
    }
}

module.exports = {loginConToken, bd, usuario_origen}