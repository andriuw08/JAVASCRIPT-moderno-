const producto = {
    nombre: "Monitor 20 pulgada",
    precio: 300,
    disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedad del objeto
delete producto.disponible;

console.log(producto);
