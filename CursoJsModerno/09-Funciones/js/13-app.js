// Practica de transformacion a arrow functions, del 09 

const reproductor = {
    reproducir: id => console.log(`Reproducir cancion con el di ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando la cancion... ${id}`),
    agregar: nombre => console.log(`Agregando la playlist: ${nombre}`),
    reproducirPlaylist: (id, nombre) => console.log(`Reproduciendo la cancion: ${id} de la playlist ${nombre}`),
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Cancion'
reproductor.obtenerCancion;

//El set y el get son maneras diferentes de enviar u obtener valores, tambien muy usados

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.agregar('Playlist')
reproductor.reproducirPlaylist(5, 'Playlist')