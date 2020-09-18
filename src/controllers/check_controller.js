function check(req, res) {

    const { admin, nombre } = req.user;

    console.log(req.user);

    const respuesta = {

        error: false,
        codigo: 202,
        nombre: nombre,
        admin: admin,
        mensaje: "TODO PIOLA"
    }

    res.status(202).send(respuesta);
}

module.exports = check;