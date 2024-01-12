// el constructor es una programacion orientada a objetos con funciones, el cual es el constructor, ahora sera con clases

class Cliente { // esto es class declaration
    constructor(nombre, saldo) { // asi se crea el constructor
        this.nombre = nombre
        this.saldo = saldo
    }
}

const juan = new Cliente('juan', 300)
console.log(juan)

const Cliente2 = class { // esta forma es llamada class expression 
    constructor(nombre, saldo) {
        this.nombre = nombre
        this.saldo = saldo
    }
}

const juan2 = new Cliente2()
console.log(juan2)