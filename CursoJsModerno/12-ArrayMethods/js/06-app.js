const { provide } = require("vue")

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// every retorna true solo en caso de que todos los elementos del arreglo cumplan con la condicion

const resultado = carrito.every ( producto => producto.precio < 1000 )
console.log(resultado);