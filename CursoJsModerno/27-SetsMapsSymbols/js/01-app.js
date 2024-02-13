// Los sets permite crear listas de valores sin tener elementos duplicados

const carrito = new Set()

// set methods

carrito.add('Camisa') // De esta manera agregamos un elemento a nuestra lista de carrito
carrito.add('disco1')
carrito.add('disco2')
carrito.add('Camisa') // Este valor no se agrega a la lista ya que es un valor repetido

console.log(carrito.size) //esto nos va a devolver el tamaño de la lista
console.log(carrito.has('Camisa')) //  de esta manera vemos si existe el valor adentro de la lista
console.log(carrito.delete('disco1')) // de esta manera elimino un valor de nuestra lista 
carrito.clear() // elimina todos los elementos del carrito

carrito.forEach(producto => { // los setters son iterables
    console.log(producto)
})

console.log(carrito) 

// manera de eliminar duplicados de un arreglo

const numero = [10, 20, 30, 40, 50, 60, 10, 20]
const noDuplicados = new Set(numeros) // esta es una manera de agarrar los valores duplicados y eliminarlos simplemente transformando a un set
