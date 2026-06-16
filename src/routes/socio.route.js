//defino controlador para el manejo de CRUD
const socioCtrl = require('./../../src/controllers/socio.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio


router.post('/',
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Crear un nuevo socio'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Socio' }
    }
    */
    socioCtrl.createSocio);


router.get('/',
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Obtener todos los socios'
    */
    socioCtrl.getSocio);


router.delete('/:id',
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Eliminar un socio'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    */
    socioCtrl.deleteSocio);


router.put('/:id',
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Modificar un socio'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Socio' }
    }
    */
    socioCtrl.editSocio);


router.get('/activo',
    /*
    #swagger.tags = ['Socio']
    #swagger.summary = 'Obtener socios activos'
    */
    socioCtrl.getSocioActivo);


//exportamos el modulo de rutas
module.exports = router;