const { Router } = require('express');
const {getCountriesHandler, getCountryIdHandler} = require("../handlers/countriesHandlers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:idPais", getCountryIdHandler);

module.exports = countriesRouter;
