const producto = {
    nombre: "Monitor 20 pulgada",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m",
        },
        fabricacion: {
            pais: "China"
        }
    }
}

//Destructuring de objetos mas complejos
const { informacion: { fabricacion: { pais } } } = producto;

console.log(pais);