// Como crear funciones dentro de objetos

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproducir cancion con el di ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    borrar: function(id){
        console.log(`Borrando la cancion... ${id}`)
    },
    agregar: function(nombre){
        console.log(`Agregando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(id, nombre){
        console.log(`Reproduciendo la cancion: ${id} de la playlist ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.borrar(30)
reproductor.agregar('Playlist')
reproductor.reproducirPlaylist(5, 'Playlist')