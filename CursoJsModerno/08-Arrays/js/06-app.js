const carrito = [];

const producto = {
    precio: 400,
    nombre: "Monitor"
}

const producto2 = {
    precio: 700,
    nombre: "Celular"
}


// Esta forma de crearlo es para no modificar el carrito, sino guardarlo en una variable diferente
let resultado;

resultado = {...carrito, producto}

console.log(resultado)