// los prototipos son funciones que se pueden utilizar en objetos dependiento del tipo de objeto que sea 
// es una buena manera para saber cuales son las funciones que estan afectando a un objeto

// obeto literal no reutilizable
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

// objeto reutilizable y dinamico
function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

const juan = new Cliente('Juan', 500)