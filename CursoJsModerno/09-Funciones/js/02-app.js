// Manera 1, declaracion de funcion

function sumar() {
    console.log( 2 + 2 )
}

sumar();

// Manera 2, expresion de funcion

const sumar2 = function() {
    console.log( 3 + 3 )
}

sumar2();

// La diferencia es que la manera 1, la declaracion de la funcion se puede llamar y utilizar antes de crearla
// Pero la segunda manera no