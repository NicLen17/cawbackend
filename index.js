// Importación de móduloss
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const usuarioRoute = require('./routes/usuarioRoute');
const authRoute = require('./routes/authRoute');
const productosRoute = require('./routes/productosRoute');
const mensajesRouter = require('./routes/mensajesRoute');
const consultasRouter = require('./routes/consultasRoute');

// Conectar a mongodb
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('Conectado a mongo DB'))
    .catch((err) => console.log('No se conecto a la DB', err));

// crear el servidor
const app = express();

app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Configurar logs de morgan
app.use(morgan('dev'));

//importar rutas
app.use('/api/usuarios', usuarioRoute);
app.use('/api/auth', authRoute);
app.use('/api/productos', productosRoute);
app.use('/api/mensajes', mensajesRouter);
app.use('/api/consultas', consultasRouter);

// puerto y arranque del servidor
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor Funcionando');
});
