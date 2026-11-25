// Importar dependencias para crear y configurar el servidor
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { Socket } = require('dgram');

//Creo la aplicacion de Express y el servidor HTTP
//Socket usara este mismmo servidor para gestionar 
//las conexiones en teimpo real
const app = express();
const server = http.createServer(app);

//Configuro CORS para que el frontend se pueda
//comunicar con el backend asi vue y node se pueden
//ejecutar en puertos diferentes
app.use(cors());

//Creo el servidor de Socket asociado al server http
//Durante el desarrollo aceptamos cualquier origen
// (Deberiamos limitarlo en produccion)
const io = new Server(server, {
cors: {
origin: '*',
methods: ['GET', 'POST']
}
});

//El puerto escuchara puerto 3000
server.listen(process.env.PORT|3000, () => {
console.log('Servidor funcionando en el puerto 3000');
});

//Gestion de conexiones de jugadores
//Socket.IO ejecuta la funcion por navegador conectado al server
io.on('connection', (socket) => {
    console.log('Jugador conectado: ', socket.id)

    //Detectamos cunado un jugador pierde la conexion
    socket.on('disconnect', () => {
        console.log('Jugador desconectado:', socket.id);

        //Avisamos a todos los clientes de quien se ha desconectado
        io.emit('jugadorDesconectado', socket.id);
    });
})
