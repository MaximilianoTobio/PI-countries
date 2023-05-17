const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getActivityHandler, postActivityHandler } = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
activitiesRouter.get("/", getActivityHandler);
activitiesRouter.post("/", postActivityHandler);


module.exports = activitiesRouter;