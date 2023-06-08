const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    categoria: {
        type: String,
        trim: true,
        required: true,
    },
    patente: {
        type: String,
        trim: true,
        required: true,
    },
    ganancia: {
        type: Number,
        trim: true,
    },
    tipo: {
        type: String,
        trim: true,
        required: true,
    },
    modelo: {
        type: String,
        trim: true,
        required: true,
    },
    marca: {
        type: String,
        trim: true,
        required: true,
    },
    año: {
        type: Number,
        trim: true,
        required: true,
    },
    version: {
        type: String,
        trim: true,
        required: true,
    },
    combustible: {
        type: String,
        trim: true,
        required: true,
    },
    kilometraje: {
        type: Number,
        trim: true,
        required: true,
    },
    potencia: {
        type: Number,
        trim: true,
        required: true,
    },
    transmicion: {
        type: String,
        trim: true,
        required: true,
    },
    puertas: {
        type: Number,
        trim: true,
        required: true,
    },
    traccion: {
        type: String,
        trim: true,
        required: true,
    },
    motor: {
        type: String,
        trim: true,
        required: true,
    },
    tanque: {
        type: Number,
        trim: true,
        required: true,
    },
    direccion: {
        type: String,
        trim: true,
        required: true,
    },
    permuta: {
        type: String,
        trim: true,
        required: true,
    },
    financiacion: {
        type: String,
        trim: true,
        required: true,
    },
    precio: {
        type: Number,
        trim: true,
        required: true,
    },
    imgFirst: {
        type: String,
        required: true,
    },
    imgSecond: {
        type: String,
    },
    imgThird: {
        type: String,
    },
    imgFourth: {
        type: String,
    },
    registro: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Productos', ProductosSchema);
