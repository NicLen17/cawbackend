const mongoose = require('mongoose');
const ConsultasSchema = mongoose.Schema({
    nombreyapellido: {
        type: String,
        required: true,
        trim: true,
    },
    tel: {
        type: Number,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    mensaje: {
        type: String,
        required: true,
        trim: true,
    },
    producto: {
        type: String,
        required: true,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Consultas', ConsultasSchema);
