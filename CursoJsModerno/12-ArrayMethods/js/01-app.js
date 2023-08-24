const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si existe un valor en el arreglo

const resultado = meses.includes('Enero'); // De esta manera podemos revisar si existe o no y guardarlo en una varibale
// esto sin tener que hacer un forEach, if, etc
// Esto sirve solo para cuando es un arreglo de valores
console.log(resultado)

const resultado2 = carrito.some((producto) => {
    return producto.nombre === 'Celular'
})
console.log(resultado2)
// Esta manera es para evaluar si es un arreglo de objetos, devuelve true en caso de que el producto.nombre sea igual a celular

