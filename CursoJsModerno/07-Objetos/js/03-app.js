const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

console.log(producto);

// Como agregar nuevas propiedades al objeto
producto.imagen = "imagen.png";

//Eliminar propiedades del objeto
delete producto.disponible;