const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Reduce sirve para tomar una gran cantidad de datos, unirlos y entregar un solo resultado


let resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0)
console.log(resultado);