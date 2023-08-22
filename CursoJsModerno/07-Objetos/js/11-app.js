const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log('El Producto: ${this.nombre} tiene un precio de: ${this.precio}')
    } 
}

producto.mostrarInfo();

//This se usa para que pueda buscar valores adentro del mismo objeto y no afuera