const express = require("express");
const app = express();
const path = require('path');

const middlewares = require("./src/middlewares/middlewares_globales.js");
const routes = require("./src/config/routes.js");
const puerto = require("./src/config/config.js");

//MIDDLEWARES GLOBALES
middlewares(app);

//RUTAS
routes(app);
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static('/public'));
//app.use('/static', express.static(__dirname + '/public'));

/////////////////////////////////////////////////
// INICIAR SERVIDOR Y MANEJO DE ERRORES

app.listen(puerto, () => {
    console.log("Servidor en puerto ", puerto);
});

app.use(function(req, res) {
	res.status(404).send("Pagina no encontrada");
})

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send("Error inesperado");
});