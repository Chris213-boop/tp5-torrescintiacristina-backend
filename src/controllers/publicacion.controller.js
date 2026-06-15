const Empleado = require('../models/empleado.model');
const Publicacion = require('./../../src/models/publicacion.model'); // Asegúrate de usar la ruta correcta a tu modelo
const publicacionCtrl = {};
const { Op } = require("sequelize");

// Crear una nueva publicacion
publicacionCtrl.createPublicacion = async (req, res) => {
    try {
        const data = req.body;

        if (data.propietario && data.propietario.id) {
            data.propietarioId = data.propietario.id; //Asignar el ID del responsable al campo correspondiente
        }
        // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Publicacion.create(data);
        res.json({ status: '1', msg: 'Publicacion guardada.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};


// Obtener todos las publicaciones
publicacionCtrl.getPublicacion = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({
            include: [{
                model: Empleado,
                as: 'propietario'
            }]
        });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las publicaciones.' });
    }
};

//Eliminar una publicacion
publicacionCtrl.deletePublicacion = async (req, res) => {
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if (publicacion) {
            await publicacion.destroy();
            res.status(200).json({status: '1', msg: 'Publicacion eliminada'});
        } else {
            res.status(404).json({status: '0', msg: 'Publicacion no encontrada'});
        }
    } catch (error){
        res.status(500).json({message: 'Error al eliminar la publicacion', error: error.message});
    }
}

publicacionCtrl.editPublicacion = async (req, res) => {
    const data = req.body;
    try {
        const publicacion = await Publicacion.findByPk(req.params.id);
        if (publicacion) {
            if (data.propietario && data.propietario.id) {
                data.propietarioId = data.propietario.id;
            }
            await publicacion.update(data);
            res.status(200).json({ status: '1', msg: 'Publicacion actualizada.' });
        } else {
            res.status(404).json({status: '0', msg: 'Publicacion no encontrada.'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la publicacion.', error: error.message });
    }

}


// Obtener todos las publicaciones
publicacionCtrl.getPublicacionCondiciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({
            where: {
                titulo: {
                    [Op.like]: `%${req.params.titulo}%`,
                },
                vigente: req.params.vigente
            },
            include: [{
                model: Empleado,
                as: 'propietario'
            }]
        });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las publicaciones.' });
    }
};

module.exports = publicacionCtrl;