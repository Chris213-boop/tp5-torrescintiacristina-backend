const Socio = require('./../../src/models/socio.model'); // Asegúrate de usar la ruta correcta a tu modelo
const socioCtrl = {};

// Crear un nuevo socio
socioCtrl.createSocio = async (req, res) => {
    try {
        // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Socio.create(req.body);
        res.json({ status: '1', msg: 'Socio guardado.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};


// Obtener todos los socios
socioCtrl.getSocio = async (req, res) => {
    try {
        const socios = await Socio.findAll();
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los socios.' });
    }
};

// Eliminar un socio
socioCtrl.deleteSocio = async (req, res) => {
    try {
        // .destroy() elimina el registro que coincida con el ID enviado por parámetro
        await Socio.destroy({
            where: { id: req.params.id }
        });
        res.json({ status: '1', msg: 'Socio removed' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
};

// Editar un socio
socioCtrl.editSocio = async (req, res) => {
    const data = req.body;
    try {
        const socios = await Socio.findByPk(req.params.id);
        if (socios) {
            if (data.responsable && data.responsable.id) {
                data.responsableId = data.responsable.id;
            }
            await socios.update(data);
            res.status(200).json({ status: '1', msg: 'Socio actualizado' });
        } else {
            res.status(404).json({ status: '0', msg: 'Socio no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualiza socio', error: error.message });
    }
};

// Obtener los socios activos
socioCtrl.getSocioActivo = async (req, res) => {
    try {
        const socios = await Socio.findAll(
            {
                where: {
                    activo: true
                }
            }
        );
        res.json(socios);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los socios activos.' });
    }
};

module.exports = socioCtrl;