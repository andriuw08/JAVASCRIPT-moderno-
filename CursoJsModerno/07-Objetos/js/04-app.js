const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

// const nombre = producto.nombre
// console.log(nombre)

const { nombre } = producto // esto es para extraer un atributo del objeto
console.log(nombre)