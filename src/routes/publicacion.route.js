//defino controlador para el manejo de CRUD
const publicacionCtrl = require('./../../src/controllers/publicacion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/', publicacionCtrl.createPublicacion);
router.get('/', publicacionCtrl.getPublicacion);
router.delete('/:id', publicacionCtrl.deletePublicacion);
router.put('/:id', publicacionCtrl.editPublicacion);
router.get('/:titulo/:vigente', publicacionCtrl.getPublicacionCondiciones);


//exportamos el modulo de rutas
module.exports = router;