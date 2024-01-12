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

// Heredar

class Empresa extends Cliente { // Ahora empresa es un hijo de Cliente, la cual heresa todos los atributos y metodos
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo) // hay que colocar la funcion super para pode heredar atributos del constructor padre
        this.telefono = telefono
        this.categoria = categoria
    }

    static bienvenida() { // Si creamos una funcion con el mismo nombre del constructor padre lo que hace es sobreescribirla
        return `Biendenido al cajero de empresas`
    }
}

const juan = new Cliente('juan', 300)
const empresa = new Empresa('Codigo con juan', 500, 24554443, 'Aprendizaje en LInea')
console.log(empresa.mostrarInformacion())
console.log(Cliente.bienvenida())
console.log(Empresa.bienvenida())