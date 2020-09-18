const express_jwt = require("express-jwt");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const helmet = require('helmet');

// Use JWT auth to secure the API
const unprotected = [
	  /\/ingreso*/,
	  /\/registro*/,
    /favicon.ico/,
    /\/check*/
];

const token = require("../config/config.js"); //importo la key

let limiter = rateLimit({
    windowMs: 60 * 60 * 1000,  //60 minutos
    max: 10, //10 peticiones
    message: "Se superó el límite de 10 peticiones/hora"
});

module.exports = function(app) {

    app.use(cors());

    app.use(bodyParser.json());

    app.use(helmet());

    //app.use(limiter);

    app.use(express_jwt({ secret: token, algorithms: ["HS256"]}).unless({path: unprotected}));
}