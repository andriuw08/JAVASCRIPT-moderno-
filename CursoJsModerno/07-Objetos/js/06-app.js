const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
    informacion : {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais: 'China'
        }
    }
}

const { nombre, informacion, informacion: {fabricacion, fabricacion: { pais } } } = producto;

console.log(informacion);
console.log(fabricacion);
console.log(pais);

// De esta manera hacemos una destructuracion de cuando tenemos mas de un objeto adentro de un objeto
