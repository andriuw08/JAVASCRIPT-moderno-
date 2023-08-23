const carrito = [
    { nombre: 'monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 500 },
    { nombre: 'Celular', precio:  300},
    { nombre: 'Tablet', precio:  800},
    { nombre: 'Audifonos', precio:  1000},
]


const nuevoArreglo = carrito.map( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo)

// Ahora en estos metodos que usan funciones podemos usar arrow functions para que tenga una mejor sintaxis
// Si queremos hacerlo incluso mas corto podemos usar las otras reglas

const nuevoArreglo2 = carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}`)