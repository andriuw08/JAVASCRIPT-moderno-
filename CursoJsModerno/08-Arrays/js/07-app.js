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

// Eliminar ultimo elemento de un arreglo
carrito.pop();

console.table(carrito)

//Elimina el primer elemento 

carrito.shift()
console.table(carrito)

//Elimina una posicion especifica
carrito.splice(1, 1)
// El primero es la posicion y el segundo cuantos quieres eliminar a partir de esa posicion
console.table(carrito)