const carrito = [
    { nombre: 'monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 500 },
    { nombre: 'Celular', precio:  300},
    { nombre: 'Tablet', precio:  800},
    { nombre: 'Audifonos', precio:  1000},
]

// Iterar sobre un arreglo con forEach

for(let i = 0 ; i <  carrito.length ; i++) {
    console.log(carrito[i])
}

// producto seria cada uno, carrito el prural, producto cada uno
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
} )

//Funcionan igual