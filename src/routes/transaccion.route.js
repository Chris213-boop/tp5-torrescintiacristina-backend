//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../../src/controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/', transaccionCtrl.createTransaccion); //dar de alta una transaccion
router.get('/', transaccionCtrl.getTransaccion); //recuperar todas las transacciones
router.get('/:emailCliente', transaccionCtrl.getTransaccionCliente); //Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
router.get('/:origen/:destino', transaccionCtrl.getTransaccionIdioma);


//exportamos el modulo de rutas
module.exports = router;