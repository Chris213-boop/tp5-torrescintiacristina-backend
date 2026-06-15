//defino controlador para el manejo de CRUD
const socioCtrl = require('./../../src/controllers/socio.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/', socioCtrl.createSocio);
router.get('/', socioCtrl.getSocio);
router.delete('/:id', socioCtrl.deleteSocio);
router.put('/:id', socioCtrl.editSocio);
router.get('/activo', socioCtrl.getSocioActivo);


//exportamos el modulo de rutas
module.exports = router;