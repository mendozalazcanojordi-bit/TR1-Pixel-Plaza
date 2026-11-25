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

//El puerto sale de la variable de entorno PORT (3000 si no existe).
//Ojo: tiene que ser || y no |, que es un OR de bits (4000|3000 da 4024)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log(`Servidor funcionando en el puerto ${PORT}`);
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
