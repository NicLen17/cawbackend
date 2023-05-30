const { validationResult } = require('express-validator');
const Consultas = require('../models/Consultas');

exports.createConsultas = async (req, res) => {
    //  revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores.array()[0]);
    }
    try {
        //nuevo mensaje
        let consulta = new Consultas(req.body);
        //guardar producto
        await consulta.save();
        res.send(consulta);
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Hubo un error al mandar la consulta' });
    }
};

exports.getConsultas = async (req, res) => {
    try {
        const consultas = await Consultas.find();
        res.send(consultas);
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Hubo un error al traer las consultas' });
    }
};

exports.deleteConsultas = async (req, res) => {
    try {
        await Consultas.findByIdAndRemove(req.params.id);
        res.send('Consulta Eliminada');
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al eliminar la consulta' });
    }
};
