const express = require('express');
const router = express.Router();
const { getConsultas, createConsultas, deleteConsultas } = require('../controllers/consultasController');
const consultasValidation = require('../validations/consultasValidation');

// Crear mensaje
router.post('/', consultasValidation.createConsultas, createConsultas);
router.get('/', getConsultas);
router.delete('/:id', deleteConsultas);

module.exports = router;
