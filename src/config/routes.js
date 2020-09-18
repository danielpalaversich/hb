const ingreso = require("../controllers/ingreso_controller.js"); //para saber si el usuario está logeado o no
const registro = require("../controllers/registro_controller.js");
const admin = require("../controllers/admin_controller.js");
const usuario = require("../controllers/usuario_controller.js");
const check = require("../controllers/check_controller.js");

module.exports = function(app) {

	app.post("/ingreso", ingreso.loginConToken);

	app.post("/registro", registro);

	app.post("/admin", admin);
	app.get("/admin", check);

	app.post("/usuario", usuario);
	app.get("/usuario", check);

}