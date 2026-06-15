//defino controlador para el manejo de CRUD
const empleadoCtrl = require('./../../src/controllers/empleado.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/', empleadoCtrl.createEmpleado);
router.get('/', empleadoCtrl.getEmpleado);
router.get('/:id', empleadoCtrl.getEmpleadoId)


//exportamos el modulo de rutas
module.exports = router;