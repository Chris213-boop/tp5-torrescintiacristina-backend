const Transaccion = require('./../../src/models/transaccion.model'); // Asegúrate de usar la ruta correcta a tu modelo
const transaccionCtrl = {};

// Crear un nuevo socio
transaccionCtrl.createTransaccion = async (req, res) => {
    try {
        // Sequelize usa .create() para instanciar y guardar en un solo paso
        await Transaccion.create(req.body);
        res.json({ status: '1', msg: 'Transaccion guardada.' });
    } catch (error) {
        res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
    }
};


// Obtener todas las transacciones
transaccionCtrl.getTransaccion = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones.' });
    }
};

// Obtener todas las transacciones de un cliente determinado
transaccionCtrl.getTransaccionCliente = async (req, res) => {
    try {
        const email = req.params.emailCliente;
        const transacciones = await Transaccion.findAll({
            where: {
                emailCliente: email
            }
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones.' });
    }
};

// Obtener todas las transacciones de un idioma determinado
transaccionCtrl.getTransaccionIdioma = async (req, res) => {
    try {
        const transacciones = await Transaccion.findAll({
            where: {
                idiomaOrigen: req.params.origen,
                idiomaDestino: req.params.destino
            }
        });
        /* if (transacciones == []) {
            res.status(404).json({ status: '0', msg: 'No hay transacciones que cumplan con los idiomas solicitados.' });
        } */
        res.json(transacciones);

    } catch (error) {
        res.status(500).json({ status: '0', msg: 'Error al obtener las transacciones.' });
    }
};

module.exports = transaccionCtrl;