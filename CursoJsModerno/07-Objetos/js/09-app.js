"use strict";
// Al utilizar el modo estricto hace que tengamos que seguir correctamente los parametros de programacion

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

Object.seal( producto );
// Esto sella el objeto, podemos editar algo en el objeto mas no borrar ni agregar

console.log(Object.isSealed(producto));
// Esto nos dira si el objeto esta sellado




