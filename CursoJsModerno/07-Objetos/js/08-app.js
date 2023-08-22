"use strict";
// Al utilizar el modo estricto hace que tengamos que seguir correctamente los parametros de programacion

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

Object.freeze( producto );
// Este object method hace que no podamos modificar el objeto, ni agregar, ni borrar, hace que el objeto quede congelado en la manera en la que fue creada

console.log(Object.isFrozen(producto));
// Esto nos dira si el objeto esta congelado




