class Cliente { // esto es class declaration
    constructor(nombre, saldo) { // asi se crea el constructor
        this.nombre = nombre
        this.saldo = saldo
    }

    mostrarInformacion() { // asi se crear las funciones unicas de las clases
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida() { // las estaticas solo se pueden llamar desde el objeto, no desde la propiedad
        return `Biendenido al cajero`
    }
}

const juan = new Cliente('juan', 300)
console.log(juan.mostrarInformacion())
console.log(Cliente.bienvenida())