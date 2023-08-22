const carrito = [
    { nombre: 'monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 500 },
    { nombre: 'Celular', precio:  300},
    { nombre: 'Tablet', precio:  800},
    { nombre: 'Audifonos', precio:  1000},
]

// producto seria cada uno, carrito el prural, producto cada uno
const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo)

//Funciona igual al forEach, pero el map crea un nuevo arreglo,en base al otro, forEach no