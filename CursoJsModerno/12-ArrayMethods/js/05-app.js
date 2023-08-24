const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Find es como findIndex pero crea un nuevo arrego en base a lo que estamos buscando 

let resultado = ''
resultado = carrito.find( producto => producto.nombre === 'Tablet' )
console.log(resultado)
// Devuelve solo el primer elemento que cumple la condicion
