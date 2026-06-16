//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../../src/controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/',
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Registrar una nueva transacción'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Transaccion' }
    }
    */
    transaccionCtrl.createTransaccion); //dar de alta una transaccion


router.get('/',
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Obtener todas las transacciones'
    */
    transaccionCtrl.getTransaccion); //recuperar todas las transacciones


router.get('/cliente/:emailCliente',
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Obtener historial de transacciones de un cliente'
    #swagger.parameters['emailCliente'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    */
    transaccionCtrl.getTransaccionCliente); //Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave


router.get('/idioma/:origen/:destino',
    /*
    #swagger.tags = ['Transaccion']
    #swagger.summary = 'Buscar transacciones por idiomas'
    #swagger.parameters['origen'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    #swagger.parameters['destino'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    */
    transaccionCtrl.getTransaccionIdioma);


//exportamos el modulo de rutas
module.exports = router;