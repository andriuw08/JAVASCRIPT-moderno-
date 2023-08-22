const carrito = [];

const producto = {
    precio: 400,
    nombre: "Monitor"
}

//Agregar al final del arreglo
carrito.push(producto)
console.table(carrito)

const producto2 = {
    precio: 700,
    nombre: "Celular"
}

//Agregar al comienzo del arreglo
carrito.unshift(producto2)
console.table(carrito)