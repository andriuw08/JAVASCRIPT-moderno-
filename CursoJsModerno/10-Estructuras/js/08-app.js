const puntaje = 350;

revisarPuntaje = () => {
    if ( puntaje > 400 ) {
        console.log("Es un puntaje excelente")
        return;
    }

    if ( puntaje > 300 ) {
        console.log("Es un buen puntaje")
        return;
    }
}

// Esto es para crear una funcion que nos haga las evaluaciones, el return en el if hace que si se cumple, se corte ahi y no evalue mas, es una manera de no crear muchos ciclos anidados


revisarPuntaje();