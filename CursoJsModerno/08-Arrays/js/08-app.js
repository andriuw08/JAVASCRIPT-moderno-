const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

const { nombre } = producto 
console.log(nombre)

// Destructuracion con arreglos

// const numeros = [10, 20, 30, 50]
// const [primero] = numeros
// console.log(primero)

// El nombre no importa pero cada uno de los nombres que coloquemos sera una posicion
// const [, , tercero] = numeros
// se colocan vacios para no tomarlos, en caso de que los queramos colocamos los prmeros nombres
// console.log(tercero)

// Colocamos lo que sobra en el mismo valor, con ...
const [ primero, segundo, ...tercero] = numeros
console.log(tercero)
