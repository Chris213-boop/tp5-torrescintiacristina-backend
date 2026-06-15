const Empleado = require('./../../src/models/empleado.model'); // Asegúrate de usar la ruta correcta a tu modelo
const empleadoCtrl = {};

// Crear un nuevo socio
empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Empleado.create(req.body);
        res.json({ status: '1', msg: 'Empleado guardado.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};


// Obtener todos los socios
empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findAll();
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener los empleados.' });
    }
};

// Obtener un agente por ID
empleadoCtrl.getEmpleadoId = async (req, res) => {
    try {
        // Buscamos por la clave primaria (id numérico)
        const empleado = await Empleado.findByPk(req.params.id);
        if (!empleado) {
            return res.status(404).json({ status: '0', msg: 'Empleado no encontrado.' });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener el empleado.' });
    }
};

module.exports = empleadoCtrl;