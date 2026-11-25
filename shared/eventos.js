// Nombres de los eventos utilizados para la comunicación
// entre el frontend y el backend.

const EVENTOS = {
    REGISTRAR_JUGADOR: 'registrarJugador',
    JUGADOR_CONECTADO: 'jugadorConectado',
    LISTA_JUGADORES: 'listaJugadores',
    JUGADOR_DESCONECTADO: 'jugadorDesconectado'
};

// Exportamos las constantes para que otros archivos
// puedan utilizarlas.
module.exports = EVENTOS;

//Importar evento desde VUE -- import EVENTOS from './shared/eventos.js';