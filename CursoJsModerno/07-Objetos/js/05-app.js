const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
    informacion : {
        peso: "1kg",
        medida: "1m"
    }
}

// De esta manera podemos crear un objeto dentro de otro objeto, se puede hacer tan complejo como queramos

console.log(producto.informacion.medida)