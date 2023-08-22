// Objeto literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Constructor de objetos

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precios = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 20 pulgadas', 500);
console.log(producto2)

const producto3 = new Producto('Television', 100);
console.log(producto3)