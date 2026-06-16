//defino controlador para el manejo de CRUD
const publicacionCtrl = require('./../../src/controllers/publicacion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de socio
router.post('/',
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Crear una publicación'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Publicacion' }
    }
*/
    publicacionCtrl.createPublicacion);

router.get('/',
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Obtener todas las publicaciones'
*/
    publicacionCtrl.getPublicacion);

router.delete('/:id',
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Eliminar una publicación'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
*/
    publicacionCtrl.deletePublicacion);

router.put('/:id',
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Modificar una publicación'
    #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: { $ref: '#/definitions/Publicacion' }
    }
*/
    publicacionCtrl.editPublicacion);

router.get('/:titulo/:vigente',
    /*
    #swagger.tags = ['Publicacion']
    #swagger.summary = 'Buscar publicaciones por título y vigencia'
    #swagger.parameters['titulo'] = {
        in: 'path',
        required: true,
        type: 'string'
    }
    #swagger.parameters['vigente'] = {
        in: 'path',
        required: true,
        type: 'boolean'
    }
*/
    publicacionCtrl.getPublicacionCondiciones);


//exportamos el modulo de rutas
module.exports = router;