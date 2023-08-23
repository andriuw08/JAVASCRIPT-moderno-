iniciarApp();

function iniciarApp() {
    console.log('Iniciar app')
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Andriuw')
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...')
    console.log(`Usuario autenticado: ${usuario}`)
}

// Esta es una manera de comunicar las funciones, llamando una dentro de otra