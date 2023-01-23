require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();

// Configurar CORS
app.use( cors() );

// Base de datos
dbConnection();

// DB_USER: mean_user
// DB_PASSWORD: vqvHww35vjBKYhJ8

// Rutas
app.get('/', (req, res) => {

    res.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    });

});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});